import { useMemo } from "react";

/**
 * Detects whether the site is being accessed via lovie.co
 * and returns the appropriate branding strings.
 */
export function useBranding() {
  return useMemo(() => {
    const isLovie = typeof window !== "undefined" && window.location.hostname.includes("lovie.co");

    return {
      isLovie,
      /** Nav logo suffix: "| Lovie HQ" on lovie.co, "SF" elsewhere */
      navSuffix: isLovie ? "| Lovie HQ" : "SF",
      /** Footer text: "Vibe House SF | Lovie HQ" on lovie.co, "Vibe House SF" elsewhere */
      footerText: isLovie ? "Vibe House SF | Lovie HQ" : "Vibe House SF",
      /** SEO site name */
      siteName: isLovie ? "Vibe House | Lovie HQ" : "Vibe House SF",
      /** SEO base URL */
      baseUrl: isLovie ? "https://www.lovie.co/about/location" : "",
    };
  }, []);
}
