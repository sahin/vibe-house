/*
  DESIGN: The Way of Code Style
  - Zen minimalism, warm cream background
  - Large serif typography, extreme whitespace
  - Monochromatic, clean, meditative
  - Numbered sections, quote styling
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Image URLs from generated assets
const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-1_1770340062000_na1fn_aGVyby12aWJlLWhvdXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTFfMTc3MDM0MDA2MjAwMF9uYTFmbl9hR1Z5YnkxMmFXSmxMV2h2ZFhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVFxVAYm3~sVZL6QXC2uO~Ry1O02VGEWzJhvq11EwCHYvMDtMD5zMm47-mm6GV70MTr77z3KDGXKeCf5NzA8fehF4TUzjrvZUJ9xOYGijbpZuqgs~a-3-zIhhV-NRO89e~6KxXy-rke8RpuTJL6ASVw9iiK2CsadCnNaj90krrHkV5k67oaelByUI0x0NST1dl2FFHVuL0l-DMI0mNJL8vM0W4XPe8kTMHU2FtpqaWsi30xAnpeCnJbJ5E6W6qd3cLbkkaTp-DtSXG1QK3eoRpNrawMJ~KcddxqCgwGiiK~iUUb6QCGszs~f8rCpGjt-Hq8CUlQf8Qcu-xKXW7gP7A__",
  meditation: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-2_1770340066000_na1fn_bWVkaXRhdGlvbi1yb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTJfMTc3MDM0MDA2NjAwMF9uYTFmbl9iV1ZrYVhSaGRHbHZiaTF5YjI5dC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S8G68NC0NQIEwzPMY17KOY5j5t0mbup-TkOpgjRGlXL1PcLZMgS8lN6fqXwfFTE0yjBop50CmJSOU2sPuUJrhFlWQLsI4-fJYoXqKoPntg7vRZ4aNArUxfE0HL8-GK4zfygXepHZV9PCY3SmwNRFX~RKcqbKVT8kOrXuuVHMNllRSPUu1gI3f45JRAAA90Ckhle5rPnSUV6dR-UcTA5BH94cSIgokoOxfqek9pAJC~-VJ-IvgbXq0gaTkiUcsjEj6GcTPqI7Eu89T1mSH5Iohv40vhE1y1wnwHlQk5PvKpkrmo2~VmK-fMAhNOakmWaNlUthuZwQvf3fpO1g681VIA__",
  snacks: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-3_1770340067000_na1fn_b3JnYW5pYy1zbmFja3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTNfMTc3MDM0MDA2NzAwMF9uYTFmbl9iM0puWVc1cFl5MXpibUZqYTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qVJrjXPxMOB6YAuT3Ehz0099xMy18YRkoh2WBN2Te7rCHseHXQSDoJwY~wjmUpIy5K4O2ayKuEL1hTo7Fx-gm2U8JNuBx1Z1QA3qFi49~XX0cLB2g~qSEbO6aE3rF2kC3K1Q4MgEkJWOdtPA3skopnwPg9eaePzWfzc9ZHoeCv2dtpQ2lKgkfjJg31lCgVoHtbCued~xQ9~PLrkPYh1gi71rJJeZgFoXut5wguo8W5hzOmY692xL2rEe0LlUUYFm0Cbsyi0~cJk6~CrUGVNVm1QvSSy4UXh3u-PC9~PKotZCKsmFCYhSJplit-EluJW0jViqzh100wctXn1oricLtA__",
  coding: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-4_1770340066000_na1fn_Y29sbGFib3JhdGl2ZS1jb2Rpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTRfMTc3MDM0MDA2NjAwMF9uYTFmbl9ZMjlzYkdGaWIzSmhkR2wyWlMxamIyUnBibWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AnCEXN0prR~iPM74uKnXog7zKAMs8dz9o47812IT3dbFHkTb6I7M-hEZigGxxPyI60sy-Pgc1U4OY0mbKzYX8OOnKCP48DGWuJBCYG0vqK9~IUyV~vRw41eIG2w8gC17J65aiG3DLSzJ3Hj87bIGO2FspQajjqZtpZ8R9Ow6sCfl72~XdzXPmEWQTuIPbt7awJgDQTWn9oP~q7cH~1dT5DnHt~HAUGNYSm84a9ASnTUXIfR0NBxILDHTArpXsezM219th5-JdYUKU7j-EHVl~T5bXoPp8tua-7VHtF3HVJG19DoGJrYoicB6MmvZ9UsEmfN1IL~F8zn2JU9J9MOJQg__",
  exterior: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-5_1770340079000_na1fn_dmliZS1ob3VzZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTVfMTc3MDM0MDA3OTAwMF9uYTFmbl9kbWxpWlMxb2IzVnpaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9aUG0~YgaU6ZOYuM8J63sTmTl3m51P5pzuKxDGt~q~5WeA7ynrYHUzXL2HK40jgG6wYdlu7AodQO2S3uB5sIu8YkzFJPTR2ZeB7c2XLtAf6YTI-LD6NC191txILp2oUVPlZhVC4I0RJTvlKm6MEe~LXWY2B-hx7pOlW6udVY16HhevR1EqGORB5RromOtc0N21CjrRc40M9LlnC~LE~rxSW0UCnoDRCJEH32n1QYoEkCTe0JXZTxXBGM3gyRaW5p95vs0kHGklHoId-yrkdAkU5ByuNJIQPCklyFzUVuDxmOHl7-V7RdVOnxfza-uWLSyiX2fIOWr~v7xKk9nXeFg__",
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Section number component
function SectionNumber({ number }: { number: string }) {
  return (
    <span className="text-xs tracking-[0.3em] text-foreground/40 font-body uppercase">
      {number}
    </span>
  );
}

// Animated geometric background (simplified zen style)
function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(51, 51, 51, 0.06)';
      ctx.lineWidth = 1;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.6;

      // Draw concentric circles with wave effect
      for (let i = 0; i < 20; i++) {
        const baseRadius = (i / 20) * maxRadius;
        const waveOffset = Math.sin(time * 0.5 + i * 0.3) * 20;
        const radius = baseRadius + waveOffset;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw radial lines
      for (let i = 0; i < 36; i++) {
        const angle = (i / 36) * Math.PI * 2 + time * 0.1;
        const innerRadius = 50;
        const outerRadius = maxRadius;

        ctx.beginPath();
        ctx.moveTo(
          centerX + Math.cos(angle) * innerRadius,
          centerY + Math.sin(angle) * innerRadius
        );
        ctx.lineTo(
          centerX + Math.cos(angle) * outerRadius,
          centerY + Math.sin(angle) * outerRadius
        );
        ctx.stroke();
      }

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GeometricBackground />
      
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="text-sm tracking-[0.2em] uppercase font-body">
            Vibe House SF
          </a>
          <div className="hidden md:flex items-center gap-12">
            <a href="#why" className="text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors">Why</a>
            <a href="#experience" className="text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors">Experience</a>
            <a href="#space" className="text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors">Space</a>
            <a href="#join" className="text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-foreground transition-colors">Join</a>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="text-xs tracking-[0.15em] uppercase border-foreground/20 hover:bg-foreground hover:text-background transition-all"
          >
            <a href="#join">Apply</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <motion.p 
              className="text-xs tracking-[0.3em] uppercase text-foreground/50 mb-8"
              variants={fadeInUp}
            >
              San Francisco
            </motion.p>
            
            <motion.h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Back to<br />Builder Mode
            </motion.h1>
            
            <motion.div 
              className="w-16 h-px bg-foreground/20 mx-auto mb-12"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            />
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto font-light"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Remember when you were just building? Before the investors,<br className="hidden md:block" />
              the board meetings, the people management.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-foreground/0 via-foreground/20 to-foreground/0" />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="section-zen relative z-10">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed font-normal italic text-foreground/80">
              "You were in the zone, shipping code, creating something from nothing. You loved it. Then you scaled. You exited. And now? You're ready to build again."
            </p>
            <p className="mt-8 text-sm tracking-[0.2em] uppercase text-foreground/40">
              — Now with AI, you can build faster than ever before
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Why - Section 01 */}
      <section id="why" className="section-zen relative z-10">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionNumber number="01 — The Why" />
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mt-6 mb-12 leading-tight">
              In a world of constant change
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl font-light">
              Your most valuable asset isn't what you know—it's how fast you can learn and apply what's new. The tools are evolving daily. The founders who master them first will define what comes next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Vibe Code Together - Section 02 */}
      <section className="section-zen relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionNumber number="02 — Together" />
              
              <h2 className="font-display text-4xl md:text-5xl font-normal mt-6 mb-8 leading-tight">
                Why Vibe Code Together
              </h2>
              
              <p className="text-lg text-foreground/60 leading-relaxed mb-6 font-light">
                Solo coding is powerful. Vibe coding is a cheat code.
              </p>
              
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                When you watch another founder prompt, you learn their mental models. When they riff on your idea, you see angles you missed. You absorb techniques in minutes that would take weeks alone.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed mt-6 font-light">
                It's not collaboration for collaboration's sake—it's accelerated learning disguised as hanging out.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={IMAGES.coding} 
                  alt="Collaborative coding" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Edge - Section 03 */}
      <section className="section-zen relative z-10 bg-foreground text-background">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionNumber number="03 — The Edge" />
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mt-6 mb-12 leading-tight text-background">
              Speed still wins
            </h2>
            
            <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto font-light mb-12">
              AI has leveled the playing field. Anyone can build now. But the founders who experiment fastest, iterate fastest, and learn fastest will pull ahead.
            </p>
            
            <p className="font-display text-2xl md:text-3xl font-normal text-background/90">
              Vibe House is where that happens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Experience - Section 04 */}
      <section id="experience" className="section-zen relative z-10">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionNumber number="04 — Experience" />
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mt-6 mb-8 leading-tight">
              A different kind of hackathon
            </h2>
            
            <p className="text-lg text-foreground/60 leading-relaxed font-light mb-12 max-w-2xl">
              We come together and build like watching a sports game. One big screen. Everyone vibing.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src={IMAGES.hero} 
                alt="Vibe coding session" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-16 grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                Everyone has their own AI agent. You speak your prompt—voice to text, raw and unfiltered. It goes up on the big screen. Others chime in, add feedback, riff on your idea.
              </p>
            </div>
            <div>
              <p className="text-lg text-foreground/60 leading-relaxed font-light">
                Then we rotate. While building, we chat. We laugh. We eat ridiculously good food. It's building as a spectator sport—except everyone's playing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Space - Section 05 */}
      <section id="space" className="section-zen relative z-10">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionNumber number="05 — The Space" />
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mt-6 mb-8 leading-tight">
              Designed for the zone
            </h2>
            
            <p className="text-lg text-foreground/60 leading-relaxed font-light max-w-2xl">
              The Vibe House isn't just a space—it's an environment engineered for peak performance and deep focus. Every detail is intentional. Every element serves your mind and body.
            </p>
          </motion.div>

          {/* Space Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Sit How You Want", desc: "Floor cushions. Standing desks. Your own corner. However you work best." },
              { title: "Biohacking Built In", desc: "Blue lotus tea. Dandelion tea. Rosemary essential oils. Curated scents." },
              { title: "Inspiration Everywhere", desc: "Quotes on the walls. AI-written books. New perspectives, endless rabbit holes." },
              { title: "Curated Atmosphere", desc: "Amazing music, always playing, always right. The air itself keeps you sharp." },
              { title: "Nourishment", desc: "Good food. Healthy snacks. The kind of fuel that keeps ideas flowing." },
              { title: "No Chemicals", desc: "Everything clean. No toxins. Pure, healthy inputs for the best mindful experience." },
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                className="py-8 border-t border-foreground/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-display text-xl font-normal mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Space Images */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              className="aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={IMAGES.meditation} 
                alt="Meditation room" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div
              className="aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src={IMAGES.snacks} 
                alt="Organic nourishment" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-center font-display text-2xl md:text-3xl font-normal mt-16 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This is your zone. We just built the house around it.
          </motion.p>
        </div>
      </section>

      {/* How to Join - Section 06 */}
      <section id="join" className="section-zen relative z-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionNumber number="06 — Join" />
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mt-6 mb-12 leading-tight">
                How to Join
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <span className="text-xs tracking-[0.2em] text-foreground/40 mt-1">01</span>
                  <div>
                    <h3 className="font-display text-xl font-normal mb-2">Exited Founder</h3>
                    <p className="text-foreground/50 font-light">You've built something and seen it through to an exit.</p>
                    <p className="text-foreground/70 font-light mt-2 text-sm">PEF, Superfounders members are welcome — no need to apply.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <span className="text-xs tracking-[0.2em] text-foreground/40 mt-1">02</span>
                  <div>
                    <h3 className="font-display text-xl font-normal mb-2">Technical Background</h3>
                    <p className="text-foreground/50 font-light">You can code. You've shipped. You're a builder at heart.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-foreground/60 mb-8 font-light">
                That's it. No pitch decks. No networking agendas.<br />
                Just builders who want to build again.
              </p>
              
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 text-xs tracking-[0.15em] uppercase px-8 py-6"
              >
                Apply Now
              </Button>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={IMAGES.exterior} 
                  alt="Vibe House SF" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-foreground/10 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm tracking-[0.2em] uppercase">
              Vibe House SF
            </p>
            <p className="text-xs text-foreground/40 tracking-[0.1em]">
              San Francisco, California
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
