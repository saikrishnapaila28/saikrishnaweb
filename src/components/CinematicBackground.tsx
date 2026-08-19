"use client";

import React, { useEffect, useRef } from "react";

export default function CinematicBackground() {
  const lightLayerRef = useRef<HTMLDivElement | null>(null);
  const foliageDeepRef = useRef<SVGGElement | null>(null);
  const foliageMidRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    // Only enable subtle mouse parallax on desktop devices with fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) {
      return;
    }

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isRunning = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized offset from center: -0.5 to +0.5
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(animateParallax);
      }
    };

    const animateParallax = () => {
      // Smooth lerp damping
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // Layer 1 (Sunlight blooms): Deepest plane, shifts 3–4px opposite to cursor
      if (lightLayerRef.current) {
        const xLight = (currentX * -6).toFixed(2);
        const yLight = (currentY * -6).toFixed(2);
        lightLayerRef.current.style.transform = `translate3d(${xLight}px, ${yLight}px, 0)`;
      }

      // Layer 2 (Deep foliage): Shifts ~6px in parallax depth
      if (foliageDeepRef.current) {
        const xDeep = (currentX * 7).toFixed(2);
        const yDeep = (currentY * 7).toFixed(2);
        foliageDeepRef.current.style.transform = `translate3d(${xDeep}px, ${yDeep}px, 0)`;
      }

      // Layer 3 (Midground fronds & mullions): Shifts ~9px in parallax depth
      if (foliageMidRef.current) {
        const xMid = (currentX * 10).toFixed(2);
        const yMid = (currentY * 10).toFixed(2);
        foliageMidRef.current.style.transform = `translate3d(${xMid}px, ${yMid}px, 0)`;
      }

      // Continue animating until motion settles
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        animationFrameId = requestAnimationFrame(animateParallax);
      } else {
        isRunning = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-botanica-950 select-none"
      style={{
        transform: "translate3d(0, 0, 0)",
        WebkitTransform: "translate3d(0, 0, 0)",
      }}
    >
      {/* LAYER 1: Deep Botanical Base Gradient (Rich dark conservatory night with deep emerald undertones) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_12%,#102216_0%,#08130C_45%,#040905_75%,#020403_100%)]" />

      {/* LAYER 2: Cinematic Golden-Hour Sunlight Bloom & Ambient Illumination (Parallax Layer 1) */}
      <div
        ref={lightLayerRef}
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none transition-transform duration-75 ease-out"
        style={{ willChange: "transform" }}
      >
        {/* 2A: Primary Upper-Right Golden-Hour Sun Entry (Expansive natural sunbeam bloom) */}
        <div className="absolute -top-[15%] -right-[10%] w-[90vw] h-[85vw] max-w-[1000px] max-h-[950px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,190,125,0.20)_0%,rgba(235,150,78,0.11)_30%,rgba(224,115,80,0.04)_58%,transparent_78%)] blur-[110px]" />
        
        {/* 2B: Angled Volumetric Sunlight Shaft (Simulating sunlight streaming through conservatory roof panes) */}
        <div className="absolute -top-[12%] right-[12%] w-[45vw] h-[115vh] max-w-[650px] bg-gradient-to-b from-golden-400/12 via-golden-500/03 to-transparent blur-[85px] -rotate-18 transform-gpu origin-top-right" />

        {/* 2C: Secondary Upper-Left Ambient Fill (Gentle natural diffuse sky light) */}
        <div className="absolute -top-[10%] -left-[5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(248,220,180,0.06)_0%,rgba(244,162,97,0.02)_45%,transparent_70%)] blur-[90px]" />

        {/* 2D: Midground Ambient Sunlight Bounce (Warm floor & plant reflection) */}
        <div className="absolute top-[35%] right-[2%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(247,195,140,0.10)_0%,rgba(244,162,97,0.03)_50%,transparent_75%)] blur-[80px]" />
      </div>

      {/* LAYER 3: Distant Botanical Silhouettes (Parallax Layers 2 & 3) */}
      <svg
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          {/* Optical Defocus Blurs for deep distant foliage */}
          <filter id="foliage-diffuse-deep" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <filter id="foliage-diffuse-mid" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          
          {/* Back-lit Golden Hour Gradient on outer sun-facing foliage */}
          <linearGradient id="sunlit-foliage-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4A261" stopOpacity="0.14" />
            <stop offset="40%" stopColor="#0D2013" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#030804" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="botanical-shadow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A1C10" stopOpacity="0.60" />
            <stop offset="100%" stopColor="#020603" stopOpacity="0.80" />
          </linearGradient>
        </defs>

        {/* 3A: Deep Parallax Foliage Plane (Top-Left & Bottom Corners, ~6px shift) */}
        <g
          ref={foliageDeepRef}
          style={{ willChange: "transform" }}
        >
          {/* Top-Left Outer Canopy Silhouette */}
          <g filter="url(#foliage-diffuse-deep)" opacity="0.36">
            <path
              d="M-80,-60 C30,40 100,90 220,60 C160,130 60,150 -60,110 Z"
              fill="url(#botanical-shadow-gradient)"
            />
            <path
              d="M-40,-100 C60,10 160,30 260,-10 C190,80 90,100 -20,60 Z"
              fill="#061209"
            />
            <path
              d="M60,-80 C140,20 220,40 300,10 C240,90 160,100 80,50 Z"
              fill="#040905"
            />
          </g>

          {/* Bottom-Left Outer Corner Foliage Base */}
          <g filter="url(#foliage-diffuse-deep)" opacity="0.40">
            <path
              d="M-100,680 C40,650 150,710 220,840 C110,890 0,860 -80,950 Z"
              fill="url(#botanical-shadow-gradient)"
            />
            <path
              d="M-60,760 C60,720 170,770 240,900 C130,960 10,930 -60,990 Z"
              fill="#050E07"
            />
          </g>

          {/* Bottom-Right Outer Corner Density */}
          <g filter="url(#foliage-diffuse-deep)" opacity="0.32">
            <path
              d="M1540,700 C1410,670 1330,750 1280,890 C1390,940 1490,910 1560,960 Z"
              fill="#040905"
            />
          </g>
        </g>

        {/* 3B: Midground Parallax Foliage Plane (Sunlit Fronds & Mullions, ~9px shift) */}
        <g
          ref={foliageMidRef}
          style={{ willChange: "transform" }}
        >
          {/* Top-Right Outer Canopy Silhouette (Naturally back-lit by the incoming sunbeams) */}
          <g filter="url(#foliage-diffuse-mid)" opacity="0.38">
            <path
              d="M1520,60 C1390,140 1310,230 1340,360 C1420,280 1480,200 1540,140 Z"
              fill="url(#sunlit-foliage-edge)"
            />
            <path
              d="M1500,180 C1380,250 1320,350 1350,480 C1420,400 1470,320 1530,260 Z"
              fill="#061209"
            />
          </g>

          {/* Subtle Conservatory Glass Mullions */}
          <g opacity="0.08">
            <line x1="280" y1="0" x2="240" y2="900" stroke="#F7F4EE" strokeWidth="1" />
            <line x1="880" y1="0" x2="840" y2="900" stroke="#F4A261" strokeWidth="1" />
            <line x1="1220" y1="0" x2="1180" y2="900" stroke="#F4A261" strokeWidth="1" />
          </g>
        </g>
      </svg>

      {/* LAYER 4: Atmospheric Depth & Scrim (Protects center hero text contrast while leaving sunlight luminous) */}
      {/* 4A: Left-side hero readability scrim: deep contrast behind the text cards */}
      <div className="absolute inset-0 bg-gradient-to-r from-botanica-950/72 via-botanica-950/25 to-transparent" />

      {/* 4B: Top and bottom vignette fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-botanica-950/50 via-transparent to-botanica-950/80" />

      {/* 4C: Fine atmospheric film grain */}
      <div className="film-grain" />
    </div>
  );
}
