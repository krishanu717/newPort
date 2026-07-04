import { Astronaut } from "@/components/illustrations/Astronaut";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <p className="text-[var(--color-accent-cream)] opacity-70">
          © {new Date().getFullYear()} Developer Portfolio. Calm mind, steady hands.
        </p>
      </div>
      
      {/* Drifting astronaut off-screen effect */}
      <div className="absolute right-[-20px] bottom-[-40px] opacity-20 pointer-events-none transform rotate-12 scale-75">
        <Astronaut className="w-48 h-48" />
      </div>
    </footer>
  );
}
