import Image from "next/image";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Synth Botanical Greenhouse Photography Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Synth Botanical Greenhouse Golden Hour Installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Dynamic Readability Dark Crimson & Forest Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-botanica-950/85 via-botanica-950/50 to-botanica-950/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-botanica-950/60 via-transparent to-botanica-950/85" />

      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />
    </div>
  );
}
