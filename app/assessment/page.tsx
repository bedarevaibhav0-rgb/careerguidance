'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckSquare, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  Printer, 
  Bookmark, 
  GraduationCap, 
  Briefcase, 
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { ASSESSMENT_QUESTIONS, calculateAssessmentResults } from '@/lib/assessment';
import { saveAssessmentResult, getLatestAssessmentResult } from '@/lib/storage';
import { AssessmentResultItem } from '@/types';

export default function AssessmentPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResultItem[] | null>(null);
  const [savedToProfile, setSavedToProfile] = useState(false);

  // Load previous result if available
  useEffect(() => {
    const existing = getLatestAssessmentResult();
    if (existing && existing.results && existing.results.length > 0) {
      // Allow user to see previous result or retake
    }
  }, []);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStepIndex];
  const isLastQuestion = currentStepIndex === totalQuestions - 1;
  const isCurrentAnswered = selectedAnswers[currentQuestion.id] !== undefined;

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (!isCurrentAnswered) return;
    if (isLastQuestion) {
      // Calculate results
      const results = calculateAssessmentResults(selectedAnswers);
      setAssessmentResults(results);
      saveAssessmentResult(results);
      setSavedToProfile(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentStepIndex(0);
    setAssessmentResults(null);
    setSavedToProfile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  // If results are calculated, show the professional evaluation report
  if (assessmentResults && assessmentResults.length > 0) {
    const topCareer = assessmentResults[0];
    const secondaryCareers = assessmentResults.slice(1, 4);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 print-page">
        
        {/* Report Actions Toolbar (Hidden on print) */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <Link 
            href="/careers" 
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Career Explorer</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Assessment</span>
            </button>
          </div>
        </div>

        {/* Professional Assessment Report Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1">
                Confidential Educational Evaluation
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Career Aptitude Assessment Report
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Generated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • Candidate Aptitude Profile
              </p>
            </div>

            <div className="shrink-0 text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-md">
                Deterministic Multi-Trait Scoring
              </span>
            </div>
          </div>

          {/* Primary Top Match Highlight Card */}
          <div className="bg-gradient-to-br from-brand-900 to-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-elevated">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Primary Recommendation
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  {topCareer.careerTitle}
                </h2>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Discipline: {topCareer.category}
                </div>
              </div>

              <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15 min-w-[110px]">
                <div className="text-3xl sm:text-4xl font-black text-amber-400">
                  {topCareer.matchPercentage}%
                </div>
                <div className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Match Index
                </div>
              </div>
            </div>

            {/* Why it matches */}
            <div className="pt-4 border-t border-white/15 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Why This Career Matches Your Profile:
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                {topCareer.matchReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Career CTA */}
            <div className="pt-2 no-print flex flex-wrap items-center gap-3">
              <Link
                href={`/careers/${topCareer.careerId}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow transition-colors"
              >
                <span>View Complete Pathway & Requirements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={`/roadmaps?career=${topCareer.careerId}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <span>View Milestone Roadmap</span>
              </Link>
            </div>

          </div>

          {/* Suggested Education Path & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-brand-800" />
                <span>Suggested Education Pathway</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {topCareer.suggestedEducationPath}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Aim for relevant secondary school stream preparation and plan for designated qualifying entrance examinations.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-brand-800" />
                <span>Priority Skills to Develop</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {topCareer.skillsToDevelop.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white text-slate-800 border border-slate-200 px-2.5 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Actionable Next Steps */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Recommended Next Action Steps
            </h3>
            <div className="space-y-2">
              {topCareer.nextSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-900 font-bold text-xs flex items-center justify-center shrink-0 border border-brand-200">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Secondary Matched Pathways */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Alternative High-Compatibility Careers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryCareers.map((sec) => (
              <div
                key={sec.careerId}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase">
                      {sec.category}
                    </span>
                    <span className="text-xs font-extrabold text-brand-800 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                      {sec.matchPercentage}% Match
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {sec.careerTitle}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {sec.matchReasons[0]}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/careers/${sec.careerId}`}
                    className="font-bold text-brand-900 hover:text-brand-700 inline-flex items-center gap-1"
                  >
                    <span>View Pathway</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href={`/compare?careers=${topCareer.careerId},${sec.careerId}`}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    Compare
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisor Help Box */}
        <div className="no-print bg-slate-100 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold text-slate-900">
              Need personalized interpretation of your results?
            </h3>
            <p className="text-xs text-slate-600">
              Our guidance counselor can answer specific questions about choosing between your top matches.
            </p>
          </div>
          <Link
            href={`/guidance?query=I took the assessment and matched with ${topCareer.careerTitle}. What should be my next step?`}
            className="shrink-0 bg-brand-900 text-white hover:bg-brand-800 font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            Ask Guidance Counselor
          </Link>
        </div>

      </div>
    );
  }

  // Questionnaire Flow
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Assessment Introduction Header */}
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-900 text-xs font-semibold border border-brand-200">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Professional Aptitude Evaluation</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Career Fit Assessment
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Answer 8 core dimensions regarding your academic preferences, thinking style, stress tolerance, and long-term values.
        </p>
      </div>

      {/* Progress Bar & Counter */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-subtle space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
          <span>
            Question {currentStepIndex + 1} of {totalQuestions}
          </span>
          <span className="text-brand-900">
            Dimension: {currentQuestion.dimension}
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
          <div
            className="bg-brand-900 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentStepIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {currentQuestion.question}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {currentQuestion.subtitle}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentQuestion.id] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'border-brand-900 bg-brand-50/60 ring-2 ring-brand-900/20 shadow-subtle'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                {/* Radio Indicator */}
                <div className={`w-5 h-5 rounded-full border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                  isSelected
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-slate-300 bg-white'
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>

                <div className="space-y-0.5">
                  <div className={`text-sm font-bold ${isSelected ? 'text-brand-950' : 'text-slate-900'}`}>
                    {option.label}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStepIndex === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              currentStepIndex === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentAnswered}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
              isCurrentAnswered
                ? 'bg-brand-900 hover:bg-brand-800 text-white cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>{isLastQuestion ? 'Generate Assessment Report' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
