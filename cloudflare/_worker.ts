/**
 * Cloudflare Pages Advanced Mode Worker.
 *
 * The public custom domain serves static assets here, while the application
 * form is persisted by the project's canonical Manus-hosted API. Keeping one
 * submission backend avoids divergent Airtable credentials and data loss.
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  BUILT_IN_FORGE_API_URL: string;
  BUILT_IN_FORGE_API_KEY: string;
}

const APPLICATION_BACKEND = "https://sfvibehouse.manus.space";

/**
 * Luma calendar behind luma.com/sfvibehouse, read through its public subscription feed (ICS):
 * the feed is meant for calendar apps and needs no browser headers, unlike Luma's site API.
 */
const LUMA_CALENDAR_ID = "cal-XcIP6a0xjvfCbe2";
const LUMA_ICS_URL = `https://api.lu.ma/ics/get?entity=calendar&id=${LUMA_CALENDAR_ID}`;
/** How long the edge keeps a Luma answer, so visitors don't each call Luma. */
const LUMA_CACHE_SECONDS = 600;

export type LumaEvent = {
  name: string;
  start: string;
  end: string;
  url: string;
};

/** "20261211T013000Z" -> "2026-12-11T01:30:00.000Z"; anything else (local times, all-day) -> null. */
function icsUtc(value: string | undefined): string | null {
  const m = value?.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/);
  return m ? `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}.000Z` : null;
}

function icsText(value: string): string {
  return value.replace(/\\([\\,;nN])/g, (_, c: string) =>
    c === "n" || c === "N" ? "\n" : c
  );
}

/**
 * Upcoming events from the ICS feed. Only the name, times and public event link are kept; the
 * feed's organizer, location and other fields never leave the worker. Events that have ended or
 * are cancelled are dropped (the page drops ended ones again at view time).
 */
export function parseLumaIcs(ics: string, now: number): LumaEvent[] {
  const lines = ics
    .replace(/\r\n/g, "\n")
    .replace(/\n[ \t]/g, "")
    .split("\n");
  const events: LumaEvent[] = [];
  let cur: Record<string, string> | null = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") cur = {};
    else if (line === "END:VEVENT" && cur) {
      const start = icsUtc(cur.DTSTART);
      const end = icsUtc(cur.DTEND);
      const name = cur.SUMMARY ? icsText(cur.SUMMARY).trim() : "";
      const link =
        icsText(cur.DESCRIPTION ?? "").match(
          /https:\/\/luma\.com\/[A-Za-z0-9-]+/
        )?.[0] ??
        cur.LOCATION?.match(/^https:\/\/luma\.com\/[A-Za-z0-9/-]+$/)?.[0];
      if (
        start &&
        end &&
        name &&
        link &&
        cur.STATUS !== "CANCELLED" &&
        new Date(end).getTime() > now
      ) {
        events.push({ name, start, end, url: link });
      }
      cur = null;
    } else if (cur) {
      const i = line.indexOf(":");
      if (i > 0) cur[line.slice(0, i).split(";")[0]] = line.slice(i + 1);
    }
  }
  return events.sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
}

/** GET /api/luma-events: upcoming events for the Events series "Next event" cards. */
async function lumaEvents(request: Request): Promise<Response> {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }
  const cache = (globalThis as { caches?: { default?: Cache } }).caches
    ?.default;
  const cacheKey = new Request(
    new URL("/api/luma-events", request.url).toString()
  );
  const cached = await cache?.match(cacheKey);
  if (cached) return cached;

  try {
    const upstream = await fetch(LUMA_ICS_URL, {
      signal: AbortSignal.timeout(8000),
    });
    if (!upstream.ok) throw new Error(`Luma returned ${upstream.status}`);
    const ics = await upstream.text();
    if (!ics.startsWith("BEGIN:VCALENDAR"))
      throw new Error("Luma feed is not a calendar");
    const now = Date.now();
    const response = new Response(
      JSON.stringify({
        checked: new Date(now).toISOString(),
        events: parseLumaIcs(ics, now),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${LUMA_CACHE_SECONDS}`,
        },
      }
    );
    await cache?.put(cacheKey, response.clone());
    return response;
  } catch (error) {
    console.error("[Luma] calendar unavailable:", error);
    return new Response(
      JSON.stringify({ error: { message: "Luma calendar unavailable" } }),
      {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/luma-events") {
      return lumaEvents(request);
    }

    if (url.pathname === "/api/trpc/application.airtableHealth") {
      if (request.method !== "GET") {
        return new Response("Method not allowed", { status: 405 });
      }
      try {
        const upstream = await fetch(
          `${APPLICATION_BACKEND}${url.pathname}${url.search}`,
          { signal: AbortSignal.timeout(15000) }
        );
        if (!upstream.headers.get("content-type")?.includes("application/json")) {
          throw new Error(`Airtable health backend returned non-JSON (${upstream.status})`);
        }
        return new Response(upstream.body, {
          status: upstream.status,
          headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        });
      } catch (error) {
        console.error("[Application] Airtable health check unavailable:", error);
        return new Response(JSON.stringify({ error: { message: "Health check unavailable" } }), {
          status: 502,
          headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        });
      }
    }

    if (url.pathname === "/api/trpc/application.submit") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }
      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
      }

      try {
        // Forward only the submitted JSON, never the visitor's Cloudflare-domain
        // cookies or authorization headers, to the same backend used by the
        // Manus-hosted site. The backend writes its database copy and Airtable.
        const upstream = await fetch(
          `${APPLICATION_BACKEND}${url.pathname}${url.search}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: await request.text(),
            signal: AbortSignal.timeout(15000),
          }
        );
        if (!upstream.headers.get("content-type")?.includes("application/json")) {
          throw new Error(`Submission backend returned non-JSON response (${upstream.status})`);
        }
        return new Response(upstream.body, {
          status: upstream.status,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        console.error("[Application] Submission backend unavailable:", error);
        return new Response(JSON.stringify({
          error: { message: "We couldn't save your application. Please use the backup form." },
        }), {
          status: 502,
          headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        });
      }
    }

    if (url.pathname.startsWith("/api/trpc")) {
      return new Response(JSON.stringify({ error: { message: "Unknown API route" } }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Handle /manus-storage/ proxy — presign and redirect to S3.
    if (url.pathname.startsWith("/manus-storage/")) {
      const key = url.pathname.replace("/manus-storage/", "");
      if (!key) {
        return new Response("Missing storage key", { status: 400 });
      }
      if (!env.BUILT_IN_FORGE_API_URL || !env.BUILT_IN_FORGE_API_KEY) {
        return new Response("Storage proxy not configured", { status: 500 });
      }
      try {
        const forgeUrl = new URL(
          "v1/storage/presign/get",
          env.BUILT_IN_FORGE_API_URL.replace(/\/+$/, "") + "/"
        );
        forgeUrl.searchParams.set("path", key);
        const forgeResp = await fetch(forgeUrl.toString(), {
          headers: { Authorization: `Bearer ${env.BUILT_IN_FORGE_API_KEY}` },
        });
        if (!forgeResp.ok) {
          return new Response("Storage backend error", { status: 502 });
        }
        const { url: signedUrl } = (await forgeResp.json()) as { url: string };
        if (!signedUrl) {
          return new Response("Empty signed URL", { status: 502 });
        }
        return Response.redirect(signedUrl, 307);
      } catch (error) {
        console.error("[StorageProxy] failed:", error);
        return new Response("Storage proxy error", { status: 502 });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
