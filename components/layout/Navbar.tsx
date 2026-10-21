'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Orbit, 
  BookOpen, 
  CheckSquare, 
  GitFork, 
  Scale, 
  MessageSquareQuote, 
  Bookmark, 
  Menu, 
  X,
  LayoutDashboard,
  FileCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getSavedCareerIds } from '@/lib/storage';
import ThemeToggle from '@/components/layout/ThemeToggle';

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isPortal?: boolean;
}

const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Orbit },
  { href: '/#career-portals', label: 'Portals', icon: Sparkles, isPortal: true },
  { href: '/careers', label: 'Careers', icon: BookOpen },
  { href: '/documents', label: 'Documents', icon: FileCheck },
  { href: '/assessment', label: 'Assessment', icon: CheckSquare },
  { href: '/roadmaps', label: 'Roadmaps', icon: GitFork },
  { href: '/compare', label: 'Compare', icon: Scale },
  { href: '/guidance', label: 'Guidance', icon: MessageSquareQuote },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  const updateSavedCount = () => {
    const ids = getSavedCareerIds();
    setSavedCount(ids.length);
  };

  useEffect(() => {
    updateSavedCount();
    window.addEventListener('local-storage-update', updateSavedCount);
    window.addEventListener('storage', updateSavedCount);
    return () => {
      window.removeEventListener('local-storage-update', updateSavedCount);
      window.removeEventListener('storage', updateSavedCount);
    };
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/75 dark:bg-[#070C18]/80 backdrop-blur-xl border-b border-slate-200/90 dark:border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo with Orbiting Astrolabe */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-900 to-slate-950 dark:from-brand-950 dark:to-[#0B1528] border border-brand-700/60 dark:border-cyan-500/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-transform group-hover:scale-105 duration-300">
              <Orbit className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 pointer-events-none animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl leading-none text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
                Career<span className="bg-gradient-to-r from-cyan-600 to-brand-500 dark:from-cyan-400 dark:to-sky-300 bg-clip-text text-transparent">Orbit</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Sector Gateway</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Futuristic Cosmic Dock */}
          <nav className="hidden xl:flex items-center bg-slate-100/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 p-1.5 rounded-2xl shadow-inner space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const isPortal = link.isPortal;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isPortal
                      ? 'bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-400/50 dark:border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:scale-105'
                      : isActive
                        ? 'bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-brand-600 text-white shadow-md border border-slate-900 dark:border-cyan-400/40 scale-102'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${
                    isPortal 
                      ? 'text-cyan-500 animate-spin-slow' 
                      : isActive 
                        ? 'text-amber-400' 
                        : 'text-slate-400 dark:text-slate-500'
                  }`} />
                  <span>{link.label}</span>

                  {/* Pulsing beacon on Portals tab */}
                  {isPortal && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping ml-0.5" />
                  )}

                  {/* Active bottom glow accent */}
                  {isActive && !isPortal && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Navigation for Mid Screens (Compact Dock) */}
          <nav className="hidden md:flex xl:hidden items-center bg-slate-100/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 p-1 rounded-2xl shadow-inner space-x-0.5">
            {NAV_LINKS.slice(0, 6).map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const isPortal = link.isPortal;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    isPortal
                      ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-400/40 shadow-xs'
                      : isActive
                        ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isPortal ? 'text-cyan-400 animate-spin-slow' : isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons Cluster */}
          <div className="hidden md:flex items-center gap-2">
            
            {/* Theme Toggle Glass Button */}
            <div className="p-0.5 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>

            {/* Saved Careers Cosmic Pill Button */}
            <Link
              href="/dashboard#saved"
              className="relative inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-400/40 shadow-2xs hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300 group"
              title="View your saved careers dossier"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.5 bg-amber-400 text-slate-950 text-[10px] font-extrabold rounded-full shadow-[0_0_8px_#fbbf24]">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* Assessment CTA Cosmic Button */}
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-[0_0_18px_rgba(251,191,36,0.3)] hover:shadow-[0_0_24px_rgba(251,191,36,0.5)] hover:scale-103 transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Assessment</span>
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-1.5">
            <ThemeToggle />

            <Link
              href="/dashboard#saved"
              className="relative p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700"
              aria-label="Saved careers"
            >
              <Bookmark className="w-4 h-4 text-amber-500" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[10px] font-extrabold rounded-full flex items-center justify-center shadow">
                  {savedCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Futuristic Terminal) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-cyan-500/20 bg-white/95 dark:bg-[#070C18]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const isPortal = link.isPortal;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isPortal
                      ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-400/40 shadow-xs'
                      : isActive
                        ? 'bg-slate-900 dark:bg-brand-600 text-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isPortal ? 'text-cyan-400' : isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <Link
              href="/assessment"
              className="w-full text-center py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Start Free Assessment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
