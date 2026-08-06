import { describe, it, expect } from "vitest";

describe("Accommodation", () => {
  it("VITE_ACCOMMODATION_PASSWORD env is set", () => {
    const pw = process.env.VITE_ACCOMMODATION_PASSWORD;
    expect(pw).toBeDefined();
    expect(typeof pw).toBe("string");
    expect(pw!.length).toBeGreaterThan(0);
  });

  it("rooms list API returns seeded rooms", async () => {
    const res = await fetch("http://localhost:3000/api/trpc/accommodation.rooms.list");
    expect(res.ok).toBe(true);
    const body = await res.json();
    const rooms = body.result.data.json;
    expect(rooms.length).toBe(6);
    expect(rooms[0].name).toBe("Portola Ave - South");
    expect(rooms[5].name).toBe("First Floor");
  });

  it("bookings list API returns bookings", async () => {
    const res = await fetch('http://localhost:3000/api/trpc/accommodation.bookings.list?input=%7B%22json%22%3A%7B%22filter%22%3A%22all%22%7D%7D');
    expect(res.ok).toBe(true);
    const body = await res.json();
    expect(body.result.data.json.length).toBeGreaterThanOrEqual(30);
  });

  it("updateDates mutation endpoint exists", async () => {
    // Test that the endpoint responds (even with invalid input it should return a tRPC error, not 404)
    const res = await fetch("http://localhost:3000/api/trpc/accommodation.bookings.updateDates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ json: { id: 999999, checkIn: "2026-01-01", checkOut: "2026-01-05" } }),
    });
    // Should get a response (not 404) — the mutation exists
    expect(res.status).not.toBe(404);
  });
});
