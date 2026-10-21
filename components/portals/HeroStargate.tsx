'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

const DISCUSSION_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    alt: 'Students collaborating and discussing career roadmap in library',
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Group of young students brainstorming career pathways around laptop',
  }
];

export default function HeroStargate() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Gentle auto-fade between student discussion photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % DISCUSSION_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group w-full">
      {/* Subtle Cosmic Ambient Glow Behind Card */}
      <div className="absolute -inset-1.5 rounded-3xl blur-2xl opacity-40 dark:opacity-60 bg-gradient-to-tr from-amber-500/25 via-cyan-500/20 to-blue-500/25 pointer-events-none -z-10 group-hover:opacity-75 transition-opacity duration-700" />

      {/* Clean Single Image Card Matching User Reference */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300">
        
        {/* Main Image with Subtle Hover Zoom */}
        <div className="relative w-full h-80 sm:h-[400px] lg:h-[440px] overflow-hidden">
          {DISCUSSION_IMAGES.map((img, idx) => (
            <img
              key={img.url}
              src={img.url}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out ${
                idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-7 text-white pointer-events-none z-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1.5 drop-shadow-sm">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Evidence-Based Decision Making</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-slate-100 leading-snug drop-shadow-sm">
            Compare required years of study, real salary bands, and daily responsibilities before picking your college major.
          </p>
        </div>

      </div>
    </div>
  );
}
