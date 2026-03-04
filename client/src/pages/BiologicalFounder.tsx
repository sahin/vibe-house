/*
  BIOLOGICAL FOUNDER — Editorial long-form article page
  All articles from the Vibe House series on health, environment, and building without burning out
  Same dictionary-definition typography as the homepage and WhyNow page
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef } from "react";
import { useBranding } from "@/hooks/useBranding";
import React from "react";

/**
 * Recursively walks React children and replaces founder-specific text
 * with team-member language when isLovie is true.
 */
function replaceFounderText(children: React.ReactNode, isLovie: boolean): React.ReactNode {
  if (!isLovie) return children;
  if (typeof children === "string") {
    return children
      .replace(/\bfounder's nervous system\b/gi, (m) => m[0] === 'F' ? "Team member's nervous system" : "team member's nervous system")
      .replace(/\bfounder nervous system\b/gi, (m) => m[0] === 'F' ? "Team member nervous system" : "team member nervous system")
      .replace(/\bfounder immune system\b/gi, (m) => m[0] === 'F' ? "Team member immune system" : "team member immune system")
      .replace(/\bfounder('s)?\s+house/gi, (m) => m[0] === 'F' ? "team house" : "team house")
      .replace(/\bfounder houses/gi, (m) => m[0] === 'F' ? "Team houses" : "team houses")
      .replace(/\bfounder Kitchen/gi, "Team Kitchen")
      .replace(/\bBurned-out founders\b/g, "Burned-out team members")
      .replace(/\bRegulated founders\b/g, "Regulated team members")
      .replace(/\bThe founder is infrastructure\b/g, "The team member is infrastructure")
      .replace(/\bthe founder\b/g, "the team member")
      .replace(/\bThe Founder\b/g, "The Team Member")
      .replace(/\bthe Founder\b/g, "the Team Member")
      .replace(/\boptimize the founder\b/gi, (m) => m[0] === 'o' ? "optimize the team member" : "Optimize the team member")
      .replace(/\bfor AI founders\b/gi, "for the AI team")
      .replace(/\bAI founders\b/gi, "the AI team")
      .replace(/\bsleep-deprived founders\b/gi, "sleep-deprived team members")
      .replace(/\bmost founders\b/gi, (m) => m[0] === 'M' ? "Most team members" : "most team members")
      .replace(/\bfounders gather\b/gi, (m) => m[0] === 'F' ? "Team members gather" : "team members gather")
      .replace(/\bfounders operate\b/gi, (m) => m[0] === 'F' ? "Team members operate" : "team members operate")
      .replace(/\bevery founder\b/gi, (m) => m[0] === 'E' ? "Every team member" : "every team member")
      .replace(/\bfounders who regulate\b/gi, (m) => m[0] === 'F' ? "Team members who regulate" : "team members who regulate")
      .replace(/\bfounders discussed\b/gi, (m) => m[0] === 'F' ? "Team members discussed" : "team members discussed")
      .replace(/\bIf founders are infrastructure\b/gi, "If team members are infrastructure")
      .replace(/\ba founder house\b/gi, "a team house")
      .replace(/\ba Founder House\b/gi, "a Team House");
  }
  if (React.isValidElement(children)) {
    const el = children as React.ReactElement<any>;
    if (el.props && el.props.children) {
      return React.cloneElement(el, {}, replaceFounderText(el.props.children, isLovie));
    }
    return children;
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => {
      const result = replaceFounderText(child, isLovie);
      // Preserve key for React elements
      if (React.isValidElement(result) && !result.key) {
        return React.cloneElement(result as React.ReactElement<any>, { key: i });
      }
      return result;
    });
  }
  return children;
}

// Typography — matching Home.tsxte-wide system
const T = {
  xl: "font-display font-normal leading-[1.02] text-[clamp(3rem,8vw,7rem)]",
  l: "font-display font-normal leading-[1.1] text-[clamp(2rem,5vw,3.5rem)]",
  m: "leading-relaxed text-[clamp(1.15rem,2.5vw,1.5rem)]",
  s: "leading-relaxed text-[clamp(1rem,2vw,1.25rem)]",
  nav: "text-xs tracking-[0.08em] uppercase",
  label: "text-xs tracking-[0.12em] uppercase text-foreground/40",
};

// Fade-in animation wrapper
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

// Divider line
function Divider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="w-full h-px bg-foreground/10 my-10 md:my-14"
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    />
  );
}

// Article section
function Article({
  number,
  title,
  subtitle,
  children,
  id,
}: {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className={`${T.label} mb-4`}>{number}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className={`${T.l} mb-4`}>{title}</h2>
          </FadeIn>
          {subtitle && (
            <FadeIn delay={0.15}>
              <p className={`${T.m} text-foreground/50 italic mb-2`}>{subtitle}</p>
            </FadeIn>
          )}
          <Divider delay={0.2} />
          <FadeIn delay={0.3}>
            <div className="space-y-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// Paragraph helper
function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`${T.s} text-foreground/70 ${className}`}>{children}</p>;
}

// Emphasized paragraph
function Em({ children }: { children: React.ReactNode }) {
  return <p className={`${T.s} text-foreground/90 font-medium italic`}>{children}</p>;
}

// Poetic line break block
function Lines({ children }: { children: React.ReactNode }) {
  return <div className={`${T.s} text-foreground/70 space-y-1`}>{children}</div>;
}

// Single poetic line
function Line({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

// List block
function ListBlock({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 pl-1">
      {items.map((item, i) => (
        <p key={i} className={`${T.s} text-foreground/70`}>
          {item}
        </p>
      ))}
    </div>
  );
}

// Table of contents item
function TOCItem({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <a
      href={`#${id}`}
      className={`${T.s} text-foreground/50 hover:text-foreground transition-colors duration-300 block py-2`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="text-foreground/30 mr-3">{number}</span>
      {title}
    </a>
  );
}

export default function BiologicalFounder() {
  const { navSuffix, footerText, href: h, copy, isLovie } = useBranding();

  // Wrap text components to auto-replace founder → team member on Lovie
  const LP = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <P className={className}>{replaceFounderText(children, isLovie)}</P>
  );
  const LEm = ({ children }: { children: React.ReactNode }) => (
    <Em>{replaceFounderText(children, isLovie)}</Em>
  );
  const LLine = ({ children }: { children: React.ReactNode }) => (
    <Line>{replaceFounderText(children, isLovie)}</Line>
  );
  const LArticle = ({ number, title, subtitle, children, id }: { number: string; title: string; subtitle?: string; children: React.ReactNode; id?: string }) => (
    <Article number={number} title={isLovie ? title.replace(/Founder/g, 'Team Member').replace(/founder/g, 'team member') : title} subtitle={subtitle ? (isLovie ? subtitle.replace(/Founder/g, 'Team Member').replace(/founder/g, 'team member') : subtitle) : undefined} id={id}>
      {children}
    </Article>
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  const articles = [
    { number: "I", title: "Engineering Human Flourishing in the Age of AI", id: "article-1" },
    { number: "II", title: copy.bioFounderArticle2Title, id: "article-2" },
    { number: "III", title: "Smudging Palo Santo in the Age of Artificial Intelligence", id: "article-3" },
    { number: "IV", title: "Silicon Valley Is Optimizing the Wrong System", id: "article-4" },
    { number: "V", title: "The Vibe House Manifesto", id: "article-5" },
    { number: "VI", title: copy.bioFounderArticle6Title, id: "article-6" },
    { number: "VII", title: "The House as a Nervous System", id: "article-7" },
    { number: "VIII", title: copy.bioFounderArticle8Title, id: "article-8" },
    { number: "IX", title: "Spiritual Infrastructure for Builders", id: "article-9" },
    { number: "X", title: copy.bioFounderArticle10Title, id: "article-10" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={copy.bioFounderPageTitle}
        description={copy.seoBioFounderDescription}
        path="/biological-founder"
        keywords={copy.bioFounderSeoKeywords}
        ogType="article"
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href={h("/")} className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">{navSuffix}</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href={h("/why")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Why Now</Link>
            <Link href={h("/biological-founder")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>{copy.navLabelBioFounder}</Link>
            <Link href={h("/the-founders-pharmacy")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>{copy.navLabelPharmacy}</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-5 py-2`}>
              <Link href={h("/#join")}>Join our next event</Link>
            </Button>
            <button
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 flex flex-col gap-5">
              <Link href={h("/why")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Why Now
              </Link>
              <Link href={h("/biological-founder")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                {copy.navLabelBioFounder}
              </Link>
              <Link href={h("/the-founders-pharmacy")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                {copy.navLabelPharmacy}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-8">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <Link href={h("/")} className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2`}>
                  <ArrowLeft className="w-3 h-3" /> Back to home
                </Link>
                <span className={`${T.nav} text-foreground/15`}>/</span>
                <Link href={h("/the-founders-pharmacy")} className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2`}>
                  {copy.navLabelPharmacy} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            <motion.p
              className={`${T.label} mb-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              A Series on Health, Environment &amp; Building
            </motion.p>

            <motion.h1
              className={`${T.xl} mb-6`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.bioFounderPageHeading}
            </motion.h1>

            <motion.div
              className="w-full h-px bg-foreground/10 mb-10"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className={`${T.m} text-foreground/60 max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {copy.bioFounderIntro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className={`${T.label} flex items-center gap-2 mb-6 hover:text-foreground/60 transition-colors`}
              >
                Table of Contents
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${tocOpen ? "rotate-180" : ""}`} />
              </button>
            </FadeIn>
            {tocOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-l border-foreground/10 pl-6 mb-8"
              >
                {articles.map((a) => (
                  <TOCItem key={a.id} number={a.number} title={a.title} id={a.id} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ARTICLE I */}
      {/* ============================================ */}
      <LArticle number="Article I" title="Engineering Human Flourishing in the Age of AI" subtitle="The Vibe House" id="article-1">
        <LP>San Francisco has no shortage of hacker houses. There are sleep-deprived founders coding through the night, whiteboards filled with impossible ideas, refrigerators stocked with energy drinks and ambition.</LP>
        <LEm>This is not that.</LEm>
        <LP>The Vibe House began as a question: If we are building artificial intelligence to advance humanity, shouldn't we begin by advancing ourselves?</LP>
        <LP>For me, technology has always been inseparable from human potential. You cannot build systems of intelligence while neglecting your own nervous system. You cannot architect the future on top of burnout.</LP>
        <LEm>So we engineered something different.</LEm>
        <LP>A house designed not just for productivity — but for vitality.</LP>
        <LP>Every room is filled with large and small living plants. NASA research has shown certain houseplants can significantly reduce airborne toxins; we leaned in fully. Within 24 hours, many indoor plants can reduce measurable volatile organic compounds in enclosed spaces. But the benefit is not only chemical. Looking at greenery lowers cortisol. It signals safety to the brain. It restores cognitive bandwidth.</LP>
        <LP>There are no harsh white lights. Only warm, yellow-toned lighting that honors circadian rhythms. Light is biology. Cool blue light at night suppresses melatonin, fractures sleep, fragments thinking. We build for longevity — not for adrenaline spikes.</LP>
        <LP>The house breathes sunlight. Windows remain open whenever possible. Natural light improves mood, focus, and immune regulation. In the mornings, founders gather barefoot on wooden floors — grounding, literally and neurologically.</LP>
        <LP>Even seating is intentional. We often sit on the floor. Floor-sitting improves mobility, hip flexibility, and posture. It subtly resists the sedentary decay of modern work life. You cannot discuss the future of AI while ignoring your own biomechanics.</LP>
        <LP>Nature paintings and floral art fill the walls. Studies show viewing natural imagery reduces stress markers and increases creativity. The brain does not distinguish sharply between actual nature and well-rendered depictions. Both soothe.</LP>
        <LP>Outside, olive trees and rosemary grow in the garden. A lemon tree leans toward the sun. There is something ancient and stabilizing about tending living things while building digital worlds.</LP>
        <Lines>
          <LLine>The Vibe House is not a retreat from innovation. It is a refinement of it.</LLine>
          <LLine>Spiritual meets operational.</LLine>
          <LLine>Relaxed meets disciplined.</LLine>
          <LLine>Nature meets nurture.</LLine>
        </Lines>
        <LEm>We build intelligence — but we begin with coherence.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE II */}
      {/* ============================================ */}
      <LArticle number="Article II" title="Tea, Salt, and the Founder's Immune System" id="article-2">
        <LP>In most startup houses, caffeine is the fuel.</LP>
        <LEm>In ours, it's soursop, jasmine green, and butterfly pea.</LEm>
        <LP>The kitchen counter reads like an apothecary crossed with a Mediterranean grandmother's pantry.</LP>
        <LP>Soursop leaf tea has been studied for its antioxidant compounds. While no tea cures disease — and we are cautious with such claims — antioxidants support cellular repair and immune resilience. Founders operate in cognitive marathons. Oxidative stress is real.</LP>
        <LP>Butterfly pea flower tea, that luminous cobalt blue infusion, contains anthocyanins — compounds associated with anti-inflammatory and neuroprotective properties. It sharpens attention without agitation.</LP>
        <LP>Clove and anise simmer gently on colder evenings. Both contain antimicrobial properties long recognized in traditional medicine. Dandelion root tea supports liver function — the body's detoxification engine. The liver processes everything: stress hormones, environmental toxins, metabolic waste. Supporting it is not trend; it is infrastructure.</LP>
        <LP>Jasmine green tea delivers L-theanine — a compound shown to promote calm alertness. The state every founder claims to want but rarely achieves.</LP>
        <LP>There is no Morton's salt in this kitchen. Only mineral-rich sea salts — containing trace elements absent in heavily refined varieties. Electrolytes are not branding; they are cellular communication.</LP>
        <LP>Food is simple: no processed sugars, no refined flours. Probiotic-rich yogurt. Fermented vegetables. Olive oil from Urla — my hometown in Turkey — where olive trees have grown longer than most governments have existed. Extra virgin olive oil contains polyphenols associated with cardiovascular and anti-inflammatory benefits.</LP>
        <LP>Goat milk soaps in the bathrooms. Plastic-free packaging wherever possible. Non-toxic cleaning supplies. Your skin absorbs what you place upon it; your lungs absorb what you spray.</LP>
        <LP>Oscillococcinum, arnica, and other homeopathics sit quietly in drawers — gentle supports, not miracle cures. Colloidal silver is used sparingly and with discernment. We do not worship alternative medicine; we integrate thoughtfully.</LP>
        <LP>Organic vitamins fill the gaps modern soil can no longer reliably provide.</LP>
        <LEm>Health is not biohacking theater. It is disciplined simplicity.</LEm>
        <Lines>
          <LLine>The founder immune system is an asset class.</LLine>
          <LLine>Protect it.</LLine>
        </Lines>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE III */}
      {/* ============================================ */}
      <LArticle number="Article III" title="Smudging Palo Santo in the Age of Artificial Intelligence" id="article-3">
        <LP>You can call it spiritual. You can call it atmospheric engineering.</LP>
        <LP>Every few days, we walk through the house with palo santo and sage. The smoke rises, subtle and woody. Windows open. Air shifts.</LP>
        <LP>Scientifically, burning certain plant materials has been shown to reduce airborne bacteria for limited periods. Symbolically, it marks reset. In high-performance environments, ritual matters. The nervous system thrives on signals of renewal.</LP>
        <LP>There is binaural beats music in the evenings — frequencies shown to influence brainwave states, encouraging focus or deep relaxation depending on the track. Sound alters cognition.</LP>
        <LP>Essential oil diffusers hum softly — organic oils only. No synthetic perfumes. Lavender for parasympathetic calm. Rosemary for alertness. Citrus for mood elevation.</LP>
        <LP>Mantak Chia's teachings on energy circulation influence some of our morning breathwork sessions. Whether you interpret it through Taoist frameworks or modern vagal tone science, the result is the same: founders who regulate stress outperform those who suppress it.</LP>
        <LP>Reiki practitioners occasionally bless the space. Astrology conversations emerge over tea. Skeptics are welcome. Participation is optional. What matters is coherence — psychological safety, emotional fluency, intellectual rigor coexisting.</LP>
        <LP>Positive, funny, timeless quotes hang on the walls. Humor lowers stress hormones. Optimism expands cognition. The brain in threat mode cannot innovate.</LP>
        <Lines>
          <LLine>This house is comfortable but intentional.</LLine>
          <LLine>Relaxing yet disciplined.</LLine>
          <LLine>Grounded yet expansive.</LLine>
        </Lines>
        <LP>We are building AI companies here. But we are also building humans capable of wielding that power wisely.</LP>
        <Lines>
          <LLine>The future will not be determined solely by code quality.</LLine>
          <LLine>It will be shaped by nervous systems.</LLine>
          <LLine>By health.</LLine>
          <LLine>By consciousness.</LLine>
        </Lines>
        <LP>The Vibe House is a small experiment. If we can cultivate clarity inside four walls in San Francisco — perhaps we can scale it to society.</LP>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE IV — The Controversial One */}
      {/* ============================================ */}
      <LArticle number="Article IV" title="Silicon Valley Is Optimizing the Wrong System" id="article-4">
        <LP>Silicon Valley believes it is building the future.</LP>
        <LEm>But most founders are running on nervous systems that are quietly collapsing.</LEm>
        <LP>We speak endlessly about optimizing machine learning models — yet ignore sleep cycles. We debate inference costs — while consuming refined sugar at 2 a.m. We fund longevity startups — while living in chronic inflammation.</LP>
        <LP>This is not hypocrisy. It is blind spot.</LP>
        <LEm>The Vibe House began as a quiet rebellion against performative productivity.</LEm>
        <Lines>
          <LLine>No processed food.</LLine>
          <LLine>No synthetic fragrances.</LLine>
          <LLine>No harsh lighting.</LLine>
          <LLine>No chemical cleaning sprays aerosolized into the lungs of people designing civilization's next layer.</LLine>
        </Lines>
        <LP>Instead:</LP>
        <Lines>
          <LLine>Mineral-rich salt, because electrolytes govern cellular intelligence.</LLine>
          <LLine>Fermented foods, because the microbiome influences mood and cognition.</LLine>
          <LLine>Dandelion tea for liver support — because detoxification is not aesthetic, it is metabolic.</LLine>
          <LLine>Jasmine green tea for calm focus.</LLine>
          <LLine>Clove and anise for antimicrobial support.</LLine>
        </Lines>
        <LP>We smudge palo santo not because we are naïve — but because ritual regulates the nervous system. And regulated nervous systems build better companies.</LP>
        <LP>Large and small living plants in every room. Not decor — filtration. Air quality influences cognitive performance more than most venture decks acknowledge.</LP>
        <Lines>
          <LLine>Yellow light at night to protect melatonin.</LLine>
          <LLine>Natural light by day to entrain circadian rhythm.</LLine>
          <LLine>Bamboo bedding to reduce synthetic off-gassing.</LLine>
          <LLine>Goat milk soap. Olive oil soap. Plastic-free bathrooms.</LLine>
        </Lines>
        <LP>Is this excessive?</LP>
        <LEm>Or is it simply disciplined?</LEm>
        <LP>If we are serious about advancing humanity, we must start by eliminating the environmental toxins we have normalized.</LP>
        <Lines>
          <LLine>The founder is infrastructure.</LLine>
          <LLine>Burned-out founders build brittle systems.</LLine>
          <LLine>Regulated founders build resilient ones.</LLine>
        </Lines>
        <LEm>Silicon Valley optimized speed. It is time to optimize coherence.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE V — Manifesto */}
      {/* ============================================ */}
      <LArticle number="Article V" title="The Vibe House Manifesto" id="article-5">
        <LP className="font-medium">We're building AI companies in San Francisco. But first, we're building humans.</LP>
        <Lines>
          <LLine>No processed foods.</LLine>
          <LLine>No refined sugars.</LLine>
          <LLine>No synthetic fragrances.</LLine>
          <LLine>No toxic cleaning products.</LLine>
        </Lines>
        <LP>Yes to:</LP>
        <Lines>
          <LLine>Soursop and jasmine green tea.</LLine>
          <LLine>Mineral-rich sea salt.</LLine>
          <LLine>Fermented foods and probiotics.</LLine>
          <LLine>Olive oil from ancient groves.</LLine>
          <LLine>Organic vitamins.</LLine>
        </Lines>
        <Lines>
          <LLine>Yes to plants in every room.</LLine>
          <LLine>Yes to natural light and circadian lighting at night.</LLine>
          <LLine>Yes to bamboo bedding and plastic-free spaces.</LLine>
          <LLine>Yes to palo santo resets and binaural beats.</LLine>
          <LLine>Yes to breathwork, energy work, and nervous system regulation.</LLine>
        </Lines>
        <LEm>This isn't aesthetic wellness culture. It's performance architecture.</LEm>
        <Lines>
          <LLine>Your liver processes stress.</LLine>
          <LLine>Your microbiome shapes your mood.</LLine>
          <LLine>Your lighting impacts your sleep.</LLine>
          <LLine>Your environment alters your cognition.</LLine>
        </Lines>
        <Lines>
          <LLine>We don't separate spiritual from operational.</LLine>
          <LLine>We don't separate health from output.</LLine>
          <LLine>We don't separate consciousness from code.</LLine>
        </Lines>
        <Lines>
          <LLine>Nature meets nurture.</LLine>
          <LLine>Relaxed meets disciplined.</LLine>
          <LLine>Spiritual meets scalable.</LLine>
        </Lines>
        <LEm>If we're going to build artificial intelligence — let's not neglect our own.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE VI — Series Intro */}
      {/* ============================================ */}
      <LArticle number="Article VI" title="Designing for the Biological Founder" subtitle="A New Series on Health, Environment, and Building Without Burning Out" id="article-6">
        <LP>Silicon Valley knows how to optimize machines. We optimize inference speed. We optimize model performance. We optimize capital efficiency.</LP>
        <LEm>But we rarely optimize the founder.</LEm>
        <LP>We talk about longevity while sleeping five hours. We fund health startups while eating processed food at 11 p.m. We build artificial intelligence inside bodies that are inflamed, overstimulated, and quietly exhausted.</LP>
        <LP>That contradiction has been sitting with me for years.</LP>
        <LP>So this winter, we tried something different. We designed a founder house in San Francisco — not around aesthetics, not around status, not around trend — but around biology.</LP>
        <Lines>
          <LLine>Light that protects circadian rhythm.</LLine>
          <LLine>Plants in every room to calm the nervous system.</LLine>
          <LLine>No synthetic fragrance.</LLine>
          <LLine>No toxic cleaning products.</LLine>
          <LLine>No processed sugar.</LLine>
          <LLine>Mineral-rich salt.</LLine>
          <LLine>Herbal teas instead of energy drinks.</LLine>
          <LLine>Warm lighting at night.</LLine>
          <LLine>Sunlight in the morning.</LLine>
          <LLine>Ritual resets.</LLine>
          <LLine>Spiritual curiosity without dogma.</LLine>
        </Lines>
        <LP>It was one of the most joyful design projects I've ever worked on.</LP>
        <LP>Because for once, the question wasn't: "What looks good?" It was: "What supports the human organism?"</LP>
        <LP>This series explores what happens when you treat the founder's nervous system as infrastructure. When you see the kitchen as medicine. The lighting as hormonal regulation. The plants as stress reduction. The environment as performance architecture.</LP>
        <LEm>If we're going to build intelligent systems for the future — we might want to start by stabilizing the humans building them.</LEm>
        <LP>Over the next three essays, I'll share how we designed this space, what we learned, and why I believe biological coherence may be the next competitive advantage.</LP>
        <LP>Because in the end, the company doesn't run on code. It runs on the founder's nervous system.</LP>
        <LEm>Let's start there.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE VII — Part I */}
      {/* ============================================ */}
      <LArticle number="Article VII" title="The House as a Nervous System" subtitle="Designing for the Biological Founder — Part I" id="article-7">
        <LP>When we decided to create a founder house in San Francisco for AI builders, I didn't think about aesthetics first.</LP>
        <LEm>I thought about cortisol.</LEm>
        <LP>If you're building artificial intelligence, you are operating at high cognitive load almost constantly. Your brain is running inference loops all day. Your stress hormones are quietly elevated. Your sleep is fragile. Your immune system is taxed.</LP>
        <LP>And yet most "founder houses" are designed like frat houses with better WiFi.</LP>
        <LP>We wanted something different. Not biohacking theater. Not performative wellness. But biological coherence.</LP>
        <LEm>So we designed the house as if it were a nervous system.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Light as Medicine</p>
        <LP>First: light. Natural light everywhere. Big windows. Air moving through the house.</LP>
        <LP>Sunlight regulates circadian rhythm, which regulates melatonin, which regulates sleep, which regulates emotional stability, immune resilience, and cognitive clarity.</LP>
        <LP>At night, no harsh white LEDs. Only warm yellow lighting. Cool blue light suppresses melatonin and disrupts sleep cycles. If you're building companies long-term, sleep is not optional infrastructure.</LP>

        <p className={`${T.label} mt-12 mb-4`}>Plants in Every Room</p>
        <LP>Every room has living plants. Large and small. Plants can reduce volatile organic compounds indoors and measurably reduce stress markers. Even viewing greenery lowers cortisol and increases creative output.</LP>
        <LP>The house feels softer because it is alive.</LP>
        <LP>Nature paintings and florals fill the walls too. Studies show that even images of nature calm the nervous system.</LP>
        <LEm>You cannot innovate in a chronic fight-or-flight state.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>No Cutting Corners</p>
        <LP>This was the most fun part.</LP>
        <Lines>
          <LLine>No cheap plastics.</LLine>
          <LLine>No synthetic fragrances.</LLine>
          <LLine>No toxic cleaning sprays.</LLine>
          <LLine>Plastic-free where possible.</LLine>
          <LLine>Non-toxic cleaning supplies only.</LLine>
          <LLine>Olive oil and goat milk soaps.</LLine>
          <LLine>Perfume-free everything.</LLine>
          <LLine>Bamboo bedding.</LLine>
          <LLine>Organic essential oil diffusers.</LLine>
        </Lines>
        <LP>Once you start reading labels, you realize most modern interiors are petrochemical showrooms.</LP>
        <LEm>Designing without compromise felt radical and joyful. It felt like designing a body, not a room.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE VIII — Part II */}
      {/* ============================================ */}
      <LArticle number="Article VIII" title="The Founder Kitchen: Food as Infrastructure" subtitle="Designing for the Biological Founder — Part II" id="article-8">
        <LEm>If the nervous system is the operating system, the gut is the motherboard.</LEm>
        <LP>Most startup kitchens are stocked with energy drinks, protein bars, and processed snacks wrapped in plastic.</LP>
        <LP>We stocked herbs.</LP>
        <Lines>
          <LLine>Soursop leaf tea.</LLine>
          <LLine>Butterfly pea flower tea.</LLine>
          <LLine>Dandelion root for liver support.</LLine>
          <LLine>Clove and anise.</LLine>
          <LLine>Jasmine green tea.</LLine>
          <LLine>Cinnamon.</LLine>
        </Lines>
        <LP>No — these are not miracle cures. But antioxidants matter. Liver support matters. Anti-inflammatory compounds matter. L-theanine from green tea supports calm alertness instead of jittery adrenaline.</LP>
        <LP>We use mineral-rich sea salt — not heavily refined table salt stripped of trace elements.</LP>
        <Lines>
          <LLine>No processed foods.</LLine>
          <LLine>No refined sugars.</LLine>
          <LLine>Plenty of probiotics.</LLine>
          <LLine>Fermented vegetables.</LLine>
          <LLine>Olive oil from Turkey — where olive oil is closer to medicine than condiment.</LLine>
        </Lines>
        <LP>The liver processes stress hormones. The microbiome influences mood. Blood sugar stability influences decision-making.</LP>
        <LEm>There is no neutral food. It either supports clarity — or erodes it.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Gentle Supports</p>
        <LP>In drawers you'll find: arnica, oscillococcinum, homeopathics, organic vitamins. Occasionally colloidal silver (used sparingly and responsibly).</LP>
        <LP>We are not anti-medicine. We are pro-support. Functional health isn't fringe — it's preventative.</LP>
        <LEm>If founders are infrastructure, their immune systems are assets. Protect them.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE IX — Part III */}
      {/* ============================================ */}
      <LArticle number="Article IX" title="Spiritual Infrastructure for Builders" subtitle="Designing for the Biological Founder — Part III" id="article-9">
        <LEm>Here's where it gets interesting.</LEm>
        <LP>Every few days, we walk through the house with palo santo or sage. You can call it spiritual. You can call it ritual. You can call it antimicrobial smoke (which historically it was used for).</LP>
        <LEm>But what it really does is signal reset. Ritual regulates the nervous system. In high-performance environments, reset cycles matter.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Sound, Energy, and Flow</p>
        <LP>In the evenings, binaural beats play softly — frequencies shown to influence brainwave states. Lavender diffuses for calm. Rosemary for clarity. Citrus for uplift.</LP>
        <LP>We encourage floor sitting. It improves mobility, posture, and longevity markers. The ability to move from floor to standing correlates with long-term health outcomes.</LP>
        <LP>There's breathwork. A little Mantak Chia energy circulation philosophy. Occasional reiki sessions. Astrology conversations over tea.</LP>
        <LP>You don't have to believe in everything. But you cannot deny that humans are more than cognitive processors.</LP>
        <LEm>Spiritual and operational can coexist.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>The Garden</p>
        <Lines>
          <LLine>Outside: olive trees, rosemary, a lemon tree.</LLine>
        </Lines>
        <LP>Tending something living while building artificial intelligence keeps perspective. Technology moves fast. Nature moves wisely.</LP>

        <p className={`${T.label} mt-12 mb-4`}>The Thesis</p>
        <Lines>
          <LLine>Comfortable yet mindful.</LLine>
          <LLine>Relaxing yet productive.</LLine>
          <LLine>Nature meets nurture.</LLine>
        </Lines>
        <LP>If we are serious about advancing humanity with AI, we should build environments that support human biology first.</LP>
        <LEm>The founder nervous system is not separate from the company. It is the company.</LEm>
        <LP>Designing this way wasn't just strategic. It was joyful. No corners cut. No cheap shortcuts. No synthetic compromises. Just coherence.</LP>
        <LEm>And honestly? It might be the most powerful productivity hack we've ever built.</LEm>
      </LArticle>

      {/* ============================================ */}
      {/* ARTICLE X — One-Off */}
      {/* ============================================ */}
      <LArticle number="Article X" title="Designing a Founder House for Health, Not Just Aesthetics" id="article-10">
        <LP>When most people design a house in San Francisco for AI founders, they think about WiFi speed, standing desks, espresso machines, and maybe a cold plunge if they're feeling ambitious.</LP>
        <Lines>
          <LLine>We thought about the liver.</LLine>
          <LLine>We thought about circadian rhythm.</LLine>
          <LLine>We thought about nervous systems.</LLine>
          <LLine>We thought about inflammation.</LLine>
        </Lines>
        <LP>We thought about what it actually means to build intelligence — human and artificial — in the same space.</LP>
        <LEm>And honestly? It was one of the most fun interior design projects I've ever done. Because this time, we weren't just designing for "vibes." We were designing for biology.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>The Rule: No Cutting Corners</p>
        <LP>I didn't want cheap plastics. I didn't want synthetic fragrance. I didn't want toxic cleaning sprays quietly floating in the air while founders discussed the future of civilization.</LP>
        <LEm>If we're building AI companies, we can at least remove endocrine disruptors from the bathroom.</LEm>
        <Lines>
          <LLine>Plastic-free wherever possible.</LLine>
          <LLine>Non-toxic cleaning supplies only.</LLine>
          <LLine>Olive oil and goat milk soaps (perfume-free).</LLine>
          <LLine>Organic essential oils instead of synthetic scent.</LLine>
          <LLine>Bamboo bedding instead of petroleum-based fibers.</LLine>
          <LLine>Warm yellow lighting at night to protect melatonin.</LLine>
        </Lines>
        <LP>It's wild how much of modern "interior design" is just petrochemicals made pretty. When you start reading labels, you realize the average home is off-gassing more than a small laboratory.</LP>

        <p className={`${T.label} mt-12 mb-4`}>Plants Everywhere</p>
        <LP>Every single room has real plants. Large ones. Small ones. Trailing ones. There's something magical about walking into a space that feels alive. Beyond beauty, plants can reduce volatile organic compounds in indoor air and measurably lower stress markers. Even looking at greenery lowers cortisol.</LP>
        <LP>But the effect is deeper than research studies. The space feels calmer. Softer. More breathable.</LP>
        <LP>Nature paintings and florals fill the walls too — because even imagery of nature has been shown to reduce stress and improve focus. The brain responds to these cues of safety.</LP>
        <LEm>When you're building ambitious technology, your nervous system needs counterbalance.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Light Is Medicine</p>
        <LP>We prioritized natural light first. The house has large windows, and we keep them open whenever possible. Sunlight regulates circadian rhythm, improves mood, supports vitamin D production, and literally anchors your hormonal cycles.</LP>
        <LP>At night, we switch to warm yellow lighting. No harsh overhead blues. No sterile office glow.</LP>
        <LEm>Light affects melatonin. Melatonin affects sleep. Sleep affects immune function, emotional regulation, cognition, and resilience. This isn't aesthetic preference. It's biology.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>The Kitchen as Apothecary</p>
        <LP>Instead of stocking energy drinks, we stocked teas:</LP>
        <LP><strong>Soursop Leaf</strong> — Immune system, cellular antioxidant defense, digestive tract. Contains acetogenins, alkaloids, and antioxidants. Supports immune resilience and reduces oxidative stress.</LP>
        <LP><strong>Butterfly Pea Flower</strong> — Brain and nervous system, skin, eyes, circulation. Contains anthocyanins. Neuroprotective antioxidant support, cognitive clarity, anti-inflammatory properties.</LP>
        <LP><strong>Dandelion Root</strong> — Liver, gallbladder, digestive system. Traditionally used as a liver tonic. Supports bile production, kidney function, and helps the liver process toxins.</LP>
        <LP><strong>Clove</strong> — Immune system, digestive tract, oral health. Contains eugenol. Antimicrobial, anti-inflammatory, traditionally used for gut health.</LP>
        <LP><strong>Anise</strong> — Digestive system, respiratory tract. Relieves gas and bloating, expectorant properties, mild antimicrobial action.</LP>
        <LP><strong>Jasmine Green Tea</strong> — Brain, cardiovascular system, immune system. L-theanine promotes calm alertness. Supports cardiovascular health and cellular antioxidant defense.</LP>
        <LP><strong>Cinnamon</strong> — Blood sugar regulation, pancreas, cardiovascular system. Improves insulin sensitivity, supports stable blood sugar levels. Stable blood sugar equals stable mood and cognitive clarity.</LP>
        <LP>Are these miracle cures? Of course not. But antioxidants matter. Liver support matters. Anti-inflammatory compounds matter.</LP>
        <LP>We use mineral-rich sea salt. No processed foods. No refined sugars. Lots of probiotics. Fermented vegetables. Olive oil from Turkey — where it feels like medicine, not just food.</LP>
        <LEm>Food is either supporting inflammation or reducing it. There is no neutral.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Ritual, Reset, Nervous System</p>
        <LP>Every few days, we walk through the house with palo santo or sage. Call it spiritual. Call it antimicrobial. Call it nervous system regulation. Ritual matters.</LP>
        <LP>We play binaural beats in the evenings. We diffuse organic essential oils — lavender for calm, rosemary for alertness, citrus for uplift.</LP>
        <LP>Even the quotes on the walls are intentional. Humor lowers stress hormones. Positive framing expands cognition.</LP>
        <LEm>You cannot innovate in a constant stress response.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Floor Sitting, Energy, and Wholeness</p>
        <LP>We encourage floor sitting. It improves hip mobility, posture, and longevity markers. It also changes how conversations feel — less rigid, more collaborative.</LP>
        <LP>There's breathwork. Some Mantak Chia energy circulation influence. A bit of astrology for fun. Occasional reiki sessions in the home.</LP>
        <LP>You don't have to believe in everything. But you do have to acknowledge that humans are more than brains attached to laptops.</LP>
        <LEm>Spiritual and operational don't have to be opposites. They can be integrated.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>The Garden</p>
        <LP>Outside we have olive trees, rosemary, a lemon tree. There is something grounding about tending living plants while discussing artificial intelligence. It reminds you what is ancient. What is biological. What is slow and patient.</LP>
        <LEm>Technology moves fast. Nature moves wisely.</LEm>

        <p className={`${T.label} mt-12 mb-4`}>Designing This Way Was Joyful</p>
        <LP>The most surprising part? How fun it was to design without compromise.</LP>
        <LP>To not ask: "What's cheaper?" "What's easier?" "What's standard?"</LP>
        <LP>But instead: "What supports the human organism?" "What lowers inflammation?" "What increases joy?" "What improves sleep?"</LP>
        <LEm>It felt like designing a nervous system, not just a house.</LEm>
        <Lines>
          <LLine>Comfortable yet mindful.</LLine>
          <LLine>Relaxing yet productive.</LLine>
          <LLine>Nature meets nurture.</LLine>
        </Lines>
        <LP>If we're serious about advancing humanity with AI — maybe we should start by creating spaces that support human flourishing first.</LP>
        <LP>And yes. It looks beautiful.</LP>
        <LEm>But more importantly — it feels alive.</LEm>
      </LArticle>

      {/* Curated Products CTA */}
      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-6 text-center`}>Continue Reading</p>
              <h2 className={`${T.l} text-center mb-4`}>{copy.bioFounderCtaTitle}</h2>
              <Divider />
              <p className={`${T.m} text-foreground/60 text-center mb-10`}>
                Every product in Vibe House was chosen with intention. Explore the full catalog of what we stock and why — from essential oils to organic sleep textiles.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`${T.m} rounded-full px-10 py-7 border-foreground/15 hover:bg-foreground/5`}
                >
                  <Link href={h("/the-founders-pharmacy")}>
                    Explore Curated Products <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Button
                asChild
                size="lg"
                className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}
              >
                <Link href={h("/#join")}>
                  Join our next event <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`${T.nav} text-foreground/30`}>{footerText}</p>
            <p className={`${T.nav} text-foreground/30`}>San Francisco, California</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
