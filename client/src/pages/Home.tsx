/*
  DESIGN: The Way of Code + sahin.io hybrid
  TYPOGRAPHY v8: Exactly 3 font sizes (excluding nav)
  - XL (Display): text-6xl md:text-8xl lg:text-[9rem] — Hero headline only
  - L (Heading): text-3xl md:text-5xl lg:text-[4.5rem] — Section headings, closing statements, quote text
  - M (Body): text-lg md:text-xl lg:text-2xl — Everything else: body, cards, badges, labels, footer
  - Nav keeps its own size (text-sm md:text-base) as excluded from the 3-size system
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Leaf, Brain, Music, Sparkles, Utensils, ShieldCheck } from "lucide-react";

// Image URLs
const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-1_1770340062000_na1fn_aGVyby12aWJlLWhvdXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTFfMTc3MDM0MDA2MjAwMF9uYTFmbl9hR1Z5YnkxMmFXSmxMV2h2ZFhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVFxVAYm3~sVZL6QXC2uO~Ry1O02VGEWzJhvq11EwCHYvMDtMD5zMm47-mm6GV70MTr77z3KDGXKeCf5NzA8fehF4TUzjrvZUJ9xOYGijbpZuqgs~a-3-zIhhV-NRO89e~6KxXy-rke8RpuTJL6ASVw9iiK2CsadCnNaj90krrHkV5k67oaelByUI0x0NST1dl2FFHVuL0l-DMI0mNJL8vM0W4XPe8kTMHU2FtpqaWsi30xAnpeCnJbJ5E6W6qd3cLbkkaTp-DtSXG1QK3eoRpNrawMJ~KcddxqCgwGiiK~iUUb6QCGszs~f8rCpGjt-Hq8CUlQf8Qcu-xKXW7gP7A__",
  meditation: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-2_1770340066000_na1fn_bWVkaXRhdGlvbi1yb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTJfMTc3MDM0MDA2NjAwMF9uYTFmbl9iV1ZrYVhSaGRHbHZiaTF5YjI5dC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S8G68NC0NQIEwzPMY17KOY5j5t0mbup-TkOpgjRGlXL1PcLZMgS8lN6fqXwfFTE0yjBop50CmJSOU2sPuUJrhFlWQLsI4-fJYoXqKoPntg7vRZ4aNArUxfE0HL8-GK4zfygXepHZV9PCY3SmwNRFX~RKcqbKVT8kOrXuuVHMNllRSPUu1gI3f45JRAAA90Ckhle5rPnSUV6dR-UcTA5BH94cSIgokoOxfqek9pAJC~-VJ-IvgbXq0gaTkiUcsjEj6GcTPqI7Eu89T1mSH5Iohv40vhE1y1wnwHlQk5PvKpkrmo2~VmK-fMAhNOakmWaNlUthuZwQvf3fpO1g681VIA__",
  snacks: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-3_1770340067000_na1fn_b3JnYW5pYy1zbmFja3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTNfMTc3MDM0MDA2NzAwMF9uYTFmbl9iM0puWVc1cFl5MXpibUZqYTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qVJrjXPxMOB6YAuT3Ehz0099xMy18YRkoh2WBN2Te7rCHseHXQSDoJwY~wjmUpIy5K4O2ayKuEL1hTo7Fx-gm2U8JNuBx1Z1QA3qFi49~XX0cLB2g~qSEbO6aE3rF2kC3K1Q4MgEkJWOdtPA3skopnwPg9eaePzWfzc9ZHoeCv2dtpQ2lKgkfjJg31lCgVoHtbCued~xQ9~PLrkPYh1gi71rJJeZgFoXut5wguo8W5hzOmY692xL2rEe0LlUUYFm0Cbsyi0~cJk6~CrUGVNVm1QvSSy4UXh3u-PC9~PKotZCKsmFCYhSJplit-EluJW0jViqzh100wctXn1oricLtA__",
  coding: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-4_1770340066000_na1fn_Y29sbGFib3JhdGl2ZS1jb2Rpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTRfMTc3MDM0MDA2NjAwMF9uYTFmbl9ZMjlzYkdGaWIzSmhkR2wyWlMxamIyUnBibWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AnCEXN0prR~iPM74uKnXog7zKAMs8dz9o47812IT3dbFHkTb6I7M-hEZigGxxPyI60sy-Pgc1U4OY0mbKzYX8OOnKCP48DGWuJBCYG0vqK9~IUyV~vRw41eIG2w8gC17J65aiG3DLSzJ3Hj87bIGO2FspQajjqZtpZ8R9Ow6sCfl72~XdzXPmEWQTuIPbt7awJgDQTWn9oP~q7cH~1dT5DnHt~HAUGNYSm84a9ASnTUXIfR0NBxILDHTArpXsezM219th5-JdYUKU7j-EHVl~T5bXoPp8tua-7VHtF3HVJG19DoGJrYoicB6MmvZ9UsEmfN1IL~F8zn2JU9J9MOJQg__",
  exterior: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-5_1770340079000_na1fn_dmliZS1ob3VzZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTVfMTc3MDM0MDA3OTAwMF9uYTFmbl9kbWxpWlMxb2IzVnpaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9aUG0~YgaU6ZOYuM8J63sTmTl3m51P5pzuKxDGt~q~5WeA7ynrYHUzXL2HK40jgG6wYdlu7AodQO2S3uB5sIu8YkzFJPTR2ZeB7c2XLtAf6YTI-LD6NC191txILp2oUVPlZhVC4I0RJTvlKm6MEe~LXWY2B-hx7pOlW6udVY16HhevR1EqGORB5RromOtc0N21CjrRc40M9LlnC~LE~rxSW0UCnoDRCJEH32n1QYoEkCTe0JXZTxXBGM3gyRaW5p95vs0kHGklHoId-yrkdAkU5ByuNJIQPCklyFzUVuDxmOHl7-V7RdVOnxfza-uWLSyiX2fIOWr~v7xKk9nXeFg__",
};

// Typography classes — 3 sizes (excluding nav)
// XL: text-6xl md:text-8xl lg:text-[9rem] — Hero headline
// L:  text-3xl md:text-5xl lg:text-[4.5rem] — Section headings, quotes, closings
// M:  text-lg md:text-xl lg:text-2xl — Everything else
// Nav: text-sm md:text-base (excluded from the 3-size system)

const T = {
  xl: "font-display text-6xl md:text-8xl lg:text-[9rem] font-normal leading-[1.02]",
  l: "font-display text-3xl md:text-5xl lg:text-[4.5rem] font-normal leading-tight",
  m: "text-lg md:text-xl lg:text-2xl leading-relaxed",
  nav: "text-sm md:text-base tracking-[0.12em] uppercase",
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
        const r = (i / 20) * maxR + Math.sin(time * 0.5 + i * 0.3) * 20;
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

// Feature card — M for title and description
function FeatureCard({ icon: Icon, title, desc, delay = 0 }: { icon: React.ElementType; title: string; desc: string; delay?: number }) {
  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-foreground/60" />
      </div>
      <h3 className={`${T.m} font-display font-normal mb-3`}>{title}</h3>
      <p className={`${T.m} text-foreground/55`}>{desc}</p>
    </motion.div>
  );
}

// Pill badge — M size
function PillBadge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "highlight" }) {
  const base = `inline-flex items-center px-5 py-2 rounded-full font-medium ${T.m}`;
  const styles = variant === "highlight"
    ? `${base} bg-foreground text-background`
    : `${base} bg-foreground/5 text-foreground/70`;
  return <span className={styles}>{children}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GeometricBackground />

      {/* Navigation — own size, excluded from 3-size system */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="container flex items-center justify-between h-18 md:h-22">
          <a href="#" className={`${T.nav} font-body font-medium`}>
            Vibe House <span className="text-foreground/40">SF</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>About</a>
            <a href="#experience" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Experience</a>
            <a href="#space" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Space</a>
            <a href="#join" className={`${T.nav} text-foreground/50 hover:text-foreground transition-colors duration-300`}>Join</a>
          </div>
          <Button asChild className={`bg-foreground text-background hover:bg-foreground/90 ${T.nav} rounded-full px-7 py-3`}>
            <a href="#join">Apply Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero — XL headline, M body */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="container relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <PillBadge>San Francisco</PillBadge>
            </motion.div>

            <motion.h1
              className={`${T.xl} mb-8`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Back to<br />Builder Mode.
            </motion.h1>

            <motion.p
              className={`${T.m} text-foreground/50 max-w-3xl mx-auto mb-14`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Exited founders in San Francisco, building with AI together — like watching a sports game, but everyone's playing.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}>
                <a href="#join">Join the House <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className={`${T.m} rounded-full px-10 py-7 border-foreground/15 hover:bg-foreground/5`}>
                <a href="#about">Learn More</a>
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

      {/* What is Vibe House SF? — L heading, M body */}
      <section id="about" className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>What is Vibe House SF?</span>

            <h2 className={`${T.l} mt-8 mb-12`}>
              Where exited founders<br />build together again
            </h2>

            <p className={`${T.m} text-foreground/55`}>
              Vibe House SF is a physical space in San Francisco built for exited founders with technical backgrounds. You show up. You bring your laptop. Everyone gets their own AI agent on one big screen. You prompt, others riff, you rotate — and you build together. Great food. Organic snacks. A meditation room. No chemicals. Just builders in the zone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote — L size text */}
      <section className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-[0_2px_30px_rgba(0,0,0,0.04)]"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <p className={`${T.l} italic text-foreground/80`}>
                "You were in the zone, shipping code, creating something from nothing. You loved it. Then you scaled. You exited. And now? You're ready to build again."
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="hidden sm:block w-10 h-px bg-foreground/20" />
                <p className={`${T.m} text-foreground/40`}>
                  Now with AI, you can build faster than ever before
                </p>
                <div className="hidden sm:block w-10 h-px bg-foreground/20" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Why — L heading, M body */}
      <section className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>01 — The Why</span>

            <h2 className={`${T.l} mt-8 mb-14`}>
              In a world of<br />constant change
            </h2>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <p className={`${T.m} text-foreground/55`}>
                Your most valuable asset isn't what you know — it's how fast you can learn and apply what's new. The tools are evolving daily. Yesterday's advantage is today's baseline.
              </p>
              <p className={`${T.m} text-foreground/55`}>
                The founders who master these tools first will define what comes next. Vibe House is the place where you stay ahead — together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Vibe Code Together — L heading, M body */}
      <section className="py-24 md:py-36 relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>02 — Together</span>

              <h2 className={`${T.l} mt-8 mb-10`}>
                Why Vibe Code Together
              </h2>

              <p className={`${T.m} text-foreground/55 mb-8`}>
                Solo coding is powerful. Vibe coding is a cheat code.
              </p>

              <p className={`${T.m} text-foreground/55`}>
                When you watch another founder prompt, you learn their mental models. When they riff on your idea, you see angles you missed. You absorb techniques in minutes that would take weeks alone.
              </p>

              <div className="mt-10 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                <p className={`${T.m} text-foreground/70 italic`}>
                  "It's not collaboration for collaboration's sake — it's accelerated learning disguised as hanging out."
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <img src={IMAGES.coding} alt="Collaborative coding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Edge — L heading, M body */}
      <section className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="bg-foreground text-background rounded-3xl p-12 md:p-20 lg:p-24 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <span className={`${T.m} text-background/40 tracking-[0.12em] uppercase`}>03 — The Edge</span>

              <h2 className={`${T.l} mt-8 mb-12 text-background`}>
                Speed still wins
              </h2>

              <p className={`${T.m} text-background/55 mb-12`}>
                AI has leveled the playing field. Anyone can build now. But the founders who experiment fastest, iterate fastest, and learn fastest will pull ahead.
              </p>

              <p className={`${T.l} text-background/90`}>
                Vibe House is where that happens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Experience — L heading, M body */}
      <section id="experience" className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>04 — Experience</span>
              <PillBadge variant="highlight">New Format</PillBadge>
            </div>

            <h2 className={`${T.l} mb-10`}>
              A different kind<br />of hackathon
            </h2>

            <p className={`${T.m} text-foreground/55 max-w-3xl`}>
              We come together and build like watching a sports game. One big screen. Everyone vibing. It's collaborative creation as a spectator sport — except everyone's playing.
            </p>
          </motion.div>

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[21/9] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              <img src={IMAGES.hero} alt="Vibe coding session" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Step cards — M for all text */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { step: "01", title: "Prompt", desc: "Everyone has their own AI agent. You speak your prompt — voice to text, raw and unfiltered. It goes up on the big screen for all to see." },
              { step: "02", title: "Riff", desc: "Others chime in, add feedback, riff on your idea. You see angles you missed. The collective intelligence kicks in and ideas compound." },
              { step: "03", title: "Rotate", desc: "Then we rotate. While building, we chat. We laugh. We eat ridiculously good food. We snack on the healthiest stuff you've ever seen." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <span className={`${T.l} text-foreground/10`}>{item.step}</span>
                <h3 className={`${T.m} font-display font-normal mt-4 mb-4`}>{item.title}</h3>
                <p className={`${T.m} text-foreground/55`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Space — L heading, M body */}
      <section id="space" className="py-24 md:py-36 relative z-10">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>05 — The Space</span>

            <h2 className={`${T.l} mt-8 mb-10`}>
              Designed for the zone
            </h2>

            <p className={`${T.m} text-foreground/55 max-w-3xl`}>
              The Vibe House isn't just a space — it's an environment engineered for peak performance and deep focus. Every detail is intentional. Every element serves your mind and body.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            <FeatureCard icon={Sparkles} title="Sit How You Want" desc="Floor cushions. Standing desks. Your own corner. However you work best." delay={0} />
            <FeatureCard icon={Leaf} title="Biohacking Built In" desc="Blue lotus tea for calm focus. Dandelion tea for clarity. Rosemary essential oils for memory." delay={0.1} />
            <FeatureCard icon={Brain} title="Inspiration Everywhere" desc="Quotes on the walls to spark ideas. AI-written books throughout. Endless rabbit holes." delay={0.2} />
            <FeatureCard icon={Music} title="Curated Atmosphere" desc="Amazing music, always playing, always right. Curated scents. Designed for flow state." delay={0.3} />
            <FeatureCard icon={Utensils} title="Nourishment" desc="Ridiculously good food. Insanely healthy organic snacks. Fuel that keeps ideas flowing." delay={0.4} />
            <FeatureCard icon={ShieldCheck} title="No Chemicals" desc="Everything clean. No toxins. No synthetic anything. Pure, healthy inputs." delay={0.5} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={IMAGES.meditation} alt="Meditation room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src={IMAGES.snacks} alt="Organic nourishment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          <motion.p
            className={`text-center ${T.l} mt-20 text-foreground/80`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This is your zone. We just built the house around it.
          </motion.p>
        </div>
      </section>

      {/* How to Join — L heading, M body */}
      <section id="join" className="py-24 md:py-36 relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${T.m} text-foreground/40 tracking-[0.12em] uppercase`}>06 — Join</span>

              <h2 className={`${T.l} mt-8 mb-12`}>
                How to Join
              </h2>

              <div className="space-y-6 mb-12">
                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-6">
                    <span className={`${T.l} text-foreground/10`}>01</span>
                    <div>
                      <h3 className={`${T.m} font-display font-normal mb-2`}>Exited Founder</h3>
                      <p className={`${T.m} text-foreground/55`}>You've built something and seen it through to an exit.</p>
                      <div className="mt-4 flex flex-wrap gap-2 items-center">
                        <PillBadge variant="highlight">PEF</PillBadge>
                        <PillBadge variant="highlight">Superfounders</PillBadge>
                        <span className={`${T.m} text-foreground/45 ml-1`}>members welcome — no need to apply</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-6">
                    <span className={`${T.l} text-foreground/10`}>02</span>
                    <div>
                      <h3 className={`${T.m} font-display font-normal mb-2`}>Technical Background</h3>
                      <p className={`${T.m} text-foreground/55`}>You can code. You've shipped. You're a builder at heart.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <p className={`${T.m} text-foreground/55 mb-10`}>
                That's it. No pitch decks. No networking agendas.<br />
                Just builders who want to build again.
              </p>

              <Button size="lg" className={`bg-foreground text-background hover:bg-foreground/90 ${T.m} rounded-full px-10 py-7`}>
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <img src={IMAGES.exterior} alt="Vibe House SF" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer — M size */}
      <footer className="py-14 md:py-20 border-t border-foreground/5 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className={`${T.m} font-medium tracking-[0.12em] uppercase`}>
              Vibe House <span className="text-foreground/40">SF</span>
            </p>
            <p className={`${T.m} text-foreground/35`}>
              San Francisco, California
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
