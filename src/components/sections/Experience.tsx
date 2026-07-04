"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023 - Present",
    role: "Senior Frontend Engineer",
    company: "Starlight Dynamics",
    description: "Leading the architecture of a new suite of data visualization tools. Improved rendering performance by 40%."
  },
  {
    year: "2020 - 2023",
    role: "Frontend Developer",
    company: "Nebula Systems",
    description: "Built and maintained responsive web applications using React and TypeScript. Collaborated closely with design teams."
  },
  {
    year: "2018 - 2020",
    role: "Web Developer",
    company: "Launchpad Media",
    description: "Developed custom WordPress themes and interactive marketing sites for various clients."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-3xl relative">
        <motion.div 
          className="absolute -top-16 md:-top-24 right-4 md:-right-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          04
        </motion.div>

        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-wide text-glow mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Flight Log
          </motion.h2>
          <motion.p 
            className="text-[var(--color-accent-lavender)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My professional journey so far.
          </motion.p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-none">
          {/* Orbit path for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Glowing Dot */}
                <div className="absolute left-[-21px] md:left-1/2 top-1 md:top-auto md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-[var(--color-space-900)] border-2 border-[var(--color-accent-mint)] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(143,217,168,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent-mint)]"></div>
                </div>

                <div className="flex-1 w-full pl-6 md:pl-0 md:px-12">
                  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[var(--color-accent-mint)] font-mono text-sm tracking-widest block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold tracking-wide text-[var(--color-accent-cream)] mb-1">
                      {milestone.role}
                    </h3>
                    <p className="text-[var(--color-accent-lavender)] text-sm mb-4">
                      {milestone.company}
                    </p>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
