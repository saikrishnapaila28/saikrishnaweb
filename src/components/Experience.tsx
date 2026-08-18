"use client";

import { ExternalLink, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Gridixa",
      role: "Software Engineer",
      period: "2026 – Present",
      bullets: [
        "Worked on the SEO implementation and optimization of the Gridixa website.",
        "Contributed to the AI Olympiad website with a coworker, including web design and connecting its pages.",
        "Worked with AWS for content deployment and production web workflows.",
      ],
      website: "https://www.gridixa.in",
    },
    {
      company: "TheYouthTalks",
      role: "Content Analyst Intern",
      period: "Oct 2025 – Jan 2026",
      bullets: [
        "Wrote and edited articles for the organization.",
        "Maintained the website and handled content-related updates.",
        "Applied MERN-stack concepts in a practical working environment.",
      ],
      website: null,
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-cozy font-semibold text-golden-400 uppercase tracking-widest block">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-paper-50">
              Experience
            </h2>
            <p className="text-base text-paper-300 font-cozy">
              Practical software engineering and content management experience.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative pl-6 md:pl-10 border-l border-white/15 space-y-8 pt-2">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-4 w-4 h-4 rounded-full bg-botanica-950 border-2 border-golden-500 group-hover:scale-125 transition-transform" />

                <div className="glass-3d-plane p-6 md:p-8 space-y-4 hover:border-golden-400/50">
                  {/* Top Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 font-cozy">
                    <div>
                      <span className="font-display font-semibold text-xl text-paper-50 tracking-wide">
                        {exp.company}
                      </span>
                      <h3 className="text-base font-medium text-golden-300 mt-0.5">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 glass-pill-apple text-xs font-cozy text-paper-200">
                      <Calendar className="w-3.5 h-3.5 text-golden-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-base text-paper-200/90 font-cozy list-disc list-inside">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Website Link */}
                  {exp.website && (
                    <div className="pt-2">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-golden-500 text-botanica-950 font-cozy font-bold text-xs rounded-full hover:bg-golden-400 hover:scale-[1.02] transition-all"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
