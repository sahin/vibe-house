import { beforeEach, describe, expect, it, vi } from "vitest";
import { accommodationRouter } from "./accommodationRouter";
import { getDb } from "./db";
import type { TrpcContext } from "./_core/context";
import { bookings, rooms } from "../drizzle/schema";

vi.mock("./db", () => ({ getDb: vi.fn() }));

const roomRows = [
  { id: 1, name: "Portola Ave - South" },
  { id: 2, name: "Portola Ave - North" },
  { id: 3, name: "Middle" },
  { id: 4, name: "Ocean - SF" },
  { id: 5, name: "Ocean - Bay Area" },
  { id: 6, name: "First Floor" },
];
const bookingRows = [{ id: 101, roomId: 6, guestName: "Example Guest" }];

function publicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

const orderBy = vi.fn();
const where = vi.fn(() => ({ orderBy }));
const from = vi.fn(() => ({ where, orderBy }));
const select = vi.fn(() => ({ from }));
const updateWhere = vi.fn().mockResolvedValue(undefined);
const set = vi.fn(() => ({ where: updateWhere }));
const update = vi.fn(() => ({ set }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getDb).mockResolvedValue({ select, update } as never);
  orderBy.mockImplementation(async () => from.mock.lastCall?.[0] === rooms ? roomRows : bookingRows);
});

describe("Accommodation router", () => {
  it("returns the six seeded room names from the room table", async () => {
    const result = await accommodationRouter.createCaller(publicContext()).rooms.list();
    expect(from).toHaveBeenCalledWith(rooms);
    expect(result).toEqual(roomRows);
  });

  it("returns all bookings including historical stays", async () => {
    const result = await accommodationRouter.createCaller(publicContext()).bookings.list({ filter: "all" });
    expect(from).toHaveBeenCalledWith(bookings);
    expect(result).toEqual(bookingRows);
  });

  it("applies a date filter when listing upcoming stays", async () => {
    await accommodationRouter.createCaller(publicContext()).bookings.list({ filter: "upcoming" });
    expect(from).toHaveBeenCalledWith(bookings);
    expect(where).toHaveBeenCalledOnce();
  });

  it("rejects invalid date ranges before writing a booking", async () => {
    const caller = accommodationRouter.createCaller(publicContext());
    await expect(caller.bookings.updateDates({
      id: 101, checkIn: "2026-10-05", checkOut: "2026-10-01",
    })).rejects.toThrow("Check-out date must be after check-in date");
    expect(update).not.toHaveBeenCalled();
  });

  it("updates booking dates with midnight UTC timestamps", async () => {
    const result = await accommodationRouter.createCaller(publicContext()).bookings.updateDates({
      id: 101, checkIn: "2026-10-01", checkOut: "2026-10-10",
    });
    expect(result).toEqual({ success: true });
    expect(update).toHaveBeenCalledWith(bookings);
    expect(set).toHaveBeenCalledWith({
      checkIn: new Date("2026-10-01T00:00:00.000Z"),
      checkOut: new Date("2026-10-10T00:00:00.000Z"),
    });
    expect(updateWhere).toHaveBeenCalledOnce();
  });
});
