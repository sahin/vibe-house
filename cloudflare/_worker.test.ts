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
