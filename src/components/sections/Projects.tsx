import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/illustrations/Icons";

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
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-glow mb-4">
            Recent Expeditions
          </h2>
          <p className="text-[var(--color-accent-lavender)]">Selected projects I&apos;ve built recently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={project.title} delay={0.2 * index} className="flex flex-col h-full glass-card-hover group">
              <div className="h-48 rounded-xl bg-gradient-to-br from-white/5 to-white/0 mb-6 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                {/* Placeholder for project screenshot */}
                <span className="text-white/20 font-mono tracking-widest uppercase text-sm">Image Placeholder</span>
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
                <a href={project.github} className="text-white/50 hover:text-[var(--color-accent-cream)] transition-colors flex items-center gap-2 text-sm">
                  <Github size={16} /> Code
                </a>
                <a href={project.link} className="text-white/50 hover:text-[var(--color-accent-mint)] transition-colors flex items-center gap-2 text-sm">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
