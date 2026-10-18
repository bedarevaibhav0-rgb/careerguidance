'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark, ArrowRight, Check, GraduationCap, Clock, Briefcase, Scale } from 'lucide-react';
import { Career } from '@/types';
import { isCareerSaved, toggleSaveCareer, toggleCompareCareer, getComparedCareerIds } from '@/lib/storage';

interface CareerCardProps {
  career: Career;
  onCompareUpdate?: () => void;
}

export default function CareerCard({ career, onCompareUpdate }: CareerCardProps) {
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);

  useEffect(() => {
    setSaved(isCareerSaved(career.id));
    const comparedList = getComparedCareerIds();
    setCompared(comparedList.includes(career.id));
  }, [career.id]);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isNowSaved = toggleSaveCareer(career.id);
    setSaved(isNowSaved);
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const res = toggleCompareCareer(career.id);
    if (!res.success && res.message) {
      alert(res.message);
    } else {
      const comparedList = getComparedCareerIds();
      setCompared(comparedList.includes(career.id));
      if (onCompareUpdate) onCompareUpdate();
    }
  };

  return (
    <div className="group bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500/60 shadow-sm hover:shadow-card dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 flex flex-col overflow-hidden relative backdrop-blur-sm">
      
      {/* Card Image & Overlay Badges */}
      <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={career.heroImage}
          alt={`Professional working in ${career.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        
        {/* Subtle vignette over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
          {career.category}
        </div>

        {/* Quick Save Bookmark */}
        <button
          onClick={handleSaveClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            saved
              ? 'bg-amber-500 text-white shadow-md scale-105'
              : 'bg-white/90 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 shadow-sm'
          }`}
          title={saved ? 'Remove from saved' : 'Save this career'}
          aria-label="Bookmark career"
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
        </button>

        {/* Growth badge */}
        <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-md text-white px-2.5 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1.5 border border-slate-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {career.growthRate}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <div className="mb-2">
          <Link href={`/careers/${career.id}`} className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {career.title}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {career.shortIntro}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 my-3 py-3 border-y border-slate-100 dark:border-slate-800/90 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
            <span className="truncate" title={career.educationRequired}>
              {career.educationRequired.split('(')[0]}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
            <span>{career.minYearsStudy}+ Years Study</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
            <span>Salary: <strong className="text-slate-900 dark:text-white font-semibold">{career.salary.entry}</strong></span>
          </div>
        </div>

        {/* Key Skills Tags */}
        <div className="mb-4">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-1.5">
            Essential Skills
          </div>
          <div className="flex flex-wrap gap-1.5">
            {career.keySkills.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/70 px-2 py-0.5 rounded-md text-[11px] font-medium"
              >
                {skill}
              </span>
            ))}
            {career.keySkills.length > 3 && (
              <span className="text-[11px] text-slate-400 dark:text-slate-500 self-center">
                +{career.keySkills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/90 flex items-center justify-between gap-2">
          
          {/* Compare toggle */}
          <button
            onClick={handleCompareClick}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
              compared
                ? 'bg-brand-900 dark:bg-brand-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Add to side-by-side comparison"
          >
            {compared ? (
              <>
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Comparing</span>
              </>
            ) : (
              <>
                <Scale className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                <span>Compare</span>
              </>
            )}
          </button>

          {/* Details Link */}
          <Link
            href={`/careers/${career.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Pathway</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

        </div>

      </div>

    </div>
  );
}
