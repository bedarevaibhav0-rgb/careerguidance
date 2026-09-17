'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { 
  Bookmark, 
  Scale, 
  Share2, 
  GraduationCap, 
  Clock, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  BookOpen,
  Building,
  DollarSign,
  HelpCircle,
  Award,
  ShieldCheck,
  Flame,
  Layers
} from 'lucide-react';
import { CAREERS } from '@/lib/careers-data';
import { 
  isCareerSaved, 
  toggleSaveCareer, 
  toggleCompareCareer, 
  getComparedCareerIds, 
  addRecentCareer 
} from '@/lib/storage';
import CompareDrawer from '@/components/careers/CompareDrawer';

export default function CareerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const careerId = params?.id as string;

  const career = CAREERS.find(c => c.id === careerId);

  const [saved, setSaved] = useState(false);
  const [compared, setCompared] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [compareTrigger, setCompareTrigger] = useState(0);

  useEffect(() => {
    if (career) {
      addRecentCareer(career.id);
      setSaved(isCareerSaved(career.id));
      const comparedList = getComparedCareerIds();
      setCompared(comparedList.includes(career.id));
    }
  }, [career]);

  if (!career) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Career Profile Not Found</h1>
        <p className="text-slate-500">The career you are looking for does not exist in our directory.</p>
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-900 text-white font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </Link>
      </div>
    );
  }

  const handleSave = () => {
    const isNowSaved = toggleSaveCareer(career.id);
    setSaved(isNowSaved);
  };

  const handleCompare = () => {
    const res = toggleCompareCareer(career.id);
    if (!res.success && res.message) {
      alert(res.message);
    } else {
      const comparedList = getComparedCareerIds();
      setCompared(comparedList.includes(career.id));
      setCompareTrigger(prev => prev + 1);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="pb-24">
      
      {/* 1. BREADCRUMBS & TOP NAV */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center text-xs text-slate-500 space-x-2">
            <Link href="/" className="hover:text-brand-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/careers" className="hover:text-brand-900 transition-colors">Explore Careers</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">{career.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. CAREER HERO BANNER */}
      <section className="bg-gradient-to-b from-brand-50/40 via-white to-white border-b border-slate-200 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Info */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-brand-900 text-white shadow-sm">
                  {career.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {career.growthRate}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {career.workStyle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {career.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {career.shortIntro}
              </p>

              {/* Action Toolbar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleSave}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                    saved
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
                  <span>{saved ? 'Saved in Profile' : 'Save Career'}</span>
                </button>

                <button
                  onClick={handleCompare}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                    compared
                      ? 'bg-brand-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Scale className="w-4 h-4" />
                  <span>{compared ? 'In Comparison Bar' : 'Compare Career'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm"
                  title="Copy direct link"
                >
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

            </div>

            {/* Hero Image */}
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden shadow-card border border-slate-200 aspect-[4/3] relative bg-slate-100">
                <img
                  src={career.heroImage}
                  alt={`Real workplace setting for ${career.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-medium">
                  Verified Industry Discipline
                </div>
              </div>
            </div>

          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/80">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-700" />
                <span>Min. Education</span>
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1 truncate" title={career.educationRequired}>
                {career.educationRequired.split('(')[0]}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-700" />
                <span>Training Duration</span>
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {career.minYearsStudy}+ Years Post-12th
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-brand-700" />
                <span>Starting Compensation</span>
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1 truncate" title={career.salary.entry}>
                {career.salary.entry.split('(')[0]}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-brand-700" />
                <span>Stress Profile</span>
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {career.stressLevel} Intensity
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN CONTENT: 2-COLUMN EDITORIAL LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & What It Involves */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-800" />
                <span>What This Career Involves</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {career.overview}
              </p>
              
              {/* Daily Routine Callout */}
              <div className="bg-slate-50 border-l-4 border-brand-900 p-4 sm:p-5 rounded-r-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-900 mb-1">
                  A Realistic Day in the Life
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{career.dailyRoutine}&rdquo;
                </p>
              </div>
            </section>

            {/* Core Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Typical Responsibilities
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3">
                {career.coreResponsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Visual Education Pathway Timeline */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-800" />
                  <span>Education & Career Pathway</span>
                </h2>
                <Link 
                  href={`/roadmaps?career=${career.id}`} 
                  className="text-xs font-bold text-brand-900 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  <span>Interactive Roadmap</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                  {career.educationPathway.map((step) => (
                    <div key={step.stepNumber} className="relative">
                      {/* Step Number Dot */}
                      <div className="absolute -left-[30px] sm:-left-[38px] top-0.5 w-6 h-6 rounded-full bg-brand-900 text-white text-xs font-bold flex items-center justify-center ring-4 ring-white">
                        {step.stepNumber}
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                            {step.stage}
                          </span>
                          {step.criticalMilestone && (
                            <span className="text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                              Key Milestone: {step.criticalMilestone}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Important Subjects Table */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Important Subjects by Stage
              </h2>
              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Stage</th>
                      <th className="py-3 px-4">Essential Subjects & Topics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top whitespace-nowrap">
                        10th Standard
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {career.importantSubjects.highSchool.join(', ')}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top whitespace-nowrap">
                        10+2 / Secondary
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {career.importantSubjects.higherSecondary.join(', ')}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top whitespace-nowrap">
                        Undergraduate
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {career.importantSubjects.undergraduate.join(', ')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Technical vs Soft Skills (2-Column Distinction) */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Required Skill Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Technical Skills */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-700"></span>
                    <span>Technical & Specialized Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {career.technicalSkills.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-50/70 text-brand-900 border border-brand-200 px-2.5 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    <span>Essential Transferable Soft Skills</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {career.softSkills.map((soft, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-50 text-amber-900 border border-amber-200/80 px-2.5 py-1 rounded text-xs font-medium"
                      >
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* Entrance Examinations Table */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Key Qualifying & Entrance Exams
              </h2>
              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Exam Name</th>
                      <th className="py-3 px-4">Scope</th>
                      <th className="py-3 px-4">Eligibility</th>
                      <th className="py-3 px-4">Target Institutions / Courses</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {career.entranceExams.map((exam, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60">
                        <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                          {exam.name}
                        </td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-600 whitespace-nowrap">
                          <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {exam.level}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">
                          {exam.eligibility}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 text-xs">
                          {exam.targetCourses}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Career Growth Ladder & Realistic Salary Tiers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Career Progression Ladder
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                {career.growthLadder.map((stage, idx) => (
                  <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-900 font-bold text-xs flex items-center justify-center border border-brand-200">
                          {idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {stage.stageName}
                        </h4>
                      </div>
                      <div className="text-xs font-medium text-slate-500 pl-8">
                        Typical Role: <strong className="text-slate-800">{stage.typicalDesignation}</strong>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 pl-8 pt-1 leading-relaxed">
                        {stage.focus}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0 pl-8 sm:pl-0">
                      <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded">
                        {stage.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Courses & Higher Education */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Recommended Courses & Advanced Degrees
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Online Courses & Certifications
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {career.recommendedCourses.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Higher Education Opportunities
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {career.higherEducation.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-700 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

            {/* Scannable FAQs Accordion */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-800" />
                <span>Frequently Asked Questions</span>
              </h2>
              
              <div className="space-y-3">
                {career.faqs.map((faq, idx) => {
                  const isOpen = activeFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-brand-900 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-90 text-brand-900' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* RIGHT STICKY SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Salary Breakdown Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    Salary Progression
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {career.salary.currency}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Entry Level (0-2 Yrs):</span>
                    <span className="font-bold text-slate-900 text-right">{career.salary.entry}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-50">
                    <span className="text-slate-500">Mid-Career (3-7 Yrs):</span>
                    <span className="font-bold text-slate-900 text-right">{career.salary.mid}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-t border-slate-50">
                    <span className="text-slate-500">Senior Level (8+ Yrs):</span>
                    <span className="font-bold text-slate-900 text-right">{career.salary.senior}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 italic leading-snug">
                  * Based on national averages in private & public sectors. Compensation varies by Tier-1 cities, specialized skills, and institution tier.
                </div>
              </div>

              {/* Work Life & Setting Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-sm text-xs">
                <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Work Environment & Balance
                </h3>
                
                <div>
                  <span className="text-slate-500 block mb-1">Work Setting:</span>
                  <p className="text-slate-800 font-medium">{career.workEnvironment}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-500 block mb-1">Work-Life Balance Outlook:</span>
                  <p className="text-slate-800">{career.workLifeBalance}</p>
                </div>
              </div>

              {/* Related Roles & Industries */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-sm text-xs">
                <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
                  Related Job Designations
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {career.jobRoles.map((role, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-medium">
                      {role}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-slate-500 block mb-2 font-semibold">Top Hiring Sectors:</span>
                  <ul className="space-y-1 text-slate-700">
                    {career.industries.map((ind, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Counselor Help CTA */}
              <div className="bg-brand-900 text-white rounded-xl p-5 space-y-3 shadow-sm">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Need Personalized Advice?
                </div>
                <h4 className="text-sm font-bold leading-snug">
                  Ask our advisor specific questions about {career.title}
                </h4>
                <p className="text-xs text-slate-300">
                  Ask regarding eligibility, degree choices, or comparing with alternative careers.
                </p>
                <Link
                  href={`/guidance?query=What should I study to become a ${encodeURIComponent(career.title)}?`}
                  className="block w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2 rounded-lg text-xs shadow transition-colors"
                >
                  Ask Counselor About {career.title}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      <CompareDrawer key={compareTrigger} />

    </div>
  );
}
