import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/illustrations/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 pb-40">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-glow mb-6">
          Establish Connection
        </h2>
        <p className="text-[var(--color-accent-lavender)] mb-12 text-lg">
          Whether you have a question, a project in mind, or just want to say hi, 
          my inbox is always open. Let&apos;s build something calm and beautiful together.
        </p>

        <GlassCard delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-6 p-8">
          <Button href="mailto:hello@example.com" variant="primary" className="w-full md:w-auto">
            <Mail size={18} /> Say Hello
          </Button>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
