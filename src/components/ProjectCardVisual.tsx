import { Globe, Cloud, Smartphone } from "lucide-react";

interface ProjectCardVisualProps {
  projectId: string;
}

export default function ProjectCardVisual({ projectId }: ProjectCardVisualProps) {
  if (projectId === "gridixa") {
    return (
      <div className="relative w-full h-44 sm:h-52 glass-3d-plane rounded-2xl overflow-hidden p-6 flex items-center justify-center border border-white/15 shadow-xl group">
        <div className="p-5 rounded-full bg-golden-500/10 border border-golden-400/20 text-golden-400 group-hover:scale-110 group-hover:bg-golden-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(244,162,97,0.15)]">
          <Globe className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
    );
  }

  if (projectId === "ai-olympiad") {
    return (
      <div className="relative w-full h-44 sm:h-52 glass-3d-plane rounded-2xl overflow-hidden p-6 flex items-center justify-center border border-white/15 shadow-xl group">
        <div className="p-5 rounded-full bg-golden-500/10 border border-golden-400/20 text-golden-400 group-hover:scale-110 group-hover:bg-golden-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(244,162,97,0.15)]">
          <Cloud className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>
    );
  }

  // Tinder Clone Visual Graphic
  return (
    <div className="relative w-full h-44 sm:h-52 glass-3d-plane rounded-2xl overflow-hidden p-6 flex items-center justify-center border border-white/15 shadow-xl group">
      <div className="p-5 rounded-full bg-golden-500/10 border border-golden-400/20 text-golden-400 group-hover:scale-110 group-hover:bg-golden-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(244,162,97,0.15)]">
        <Smartphone className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>
    </div>
  );
}
