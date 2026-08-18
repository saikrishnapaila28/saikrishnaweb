"use client";

import { motion } from "framer-motion";
import { Coffee, Terminal, Sparkles, Compass } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto flex items-center justify-center p-2">
      
      {/* Golden Hour Sunlight Aura Glow behind the composition */}
      <div className="absolute inset-0 bg-gradient-to-tr from-golden-600/30 via-sunset-600/20 to-botanica-800/20 rounded-3xl blur-3xl -z-10 animate-sunbeam" />

      {/* Main Glass Desk Surface Frame */}
      <div className="relative w-full h-full bg-botanica-950/45 backdrop-blur-2xl border border-white/15 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
        
        {/* Subtle Ambient Light Ray Overlay */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-golden-400/25 via-golden-600/15 to-transparent rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Row / Glass Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-golden-500 shadow-[0_0_10px_#F4A261] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-golden-300 uppercase">
              GOLDEN HOUR · CREATIVE LAB
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-paper-300/80">
            <Compass className="w-3 h-3 text-golden-400" />
            <span>28°N · Delhi</span>
          </div>
        </div>

        {/* Central Workspace Composition */}
        <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
          
          {/* Layer 1: Notebook & Coffee Mug Silhouette */}
          <motion.div
            initial={{ rotate: -3, y: 10, opacity: 0 }}
            animate={{ rotate: -3, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[85%] h-[78%] bg-botanica-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg"
          >
            {/* Notebook Line Art */}
            <div className="space-y-2 opacity-60">
              <div className="h-1.5 w-1/3 bg-golden-500/40 rounded" />
              <div className="h-1 w-full bg-paper-300/20 rounded" />
              <div className="h-1 w-5/6 bg-paper-300/20 rounded" />
              <div className="h-1 w-2/3 bg-paper-300/20 rounded" />
            </div>

            <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-paper-400 border-t border-white/10">
              <div className="flex items-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-golden-400" />
                <span>Lo-Fi Desk</span>
              </div>
              <span className="text-golden-400">Notebook #04</span>
            </div>
          </motion.div>

          {/* Layer 2: Overlapping Translucent Code Terminal Screen */}
          <motion.div
            initial={{ rotate: 3, y: 20, opacity: 0 }}
            animate={{ rotate: 3, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="absolute w-[76%] h-[70%] bg-twilight-950/90 text-paper-50 rounded-xl p-4 shadow-sunset backdrop-blur-xl border border-white/20 flex flex-col justify-between z-10"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-sunset-600/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-golden-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-botanica-500/80" />
              </div>
              <span className="text-[9px] font-mono text-golden-400">sai-krishna.py</span>
            </div>

            <div className="space-y-1.5 font-mono text-[10px] text-paper-200/90 my-auto">
              <p><span className="text-golden-400">&gt;</span> location: &quot;New Delhi&quot;</p>
              <p><span className="text-golden-400">&gt;</span> degree: &quot;B.Tech Data Science&quot;</p>
              <p><span className="text-golden-400">&gt;</span> focus: [&quot;Web&quot;, &quot;ML&quot;, &quot;Audio&quot;]</p>
            </div>

            <div className="flex items-center justify-between text-[9px] text-golden-300 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-golden-400" />
                <span>active session</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-golden-500 shadow-[0_0_8px_#F4A261] animate-ping" />
            </div>
          </motion.div>

          {/* Layer 3: Botanical Leaf Branch Silhouette (Golden Lit Leaf SVG) */}
          <motion.svg
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 w-44 h-44 text-golden-500/40 pointer-events-none drop-shadow-md z-20"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M100 180 Q110 100 170 30" stroke="currentColor" strokeLinecap="round" />
            <path d="M140 70 C160 50 180 60 170 85 C160 110 130 110 120 90" stroke="currentColor" strokeWidth="1.2" fill="rgba(244, 162, 97, 0.15)" />
            <path d="M120 100 C145 85 160 105 150 125 C140 145 115 135 110 115" stroke="currentColor" strokeWidth="1.2" fill="rgba(224, 122, 95, 0.15)" />
            <circle cx="160" cy="50" r="15" fill="rgba(244, 162, 97, 0.2)" />
          </motion.svg>

          {/* Layer 4: Secondary Golden Sunset Branch (Bottom Left) */}
          <motion.svg
            animate={{ rotate: [0, -3, 1, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 w-36 h-36 text-sunset-600/45 pointer-events-none z-20"
            viewBox="0 0 150 150"
            fill="none"
          >
            <path d="M20 130 Q60 80 120 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="50" cy="98" r="10" stroke="currentColor" strokeWidth="1.2" fill="rgba(200, 109, 116, 0.2)" />
            <circle cx="75" cy="70" r="12" stroke="currentColor" strokeWidth="1.2" fill="rgba(244, 162, 97, 0.2)" />
          </motion.svg>

        </div>

        {/* Bottom Editorial Stamp */}
        <div className="relative z-10 border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-paper-300 font-sans">
          <div className="flex items-center gap-1.5">
            <span className="text-golden-400 font-serif italic">Est.</span>
            <span className="font-mono text-[10px]">2024—2028</span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-golden-400 uppercase">
            Lo-Fi Botanica × Glass
          </span>
        </div>

      </div>
    </div>
  );
}
