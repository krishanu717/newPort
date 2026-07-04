"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none hidden md:flex items-center justify-center mix-blend-difference text-white">
      <svg width="48" height="48" viewBox="0 0 100 100" className="-rotate-90 drop-shadow-[0_0_8px_var(--color-accent-mint)]">
        <circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-white/20"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-[var(--color-accent-mint)] drop-shadow-[0_0_8px_var(--color-accent-mint)]"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: scaleY }}
        />
      </svg>
      {/* Small rocket or dot inside */}
      <div className="absolute flex items-center justify-center w-full h-full text-[10px] font-bold tracking-widest text-[var(--color-accent-mint)]">
        ↓
      </div>
    </div>
  );
}
