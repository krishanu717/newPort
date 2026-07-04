"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
}

export function Button({ children, onClick, className, variant = "primary", href }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-colors overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[var(--color-accent-mint)] to-[var(--color-accent-lavender)] text-[#0b1026] hover:text-[#0b1026]",
    secondary: "bg-transparent border border-white/20 text-[var(--color-accent-cream)] hover:bg-white/5",
  };

  const Content = (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Soft glow on hover for primary button */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-glow mix-blend-screen pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {Content}
      </a>
    );
  }

  return Content;
}
