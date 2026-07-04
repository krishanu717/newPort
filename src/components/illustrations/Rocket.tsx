import { cn } from "@/lib/utils";

export function Rocket({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 150" 
      className={cn("w-full h-full", className)}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <g className="text-white/80">
        {/* Rocket Body */}
        <path d="M50 10 C 30 40, 20 80, 25 120 L 75 120 C 80 80, 70 40, 50 10 Z" fill="rgba(255,255,255,0.05)" />
        {/* Rocket Fins */}
        <path d="M25 90 L 5 130 L 25 120 Z" fill="rgba(143,217,168,0.2)" stroke="var(--color-accent-mint)" />
        <path d="M75 90 L 95 130 L 75 120 Z" fill="rgba(143,217,168,0.2)" stroke="var(--color-accent-mint)" />
        {/* Rocket Window */}
        <circle cx="50" cy="65" r="15" fill="rgba(185,168,224,0.2)" stroke="var(--color-accent-lavender)" />
        {/* Astronaut inside window */}
        <circle cx="50" cy="62" r="6" fill="white" />
        <path d="M42 75 C 42 68, 58 68, 58 75" stroke="white" strokeWidth="2" />
        {/* Details */}
        <path d="M40 100 L 60 100" stroke="var(--color-accent-mint)" opacity="0.5" />
        <path d="M45 110 L 55 110" stroke="var(--color-accent-lavender)" opacity="0.5" />
      </g>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
