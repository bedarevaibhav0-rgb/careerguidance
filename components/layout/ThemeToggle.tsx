'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current theme from document class or localStorage
    const isDark = document.documentElement.classList.contains('dark') || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.getItem('theme') === 'dark';

    if (isDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Dispatch event so any custom canvas/background or components can react
    window.dispatchEvent(new Event('theme-change'));
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={`p-2 rounded-lg text-slate-400 border border-transparent ${className}`}
      >
        <span className="w-5 h-5 block" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
        isDark 
          ? 'bg-slate-800/90 text-amber-300 border border-slate-700/80 hover:bg-slate-700 hover:text-amber-200 shadow-inner' 
          : 'bg-slate-100/90 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 shadow-subtle'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun
          className={`w-5 h-5 text-amber-500 transition-all duration-500 absolute ${
            isDark 
              ? 'opacity-0 rotate-90 scale-50' 
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`w-4 h-4 text-amber-300 transition-all duration-500 absolute ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
      </div>

      {showLabel && (
        <span className="text-xs font-semibold tracking-wide">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}

      {/* Subtle indicator ring on hover */}
      <span className={`sr-only`}>
        {isDark ? 'Current theme: Dark' : 'Current theme: Light'}
      </span>
    </button>
  );
}
