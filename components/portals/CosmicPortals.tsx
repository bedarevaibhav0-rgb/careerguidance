'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Orbit, 
  Cpu, 
  Stethoscope, 
  TrendingUp, 
  ShieldCheck, 
  Wrench, 
  Palette, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';

interface CareerMini {
  id: string;
  title: string;
}

interface CosmicPortal {
  id: string;
  code: string;
  sectorName: string;
  category: string;
  archetype: string;
  description: string;
  imageUrl: string;
  colorName: string;
  vortexClass: string;
  accentText: string;
  borderHover: string;
  glowHover: string;
  badgeBg: string;
  btnBg: string;
  icon: React.ComponentType<{ className?: string }>;
  salaryBand: string;
  studyYears: string;
  growth: string;
  primaryExams: string[];
  careers: CareerMini[];
}

const COSMIC_PORTALS: CosmicPortal[] = [
  {
    id: 'cyber',
    code: 'SECTOR-01',
    sectorName: 'Cybernetica & Intelligent Systems',
    category: 'Computer Science & IT',
    archetype: 'The Matrix Gateway',
    description: 'Autonomous agents, scalable distributed computing, neural networks, and defensive cybersecurity protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    colorName: 'cyan',
    vortexClass: 'portal-ring-cyan',
    accentText: 'text-cyan-600 dark:text-cyan-400',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(56,189,248,0.28)]',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60',
    btnBg: 'bg-cyan-600 hover:bg-cyan-500 text-white',
    icon: Cpu,
    salaryBand: '₹4.5L - ₹55L+ PA',
    studyYears: '4 Years (B.Tech / B.Sc)',
    growth: 'Exponential Growth',
    primaryExams: ['JEE Main / Adv', 'BITSAT', 'State CETs'],
    careers: [
      { id: 'software-engineer', title: 'Software Engineer' },
      { id: 'ai-ml-engineer', title: 'AI & Machine Learning Engineer' },
      { id: 'data-scientist', title: 'Data Scientist' },
      { id: 'cybersecurity-analyst', title: 'Cybersecurity Analyst' },
      { id: 'web-developer', title: 'Full-Stack Web Developer' },
    ]
  },
  {
    id: 'biomed',
    code: 'SECTOR-02',
    sectorName: 'Bio-Medical & Life Sciences',
    category: 'Medicine & Healthcare',
    archetype: 'The Healing Dimension',
    description: 'Clinical surgery, molecular pharmacology, patient therapeutics, and high-stakes hospital diagnostics.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    colorName: 'emerald',
    vortexClass: 'portal-ring-emerald',
    accentText: 'text-emerald-600 dark:text-emerald-400',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.28)]',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    icon: Stethoscope,
    salaryBand: '₹4L - ₹45L+ PA',
    studyYears: '4 - 5.5 Years',
    growth: 'Perpetual High Demand',
    primaryExams: ['NEET-UG', 'INI-CET', 'NEXT', 'GPAT'],
    careers: [
      { id: 'doctor', title: 'Physician / Surgeon (MBBS)' },
      { id: 'pharmacist', title: 'Pharmacist (B.Pharm)' },
      { id: 'nurse', title: 'Critical Care Registered Nurse' },
    ]
  },
  {
    id: 'capital',
    code: 'SECTOR-03',
    sectorName: 'Apex Capital & Global Commerce',
    category: 'Finance',
    archetype: 'The Sovereign Wealth Gateway',
    description: 'Corporate audit oversight, venture capital allocation, fiscal compliance, and macroeconomic asset management.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    colorName: 'amber',
    vortexClass: 'portal-ring-amber',
    accentText: 'text-amber-600 dark:text-amber-400',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.28)]',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
    btnBg: 'bg-amber-600 hover:bg-amber-500 text-white',
    icon: TrendingUp,
    salaryBand: '₹6L - ₹50L+ PA',
    studyYears: '3 - 5 Years',
    growth: 'High Scalability',
    primaryExams: ['CA Foundation', 'CAT', 'IBPS PO'],
    careers: [
      { id: 'chartered-accountant', title: 'Chartered Accountant (CA)' },
      { id: 'banking-professional', title: 'Investment & Commercial Banker' },
      { id: 'entrepreneur', title: 'Venture Founder & Entrepreneur' },
    ]
  },
  {
    id: 'sovereign',
    code: 'SECTOR-04',
    sectorName: 'Justice, Defense & Statecraft',
    category: 'Law',
    archetype: 'The Citadel of Authority',
    description: 'Constitutional jurisprudence, administrative district governance, combat aviation, and national border defense.',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    colorName: 'rose',
    vortexClass: 'portal-ring-rose',
    accentText: 'text-rose-600 dark:text-rose-400',
    borderHover: 'hover:border-rose-400 dark:hover:border-rose-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(244,63,94,0.28)]',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    btnBg: 'bg-rose-600 hover:bg-rose-500 text-white',
    icon: ShieldCheck,
    salaryBand: '₹5L - ₹40L+ PA',
    studyYears: '3 - 5 Years',
    growth: 'Prestigious & Secure',
    primaryExams: ['CLAT', 'UPSC CSE', 'NDA / CDS', 'DGCA CPL'],
    careers: [
      { id: 'lawyer', title: 'Constitutional & Corporate Lawyer' },
      { id: 'government-officer', title: 'Civil Services Officer (IAS/IPS)' },
      { id: 'defence-officer', title: 'Defence Armed Forces Officer' },
      { id: 'pilot', title: 'Commercial Airline Pilot' },
    ]
  },
  {
    id: 'forge',
    code: 'SECTOR-05',
    sectorName: 'Heavy Forge & Physical Infrastructure',
    category: 'Engineering',
    archetype: 'The Architect Dimension',
    description: 'High-speed transit networks, energy grid transmission, robotics kinematic design, and skyscraper construction.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    colorName: 'orange',
    vortexClass: 'portal-ring-orange',
    accentText: 'text-orange-600 dark:text-orange-400',
    borderHover: 'hover:border-orange-400 dark:hover:border-orange-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(234,88,12,0.28)]',
    badgeBg: 'bg-orange-50 dark:bg-orange-950/70 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/60',
    btnBg: 'bg-orange-600 hover:bg-orange-500 text-white',
    icon: Wrench,
    salaryBand: '₹4.2L - ₹32L+ PA',
    studyYears: '4 Years (B.Tech / B.E.)',
    growth: 'Core Industrial Anchor',
    primaryExams: ['JEE Main', 'GATE', 'State Engineering CETs'],
    careers: [
      { id: 'mechanical-engineer', title: 'Mechanical & Robotics Engineer' },
      { id: 'civil-engineer', title: 'Civil Infrastructure Engineer' },
      { id: 'electrical-engineer', title: 'Electrical & Power Systems Engineer' },
    ]
  },
  {
    id: 'nexus',
    code: 'SECTOR-06',
    sectorName: 'Neuro-Design & Human Knowledge',
    category: 'Design & Education',
    archetype: 'The Creative Synthesis',
    description: 'Digital visual interfaces, cognitive product design, pedagogical mastery, and next-generation youth mentorship.',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    colorName: 'purple',
    vortexClass: 'portal-ring-purple',
    accentText: 'text-purple-600 dark:text-purple-400',
    borderHover: 'hover:border-purple-400 dark:hover:border-purple-400/70',
    glowHover: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60',
    btnBg: 'bg-purple-600 hover:bg-purple-500 text-white',
    icon: Palette,
    salaryBand: '₹3.5L - ₹28L+ PA',
    studyYears: '3 - 4 Years',
    growth: 'High Creative Agency',
    primaryExams: ['NID DAT', 'UCEED', 'UGC-NET', 'B.Ed CET'],
    careers: [
      { id: 'graphic-designer', title: 'Visual & UI/UX Designer' },
      { id: 'teacher', title: 'Educator & Academic Professor' },
    ]
  }
];

export default function CosmicPortals() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPortals = activeTab === 'all' 
    ? COSMIC_PORTALS 
    : COSMIC_PORTALS.filter(p => p.id === activeTab);

  return (
    <section id="career-portals" className="relative py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100/80 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 border border-brand-200 dark:border-brand-700/60 shadow-sm">
              <Orbit className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Dimensional Career Gateway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Cosmic Career <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 bg-clip-text text-transparent">Portals</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Choose your sector dimension. Look through the photographic portal window to inspect real work environments, salary spectrums, required study years, and direct pathways.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>6 ACTIVE DIMENSIONS READY</span>
          </div>
        </div>

        {/* Upper Line Dimension Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200/80 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-md scale-102 border border-slate-800'
                : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>All Dimensions (6)</span>
          </button>

          {COSMIC_PORTALS.map((portal) => {
            const isCurrent = activeTab === portal.id;
            const TabIcon = portal.icon;
            return (
              <button
                key={portal.id}
                type="button"
                onClick={() => setActiveTab(portal.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  isCurrent
                    ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-md scale-102 border border-slate-800'
                    : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <TabIcon className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{portal.sectorName.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPortals.map((portal) => {
            const Icon = portal.icon;

            return (
              <div
                key={portal.id}
                className={`group relative rounded-3xl p-6 bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 transition-all duration-500 flex flex-col justify-between ${portal.borderHover} ${portal.glowHover}`}
              >
                {/* Subtle top indicator bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500">
                      {portal.code}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">|</span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {portal.archetype}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${portal.badgeBg}`}>
                    {portal.growth}
                  </span>
                </div>

                {/* Portal Vortex Center Visual with REAL PHOTOGRAPHIC VIEW */}
                <div className="relative my-5 flex items-center justify-center py-2">
                  
                  {/* Swirling Outer Vortex Conic Ring */}
                  <div 
                    className={`w-40 h-40 rounded-full ${portal.vortexClass} opacity-25 dark:opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-700 animate-vortex-spin pointer-events-none`} 
                  />

                  {/* Counter-rotating Inner Ring */}
                  <div 
                    className={`absolute w-32 h-32 rounded-full ${portal.vortexClass} opacity-35 dark:opacity-45 animate-vortex-reverse pointer-events-none`} 
                  />

                  {/* High-Resolution Photographic Aperture Window */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/40 dark:border-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.35)] flex items-center justify-center z-10 backdrop-blur-md">
                    <img 
                      src={portal.imageUrl} 
                      alt={portal.sectorName} 
                      className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                    />
                    
                    {/* Atmospheric Lens Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Miniature corner icon badge */}
                    <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-slate-950/85 border border-white/20 shadow flex items-center justify-center">
                      <Icon className={`w-3.5 h-3.5 ${portal.accentText}`} />
                    </div>
                  </div>

                </div>

                {/* Sector Title & Description */}
                <div className="space-y-1.5 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-900 dark:group-hover:text-brand-300 transition-colors">
                    {portal.sectorName}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {portal.description}
                  </p>
                </div>

                {/* Key Metrics Matrix */}
                <div className="bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-3 border border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] mb-4">
                  <div>
                    <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Earnings Trajectory</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{portal.salaryBand}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">Study Duration</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{portal.studyYears}</span>
                  </div>
                </div>

                {/* Career Pathways Teleporter List */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Direct Pathway Teleports ({portal.careers.length})</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {portal.careers.map((career) => (
                      <Link
                        key={career.id}
                        href={`/careers/${career.id}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/80 text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-brand-200 border border-slate-200/90 dark:border-slate-700/80 hover:border-brand-300 dark:hover:border-brand-500 transition-all shadow-2xs hover:scale-102"
                      >
                        <span className="truncate max-w-[140px]">{career.title}</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Bottom Warp CTA */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/careers?category=${encodeURIComponent(portal.category)}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold py-2 px-3.5 rounded-xl transition-all shadow-sm ${portal.btnBg}`}
                  >
                    <span>Warp to Dimension</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    {portal.primaryExams[0]}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
