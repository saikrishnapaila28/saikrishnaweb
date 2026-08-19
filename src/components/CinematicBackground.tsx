import React from "react";
import Image from "next/image";

export default function CinematicBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-botanica-950 select-none"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
        contain: "strict",
      }}
    >
      {/* 1. Cinematic Greenhouse Background Image (Natural photographic appearance, preserved 16:9 aspect ratio) */}
      <Image
        src="/hero-bg.jpg"
        alt="Cinematic greenhouse atrium background"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={100}
        className="object-cover object-center md:object-[50%_35%] select-none pointer-events-none"
        style={{
          filter: "contrast(1.02) saturate(1.03)",
        }}
      />

      {/* 2. Soft Amber Sunlight Atmospheric Bloom (Enhances existing golden-hour sunlight naturally) */}
      <div className="absolute -top-[10%] -right-[5%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,162,97,0.16)_0%,rgba(235,148,76,0.08)_35%,rgba(224,122,95,0.02)_60%,transparent_75%)] blur-[90px] pointer-events-none transform-gpu" />

      {/* 3. Subtle Warm Dark Atmospheric Gradient (Protects content contrast without dulling sunlight) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_40%,rgba(16,14,12,0.36)_0%,rgba(7,14,9,0.18)_55%,transparent_85%)]" />

      {/* 4. Top & Bottom Seamless Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-botanica-950/25 via-transparent to-botanica-950/75" />

      {/* 5. Ultra-Subtle 35mm Analog Film Grain Texture */}
      <div className="film-grain" />
    </div>
  );
}
