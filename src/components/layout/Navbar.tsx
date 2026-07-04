"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-[#0b1026]/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-medium tracking-wide text-white">
          Portfolio
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] transition-colors">
            About
          </a>
          <a href="#projects" className="text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] transition-colors">
            Projects
          </a>
          <a href="#experience" className="text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-[var(--color-accent-cream)] hover:text-[var(--color-accent-mint)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
