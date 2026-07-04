"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Node.js", "GraphQL", "PostgreSQL",
  "Figma", "Git"
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-32 relative z-10">
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="absolute -top-16 md:-top-24 right-4 md:right-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          02
        </motion.div>

        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-wide text-glow mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Navigation Instruments
          </motion.h2>
          <motion.p 
            className="text-[var(--color-accent-lavender)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tools I use to build digital experiences.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
          {skills.map((skill, index) => (
            <GlassCard 
              key={skill} 
              delay={0.1 * index}
              className="py-3 px-6 rounded-full glass-card-hover cursor-default"
            >
              <span className="text-[var(--color-accent-cream)] font-medium tracking-wide">
                {skill}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
