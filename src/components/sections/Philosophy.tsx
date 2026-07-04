"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 relative z-10 border-y border-white/5 bg-[#0b1026]/30 backdrop-blur-sm my-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          05
        </motion.div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-[var(--color-accent-cream)] text-glow opacity-90 leading-tight">
            SLOW IS SMOOTH, <br className="hidden md:block" />
            <span className="text-[var(--color-accent-mint)]">SMOOTH IS FAST.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
