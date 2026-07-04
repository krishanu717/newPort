"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Astronaut } from "@/components/illustrations/Astronaut";
import { Moon } from "@/components/illustrations/Moon";
import { Stars } from "@/components/illustrations/Stars";

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yMoon = useTransform(scrollY, [0, 1000], [0, 150]);
  const yText = useTransform(scrollY, [0, 1000], [0, -100]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Stars />
      </motion.div>

      {/* Moon layer */}
      <motion.div 
        style={{ y: yMoon }} 
        className="absolute top-20 right-[10%] w-64 h-64 md:w-96 md:h-96 z-0"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <Moon />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          style={{ y: yText }}
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-[clamp(3rem,8vw,5.5rem)] font-semibold tracking-wider mb-6 text-glow leading-tight">
            Hi, I&apos;m <span className="text-[var(--color-accent-mint)]">Krishanu Mondal</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[clamp(1.25rem,3vw,1.75rem)] text-[var(--color-accent-lavender)] mb-8 tracking-wide font-light leading-relaxed">
            Calm mind, steady hands, slow builds.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#projects" variant="primary">
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Astronaut className="w-64 h-64 md:w-[400px] md:h-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}
