/*
  BIOLOGICAL FOUNDER — Editorial long-form article page
  All articles from the Vibe House series on health, environment, and building without burning out
  Same dictionary-definition typography as the homepage and WhyNow page
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState, useRef } from "react";

// Typography — matching site-wide system
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  const articles = [
    { number: "I", title: "Engineering Human Flourishing in the Age of AI", id: "article-1" },
    { number: "II", title: "Tea, Salt, and the Founder's Immune System", id: "article-2" },
    { number: "III", title: "Smudging Palo Santo in the Age of Artificial Intelligence", id: "article-3" },
    { number: "IV", title: "Silicon Valley Is Optimizing the Wrong System", id: "article-4" },
    { number: "V", title: "The Vibe House Manifesto", id: "article-5" },
    { number: "VI", title: "Designing for the Biological Founder", id: "article-6" },
    { number: "VII", title: "The House as a Nervous System", id: "article-7" },
    { number: "VIII", title: "The Founder Kitchen: Food as Infrastructure", id: "article-8" },
    { number: "IX", title: "Spiritual Infrastructure for Builders", id: "article-9" },
    { number: "X", title: "Designing a Founder House for Health", id: "article-10" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">SF</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/why" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Why Now</Link>
            <Link href="/biological-founder" className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>Biological Founder</Link>
            <Link href="/biological-founder/curated-products" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>The Founder's Pharmacy</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-5 py-2`}>
              <Link href="/#join">Join our next event</Link>
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
              <Link href="/why" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Why Now
              </Link>
              <Link href="/biological-founder" className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Biological Founder
              </Link>
              <Link href="/biological-founder/curated-products" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                The Founder's Pharmacy
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
                <Link href="/" className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2`}>
                  <ArrowLeft className="w-3 h-3" /> Back to home
                </Link>
                <span className={`${T.nav} text-foreground/15`}>/</span>
                <Link href="/biological-founder/curated-products" className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2`}>
                  The Founder's Pharmacy <ArrowRight className="w-3 h-3" />
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
              Designing for the Biological Founder
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
              Silicon Valley knows how to optimize machines. We optimize inference speed, model performance, capital efficiency. But we rarely optimize the founder. This series explores what happens when you treat the founder's nervous system as infrastructure.
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
      <Article number="Article I" title="Engineering Human Flourishing in the Age of AI" subtitle="The Vibe House" id="article-1">
        <P>San Francisco has no shortage of hacker houses. There are sleep-deprived founders coding through the night, whiteboards filled with impossible ideas, refrigerators stocked with energy drinks and ambition.</P>
        <Em>This is not that.</Em>
        <P>The Vibe House began as a question: If we are building artificial intelligence to advance humanity, shouldn't we begin by advancing ourselves?</P>
        <P>For me, technology has always been inseparable from human potential. You cannot build systems of intelligence while neglecting your own nervous system. You cannot architect the future on top of burnout.</P>
        <Em>So we engineered something different.</Em>
        <P>A house designed not just for productivity — but for vitality.</P>
        <P>Every room is filled with large and small living plants. NASA research has shown certain houseplants can significantly reduce airborne toxins; we leaned in fully. Within 24 hours, many indoor plants can reduce measurable volatile organic compounds in enclosed spaces. But the benefit is not only chemical. Looking at greenery lowers cortisol. It signals safety to the brain. It restores cognitive bandwidth.</P>
        <P>There are no harsh white lights. Only warm, yellow-toned lighting that honors circadian rhythms. Light is biology. Cool blue light at night suppresses melatonin, fractures sleep, fragments thinking. We build for longevity — not for adrenaline spikes.</P>
        <P>The house breathes sunlight. Windows remain open whenever possible. Natural light improves mood, focus, and immune regulation. In the mornings, founders gather barefoot on wooden floors — grounding, literally and neurologically.</P>
        <P>Even seating is intentional. We often sit on the floor. Floor-sitting improves mobility, hip flexibility, and posture. It subtly resists the sedentary decay of modern work life. You cannot discuss the future of AI while ignoring your own biomechanics.</P>
        <P>Nature paintings and floral art fill the walls. Studies show viewing natural imagery reduces stress markers and increases creativity. The brain does not distinguish sharply between actual nature and well-rendered depictions. Both soothe.</P>
        <P>Outside, olive trees and rosemary grow in the garden. A lemon tree leans toward the sun. There is something ancient and stabilizing about tending living things while building digital worlds.</P>
        <Lines>
          <Line>The Vibe House is not a retreat from innovation. It is a refinement of it.</Line>
          <Line>Spiritual meets operational.</Line>
          <Line>Relaxed meets disciplined.</Line>
          <Line>Nature meets nurture.</Line>
        </Lines>
        <Em>We build intelligence — but we begin with coherence.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE II */}
      {/* ============================================ */}
      <Article number="Article II" title="Tea, Salt, and the Founder's Immune System" id="article-2">
        <P>In most startup houses, caffeine is the fuel.</P>
        <Em>In ours, it's soursop, jasmine green, and butterfly pea.</Em>
        <P>The kitchen counter reads like an apothecary crossed with a Mediterranean grandmother's pantry.</P>
        <P>Soursop leaf tea has been studied for its antioxidant compounds. While no tea cures disease — and we are cautious with such claims — antioxidants support cellular repair and immune resilience. Founders operate in cognitive marathons. Oxidative stress is real.</P>
        <P>Butterfly pea flower tea, that luminous cobalt blue infusion, contains anthocyanins — compounds associated with anti-inflammatory and neuroprotective properties. It sharpens attention without agitation.</P>
        <P>Clove and anise simmer gently on colder evenings. Both contain antimicrobial properties long recognized in traditional medicine. Dandelion root tea supports liver function — the body's detoxification engine. The liver processes everything: stress hormones, environmental toxins, metabolic waste. Supporting it is not trend; it is infrastructure.</P>
        <P>Jasmine green tea delivers L-theanine — a compound shown to promote calm alertness. The state every founder claims to want but rarely achieves.</P>
        <P>There is no Morton's salt in this kitchen. Only mineral-rich sea salts — containing trace elements absent in heavily refined varieties. Electrolytes are not branding; they are cellular communication.</P>
        <P>Food is simple: no processed sugars, no refined flours. Probiotic-rich yogurt. Fermented vegetables. Olive oil from Urla — my hometown in Turkey — where olive trees have grown longer than most governments have existed. Extra virgin olive oil contains polyphenols associated with cardiovascular and anti-inflammatory benefits.</P>
        <P>Goat milk soaps in the bathrooms. Plastic-free packaging wherever possible. Non-toxic cleaning supplies. Your skin absorbs what you place upon it; your lungs absorb what you spray.</P>
        <P>Oscillococcinum, arnica, and other homeopathics sit quietly in drawers — gentle supports, not miracle cures. Colloidal silver is used sparingly and with discernment. We do not worship alternative medicine; we integrate thoughtfully.</P>
        <P>Organic vitamins fill the gaps modern soil can no longer reliably provide.</P>
        <Em>Health is not biohacking theater. It is disciplined simplicity.</Em>
        <Lines>
          <Line>The founder immune system is an asset class.</Line>
          <Line>Protect it.</Line>
        </Lines>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE III */}
      {/* ============================================ */}
      <Article number="Article III" title="Smudging Palo Santo in the Age of Artificial Intelligence" id="article-3">
        <P>You can call it spiritual. You can call it atmospheric engineering.</P>
        <P>Every few days, we walk through the house with palo santo and sage. The smoke rises, subtle and woody. Windows open. Air shifts.</P>
        <P>Scientifically, burning certain plant materials has been shown to reduce airborne bacteria for limited periods. Symbolically, it marks reset. In high-performance environments, ritual matters. The nervous system thrives on signals of renewal.</P>
        <P>There is binaural beats music in the evenings — frequencies shown to influence brainwave states, encouraging focus or deep relaxation depending on the track. Sound alters cognition.</P>
        <P>Essential oil diffusers hum softly — organic oils only. No synthetic perfumes. Lavender for parasympathetic calm. Rosemary for alertness. Citrus for mood elevation.</P>
        <P>Mantak Chia's teachings on energy circulation influence some of our morning breathwork sessions. Whether you interpret it through Taoist frameworks or modern vagal tone science, the result is the same: founders who regulate stress outperform those who suppress it.</P>
        <P>Reiki practitioners occasionally bless the space. Astrology conversations emerge over tea. Skeptics are welcome. Participation is optional. What matters is coherence — psychological safety, emotional fluency, intellectual rigor coexisting.</P>
        <P>Positive, funny, timeless quotes hang on the walls. Humor lowers stress hormones. Optimism expands cognition. The brain in threat mode cannot innovate.</P>
        <Lines>
          <Line>This house is comfortable but intentional.</Line>
          <Line>Relaxing yet disciplined.</Line>
          <Line>Grounded yet expansive.</Line>
        </Lines>
        <P>We are building AI companies here. But we are also building humans capable of wielding that power wisely.</P>
        <Lines>
          <Line>The future will not be determined solely by code quality.</Line>
          <Line>It will be shaped by nervous systems.</Line>
          <Line>By health.</Line>
          <Line>By consciousness.</Line>
        </Lines>
        <P>The Vibe House is a small experiment. If we can cultivate clarity inside four walls in San Francisco — perhaps we can scale it to society.</P>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE IV — The Controversial One */}
      {/* ============================================ */}
      <Article number="Article IV" title="Silicon Valley Is Optimizing the Wrong System" id="article-4">
        <P>Silicon Valley believes it is building the future.</P>
        <Em>But most founders are running on nervous systems that are quietly collapsing.</Em>
        <P>We speak endlessly about optimizing machine learning models — yet ignore sleep cycles. We debate inference costs — while consuming refined sugar at 2 a.m. We fund longevity startups — while living in chronic inflammation.</P>
        <P>This is not hypocrisy. It is blind spot.</P>
        <Em>The Vibe House began as a quiet rebellion against performative productivity.</Em>
        <Lines>
          <Line>No processed food.</Line>
          <Line>No synthetic fragrances.</Line>
          <Line>No harsh lighting.</Line>
          <Line>No chemical cleaning sprays aerosolized into the lungs of people designing civilization's next layer.</Line>
        </Lines>
        <P>Instead:</P>
        <Lines>
          <Line>Mineral-rich salt, because electrolytes govern cellular intelligence.</Line>
          <Line>Fermented foods, because the microbiome influences mood and cognition.</Line>
          <Line>Dandelion tea for liver support — because detoxification is not aesthetic, it is metabolic.</Line>
          <Line>Jasmine green tea for calm focus.</Line>
          <Line>Clove and anise for antimicrobial support.</Line>
        </Lines>
        <P>We smudge palo santo not because we are naïve — but because ritual regulates the nervous system. And regulated nervous systems build better companies.</P>
        <P>Large and small living plants in every room. Not decor — filtration. Air quality influences cognitive performance more than most venture decks acknowledge.</P>
        <Lines>
          <Line>Yellow light at night to protect melatonin.</Line>
          <Line>Natural light by day to entrain circadian rhythm.</Line>
          <Line>Bamboo bedding to reduce synthetic off-gassing.</Line>
          <Line>Goat milk soap. Olive oil soap. Plastic-free bathrooms.</Line>
        </Lines>
        <P>Is this excessive?</P>
        <Em>Or is it simply disciplined?</Em>
        <P>If we are serious about advancing humanity, we must start by eliminating the environmental toxins we have normalized.</P>
        <Lines>
          <Line>The founder is infrastructure.</Line>
          <Line>Burned-out founders build brittle systems.</Line>
          <Line>Regulated founders build resilient ones.</Line>
        </Lines>
        <Em>Silicon Valley optimized speed. It is time to optimize coherence.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE V — Manifesto */}
      {/* ============================================ */}
      <Article number="Article V" title="The Vibe House Manifesto" id="article-5">
        <P className="font-medium">We're building AI companies in San Francisco. But first, we're building humans.</P>
        <Lines>
          <Line>No processed foods.</Line>
          <Line>No refined sugars.</Line>
          <Line>No synthetic fragrances.</Line>
          <Line>No toxic cleaning products.</Line>
        </Lines>
        <P>Yes to:</P>
        <Lines>
          <Line>Soursop and jasmine green tea.</Line>
          <Line>Mineral-rich sea salt.</Line>
          <Line>Fermented foods and probiotics.</Line>
          <Line>Olive oil from ancient groves.</Line>
          <Line>Organic vitamins.</Line>
        </Lines>
        <Lines>
          <Line>Yes to plants in every room.</Line>
          <Line>Yes to natural light and circadian lighting at night.</Line>
          <Line>Yes to bamboo bedding and plastic-free spaces.</Line>
          <Line>Yes to palo santo resets and binaural beats.</Line>
          <Line>Yes to breathwork, energy work, and nervous system regulation.</Line>
        </Lines>
        <Em>This isn't aesthetic wellness culture. It's performance architecture.</Em>
        <Lines>
          <Line>Your liver processes stress.</Line>
          <Line>Your microbiome shapes your mood.</Line>
          <Line>Your lighting impacts your sleep.</Line>
          <Line>Your environment alters your cognition.</Line>
        </Lines>
        <Lines>
          <Line>We don't separate spiritual from operational.</Line>
          <Line>We don't separate health from output.</Line>
          <Line>We don't separate consciousness from code.</Line>
        </Lines>
        <Lines>
          <Line>Nature meets nurture.</Line>
          <Line>Relaxed meets disciplined.</Line>
          <Line>Spiritual meets scalable.</Line>
        </Lines>
        <Em>If we're going to build artificial intelligence — let's not neglect our own.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE VI — Series Intro */}
      {/* ============================================ */}
      <Article number="Article VI" title="Designing for the Biological Founder" subtitle="A New Series on Health, Environment, and Building Without Burning Out" id="article-6">
        <P>Silicon Valley knows how to optimize machines. We optimize inference speed. We optimize model performance. We optimize capital efficiency.</P>
        <Em>But we rarely optimize the founder.</Em>
        <P>We talk about longevity while sleeping five hours. We fund health startups while eating processed food at 11 p.m. We build artificial intelligence inside bodies that are inflamed, overstimulated, and quietly exhausted.</P>
        <P>That contradiction has been sitting with me for years.</P>
        <P>So this winter, we tried something different. We designed a founder house in San Francisco — not around aesthetics, not around status, not around trend — but around biology.</P>
        <Lines>
          <Line>Light that protects circadian rhythm.</Line>
          <Line>Plants in every room to calm the nervous system.</Line>
          <Line>No synthetic fragrance.</Line>
          <Line>No toxic cleaning products.</Line>
          <Line>No processed sugar.</Line>
          <Line>Mineral-rich salt.</Line>
          <Line>Herbal teas instead of energy drinks.</Line>
          <Line>Warm lighting at night.</Line>
          <Line>Sunlight in the morning.</Line>
          <Line>Ritual resets.</Line>
          <Line>Spiritual curiosity without dogma.</Line>
        </Lines>
        <P>It was one of the most joyful design projects I've ever worked on.</P>
        <P>Because for once, the question wasn't: "What looks good?" It was: "What supports the human organism?"</P>
        <P>This series explores what happens when you treat the founder's nervous system as infrastructure. When you see the kitchen as medicine. The lighting as hormonal regulation. The plants as stress reduction. The environment as performance architecture.</P>
        <Em>If we're going to build intelligent systems for the future — we might want to start by stabilizing the humans building them.</Em>
        <P>Over the next three essays, I'll share how we designed this space, what we learned, and why I believe biological coherence may be the next competitive advantage.</P>
        <P>Because in the end, the company doesn't run on code. It runs on the founder's nervous system.</P>
        <Em>Let's start there.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE VII — Part I */}
      {/* ============================================ */}
      <Article number="Article VII" title="The House as a Nervous System" subtitle="Designing for the Biological Founder — Part I" id="article-7">
        <P>When we decided to create a founder house in San Francisco for AI builders, I didn't think about aesthetics first.</P>
        <Em>I thought about cortisol.</Em>
        <P>If you're building artificial intelligence, you are operating at high cognitive load almost constantly. Your brain is running inference loops all day. Your stress hormones are quietly elevated. Your sleep is fragile. Your immune system is taxed.</P>
        <P>And yet most "founder houses" are designed like frat houses with better WiFi.</P>
        <P>We wanted something different. Not biohacking theater. Not performative wellness. But biological coherence.</P>
        <Em>So we designed the house as if it were a nervous system.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Light as Medicine</p>
        <P>First: light. Natural light everywhere. Big windows. Air moving through the house.</P>
        <P>Sunlight regulates circadian rhythm, which regulates melatonin, which regulates sleep, which regulates emotional stability, immune resilience, and cognitive clarity.</P>
        <P>At night, no harsh white LEDs. Only warm yellow lighting. Cool blue light suppresses melatonin and disrupts sleep cycles. If you're building companies long-term, sleep is not optional infrastructure.</P>

        <p className={`${T.label} mt-12 mb-4`}>Plants in Every Room</p>
        <P>Every room has living plants. Large and small. Plants can reduce volatile organic compounds indoors and measurably reduce stress markers. Even viewing greenery lowers cortisol and increases creative output.</P>
        <P>The house feels softer because it is alive.</P>
        <P>Nature paintings and florals fill the walls too. Studies show that even images of nature calm the nervous system.</P>
        <Em>You cannot innovate in a chronic fight-or-flight state.</Em>

        <p className={`${T.label} mt-12 mb-4`}>No Cutting Corners</p>
        <P>This was the most fun part.</P>
        <Lines>
          <Line>No cheap plastics.</Line>
          <Line>No synthetic fragrances.</Line>
          <Line>No toxic cleaning sprays.</Line>
          <Line>Plastic-free where possible.</Line>
          <Line>Non-toxic cleaning supplies only.</Line>
          <Line>Olive oil and goat milk soaps.</Line>
          <Line>Perfume-free everything.</Line>
          <Line>Bamboo bedding.</Line>
          <Line>Organic essential oil diffusers.</Line>
        </Lines>
        <P>Once you start reading labels, you realize most modern interiors are petrochemical showrooms.</P>
        <Em>Designing without compromise felt radical and joyful. It felt like designing a body, not a room.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE VIII — Part II */}
      {/* ============================================ */}
      <Article number="Article VIII" title="The Founder Kitchen: Food as Infrastructure" subtitle="Designing for the Biological Founder — Part II" id="article-8">
        <Em>If the nervous system is the operating system, the gut is the motherboard.</Em>
        <P>Most startup kitchens are stocked with energy drinks, protein bars, and processed snacks wrapped in plastic.</P>
        <P>We stocked herbs.</P>
        <Lines>
          <Line>Soursop leaf tea.</Line>
          <Line>Butterfly pea flower tea.</Line>
          <Line>Dandelion root for liver support.</Line>
          <Line>Clove and anise.</Line>
          <Line>Jasmine green tea.</Line>
          <Line>Cinnamon.</Line>
        </Lines>
        <P>No — these are not miracle cures. But antioxidants matter. Liver support matters. Anti-inflammatory compounds matter. L-theanine from green tea supports calm alertness instead of jittery adrenaline.</P>
        <P>We use mineral-rich sea salt — not heavily refined table salt stripped of trace elements.</P>
        <Lines>
          <Line>No processed foods.</Line>
          <Line>No refined sugars.</Line>
          <Line>Plenty of probiotics.</Line>
          <Line>Fermented vegetables.</Line>
          <Line>Olive oil from Turkey — where olive oil is closer to medicine than condiment.</Line>
        </Lines>
        <P>The liver processes stress hormones. The microbiome influences mood. Blood sugar stability influences decision-making.</P>
        <Em>There is no neutral food. It either supports clarity — or erodes it.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Gentle Supports</p>
        <P>In drawers you'll find: arnica, oscillococcinum, homeopathics, organic vitamins. Occasionally colloidal silver (used sparingly and responsibly).</P>
        <P>We are not anti-medicine. We are pro-support. Functional health isn't fringe — it's preventative.</P>
        <Em>If founders are infrastructure, their immune systems are assets. Protect them.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE IX — Part III */}
      {/* ============================================ */}
      <Article number="Article IX" title="Spiritual Infrastructure for Builders" subtitle="Designing for the Biological Founder — Part III" id="article-9">
        <Em>Here's where it gets interesting.</Em>
        <P>Every few days, we walk through the house with palo santo or sage. You can call it spiritual. You can call it ritual. You can call it antimicrobial smoke (which historically it was used for).</P>
        <Em>But what it really does is signal reset. Ritual regulates the nervous system. In high-performance environments, reset cycles matter.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Sound, Energy, and Flow</p>
        <P>In the evenings, binaural beats play softly — frequencies shown to influence brainwave states. Lavender diffuses for calm. Rosemary for clarity. Citrus for uplift.</P>
        <P>We encourage floor sitting. It improves mobility, posture, and longevity markers. The ability to move from floor to standing correlates with long-term health outcomes.</P>
        <P>There's breathwork. A little Mantak Chia energy circulation philosophy. Occasional reiki sessions. Astrology conversations over tea.</P>
        <P>You don't have to believe in everything. But you cannot deny that humans are more than cognitive processors.</P>
        <Em>Spiritual and operational can coexist.</Em>

        <p className={`${T.label} mt-12 mb-4`}>The Garden</p>
        <Lines>
          <Line>Outside: olive trees, rosemary, a lemon tree.</Line>
        </Lines>
        <P>Tending something living while building artificial intelligence keeps perspective. Technology moves fast. Nature moves wisely.</P>

        <p className={`${T.label} mt-12 mb-4`}>The Thesis</p>
        <Lines>
          <Line>Comfortable yet mindful.</Line>
          <Line>Relaxing yet productive.</Line>
          <Line>Nature meets nurture.</Line>
        </Lines>
        <P>If we are serious about advancing humanity with AI, we should build environments that support human biology first.</P>
        <Em>The founder nervous system is not separate from the company. It is the company.</Em>
        <P>Designing this way wasn't just strategic. It was joyful. No corners cut. No cheap shortcuts. No synthetic compromises. Just coherence.</P>
        <Em>And honestly? It might be the most powerful productivity hack we've ever built.</Em>
      </Article>

      {/* ============================================ */}
      {/* ARTICLE X — One-Off */}
      {/* ============================================ */}
      <Article number="Article X" title="Designing a Founder House for Health, Not Just Aesthetics" id="article-10">
        <P>When most people design a house in San Francisco for AI founders, they think about WiFi speed, standing desks, espresso machines, and maybe a cold plunge if they're feeling ambitious.</P>
        <Lines>
          <Line>We thought about the liver.</Line>
          <Line>We thought about circadian rhythm.</Line>
          <Line>We thought about nervous systems.</Line>
          <Line>We thought about inflammation.</Line>
        </Lines>
        <P>We thought about what it actually means to build intelligence — human and artificial — in the same space.</P>
        <Em>And honestly? It was one of the most fun interior design projects I've ever done. Because this time, we weren't just designing for "vibes." We were designing for biology.</Em>

        <p className={`${T.label} mt-12 mb-4`}>The Rule: No Cutting Corners</p>
        <P>I didn't want cheap plastics. I didn't want synthetic fragrance. I didn't want toxic cleaning sprays quietly floating in the air while founders discussed the future of civilization.</P>
        <Em>If we're building AI companies, we can at least remove endocrine disruptors from the bathroom.</Em>
        <Lines>
          <Line>Plastic-free wherever possible.</Line>
          <Line>Non-toxic cleaning supplies only.</Line>
          <Line>Olive oil and goat milk soaps (perfume-free).</Line>
          <Line>Organic essential oils instead of synthetic scent.</Line>
          <Line>Bamboo bedding instead of petroleum-based fibers.</Line>
          <Line>Warm yellow lighting at night to protect melatonin.</Line>
        </Lines>
        <P>It's wild how much of modern "interior design" is just petrochemicals made pretty. When you start reading labels, you realize the average home is off-gassing more than a small laboratory.</P>

        <p className={`${T.label} mt-12 mb-4`}>Plants Everywhere</p>
        <P>Every single room has real plants. Large ones. Small ones. Trailing ones. There's something magical about walking into a space that feels alive. Beyond beauty, plants can reduce volatile organic compounds in indoor air and measurably lower stress markers. Even looking at greenery lowers cortisol.</P>
        <P>But the effect is deeper than research studies. The space feels calmer. Softer. More breathable.</P>
        <P>Nature paintings and florals fill the walls too — because even imagery of nature has been shown to reduce stress and improve focus. The brain responds to these cues of safety.</P>
        <Em>When you're building ambitious technology, your nervous system needs counterbalance.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Light Is Medicine</p>
        <P>We prioritized natural light first. The house has large windows, and we keep them open whenever possible. Sunlight regulates circadian rhythm, improves mood, supports vitamin D production, and literally anchors your hormonal cycles.</P>
        <P>At night, we switch to warm yellow lighting. No harsh overhead blues. No sterile office glow.</P>
        <Em>Light affects melatonin. Melatonin affects sleep. Sleep affects immune function, emotional regulation, cognition, and resilience. This isn't aesthetic preference. It's biology.</Em>

        <p className={`${T.label} mt-12 mb-4`}>The Kitchen as Apothecary</p>
        <P>Instead of stocking energy drinks, we stocked teas:</P>
        <P><strong>Soursop Leaf</strong> — Immune system, cellular antioxidant defense, digestive tract. Contains acetogenins, alkaloids, and antioxidants. Supports immune resilience and reduces oxidative stress.</P>
        <P><strong>Butterfly Pea Flower</strong> — Brain and nervous system, skin, eyes, circulation. Contains anthocyanins. Neuroprotective antioxidant support, cognitive clarity, anti-inflammatory properties.</P>
        <P><strong>Dandelion Root</strong> — Liver, gallbladder, digestive system. Traditionally used as a liver tonic. Supports bile production, kidney function, and helps the liver process toxins.</P>
        <P><strong>Clove</strong> — Immune system, digestive tract, oral health. Contains eugenol. Antimicrobial, anti-inflammatory, traditionally used for gut health.</P>
        <P><strong>Anise</strong> — Digestive system, respiratory tract. Relieves gas and bloating, expectorant properties, mild antimicrobial action.</P>
        <P><strong>Jasmine Green Tea</strong> — Brain, cardiovascular system, immune system. L-theanine promotes calm alertness. Supports cardiovascular health and cellular antioxidant defense.</P>
        <P><strong>Cinnamon</strong> — Blood sugar regulation, pancreas, cardiovascular system. Improves insulin sensitivity, supports stable blood sugar levels. Stable blood sugar equals stable mood and cognitive clarity.</P>
        <P>Are these miracle cures? Of course not. But antioxidants matter. Liver support matters. Anti-inflammatory compounds matter.</P>
        <P>We use mineral-rich sea salt. No processed foods. No refined sugars. Lots of probiotics. Fermented vegetables. Olive oil from Turkey — where it feels like medicine, not just food.</P>
        <Em>Food is either supporting inflammation or reducing it. There is no neutral.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Ritual, Reset, Nervous System</p>
        <P>Every few days, we walk through the house with palo santo or sage. Call it spiritual. Call it antimicrobial. Call it nervous system regulation. Ritual matters.</P>
        <P>We play binaural beats in the evenings. We diffuse organic essential oils — lavender for calm, rosemary for alertness, citrus for uplift.</P>
        <P>Even the quotes on the walls are intentional. Humor lowers stress hormones. Positive framing expands cognition.</P>
        <Em>You cannot innovate in a constant stress response.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Floor Sitting, Energy, and Wholeness</p>
        <P>We encourage floor sitting. It improves hip mobility, posture, and longevity markers. It also changes how conversations feel — less rigid, more collaborative.</P>
        <P>There's breathwork. Some Mantak Chia energy circulation influence. A bit of astrology for fun. Occasional reiki sessions in the home.</P>
        <P>You don't have to believe in everything. But you do have to acknowledge that humans are more than brains attached to laptops.</P>
        <Em>Spiritual and operational don't have to be opposites. They can be integrated.</Em>

        <p className={`${T.label} mt-12 mb-4`}>The Garden</p>
        <P>Outside we have olive trees, rosemary, a lemon tree. There is something grounding about tending living plants while discussing artificial intelligence. It reminds you what is ancient. What is biological. What is slow and patient.</P>
        <Em>Technology moves fast. Nature moves wisely.</Em>

        <p className={`${T.label} mt-12 mb-4`}>Designing This Way Was Joyful</p>
        <P>The most surprising part? How fun it was to design without compromise.</P>
        <P>To not ask: "What's cheaper?" "What's easier?" "What's standard?"</P>
        <P>But instead: "What supports the human organism?" "What lowers inflammation?" "What increases joy?" "What improves sleep?"</P>
        <Em>It felt like designing a nervous system, not just a house.</Em>
        <Lines>
          <Line>Comfortable yet mindful.</Line>
          <Line>Relaxing yet productive.</Line>
          <Line>Nature meets nurture.</Line>
        </Lines>
        <P>If we're serious about advancing humanity with AI — maybe we should start by creating spaces that support human flourishing first.</P>
        <P>And yes. It looks beautiful.</P>
        <Em>But more importantly — it feels alive.</Em>
      </Article>

      {/* Curated Products CTA */}
      <section className="py-16 md:py-24 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-6 text-center`}>Continue Reading</p>
              <h2 className={`${T.l} text-center mb-4`}>The Founder's Pharmacy</h2>
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
                  <Link href="/biological-founder/curated-products">
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
                <Link href="/#join">
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
            <p className={`${T.nav} text-foreground/30`}>Vibe House SF</p>
            <p className={`${T.nav} text-foreground/30`}>San Francisco, California</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
