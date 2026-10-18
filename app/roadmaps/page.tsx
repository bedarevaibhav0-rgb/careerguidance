'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  GitFork, 
  CheckCircle, 
  Circle, 
  ArrowRight, 
  Calendar, 
  AlertCircle, 
  Sparkles, 
  BookOpen, 
  Bookmark,
  ChevronDown
} from 'lucide-react';
import { CAREERS } from '@/lib/careers-data';
import { getRoadmapCompletedSteps, toggleRoadmapStep } from '@/lib/storage';

function RoadmapContent() {
  const searchParams = useSearchParams();
  const initialCareerParam = searchParams.get('career') || 'software-engineer';
  
  const [selectedCareerId, setSelectedCareerId] = useState(initialCareerParam);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const selectedCareer = CAREERS.find(c => c.id === selectedCareerId) || CAREERS[0];

  useEffect(() => {
    const c = searchParams.get('career');
    if (c && CAREERS.some(item => item.id === c)) {
      setSelectedCareerId(c);
    }
  }, [searchParams]);

  useEffect(() => {
    setCompletedSteps(getRoadmapCompletedSteps(selectedCareer.id));
  }, [selectedCareer.id]);

  const handleStepToggle = (stepNumber: number) => {
    const updated = toggleRoadmapStep(selectedCareer.id, stepNumber);
    setCompletedSteps([...updated]);
  };

  const progressPercentage = Math.round(
    (completedSteps.length / selectedCareer.educationPathway.length) * 100
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header & Career Switcher */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-brand-300 text-xs font-semibold border border-brand-200 dark:border-brand-700/50">
            <GitFork className="w-3.5 h-3.5" />
            <span>Interactive Visual Milestone Roadmaps</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Career Pathway Roadmaps
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Track stage-by-stage academic and professional milestones from 10th standard through college, qualifying exams, practical projects, and career specialization.
          </p>
        </div>

        {/* Career Selector Bar */}
        <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-80">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1.5">
              Select Career Roadmap:
            </label>
            <div className="relative">
              <select
                value={selectedCareer.id}
                onChange={(e) => setSelectedCareerId(e.target.value)}
                className="w-full py-2.5 pl-3 pr-8 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer"
              >
                {CAREERS.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.category})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Progress Tracker Card */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Your Progress</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {completedSteps.length} of {selectedCareer.educationPathway.length} Milestones Done
              </div>
            </div>

            <div className="w-24 sm:w-32 bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-200 dark:border-slate-700">
              <div 
                className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

      </div>

      {/* Selected Career Overview Banner */}
      <div className="bg-slate-900 dark:bg-[#0B1426] border border-slate-800 dark:border-brand-700/40 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-semibold">
            <span>{selectedCareer.category}</span>
            <span>•</span>
            <span>{selectedCareer.minYearsStudy}+ Years Minimum Study</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Roadmap to Becoming a {selectedCareer.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {selectedCareer.shortIntro}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <Link
            href={`/careers/${selectedCareer.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow"
          >
            <span>View Full Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Visual Step-by-Step Clean Timeline */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Chronological Pathway Stages
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Click checkbox to mark milestone as completed
          </span>
        </div>

        <div className="space-y-4">
          {selectedCareer.educationPathway.map((step) => {
            const isCompleted = completedSteps.includes(step.stepNumber);
            return (
              <div
                key={step.stepNumber}
                className={`bg-white/90 dark:bg-slate-900/85 backdrop-blur-sm rounded-2xl border transition-all p-5 sm:p-6 ${
                  isCompleted 
                    ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/20 dark:bg-emerald-950/20 shadow-subtle' 
                    : 'border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  
                  {/* Checkbox Trigger */}
                  <button
                    onClick={() => handleStepToggle(step.stepNumber)}
                    className="mt-0.5 p-1 text-slate-400 dark:text-slate-500 hover:text-emerald-500 focus:outline-none transition-colors"
                    title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-slate-400" />
                    )}
                  </button>

                  {/* Stage Info */}
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-900 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/80 px-2.5 py-0.5 rounded border border-brand-200 dark:border-brand-700/60">
                          Step {step.stepNumber}: {step.stage}
                        </span>
                      </div>
                      
                      {step.criticalMilestone && (
                        <span className="text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 px-2.5 py-0.5 rounded-full">
                          Target: {step.criticalMilestone}
                        </span>
                      )}
                    </div>

                    <h4 className={`text-base sm:text-lg font-bold ${isCompleted ? 'text-emerald-700 dark:text-emerald-400 line-through' : 'text-slate-900 dark:text-white'}`}>
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Practical Action Tips & Entrance Exam Warning Box */}
      <div className="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-brand-700 dark:text-brand-400" />
          <span>Counselor Advice on Following This Roadmap</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Career roadmaps provide a proven compass, not a rigid cage. Many accomplished {selectedCareer.title.toLowerCase()}s transitioned from non-traditional academic backgrounds or discovered their passion later in college. Focus heavily on mastering core conceptual fundamentals during steps 1 and 2, as entrance tests and early internships build heavily on foundational logic.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-brand-900 dark:text-brand-400">
          <Link href="/assessment" className="hover:underline flex items-center gap-1">
            <span>Verify your aptitude match for this career</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span>•</span>
          <Link href="/compare" className="hover:underline flex items-center gap-1">
            <span>Compare this career with alternatives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function RoadmapsPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-16 text-center text-slate-500">Loading Roadmaps...</div>}>
      <RoadmapContent />
    </Suspense>
  );
}
