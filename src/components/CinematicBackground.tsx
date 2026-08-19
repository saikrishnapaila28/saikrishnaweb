import Image from "next/image";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-botanica-950">
      {/* Synth Botanical Greenhouse Photography Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Synth Botanical Greenhouse Golden Hour Installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[40%_50%] sm:object-center select-none contrast-[1.06] brightness-[1.02] saturate-[1.05]"
        />
      </div>

      {/* Atmospheric Golden-Hour Sunlight & Environmental Vignette Scrim */}
      {/* 1. Left-aligned readable scrim: protects hero text while keeping golden sunlight open on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-botanica-950/80 via-botanica-950/35 to-botanica-950/20" />

      {/* 2. Top-down subtle header vignette & bottom smooth fade into section stream */}
      <div className="absolute inset-0 bg-gradient-to-b from-botanica-950/70 via-transparent to-botanica-950/90" />

      {/* 3. Warm golden-hour ambient radial glow tying glass reflections to environmental light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(244,162,97,0.09)_0%,transparent_65%)]" />

      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />
    </div>
  );
}


