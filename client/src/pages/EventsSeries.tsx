/*
  EVENTS SERIES — Vibe House SF Weekly Event Calendar
  Day-of-week themed categories with sidebar nav (desktop) and tabs (mobile)
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { useBranding } from "@/hooks/useBranding";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const CATEGORIES = [
  {
    id: "truth-tuesday",
    number: "01",
    name: "Truth Tuesday",
    theme:
      "What does it mean to be human when machines can think, create, and reason? Truth Tuesday is where exited founders, AI researchers, and thought leaders slow down to explore the questions that success never answers. Practical spirituality, multi-faith dialogue, philosophy of consciousness, the evolving relationship between humans and AI, and the inner work that sustains everything else \u2014 conversations that go beyond product and into purpose. How do we stay grounded when the tools we build become more capable than we are? This is the night for those who know that the hardest problems they\u2019ll ever face aren\u2019t technical.",
    events: [
      {
        title: "Vibe House Talks",
        description:
          "Long-form conversations with remarkable builders, investors, and thinkers who\u2019ve lived what they preach. Vibe House Talks goes deeper than any panel ever could \u2014 one guest, one host, no time limit, no audience Q&A until the conversation finds its natural end. Topics range from the philosophy of building to the spiritual cost of scaling, from what death teaches founders about urgency to how psychedelics reshape product thinking. Always grounded in lived experience rather than theory.",
      },
    ],
  },
  {
    id: "wealth-wednesday",
    number: "02",
    name: "Wealth Wednesday",
    theme:
      "Fundraising has fundamentally changed in the AI era, and so has capital allocation. Wealth Wednesday brings together exited founders, allocators, and operators to discuss how money moves now \u2014 from AI-native fund structures to solo GP strategies, from treasury management post-exit to angel investing with conviction. Whether you\u2019re raising, deploying, or rethinking your relationship with capital entirely, this is the room where those conversations happen honestly.",
    events: [
      {
        title: "Fundraising AMA",
        description:
          "Exited founder Sahin Boydas breaks down the strategies behind his successful pre-seed and seed rounds. Sahin has raised more than $15 million across 6 startups from over 140 investors \u2014 even though 4 of those startups were in \u201cnot hot\u201d categories. As an angel investor, he has backed 222 companies, including 31 early-stage bets. An open AMA format where founders ask anything about fundraising timing, investor psychology, cold outreach that works, and capital strategy in the AI era.",
      },
    ],
  },
  {
    id: "technical-thursday",
    number: "03",
    name: "Technical Thursday",
    theme:
      "The deepest builders in the room, working on the hardest problems. Technical Thursday is dedicated to software factories, deep tech, robotics, energy systems, legal AI, and frontier architecture \u2014 the infrastructure layer that everything else runs on. This is where founders who ship compilers, train models, build hardware, and architect systems come to share what\u2019s actually working. No slides, no hand-waving \u2014 just technical depth from people who\u2019ve built at scale.",
    events: [
      {
        title: "Software Factory",
        description:
          "A new SF Vibe House series about the operational reality of building with AI agents. Not the demos, not the hype \u2014 the actual management layer: orchestration patterns, failure modes, cost control, and what it takes to run multi-agent systems in production. The first edition is a Multi-Agent Orchestration Round Table \u2014 a focused discussion on how founders are actually coordinating fleets of AI agents to ship software autonomously.",
      },
      {
        title: "Legal AI Vibe Lab",
        description:
          "A curated SF salon for lawyers, legal operators, legaltech founders, investors, and AI builders exploring what legal AI agents can actually do in real workflows. No vendor theater. No generic networking. No vague futurism. Bring one legal workflow, one tool, or one hard question. Part workshop, part build session, part teardown of what\u2019s actually shipping in production \u2014 from contract automation and compliance agents to discovery tools and invoice review systems. Hosted by Daniel Aydin, now in its 4th edition.",
      },
    ],
  },
  {
    id: "future-fridays",
    number: "04",
    name: "Future Fridays",
    theme:
      "Exited founders show how they built \u2014 live, on stage, unpolished. Future Fridays is our flagship demo night, now in its 23rd edition. Founders present what they\u2019ve been vibe coding all week: weekend prototypes, full product pivots, AI agents that actually work, tools that solve real problems. The energy is electric, the feedback is honest, and the creative collisions are why people keep coming back. This is where the future gets built in public.",
    events: [
      {
        title: "Vibe Night Demos",
        description:
          "San Francisco\u2019s post-exit founder clubhouse hosts weekly AI demos and vibe coding sessions. Agenda: 6:00pm \u2014 Meet and greet. 7:00pm \u2014 Hang, code, demo. 8:30pm \u2014 Dinner. Whether it\u2019s a weekend vibe-coded prototype, a full product pivot, or an AI agent that just started working this morning \u2014 this is where ideas meet their first audience. Rapid-fire presentations, brutally honest feedback from fellow builders who\u2019ve shipped at scale. Now in its 23rd edition.",
      },
    ],
  },
  {
    id: "founder-friday-breakfasts",
    number: "05",
    name: "Founder Friday \u2014 Breakfasts",
    theme:
      "Before the demos, before the energy of the evening, there\u2019s the quiet power of morning. Founder Friday Breakfasts bring together peer groups and wealth partners over coffee \u2014 intimate, unhurried, and intentional. These are the conversations that happen when founders who\u2019ve already won sit together without an agenda: identity after exit, what to build next, who to build with, and how to stay sharp when the pressure is gone.",
    events: [
      {
        title: "Post-Exit Founder Breakfast",
        description:
          "An intimate morning gathering exclusively for founders who\u2019ve been through an exit \u2014 acquisition, IPO, or wind-down. No pitching, no networking theater, no fund managers working the room. Just honest conversation over good coffee about what comes next: the identity shift when your calendar empties, the restlessness that hits at month three, the rare freedom of building without pressure, and the quiet question of what to do with capital when you finally have it.",
      },
    ],
  },
];

export default function EventsSeries() {
  const { navSuffix, href: h, copy, isLovie } = useBranding();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // IntersectionObserver to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    for (const cat of CATEGORIES) {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Events Series \u2014 Vibe House SF"
        description="Weekly events for exited founders: Truth Tuesday, Wealth Wednesday, Technical Thursday, Future Fridays, and Founder Friday Breakfasts. Demos, talks, AMAs, and deep conversations."
        keywords="events, founders, vibe coding, demos, AI, legal tech, fundraising, software factory, post-exit, talks, San Francisco"
        path="/events-series"
        ogType="website"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href={h("/")} className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">{navSuffix}</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href={h("/why")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Why Now</Link>
            <Link href={h("/events-series")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>Events Series</Link>
            <Link href={h("/biological-founder")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>{copy.navLabelBioFounder}</Link>
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
              <Link href={h("/events-series")} className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
                Events Series
              </Link>
              <Link href={h("/biological-founder")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
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
      <section className="relative pt-24 pb-8">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={h("/")} className={`${T.label} inline-flex items-center gap-2 mb-8 hover:text-foreground/60 transition-colors`}>
              <ArrowLeft className="w-3 h-3" /> Back to home
            </Link>

            <motion.h1
              className={`${T.xl} mb-6`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Events Series
            </motion.h1>

            <motion.div
              className="w-full h-px bg-foreground/10 mb-10"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className={`${T.m} text-foreground/60 max-w-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Every week has a rhythm. Each day carries a different energy &mdash; from philosophical depth to technical intensity to raw creative output. These are recurring gatherings for exited founders, designed around the natural cadence of a builder's week.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mobile/Tablet: Horizontal tabs */}
      <div className="lg:hidden sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-foreground/5">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background font-medium"
                    : "bg-foreground/5 text-foreground/50 hover:bg-foreground/10 hover:text-foreground/70"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area with sidebar */}
      <section className="pb-32">
        <div className="container">
          <div className="max-w-5xl mx-auto flex gap-12">
            {/* Desktop: Sticky sidebar */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-28">
                <nav className="flex flex-col gap-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={`text-left px-3 py-2.5 rounded-lg text-xs tracking-wide transition-all duration-200 ${
                        activeCategory === cat.id
                          ? "text-foreground font-medium bg-foreground/5 border-l-2 border-foreground"
                          : "text-foreground/40 hover:text-foreground/70 hover:bg-foreground/3 border-l-2 border-transparent"
                      }`}
                    >
                      <span className="text-foreground/30 mr-2">{cat.number}</span>
                      {cat.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {CATEGORIES.map((cat, catIdx) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => { sectionRefs.current[cat.id] = el; }}
                  className="py-16 md:py-20 border-t border-foreground/8 scroll-mt-32"
                >
                  <FadeIn delay={catIdx * 0.05}>
                    {/* Category header */}
                    <p className={`${T.label} mb-4`}>{cat.number}</p>
                    <h2 className={`${T.l} mb-6`}>{cat.name}</h2>
                    <p className={`${T.s} text-foreground/60 mb-12`}>{cat.theme}</p>

                    {/* Events within category */}
                    <div className="space-y-10">
                      {cat.events.map((event, evIdx) => (
                        <div key={evIdx} className="pl-0 md:pl-6 border-l-0 md:border-l-2 border-foreground/8">
                          <h3 className={`${T.m} font-semibold text-foreground mb-3`}>
                            {event.title}
                          </h3>
                          <p className={`${T.s} text-foreground/60`}>
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container">
          <div className="max-w-5xl mx-auto border-t border-foreground/8 pt-16">
            <FadeIn>
              <p className={`${T.m} text-foreground/60 mb-8`}>
                Want to attend or host an event at Vibe House?
              </p>
              <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}>
                <Link href={h("/#join")}>Join our next event</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/5 py-10">
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/30">
              Created by{" "}
              <a href="https://x.com/sahin" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors">@sahin</a>
            </p>
            <Link href={h("/brand")} className="text-xs text-foreground/30 hover:text-foreground/50 transition-colors">Brand</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
