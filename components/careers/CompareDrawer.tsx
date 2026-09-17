'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, X, ArrowRight, Trash2 } from 'lucide-react';
import { getComparedCareerIds, toggleCompareCareer, clearComparedCareers } from '@/lib/storage';
import { CAREERS } from '@/lib/careers-data';

export default function CompareDrawer() {
  const [comparedIds, setComparedIds] = useState<string[]>([]);

  const syncCompared = () => {
    setComparedIds(getComparedCareerIds());
  };

  useEffect(() => {
    syncCompared();
    window.addEventListener('local-storage-update', syncCompared);
    window.addEventListener('storage', syncCompared);
    return () => {
      window.removeEventListener('local-storage-update', syncCompared);
      window.removeEventListener('storage', syncCompared);
    };
  }, []);

  if (comparedIds.length === 0) return null;

  const comparedCareers = CAREERS.filter(c => comparedIds.includes(c.id));

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="bg-slate-900 text-white rounded-xl shadow-elevated border border-slate-700 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Selected Career Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 shrink-0 mr-1">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">Compare ({comparedIds.length}/3):</span>
          </div>

          {comparedCareers.map(c => (
            <div
              key={c.id}
              className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 shrink-0"
            >
              <span className="truncate max-w-[120px] font-medium">{c.title}</span>
              <button
                onClick={() => {
                  toggleCompareCareer(c.id);
                  syncCompared();
                }}
                className="text-slate-400 hover:text-rose-400 p-0.5"
                title="Remove"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={() => {
              clearComparedCareers();
              syncCompared();
            }}
            className="text-xs text-slate-400 hover:text-white px-2 py-1.5 rounded transition-colors"
          >
            Clear
          </button>

          <Link
            href={`/compare?careers=${comparedIds.join(',')}`}
            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs shadow transition-colors"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
