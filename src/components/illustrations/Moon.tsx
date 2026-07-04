import { cn } from "@/lib/utils";

export function Moon({ className }: { className?: string }) {
  return (
    <div className={cn("relative rounded-full animate-moon-glow", className)}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Soft glowing moon"
      >
        {/* Base Moon */}
        <circle cx="100" cy="100" r="95" fill="var(--color-space-800)" />
        <circle cx="100" cy="100" r="95" fill="url(#moon-gradient)" opacity="0.6" />
        
        {/* Subtle craters */}
        <circle cx="60" cy="60" r="15" fill="var(--color-space-900)" opacity="0.3" />
        <circle cx="140" cy="80" r="25" fill="var(--color-space-900)" opacity="0.2" />
        <circle cx="80" cy="140" r="20" fill="var(--color-space-900)" opacity="0.25" />
        <circle cx="150" cy="150" r="12" fill="var(--color-space-900)" opacity="0.15" />
        <circle cx="40" cy="110" r="10" fill="var(--color-space-900)" opacity="0.2" />
        
        <defs>
          <radialGradient id="moon-gradient" cx="0.5" cy="0.5" r="0.5" fx="0.3" fy="0.3">
            <stop offset="0%" stopColor="var(--color-accent-mint)" />
            <stop offset="60%" stopColor="var(--color-accent-lavender)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
