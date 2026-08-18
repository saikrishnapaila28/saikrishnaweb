"use client";

import { useEffect } from "react";
import { X, Download, FileText, ExternalLink, MapPin, Mail, Github, Linkedin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] glass-3d-plane overflow-hidden flex flex-col border border-white/20 shadow-2xl bg-botanica-950/95 text-paper-50">
        
        {/* Modal Header Bar - Always Visible */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/15 bg-white/5 font-cozy shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
            <FileText className="w-5 h-5 text-golden-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-paper-50 truncate">
              Sai_Krishna_Paila_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="/resume.pdf"
              download="Sai_Krishna_Paila_Resume.pdf"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-golden-500 text-botanica-950 font-bold text-xs rounded-full hover:bg-golden-400 transition-all shadow-sm shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            {/* Clear 44x44px Touch Target Close Button */}
            <button
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center text-paper-200 hover:text-paper-50 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-golden-400"
              aria-label="Close Resume Modal"
            >
              <X className="w-5.5 h-5.5 text-paper-100" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="p-5 sm:p-10 overflow-y-auto space-y-8 font-cozy">
          
          {/* Header Identity */}
          <div className="border-b border-white/15 pb-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-display font-semibold text-paper-50">
              Sai Krishna Paila
            </h1>
            <p className="text-base text-golden-400 font-medium">
              Computer Science Student · Data Science
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-paper-300 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-golden-400" />
                New Delhi, India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-golden-400" />
                saikrishnapaila28@gmail.com
              </span>
              <span>·</span>
              <a
                href="https://github.com/saikrishnapaila28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-golden-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-golden-400" />
                github.com/saikrishnapaila28
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/saikrishnapaila"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-golden-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-golden-400" />
                linkedin.com/in/saikrishnapaila
              </a>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold text-golden-400 uppercase tracking-widest">
              PROFILE
            </h2>
            <p className="text-sm text-paper-200/90 leading-relaxed">
              Computer Science student specializing in Data Science at IILM University with practical experience in web development, SEO, website maintenance and deployment. Interested in building useful digital experiences while exploring creative work through music, photography, writing and art.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-semibold text-golden-400 uppercase tracking-widest">
              EXPERIENCE
            </h2>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-paper-50">Gridixa</span>
                  <span className="text-xs text-golden-400 font-medium">2026 – Present</span>
                </div>
                <span className="block text-xs font-semibold text-golden-300">Software Engineer</span>
                <ul className="list-disc list-inside text-xs text-paper-300 space-y-1 pt-1">
                  <li>Worked on the SEO implementation and optimization of the Gridixa website.</li>
                  <li>Contributed to the AI Olympiad website with a coworker, including web design and connecting its pages.</li>
                  <li>Worked with AWS for content deployment and production web workflows.</li>
                </ul>
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-paper-50">TheYouthTalks</span>
                  <span className="text-xs text-golden-400 font-medium">Oct 2025 – Jan 2026</span>
                </div>
                <span className="block text-xs font-semibold text-golden-300">Content Analyst Intern</span>
                <ul className="list-disc list-inside text-xs text-paper-300 space-y-1 pt-1">
                  <li>Wrote and edited articles for the organization.</li>
                  <li>Maintained the website and handled content-related updates.</li>
                  <li>Applied MERN-stack concepts in a practical working environment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-golden-400 uppercase tracking-widest">
              EDUCATION
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-paper-50 text-sm block">IILM University, Greater Noida</span>
                  <span className="text-paper-300">B.Tech — Data Science</span>
                </div>
                <span className="text-golden-400 font-medium">2024 – 2028</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="font-semibold text-paper-100 block">PM SHRI Kendriya Vidyalaya</span>
                  <span className="text-paper-300">Class XII — 66%</span>
                </div>
                <span className="text-paper-400">2023 – 2024</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="font-semibold text-paper-100 block">PM SHRI Kendriya Vidyalaya</span>
                  <span className="text-paper-300">Class X — 82%</span>
                </div>
                <span className="text-paper-400">2021 – 2022</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold text-golden-400 uppercase tracking-widest">
              PROJECTS
            </h2>

            <div className="space-y-2.5 text-xs text-paper-300">
              <div>
                <span className="font-bold text-paper-50 text-sm block">Gridixa · SEO · Web Development</span>
                <span>SEO implementation and optimization work for the Gridixa website.</span>
              </div>
              <div>
                <span className="font-bold text-paper-50 text-sm block">AI Olympiad · Web Design · Development · AWS</span>
                <span>Designed the website with a coworker, connected its pages and integrated AWS for content deployment.</span>
              </div>
              <div>
                <span className="font-bold text-paper-50 text-sm block">Tinder Clone · React Native · Development</span>
                <span>Tinder-inspired mobile application developed as a learning project; remained in the development phase.</span>
              </div>
            </div>
          </div>

          {/* Technical Skills & Creative */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-xs border-t border-white/15">
            <div className="space-y-1.5">
              <h3 className="font-semibold text-golden-400 uppercase tracking-wider">TECHNICAL SKILLS</h3>
              <p><strong className="text-paper-100">Languages:</strong> C++, Python</p>
              <p><strong className="text-paper-100">Frontend:</strong> React, Next.js, HTML</p>
              <p><strong className="text-paper-100">Backend:</strong> Node.js, Express.js, MongoDB</p>
              <p><strong className="text-paper-100">Cloud / Tools:</strong> AWS, Git, GitHub, VS Code, Figma</p>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-semibold text-golden-400 uppercase tracking-wider">CREATIVE INTERESTS</h3>
              <p className="text-paper-200">Music Composition · Music Production · Audio Engineering · Photography · Writing · Art</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-white/15 bg-white/5 flex items-center justify-between text-xs font-cozy text-paper-400 shrink-0">
          <span className="truncate pr-2">Official CV Document · Sai Krishna Paila</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-golden-400 hover:underline shrink-0"
          >
            <span>Open PDF in tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
