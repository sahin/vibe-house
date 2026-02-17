/*
  WHY NOW? — Editorial page
  Long-form narrative explaining the thesis behind Vibe House
  Same dictionary-definition typography as the homepage
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// Typography — matching Home.tsx
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

// Chapter section
function Chapter({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className={`${T.label} mb-4`}>{number}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className={`${T.l} mb-4`}>{title}</h2>
          </FadeIn>
          <Divider delay={0.2} />
          <FadeIn delay={0.3}>
            <div className="space-y-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function WhyNow() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            Vibe House <span className="text-foreground/40">SF</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/why" className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}>Why Now</Link>
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 flex flex-col gap-5">
              <Link
                href="/why"
                className={`${T.nav} text-foreground hover:text-foreground transition-colors duration-300`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Now
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
              <Link href="/" className={`${T.nav} text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2 mb-12`}>
                <ArrowLeft className="w-3 h-3" /> Back to home
              </Link>
            </motion.div>

            <motion.h1
              className={`${T.xl} mb-6`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why Now?
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
              The story of why we built Vibe House — and why this moment in time
              is unlike anything we've seen before.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Chapter 1: The Origin */}
      <Chapter number="01" title="We Were Builders">
        <p className={`${T.s} text-foreground/70`}>
          Twenty years ago, we were in our 20s. We'd sit together — founders,
          engineers, dreamers — pulling long nights, building and building and
          building. We didn't call it work. We called it Tuesday.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          Every startup had that story: the garage, the living room, the
          whiteboard covered in ideas at 3am. Most companies were born in those
          long nights. Founders who couldn't stop shipping. Teams that lived and
          breathed the product. The energy was electric — you could feel it in
          every line of code.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          That was the original hacker house. Not a brand. Not a concept. Just
          people who loved to build, sitting in the same room, making things
          happen.
        </p>
      </Chapter>

      {/* Chapter 2: What Happened */}
      <Chapter number="02" title="Then We Stopped">
        <p className={`${T.s} text-foreground/70`}>
          We grew up. We scaled companies, managed teams, took meetings. The
          building stopped. The making stopped. We became operators, executives,
          advisors. We went from writing code to writing memos.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          The garage spirit faded. Building became about fundraising, not making.
          About decks, not demos. The founders who once couldn't stop shipping
          found themselves in a world where shipping meant something entirely
          different.
        </p>
      </Chapter>

      {/* Chapter 3: That Feeling Is Back */}
      <Chapter number="03" title="That Feeling Is Back">
        <p className={`${T.s} text-foreground/70`}>
          Now something has shifted. AI tools have unlocked that feeling again —
          the one from our 20s. We're back in builder mode. Building projects.
          Testing ideas. Shipping things fast. It feels like being in our 20s
          again.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          Founders in their 30s and 40s — people who exited, who managed teams,
          who stopped building with their hands — are going back to builder mode.
          With AI agents, they can build again. And they're building things that
          would have taken entire teams.
        </p>
      </Chapter>

      {/* Chapter 4: The Builder's Fire */}
      <Chapter number="04" title="The Builder's Fire">
        <p className={`${T.s} text-foreground/70`}>
          As entrepreneurs, we have this deep passion for building things. It
          never went away — it just didn't have an outlet. Now we can build fast
          again. Really fast. Spin up a product in a weekend. Test ten ideas in a
          week.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          That excitement of watching something come to life — of going from
          nothing to something in hours — it's back. And it's addictive. The
          dopamine of shipping is something no board meeting will ever replace.
        </p>
      </Chapter>

      {/* Chapter 5: The Speed of Change */}
      <Chapter number="05" title="The Speed of Change">
        <p className={`${T.s} text-foreground/70`}>
          AI is creating so much code, so much change. Every week there's a new
          tool, a new workflow, a new way to 10x your productivity. It's
          impossible to keep up alone.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          That's exactly why founders and builders need to come together — to
          build together, to share how they're using AI, to learn from each other
          in real time. The ones who stay connected to the edge will define what
          comes next.
        </p>
      </Chapter>

      {/* Chapter 6: The Maker Renaissance */}
      <Chapter number="06" title="The Maker Renaissance">
        <p className={`${T.s} text-foreground/70`}>
          This is the garage era all over again. Like HP in a Palo Alto garage.
          Like Woz and Jobs. Except now the garage is a laptop and an AI agent.
          One person can build what used to take a team of ten.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          Founders in their 30s and 40s are going back to builder mode — and
          they're more dangerous than ever. They have the experience, the taste,
          the network. Now they have the tools too.
        </p>
      </Chapter>

      {/* Chapter 7: A New Renaissance */}
      <Chapter number="07" title="A New Renaissance">
        <p className={`${T.s} text-foreground/70`}>
          The tools are democratized. The builders are back. And they want to
          build together again — the way it used to be.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          We're living through a creative renaissance. The barrier between idea
          and product has never been thinner. What took months now takes days.
          What took teams now takes one person with the right prompts.
        </p>
      </Chapter>

      {/* Chapter 8: Why Vibe House */}
      <Chapter number="08" title="Why Vibe House">
        <p className={`${T.s} text-foreground/70`}>
          So we built a house. Not for pitching. Not for networking. For
          building. For that feeling.
        </p>
        <p className={`${T.s} text-foreground/70`}>
          A place where technical founders come together, multiple times a week,
          to vibe code. You work on your own project. You share your prompts,
          your workflows, your breakthroughs. And there's an ongoing group
          project that everyone prompts together.
        </p>
        <p className={`${T.s} text-foreground/70 font-medium`}>
          Come build with us.
        </p>
      </Chapter>

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
                  Join the House <ArrowRight className="ml-2 w-5 h-5" />
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
            <p className={`${T.nav} text-foreground/30`}>
              Vibe House SF
            </p>
            <p className={`${T.nav} text-foreground/30`}>
              San Francisco, California
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
