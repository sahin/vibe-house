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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

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
