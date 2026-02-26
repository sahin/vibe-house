import { useMemo, useCallback } from "react";

/**
 * Detects whether the site is being accessed via lovie.co
 * and returns the appropriate branding strings + path prefix.
 *
 * When served under lovie.co/about/location, all internal links
 * need to be prefixed with /about/location so navigation stays
 * within the correct sub-path on the proxy.
 */
export function useBranding() {
  const isLovie = typeof window !== "undefined" && window.location.hostname.includes("lovie.co");

  /** The base path prefix — "/about/location" on lovie.co, "" elsewhere */
  const basePath = isLovie ? "/about/location" : "";

  /** Prefix an internal path with the base path */
  const href = useCallback(
    (path: string) => {
      if (!path || path.startsWith("http") || path.startsWith("mailto:")) return path;
      // Handle hash-only links like "#join"
      if (path.startsWith("#")) return path;
      // Handle paths with hash like "/#join"
      if (path.startsWith("/")) return `${basePath}${path}`;
      return `${basePath}/${path}`;
    },
    [basePath]
  );

  return useMemo(
    () => ({
      isLovie,
      basePath,
      href,
      /** Nav logo suffix: "| Lovie HQ" on lovie.co, "SF" elsewhere */
      navSuffix: isLovie ? "| Lovie HQ" : "SF",
      /** Footer text: "Vibe House SF | Lovie HQ" on lovie.co, "Vibe House SF" elsewhere */
      footerText: isLovie ? "Vibe House SF | Lovie HQ" : "Vibe House SF",
      /** SEO site name */
      siteName: isLovie ? "Vibe House | Lovie HQ" : "Vibe House SF",
      /** SEO base URL */
      baseUrl: isLovie ? "https://www.lovie.co/about/location" : "",
    }),
    [isLovie, basePath, href]
  );
}
