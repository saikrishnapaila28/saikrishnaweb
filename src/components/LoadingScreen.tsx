"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // If document is already complete, fade out quickly
    const handleLoad = () => {
      // Small tick for smooth entrance and exit
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout so loader never hangs
      const fallbackTimer = setTimeout(handleLoad, 1200);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  // Unmount completely from DOM after opacity fade transition (500ms)
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-botanica-950/95 backdrop-blur-2xl transition-opacity duration-500 ease-out select-none ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Soft Ambient Radial Glow Behind Logo */}
      <div className="absolute w-80 h-80 rounded-full bg-golden-500/15 blur-3xl pointer-events-none animate-pulse" />

      {/* Center Cinematic Logo Container */}
      <div className="relative flex flex-col items-center gap-5 z-10">
        <div className="w-20 h-20 rounded-2xl glass-pill-apple border border-golden-500/35 flex items-center justify-center shadow-[0_0_35px_rgba(244,162,97,0.3)] animate-sk-bloom">
          <Image
            src="/sk-logo.png"
            alt="SK Logo"
            width={48}
            height={48}
            priority
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Elegant Identity Subtext */}
        <span className="text-[11px] font-cozy tracking-[0.25em] text-golden-300/80 uppercase font-semibold">
          Sai Krishna Paila
        </span>
      </div>
    </div>
  );
}
