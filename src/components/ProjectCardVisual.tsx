"use client";

import { Globe, Cloud, Smartphone } from "lucide-react";

interface ProjectCardVisualProps {
  projectId: string;
}

export default function ProjectCardVisual({ projectId }: ProjectCardVisualProps) {
  if (projectId === "gridixa") {
    return (
      <div className="relative w-full h-56 sm:h-64 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
        <div className="flex items-center justify-between font-cozy text-xs text-golden-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <Globe className="w-3.5 h-3.5 text-golden-400" />
            <span>gridixa.in</span>
          </span>
        </div>

        <div className="space-y-2 my-auto">
          <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
            Gridixa.in
          </div>
          <p className="text-xs text-paper-300 font-cozy">
            SEO & Web Development
          </p>
        </div>

        <div className="flex items-center justify-between text-xs font-cozy text-paper-400 pt-3 border-t border-white/10">
          <span>Production Web Work</span>
          <span className="text-golden-400 font-semibold">Visit ↗</span>
        </div>
      </div>
    );
  }

  if (projectId === "ai-olympiad") {
    return (
      <div className="relative w-full h-56 sm:h-64 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
        <div className="flex items-center justify-between font-cozy text-xs text-golden-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <Cloud className="w-3.5 h-3.5 text-golden-400" />
            <span>ai.gridixa.in</span>
          </span>
        </div>

        <div className="space-y-2 my-auto">
          <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
            AI Olympiad
          </div>
          <p className="text-xs text-paper-300 font-cozy">
            Web Design & AWS Integration
          </p>
        </div>

        <div className="flex items-center justify-between text-xs font-cozy text-paper-400 pt-3 border-t border-white/10">
          <span>Web Platform</span>
          <span className="text-golden-400 font-semibold">Visit ↗</span>
        </div>
      </div>
    );
  }

  // Tinder Clone
  return (
    <div className="relative w-full h-56 sm:h-64 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
      <div className="flex items-center justify-between font-cozy text-xs text-golden-400">
        <span className="flex items-center gap-1.5 font-semibold">
          <Smartphone className="w-3.5 h-3.5 text-golden-400" />
          <span>Mobile Experiment</span>
        </span>
        <span className="px-2.5 py-0.5 glass-pill-apple text-[11px] font-cozy text-golden-300 font-medium">
          In Development
        </span>
      </div>

      <div className="space-y-2 my-auto">
        <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
          Tinder Clone
        </div>
        <p className="text-xs text-paper-300 font-cozy">
          React Native Learning App
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-cozy text-paper-400 pt-3 border-t border-white/10">
        <span>Learning Project</span>
        <span>Mobile App</span>
      </div>
    </div>
  );
}
