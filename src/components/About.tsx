import { MapPin, GraduationCap } from "lucide-react";

export default function About() {
  const educationEntries = [
    {
      institution: "IILM University, Greater Noida",
      degree: "B.Tech — Data Science",
      period: "2024 – 2028",
      percentage: null,
    },
    {
      institution: "PM SHRI Kendriya Vidyalaya",
      degree: "Class XII",
      period: "2023 – 2024",
      percentage: "66%",
    },
    {
      institution: "PM SHRI Kendriya Vidyalaya",
      degree: "Class X",
      period: "2021 – 2022",
      percentage: "82%",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Large About Me Glass Card */}
          <div className="lg:col-span-7 glass-3d-plane p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-cozy font-semibold text-golden-400 uppercase tracking-widest block mb-1">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-paper-50 mb-6">
                A little about me
              </h2>

              <div className="space-y-4 text-base text-paper-200/90 leading-relaxed font-cozy">
                <p>
                  I&apos;m Sai Krishna Paila, a Computer Science student specializing in Data Science at IILM University, Greater Noida.
                </p>
                <p>
                  I enjoy building things for the web and learning by working on real projects. My experience has taken me from content and website management to software development, SEO and web deployment.
                </p>
                <p>
                  Outside of technology, I&apos;m deeply interested in music composition, music production, audio engineering, photography, writing and art. I like combining technical skills with creative work and experimenting with things that don&apos;t always fit into one category.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stacked Glass Cards (Location + Education) */}
          <div className="lg:col-span-5 flex flex-col gap-6 font-cozy">
            
            {/* 1. Location Card */}
            <div className="glass-3d-plane p-5 flex items-center gap-4">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-golden-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs text-paper-400">
                  Location
                </span>
                <span className="text-sm font-semibold text-paper-50">
                  New Delhi, India
                </span>
              </div>
            </div>

            {/* 2. Single Education Card */}
            <div className="glass-3d-plane p-6 md:p-7 flex-1 flex flex-col">
              
              {/* Card Header */}
              <div className="flex items-center gap-2 text-xs font-semibold text-golden-400 uppercase tracking-wider border-b border-white/10 pb-3 mb-4">
                <GraduationCap className="w-4 h-4 text-golden-400" />
                <span>Education</span>
              </div>

              {/* Education Entries List */}
              <div className="flex-1 flex flex-col justify-between">
                {educationEntries.map((edu, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5 pb-4 border-b border-white/10 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-paper-50 leading-snug">
                        {edu.institution}
                      </h3>
                      <span className="text-xs text-paper-400 font-normal shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-paper-300">
                      <span>{edu.degree}</span>
                      {edu.percentage && (
                        <span className="text-golden-400 font-medium">
                          {edu.percentage}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
