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

    // Pure Warm Golden/Cream Sunlight Spore Palette with occasional subtle Botanical Sage
    const warmPalette = [
      "rgba(255, 246, 230, ", // Luminous Sunlit Cream (primary sunlit dust)
      "rgba(245, 185, 115, ", // Warm Golden Sunbeam Amber
      "rgba(238, 155, 80, ",  // Radiant Sunset Gold
      "rgba(250, 215, 160, ", // Warm Sunlit Peach Spore
    ];
    const botanicalSageColor = "rgba(120, 180, 138, "; // Occasional Sunlit Sage

    const particleCount = Math.min(Math.floor(width / 24), 42);
    const particles: SporeParticle[] = [];

    // Helper: spawn particles with natural bias towards sunlight entry and outer edges
    const spawnParticle = (p?: Partial<SporeParticle>): SporeParticle => {
      const rand = Math.random();
      let layer: "bg" | "mid" | "fg" = "mid";
      let baseRadius = 1.6;
      let vy = -0.22;
      let maxAlpha = 0.80;

      if (rand < 0.48) {
        // Background layer (48%): tiny, soft depth spores
        layer = "bg";
        baseRadius = Math.random() * 0.5 + 0.7;
        vy = -Math.random() * 0.16 - 0.08;
        maxAlpha = Math.random() * 0.35 + 0.35;
      } else if (rand < 0.85) {
        // Midground layer (37%): bright warm golden spores
        layer = "mid";
        baseRadius = Math.random() * 0.8 + 1.3;
        vy = -Math.random() * 0.24 - 0.14;
        maxAlpha = Math.random() * 0.30 + 0.65;
      } else {
        // Foreground layer (15% - RARE & BRIGHT): illuminated spores with sunbeam halos
        layer = "fg";
        baseRadius = Math.random() * 1.1 + 2.2;
        vy = -Math.random() * 0.30 - 0.18;
        maxAlpha = Math.random() * 0.20 + 0.80;
      }

      // 88% warm gold/cream, 12% subtle sunlit botanical sage
      const color =
        Math.random() > 0.12
          ? warmPalette[Math.floor(Math.random() * warmPalette.length)]
          : botanicalSageColor;

      // Spawn with slight perimeter bias (keeping center sparser)
      let initialX = Math.random() * width;
      let initialY = Math.random() * height;
      if (Math.random() > 0.4) {
        // 60% bias towards right/upper half where golden sunlight enters
        initialX = width * 0.4 + Math.random() * (width * 0.6);
      }

      return {
        x: p?.x ?? initialX,
        y: p?.y ?? initialY,
        baseRadius,
        radius: baseRadius,
        color,
        vx: Math.random() * 0.14 + 0.06,
        vy,
        alpha: Math.random() * maxAlpha * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.012 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        maxAlpha,
        layer,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.016 + 0.008,
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

      // Light source coordinates (upper-right golden-hour entrance)
      const sunTargetX = width * 0.88;
      const sunTargetY = height * 0.10;

      // Center text exclusion zone (Hero content area)
      const centerLeft = width * 0.20;
      const centerRight = width * 0.70;
      const centerTop = height * 0.20;
      const centerBottom = height * 0.75;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Organic horizontal sway (convection air currents)
        p.swayPhase += p.swaySpeed;
        const sway = Math.sin(p.swayPhase) * 0.14;

        // 2. Subtle attraction vector towards the upper-right warm light bloom
        const dxSun = sunTargetX - p.x;
        const dySun = sunTargetY - p.y;
        const distSun = Math.sqrt(dxSun * dxSun + dySun * dySun) || 1;
        const sunPull = p.layer === "fg" ? 0.018 : 0.010;

        p.x += p.vx + sway + (dxSun / distSun) * sunPull;
        p.y += p.vy + (dySun / distSun) * (sunPull * 0.5);
        p.alpha += p.alphaSpeed;

        // 3. Smooth sun-glint breathing cycle
        if (p.alpha >= p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.alphaSpeed = -Math.abs(p.alphaSpeed);
        } else if (p.alpha <= 0.10) {
          p.alpha = 0.10;
          p.alphaSpeed = Math.abs(p.alphaSpeed);
        }

        // 4. Boundary wrap with perimeter respawn
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // 5. Center text sparseness damping (dampen opacity in hero reading zone)
        let effectiveAlpha = p.alpha;
        const inCenterZone =
          p.x >= centerLeft &&
          p.x <= centerRight &&
          p.y >= centerTop &&
          p.y <= centerBottom;

        if (inCenterZone) {
          effectiveAlpha *= 0.55;
        }

        // 6. Multi-Tier Sunlit Spore Rendering with Depth-Specific Halos
        if (p.layer === "fg") {
          // Rare Foreground Spores: Expansive warm ambient sunbeam halo + radiant core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.25).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.9, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.55).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        } else if (p.layer === "mid") {
          // Midground: Soft luminous sunlit aura + crisp core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.38).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        } else {
          // Background: Delicate atmospheric dust motes
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(effectiveAlpha * 0.35).toFixed(3)})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${effectiveAlpha.toFixed(3)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Defer startup slightly so initial critical hero paint happens unimpeded
    startTimeout = setTimeout(() => {
      isRunning = true;
      animationFrameId = requestAnimationFrame(render);
    }, 120);

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
