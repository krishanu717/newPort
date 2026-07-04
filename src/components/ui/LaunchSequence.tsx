"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket } from "@/components/illustrations/Rocket";

export function LaunchSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"rumble" | "liftoff">("rumble");

  useEffect(() => {
    // Sequence timing
    const liftoffTimer = setTimeout(() => {
      setPhase("liftoff");
    }, 1500); // rumble for 1.5s

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500); // total sequence 3.5s

    return () => {
      clearTimeout(liftoffTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Generate some random stars for the warp effect
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    width: Math.random() * 2 + 1,
    height: Math.random() * 10 + 10,
    delay: Math.random() * 0.5,
  }));

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Warp Speed Stars */}
      {phase === "liftoff" && stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white/60 rounded-full"
          style={{ 
            left: star.left, 
            width: star.width,
            height: star.height,
            top: "-20%" 
          }}
          animate={{
            top: "120%",
            height: star.height * 5, // stretch as it falls
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Screen rumble effect during rumble phase */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-full h-full"
        animate={phase === "rumble" ? {
          x: [-5, 5, -5, 5, -2, 2, 0],
          y: [-2, 2, -2, 2, -1, 1, 0]
        } : {}}
        transition={{
          duration: 0.4,
          repeat: phase === "rumble" ? Infinity : 0,
        }}
      >
        <motion.div
          animate={phase === "rumble" ? {
            y: [0, 5, -5, 0]
          } : {
            y: -2000,
            scale: 0.5
          }}
          transition={
            phase === "rumble" 
              ? { duration: 0.1, repeat: Infinity } 
              : { duration: 1.5, ease: [0.32, 0, 0.67, 0] } // easeIn cubic for acceleration
          }
          className="relative w-48 h-72 md:w-64 md:h-96"
        >
          <Rocket />
          
          {/* Exhaust Flames */}
          <motion.div 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-12 h-24 bg-gradient-to-b from-[#ffbd2e] via-[#ff5f56] to-transparent rounded-full blur-sm"
            animate={phase === "rumble" ? {
              height: [80, 100, 80],
              opacity: [0.8, 1, 0.8]
            } : {
              height: 400,
              opacity: 1
            }}
            transition={
              phase === "rumble"
                ? { duration: 0.1, repeat: Infinity }
                : { duration: 0.2 }
            }
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
