import { beforeEach, describe, expect, it, vi } from "vitest";
import worker from "./_worker";

const endpoint = "https://www.sfvibehouse.com/api/trpc/application.submit";
const env = {
  ASSETS: { fetch: vi.fn() },
  AIRTABLE_API_TOKEN: "test-token",
  AIRTABLE_BASE_ID: "appTEST123",
  AIRTABLE_TABLE_ID: "tblTEST456",
  BUILT_IN_FORGE_API_URL: "",
  BUILT_IN_FORGE_API_KEY: "",
};

function submit() {
  return worker.fetch(new Request(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ json: {
      fullName: "Jane Doe",
      email: "jane@example.com",
      founderType: "exited_founder",
    } }),
  }), env);
}

describe("Cloudflare application submission", () => {
  beforeEach(() => vi.restoreAllMocks());

  it("does not confirm an application when Airtable configuration is missing", async () => {
    const response = await worker.fetch(new Request(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ json: {
        fullName: "Jane Doe", email: "jane@example.com", founderType: "exited_founder",
      } }),
    }), { ...env, AIRTABLE_API_TOKEN: "" });

    expect(response.ok).toBe(false);
    expect((await response.text())).toContain("We couldn't save your application");
  });

  it("does not confirm an application when Airtable rejects it", async () => {
    const mockFetch = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ error: "AUTHENTICATION_REQUIRED" }), { status: 401 }
    ));

    const response = await submit();
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(response.ok).toBe(false);
    expect((await response.text())).toContain("We couldn't save your application");
  });

  it("confirms only after Airtable creates a record", async () => {
    const mockFetch = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(new Response(
      JSON.stringify({ id: "recSAVED123" }), { status: 200 }
    ));

    const response = await submit();
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(response.ok).toBe(true);
    expect((await response.json()).result.data.json).toEqual({ success: true, airtableSynced: true });
  });
});
