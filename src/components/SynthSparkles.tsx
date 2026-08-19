"use client";

import { useEffect, useRef } from "react";

interface SporeParticle {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
  maxAlpha: number;
  layer: "bg" | "mid" | "fg";
  swayPhase: number;
  swaySpeed: number;
}

export default function SynthSparkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user prefers-reduced-motion setting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let startTimeout: NodeJS.Timeout;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isVisible = true;
    let isRunning = false;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibilityChange = () => {
      const visible = !document.hidden;
      if (visible !== isVisible) {
        isVisible = visible;
        if (isVisible && !isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting && !document.hidden;
      if (visible !== isVisible) {
        isVisible = visible;
        if (isVisible && !isRunning) {
          isRunning = true;
          animationFrameId = requestAnimationFrame(render);
        }
      }
    });

    observer.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize, { passive: true });

    // Curated Botanical Golden-Hour Spore Palette
    const palette = [
      "rgba(244, 162, 97, ", // Primary Warm Golden Amber
      "rgba(253, 246, 232, ", // Luminous Sunlit Cream
      "rgba(235, 148, 76, ",  // Warm Sunbeam Gold
      "rgba(248, 206, 156, ", // Radiant Sunlit Spore
      "rgba(118, 178, 134, ", // Sunlit Botanical Sage / Emerald
    ];

    const particleCount = Math.min(Math.floor(width / 26), 40);
    const particles: SporeParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let layer: "bg" | "mid" | "fg" = "mid";
      let baseRadius = 1.6;
      let vy = -0.22;
      let maxAlpha = 0.75;

      if (rand < 0.35) {
        // Background layer: tiny, softer, slow drift in depth
        layer = "bg";
        baseRadius = Math.random() * 0.6 + 0.6;
        vy = -Math.random() * 0.15 - 0.08;
        maxAlpha = Math.random() * 0.35 + 0.25;
      } else if (rand < 0.78) {
        // Midground layer: rich golden amber spores with gentle glow
        layer = "mid";
        baseRadius = Math.random() * 0.8 + 1.2;
        vy = -Math.random() * 0.22 - 0.14;
        maxAlpha = Math.random() * 0.4 + 0.55;
      } else {
        // Foreground layer: luminous sunlit spores with ambient halo
        layer = "fg";
        baseRadius = Math.random() * 1.0 + 2.0;
        vy = -Math.random() * 0.28 - 0.18;
        maxAlpha = Math.random() * 0.3 + 0.7;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius,
        radius: baseRadius,
        color: palette[Math.floor(Math.random() * palette.length)],
        // Unified environmental drift: rising gently upward with subtle rightward breeze
        vx: Math.random() * 0.12 + 0.06,
        vy,
        alpha: Math.random() * maxAlpha * 0.8 + 0.15,
        alphaSpeed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        maxAlpha,
        layer,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.008,
      });
    }

    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render Spores
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Atmospheric motion: gentle upward convection + subtle horizontal sway
        p.swayPhase += p.swaySpeed;
        const sway = Math.sin(p.swayPhase) * 0.12;

        p.x += p.vx + sway;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        // Smooth breathing / sun-glint pulse
        if (p.alpha >= p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.alphaSpeed = -Math.abs(p.alphaSpeed);
        } else if (p.alpha <= 0.08) {
          p.alpha = 0.08;
          p.alphaSpeed = Math.abs(p.alphaSpeed);
        }

        // Boundary wrap
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Render Spore with Depth-Specific Bloom
        if (p.layer === "fg") {
          // Foreground: expansive warm ambient sunbeam halo + crisp glowing core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.22).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.45).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
          ctx.fill();
        } else if (p.layer === "mid") {
          // Midground: soft ambient glow + warm core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.3).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
          ctx.fill();
        } else {
          // Background: subtle, soft ambient particulate
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
          ctx.fill();
        }

        // Delicate sunbeam filaments between nearby particles (mid & fg only)
        if (p.layer !== "bg") {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.layer === "bg") continue;

            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 6400) { // 80px max connection distance
              const dist = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / 80) * 0.08 * Math.min(p.alpha, p2.alpha);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(244, 162, 97, ${lineAlpha.toFixed(3)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Defer startup slightly so initial critical hero paint / LCP happens unimpeded
    startTimeout = setTimeout(() => {
      isRunning = true;
      animationFrameId = requestAnimationFrame(render);
    }, 150);

    return () => {
      clearTimeout(startTimeout);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
