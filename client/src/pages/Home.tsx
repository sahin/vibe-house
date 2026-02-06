/*
  DESIGN: Neo-Bohemian Warmth
  - Warm earth tones (terracotta, sage, cream)
  - Playfair Display headlines, Plus Jakarta Sans body
  - Organic shapes, soft shadows, flowing layouts
*/

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Brain, Users, Sparkles, Coffee, BookOpen, Music } from "lucide-react";

// Image URLs from generated assets
const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-1_1770340062000_na1fn_aGVyby12aWJlLWhvdXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTFfMTc3MDM0MDA2MjAwMF9uYTFmbl9hR1Z5YnkxMmFXSmxMV2h2ZFhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JVFxVAYm3~sVZL6QXC2uO~Ry1O02VGEWzJhvq11EwCHYvMDtMD5zMm47-mm6GV70MTr77z3KDGXKeCf5NzA8fehF4TUzjrvZUJ9xOYGijbpZuqgs~a-3-zIhhV-NRO89e~6KxXy-rke8RpuTJL6ASVw9iiK2CsadCnNaj90krrHkV5k67oaelByUI0x0NST1dl2FFHVuL0l-DMI0mNJL8vM0W4XPe8kTMHU2FtpqaWsi30xAnpeCnJbJ5E6W6qd3cLbkkaTp-DtSXG1QK3eoRpNrawMJ~KcddxqCgwGiiK~iUUb6QCGszs~f8rCpGjt-Hq8CUlQf8Qcu-xKXW7gP7A__",
  meditation: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-2_1770340066000_na1fn_bWVkaXRhdGlvbi1yb29t.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTJfMTc3MDM0MDA2NjAwMF9uYTFmbl9iV1ZrYVhSaGRHbHZiaTF5YjI5dC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S8G68NC0NQIEwzPMY17KOY5j5t0mbup-TkOpgjRGlXL1PcLZMgS8lN6fqXwfFTE0yjBop50CmJSOU2sPuUJrhFlWQLsI4-fJYoXqKoPntg7vRZ4aNArUxfE0HL8-GK4zfygXepHZV9PCY3SmwNRFX~RKcqbKVT8kOrXuuVHMNllRSPUu1gI3f45JRAAA90Ckhle5rPnSUV6dR-UcTA5BH94cSIgokoOxfqek9pAJC~-VJ-IvgbXq0gaTkiUcsjEj6GcTPqI7Eu89T1mSH5Iohv40vhE1y1wnwHlQk5PvKpkrmo2~VmK-fMAhNOakmWaNlUthuZwQvf3fpO1g681VIA__",
  snacks: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-3_1770340067000_na1fn_b3JnYW5pYy1zbmFja3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTNfMTc3MDM0MDA2NzAwMF9uYTFmbl9iM0puWVc1cFl5MXpibUZqYTNNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qVJrjXPxMOB6YAuT3Ehz0099xMy18YRkoh2WBN2Te7rCHseHXQSDoJwY~wjmUpIy5K4O2ayKuEL1hTo7Fx-gm2U8JNuBx1Z1QA3qFi49~XX0cLB2g~qSEbO6aE3rF2kC3K1Q4MgEkJWOdtPA3skopnwPg9eaePzWfzc9ZHoeCv2dtpQ2lKgkfjJg31lCgVoHtbCued~xQ9~PLrkPYh1gi71rJJeZgFoXut5wguo8W5hzOmY692xL2rEe0LlUUYFm0Cbsyi0~cJk6~CrUGVNVm1QvSSy4UXh3u-PC9~PKotZCKsmFCYhSJplit-EluJW0jViqzh100wctXn1oricLtA__",
  coding: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-4_1770340066000_na1fn_Y29sbGFib3JhdGl2ZS1jb2Rpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTRfMTc3MDM0MDA2NjAwMF9uYTFmbl9ZMjlzYkdGaWIzSmhkR2wyWlMxamIyUnBibWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AnCEXN0prR~iPM74uKnXog7zKAMs8dz9o47812IT3dbFHkTb6I7M-hEZigGxxPyI60sy-Pgc1U4OY0mbKzYX8OOnKCP48DGWuJBCYG0vqK9~IUyV~vRw41eIG2w8gC17J65aiG3DLSzJ3Hj87bIGO2FspQajjqZtpZ8R9Ow6sCfl72~XdzXPmEWQTuIPbt7awJgDQTWn9oP~q7cH~1dT5DnHt~HAUGNYSm84a9ASnTUXIfR0NBxILDHTArpXsezM219th5-JdYUKU7j-EHVl~T5bXoPp8tua-7VHtF3HVJG19DoGJrYoicB6MmvZ9UsEmfN1IL~F8zn2JU9J9MOJQg__",
  exterior: "https://private-us-east-1.manuscdn.com/sessionFile/EYUEGdEJ1P4CEaW2SLZOhC/sandbox/lgQvb1oSQa2zmHxYUjbe3V-img-5_1770340079000_na1fn_dmliZS1ob3VzZS1leHRlcmlvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRVlVRUdkRUoxUDRDRWFXMlNMWk9oQy9zYW5kYm94L2xnUXZiMW9TUWEyem1IeFlVamJlM1YtaW1nLTVfMTc3MDM0MDA3OTAwMF9uYTFmbl9kbWxpWlMxb2IzVnpaUzFsZUhSbGNtbHZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9aUG0~YgaU6ZOYuM8J63sTmTl3m51P5pzuKxDGt~q~5WeA7ynrYHUzXL2HK40jgG6wYdlu7AodQO2S3uB5sIu8YkzFJPTR2ZeB7c2XLtAf6YTI-LD6NC191txILp2oUVPlZhVC4I0RJTvlKm6MEe~LXWY2B-hx7pOlW6udVY16HhevR1EqGORB5RromOtc0N21CjrRc40M9LlnC~LE~rxSW0UCnoDRCJEH32n1QYoEkCTe0JXZTxXBGM3gyRaW5p95vs0kHGklHoId-yrkdAkU5ByuNJIQPCklyFzUVuDxmOHl7-V7RdVOnxfza-uWLSyiX2fIOWr~v7xKk9nXeFg__",
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background grain-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl font-semibold text-foreground">
            Vibe House <span className="text-primary">SF</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Why</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#space" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Space</a>
            <a href="#join" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Join</a>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#join">Apply Now</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Vibe House collaborative space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-primary font-medium mb-4 tracking-wide"
              variants={fadeInUp}
            >
              San Francisco
            </motion.p>
            <motion.h1 
              className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-tight mb-6"
              variants={fadeInUp}
            >
              Back to<br />Builder Mode.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
              variants={fadeInUp}
            >
              Remember when you were just building? Before the investors, the board meetings, the people management. You were in the zone, shipping code, creating something from nothing. You loved it. Then you scaled. You exited. And now? You're ready to build again. Now with AI, you can build faster than ever before. <span className="text-foreground font-medium">Welcome back.</span>
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <a href="#join">
                  Join the House
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Why Section */}
      <section id="why" className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
              The Why
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              In a world of constant change, your most valuable asset isn't what you know—it's how fast you can learn and apply what's new. The tools are evolving daily. The founders who master them first will define what comes next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Vibe Code Together */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
                Why Vibe Code Together
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Solo coding is powerful. Vibe coding is a cheat code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When you watch another founder prompt, you learn their mental models. When they riff on your idea, you see angles you missed. You absorb techniques in minutes that would take weeks alone. It's not collaboration for collaboration's sake—it's <span className="text-foreground font-medium">accelerated learning disguised as hanging out.</span>
              </p>
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  AI has leveled the playing field. Speed still wins.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.coding} 
                  alt="Collaborative coding session" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Edge */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8">
              The Edge
            </h2>
            <p className="text-lg md:text-xl text-background/70 leading-relaxed mb-8">
              AI has leveled the playing field. Anyone can build now. But speed still wins. The founders who experiment fastest, iterate fastest, and learn fastest will pull ahead.
            </p>
            <p className="text-2xl md:text-3xl font-display font-medium">
              Vibe House is where that happens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Experience */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              The Experience
            </h2>
            <p className="text-xl text-primary font-medium">
              A different kind of hackathon.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.hero} 
                  alt="Vibe coding session" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We come together and build like watching a sports game. One big screen. Everyone vibing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Here's how it works: Everyone has their own AI agent. You speak your prompt—voice to text, raw and unfiltered. It goes up on the big screen. Others chime in, add feedback, riff on your idea. Then we rotate.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While building, we chat. We laugh. We eat ridiculously good food. We snack on insanely healthy organic stuff. And we create. It's collaborative. It's social. It's <span className="text-foreground font-medium">building as a spectator sport—except everyone's playing.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section id="space" className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              The Space
            </h2>
            <p className="text-xl text-muted-foreground">
              A space designed for you to be in the zone.
            </p>
          </motion.div>

          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Vibe House isn't just a space—it's an environment engineered for peak performance and deep focus. Every detail is intentional. Every element serves your mind and body.
          </motion.p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Sit How You Want</h3>
              <p className="text-muted-foreground">Floor cushions. Standing desks. Your own corner. However you work best.</p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Biohacking Built In</h3>
              <p className="text-muted-foreground">Blue lotus tea for calm focus. Dandelion tea for clarity. Rosemary essential oils for memory.</p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Inspiration Everywhere</h3>
              <p className="text-muted-foreground">Quotes on the walls. AI-written books throughout. New perspectives, endless rabbit holes.</p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Curated Atmosphere</h3>
              <p className="text-muted-foreground">Amazing music, always playing, always right. The air itself is designed to keep you sharp.</p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nourishment</h3>
              <p className="text-muted-foreground">Good food. Healthy snacks. The kind of fuel that keeps ideas flowing.</p>
            </motion.div>

            <motion.div 
              className="bg-background p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">No Chemicals</h3>
              <p className="text-muted-foreground">Everything clean. No toxins. Pure, healthy inputs for the best mindful experience.</p>
            </motion.div>
          </div>

          {/* Space Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={IMAGES.meditation} 
                alt="Meditation room" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-background font-display text-xl font-medium">Meditation Room</p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src={IMAGES.snacks} 
                alt="Organic snacks and teas" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-background font-display text-xl font-medium">Organic Nourishment</p>
              </div>
            </motion.div>
          </div>

          <motion.p 
            className="text-center text-xl font-display font-medium text-foreground mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            This is your zone. We just built the house around it.
          </motion.p>
        </div>
      </section>

      {/* How to Join */}
      <section id="join" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
                How to Join
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">Exited Founder</h3>
                    <p className="text-muted-foreground">You've built something and seen it through to an exit.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">Technical Background</h3>
                    <p className="text-muted-foreground">You can code. You've shipped. You're a builder at heart.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                That's it. No pitch decks. No networking agendas. Just builders who want to build again.
              </p>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.exterior} 
                  alt="Vibe House SF exterior" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-display text-xl font-semibold text-foreground">
              Vibe House <span className="text-primary">SF</span>
            </p>
            <p className="text-muted-foreground text-sm">
              San Francisco, California
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
