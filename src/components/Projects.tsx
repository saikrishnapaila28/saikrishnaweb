"use client";

import { ExternalLink } from "lucide-react";
import ProjectCardVisual from "./ProjectCardVisual";

export default function Projects() {
  const projects = [
    {
      id: "gridixa",
      title: "GRIDIXA",
      subtitle: "SEO · Web Development",
      description: "SEO implementation and optimization work for the Gridixa website.",
      website: "https://www.gridixa.in",
      isInDevelopment: false,
    },
    {
      id: "ai-olympiad",
      title: "AI OLYMPIAD",
      subtitle: "Web Design · Development · AWS",
      description:
        "Designed the website with a coworker, connected its pages and integrated AWS for content deployment.",
      website: "https://ai.gridixa.in",
      isInDevelopment: false,
    },
    {
      id: "tinder-clone",
      title: "TINDER CLONE",
      subtitle: "React Native · Development",
      description:
        "Tinder-inspired mobile application developed as a learning project; remained in the development phase.",
      website: null,
      isInDevelopment: true,
    },
  ];

  return (
    <section id="work" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-cozy font-semibold text-golden-400 uppercase tracking-widest block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-paper-50">
              Selected Work
            </h2>
            <p className="text-base text-paper-300 font-cozy">
              Web development projects and mobile applications.
            </p>
          </div>

          {/* Clean Glass Project Cards */}
          <div className="space-y-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="glass-3d-plane p-6 md:p-8 space-y-6 hover:border-golden-400/50 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Info */}
                  <div className="lg:col-span-6 space-y-4 font-cozy">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-golden-400">
                        {proj.subtitle}
                      </span>
                      {proj.isInDevelopment && (
                        <span className="glass-pill-apple px-3 py-1 text-[11px] font-medium text-golden-300">
                          In Development
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-paper-50 group-hover:text-golden-400 transition-colors tracking-wide">
                      {proj.title}
                    </h3>

                    <p className="text-base text-paper-200/90 leading-relaxed font-cozy">
                      {proj.description}
                    </p>

                    {/* Button */}
                    {proj.website && (
                      <div className="pt-2">
                        <a
                          href={proj.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-golden-500 text-botanica-950 font-cozy font-bold text-xs rounded-full hover:bg-golden-400 hover:scale-[1.02] transition-all"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Visual Preview */}
                  <div className="lg:col-span-6">
                    <ProjectCardVisual
                      projectId={proj.id}
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
