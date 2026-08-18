"use client";

import { motion } from "framer-motion";

export default function EnvironmentBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Base Dark Forest & Twilight Shadow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-botanica-950 via-botanica-900 to-twilight-950" />

      {/* Primary Golden Hour Sunbeam Light Source (Top Right) */}
      <motion.div
        animate={{
          opacity: [0.55, 0.75, 0.55],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-golden-500/35 via-golden-600/25 to-transparent blur-[120px]"
      />

      {/* Secondary Sunset Dusty Rose Flare (Left Center) */}
      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
          transform: ["translateY(0px)", "translateY(-20px)", "translateY(0px)"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-sunset-600/25 via-golden-500/15 to-transparent blur-[110px]"
      />

      {/* Deep Twilight Purple Shadow Glow (Bottom Right) */}
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-twilight-900/45 via-botanica-850/60 to-transparent blur-[130px]" />

      {/* Subtle Bokeh Orbs */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-golden-400/10 blur-2xl animate-drift" />
      <div className="absolute top-2/3 left-1/4 w-40 h-40 rounded-full bg-sunset-500/10 blur-2xl animate-drift" style={{ animationDelay: "4s" }} />

      {/* SVG Botanical Foliage Silhouettes (Left & Right Framing) */}
      {/* Top Left Leaf Canopy */}
      <svg
        className="absolute top-0 left-0 w-80 md:w-96 h-80 text-botanica-800/40 mix-blend-screen opacity-60"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path d="M-20 -20 Q120 40 220 180 C180 200 120 160 80 100 Z" fill="currentColor" />
        <path d="M50 -30 Q180 90 260 220 C220 230 150 190 110 120 Z" fill="currentColor" opacity="0.6" />
      </svg>

      {/* Bottom Right Monstera & Eucalyptus Leaf Silhouette */}
      <svg
        className="absolute bottom-0 right-0 w-96 md:w-[450px] h-[450px] text-botanica-850/50 opacity-70"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path d="M400 400 Q250 250 120 200 C150 140 250 160 350 280 Z" fill="currentColor" />
        <circle cx="280" cy="220" r="40" fill="currentColor" opacity="0.5" />
        <circle cx="220" cy="160" r="30" fill="currentColor" opacity="0.4" />
      </svg>

      {/* Film Grain Noise Layer */}
      <div className="film-grain" />

    </div>
  );
}
