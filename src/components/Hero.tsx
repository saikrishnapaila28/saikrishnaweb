"use client";

import { useEffect, useRef } from "react";
import { Compass, FileText, Github, Linkedin, ArrowDown } from "lucide-react";
import { useResume } from "./ResumeContext";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { openResume: contextOpenResume } = useResume();
  const handleOpenResume = onOpenResume || contextOpenResume;
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || !cardRef.current) return;
      
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          if (!cardRef.current) return;
          const { innerWidth, innerHeight } = window;
          const x = (e.clientX / innerWidth - 0.5) * 10;
          const y = (e.clientY / innerHeight - 0.5) * 10;
          cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 0.25}deg) rotateX(${-y * 0.25}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Physical 3D Glass Plane Container */}
        <div
          ref={cardRef}
          className="glass-3d-plane p-8 sm:p-12 max-w-3xl space-y-8 backdrop-blur-2xl transition-transform duration-100 ease-out"
        >
          
          {/* Sub-identity Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill-apple text-xs font-cozy text-golden-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-golden-500 shadow-[0_0_8px_#F4A261]" />
            <span>Computer Science Student · Data Science</span>
          </div>

          {/* Bricolage Grotesque Single Primary H1 Name */}
          <div className="space-y-1 font-display">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
              <span className="text-paper-50">Sai </span>
              <span className="text-atmospheric-fade block sm:inline">Krishna </span>
              <span className="text-atmospheric-fade block">Paila</span>
            </h1>
            <p className="text-base sm:text-lg font-cozy text-paper-300/90 font-medium tracking-wide pt-2">
              Data Science · Developer · Creator
            </p>
          </div>

          {/* Tagline Copy */}
          <div className="space-y-4 pt-2">
            <h2 className="text-2xl sm:text-3xl font-cozy font-medium text-golden-300 leading-snug">
              &ldquo;Building with code, exploring through creativity.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-paper-200/90 leading-relaxed font-cozy max-w-xl">
              I&apos;m a Computer Science student specializing in Data Science at IILM University. I enjoy building web experiences, learning through real-world projects, and exploring the creative side of technology through music, art, writing and photography.
            </p>
          </div>

          {/* Glass CTA Buttons & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 font-cozy">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-golden-500 text-botanica-950 font-bold rounded-full text-xs tracking-wider uppercase shadow-xl hover:bg-golden-400 hover:scale-[1.02] transition-all duration-300 group"
            >
              <Compass className="w-4 h-4 text-botanica-950 group-hover:rotate-45 transition-transform duration-300" />
              <span>Explore My Work</span>
            </a>

            <button
              onClick={handleOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 glass-pill-apple text-paper-50 text-xs tracking-wider font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-golden-400" />
              <span>View Resume</span>
            </button>

            {/* Social Glass Badges */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-white/15">
              <a
                href="https://github.com/saikrishnapaila28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 glass-pill-apple text-paper-200 hover:text-golden-400 transition-all"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saikrishnapaila"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 glass-pill-apple text-paper-200 hover:text-golden-400 transition-all"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-4 flex items-center gap-2 text-xs font-cozy text-paper-400">
            <ArrowDown className="w-3.5 h-3.5 text-golden-400 animate-bounce" />
            <span>Scroll to explore portfolio</span>
          </div>

        </div>

      </div>
    </section>
  );
}
