'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Bookmark, 
  CheckSquare, 
  GitFork, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Trash2, 
  Scale, 
  BookOpen,
  GraduationCap,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { CAREERS } from '@/lib/careers-data';
import { Career, AssessmentResultItem } from '@/types';
import { 
  getSavedCareerIds, 
  removeSavedCareer, 
  getRecentCareerIds, 
  getLatestAssessmentResult, 
  StoredAssessment,
  getRoadmapCompletedSteps
} from '@/lib/storage';

export default function StudentDashboardPage() {
  const [savedCareers, setSavedCareers] = useState<Career[]>([]);
  const [recentCareers, setRecentCareers] = useState<Career[]>([]);
  const [latestAssessment, setLatestAssessment] = useState<StoredAssessment | null>(null);
  const [activeRoadmapCareer, setActiveRoadmapCareer] = useState<Career | null>(null);
  const [roadmapCompletedCount, setRoadmapCompletedCount] = useState(0);

  const refreshDashboardData = () => {
    // 1. Saved Careers
    const savedIds = getSavedCareerIds();
    const saved = CAREERS.filter(c => savedIds.includes(c.id));
    setSavedCareers(saved);

    // 2. Recent Careers
    const recentIds = getRecentCareerIds();
    const recent = recentIds
      .map(id => CAREERS.find(c => c.id === id))
      .filter((c): c is Career => c !== undefined)
      .slice(0, 4);
    setRecentCareers(recent);

    // 3. Assessment
    const assessment = getLatestAssessmentResult();
    setLatestAssessment(assessment);

    // 4. Active Roadmap (Top saved or top assessed career)
    const primaryCareer = saved[0] || (assessment?.results[0] ? CAREERS.find(c => c.id === assessment.results[0].careerId) : null) || CAREERS[0];
    setActiveRoadmapCareer(primaryCareer);
    if (primaryCareer) {
      const completed = getRoadmapCompletedSteps(primaryCareer.id);
      setRoadmapCompletedCount(completed.length);
    }
  };

  useEffect(() => {
    refreshDashboardData();
    window.addEventListener('local-storage-update', refreshDashboardData);
    window.addEventListener('storage', refreshDashboardData);
    return () => {
      window.removeEventListener('local-storage-update', refreshDashboardData);
      window.removeEventListener('storage', refreshDashboardData);
    };
  }, []);

  const handleRemoveSaved = (id: string) => {
    removeSavedCareer(id);
    refreshDashboardData();
  };

  // Extract unique suggested skills from saved or top assessed careers
  const suggestedSkills = Array.from(
    new Set([
      ...savedCareers.flatMap(c => c.keySkills),
      ...(latestAssessment?.results[0]?.skillsToDevelop || [])
    ])
  ).slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-900 dark:text-brand-300 text-xs font-semibold border border-brand-200 dark:border-brand-800">
          <LayoutDashboard className="w-3.5 h-3.5" />
          <span>Student Planning Portal</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          My Career Dashboard
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Your saved career options, latest assessment report, active milestone roadmap, and curated skill badges in one organized space.
        </p>
      </div>

      {/* Top 2 Highlight Grid: Assessment Result & Active Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Assessment Card */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4 backdrop-blur-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 dark:text-brand-400 flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                <span>Aptitude Assessment</span>
              </span>
              {latestAssessment && (
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {new Date(latestAssessment.timestamp).toLocaleDateString()}
                </span>
              )}
            </div>

            {latestAssessment && latestAssessment.results.length > 0 ? (
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Top Recommended Discipline:</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {latestAssessment.results[0].careerTitle}
                  </h3>
                  <div className="inline-block mt-1 px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {latestAssessment.results[0].matchPercentage}% Match Index
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {latestAssessment.results[0].matchReasons[0]}
                </p>
              </div>
            ) : (
              <div className="space-y-2 py-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No Assessment Taken Yet
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Take our 8-dimension assessment (~3 minutes) to calculate your top career compatibility scores and personalized roadmap.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
            >
              <span>{latestAssessment ? 'View Full Report' : 'Start Career Assessment'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Current Roadmap Tracker */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4 backdrop-blur-sm">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 dark:text-brand-400 flex items-center gap-1.5">
                <GitFork className="w-4 h-4 text-brand-700 dark:text-brand-400" />
                <span>Active Career Roadmap</span>
              </span>
              {activeRoadmapCareer && (
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {activeRoadmapCareer.category}
                </span>
              )}
            </div>

            {activeRoadmapCareer ? (
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeRoadmapCareer.title} Pathway
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {activeRoadmapCareer.educationRequired.split('(')[0]} • {activeRoadmapCareer.minYearsStudy}+ Years
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                    <span>Milestones Completed</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {roadmapCompletedCount} of {activeRoadmapCareer.educationPathway.length}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div
                      className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full transition-all"
                      style={{
                        width: `${Math.round((roadmapCompletedCount / activeRoadmapCareer.educationPathway.length) * 100)}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2 py-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Select a career to begin tracking milestone progress.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              href={activeRoadmapCareer ? `/roadmaps?career=${activeRoadmapCareer.id}` : '/roadmaps'}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
            >
              <span>Open Roadmap Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Saved Careers Section */}
      <section id="saved" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>My Saved Careers ({savedCareers.length})</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Careers you have bookmarked for in-depth review and comparison.
            </p>
          </div>

          {savedCareers.length >= 2 && (
            <Link
              href={`/compare?careers=${savedCareers.slice(0, 3).map(c => c.id).join(',')}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-900 dark:bg-brand-600 hover:bg-slate-800 dark:hover:bg-brand-500 text-white px-4 py-2 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Saved Careers</span>
            </Link>
          )}
        </div>

        {savedCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedCareers.map((c) => (
              <div
                key={c.id}
                className="bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between space-y-4 shadow-subtle hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-semibold text-brand-800 dark:text-brand-400 uppercase">
                      {c.category}
                    </span>
                    <button
                      onClick={() => handleRemoveSaved(c.id)}
                      className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {c.shortIntro}
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                    Entry Salary: <strong className="text-slate-900 dark:text-slate-200">{c.salary.entry}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/careers/${c.id}`}
                    className="text-brand-900 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/roadmaps?career=${c.id}`}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    Roadmap
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 p-8 text-center space-y-3">
            <Bookmark className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No Careers Saved Yet</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Browse the directory and click the bookmark icon on any career card to save options to your dashboard.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-900 dark:bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-800 dark:hover:bg-brand-500 shadow-sm"
            >
              <span>Explore 20 Careers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </section>

      {/* Suggested Skills & Recently Viewed Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Suggested Skills to Develop */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-subtle backdrop-blur-sm">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Recommended Target Skills</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aggregated skills recommended based on your bookmarked career pathways.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {suggestedSkills.length > 0 ? (
              suggestedSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              CAREERS[0].keySkills.map((s, i) => (
                <span key={i} className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded text-xs">
                  {s}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Recently Viewed Careers */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-subtle backdrop-blur-sm">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Recently Viewed</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Quick access to careers you checked recently.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            {recentCareers.length > 0 ? (
              recentCareers.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/careers/${rc.id}`}
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors group"
                >
                  <div className="truncate pr-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-200 group-hover:text-brand-900 dark:group-hover:text-brand-400 block truncate">
                      {rc.title}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {rc.category}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-brand-900 dark:group-hover:text-brand-400 shrink-0" />
                </Link>
              ))
            ) : (
              <p className="text-xs text-slate-400 dark:text-slate-500 italic">No recent history.</p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
