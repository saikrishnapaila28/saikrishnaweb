import { Music, Camera, PenTool, Palette, Disc, Radio } from "lucide-react";

export default function Creative() {
  const creativeDisciplines = [
    {
      title: "Music Composition",
      icon: Music,
      desc: "Creating ambient melodies, acoustic guitar ideas, and layered harmonic sketches.",
    },
    {
      title: "Music Production",
      icon: Disc,
      desc: "Structuring lo-fi beats, soundscapes, and digital music projects.",
    },
    {
      title: "Audio Engineering",
      icon: Radio,
      desc: "Exploring frequency balances, mixing, spatial reverb, and sound design.",
    },
    {
      title: "Photography",
      icon: Camera,
      desc: "Capturing natural light, urban architecture, plants, and quiet everyday moments.",
    },
    {
      title: "Writing",
      icon: PenTool,
      desc: "Penning personal notes, creative essays, and thoughts on technology and art.",
    },
    {
      title: "Art",
      icon: Palette,
      desc: "Visual sketches, minimal graphics, and organic botanical illustrations.",
    },
  ];

  return (
    <section id="creative" className="py-24 relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="space-y-10">
          
          <div className="space-y-3 font-cozy">
            <span className="text-xs font-semibold text-golden-400 uppercase tracking-widest block">
              Creative Interests
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-paper-50 tracking-wide">
              Creative Practice
            </h2>
            <p className="text-base text-paper-200/90 leading-relaxed max-w-2xl font-cozy">
              Outside of development, I enjoy exploring music, photography, writing and art — especially the intersection between technology and creative expression.
            </p>
          </div>

          {/* Clean Glass Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeDisciplines.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-3d-plane p-6 space-y-3 hover:border-golden-400/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 text-golden-400 rounded-xl border border-white/10">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-base font-semibold text-paper-50 font-cozy">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-paper-300 font-cozy leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
