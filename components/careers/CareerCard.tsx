'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark, ArrowRight, Check, GraduationCap, Clock, Briefcase, Scale, Sparkles } from 'lucide-react';
import { Career } from '@/types';
import { isCareerSaved, toggleSaveCareer, toggleCompareCareer, getComparedCareerIds } from '@/lib/storage';

interface CareerCardProps {
  career: Career;
  onCompareUpdate?: () => void;
}

export default function CareerCard({ career, onCompareUpdate }: CareerCardProps) {
  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [salaryTab, setSalaryTab] = useState<'entry' | 'mid' | 'senior'>('entry');

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
    <div className="group bg-white/95 dark:bg-slate-900/90 rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-cyan-400/60 dark:hover:border-cyan-400/50 shadow-sm hover:shadow-[0_12px_35px_rgba(56,189,248,0.18)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-all duration-500 flex flex-col overflow-hidden relative backdrop-blur-md">
      
      {/* Portal Image Viewport with Hologram Overlays */}
      <div className="relative h-52 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={career.heroImage}
          alt={`Professional working in ${career.title}`}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        
        {/* Holographic lens overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Category Pill with Portal Accent */}
        <div className="absolute top-3.5 left-3.5 bg-slate-950/80 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 shadow-md border border-cyan-500/30 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{career.category}</span>
        </div>

        {/* Quick Save Bookmark */}
        <button
          onClick={handleSaveClick}
          className={`absolute top-3.5 right-3.5 p-2 rounded-full transition-all duration-300 ${
            saved
              ? 'bg-amber-500 text-white shadow-lg scale-110'
              : 'bg-slate-950/70 backdrop-blur-md text-white hover:text-amber-300 hover:bg-slate-900 border border-white/20 shadow-md'
          }`}
          title={saved ? 'Remove from saved' : 'Save this career'}
          aria-label="Bookmark career"
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-white' : ''}`} />
        </button>

        {/* Growth & Demand Badge */}
        <div className="absolute bottom-3 left-3.5 bg-slate-950/85 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold flex items-center gap-1.5 border border-slate-700/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{career.growthRate}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title & Short Intro */}
        <div className="mb-3">
          <Link href={`/careers/${career.id}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {career.title}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {career.shortIntro}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 my-2 py-2.5 border-y border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
            <span className="truncate" title={career.educationRequired}>
              {career.educationRequired.split('(')[0]}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{career.minYearsStudy}+ Yrs Study</span>
          </div>
        </div>

        {/* Upper Line Micro-Tabs for Salary Trajectory */}
        <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-2.5 border border-slate-100 dark:border-slate-800/70 my-2 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 dark:text-slate-500">
            <span>SALARY SPECTRUM</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSalaryTab('entry')}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-colors ${
                  salaryTab === 'entry' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Entry
              </button>
              <button
                type="button"
                onClick={() => setSalaryTab('mid')}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-colors ${
                  salaryTab === 'mid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Mid
              </button>
              <button
                type="button"
                onClick={() => setSalaryTab('senior')}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-colors ${
                  salaryTab === 'senior' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Senior
              </button>
            </div>
          </div>

          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-cyan-500" />
            <span>
              {salaryTab === 'entry' && career.salary.entry}
              {salaryTab === 'mid' && career.salary.mid}
              {salaryTab === 'senior' && career.salary.senior}
            </span>
          </div>
        </div>

        {/* Essential Skills Pills */}
        <div className="my-2.5">
          <div className="flex flex-wrap gap-1.5">
            {career.keySkills.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/70 px-2 py-0.5 rounded-md text-[10px] font-medium"
              >
                {skill}
              </span>
            ))}
            {career.keySkills.length > 3 && (
              <span className="text-[10px] text-slate-400 dark:text-slate-500 self-center">
                +{career.keySkills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/90 flex items-center justify-between gap-2">
          
          {/* Compare toggle button */}
          <button
            onClick={handleCompareClick}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-xl transition-all ${
              compared
                ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-sm'
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
          >
            <span>Enter Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

        </div>

      </div>

    </div>
  );
}
