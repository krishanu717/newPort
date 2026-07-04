"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Astronaut } from "@/components/illustrations/Astronaut";
import { Moon } from "@/components/illustrations/Moon";
import { Stars } from "@/components/illustrations/Stars";

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yMoon = useTransform(scrollY, [0, 1000], [0, 150]);
  const yText = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full z-0">
        <Stars />
      </motion.div>

      {/* Moon layer */}
      <motion.div style={{ y: yMoon }} className="absolute top-20 right-[10%] w-64 h-64 md:w-96 md:h-96 z-0 opacity-80">
        <Moon />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          style={{ y: yText }}
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold tracking-wider mb-6 text-glow">
            Hi, I&apos;m <span className="text-[var(--color-accent-mint)]">Alex</span>
          </h1>
          <p className="text-xl md:text-3xl text-[var(--color-accent-lavender)] mb-8 tracking-wide font-light">
            Calm mind, steady hands, slow builds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#projects" variant="primary">
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Astronaut className="w-64 h-64 md:w-[400px] md:h-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}
