'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Orbit, 
  BookOpen, 
  Scale, 
  GitFork, 
  ShieldCheck, 
  Sparkles,
  Users,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { CAREERS, CATEGORIES } from '@/lib/careers-data';
import CareerCard from '@/components/careers/CareerCard';
import CompareDrawer from '@/components/careers/CompareDrawer';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/careers?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/careers');
    }
  };

  // Curated featured careers across different disciplines
  const featuredCareers = CAREERS.filter(c => 
    ['software-engineer', 'doctor', 'chartered-accountant', 'civil-engineer', 'lawyer', 'pilot'].includes(c.id)
  );

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-brand-50/40 via-transparent to-transparent dark:from-brand-950/20 dark:via-transparent dark:to-transparent border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/70 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-700/60 text-brand-900 dark:text-brand-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400 animate-pulse"></span>
                <span>Verified Higher Education & Career Directory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Find the Career That <span className="text-brand-700 dark:text-brand-400">Fits You.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Explore career options, understand what they require, and create a clear path toward your future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-900 dark:bg-brand-600 hover:bg-brand-800 dark:hover:bg-brand-500 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
                >
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Explore Careers</span>
                </Link>

                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900 backdrop-blur-sm"
                >
                  <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  <span>Take Career Assessment</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>20 Complete Career Pathways</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Realistic Entrance Exam Guidelines</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Zero Sponsored Rankings</span>
                </div>
              </div>

            </div>

            {/* Right Photography: Authentic student exploring career options */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                  alt="Real college students collaborating in a modern university library"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Evidence-Based Decision Making</span>
                  </div>
                  <p className="text-sm font-medium text-slate-100 leading-snug">
                    Compare required years of study, real salary bands, and daily responsibilities before picking your college major.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INSTANT SEARCH & CATEGORY SELECTOR (IMMEDIATE PRACTICAL UTILITY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Search & Filter by Industry Discipline
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Find exactly what interests you among 14 recognized professional sectors.
              </p>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="w-full md:w-80 flex items-center relative">
              <input
                type="text"
                placeholder="Search careers, skills, or exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/90 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 pointer-events-none" />
              <button
                type="submit"
                className="hidden"
              >
                Search
              </button>
            </form>
          </div>

          {/* 14 Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {CATEGORIES.map((category) => {
              const isAll = category === 'All Categories';
              return (
                <Link
                  key={category}
                  href={isAll ? '/careers' : `/careers?category=${encodeURIComponent(category)}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 hover:bg-brand-50 dark:hover:bg-brand-950/70 text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-brand-300 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-200 dark:hover:border-brand-700/60 transition-colors"
                >
                  {category}
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. FEATURED CAREER PATHWAYS (VARIOUS DISCIPLINES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-1">
              Curated Profiles
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured High-Opportunity Pathways
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl">
              Inspect comprehensive milestones, technical and soft skills, entrance examinations, and realistic earnings.
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 self-start sm:self-auto"
          >
            <span>View All 20 Careers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Varied Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* 4. HOW THIS PLATFORM WORKS (CLEAR 4-STEP FRAMEWORK) */}
      <section className="bg-slate-100/60 dark:bg-slate-900/50 backdrop-blur-sm border-y border-slate-200/80 dark:border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Methodical Process to Choose Your Life’s Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Avoid following hearsay or social pressure. Make an informed decision based on your real cognitive strengths and genuine industry demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-sm hover:border-brand-300 dark:hover:border-brand-500/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 font-bold flex items-center justify-center mb-4 text-sm border border-brand-200 dark:border-brand-700/50">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Take the Assessment
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Answer 10 focused questions exploring your subject strengths, cognitive habits, stress tolerance, and work setting preferences.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/assessment" className="text-xs font-semibold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1">
                  <span>Start Aptitude Test</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-sm hover:border-brand-300 dark:hover:border-brand-500/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 font-bold flex items-center justify-center mb-4 text-sm border border-brand-200 dark:border-brand-700/50">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Explore In-Depth Profiles
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Read day-in-the-life realities, core daily duties, required higher secondary streams, and qualifying competitive examinations.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/careers" className="text-xs font-semibold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1">
                  <span>Browse Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-sm hover:border-brand-300 dark:hover:border-brand-500/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 font-bold flex items-center justify-center mb-4 text-sm border border-brand-200 dark:border-brand-700/50">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Compare Top Choices
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Place 2 to 3 careers side-by-side to evaluate differences in study duration, work-life balance, entry salaries, and higher education.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/compare" className="text-xs font-semibold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1">
                  <span>Open Comparison Tool</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-sm hover:border-brand-300 dark:hover:border-brand-500/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 font-bold flex items-center justify-center mb-4 text-sm border border-brand-200 dark:border-brand-700/50">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Follow Your Roadmap
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Follow a structured milestone timeline from 10th standard through graduation, skill development, internships, and your first job.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/roadmaps" className="text-xs font-semibold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1">
                  <span>View Roadmaps</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. EDUCATIONAL ADVISOR CALLOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 dark:bg-[#0B1426] border border-brand-800/80 dark:border-brand-700/50 text-white rounded-2xl p-8 sm:p-12 shadow-elevated relative overflow-hidden">
          {/* Subtle cosmic glow effect inside card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-500/20 dark:bg-brand-500/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800 dark:bg-brand-900/80 text-amber-300 text-xs font-semibold border border-brand-700 dark:border-brand-600/50">
              <Orbit className="w-3.5 h-3.5" />
              <span>Personalized Guidance Counselor</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have Specific Questions About Your Academic Future?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Ask our conversational counselor anything: &ldquo;I like mathematics and computers, what careers fit me?&rdquo; or &ldquo;I am confused between engineering and management.&rdquo; Receive structured, honest advice without hype.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/guidance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow transition-colors"
              >
                <span>Ask the Educational Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Free to use • No signup required
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMPARISON TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Head-to-Head Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Compare 2 to 3 Careers Side-by-Side
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Unsure between Software Engineering vs Data Science, or Doctor vs Pharmacist? Our comprehensive comparison matrix breaks down differences in study years, daily stress levels, entry salaries, and work environment.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/compare?careers=software-engineer,data-scientist"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors"
            >
              <span>Compare Popular Pathways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CompareDrawer />

    </div>
  );
}
