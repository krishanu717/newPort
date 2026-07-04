"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl relative">
        
        <motion.div 
          className="absolute -top-16 md:-top-24 -left-4 md:-left-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          01
        </motion.div>

        <GlassCard delay={0.2} className="relative overflow-hidden z-10">
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
            <h2 className="sr-only">About Me</h2>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]/50"></div>
            </div>
            <div className="mx-auto flex items-center gap-2 text-white/50 text-sm font-mono">
              <Terminal size={14} /> mission-log.sh
            </div>
          </div>
          
          {/* Terminal content */}
          <div className="font-mono text-sm md:text-base leading-relaxed text-[var(--color-accent-cream)] space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-[var(--color-accent-mint)]">➜</span> <span className="text-[var(--color-accent-lavender)]">~</span> ./read_log --latest
            </motion.p>
            <motion.p 
              className="opacity-90 pl-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Mission update: Orbiting the intersection of design and code.
              <br /><br />
              I&apos;m a frontend developer who believes in the power of calm, deliberate engineering. 
              In an industry that often prioritizes speed over substance, I focus on building 
              sustainable, accessible, and deeply polished user interfaces.
              <br /><br />
              My toolkit orbits around React, Next.js, and TypeScript, blending structured logic 
              with seamless animations to create digital experiences that feel effortless.
            </motion.p>
            <motion.p 
              className="animate-pulse text-[var(--color-accent-mint)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 1 }}
            >
              _
            </motion.p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
