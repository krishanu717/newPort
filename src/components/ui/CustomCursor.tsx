"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Rocket } from "@/components/illustrations/Rocket";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Main cursor (Rocket tip)
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.2 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.2 });

  // Trails
  const trailX1 = useSpring(mouseX, { damping: 20, stiffness: 200, mass: 0.5 });
  const trailY1 = useSpring(mouseY, { damping: 20, stiffness: 200, mass: 0.5 });
  
  const trailX2 = useSpring(mouseX, { damping: 15, stiffness: 100, mass: 0.8 });
  const trailY2 = useSpring(mouseY, { damping: 15, stiffness: 100, mass: 0.8 });

  const trailX3 = useSpring(mouseX, { damping: 10, stiffness: 50, mass: 1 });
  const trailY3 = useSpring(mouseY, { damping: 10, stiffness: 50, mass: 1 });

  useEffect(() => {
    setMounted(true);
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    setIsPointerDevice(pointerQuery.matches);
    setIsReducedMotion(motionQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => setIsPointerDevice(e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    
    pointerQuery.addEventListener("change", handlePointerChange);
    motionQuery.addEventListener("change", handleMotionChange);

    if (!pointerQuery.matches || motionQuery.matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        setIsHovering(true);
        const text = cursorTarget.getAttribute('data-cursor');
        setCursorText(text || "");
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseover", handleMouseOver);
      pointerQuery.removeEventListener("change", handlePointerChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isPointerDevice || isReducedMotion) return null;

  return (
    <>
      {/* Trails - only visible when not hovering a text target */}
      {!cursorText && (
        <>
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997] w-2 h-2 rounded-full bg-[var(--color-accent-mint)] opacity-40 blur-[1px]"
            style={{ x: trailX3, y: trailY3, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.4 : 0 }}
          />
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 rounded-full bg-[var(--color-accent-lavender)] opacity-60 blur-[1px]"
            style={{ x: trailX2, y: trailY2, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.6 : 0 }}
          />
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 rounded-full bg-white opacity-80"
            style={{ x: trailX1, y: trailY1, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.8 : 0 }}
          />
        </>
      )}

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center origin-top-left"
        style={{
          x: cursorX,
          y: cursorY,
          // When it's text, center it. When it's rocket, we want the top-left of the rocket container to align with mouse.
          translateX: cursorText ? "-50%" : "-15%", 
          translateY: cursorText ? "-50%" : "-15%",
          mixBlendMode: "normal"
        }}
        initial={false}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          width: cursorText ? "auto" : isHovering ? 48 : 32,
          height: cursorText ? 32 : isHovering ? 48 : 32,
          paddingLeft: cursorText ? 16 : 0,
          paddingRight: cursorText ? 16 : 0,
          borderRadius: cursorText ? 9999 : "50%",
          backgroundColor: cursorText ? "var(--color-accent-mint)" : "transparent",
          scale: isVisible ? 1 : 0.8
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
      >
        {cursorText ? (
          <span className="text-black text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            {cursorText}
          </span>
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center -rotate-45"
            animate={{ scale: isHovering ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Rocket className="w-full h-full drop-shadow-[0_0_8px_rgba(185,168,224,0.6)]" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
