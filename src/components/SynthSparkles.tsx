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
  layer: "tiny" | "medium" | "bokeh";
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

    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      // Filter out mobile address-bar scroll fluctuations (height delta < 120px with identical width)
      const isMobileScrollResize =
        currentWidth === lastWidth && Math.abs(currentHeight - lastHeight) < 120;

      if (!isMobileScrollResize) {
        lastWidth = currentWidth;
        lastHeight = currentHeight;
        width = canvas.width = currentWidth;
        height = canvas.height = currentHeight;
      }
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

    // Strict Natural Botanical & Sunbeam Color Palette (Derived directly from greenhouse image)
    const warmPalette = [
      "rgba(244, 162, 97, ",  // Warm Amber
      "rgba(235, 148, 76, ",  // Golden Orange
      "rgba(224, 122, 95, ",  // Soft Copper
      "rgba(255, 246, 230, ", // Subtle Warm Cream
    ];
    const deepGreenColor = "rgba(110, 165, 125, "; // Subtle Botanical Green (8% occurrence)

    // Density: ~36 on desktop, ~20 on mobile
    const particleCount = width < 768 ? 20 : Math.min(Math.floor(width / 26), 38);
    const particles: SporeParticle[] = [];

    const spawnParticle = (p?: Partial<SporeParticle>): SporeParticle => {
      const rand = Math.random();
      let layer: "tiny" | "medium" | "bokeh" = "tiny";
      let baseRadius = 0.9;
      let vy = -0.18;
      let maxAlpha = 0.65;

      if (rand < 0.52) {
        // 52% Tiny dust / pollen motes
        layer = "tiny";
        baseRadius = Math.random() * 0.4 + 0.7;
        vy = -Math.random() * 0.14 - 0.08;
        maxAlpha = Math.random() * 0.30 + 0.40;
      } else if (rand < 0.86) {
        // 34% Medium glowing sunlit spores
        layer = "medium";
        baseRadius = Math.random() * 0.6 + 1.3;
        vy = -Math.random() * 0.22 - 0.12;
        maxAlpha = Math.random() * 0.25 + 0.65;
      } else {
        // 14% Rare soft bokeh particles with luminous halo
        layer = "bokeh";
        baseRadius = Math.random() * 0.9 + 2.3;
        vy = -Math.random() * 0.28 - 0.16;
        maxAlpha = Math.random() * 0.20 + 0.75;
      }

      // 92% warm amber/copper/cream, 8% deep botanical green
      const color =
        Math.random() > 0.08
          ? warmPalette[Math.floor(Math.random() * warmPalette.length)]
          : deepGreenColor;

      // Spawn with bias towards upper-right sunlight area (keeping central reading area uncluttered)
      let initialX = Math.random() * width;
      let initialY = Math.random() * height;
      if (Math.random() > 0.35) {
        initialX = width * 0.35 + Math.random() * (width * 0.65);
      }

      return {
        x: p?.x ?? initialX,
        y: p?.y ?? initialY,
        baseRadius,
        radius: baseRadius,
        color,
        vx: Math.random() * 0.12 + 0.04,
        vy,
        alpha: Math.random() * maxAlpha * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.010 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        maxAlpha,
        layer,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.014 + 0.007,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(spawnParticle());
    }

    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Light source coordinates (upper-right sun entry)
      const sunTargetX = width * 0.85;
      const sunTargetY = height * 0.15;

      // Center text exclusion zone (Hero content area)
      const centerLeft = width * 0.22;
      const centerRight = width * 0.68;
      const centerTop = height * 0.22;
      const centerBottom = height * 0.72;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Organic horizontal sway (convective air flow)
        p.swayPhase += p.swaySpeed;
        const sway = Math.sin(p.swayPhase) * 0.15;

        // 2. Subtle directional pull towards the warm golden light source
        const dxSun = sunTargetX - p.x;
        const dySun = sunTargetY - p.y;
        const distSun = Math.sqrt(dxSun * dxSun + dySun * dySun) || 1;
        const sunPull = p.layer === "bokeh" ? 0.016 : 0.008;

        p.x += p.vx + sway + (dxSun / distSun) * sunPull;
        p.y += p.vy + (dySun / distSun) * (sunPull * 0.4);
        p.alpha += p.alphaSpeed;

        // 3. Smooth sun-glint breathing cycle
        if (p.alpha >= p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.alphaSpeed = -Math.abs(p.alphaSpeed);
        } else if (p.alpha <= 0.12) {
          p.alpha = 0.12;
          p.alphaSpeed = Math.abs(p.alphaSpeed);
        }

        // 4. Boundary wrap with perimeter respawn
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // 5. Center reading zone sparseness damping
        let effectiveAlpha = p.alpha;
        const inCenterZone =
          p.x >= centerLeft &&
          p.x <= centerRight &&
          p.y >= centerTop &&
          p.y <= centerBottom;

        if (inCenterZone) {
          effectiveAlpha *= 0.50;
        }

        // 6. Draw sunlit spore with soft glow halo
        if (p.layer === "bokeh") {
          // Rare Bokeh: Soft wide halo + radiant core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.22).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.50).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        } else if (p.layer === "medium") {
          // Medium Spore: Soft luminous halo + crisp core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.35).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        } else {
          // Tiny Spore: Delicate dust mote
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.30).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Defer startup slightly for instant initial hero load
    startTimeout = setTimeout(() => {
      isRunning = true;
      animationFrameId = requestAnimationFrame(render);
    }, 100);

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
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
