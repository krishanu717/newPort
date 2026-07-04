"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Transition } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const scrollLockRef = useRef(false);
  
  const [isTopNav, setIsTopNav] = useState(false);
  const isTopNavRef = useRef(false);
  const [showShootingStar, setShowShootingStar] = useState(false);
  const lastScrollTime = useRef(0);
  const { scrollY } = useScroll();

  const butterySpring: Transition = { type: "spring", stiffness: 70, damping: 20, mass: 0.6 };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isMobile) return;
    
    // Skip dynamic morphing completely if reduced motion is enabled (enforce top nav)
    if (isReducedMotion) {
      if (!isTopNavRef.current) {
        isTopNavRef.current = true;
        setIsTopNav(true);
        document.body.classList.add("is-top-nav");
      }
      return;
    }

    // Light throttle
    const now = Date.now();
    if (now - lastScrollTime.current < 50) return;
    lastScrollTime.current = now;

    const heroSection = document.getElementById("hero");
    if (!heroSection) return;
    
    const heroHeight = heroSection.offsetHeight;
    const triggerDown = heroHeight * 0.8;
    const triggerUp = heroHeight * 0.6; // Hysteresis to prevent scroll thrashing
    
    let shouldBeTopNav = isTopNavRef.current;
    if (!shouldBeTopNav && latest > triggerDown) {
      shouldBeTopNav = true;
    } else if (shouldBeTopNav && latest < triggerUp) {
      shouldBeTopNav = false;
    }
    
    if (shouldBeTopNav !== isTopNavRef.current) {
      isTopNavRef.current = shouldBeTopNav;
      setIsTopNav(shouldBeTopNav);
      
      if (shouldBeTopNav) {
        document.body.classList.add("is-top-nav");
      } else {
        document.body.classList.remove("is-top-nav");
      }

      // Trigger starfall every time we go Home -> About, but not the reverse
      if (shouldBeTopNav) {
        setShowShootingStar(true);
        setTimeout(() => setShowShootingStar(false), 2500); // Allow time for cascade
      }
    }
  });

  // Responsive & Motion Checks
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        document.body.classList.remove("is-top-nav");
      } else if (isTopNavRef.current) {
        document.body.classList.add("is-top-nav");
      }
    };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    handleResize(); // Initial check
    const prefersReduced = motionQuery.matches;
    setIsReducedMotion(prefersReduced);
    
    if (prefersReduced) {
      isTopNavRef.current = true;
      setIsTopNav(true);
      document.body.classList.add("is-top-nav");
    }
    
    window.addEventListener("resize", handleResize);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Canvas Particle Animation
  useEffect(() => {
    // Only run canvas if not mobile, not reduced motion, and not in top nav mode (to save resources)
    if (isMobile || isReducedMotion || isTopNav || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let isVisible = true;
    
    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createParticles();
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const draw = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.fillStyle = `rgba(185, 168, 224, ${p.opacity})`; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible) draw();
      else cancelAnimationFrame(animationFrameId);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && document.visibilityState === "visible") draw();
    });
    observer.observe(canvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, isReducedMotion, isTopNav]);

  // Scroll Spy with Debounced URL Update
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (scrollLockRef.current) return;
      
      const sections = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = sections[0]?.id || "hero";
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (!scrollLockRef.current) {
            window.history.replaceState(null, "", `#${currentSection}`);
          }
        }, 150);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (scrollLockRef.current) return;
    
    const target = document.getElementById(id);
    if (!target) return;
    
    scrollLockRef.current = true;
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
    
    target.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      scrollLockRef.current = false;
    }, 1000);
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="fixed top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 bg-[var(--color-accent-mint)] text-black px-4 py-2 font-bold rounded-md transition-transform duration-300"
      >
        Skip to content
      </a>

      {/* Starfall Overlay */}
      <AnimatePresence>
        {showShootingStar && !isMobile && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  opacity: 0, 
                  left: `${10 + Math.random() * 40}%`, 
                  top: "-10%",
                  rotate: 45 + (Math.random() * 15),
                  scale: 0.5
                }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  top: "120%",
                  left: `${40 + Math.random() * 60}%`,
                  scale: [0.5, 1, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5 + Math.random() * 1.5, 
                  delay: Math.random() * 0.4,
                  ease: [0.22, 1, 0.36, 1] 
                }}
              >
                <div className="relative w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent-mint)] to-white rounded-full blur-[1px] shadow-[0_0_20px_var(--color-accent-mint)]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.aside 
        layout
        initial={false}
        transition={butterySpring}
        className={cn(
          "fixed z-50 pointer-events-none flex",
          isTopNav && !isMobile
            ? "top-0 left-0 w-full h-24 justify-center items-start px-6 pt-4" // Top Nav
            : "top-0 left-0 h-full w-full md:w-64 flex-col justify-end pb-8 md:pb-0 md:justify-center px-6" // Sidebar
        )}
      >
        <motion.div 
          layout
          transition={butterySpring}
          className={cn(
            "relative pointer-events-auto bg-[#0b1026]/40 backdrop-blur-xl border border-white/10 overflow-hidden",
            isTopNav && !isMobile
              ? "flex flex-row items-center justify-between px-8 py-3 rounded-full shadow-lg shadow-black/20 w-fit" 
              : "rounded-2xl md:rounded-r-3xl md:rounded-l-none h-auto md:h-full py-4 md:py-12 md:max-h-[80vh] flex flex-col justify-center items-center md:items-start transition-all"
          )}
        >
          {/* Canvas or Static Pattern */}
          {!isMobile && (
            <motion.div 
              layout 
              initial={false} 
              transition={butterySpring}
              animate={{ opacity: isTopNav ? 0 : 1 }} 
              className="absolute inset-0 z-0 pointer-events-none"
            >
              {isReducedMotion ? (
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-accent-mint) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
              ) : (
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
              )}
            </motion.div>
          )}
          
          <motion.nav 
            layout 
            transition={butterySpring}
            aria-label="Section navigation" 
            className={cn(
              "relative z-10 flex w-full",
              isTopNav && !isMobile
                ? "flex-row justify-center gap-6 md:gap-8 items-center" 
                : "flex-row md:flex-col items-center md:items-start justify-between md:justify-center gap-4 md:gap-8 px-4 md:px-12"
            )}
          >
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                aria-current={activeSection === section.id ? "page" : undefined}
                className={cn(
                  "relative flex items-center group transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-mint)] focus-visible:bg-white/10",
                  isTopNav && !isMobile ? "px-2 py-1" : "px-3 md:px-0 py-2 md:py-1 rounded-lg",
                  activeSection === section.id
                    ? "text-[var(--color-accent-mint)]"
                    : "text-[var(--color-accent-cream)] hover:text-[var(--color-accent-lavender)] hover:bg-white/5 md:hover:bg-transparent"
                )}
              >
                {/* Visual Indicator */}
                <motion.span 
                  layout
                  transition={butterySpring}
                  className={cn(
                    "hidden md:block absolute transition-all duration-300",
                    isTopNav && !isMobile
                      ? "-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      : "-left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                    activeSection === section.id 
                      ? "bg-[var(--color-accent-mint)] shadow-[0_0_8px_var(--color-accent-mint)]" 
                      : "bg-transparent md:bg-white/20 group-hover:bg-[var(--color-accent-lavender)]"
                  )} 
                />
                
                <motion.span layout transition={butterySpring} className="text-sm md:text-base font-medium tracking-wide">
                  {section.label}
                </motion.span>
              </a>
            ))}
          </motion.nav>
        </motion.div>
      </motion.aside>
    </>
  );
}
