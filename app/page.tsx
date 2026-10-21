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
  Award,
  Cpu,
  Stethoscope,
  Compass,
  FileCheck,
  CheckSquare
} from 'lucide-react';
import { CAREERS, CATEGORIES } from '@/lib/careers-data';
import CareerCard from '@/components/careers/CareerCard';
import CompareDrawer from '@/components/careers/CompareDrawer';
import HeroStargate from '@/components/portals/HeroStargate';
import CosmicPortals from '@/components/portals/CosmicPortals';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('All Categories');

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
      
      {/* 1. HERO SECTION WITH QUANTUM STARGATE CONSOLE */}
      <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-brand-50/40 via-transparent to-transparent dark:from-brand-950/20 dark:via-transparent dark:to-transparent border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-semibold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping"></span>
                <span>Verified Dimensional Career Directory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Find the Career That <span className="bg-gradient-to-r from-cyan-600 via-brand-600 to-amber-500 dark:from-cyan-400 dark:via-sky-300 dark:to-amber-400 bg-clip-text text-transparent">Fits You.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Explore dimensional pathways, step through verified career portals, and plan every milestone from high school to your dream profession.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/#career-portals"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-white bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 group"
                >
                  <Orbit className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform" />
                  <span>Enter Career Portals</span>
                </Link>

                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900 backdrop-blur-md"
                >
                  <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span>Take Aptitude Assessment</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>20 Dimensional Portals</span>
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

            {/* Right: Quantum Stargate Hologram Console */}
            <div className="lg:col-span-5">
              <HeroStargate />
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIMENSIONAL SECTOR SEARCH DECK WITH UPPER LINE CHANNEL TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>FREQUENCY DECK // 14 SECTORS</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Filter by Industry Cadre
              </h2>
            </div>

            {/* Futuristic Search Input */}
            <form onSubmit={handleSearchSubmit} className="w-full md:w-80 flex items-center relative group">
              <input
                type="text"
                placeholder="Search careers, skills, or entrance exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/90 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 pointer-events-none group-focus-within:text-cyan-500 transition-colors" />
              <button
                type="submit"
                className="hidden"
              >
                Search
              </button>
            </form>
          </div>

          {/* Upper Line Category Channel Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 dark:border-slate-800/80 pt-4">
            {CATEGORIES.map((category) => {
              const isAll = category === 'All Categories';
              const isSelected = selectedCategoryTab === category;
              return (
                <Link
                  key={category}
                  href={isAll ? '/careers' : `/careers?category=${encodeURIComponent(category)}`}
                  onClick={() => setSelectedCategoryTab(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-brand-600 text-white border-slate-900 dark:border-brand-500 shadow-sm scale-102'
                      : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700/80'
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. COSMIC CAREER PORTALS (INTERACTIVE MULTIVERSE DIMENSIONS WITH IMAGES & UPPER TABS) */}
      <CosmicPortals />

      {/* 4. FEATURED CAREER PATHWAYS (UPGRADED PORTAL-STYLE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CURATED DOSSIERS</span>
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
            className="inline-flex items-center gap-1 text-sm font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 self-start sm:self-auto group"
          >
            <span>View All 20 Career Portals</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Varied Grid Layout with Upgraded Portal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* 5. PORTAL PROTOCOL SEQUENCE (HOW THIS PLATFORM WORKS) */}
      <section className="bg-slate-100/60 dark:bg-slate-900/50 backdrop-blur-sm border-y border-slate-200/80 dark:border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 mb-3">
              <span>SYSTEM PROTOCOL SEQUENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Methodical Process to Choose Your Life’s Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Avoid following hearsay or social pressure. Make an informed decision based on your real cognitive strengths and genuine industry demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Protocol 01 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-md hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-mono font-bold flex items-center justify-center mb-4 text-base border border-cyan-200 dark:border-cyan-700/60 shadow-sm group-hover:scale-105 transition-transform">
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
                <Link href="/assessment" className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Start Aptitude Test</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Protocol 02 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-md hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-mono font-bold flex items-center justify-center mb-4 text-base border border-cyan-200 dark:border-cyan-700/60 shadow-sm group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Inspect Dimensional Profiles
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Read day-in-the-life realities, core daily duties, required higher secondary streams, and qualifying competitive examinations.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link href="/careers" className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Browse Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Protocol 03 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-md hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-mono font-bold flex items-center justify-center mb-4 text-base border border-cyan-200 dark:border-cyan-700/60 shadow-sm group-hover:scale-105 transition-transform">
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
                <Link href="/compare" className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Comparison Tool</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Protocol 04 */}
            <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-subtle flex flex-col justify-between backdrop-blur-md hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-mono font-bold flex items-center justify-center mb-4 text-base border border-cyan-200 dark:border-cyan-700/60 shadow-sm group-hover:scale-105 transition-transform">
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
                <Link href="/roadmaps" className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Roadmaps</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. EDUCATIONAL ADVISOR CALLOUT SECTION (ORACLE PORTAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 dark:bg-[#070C18] border border-cyan-500/30 text-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(56,189,248,0.15)] relative overflow-hidden">
          
          {/* Swirling Portal Atmosphere */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none animate-pulse-glow" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 text-xs font-mono font-semibold border border-amber-400/30">
              <Orbit className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span>THE QUANTUM COUNSELOR ORACLE</span>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md hover:shadow-lg transition-all"
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

      {/* 7. COMPARISON TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
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
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl shadow-sm transition-colors"
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
