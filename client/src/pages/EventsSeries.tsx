/*
  EVENTS SERIES — Vibe House SF Event Lineup
  Dictionary-definition typography matching the rest of the site
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
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

const EVENTS = [
  {
    id: "vibe-night-demos",
    title: "Vibe Night Demos",
    description:
      "A high-energy evening where founders showcase what they've been building — live, unpolished, and real. Whether it's a weekend vibe-coded prototype or a full product pivot, Vibe Night Demos is where ideas meet their first audience. Expect rapid-fire presentations, honest feedback from fellow builders, and the kind of creative collisions that only happen when exited founders let loose with code.",
  },
  {
    id: "legal-ai-vibe-lab",
    title: "Legal AI Vibe Lab",
    description:
      "A hands-on working session where founders explore the frontier of AI applied to legal workflows — from contract automation to compliance agents. Part workshop, part build session, the Legal AI Vibe Lab brings together technical founders and legal-curious builders to prototype tools that could reshape how startups handle everything from fundraising docs to IP strategy.",
  },
  {
    id: "women-who-build-with-ai",
    title: "Women Who Build with AI",
    description:
      "A gathering dedicated to women founders and builders pushing the boundaries of what AI can do. From solo founders shipping AI-native products to technical leaders scaling teams, Women Who Build with AI creates space for demos, deep-dives, and real talk about building in a landscape that's moving faster than ever.",
  },
  {
    id: "post-exit-founder-breakfast",
    title: "Post-Exit Founder Breakfast",
    description:
      "An intimate morning gathering exclusively for founders who've been through an exit — acquisition, IPO, or wind-down. No pitching, no networking theater. Just honest conversation over good coffee about what comes next: the identity shift, the next build, the restlessness, and the rare freedom of building without pressure.",
  },
  {
    id: "vibe-house-talks",
    title: "Vibe House Talks",
    description:
      "Long-form conversations with remarkable builders, investors, and thinkers. Vibe House Talks goes deeper than a panel — one guest, one host, no time limit. Topics range from the philosophy of building to the tactical details of scaling, always grounded in lived experience rather than theory.",
  },
];

export default function EventsSeries() {
  const { navSuffix, href: h, copy, isLovie } = useBranding();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Events Series — Vibe House SF"
        description="Recurring events for exited founders: Vibe Night Demos, Legal AI Vibe Lab, Women Who Build with AI, Post-Exit Founder Breakfast, and Vibe House Talks."
        keywords="events, founders, vibe coding, demos, AI, legal tech, women in tech, post-exit, talks, San Francisco"
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
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-8">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
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
              Recurring gatherings for exited founders. Each event is designed around a specific energy — from rapid-fire demos to quiet morning conversations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-0">
            {EVENTS.map((event, index) => (
              <FadeIn key={event.id} delay={index * 0.08}>
                <div className="py-16 md:py-20 border-t border-foreground/8" id={event.id}>
                  <p className={`${T.label} mb-4`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className={`${T.l} mb-6`}>{event.title}</h2>
                  <p className={`${T.s} text-foreground/70 max-w-3xl`}>
                    {event.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto border-t border-foreground/8 pt-16">
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
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/30">
              Created by{" "}
              <a href="https://x.com/sahin" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/50 transition-colors">@sahin</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
