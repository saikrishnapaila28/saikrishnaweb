"use client";

import { FileText, Download, Eye } from "lucide-react";

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export default function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  return (
    <section className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="glass-3d-plane p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-cozy">
          
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 glass-pill-apple text-xs font-medium text-golden-400">
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM VITAE</span>
            </div>
            
            <h2 className="text-3xl font-display font-medium text-paper-50">
              Resume
            </h2>

            <p className="text-base text-paper-200/90 leading-relaxed">
              A concise overview of my education, experience, projects and technical skills.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0 font-cozy">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-golden-500 text-botanica-950 font-bold rounded-full text-xs uppercase tracking-wider hover:bg-golden-400 hover:scale-[1.02] transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </button>

            <a
              href="/resume.pdf"
              download="Sai_Krishna_Paila_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 glass-pill-apple text-paper-50 font-semibold rounded-full text-xs uppercase tracking-wider hover:bg-white/15 transition-all"
            >
              <Download className="w-4 h-4 text-golden-400" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
