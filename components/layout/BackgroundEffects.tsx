'use client';

import React from 'react';

// Static deterministic star positions to prevent hydration mismatch
const STATIC_STARS = [
  { top: '8%', left: '12%', size: 'w-1 h-1', delay: '0s', opacity: 'opacity-70' },
  { top: '15%', left: '35%', size: 'w-1.5 h-1.5', delay: '1.2s', opacity: 'opacity-90' },
  { top: '22%', left: '78%', size: 'w-1 h-1', delay: '2.5s', opacity: 'opacity-60' },
  { top: '38%', left: '18%', size: 'w-2 h-2', delay: '0.8s', opacity: 'opacity-80' },
  { top: '45%', left: '88%', size: 'w-1 h-1', delay: '3.1s', opacity: 'opacity-50' },
  { top: '55%', left: '42%', size: 'w-1.5 h-1.5', delay: '1.7s', opacity: 'opacity-85' },
  { top: '68%', left: '8%', size: 'w-1 h-1', delay: '2.1s', opacity: 'opacity-65' },
  { top: '75%', left: '72%', size: 'w-2 h-2', delay: '0.4s', opacity: 'opacity-90' },
  { top: '82%', left: '26%', size: 'w-1 h-1', delay: '3.6s', opacity: 'opacity-60' },
  { top: '92%', left: '60%', size: 'w-1.5 h-1.5', delay: '1.9s', opacity: 'opacity-75' },
  { top: '12%', left: '92%', size: 'w-1 h-1', delay: '2.8s', opacity: 'opacity-55' },
  { top: '62%', left: '94%', size: 'w-1.5 h-1.5', delay: '1.1s', opacity: 'opacity-70' },
  { top: '28%', left: '55%', size: 'w-1 h-1', delay: '3.3s', opacity: 'opacity-65' },
];

export default function BackgroundEffects() {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* 1. Base Ambient Glows (Nebulae) */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-brand-500/10 dark:bg-brand-600/20 blur-[130px] animate-float-slow" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-amber-400/10 dark:bg-amber-500/15 blur-[140px] animate-pulse-subtle" />
      <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-sky-500/10 dark:bg-indigo-600/20 blur-[150px] animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* 2. Micro Dot Matrix Pattern */}
      <div className="absolute inset-0 cosmic-grid-light dark:cosmic-grid-dark opacity-60 dark:opacity-75" />

      {/* 3. Celestial Orbital Rings System (fits CareerOrbit theme) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] opacity-20 dark:opacity-35">
        
        {/* Outer Orbit Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-400 dark:border-brand-400/40 animate-orbit-slow">
          {/* Orbiting celestial node */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]" />
        </div>

        {/* Middle Orbit Ring */}
        <div className="absolute inset-16 rounded-full border border-slate-300/80 dark:border-sky-400/30 animate-orbit-reverse">
          {/* Orbiting celestial node */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-400 dark:bg-brand-300 shadow-[0_0_10px_#38bdf8]" />
        </div>

        {/* Inner Subtle Ring */}
        <div className="absolute inset-36 rounded-full border border-dotted border-slate-300/60 dark:border-indigo-400/25 animate-orbit-slow">
          <div className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
        </div>

      </div>

      {/* 4. Second ambient orbit system in bottom-right corner */}
      <div className="absolute -bottom-[250px] -right-[150px] w-[650px] h-[650px] opacity-15 dark:opacity-25">
        <div className="w-full h-full rounded-full border border-dashed border-brand-400 dark:border-brand-300/40 animate-orbit-slow" />
        <div className="absolute inset-20 rounded-full border border-slate-300 dark:border-amber-400/30 animate-orbit-reverse">
          <div className="absolute top-0 right-1/4 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]" />
        </div>
      </div>

      {/* 5. Twinkling Stardust (Dark mode enhanced, subtle in Light mode) */}
      <div className="absolute inset-0">
        {STATIC_STARS.map((star, idx) => (
          <div
            key={idx}
            style={{ 
              top: star.top, 
              left: star.left,
              animationDelay: star.delay
            }}
            className={`absolute ${star.size} rounded-full bg-slate-400 dark:bg-white ${star.opacity} dark:shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-pulse-subtle`}
          />
        ))}
      </div>

      {/* 6. Soft radial gradient vignette at edges for smooth reading focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/40 via-transparent to-slate-50/20 dark:from-[#090E1A]/60 dark:via-transparent dark:to-[#090E1A]/30" />
    </div>
  );
}
