import { Code2, Layout, Server, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C++", "Python"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React", "Next.js", "HTML"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Cloud & Tools",
      icon: Wrench,
      skills: ["AWS", "Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-cozy font-semibold text-golden-400 uppercase tracking-widest block">
              Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-paper-50">
              Technical Skills
            </h2>
            <p className="text-base text-paper-300 font-cozy">
              Core languages, web frameworks, databases, cloud, and development tools.
            </p>
          </div>

          {/* Clean Glass Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="glass-3d-plane p-6 space-y-4 hover:border-golden-400/50"
                >
                  <div className="flex items-center gap-2.5 border-b border-white/10 pb-3 font-cozy">
                    <IconComponent className="w-4 h-4 text-golden-400" />
                    <span className="text-sm font-semibold text-paper-50">
                      {cat.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="glass-pill-apple px-3.5 py-1.5 text-xs text-paper-200 font-medium font-cozy"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
