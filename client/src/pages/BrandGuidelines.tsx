/*
  BRAND GUIDELINES — Vibe House SF
  Logo, cover, and brand asset downloads
*/

import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Menu, X } from "lucide-react";
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

// Brand assets
const ASSETS = {
  logoLight: "/manus-storage/vibe-house-luma-logo-v3_5d9d3117.png",
  logoDark: "/manus-storage/vibe-house-luma-logo_524db2ed.png",
  cover: "/manus-storage/vibe-house-luma-cover_51b287dd.png",
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

export default function BrandGuidelines() {
  const { navSuffix, href: h, copy } = useBranding();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Brand Guidelines — Vibe House SF"
        description="Official brand assets for Vibe House SF. Download logos, cover images, and brand guidelines."
        keywords="brand, logo, guidelines, assets, Vibe House SF"
        path="/brand"
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
            <Link href={h("/events-series")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Events Series</Link>
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
              <Link href={h("/events-series")} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`} onClick={() => setMobileMenuOpen(false)}>
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
      <section className="relative min-h-[50vh] flex items-center pt-24 pb-8">
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
              Brand
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
              Official brand assets for Vibe House SF. Use these logos and cover images when referencing or promoting our events and community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Logo Section — Light */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-4`}>01</p>
              <h2 className={`${T.l} mb-4`}>Logo — Light</h2>
              <div className="w-full h-px bg-foreground/10 mb-8" />
              <p className={`${T.s} text-foreground/60 mb-10`}>
                Primary logo on cream background. Use on light surfaces, event pages, and printed materials.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-foreground/10 overflow-hidden bg-[#F5F0EB] p-8 md:p-12 flex items-center justify-center">
                <img
                  src={ASSETS.logoLight}
                  alt="Vibe House SF Logo — Light"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={ASSETS.logoLight}
                  download="vibe-house-sf-logo-light.png"
                  className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors border border-foreground/15 rounded-full px-4 py-2"
                >
                  <Download className="w-4 h-4" /> Download PNG
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Logo Section — Dark */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-4`}>02</p>
              <h2 className={`${T.l} mb-4`}>Logo — Dark</h2>
              <div className="w-full h-px bg-foreground/10 mb-8" />
              <p className={`${T.s} text-foreground/60 mb-10`}>
                Alternative logo on dark background. Use on dark surfaces, social media profiles, and app icons.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-foreground/10 overflow-hidden bg-[#1a1a1a] p-8 md:p-12 flex items-center justify-center">
                <img
                  src={ASSETS.logoDark}
                  alt="Vibe House SF Logo — Dark"
                  className="w-full max-w-sm rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={ASSETS.logoDark}
                  download="vibe-house-sf-logo-dark.png"
                  className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors border border-foreground/15 rounded-full px-4 py-2"
                >
                  <Download className="w-4 h-4" /> Download PNG
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-4`}>03</p>
              <h2 className={`${T.l} mb-4`}>Cover Image</h2>
              <div className="w-full h-px bg-foreground/10 mb-8" />
              <p className={`${T.s} text-foreground/60 mb-10`}>
                Wide-format banner for event pages, Luma covers, and social headers. 16:9 aspect ratio.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-foreground/10 overflow-hidden bg-[#F5F0EB]">
                <img
                  src={ASSETS.cover}
                  alt="Vibe House SF Cover Image"
                  className="w-full"
                />
              </div>
              <div className="mt-6 flex gap-4">
                <a
                  href={ASSETS.cover}
                  download="vibe-house-sf-cover.png"
                  className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors border border-foreground/15 rounded-full px-4 py-2"
                >
                  <Download className="w-4 h-4" /> Download PNG
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 md:py-28 border-t border-foreground/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className={`${T.label} mb-4`}>Guidelines</p>
              <h2 className={`${T.l} mb-4`}>Usage</h2>
              <div className="w-full h-px bg-foreground/10 mb-8" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Colors</h3>
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#3D3529] border border-foreground/10" />
                      <span className={`${T.s} text-foreground/60`}>Dark Brown #3D3529</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F5F0EB] border border-foreground/10" />
                      <span className={`${T.s} text-foreground/60`}>Cream #F5F0EB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4A853] border border-foreground/10" />
                      <span className={`${T.s} text-foreground/60`}>Gold #D4A853</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Typography</h3>
                  <p className={`${T.s} text-foreground/60`}>
                    Display: Playfair Display (serif). Body: Inter (sans-serif). Monospace accents for terminal references.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Do</h3>
                  <ul className={`${T.s} text-foreground/60 space-y-1`}>
                    <li>Use the logo with adequate clear space around it</li>
                    <li>Maintain the aspect ratio when resizing</li>
                    <li>Use the light logo on light backgrounds, dark logo on dark backgrounds</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">Don't</h3>
                  <ul className={`${T.s} text-foreground/60 space-y-1`}>
                    <li>Stretch, rotate, or distort the logo</li>
                    <li>Change the logo colors</li>
                    <li>Place the logo on busy or low-contrast backgrounds</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 md:py-20 border-t border-foreground/5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className={`${T.m} font-medium tracking-[0.12em] uppercase`}>
              Vibe House <span className="text-foreground/40">{navSuffix}</span>
            </p>
            <div className="flex items-center gap-6">
              <Link href={h("/brand")} className={`${T.s} text-foreground/35 hover:text-foreground/60 transition-colors`}>
                Brand Guidelines
              </Link>
              <p className={`${T.s} text-foreground/35`}>
                San Francisco, California
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
