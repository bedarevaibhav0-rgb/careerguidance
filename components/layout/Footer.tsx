import React from 'react';
import Link from 'next/link';
import { Orbit, ShieldCheck, Mail, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#070B14]/90 backdrop-blur-md text-slate-300 border-t border-slate-800 dark:border-slate-800/80 pt-14 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Orbit className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Career<span className="text-amber-400">Orbit</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              An independent, student-first educational directory helping secondary and collegiate learners explore verified career pathways, education milestones, entrance exams, and realistic skill requirements.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Educational Reference • No Sponsored Placements</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Explore Paths
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/careers?category=Computer+Science+%26+IT" className="text-slate-400 hover:text-white transition-colors">
                  Computer Science & IT
                </Link>
              </li>
              <li>
                <Link href="/careers?category=Engineering" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Disciplines
                </Link>
              </li>
              <li>
                <Link href="/careers?category=Medicine+%26+Healthcare" className="text-slate-400 hover:text-white transition-colors">
                  Medicine & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/careers?category=Finance" className="text-slate-400 hover:text-white transition-colors">
                  Finance & Banking
                </Link>
              </li>
              <li>
                <Link href="/careers?category=Law" className="text-slate-400 hover:text-white transition-colors">
                  Law & Judicial Services
                </Link>
              </li>
              <li>
                <Link href="/careers?category=Government+Services" className="text-slate-400 hover:text-white transition-colors">
                  Civil Services & Defence
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Interactive Tools
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/documents" className="text-slate-400 hover:text-white transition-colors">
                  Admission Documents Checklist
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-slate-400 hover:text-white transition-colors">
                  Career Aptitude Assessment
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="text-slate-400 hover:text-white transition-colors">
                  Visual Career Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-slate-400 hover:text-white transition-colors">
                  Career Comparison Tool
                </Link>
              </li>
              <li>
                <Link href="/guidance" className="text-slate-400 hover:text-white transition-colors">
                  Guidance Counselor
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidance Helpline */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Advisory Integrity
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All salary numbers, entrance exams, and course durations are aggregated from national accreditation bodies and verified educational standards.
            </p>
            <div className="pt-2">
              <Link 
                href="/guidance" 
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Ask our Educational Advisor</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} CareerOrbit Educational Foundation. Built for students, educators, and counselors.
          </p>
          <p className="max-w-md text-center md:text-right">
            Disclaimer: Salary ranges and entrance cutoffs reflect typical historical ranges and are not guarantees of future employment.
          </p>
        </div>
      </div>
    </footer>
  );
}
