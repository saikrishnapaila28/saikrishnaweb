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
          unoptimized
          className="object-cover object-[40%_50%] sm:object-center select-none"
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

