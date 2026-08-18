"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
  maxAlpha: number;
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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isVisible = true;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting && !document.hidden;
    });

    observer.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);

    // Warm Synth-Botanical Particle Palette
    const colors = [
      "rgba(244, 162, 97, ", // Gold Amber
      "rgba(224, 90, 71, ",   // Crimson Sunset
      "rgba(200, 109, 116, ", // Dusty Rose
      "rgba(247, 184, 130, ", // Soft Orange
      "rgba(85, 148, 106, ",  // Soft Botanical Green
      "rgba(168, 136, 181, ", // Lavender Synth
    ];

    const particleCount = Math.min(Math.floor(width / 24), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.45 - 0.1, // Slow upward drift like spores
        alpha: Math.random(),
        alphaSpeed: Math.random() * 0.015 + 0.005,
        maxAlpha: Math.random() * 0.7 + 0.2,
      });
    }

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Render Particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Update positions
          p.x += p.vx;
          p.y += p.vy;
          p.alpha += p.alphaSpeed;

          // Pulse / Synth breathing effect
          if (p.alpha >= p.maxAlpha || p.alpha <= 0.05) {
            p.alphaSpeed = -p.alphaSpeed;
          }

          // Wrap around boundaries
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Draw particle glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.alpha * 0.35).toFixed(2)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
          ctx.fill();

          // Connect nearby particles with subtle glowing synth lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const lineAlpha = (1 - dist / 100) * 0.12 * p.alpha;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(244, 162, 97, ${lineAlpha.toFixed(2)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
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
