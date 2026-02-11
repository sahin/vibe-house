import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { insertApplication } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

const founderTypeLabels: Record<string, string> = {
  exited_founder: "Exited Founder",
  pef_member: "PEF Member",
  superfounders_member: "Superfounders Member",
  technical_founder: "Technical Founder",
  other: "Other",
};

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  application: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required").max(255),
          email: z.string().email("Valid email is required").max(320),
          phone: z.string().max(50).optional(),
          linkedinUrl: z
            .string()
            .url("Must be a valid URL")
            .max(500)
            .optional()
            .or(z.literal("")),
          founderType: z.enum([
            "exited_founder",
            "pef_member",
            "superfounders_member",
            "technical_founder",
            "other",
          ]),
          additionalNotes: z.string().max(2000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        await insertApplication({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone || null,
          linkedinUrl: input.linkedinUrl || null,
          founderType: input.founderType,
          additionalNotes: input.additionalNotes || null,
        });

        // Notify owner of new application
        const typeLabel =
          founderTypeLabels[input.founderType] || input.founderType;
        try {
          await notifyOwner({
            title: `New Vibe House Application: ${input.fullName}`,
            content: [
              `**Name:** ${input.fullName}`,
              `**Email:** ${input.email}`,
              input.phone ? `**Phone:** ${input.phone}` : null,
              input.linkedinUrl ? `**LinkedIn:** ${input.linkedinUrl}` : null,
              `**Type:** ${typeLabel}`,
              input.additionalNotes
                ? `**Notes:** ${input.additionalNotes}`
                : null,
            ]
              .filter(Boolean)
              .join("\n"),
          });
        } catch (err) {
          console.warn("[Application] Failed to send owner notification:", err);
        }

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
