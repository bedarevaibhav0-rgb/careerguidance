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
  FileCheck
} from 'lucide-react';
import { getSavedCareerIds } from '@/lib/storage';
import ThemeToggle from '@/components/layout/ThemeToggle';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Orbit },
  { href: '/careers', label: 'Explore Careers', icon: BookOpen },
  { href: '/documents', label: 'Admission Docs', icon: FileCheck },
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
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#0B1120]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-900 dark:bg-brand-950 dark:border dark:border-brand-700/50 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Orbit className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-slate-900 dark:text-white tracking-tight">
                Career<span className="text-brand-600 dark:text-brand-400">Orbit</span>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Higher Education & Career Directory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-brand-300 font-semibold border-b-2 border-brand-900 dark:border-brand-400 rounded-b-none'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-900 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA, Saved Careers & ThemeToggle */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />

            <Link
              href="/dashboard#saved"
              className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700/80 transition-colors"
              title="View your saved careers"
            >
              <Bookmark className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Saved</span>
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-brand-900 dark:bg-brand-600 text-white text-xs font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </Link>

            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-brand-900 dark:bg-brand-600 hover:bg-brand-800 dark:hover:bg-brand-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Theme Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <ThemeToggle />

            <Link
              href="/dashboard#saved"
              className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              aria-label="Saved careers"
            >
              <Bookmark className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-brand-900 dark:bg-brand-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:text-brand-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-900"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? 'bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-brand-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-brand-900 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <Link
              href="/assessment"
              className="w-full text-center py-2.5 px-4 rounded-lg font-semibold text-white bg-brand-900 dark:bg-brand-600 hover:bg-brand-800 dark:hover:bg-brand-500 shadow-sm"
            >
              Take Free Assessment
            </Link>
            <Link
              href="/careers"
              className="w-full text-center py-2 px-4 rounded-lg font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Browse All 20 Careers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
