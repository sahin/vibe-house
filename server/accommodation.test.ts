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
    expect(rooms[0].name).toBe("Front Right");
    expect(rooms[5].name).toBe("First Floor");
  });

  it("bookings list API returns empty array initially", async () => {
    const res = await fetch('http://localhost:3000/api/trpc/accommodation.bookings.list?input=%7B%22json%22%3A%7B%22filter%22%3A%22all%22%7D%7D');
    expect(res.ok).toBe(true);
    const body = await res.json();
    expect(body.result.data.json).toEqual([]);
  });
});
