"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 relative z-10 border-y border-white/5 bg-[#0b1026]/30 backdrop-blur-sm my-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
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
