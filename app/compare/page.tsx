'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Scale, 
  Plus, 
  X, 
  ArrowRight, 
  GraduationCap, 
  Clock, 
  Briefcase, 
  DollarSign, 
  Award, 
  Flame, 
  Layers,
  Building,
  RotateCcw
} from 'lucide-react';
import { CAREERS } from '@/lib/careers-data';
import { Career } from '@/types';
import { getComparedCareerIds } from '@/lib/storage';

function CompareContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const careersQuery = searchParams.get('careers');

  // Initialize with query params or local storage, or defaults
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    if (careersQuery) {
      const ids = careersQuery.split(',').filter(id => CAREERS.some(c => c.id === id));
      if (ids.length >= 2) return ids.slice(0, 3);
    }
    const fromStorage = getComparedCareerIds();
    if (fromStorage.length >= 2) return fromStorage.slice(0, 3);
    return ['software-engineer', 'data-scientist'];
  });

  // Sync with URL when selectedIds changes
  const updateSelectedCareers = (newIds: string[]) => {
    setSelectedIds(newIds);
    router.replace(`/compare?careers=${newIds.join(',')}`);
  };

  const handleCareerChange = (index: number, newId: string) => {
    const updated = [...selectedIds];
    updated[index] = newId;
    updateSelectedCareers(updated);
  };

  const handleRemoveCareer = (index: number) => {
    if (selectedIds.length <= 2) {
      alert('You must have at least 2 careers to maintain a comparison.');
      return;
    }
    const updated = selectedIds.filter((_, i) => i !== index);
    updateSelectedCareers(updated);
  };

  const handleAddThirdCareer = () => {
    if (selectedIds.length >= 3) return;
    const available = CAREERS.find(c => !selectedIds.includes(c.id));
    if (available) {
      updateSelectedCareers([...selectedIds, available.id]);
    }
  };

  const comparedCareers: Career[] = selectedIds
    .map(id => CAREERS.find(c => c.id === id))
    .filter((c): c is Career => c !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-900 text-xs font-semibold border border-brand-200">
            <Scale className="w-3.5 h-3.5" />
            <span>Head-to-Head Evaluation</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Side-by-Side Career Comparison
          </h1>
          <p className="text-sm text-slate-600">
            Compare 2 to 3 careers simultaneously across study timelines, required skills, work environments, and compensation.
          </p>
        </div>

        {selectedIds.length < 3 && (
          <button
            onClick={handleAddThirdCareer}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-900 text-white text-xs font-bold hover:bg-brand-800 transition-colors shadow-sm self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add 3rd Career to Compare</span>
          </button>
        )}
      </div>

      {/* Comparison Selectors Strip */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {comparedCareers.map((career, idx) => (
            <div key={idx} className="space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Career #{idx + 1}
                </label>
                {selectedIds.length > 2 && (
                  <button
                    onClick={() => handleRemoveCareer(idx)}
                    className="text-slate-400 hover:text-rose-600 text-xs inline-flex items-center gap-0.5"
                    title="Remove career"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                )}
              </div>
              <select
                value={career.id}
                onChange={(e) => handleCareerChange(idx, e.target.value)}
                className="w-full py-2 px-2.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-900"
              >
                {CAREERS.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.category})
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[700px]">
            
            {/* Table Header: Photos, Titles & Quick Link */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="py-6 px-5 w-1/4 font-bold text-slate-900 text-base align-top">
                  Comparison Metric
                </th>
                {comparedCareers.map((c) => (
                  <th key={c.id} className="py-6 px-5 align-top">
                    <div className="space-y-3">
                      <div className="h-28 w-full rounded-lg overflow-hidden bg-slate-200 border border-slate-200">
                        <img
                          src={c.heroImage}
                          alt={c.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-brand-800 uppercase block">
                          {c.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {c.title}
                        </h3>
                      </div>
                      <Link
                        href={`/careers/${c.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-900 hover:text-brand-700"
                      >
                        <span>View Full Pathway</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body: Feature Rows */}
            <tbody className="divide-y divide-slate-100">
              
              {/* Education Required */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Minimum Education</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-700 font-medium">
                    {c.educationRequired}
                  </td>
                ))}
              </tr>

              {/* Study Timeline */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Duration Post-12th</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-700 font-medium">
                    {c.minYearsStudy}+ Years
                  </td>
                ))}
              </tr>

              {/* Work Style & Environment */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Daily Work Setting</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-700">
                    <span className="inline-block bg-slate-100 px-2 py-0.5 rounded text-xs font-semibold text-slate-800 mb-1">
                      {c.workStyle}
                    </span>
                    <p className="text-xs text-slate-500">{c.workEnvironment}</p>
                  </td>
                ))}
              </tr>

              {/* Starting Salary */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Starting Compensation</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-900 font-bold">
                    {c.salary.entry}
                  </td>
                ))}
              </tr>

              {/* Mid & Senior Salary */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <span>Senior-Level Potential</span>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-700 text-xs">
                    <div className="font-semibold text-slate-900">{c.salary.senior}</div>
                    <div className="text-slate-500 mt-0.5">Mid: {c.salary.mid}</div>
                  </td>
                ))}
              </tr>

              {/* Stress & Work-Life Balance */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Work-Life Balance</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-slate-700 text-xs leading-relaxed">
                    <div className="font-semibold text-slate-900 mb-0.5">
                      {c.stressLevel} Intensity
                    </div>
                    {c.workLifeBalance}
                  </td>
                ))}
              </tr>

              {/* Key Technical Skills */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <span>Key Technical Skills</span>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5">
                    <div className="flex flex-wrap gap-1">
                      {c.technicalSkills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="bg-slate-100 text-slate-800 text-[11px] px-2 py-0.5 rounded font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Entrance Exams */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Top Entrance Exams</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-xs text-slate-700">
                    <ul className="space-y-1">
                      {c.entranceExams.map((e, i) => (
                        <li key={i} className="font-medium">
                          • {e.name} ({e.level})
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Higher Education */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Higher Education</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-xs text-slate-700">
                    {c.higherEducation.slice(0, 2).join(', ')}
                  </td>
                ))}
              </tr>

              {/* Primary Hiring Sectors */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-4 px-5 font-semibold text-slate-900 bg-slate-50/40">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-brand-700 shrink-0" />
                    <span>Top Hiring Industries</span>
                  </div>
                </td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="py-4 px-5 text-xs text-slate-600">
                    {c.industries.slice(0, 3).join(', ')}
                  </td>
                ))}
              </tr>

            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}

export default function CareerComparisonPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500">Loading Comparison...</div>}>
      <CompareContent />
    </Suspense>
  );
}
