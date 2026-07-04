"use client";

import { GlassCard } from "@/components/ui/GlassCard";

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Framer Motion", "Node.js", "GraphQL", "PostgreSQL",
  "Figma", "Git"
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-glow mb-4">
            Navigation Instruments
          </h2>
          <p className="text-[var(--color-accent-lavender)]">Tools I use to build digital experiences.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
