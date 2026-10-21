'use client';

import React, { useEffect, useRef, useState } from 'react';

interface OrbitConfig {
  radiusX: number;
  radiusY: number;
  rotation: number; // inclination angle in radians
  speed: number;    // angular velocity
  trailLength: number;
  colorDark: string;
  colorLight: string;
  planetColorDark: string;
  planetColorLight: string;
  planetGlowDark: string;
  planetGlowLight: string;
  planetSize: number;
  name: string;
  currentAngle: number;
  hasMoon?: boolean;
  moonAngle?: number;
  moonDistance?: number;
  moonSpeed?: number;
  moonSize?: number;
  moonColorDark?: string;
  moonColorLight?: string;
  dashed?: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

interface GravityRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

interface Stardust {
  x: number;
  y: number;
  baseSize: number;
  alpha: number;
  speed: number;
  phase: number;
  driftX: number;
  driftY: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // 1. Detect initial theme
    const checkDark = () => document.documentElement.classList.contains('dark');
    setIsDark(checkDark());

    // 2. Observer for theme class changes on <html>
    const observer = new MutationObserver(() => {
      setIsDark(checkDark());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleThemeEvent = () => setIsDark(checkDark());
    window.addEventListener('theme-change', handleThemeEvent);

    return () => {
      observer.disconnect();
      window.removeEventListener('theme-change', handleThemeEvent);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse parallax tracking with smooth lerp
    let mouse = {
      x: width * 0.5,
      y: height * 0.38,
      targetX: width * 0.5,
      targetY: height * 0.38,
      isHovering: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovering = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Interactive gravity ripple when clicking/tapping
    const ripples: GravityRipple[] = [];
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 0,
        maxRadius: Math.min(width, height) * 0.45,
        opacity: 0.7,
      });
    };

    window.addEventListener('mousedown', handlePointerDown, { passive: true });

    // Handle Resize with Device Pixel Ratio for ultra-crisp rendering
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // ORBIT PATH SYSTEM CONFIGURATION
    // -------------------------------------------------------------
    // Scales orbits proportionally for mobile vs desktop
    const getScale = () => Math.min(Math.max(width / 1440, 0.65), 1.2);

    const createOrbits = (): OrbitConfig[] => {
      const scale = getScale();
      return [
        // Orbit 1: Inner Tech & Innovation Ring (Fast, vivid Cyan)
        {
          radiusX: 140 * scale,
          radiusY: 75 * scale,
          rotation: -0.35,
          speed: 0.016,
          trailLength: 0.65,
          colorDark: 'rgba(56, 189, 248, 0.35)',
          colorLight: 'rgba(14, 165, 233, 0.28)',
          planetColorDark: '#38bdf8',
          planetColorLight: '#0284c7',
          planetGlowDark: 'rgba(56, 189, 248, 0.9)',
          planetGlowLight: 'rgba(14, 165, 233, 0.6)',
          planetSize: 4.5,
          name: 'Tech',
          currentAngle: 0.5,
          hasMoon: true,
          moonAngle: 0,
          moonDistance: 13 * scale,
          moonSpeed: 0.07,
          moonSize: 1.8,
          moonColorDark: '#a5f3fc',
          moonColorLight: '#0ea5e9',
        },
        // Orbit 2: Science & Medical Orbit (Dashed mint & emerald)
        {
          radiusX: 250 * scale,
          radiusY: 130 * scale,
          rotation: 0.52,
          speed: -0.009,
          trailLength: 0.55,
          colorDark: 'rgba(52, 211, 153, 0.3)',
          colorLight: 'rgba(16, 185, 129, 0.25)',
          planetColorDark: '#34d399',
          planetColorLight: '#059669',
          planetGlowDark: 'rgba(52, 211, 153, 0.9)',
          planetGlowLight: 'rgba(16, 185, 129, 0.6)',
          planetSize: 5.5,
          name: 'Sciences',
          currentAngle: 2.1,
          dashed: true,
        },
        // Orbit 3: Leadership, Commerce & Strategy (Golden Amber ring)
        {
          radiusX: 380 * scale,
          radiusY: 190 * scale,
          rotation: -0.2,
          speed: 0.006,
          trailLength: 0.45,
          colorDark: 'rgba(251, 191, 36, 0.32)',
          colorLight: 'rgba(217, 119, 6, 0.28)',
          planetColorDark: '#fbbf24',
          planetColorLight: '#d97706',
          planetGlowDark: 'rgba(251, 191, 36, 0.9)',
          planetGlowLight: 'rgba(217, 119, 6, 0.6)',
          planetSize: 6,
          name: 'Commerce',
          currentAngle: 4.2,
          hasMoon: true,
          moonAngle: 1.5,
          moonDistance: 17 * scale,
          moonSpeed: -0.05,
          moonSize: 2.2,
          moonColorDark: '#fef08a',
          moonColorLight: '#b45309',
        },
        // Orbit 4: Creative Arts & Design (Electric Violet / Purple)
        {
          radiusX: 520 * scale,
          radiusY: 260 * scale,
          rotation: 0.78,
          speed: -0.0045,
          trailLength: 0.4,
          colorDark: 'rgba(168, 85, 247, 0.28)',
          colorLight: 'rgba(147, 51, 234, 0.22)',
          planetColorDark: '#c084fc',
          planetColorLight: '#9333ea',
          planetGlowDark: 'rgba(192, 132, 252, 0.85)',
          planetGlowLight: 'rgba(147, 51, 234, 0.55)',
          planetSize: 5,
          name: 'Design',
          currentAngle: 1.2,
        },
        // Orbit 5: Deep Horizon (Law & Global Public Service - Rose / Coral)
        {
          radiusX: 680 * scale,
          radiusY: 340 * scale,
          rotation: -0.58,
          speed: 0.003,
          trailLength: 0.35,
          colorDark: 'rgba(244, 63, 94, 0.24)',
          colorLight: 'rgba(225, 29, 72, 0.2)',
          planetColorDark: '#fb7185',
          planetColorLight: '#e11d48',
          planetGlowDark: 'rgba(251, 113, 133, 0.85)',
          planetGlowLight: 'rgba(225, 29, 72, 0.5)',
          planetSize: 5.5,
          name: 'Horizon',
          currentAngle: 3.5,
          dashed: true,
        },
      ];
    };

    let orbits = createOrbits();

    // -------------------------------------------------------------
    // STARDUST PARTICLES SYSTEM
    // -------------------------------------------------------------
    const starCount = Math.floor(Math.min(width, 1600) / 22);
    const stardust: Stardust[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseSize: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.03 + 0.015,
      phase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.15,
      driftY: (Math.random() - 0.5) * 0.15,
    }));

    // -------------------------------------------------------------
    // SHOOTING STARS / METEORS
    // -------------------------------------------------------------
    const shootingStars: ShootingStar[] = [];
    let nextMeteorTime = Date.now() + 2500;

    const spawnShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35; // diagonal flight
      const speed = Math.random() * 7 + 10;
      const startX = Math.random() * width * 0.9;
      const startY = Math.random() * height * 0.4;
      const colors = ['#38bdf8', '#fbbf24', '#ffffff', '#a855f7'];

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 90 + 70,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 30 + 35,
        color: colors[Math.floor(Math.random() * colors.length)],
      });

      // Schedule next meteor between 3 to 7 seconds
      nextMeteorTime = Date.now() + Math.random() * 4000 + 3000;
    };

    // -------------------------------------------------------------
    // MAIN ANIMATION LOOP
    // -------------------------------------------------------------
    let lastTime = performance.now();
    let stellarCorePulse = 0;

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const dark = document.documentElement.classList.contains('dark');

      // Clear canvas with smooth alpha
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Parallax center coordinates: centered organically in upper hero viewport
      const baseCenterX = width * 0.52;
      const baseCenterY = Math.min(height * 0.38, 420);
      const parallaxOffsetX = (mouse.x - width / 2) * 0.035;
      const parallaxOffsetY = (mouse.y - height / 2) * 0.035;

      const centerX = baseCenterX + parallaxOffsetX;
      const centerY = baseCenterY + parallaxOffsetY;

      // 1. DRAW STARDUST
      for (let i = 0; i < stardust.length; i++) {
        const star = stardust[i];
        star.phase += star.speed;
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around screen edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const pulseOpacity = (Math.sin(star.phase) * 0.35 + 0.65) * star.alpha;
        const currentSize = star.baseSize * (0.85 + Math.sin(star.phase) * 0.25);

        ctx.fillStyle = dark
          ? `rgba(224, 242, 254, ${pulseOpacity * 0.85})`
          : `rgba(71, 85, 105, ${pulseOpacity * 0.4})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross on larger stars
        if (star.baseSize > 1.6 && dark) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - currentSize * 2.2, star.y);
          ctx.lineTo(star.x + currentSize * 2.2, star.y);
          ctx.moveTo(star.x, star.y - currentSize * 2.2);
          ctx.lineTo(star.x, star.y + currentSize * 2.2);
          ctx.stroke();
        }
      }

      // 2. DRAW GRAVITY RIPPLES (On-click interactive shockwaves)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += 4.5;
        ripple.opacity *= 0.96;

        if (ripple.opacity < 0.02 || ripple.radius > ripple.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = dark
          ? `rgba(56, 189, 248, ${ripple.opacity * 0.6})`
          : `rgba(14, 165, 233, ${ripple.opacity * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 3. DRAW CENTRAL STELLAR CORE / CAREER PULSAR
      stellarCorePulse += 0.025;
      const coreBreath = Math.sin(stellarCorePulse) * 0.15 + 1;

      ctx.save();
      // Outer radiant flare
      const outerFlare = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 140 * coreBreath
      );
      if (dark) {
        outerFlare.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
        outerFlare.addColorStop(0.35, 'rgba(168, 85, 247, 0.12)');
        outerFlare.addColorStop(0.7, 'rgba(251, 191, 36, 0.04)');
        outerFlare.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        outerFlare.addColorStop(0, 'rgba(14, 165, 233, 0.16)');
        outerFlare.addColorStop(0.45, 'rgba(99, 102, 241, 0.08)');
        outerFlare.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = outerFlare;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140 * coreBreath, 0, Math.PI * 2);
      ctx.fill();

      // Middle solar aura
      const innerAura = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 32 * coreBreath
      );
      if (dark) {
        innerAura.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        innerAura.addColorStop(0.25, 'rgba(251, 191, 36, 0.9)');
        innerAura.addColorStop(0.65, 'rgba(56, 189, 248, 0.6)');
        innerAura.addColorStop(1, 'rgba(56, 189, 248, 0)');
      } else {
        innerAura.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        innerAura.addColorStop(0.3, 'rgba(245, 158, 11, 0.8)');
        innerAura.addColorStop(0.7, 'rgba(14, 165, 233, 0.5)');
        innerAura.addColorStop(1, 'rgba(14, 165, 233, 0)');
      }
      ctx.fillStyle = innerAura;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 32 * coreBreath, 0, Math.PI * 2);
      ctx.fill();

      // Glowing central nucleus
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5 * coreBreath, 0, Math.PI * 2);
      ctx.fill();

      // Delicate dashed core ring
      ctx.strokeStyle = dark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(14, 165, 233, 0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 42 * coreBreath, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 4. DRAW ORBIT TRACKS & PLANETARY BODIES
      for (let i = 0; i < orbits.length; i++) {
        const orbit = orbits[i];

        // Increment orbit angle
        orbit.currentAngle += orbit.speed;

        // Dynamic 3D tilt transformation parameters
        const cosR = Math.cos(orbit.rotation);
        const sinR = Math.sin(orbit.rotation);

        // A. Draw full orbital trajectory ellipse
        ctx.save();
        ctx.strokeStyle = dark ? orbit.colorDark : orbit.colorLight;
        ctx.lineWidth = 1.25;

        if (orbit.dashed) {
          ctx.setLineDash([4, 7]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.beginPath();
        // Use native canvas ellipse API
        ctx.ellipse(
          centerX,
          centerY,
          orbit.radiusX,
          orbit.radiusY,
          orbit.rotation,
          0,
          Math.PI * 2
        );
        ctx.stroke();
        ctx.restore();

        // B. Calculate current planet coordinates
        const px = orbit.radiusX * Math.cos(orbit.currentAngle);
        const py = orbit.radiusY * Math.sin(orbit.currentAngle);
        const planetX = centerX + (px * cosR - py * sinR);
        const planetY = centerY + (px * sinR + py * cosR);

        // C. Draw glowing orbital motion trail behind the planet
        const trailSteps = 24;
        const trailSpan = orbit.trailLength;
        const trailDir = orbit.speed > 0 ? -1 : 1;

        ctx.save();
        for (let s = 1; s <= trailSteps; s++) {
          const ratio = 1 - s / trailSteps;
          const trailAngle = orbit.currentAngle + trailDir * (s / trailSteps) * trailSpan;
          const tx = orbit.radiusX * Math.cos(trailAngle);
          const ty = orbit.radiusY * Math.sin(trailAngle);
          const pointX = centerX + (tx * cosR - ty * sinR);
          const pointY = centerY + (tx * sinR + ty * cosR);

          const trailAlpha = ratio * (dark ? 0.45 : 0.28);
          ctx.fillStyle = dark ? orbit.planetColorDark : orbit.planetColorLight;
          ctx.beginPath();
          ctx.arc(pointX, pointY, (orbit.planetSize * 0.7) * ratio, 0, Math.PI * 2);
          ctx.globalAlpha = trailAlpha;
          ctx.fill();
        }
        ctx.restore();

        // D. Draw Planet Glowing Atmospheric Halo
        ctx.save();
        const planetHaloRadius = orbit.planetSize * 3.8;
        const planetHalo = ctx.createRadialGradient(
          planetX, planetY, 0,
          planetX, planetY, planetHaloRadius
        );
        const glowColor = dark ? orbit.planetGlowDark : orbit.planetGlowLight;
        planetHalo.addColorStop(0, glowColor);
        planetHalo.addColorStop(0.45, glowColor.replace('0.9', '0.4').replace('0.85', '0.35'));
        planetHalo.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = planetHalo;
        ctx.beginPath();
        ctx.arc(planetX, planetY, planetHaloRadius, 0, Math.PI * 2);
        ctx.fill();

        // E. Draw Planet Solid Core
        const planetCoreGrad = ctx.createRadialGradient(
          planetX - orbit.planetSize * 0.35,
          planetY - orbit.planetSize * 0.35,
          0,
          planetX,
          planetY,
          orbit.planetSize
        );
        planetCoreGrad.addColorStop(0, '#FFFFFF');
        planetCoreGrad.addColorStop(0.35, dark ? orbit.planetColorDark : orbit.planetColorLight);
        planetCoreGrad.addColorStop(1, dark ? '#0F172A' : '#1E293B');

        ctx.fillStyle = planetCoreGrad;
        ctx.beginPath();
        ctx.arc(planetX, planetY, orbit.planetSize, 0, Math.PI * 2);
        ctx.fill();

        // Specular gleam
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(
          planetX - orbit.planetSize * 0.35,
          planetY - orbit.planetSize * 0.35,
          orbit.planetSize * 0.28,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();

        // F. Draw Orbiting Moon / Satellite (if configured)
        if (orbit.hasMoon && orbit.moonDistance && orbit.moonSpeed) {
          orbit.moonAngle = (orbit.moonAngle || 0) + orbit.moonSpeed;
          const moonX = planetX + Math.cos(orbit.moonAngle) * orbit.moonDistance;
          const moonY = planetY + Math.sin(orbit.moonAngle) * orbit.moonDistance * 0.6;

          ctx.save();
          // Moon mini-orbit ring
          ctx.strokeStyle = dark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.12)';
          ctx.lineWidth = 0.75;
          ctx.setLineDash([2, 3]);
          ctx.beginPath();
          ctx.ellipse(planetX, planetY, orbit.moonDistance, orbit.moonDistance * 0.6, 0, 0, Math.PI * 2);
          ctx.stroke();

          // Moon body
          const moonColor = dark ? (orbit.moonColorDark || '#ffffff') : (orbit.moonColorLight || '#0284c7');
          ctx.fillStyle = moonColor;
          ctx.shadowColor = moonColor;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(moonX, moonY, orbit.moonSize || 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // G. Elegant Category Monogram Badge floating subtly near planet
        if (width > 768) {
          ctx.save();
          ctx.font = '600 9px Inter, system-ui, sans-serif';
          ctx.fillStyle = dark ? 'rgba(224, 242, 254, 0.65)' : 'rgba(71, 85, 105, 0.7)';
          ctx.fillText(orbit.name, planetX + orbit.planetSize + 6, planetY + 3);
          ctx.restore();
        }
      }

      // 5. DRAW SHOOTING STARS / METEORS
      if (Date.now() > nextMeteorTime) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.life++;
        star.x += star.vx;
        star.y += star.vy;

        const lifeRatio = star.life / star.maxLife;
        star.opacity = Math.sin(lifeRatio * Math.PI);

        if (star.life >= star.maxLife || star.x > width || star.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw meteor trail
        const trailStartX = star.x - (star.vx / 10) * star.length;
        const trailStartY = star.y - (star.vy / 10) * star.length;

        ctx.save();
        const meteorGrad = ctx.createLinearGradient(trailStartX, trailStartY, star.x, star.y);
        meteorGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        meteorGrad.addColorStop(0.7, star.color);
        meteorGrad.addColorStop(1, '#FFFFFF');

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(trailStartX, trailStartY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Blazing head
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Deep Celestial Atmospheric Nebulae (Underneath Canvas) */}
      <div className="absolute -top-[10%] left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-500/15 dark:bg-brand-500/25 blur-[140px] animate-float-slow" />
      <div className="absolute top-[28%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-purple-500/10 dark:bg-purple-600/20 blur-[150px] animate-pulse-subtle" />
      <div className="absolute -bottom-[15%] left-[25%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-amber-400/10 dark:bg-amber-500/15 blur-[160px] animate-float-slow" style={{ animationDelay: '4s' }} />

      {/* 2. Micro Coordinate Grid Pattern */}
      <div className="absolute inset-0 cosmic-grid-light dark:cosmic-grid-dark opacity-40 dark:opacity-60" />

      {/* 3. Real-time Interactive 3D Canvas Orbital Physics Engine */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* 4. Soft Center Radial Vignette to maintain immaculate readability of text content */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 38%, transparent 20%, rgba(9, 14, 26, 0.45) 65%, rgba(9, 14, 26, 0.85) 100%)'
            : 'radial-gradient(circle at 50% 38%, transparent 25%, rgba(248, 250, 252, 0.45) 65%, rgba(248, 250, 252, 0.88) 100%)'
        }}
      />
    </div>
  );
}
