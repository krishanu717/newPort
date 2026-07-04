"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Github, Linkedin } from "@/components/illustrations/Icons";
import { ContactForm } from "@/components/sections/ContactForm";
import { Magnetic } from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 pb-40">
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        <motion.div 
          className="absolute -top-16 md:-top-24 -left-4 md:-left-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          06
        </motion.div>

        <div className="relative z-10">
          <motion.h2 
            className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-wide text-glow mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Establish Connection
          </motion.h2>
          <motion.p 
            className="text-[var(--color-accent-lavender)] mb-12 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you have a question, a project in mind, or just want to say hi, 
            my inbox is always open. Let&apos;s build something calm and beautiful together.
          </motion.p>
        </div>

        <GlassCard delay={0.2} className="flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12">
          
          {/* Form Side */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h3 className="text-xl font-medium text-[var(--color-accent-cream)] mb-4">Send a Signal</h3>
            <ContactForm />
          </div>

          {/* Socials / Links Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-xl font-medium text-[var(--color-accent-cream)]">Or find me on</h3>
            <div className="flex gap-4">
              <Magnetic intensity={0.2}>
                <a 
                  href="https://github.com/krishanu717/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] hover:bg-white/10 transition-colors group block"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </Magnetic>
              <Magnetic intensity={0.2}>
                <a 
                  href="https://www.linkedin.com/in/devkri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] hover:bg-white/10 transition-colors group block"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </div>

        </GlassCard>
      </div>
    </section>
  );
}
