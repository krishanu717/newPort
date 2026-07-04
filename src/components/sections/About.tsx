import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <GlassCard delay={0.2} className="relative overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
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
            <p>
              <span className="text-[var(--color-accent-mint)]">➜</span> <span className="text-[var(--color-accent-lavender)]">~</span> ./read_log --latest
            </p>
            <p className="opacity-90 pl-4">
              Mission update: Orbiting the intersection of design and code.
              <br /><br />
              I&apos;m a frontend developer who believes in the power of calm, deliberate engineering. 
              In an industry that often prioritizes speed over substance, I focus on building 
              sustainable, accessible, and deeply polished user interfaces.
              <br /><br />
              My toolkit orbits around React, Next.js, and TypeScript, blending structured logic 
              with seamless animations to create digital experiences that feel effortless.
            </p>
            <p className="animate-pulse text-[var(--color-accent-mint)]">_</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
