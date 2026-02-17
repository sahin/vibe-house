import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock ENV
vi.mock("./_core/env", () => ({
  ENV: {
    airtableApiToken: "test-token",
    airtableBaseId: "appTEST123",
    airtableTableId: "tblTEST456",
  },
}));

// Mock global fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

import { createAirtableRecord, verifyAirtableConnection } from "./airtable";

describe("airtable", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createAirtableRecord", () => {
    it("sends correct fields to Airtable API", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "recTEST789" }),
      });

      const result = await createAirtableRecord({
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "+1 555 1234",
        linkedin: "https://linkedin.com/in/janedoe",
        founderType: "exited_founder",
        communities: ["superfounders", "pef"],
        notes: "Building an AI startup",
      });

      expect(result.id).toBe("recTEST789");
      expect(mockFetch).toHaveBeenCalledOnce();

      const [url, options] = mockFetch.mock.calls[0];
      expect(url).toBe("https://api.airtable.com/v0/appTEST123/tblTEST456");
      expect(options.method).toBe("POST");
      expect(options.headers["Authorization"]).toBe("Bearer test-token");

      const body = JSON.parse(options.body);
      expect(body.fields["Name"]).toBe("Jane Doe");
      expect(body.fields["Email"]).toBe("jane@example.com");
      expect(body.fields["Phone"]).toBe("+1 555 1234");
      expect(body.fields["LinkedIn"]).toBe("https://linkedin.com/in/janedoe");
      expect(body.fields["Founder Type"]).toBe("Exited Founder");
      expect(body.fields["Communities"]).toEqual(["Superfounders", "PEF"]);
      expect(body.fields["Notes"]).toBe("Building an AI startup");
      expect(body.fields["Status"]).toBeUndefined();
    });

    it("omits optional fields when not provided", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: "recTEST999" }),
      });

      await createAirtableRecord({
        fullName: "John Smith",
        email: "john@example.com",
        founderType: "technical_founder",
        communities: [],
      });

      const body = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(body.fields["Name"]).toBe("John Smith");
      expect(body.fields["Email"]).toBe("john@example.com");
      expect(body.fields["Founder Type"]).toBe("Technical Founder");
      expect(body.fields["Phone"]).toBeUndefined();
      expect(body.fields["LinkedIn"]).toBeUndefined();
      expect(body.fields["Communities"]).toBeUndefined();
      expect(body.fields["Notes"]).toBeUndefined();
    });

    it("throws on API error", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 422,
        text: async () => '{"error":"INVALID_REQUEST"}',
      });

      await expect(
        createAirtableRecord({
          fullName: "Test",
          email: "test@example.com",
          founderType: "other",
          communities: [],
        })
      ).rejects.toThrow("Airtable API error (422)");
    });
  });

  describe("verifyAirtableConnection", () => {
    it("returns true when API responds OK", async () => {
      mockFetch.mockResolvedValueOnce({ ok: true });
      const result = await verifyAirtableConnection();
      expect(result).toBe(true);
    });

    it("returns false when API responds with error", async () => {
      mockFetch.mockResolvedValueOnce({ ok: false });
      const result = await verifyAirtableConnection();
      expect(result).toBe(false);
    });
  });
});
