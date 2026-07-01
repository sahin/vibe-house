import { useMemo, useCallback, useEffect } from "react";

/**
 * Detects whether the site is being accessed via lovie.co
 * and returns the appropriate branding strings + path prefix.
 *
 * When served under lovie.co/about/location, all internal links
 * need to be prefixed with /about/location so navigation stays
 * within the correct sub-path on the proxy.
 *
 * Also provides a `copy` dictionary with content variants:
 * - On lovie.co: team-oriented language ("Lovie team", "team members")
 * - Elsewhere: founder-oriented language ("exited founders", "technical founders")
 */

/** Content copy that varies by domain */
export interface BrandingCopy {
  // ── Homepage (hero, about, join) ──
  heroDefinition: string;
  whyNowDescription: string;
  joinReq1Title: string;
  joinReq1Description: string;
  joinReq1BadgeNote: string;
  joinClosing: string;

  // ── Application Form ──
  founderType_exitedFounder: string;
  founderType_technicalFounder: string;
  communitiesLabel: string;

  // ── SEO: Home ──
  seoHomeTitle: string;
  seoHomeDescription: string;
  seoHomeKeywords: string;

  // ── SEO: Why Now ──
  seoWhyNowDescription: string;
  seoWhyNowKeywords: string;

  // ── Why Now body prose ──
  whyNow_ch1_p1: string;
  whyNow_ch1_p2: string;
  whyNow_ch2_p2: string;
  whyNow_ch3_p2: string;
  whyNow_ch5_p2: string;
  whyNow_ch6_p2: string;
  whyNow_ch8_p2: string;

  // ── Nav labels ──
  navLabelBioFounder: string;
  navLabelPharmacy: string;

  // ── Biological Founder page ──
  bioFounderPageTitle: string;
  bioFounderPageHeading: string;
  bioFounderIntro: string;
  bioFounderSeoKeywords: string;
  bioFounderArticle2Title: string;
  bioFounderArticle6Title: string;
  bioFounderArticle8Title: string;
  bioFounderArticle10Title: string;
  bioFounderCtaTitle: string;

  // ── SEO: Biological Founder ──
  seoBioFounderDescription: string;

  // ── SEO: Curated Products ──
  seoCuratedTitle: string;
  seoCuratedDescription: string;
  seoCuratedKeywords: string;

  // ── Curated Products body ──
  curatedKitchenPhilosophy: string;
  curatedBottomNote: string;
}

const defaultCopy: BrandingCopy = {
  // ── Homepage ──
  heroDefinition:
    "A new type of hacker house for exited founders to vibe code together.",
  whyNowDescription:
    "The tools are evolving daily. The founders who master them first will define what comes next.",
  joinReq1Title: "Exited Founder",
  joinReq1Description: "You've built and exited.",
  joinReq1BadgeNote:
    "Super founder and exited founder communities are welcome anytime.",
  joinClosing:
    "No pitch decks. No networking.\nJust for the builders who want to build again.",

  // ── Application Form ──
  founderType_exitedFounder: "Exited Founder",
  founderType_technicalFounder: "Technical Founder",
  communitiesLabel: "Which exited founders' communities are you part of?",

  // ── SEO: Home ──
  seoHomeTitle: "Vibe House SF — A Hacker House for Exited Founders",
  seoHomeDescription:
    "A new type of hacker house in San Francisco for exited founders. Vibe code together in a space designed for deep work, health, and human flourishing.",
  seoHomeKeywords:
    "hacker house, San Francisco, founders, vibe coding, coliving, deep work, startup, exited founders",

  // ── SEO: Why Now ──
  seoWhyNowDescription:
    "The thesis behind Vibe House SF. Why exited founders need a new kind of space — one designed for biology, not just productivity. A manifesto for building without burning out.",
  seoWhyNowKeywords:
    "founder wellness, burnout, hacker house thesis, vibe coding, deep work, biological optimization, San Francisco",

  // ── Why Now body prose ──
  whyNow_ch1_p1:
    "Twenty years ago, we were in our 20s. We'd sit together — founders, engineers, dreamers — pulling long nights, building and building and building. We didn't call it work. We called it Tuesday.",
  whyNow_ch1_p2:
    "Every startup had that story: the garage, the living room, the whiteboard covered in ideas at 3am. Most companies were born in those long nights. Founders who couldn't stop shipping. Teams that lived and breathed the product. The energy was electric — you could feel it in every line of code.",
  whyNow_ch2_p2:
    "The garage spirit faded. Building became about fundraising, not making. About decks, not demos. The founders who once couldn't stop shipping found themselves in a world where shipping meant something entirely different.",
  whyNow_ch3_p2:
    "Founders in their 30s–50s — people who exited, who managed teams, who stopped building with their hands — are going back to builder mode. With AI agents, they can build again. And they're building things that would have taken entire teams.",
  whyNow_ch5_p2:
    "That's exactly why founders and builders need to come together — to build together, to share how they're using AI, to learn from each other in real time. The ones who stay connected to the edge will define what comes next.",
  whyNow_ch6_p2:
    "Founders in their 30s–50s are going back to builder mode — and they're more dangerous than ever. They have the experience, the taste, the network. Now they have the tools too.",
  whyNow_ch8_p2:
    "A place where technical founders come together, multiple times a week, to vibe code. You work on your own project. You share your prompts, your workflows, your breakthroughs. And there's an ongoing group project that everyone prompts together.",

  // ── Nav labels ──
  navLabelBioFounder: "Biological Founder",
  navLabelPharmacy: "The Founder's Pharmacy",

  // ── Biological Founder page ──
  bioFounderPageTitle: "The Biological Founder",
  bioFounderPageHeading: "Designing for the Biological Founder",
  bioFounderIntro: "Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the founder. This series explores what happens when you treat the founder's nervous system as infrastructure.",
  bioFounderSeoKeywords: "biological founder, human flourishing, founder health, essential oils, tea ceremony, nervous system, spiritual infrastructure, hacker house",
  bioFounderArticle2Title: "Tea, Salt, and the Founder's Immune System",
  bioFounderArticle6Title: "Designing for the Biological Founder",
  bioFounderArticle8Title: "The Founder Kitchen: Food as Infrastructure",
  bioFounderArticle10Title: "Designing a Founder House for Health",
  bioFounderCtaTitle: "The Founder's Pharmacy",

  // ── SEO: Biological Founder ──
  seoBioFounderDescription:
    "10 essays on engineering human flourishing. From essential oils and tea ceremonies to nervous system design and spiritual infrastructure — a blueprint for founders who build with their biology, not against it.",

  // ── SEO: Curated Products ──
  seoCuratedTitle: "The Founder's Pharmacy",
  seoCuratedDescription:
    "57 curated products for the biological founder. Essential oils, nebulizing diffusers, ceremonial teas, crystals, organic sleep systems, and clean living infrastructure — each chosen for evidence-based health benefits.",
  seoCuratedKeywords:
    "founder pharmacy, curated products, essential oils, nebulizing diffuser, ceremonial tea, crystals, organic sleep, clean living, health optimization, biohacking",

  // ── Curated Products body ──
  curatedKitchenPhilosophy:
    "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body.",
  curatedBottomNote:
    "This catalog is a living document. As we discover better products, we update the house — and this page. The biological founder never stops optimizing the environment.",
};

const lovieCopy: BrandingCopy = {
  // ── Homepage ──
  heroDefinition:
    "A new kind of home base for the Lovie team to vibe code together.",
  whyNowDescription:
    "The tools are evolving daily. The team members who master them first will define what comes next.",
  joinReq1Title: "Lovie Team Member",
  joinReq1Description: "You're part of the Lovie team.",
  joinReq1BadgeNote: "All Lovie team members are welcome anytime.",
  joinClosing:
    "No pitch decks. No networking.\nJust for the team that wants to build together.",

  // ── Application Form ──
  founderType_exitedFounder: "Lovie Team Member",
  founderType_technicalFounder: "Technical Team Member",
  communitiesLabel: "Which communities are you part of?",

  // ── SEO: Home ──
  seoHomeTitle: "Vibe House — Lovie HQ",
  seoHomeDescription:
    "The home base for the Lovie team. Vibe code together in a space designed for deep work, health, and human flourishing.",
  seoHomeKeywords:
    "lovie, team, vibe coding, coliving, deep work, startup, hacker house, San Francisco",

  // ── SEO: Why Now ──
  seoWhyNowDescription:
    "The thesis behind Vibe House. Why teams need a new kind of space — one designed for biology, not just productivity. A manifesto for building without burning out.",
  seoWhyNowKeywords:
    "team wellness, burnout, workspace thesis, vibe coding, deep work, biological optimization, San Francisco",

  // ── Why Now body prose ──
  whyNow_ch1_p1:
    "Twenty years ago, we were in our 20s. We'd sit together — builders, engineers, dreamers — pulling long nights, building and building and building. We didn't call it work. We called it Tuesday.",
  whyNow_ch1_p2:
    "Every startup had that story: the garage, the living room, the whiteboard covered in ideas at 3am. Most companies were born in those long nights. Builders who couldn't stop shipping. Teams that lived and breathed the product. The energy was electric — you could feel it in every line of code.",
  whyNow_ch2_p2:
    "The garage spirit faded. Building became about fundraising, not making. About decks, not demos. The builders who once couldn't stop shipping found themselves in a world where shipping meant something entirely different.",
  whyNow_ch3_p2:
    "People in their 30s–50s — people who built great things, who managed teams, who stopped building with their hands — are going back to builder mode. With AI agents, they can build again. And they're building things that would have taken entire teams.",
  whyNow_ch5_p2:
    "That's exactly why builders and team members need to come together — to build together, to share how they're using AI, to learn from each other in real time. The ones who stay connected to the edge will define what comes next.",
  whyNow_ch6_p2:
    "Builders in their 30s–50s are going back to builder mode — and they're more dangerous than ever. They have the experience, the taste, the network. Now they have the tools too.",
  whyNow_ch8_p2:
    "A place where the Lovie team comes together, multiple times a week, to vibe code. You work on your own project. You share your prompts, your workflows, your breakthroughs. And there's an ongoing group project that everyone prompts together.",

  // ── Nav labels ──
  navLabelBioFounder: "Biological Team Member",
  navLabelPharmacy: "The Team's Pharmacy",

  // ── Biological Founder page ──
  bioFounderPageTitle: "The Biological Team Member",
  bioFounderPageHeading: "Designing for the Biological Team Member",
  bioFounderIntro: "Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the team member. This series explores what happens when you treat the team's nervous system as infrastructure.",
  bioFounderSeoKeywords: "biological team member, human flourishing, team health, essential oils, tea ceremony, nervous system, spiritual infrastructure, lovie",
  bioFounderArticle2Title: "Tea, Salt, and the Team's Immune System",
  bioFounderArticle6Title: "Designing for the Biological Team Member",
  bioFounderArticle8Title: "The Team Kitchen: Food as Infrastructure",
  bioFounderArticle10Title: "Designing a Team House for Health",
  bioFounderCtaTitle: "The Team's Pharmacy",

  // ── SEO: Biological Founder ──
  seoBioFounderDescription:
    "10 essays on engineering human flourishing. From essential oils and tea ceremonies to nervous system design and spiritual infrastructure — a blueprint for those who build with their biology, not against it.",

  // ── SEO: Curated Products ──
  seoCuratedTitle: "The Team's Pharmacy",
  seoCuratedDescription:
    "57 curated products for the biological builder. Essential oils, nebulizing diffusers, ceremonial teas, crystals, organic sleep systems, and clean living infrastructure — each chosen for evidence-based health benefits.",
  seoCuratedKeywords:
    "founder pharmacy, curated products, essential oils, nebulizing diffuser, ceremonial tea, crystals, organic sleep, clean living, health optimization, biohacking",

  // ── Curated Products body ──
  curatedKitchenPhilosophy:
    "The kitchen is the pharmacy of the biological builder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body.",
  curatedBottomNote:
    "This catalog is a living document. As we discover better products, we update the house — and this page. The biological builder never stops optimizing the environment.",
};

export function useBranding() {
  const isLovie = (() => {
    if (typeof window === "undefined") return false;
    // Check URL first
    const fromHostname = window.location.hostname.includes("lovie.co");
    const fromParam = new URLSearchParams(window.location.search).get("isLovie") === "true";
    if (fromHostname || fromParam) {
      // Persist to sessionStorage so it survives navigation
      try { sessionStorage.setItem("isLovie", "true"); } catch {}
      return true;
    }
    // Fall back to sessionStorage
    try { return sessionStorage.getItem("isLovie") === "true"; } catch { return false; }
  })();

  /** The base path prefix — "/about/location" on lovie.co, "" elsewhere */
  const basePath = isLovie ? "/about/location" : "";

  /** Prefix an internal path with the base path */
  const href = useCallback(
    (path: string) => {
      if (!path || path.startsWith("http") || path.startsWith("mailto:"))
        return path;
      // Handle hash-only links like "#join"
      if (path.startsWith("#")) return path;
      // Handle paths with hash like "/#join"
      if (path.startsWith("/")) return `${basePath}${path}`;
      return `${basePath}/${path}`;
    },
    [basePath],
  );

  /** Content copy — switches between founder language and team language */
  const copy: BrandingCopy = isLovie ? lovieCopy : defaultCopy;

  /** Dynamically switch favicon and page title based on branding */
  useEffect(() => {
    if (typeof document === "undefined") return;
    const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
    const appleTouchIcon = document.getElementById("apple-touch-icon") as HTMLLinkElement | null;
    if (isLovie) {
      if (favicon) favicon.href = "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/lovie-favicon-32_0d26ce06.png";
      if (appleTouchIcon) appleTouchIcon.href = "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/lovie-favicon-192_4c6f1eeb.png";
      document.title = "Vibe House | Lovie HQ";
    } else {
      if (favicon) favicon.href = "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/vh-favicon-v2-32_7bd17f4e.png";
      if (appleTouchIcon) appleTouchIcon.href = "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/vh-favicon-v2-192_8a81f695.png";
    }
  }, [isLovie]);

  return useMemo(
    () => ({
      isLovie,
      basePath,
      href,
      copy,
      /** Nav logo suffix: "| Lovie HQ" on lovie.co, "SF" elsewhere */
      navSuffix: isLovie ? "| Lovie HQ" : "SF",
      /** Footer text: "Vibe House SF | Lovie HQ" on lovie.co, "Vibe House SF" elsewhere */
      footerText: isLovie ? "Vibe House SF | Lovie HQ" : "Vibe House SF",
      /** SEO site name */
      siteName: isLovie ? "Vibe House | Lovie HQ" : "Vibe House SF",
      /** SEO base URL */
      baseUrl: isLovie ? "https://www.lovie.co/about/location" : "",
      /** Default OG image — Lovie logo for lovie.co, exterior photo for default */
      ogImage: isLovie
        ? "https://d2xsxph8kpxj0f.cloudfront.net/120748616/D66doBaWmncxm5rVMvJ4yM/lovie-og-image_ca46b039.png"
        : undefined,
    }),
    [isLovie, basePath, href, copy],
  );
}
