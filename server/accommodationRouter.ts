import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { rooms, bookings } from "../drizzle/schema";
import { eq, and, gte, lt, lte, or, isNull, desc, asc, ne } from "drizzle-orm";

function toDate(dateStr: string): Date {
  // Parse YYYY-MM-DD as UTC date
  return new Date(dateStr + "T00:00:00.000Z");
}

function todayDate(): Date {
  const now = new Date();
  return new Date(now.toISOString().split("T")[0] + "T00:00:00.000Z");
}

export const accommodationRouter = router({
  rooms: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      return db.select().from(rooms).orderBy(rooms.id);
    }),
  }),

  bookings: router({
    list: publicProcedure
      .input(
        z.object({
          filter: z.enum(["all", "current", "upcoming", "history"]).optional().default("all"),
        }).optional()
      )
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        const today = todayDate();
        const filter = input?.filter ?? "all";

        if (filter === "current") {
          // Active stays: checkIn <= today AND (checkOut >= today OR checkOut is null), exclude cancelled
          return db.select().from(bookings).where(
            and(
              lte(bookings.checkIn, today),
              or(gte(bookings.checkOut, today), isNull(bookings.checkOut)),
              ne(bookings.status, "cancelled")
            )
          ).orderBy(asc(bookings.checkIn));
        }

        if (filter === "upcoming") {
          // Check-in > today, exclude cancelled
          return db.select().from(bookings).where(
            and(
              gte(bookings.checkIn, today),
              ne(bookings.status, "cancelled")
            )
          ).orderBy(asc(bookings.checkIn));
        }

        if (filter === "history") {
          // Check-out < today, exclude cancelled
          return db.select().from(bookings).where(
            and(
              lt(bookings.checkOut, today),
              ne(bookings.status, "cancelled")
            )
          ).orderBy(desc(bookings.checkOut));
        }

        // All bookings (including cancelled for admin visibility)
        return db.select().from(bookings).orderBy(desc(bookings.createdAt));
      }),

    create: publicProcedure
      .input(
        z.object({
          roomId: z.number().int().positive(),
          guestName: z.string().min(1).max(255),
          guestEmail: z.string().email().max(320).nullable().optional(),
          checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
          checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().optional(),
          notes: z.string().max(2000).nullable().optional(),
          status: z.enum(["active", "upcoming", "completed", "cancelled"]).default("upcoming"),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        // Validate date range if both dates provided
        if (input.checkOut && input.checkOut < input.checkIn) {
          throw new Error("Check-out date must be after check-in date");
        }

        await db.insert(bookings).values({
          roomId: input.roomId,
          guestName: input.guestName,
          guestEmail: input.guestEmail ?? null,
          checkIn: toDate(input.checkIn),
          checkOut: input.checkOut ? toDate(input.checkOut) : null,
          notes: input.notes ?? null,
          status: input.status,
        });

        return { success: true } as const;
      }),

    update: publicProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          roomId: z.number().int().positive(),
          guestName: z.string().min(1).max(255),
          guestEmail: z.string().email().max(320).nullable().optional(),
          checkIn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
          checkOut: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().optional(),
          notes: z.string().max(2000).nullable().optional(),
          status: z.enum(["active", "upcoming", "completed", "cancelled"]),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        // Validate date range if both dates provided
        if (input.checkOut && input.checkOut < input.checkIn) {
          throw new Error("Check-out date must be after check-in date");
        }

        await db.update(bookings).set({
          roomId: input.roomId,
          guestName: input.guestName,
          guestEmail: input.guestEmail ?? null,
          checkIn: toDate(input.checkIn),
          checkOut: input.checkOut ? toDate(input.checkOut) : null,
          notes: input.notes ?? null,
          status: input.status,
        }).where(eq(bookings.id, input.id));

        return { success: true } as const;
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");

        await db.delete(bookings).where(eq(bookings.id, input.id));

        return { success: true } as const;
      }),
  }),
});
