/*
  DESIGN: Dictionary-definition style throughout
  Every section follows the hero pattern: big title, divider, large description
  No small cards — everything is full-width, bold, spacious
  All content driven by content.yaml
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import content from "@/content.yaml";
import ApplicationForm from "@/components/ApplicationForm";

// Image URLs
const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-1_1770340062000_na1fn_aGVyby12aWJlLWhvdXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTFfMTc3MDM0MDA2MjAwMF9uYTFmbl9hR1Z5YnkxMmFXSmxMV2h2ZFhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVFxVAYm3~sVZL6QXC2uO~Ry1O02VGEWzJhvq11EwCHYvMDtMD5zMm47-mm6GV70MTr77z3KDGXKeCf5NzA8fehF4TUzjrvZUJ9xOYGijbpZuqgs~a-3-zIhhV-NRO89e~6KxXy-rke8RpuTJL6ASVw9iiK2CsadCnNaj90krrHkV5k67oaelByUI0x0NST1dl2FFHVuL0l-DMI0mNJL8vM0W4XPe8kTMHU2FtpqaWsi30xAnpeCnJbJ5E6W6qd3cLbkkaTp-DtSXG1QK3eoRpNrawMJ~KcddxqCgwGiiK~iUUb6QCGszs~f8rCpGjt-Hq8CUlQf8Qcu-xKXW7gP7A__",
  meditation: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-2_1770340066000_na1fn_bWVkaXRhdGlvbi1yb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTJfMTc3MDM0MDA2NjAwMF9uYTFmbl9iV1ZrYVhSaGRHbHZiaTF5YjI5dC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S8G68NC0NQIEwzPMY17KOY5j5t0mbup-TkOpgjRGlXL1PcLZMgS8lN6fqXwfFTE0yjBop50CmJSOU2sPuUJrhFlWQLsI4-fJYoXqKoPntg7vRZ4aNArUxfE0HL8-GK4zfygXepHZV9PCY3SmwNRFX~RKcqbKVT8kOrXuuVHMNllRSPUu1gI3f45JRAAA90Ckhle5rPnSUV6dR-UcTA5BH94cSIgokoOxfqek9pAJC~-VJ-IvgbXq0gaTkiUcsjEj6GcTPqI7Eu89T1mSH5Iohv40vhE1y1wnwHlQk5PvKpkrmo2~VmK-fMAhNOakmWaNlUthuZwQvf3fpO1g681VIA__",
  snacks: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-3_1770340067000_na1fn_b3JnYW5pYy1zbmFja3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTNfMTc3MDM0MDA2NzAwMF9uYTFmbl9iM0puWVc1cFl5MXpibUZqYTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qVJrjXPxMOB6YAuT3Ehz0099xMy18YRkoh2WBN2Te7rCHseHXQSDoJwY~wjmUpIy5K4O2ayKuEL1hTo7Fx-gm2U8JNuBx1Z1QA3qFi49~XX0cLB2g~qSEbO6aE3rF2kC3K1Q4MgEkJWOdtPA3skopnwPg9eaePzWfzc9ZHoeCv2dtpQ2lKgkfjJg31lCgVoHtbCued~xQ9~PLrkPYh1gi71rJJeZgFoXut5wguo8W5hzOmY692xL2rEe0LlUUYFm0Cbsyi0~cJk6~CrUGVNVm1QvSSy4UXh3u-PC9~PKotZCKsmFCYhSJplit-EluJW0jViqzh100wctXn1oricLtA__",
  coding: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-4_1770340066000_na1fn_Y29sbGFib3JhdGl2ZS1jb2Rpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTRfMTc3MDM0MDA2NjAwMF9uYTFmbl9ZMjlzYkdGaWIzSmhkR2wyWlMxamIyUnBibWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AnCEXN0prR~iPM74uKnXog7zKAMs8dz9o47812IT3dbFHkTb6I7M-hEZigGxxPyI60sy-Pgc1U4OY0mbKzYX8OOnKCP48DGWuJBCYG0vqK9~IUyV~vRw41eIG2w8gC17J65aiG3DLSzJ3Hj87bIGO2FspQajjqZtpZ8R9Ow6sCfl72~XdzXPmEWQTuIPbt7awJgDQTWn9oP~q7cH~1dT5DnHt~HAUGNYSm84a9ASnTUXIfR0NBxILDHTArpXsezM219th5-JdYUKU7j-EHVl~T5bXoPp8tua-7VHtF3HVJG19DoGJrYoicB6MmvZ9UsEmfN1IL~F8zn2JU9J9MOJQg__",
  exterior: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-5_1770340079000_na1fn_dmliZS1ob3VzZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTVfMTc3MDM0MDA3OTAwMF9uYTFmbl9kbWxpWlMxb2IzVnpaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9aUG0~YgaU6ZOYuM8J63sTmTl3m51P5pzuKxDGt~q~5WeA7ynrYHUzXL2HK40jgG6wYdlu7AodQO2S3uB5sIu8YkzFJPTR2ZeB7c2XLtAf6YTI-LD6NC191txILp2oUVPlZhVC4I0RJTvlKm6MEe~LXWY2B-hx7pOlW6udVY16HhevR1EqGORB5RromOtc0N21CjrRc40M9LlnC~LE~rxSW0UCnoDRCJEH32n1QYoEkCTe0JXZTxXBGM3gyRaW5p95vs0kHGklHoId-yrkdAkU5ByuNJIQPCklyFzUVuDxmOHl7-V7RdVOnxfza-uWLSyiX2fIOWr~v7xKk9nXeFg__",
};

// Typography — 3 fluid sizes using clamp() (excluding nav)
const T = {
  xl: "font-display font-normal leading-[1.02] text-[clamp(3.5rem,10vw,9rem)]",
  l: "font-display font-normal leading-[1.1] text-[clamp(2.2rem,6vw,4.5rem)]",
  m: "leading-relaxed text-[clamp(1.15rem,2.5vw,1.5rem)]",
  nav: "text-xs tracking-[0.08em] uppercase",
};

// Animated geometric background
function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    let time = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(51, 51, 51, 0.04)';
      ctx.lineWidth = 1;
      const cx = canvas.width / 2, cy = canvas.height / 2;
      const maxR = Math.max(canvas.width, canvas.height) * 0.6;
      for (let i = 0; i < 20; i++) {
        const r = Math.max(0, (i / 20) * maxR + Math.sin(time * 0.5 + i * 0.3) * 20);
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
      }
      for (let i = 0; i < 36; i++) {
        const a = (i / 36) * Math.PI * 2 + time * 0.1;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * 50, cy + Math.sin(a) * 50);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.stroke();
      }
      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />;
}

// Divider line component
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

// Section wrapper — consistent full-width dictionary-style layout
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-28 md:py-40 relative z-10 ${className}`}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 50) {
        setNavVisible(true);
      } else if (currentY < lastScrollY.current) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        setNavVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GeometricBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className={`${T.nav} font-body font-medium whitespace-nowrap`}>
            {content.nav.logo} <span className="text-foreground/40">{content.nav.logo_suffix}</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {content.nav.links.map((link: any) => (
              <a key={link.href} href={link.href} className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>{link.label}</a>
            ))}
          </div>
          <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-5 py-2`}>
            <a href="#join">{content.nav.cta}</a>
          </Button>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO — Dictionary definition */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center pt-24 z-10">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`${T.xl} mb-6`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {content.hero.title}
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className={`${T.m} text-foreground/40 font-light`}>{content.hero.pronunciation}</p>
              <p className={`${T.m} text-foreground/40 italic`}>{content.hero.part_of_speech}</p>
            </motion.div>

            <motion.div
              className="w-full h-px bg-foreground/10 mb-12"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.p
              className={`${T.l} text-foreground/80 mb-16`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {content.hero.definition}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild size="lg" className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}>
                <a href="#join">{content.hero.buttons.primary} <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className={`${T.m} rounded-full px-10 py-7 border-foreground/15 hover:bg-foreground/5`}>
                <a href="#about">{content.hero.buttons.secondary}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="w-7 h-12 rounded-full border-2 border-foreground/15 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-1.5 h-2.5 rounded-full bg-foreground/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* ABOUT — Same dictionary style as hero */}
      {/* ============================================ */}
      <Section id="about">
        <motion.h2
          className={`${T.xl} mb-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {content.about.title}
        </motion.h2>

        <Divider delay={0.2} />

        <motion.p
          className={`${T.l} text-foreground/70`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {content.about.description}
        </motion.p>
      </Section>

      {/* ============================================ */}
      {/* THE WHY — Dictionary style */}
      {/* ============================================ */}
      <Section>
        <motion.p
          className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase mb-6`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {content.the_why.section_label}
        </motion.p>

        <motion.h2
          className={`${T.xl} mb-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {content.the_why.title}
        </motion.h2>

        <Divider delay={0.2} />

        <motion.p
          className={`${T.l} text-foreground/70`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {content.the_why.description}
        </motion.p>
      </Section>





      {/* ============================================ */}
      {/* THE VIBE — Dictionary style + features stacked */}
      {/* ============================================ */}
      <Section id="vibe">
        <motion.p
          className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase mb-6`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {content.vibe.section_label}
        </motion.p>

        <motion.h2
          className={`${T.xl} mb-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {content.vibe.title}
        </motion.h2>

        <Divider delay={0.2} />

        <motion.p
          className={`${T.l} text-foreground/70 mb-20`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {content.vibe.description}
        </motion.p>

        {/* Features — stacked vertically, dictionary style */}
        {content.vibe.features.map((feature: any, i: number) => (
          <motion.div
            key={feature.title}
            className="mb-14 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className={`${T.l} mb-3`}>{feature.title}</h3>
            <p className={`${T.m} text-foreground/55`}>{feature.description}</p>
            {i < content.vibe.features.length - 1 && (
              <div className="w-full h-px bg-foreground/5 mt-14" />
            )}
          </motion.div>
        ))}

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <motion.div
            className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={IMAGES.meditation} alt="Meditation room" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={IMAGES.snacks} alt="Organic nourishment" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <Divider delay={0.2} />

        <motion.p
          className={`${T.l} text-foreground/80`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {content.vibe.closing}
        </motion.p>
      </Section>

      {/* ============================================ */}
      {/* JOIN — Dictionary style */}
      {/* ============================================ */}
      <Section id="join">
        <motion.p
          className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase mb-6`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {content.join.section_label}
        </motion.p>

        <motion.h2
          className={`${T.xl} mb-6`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {content.join.title}
        </motion.h2>

        <Divider delay={0.2} />

        {/* Requirements — stacked, dictionary style */}
        {content.join.requirements.map((req: any, i: number) => (
          <motion.div
            key={req.number}
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className={`${T.xl} text-foreground/8`}>{req.number}</span>
            <h3 className={`${T.l} mt-2 mb-3`}>{req.title}</h3>
            <p className={`${T.m} text-foreground/55`}>{req.description}</p>
            {req.badges && (
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                {req.badges.map((badge: string) => (
                  <span key={badge} className={`inline-flex items-center px-5 py-2 rounded-full font-medium ${T.m} bg-foreground text-background`}>
                    {badge}
                  </span>
                ))}
                <span className={`${T.m} text-foreground/45`}>{req.badge_note}</span>
              </div>
            )}
            {i < content.join.requirements.length - 1 && (
              <div className="w-full h-px bg-foreground/5 mt-14" />
            )}
          </motion.div>
        ))}

        <Divider />

        <motion.p
          className={`${T.l} text-foreground/55 mb-14`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {content.join.closing.split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.p>

        {/* Application Form */}
        <ApplicationForm />
      </Section>

      {/* Footer */}
      <footer className="py-14 md:py-20 border-t border-foreground/5 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className={`${T.m} font-medium tracking-[0.12em] uppercase`}>
              {content.footer.logo} <span className="text-foreground/40">{content.footer.logo_suffix}</span>
            </p>
            <p className={`${T.m} text-foreground/35`}>
              {content.footer.location}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
