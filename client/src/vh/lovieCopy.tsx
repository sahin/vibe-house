/**
 * Copy shown when the site is served on lovie.co/about/location (see useBranding).
 * Same rule as the previous site: "founder" wording becomes Lovie team wording.
 * Keys are the sfvibehouse.com text exactly as written in the page; values replace them on lovie.co.
 * New content with founder wording: add its lovie.co version here and wrap the text in t("…").
 * `t(text, "toc")` looks up "toc:text" first, for places where the previous site worded the same
 * text differently (the Biological founder table of contents).
 * "[…]" in a value keeps that phrase on one line when it fits (it still wraps inside on very narrow
 * screens, so nothing overflows). Used for "team member" in headings and for the hero's line groups,
 * so the longer lovie.co wording keeps the design's line rhythm.
 * The Events page stays the same on both domains, as on the previous site.
 */
import { Fragment, type ReactNode, useCallback } from "react";
import { useBranding } from "@/hooks/useBranding";

export const LOVIE_COPY: Record<string, string> = {
  // Navigation labels and form options
  "Biological founder": "Biological [team member]",
  "The founder's pharmacy": "The team's pharmacy",
  "Exited Founder": "Lovie Team Member",
  "Technical Founder": "Technical Team Member",
  // Header & footer
  "Vibe House SF · San Francisco, California":
    "Vibe House SF | Lovie HQ · [San Francisco, California]",
  // Home
  "A new type of hacker house for exited founders to vibe code together.":
    "[A new kind of] [home base for] [the Lovie team to] [vibe code together.]",
  "A calm, beautiful house in San Francisco where experienced founders come to build again, together.":
    "A calm, beautiful house in San Francisco where the Lovie team comes to build again, together.",
  "Exited founders, together": "The Lovie team, together",
  "Every founder in the room knows something you don't.":
    "Every [team member] in the room knows something you don't.",
  "The people here have built companies, sold them and started again with AI. The conversations are generous and specific: what they tried this week, what worked and what didn't.":
    "The people here have built great things and started again with AI. The conversations are generous and specific: what they tried this week, what worked and what didn't.",
  "You've had an exit and you still love making things. Members of PEF, Superfounders and similar communities are always welcome.":
    "You're part of the Lovie team and you still love making things. All Lovie team members are always welcome.",
  "Essays on the biological founder": "Essays on the biological [team member]",
  "The tools are evolving daily. The founders who master them first will define what comes next.":
    "The tools are evolving daily. The team members who master them first will define what comes next.",
  "Exited founder": "Lovie team member",
  // Why now
  "Twenty years ago, we were in our 20s. We'd sit together, founders, engineers, dreamers, pulling long nights, building and building and building. We didn't call it work. We called it Tuesday.":
    "Twenty years ago, we were in our 20s. We'd sit together, builders, engineers, dreamers, pulling long nights, building and building and building. We didn't call it work. We called it Tuesday.",
  "Every startup had that story: the garage, the living room, the whiteboard covered in ideas at 3am. Most companies were born in those long nights. Founders who couldn't stop shipping. Teams that lived and breathed the product. The energy was electric. You could feel it in every line of code.":
    "Every startup had that story: the garage, the living room, the whiteboard covered in ideas at 3am. Most companies were born in those long nights. Builders who couldn't stop shipping. Teams that lived and breathed the product. The energy was electric. You could feel it in every line of code.",
  "The garage spirit faded. Building became about fundraising, not making. About decks, not demos. The founders who once couldn't stop shipping found themselves in a world where shipping meant something entirely different.":
    "The garage spirit faded. Building became about fundraising, not making. About decks, not demos. The builders who once couldn't stop shipping found themselves in a world where shipping meant something entirely different.",
  "Founders in their 30s–50s, people who exited, who managed teams, who stopped building with their hands, are going back to builder mode. With AI agents, they can build again. And they're building things that would have taken entire teams.":
    "People in their 30s–50s, people who built great things, who managed teams, who stopped building with their hands, are going back to builder mode. With AI agents, they can build again. And they're building things that would have taken entire teams.",
  "That's exactly why founders and builders need to come together: to build together, to share how they're using AI, to learn from each other in real time. The ones who stay connected to the edge will define what comes next.":
    "That's exactly why builders and team members need to come together: to build together, to share how they're using AI, to learn from each other in real time. The ones who stay connected to the edge will define what comes next.",
  "Founders in their 30s–50s are going back to builder mode, and they're more dangerous than ever. They have the experience, the taste, the network. Now they have the tools too.":
    "Builders in their 30s–50s are going back to builder mode, and they're more dangerous than ever. They have the experience, the taste, the network. Now they have the tools too.",
  "A place where technical founders come together, multiple times a week, to vibe code. You work on your own project. You share your prompts, your workflows, your breakthroughs. And there's an ongoing group project that everyone prompts together.":
    "A place where the Lovie team comes together, multiple times a week, to vibe code. You work on your own project. You share your prompts, your workflows, your breakthroughs. And there's an ongoing group project that everyone prompts together.",
  // Biological founder · table of contents (the previous site's list used shorter wording than the headings)
  "toc:Tea, Salt, and the Founder's Immune System":
    "Tea, Salt, and the Team's Immune System",
  "toc:Designing for the Biological Founder":
    "Designing for the Biological [Team Member]",
  "toc:The Founder Kitchen: Food as Infrastructure":
    "The Team Kitchen: Food as Infrastructure",
  "toc:Designing a Founder House for Health, Not Just Aesthetics":
    "Designing a Team House for Health, [Not Just Aesthetics]",
  // Biological founder
  "The founder's pharmacy · A series on health, environment and building":
    "The team's pharmacy · A series on health, environment and building",
  founder: "[team member]",
  "Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the founder. This series explores what happens when you treat the founder's nervous system as infrastructure.":
    "Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the [team member]. This series explores what happens when you treat the team's nervous system [as infrastructure.]",
  "Tea, Salt, and the Founder's Immune System":
    "Tea, Salt, and the [Team Member's] [Immune System]",
  "Designing for the Biological Founder":
    "Designing for the Biological [Team Member]",
  "The Founder Kitchen: Food as Infrastructure":
    "[The Team\u00a0Member] Kitchen: [Food as Infrastructure]",
  "Designing a Founder House for Health, Not Just Aesthetics":
    "Designing a [Team Member] House for Health, [Not Just Aesthetics]",
  "San Francisco has no shortage of hacker houses. There are sleep-deprived founders coding through the night, whiteboards filled with impossible ideas, refrigerators stocked with energy drinks and ambition.":
    "San Francisco has no shortage of hacker houses. There are sleep-deprived team members coding through the night, whiteboards filled with impossible ideas, refrigerators stocked with energy drinks and ambition.",
  "The house breathes sunlight. Windows remain open whenever possible. Natural light improves mood, focus, and immune regulation. In the mornings, founders gather barefoot on wooden floors — grounding, literally and neurologically.":
    "The house breathes sunlight. Windows remain open whenever possible. Natural light improves mood, focus, and immune regulation. In the mornings, team members gather barefoot on wooden floors — grounding, literally and neurologically.",
  "Next: Tea, Salt, and the Founder's Immune System →":
    "Next: Tea, Salt, and the [Team Member's] Immune [System →]",
  "Soursop leaf tea has been studied for its antioxidant compounds. While no tea cures disease — and we are cautious with such claims — antioxidants support cellular repair and immune resilience. Founders operate in cognitive marathons. Oxidative stress is real.":
    "Soursop leaf tea has been studied for its antioxidant compounds. While no tea cures disease — and we are cautious with such claims — antioxidants support cellular repair and immune resilience. Team members operate in cognitive marathons. Oxidative stress is real.",
  "Jasmine green tea delivers L-theanine — a compound shown to promote calm alertness. The state every founder claims to want but rarely achieves.":
    "Jasmine green tea delivers L-theanine — a compound shown to promote calm alertness. The state every team member claims to want but rarely achieves.",
  "The founder immune system is an asset class.":
    "The [team member] immune system is an asset class.",
  "Mantak Chia's teachings on energy circulation influence some of our morning breathwork sessions. Whether you interpret it through Taoist frameworks or modern vagal tone science, the result is the same: founders who regulate stress outperform those who suppress it.":
    "Mantak Chia's teachings on energy circulation influence some of our morning breathwork sessions. Whether you interpret it through Taoist frameworks or modern vagal tone science, the result is the same: team members who regulate stress outperform those who suppress it.",
  "But most founders are running on nervous systems that are quietly collapsing.":
    "But most [team members] are running on nervous systems that are quietly collapsing.",
  "The founder is infrastructure.": "The [team member] is [infrastructure.]",
  "Burned-out founders build brittle systems.":
    "Burned-out [team members] build [brittle systems.]",
  "Regulated founders build resilient ones.":
    "Regulated [team members] build [resilient ones.]",
  "Next: Designing for the Biological Founder →":
    "Next: Designing for the Biological [Team Member →]",
  "But we rarely optimize the founder.":
    "But we rarely optimize the [team member].",
  "So this winter, we tried something different. We designed a founder house in San Francisco — not around aesthetics, not around status, not around trend — but around biology.":
    "So this winter, we tried something different. We designed a team house in San Francisco — not around aesthetics, not around status, not around trend — but around biology.",
  "This series explores what happens when you treat the founder's nervous system as infrastructure. When you see the kitchen as medicine. The lighting as hormonal regulation. The plants as stress reduction. The environment as performance architecture.":
    "This series explores what happens when you treat the team member's nervous system as infrastructure. When you see the kitchen as medicine. The lighting as hormonal regulation. The plants as stress reduction. The environment as performance architecture.",
  "Because in the end, the company doesn't run on code. It runs on the founder's nervous system.":
    "Because in the end, the company doesn't run on code. It runs on the team member's nervous system.",
  "Designing for the Biological Founder — Part I":
    "Designing for the Biological [Team Member] — Part I",
  "When we decided to create a founder house in San Francisco for AI builders, I didn't think about aesthetics first.":
    "When we decided to create a team house in San Francisco for AI builders, I didn't think about aesthetics first.",
  'And yet most "founder houses" are designed like frat houses with better WiFi.':
    'And yet most "team houses" are designed like frat houses with better WiFi.',
  "Next: The Founder Kitchen: Food as Infrastructure →":
    "Next: The [Team Member] Kitchen: Food as [Infrastructure →]",
  "Designing for the Biological Founder — Part II":
    "Designing for the Biological [Team Member] — Part II",
  "If founders are infrastructure, their immune systems are assets. Protect them.":
    "If [team members] are infrastructure, their immune systems are assets. Protect them.",
  "Designing for the Biological Founder — Part III":
    "Designing for the Biological [Team Member] — Part III",
  "The founder nervous system is not separate from the company. It is the company.":
    "The [team member] nervous system is not separate from the company. It is the company.",
  "Next: Designing a Founder House for Health, Not Just Aesthetics →":
    "Next: Designing a [Team Member] House for Health, Not Just [Aesthetics →]",
  "When most people design a house in San Francisco for AI founders, they think about WiFi speed, standing desks, espresso machines, and maybe a cold plunge if they're feeling ambitious.":
    "When most people design a house in San Francisco for the AI team, they think about WiFi speed, standing desks, espresso machines, and maybe a cold plunge if they're feeling ambitious.",
  "I didn't want cheap plastics. I didn't want synthetic fragrance. I didn't want toxic cleaning sprays quietly floating in the air while founders discussed the future of civilization.":
    "I didn't want cheap plastics. I didn't want synthetic fragrance. I didn't want toxic cleaning sprays quietly floating in the air while team members discussed the future of civilization.",
  "Continue to The Founder's Pharmacy →": "Continue to The Team's [Pharmacy →]",
  "The Founder's Pharmacy": "The Team's Pharmacy",
  // The founder's pharmacy
  "← Back to Biological Founder": "← Back to Biological [Team Member]",
  "The Founder's ": "The Team's ",
  "The kitchen is the pharmacy of the biological founder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body.":
    "The kitchen is the pharmacy of the biological builder. We chose non-toxic cookware, glass storage, and wooden serving — materials that don't leach chemicals into the food that becomes your body.",
  "This catalog is a living document. As we discover better products, we update the house, and this page. The biological founder never stops optimizing the environment.":
    "This catalog is a living document. As we discover better products, we update the house, and this page. The biological builder never stops optimizing the environment.",
};

/**
 * `t(text)` returns the lovie.co version of `text` on lovie.co, and `text` itself everywhere else.
 * `copy` is the domain-aware SEO/branding copy from useBranding.
 */
export function useCopy() {
  const { isLovie, copy } = useBranding();
  const t = useCallback(
    (text: string, context?: string): ReactNode => {
      const value = isLovie
        ? ((context && LOVIE_COPY[`${context}:${text}`]) ??
          LOVIE_COPY[text] ??
          text)
        : text;
      if (!value.includes("[")) return value;
      // "[phrase]" -> <span class="keep">phrase</span>
      return value
        .split(/(\[[^\]]+\])/)
        .filter(Boolean)
        .map((part, i) =>
          part.startsWith("[") ? (
            <span key={i} className="keep">
              {part.slice(1, -1)}
            </span>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          )
        );
    },
    [isLovie]
  );
  return { t, isLovie, copy };
}
