/**
 * Cloudflare Pages Advanced Mode Worker
 *
 * Handles /api/trpc/* requests via tRPC fetch adapter,
 * and falls back to static assets for everything else.
 */
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

// ── Types ──

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  AIRTABLE_API_TOKEN: string;
  AIRTABLE_BASE_ID: string;
  AIRTABLE_TABLE_ID: string;
  BUILT_IN_FORGE_API_URL: string;
  BUILT_IN_FORGE_API_KEY: string;
}

// ── Airtable ──

const FOUNDER_TYPE_LABELS: Record<string, string> = {
  exited_founder: "Exited Founder",
  pef_member: "PEF Member",
  superfounders_member: "Superfounders Member",
  technical_founder: "Technical Founder",
  other: "Other",
};

const COMMUNITY_LABELS: Record<string, string> = {
  superfounders: "Superfounders",
  pef: "PEF",
  pef_ultra: "PEF Ultra",
  yc: "Y Combinator",
  tiger_21: "Tiger 21",
  eo: "EO",
  ypo: "YPO",
  longsdale: "Longsdale",
  startx: "StartX",
  inception: "Inception",
  betaworks: "Betaworks",
  other: "Other",
};

function parseUnknownFieldName(errorBody: string): string | null {
  try {
    const parsed = JSON.parse(errorBody);
    if (parsed?.error?.type === "UNKNOWN_FIELD_NAME") {
      const match = parsed.error.message?.match(
        /Unknown field name:\s*"([^"]+)"/
      );
      return match ? match[1] : null;
    }
  } catch {
    // Not valid JSON
  }
  return null;
}

async function postToAirtable(
  url: string,
  token: string,
  fields: Record<string, unknown>
): Promise<{ ok: boolean; status: number; body: string; data?: any }> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  const body = await response.text();
  let data: any;
  try {
    data = JSON.parse(body);
  } catch {
    // body is not JSON
  }

  return { ok: response.ok, status: response.status, body, data };
}

async function createAirtableRecord(
  env: Env,
  data: {
    fullName: string;
    email: string;
    phone?: string | null;
    linkedin?: string | null;
    founderType: string;
    communities: string[];
    notes?: string | null;
  }
): Promise<{ id: string; skippedFields?: string[] }> {
  if (
    !env.AIRTABLE_API_TOKEN ||
    !env.AIRTABLE_BASE_ID ||
    !env.AIRTABLE_TABLE_ID
  ) {
    throw new Error("Airtable configuration is missing");
  }

  const url = `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${env.AIRTABLE_TABLE_ID}`;
  const founderTypeLabel =
    FOUNDER_TYPE_LABELS[data.founderType] || data.founderType;
  const communityLabels = data.communities
    .map((c) => COMMUNITY_LABELS[c] || c)
    .filter(Boolean);

  const fields: Record<string, unknown> = {
    Name: data.fullName,
    Email: data.email,
    "Founder Type": founderTypeLabel,
  };

  if (data.phone) fields["Phone"] = data.phone;
  if (data.linkedin) fields["LinkedIn"] = data.linkedin;
  if (communityLabels.length > 0) fields["Communities"] = communityLabels;
  if (data.notes) fields["Notes"] = data.notes;

  const skippedFields: string[] = [];
  const MAX_RETRIES = 5;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const result = await postToAirtable(url, env.AIRTABLE_API_TOKEN, fields);

    if (result.ok) {
      return {
        id: result.data?.id ?? "unknown",
        ...(skippedFields.length > 0 ? { skippedFields } : {}),
      };
    }

    if (result.status === 422) {
      const unknownField = parseUnknownFieldName(result.body);
      if (unknownField && fields[unknownField] !== undefined) {
        console.log(
          `[Airtable] Field "${unknownField}" not found, removing and retrying (attempt ${attempt + 1}/${MAX_RETRIES})`
        );
        delete fields[unknownField];
        skippedFields.push(unknownField);
        continue;
      }
    }

    throw new Error(`Airtable API error (${result.status}): ${result.body}`);
  }

  throw new Error(
    `Airtable: exceeded max retries (${MAX_RETRIES}). Skipped fields: ${skippedFields.join(", ")}`
  );
}

// ── Notifications ──

const ADMIN_OPEN_IDS = [
  "9KKufeR9VubRandTZ6inrz", // Sahin
  "mrmkaW2CjMpdjabqiaaGP7", // Omer
];

function buildEndpointUrl(baseUrl: string): string {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return new URL(
    "webdevtoken.v1.WebDevService/SendNotification",
    normalizedBase
  ).toString();
}

async function notifyUser(
  env: Env,
  openId: string,
  payload: { title: string; content: string }
): Promise<boolean> {
  if (!env.BUILT_IN_FORGE_API_URL || !env.BUILT_IN_FORGE_API_KEY) {
    console.warn("[Notification] Forge API not configured, skipping");
    return false;
  }

  const endpoint = buildEndpointUrl(env.BUILT_IN_FORGE_API_URL);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${env.BUILT_IN_FORGE_API_KEY}`,
        "content-type": "application/json",
        "connect-protocol-version": "1",
      },
      body: JSON.stringify({
        title: payload.title,
        content: payload.content,
        openId,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Failed to notify ${openId} (${response.status})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }

    console.log(`[Notification] Sent to ${openId}: ${payload.title}`);
    return true;
  } catch (error) {
    console.warn(`[Notification] Error notifying ${openId}:`, error);
    return false;
  }
}

async function notifyAdmins(
  env: Env,
  payload: { title: string; content: string }
): Promise<boolean> {
  const results = await Promise.allSettled(
    ADMIN_OPEN_IDS.map((openId) => notifyUser(env, openId, payload))
  );
  return results.some((r) => r.status === "fulfilled" && r.value === true);
}

// ── tRPC Router ──

const t = initTRPC.context<{ env: Env }>().create({
  transformer: superjson,
});

const publicProcedure = t.procedure;

const appRouter = t.router({
  application: t.router({
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
          communities: z.array(z.string()).optional(),
          additionalNotes: z.string().max(2000).optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Send to Airtable
        try {
          await createAirtableRecord(ctx.env, {
            fullName: input.fullName,
            email: input.email,
            phone: input.phone || null,
            linkedin: input.linkedinUrl || null,
            founderType: input.founderType,
            communities: input.communities || [],
            notes: input.additionalNotes || null,
          });
        } catch (err) {
          console.error("[Application] Failed to send to Airtable:", err);
          // Don't throw — Airtable failure should not block form submission
          // The application is still recorded via admin notification below
        }

        // Notify admins
        const typeLabel =
          FOUNDER_TYPE_LABELS[input.founderType] || input.founderType;
        try {
          await notifyAdmins(ctx.env, {
            title: `New Vibe House Application: ${input.fullName}`,
            content: [
              `**Name:** ${input.fullName}`,
              `**Email:** ${input.email}`,
              input.phone ? `**Phone:** ${input.phone}` : null,
              input.linkedinUrl
                ? `**LinkedIn:** ${input.linkedinUrl}`
                : null,
              `**Type:** ${typeLabel}`,
              input.communities?.length
                ? `**Communities:** ${input.communities.join(", ")}`
                : null,
              input.additionalNotes
                ? `**Notes:** ${input.additionalNotes}`
                : null,
            ]
              .filter(Boolean)
              .join("\n"),
          });
        } catch (err) {
          console.warn(
            "[Application] Failed to send admin notifications:",
            err
          );
        }

        return { success: true } as const;
      }),
  }),
});

// ── Worker Entry Point ──

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle tRPC API routes
    if (url.pathname.startsWith("/api/trpc")) {
      // Handle CORS preflight
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Max-Age": "86400",
          },
        });
      }

      const response = await fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: appRouter,
        createContext: () => ({ env }),
      });

      // Add CORS headers to response
      const newHeaders = new Headers(response.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    // Serve static assets for everything else
    return env.ASSETS.fetch(request);
  },
};
