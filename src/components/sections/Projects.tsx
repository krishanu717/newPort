"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/illustrations/Icons";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Orbit Tracker",
    description: "A beautifully animated dashboard for tracking daily habits and long-term goals. Built with Next.js and framer-motion for fluid transitions.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Nebula Notes",
    description: "A distraction-free markdown editor featuring a custom parser, local-first storage, and seamless sync across devices.",
    tags: ["React", "Zustand", "IndexedDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Drift CMS",
    description: "A headless content management system tailored for small creator teams. Features a block-based editor and real-time collaboration.",
    tags: ["Node.js", "PostgreSQL", "GraphQL"],
    link: "#",
    github: "#",
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="projects" className="py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="absolute -top-16 md:-top-24 -left-4 md:-left-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          03
        </motion.div>

        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-wide text-glow mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Expeditions
          </motion.h2>
          <motion.p 
            className="text-[var(--color-accent-lavender)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected projects I&apos;ve built recently.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <GlassCard key={project.title} delay={0.2 * index} className="flex flex-col h-full glass-card-hover group" data-cursor="View">
              <div className="h-48 rounded-xl bg-gradient-to-br from-white/5 to-white/0 mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                <Image src="/project-placeholder.png" alt={`${project.title} screenshot`} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-2xl font-semibold tracking-wide mb-3 text-[var(--color-accent-cream)]">
                {project.title}
              </h3>
              
              <p className="text-white/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-[var(--color-accent-mint)] border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                <span className="text-white/30 cursor-not-allowed flex items-center gap-2 text-sm group/btn" title="Coming soon">
                  <Github size={16} /> <span className="group-hover/btn:hidden">Code</span><span className="hidden group-hover/btn:inline text-[var(--color-accent-mint)]">Coming soon</span>
                </span>
                <span className="text-white/30 cursor-not-allowed flex items-center gap-2 text-sm group/btn" title="Coming soon">
                  <ExternalLink size={16} /> <span className="group-hover/btn:hidden">Live Demo</span><span className="hidden group-hover/btn:inline text-[var(--color-accent-mint)]">Coming soon</span>
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
