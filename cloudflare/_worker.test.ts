import { beforeEach, describe, expect, it, vi } from "vitest";
import worker from "./_worker";

const endpoint = "https://www.sfvibehouse.com/api/trpc/application.submit";
const env = {
  ASSETS: { fetch: vi.fn() },
  BUILT_IN_FORGE_API_URL: "",
  BUILT_IN_FORGE_API_KEY: "",
};

function submit() {
  return worker.fetch(new Request(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", cookie: "private=value" },
    body: JSON.stringify({ json: {
      fullName: "Jane Doe",
      email: "jane@example.com",
      founderType: "exited_founder",
    } }),
  }), env);
}

describe("Cloudflare application submission proxy", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("proxies the read-only Airtable health check without creating a record", async () => {
    const mockFetch = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ result: { data: { json: {
        connected: true,
        baseId: "appqVucbI0ROcWtt5",
        tableId: "tblPBZuARXwzRFoN7",
      } } } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    ));

    const response = await worker.fetch(new Request(
      "https://www.sfvibehouse.com/api/trpc/application.airtableHealth"
    ), env);
    expect(mockFetch.mock.calls[0][0]).toBe(
      "https://sfvibehouse.manus.space/api/trpc/application.airtableHealth"
    );
    expect(mockFetch.mock.calls[0][1]?.method).toBeUndefined();
    expect((await response.json()).result.data.json.connected).toBe(true);
  });

  it("forwards the application to the canonical backend and returns its result", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ result: { data: { json: { success: true, airtableSynced: true } } } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    ));

    const response = await submit();
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe("https://sfvibehouse.manus.space/api/trpc/application.submit");
    expect(options?.method).toBe("POST");
    expect(options?.headers).toEqual({ "Content-Type": "application/json" });
    expect(options?.body).toContain("jane@example.com");
    expect(response.status).toBe(200);
    expect((await response.json()).result.data.json).toEqual({ success: true, airtableSynced: true });
  });

  it("does not turn an Airtable failure into success", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ result: { data: { json: { success: true, airtableSynced: false } } } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    ));

    const response = await submit();
    expect((await response.json()).result.data.json.airtableSynced).toBe(false);
  });

  it("passes the backend validation error through without claiming success", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ error: { message: "Invalid input" } }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    ));

    const response = await submit();
    expect(response.status).toBe(400);
    expect((await response.json()).error.message).toBe("Invalid input");
  });

  it("fails closed if the backend is unreachable", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("Network unavailable"));

    const response = await submit();
    expect(response.status).toBe(502);
    expect((await response.json()).error.message).toContain("backup form");
  });
});

describe("Luma events endpoint", () => {
  beforeEach(() => vi.restoreAllMocks());

  const vevent = (o: {
    summary: string;
    start: string;
    end: string;
    slug?: string;
    status?: string;
    location?: string;
  }) =>
    [
      "BEGIN:VEVENT",
      `DTSTART:${o.start}`,
      `DTEND:${o.end}`,
      'ORGANIZER;CN="Private Host":MAILTO:calendar-invite@lu.ma',
      `SUMMARY:${o.summary}`,
      `DESCRIPTION:Get up-to-date information at: ${o.slug ? `https://luma.com/${o.slug}` : "nothing"}\\n\\nHosted by Private Host`,
      `LOCATION:${o.location ?? "https://luma.com/event/evt-abc"}`,
      "GEO:37.7;-122.4",
      `STATUS:${o.status ?? "TENTATIVE"}`,
      "END:VEVENT",
    ].join("\r\n");
  const calendar = (...events: string[]) =>
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Luma//Vibe House//EN",
      ...events,
      "END:VCALENDAR",
    ].join("\r\n");

  it("returns only upcoming events, sorted, with nothing but name, times and link", async () => {
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        calendar(
          vevent({
            summary: "Vibe Night Demos (#34)",
            start: "20991219T020000Z",
            end: "20991219T050000Z",
            slug: "demo-34",
          }),
          vevent({
            summary: "Old Technical Thursdays",
            start: "20000101T020000Z",
            end: "20000101T050000Z",
            slug: "old",
          }),
          vevent({
            summary: "Cancelled night",
            start: "20991201T020000Z",
            end: "20991201T050000Z",
            slug: "x",
            status: "CANCELLED",
          }),
          // A long title folded over two lines, as Luma's feed does.
          vevent({
            summary:
              "Legal AI Vibe Lab #7: Agents, Workflows, and the Future of Legal W\r\n ork",
            start: "20991217T020000Z",
            end: "20991217T060000Z",
            slug: "legal-ai",
          }),
          vevent({
            summary: "Vibe Night Demos (#33)",
            start: "20991212T020000Z",
            end: "20991212T050000Z",
            slug: "sfvibehouse",
          }),
          vevent({
            summary: "Local time event",
            start: "20991203T020000",
            end: "20991203T050000",
            slug: "local",
          }),
          vevent({
            summary: "Event page only",
            start: "20991205T020000Z",
            end: "20991205T050000Z",
            location: "https://luma.com/event/evt-xyz",
          })
        ),
        { status: 200, headers: { "Content-Type": "text/calendar" } }
      )
    );

    const response = await worker.fetch(
      new Request("https://www.sfvibehouse.com/api/luma-events"),
      env
    );
    expect(String(fetchMock.mock.calls[0][0])).toBe(
      "https://api.lu.ma/ics/get?entity=calendar&id=cal-XcIP6a0xjvfCbe2"
    );
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.events).toEqual([
      {
        name: "Event page only",
        start: "2099-12-05T02:00:00.000Z",
        end: "2099-12-05T05:00:00.000Z",
        url: "https://luma.com/event/evt-xyz",
      },
      {
        name: "Vibe Night Demos (#33)",
        start: "2099-12-12T02:00:00.000Z",
        end: "2099-12-12T05:00:00.000Z",
        url: "https://luma.com/sfvibehouse",
      },
      {
        name: "Legal AI Vibe Lab #7: Agents, Workflows, and the Future of Legal Work",
        start: "2099-12-17T02:00:00.000Z",
        end: "2099-12-17T06:00:00.000Z",
        url: "https://luma.com/legal-ai",
      },
      {
        name: "Vibe Night Demos (#34)",
        start: "2099-12-19T02:00:00.000Z",
        end: "2099-12-19T05:00:00.000Z",
        url: "https://luma.com/demo-34",
      },
    ]);
    expect(typeof body.checked).toBe("string");
    expect(JSON.stringify(body)).not.toMatch(/Private Host|37\.7|MAILTO/);
  });

  it("answers 502 when Luma is unreachable or not a calendar, so the page keeps its built-in copy", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(globalThis, "fetch")
      .mockRejectedValueOnce(new Error("network down"))
      .mockResolvedValueOnce(new Response("<!doctype html>", { status: 200 }));
    for (let i = 0; i < 2; i++) {
      const response = await worker.fetch(
        new Request("https://www.sfvibehouse.com/api/luma-events"),
        env
      );
      expect(response.status).toBe(502);
      expect(response.headers.get("Cache-Control")).toBe("no-store");
    }
  });

  it("rejects anything but GET", async () => {
    const response = await worker.fetch(
      new Request("https://www.sfvibehouse.com/api/luma-events", {
        method: "POST",
      }),
      env
    );
    expect(response.status).toBe(405);
  });
});
