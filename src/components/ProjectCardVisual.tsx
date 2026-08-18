import { Globe, Cloud, Smartphone } from "lucide-react";

interface ProjectCardVisualProps {
  projectId: string;
}

export default function ProjectCardVisual({ projectId }: ProjectCardVisualProps) {
  if (projectId === "gridixa") {
    return (
      <div className="relative w-full h-48 sm:h-56 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
        <div className="flex items-center font-cozy text-xs text-golden-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <Globe className="w-3.5 h-3.5 text-golden-400" />
            <span>gridixa.in</span>
          </span>
        </div>

        <div className="my-auto">
          <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
            GRIDIXA
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "ai-olympiad") {
    return (
      <div className="relative w-full h-48 sm:h-56 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
        <div className="flex items-center font-cozy text-xs text-golden-400">
          <span className="flex items-center gap-1.5 font-semibold">
            <Cloud className="w-3.5 h-3.5 text-golden-400" />
            <span>ai.gridixa.in</span>
          </span>
        </div>

        <div className="my-auto">
          <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
            AI OLYMPIAD
          </div>
        </div>
      </div>
    );
  }

  // Tinder Clone
  return (
    <div className="relative w-full h-48 sm:h-56 glass-3d-plane text-paper-50 rounded-2xl overflow-hidden p-6 flex flex-col justify-between border border-white/15 shadow-xl group">
      <div className="flex items-center font-cozy text-xs text-golden-400">
        <span className="flex items-center gap-1.5 font-semibold">
          <Smartphone className="w-3.5 h-3.5 text-golden-400" />
          <span>Mobile Application</span>
        </span>
      </div>

      <div className="my-auto">
        <div className="font-display font-semibold text-3xl sm:text-4xl text-paper-50 group-hover:translate-x-2 transition-transform duration-300">
          TINDER CLONE
        </div>
      </div>
    </div>
  );
}
