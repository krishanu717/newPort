"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LaunchSequence } from "@/components/ui/LaunchSequence";

export function ContactForm() {
  const [isLaunching, setIsLaunching] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setIsLaunching(true);
  };

  const handleLaunchComplete = () => {
    setIsLaunching(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="flex flex-col items-center justify-center py-6 px-4 w-full h-full animate-in fade-in duration-500">
        <CheckCircle2 className="w-12 h-12 text-[var(--color-accent-mint)] mb-4" />
        <h3 className="text-xl font-semibold text-[var(--color-accent-cream)] mb-2">Transmission Received</h3>
        <p className="text-[var(--color-accent-lavender)] text-sm text-center">
          The signal has reached orbit. I&apos;ll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full text-left">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a transmission..."
          required
          rows={3}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-[var(--color-accent-cream)] placeholder-white/30 focus:outline-none focus:border-[var(--color-accent-mint)] focus:bg-white/5 transition-all resize-none text-sm"
        />
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full justify-center group"
          disabled={!message.trim()}
        >
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
          Initiate Launch
        </Button>
      </form>

      {isLaunching && <LaunchSequence onComplete={handleLaunchComplete} />}
    </>
  );
}
