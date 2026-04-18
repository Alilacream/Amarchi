"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"show" | "fade">("show");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fade"), 800);
    const doneTimer = setTimeout(onDone, 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative mb-8">
        <Image
          src="/amarchi_logo.png"
          alt="AM Archi Vision"
          width={280}
          height={95}
          className="h-16 w-auto animate-pulse"
          style={{ animationDuration: "2s" }}
        />
      </div>

      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-accent"
            style={{
              animation: "splashDot 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes splashDot {
          0%,
          80%,
          100% {
            transform: scale(0.6);
            opacity: 0.4;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
