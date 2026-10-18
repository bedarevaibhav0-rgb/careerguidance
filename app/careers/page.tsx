'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  Filter, 
  X, 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  SlidersHorizontal,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { CAREERS, CATEGORIES } from '@/lib/careers-data';
import CareerCard from '@/components/careers/CareerCard';
import CompareDrawer from '@/components/careers/CompareDrawer';

function CareerExplorerContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Categories';
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedWorkStyle, setSelectedWorkStyle] = useState('All');
  const [selectedMinYears, setSelectedMinYears] = useState('All');
  const [selectedGrowth, setSelectedGrowth] = useState('All');
  const [compareTrigger, setCompareTrigger] = useState(0);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat as any)) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filter careers
  const filteredCareers = useMemo(() => {
    return CAREERS.filter(career => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = career.title.toLowerCase().includes(query);
        const matchesIntro = career.shortIntro.toLowerCase().includes(query);
        const matchesSkills = career.keySkills.some(s => s.toLowerCase().includes(query));
        const matchesCategory = career.category.toLowerCase().includes(query);
        const matchesExams = career.entranceExams.some(e => e.name.toLowerCase().includes(query));
        if (!matchesTitle && !matchesIntro && !matchesSkills && !matchesCategory && !matchesExams) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'All Categories' && career.category !== selectedCategory) {
        return false;
      }

      // 3. Work Style
      if (selectedWorkStyle !== 'All' && career.workStyle !== selectedWorkStyle) {
        return false;
      }

      // 4. Study duration
      if (selectedMinYears !== 'All') {
        const minYears = parseInt(selectedMinYears, 10);
        if (minYears === 5 && career.minYearsStudy < 5) return false;
        if (minYears === 4 && career.minYearsStudy !== 4) return false;
        if (minYears === 3 && career.minYearsStudy > 3) return false;
      }

      // 5. Growth Outlook
      if (selectedGrowth !== 'All' && career.growthRate !== selectedGrowth) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedWorkStyle, selectedMinYears, selectedGrowth]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedWorkStyle('All');
    setSelectedMinYears('All');
    setSelectedGrowth('All');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCategory !== 'All Categories' || 
    selectedWorkStyle !== 'All' || 
    selectedMinYears !== 'All' || 
    selectedGrowth !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-brand-300 text-xs font-semibold border border-brand-200 dark:border-brand-700/50">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Comprehensive Career Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Explore Career Pathways
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Filter through 20 curated professional disciplines. Examine real entrance examination requirements, typical study durations, key technical capabilities, and expected compensation ranges.
        </p>
      </div>

      {/* Main Search and Secondary Filters Bar */}
      <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-4 sm:p-6 space-y-4">
        
        {/* Search Input Bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by career title, skill (e.g., Python, Surgery), or entrance exam (e.g., JEE, NEET, CLAT)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/90 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          />
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3.5 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              title="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          
          {/* Category Dropdown (Mobile or Desktop quick-select) */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Work Style Dropdown */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Work Environment</label>
            <select
              value={selectedWorkStyle}
              onChange={(e) => setSelectedWorkStyle(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Environments</option>
              <option value="Office">Office / Executive</option>
              <option value="Remote / Hybrid">Remote / Hybrid</option>
              <option value="Hospital/Clinical">Hospital & Clinical</option>
              <option value="Lab / Clinical">Lab / Testing Workshop</option>
              <option value="Field & Travel">Field & Site Travel</option>
              <option value="Operational Base">Operational Base / Flight</option>
            </select>
          </div>

          {/* Study Duration */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Minimum Study Years</label>
            <select
              value={selectedMinYears}
              onChange={(e) => setSelectedMinYears(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">Any Duration</option>
              <option value="3">3 Years or less (BCA/B.Sc/Design)</option>
              <option value="4">4 Years (B.Tech / B.Pharm / B.Sc Nursing)</option>
              <option value="5">5+ Years (MBBS / Law / CA)</option>
            </select>
          </div>

          {/* Growth Outlook */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Industry Outlook</label>
            <select
              value={selectedGrowth}
              onChange={(e) => setSelectedGrowth(e.target.value)}
              className="w-full py-2 px-3 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="All">All Growth Profiles</option>
              <option value="High Demand">High Demand</option>
              <option value="Rapidly Growing">Rapidly Growing</option>
              <option value="Steady Growth">Steady Growth</option>
              <option value="Selective & Elite">Selective & Elite</option>
            </select>
          </div>

        </div>

        {/* Category Quick Pills */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Filter by Sector ({CATEGORIES.length - 1} Categories)
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map(cat => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                    isSelected
                      ? 'bg-brand-900 dark:bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter State Bar */}
        {hasActiveFilters && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
            <span>
              Showing <strong className="text-slate-900 dark:text-white">{filteredCareers.length}</strong> of {CAREERS.length} careers
            </span>
            <button
              onClick={resetAllFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* Career Cards Display */}
      {filteredCareers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <CareerCard 
              key={career.id} 
              career={career} 
              onCompareUpdate={() => setCompareTrigger(prev => prev + 1)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No Careers Matched Your Criteria
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We couldn&apos;t find any careers matching your active search and filter combinations. Try loosening the filter criteria or reset to view all available pathways.
          </p>
          <button
            onClick={resetAllFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-900 dark:bg-brand-600 text-white text-xs font-bold hover:bg-brand-800 dark:hover:bg-brand-500 transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Floating Compare Action Bar */}
      <CompareDrawer key={compareTrigger} />

    </div>
  );
}

export default function CareerExplorerPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500">
        Loading Career Explorer...
      </div>
    }>
      <CareerExplorerContent />
    </Suspense>
  );
}
