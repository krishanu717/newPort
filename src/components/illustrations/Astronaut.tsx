import { cn } from "@/lib/utils";

export function Astronaut({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-float drop-shadow-2xl"
        role="img"
        aria-label="Floating astronaut illustration"
      >
        {/* Tether */}
        <path
          d="M100 20 C 150 -10, 250 50, 300 -50"
          stroke="var(--color-accent-cream)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="opacity-30"
        />
        
        {/* Body / Suit */}
        <rect x="70" y="110" width="60" height="70" rx="30" fill="var(--color-space-800)" stroke="var(--color-accent-cream)" strokeWidth="4" />
        
        {/* Backpack */}
        <rect x="55" y="120" width="20" height="50" rx="10" fill="var(--color-space-700)" stroke="var(--color-accent-mint)" strokeWidth="3" />
        
        {/* Arms */}
        <path d="M70 130 Q 40 140 50 170" fill="none" stroke="var(--color-accent-cream)" strokeWidth="16" strokeLinecap="round" />
        <path d="M130 130 Q 160 140 150 170" fill="none" stroke="var(--color-accent-cream)" strokeWidth="16" strokeLinecap="round" />
        
        {/* Legs */}
        <path d="M85 180 Q 80 220 70 230" fill="none" stroke="var(--color-accent-cream)" strokeWidth="18" strokeLinecap="round" />
        <path d="M115 180 Q 120 220 130 230" fill="none" stroke="var(--color-accent-cream)" strokeWidth="18" strokeLinecap="round" />
        
        {/* Helmet */}
        <circle cx="100" cy="80" r="40" fill="var(--color-space-900)" stroke="var(--color-accent-cream)" strokeWidth="4" />
        
        {/* Visor */}
        <rect x="75" y="65" width="50" height="30" rx="15" fill="var(--color-accent-lavender)" opacity="0.9" />
        
        {/* Star reflection on visor */}
        <path
          d="M110 70 L 112 75 L 117 77 L 112 79 L 110 84 L 108 79 L 103 77 L 108 75 Z"
          fill="var(--color-accent-cream)"
        />
        
        {/* Suit details */}
        <circle cx="100" cy="140" r="10" fill="var(--color-accent-mint)" />
        <line x1="85" y1="160" x2="115" y2="160" stroke="var(--color-accent-lavender)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
