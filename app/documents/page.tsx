'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  FileCheck, 
  Search, 
  Printer, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Download,
  Filter,
  Info,
  ExternalLink,
  RotateCcw
} from 'lucide-react';
import { CAREERS } from '@/lib/careers-data';
import { 
  ADMISSION_DOCUMENTS, 
  ADMISSION_CATEGORIES, 
  ADMISSION_VERIFICATION_TIPS,
  AdmissionDoc 
} from '@/lib/admission-documents-data';

function DocumentsContent() {
  const searchParams = useSearchParams();
  const careerParam = searchParams.get('career') || 'all';

  const [selectedCareer, setSelectedCareer] = useState<string>(careerParam);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collectedDocs, setCollectedDocs] = useState<string[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  // Load collected documents checklist from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('careerorbit_collected_documents');
      if (saved) {
        setCollectedDocs(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Sync career from URL query param
  useEffect(() => {
    if (careerParam) {
      setSelectedCareer(careerParam);
    }
  }, [careerParam]);

  // Toggle checklist item
  const toggleDocument = (id: string) => {
    const updated = collectedDocs.includes(id)
      ? collectedDocs.filter(item => item !== id)
      : [...collectedDocs, id];
    
    setCollectedDocs(updated);
    try {
      localStorage.setItem('careerorbit_collected_documents', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetChecklist = () => {
    if (confirm('Are you sure you want to reset your saved document checklist?')) {
      setCollectedDocs([]);
      localStorage.removeItem('careerorbit_collected_documents');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Filtered documents calculation
  const filteredDocuments = useMemo(() => {
    return ADMISSION_DOCUMENTS.filter((doc) => {
      // 1. Career filter
      const matchesCareer =
        selectedCareer === 'all' ||
        doc.applicableCareers.includes('all') ||
        doc.applicableCareers.includes(selectedCareer);

      // 2. Category filter
      const matchesCategory =
        selectedCategory === 'all' || doc.category === selectedCategory;

      // 3. Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        (doc.hindiTitle && doc.hindiTitle.toLowerCase().includes(q)) ||
        doc.purpose.toLowerCase().includes(q) ||
        doc.issuingAuthority.toLowerCase().includes(q) ||
        doc.criticalTip.toLowerCase().includes(q);

      return matchesCareer && matchesCategory && matchesSearch;
    });
  }, [selectedCareer, selectedCategory, searchQuery]);

  // Readiness stats
  const totalCount = filteredDocuments.length;
  const gatheredCount = filteredDocuments.filter(d => collectedDocs.includes(d.id)).length;
  const readinessPercent = totalCount > 0 ? Math.round((gatheredCount / totalCount) * 100) : 0;

  const currentCareerObj = CAREERS.find(c => c.id === selectedCareer);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Top Header Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950/60 text-brand-900 dark:text-brand-300 text-xs font-semibold border border-brand-200 dark:border-brand-800">
          <FileCheck className="w-3.5 h-3.5 text-brand-700 dark:text-brand-400" />
          <span>Admission & Counseling Verification Dossier</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Admission Documents Portal
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Complete, verified documentation requirements for university admissions, entrance counseling (JoSAA, NEET/MCC, CLAT, UPSC, DGCA, etc.), quota verification, and physical reporting across all major career pathways.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all"
              title="Print checklist for counseling day"
            >
              <Printer className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Print Checklist</span>
            </button>
            
            {collectedDocs.length > 0 && (
              <button
                onClick={handleResetChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
                title="Reset marked documents"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Readiness Progress Bar Card */}
      <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm backdrop-blur-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                My Admission Readiness Score
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Check off the certificates you have gathered to track your preparation for physical reporting.
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-brand-900 dark:text-brand-300">
              {readinessPercent}%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              ({gatheredCount} of {totalCount} collected)
            </span>
          </div>
        </div>

        {/* Progress Track */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-200 dark:border-slate-700">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              readinessPercent >= 80 
                ? 'bg-emerald-500 dark:bg-emerald-400' 
                : readinessPercent >= 40 
                ? 'bg-amber-500 dark:bg-amber-400' 
                : 'bg-brand-600 dark:bg-brand-500'
            }`}
            style={{ width: `${readinessPercent}%` }}
          />
        </div>

        {selectedCareer !== 'all' && currentCareerObj && (
          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
            <span>
              Target Discipline: <strong className="text-slate-900 dark:text-slate-200">{currentCareerObj.title}</strong> ({currentCareerObj.category})
            </span>
            <Link
              href={`/careers/${currentCareerObj.id}`}
              className="text-brand-900 dark:text-brand-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>View Career Blueprint</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Career Selector Dropdown */}
        <div className="md:col-span-4 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Select Career Pathway</span>
          </label>
          <select
            value={selectedCareer}
            onChange={(e) => setSelectedCareer(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          >
            <option value="all">⭐ Universal / All Careers (सामान्य दस्तावेज़)</option>
            <optgroup label="Engineering & Technology">
              <option value="software-engineer">Software Engineer (B.Tech CSE / IT)</option>
              <option value="civil-engineer">Civil Engineer (B.Tech Civil)</option>
              <option value="electrical-engineer">Electrical Engineer (B.Tech Electrical)</option>
              <option value="mechanical-engineer">Mechanical Engineer (B.Tech Mechanical)</option>
              <option value="data-scientist">Data Scientist / AI Engineer</option>
            </optgroup>
            <optgroup label="Medical & Healthcare">
              <option value="doctor">Medical Doctor (MBBS / BDS / AIIMS)</option>
              <option value="pharmacist">Pharmacist (B.Pharm / Pharm.D)</option>
              <option value="clinical-psychologist">Clinical Psychologist (B.Sc / M.Sc Psychology)</option>
            </optgroup>
            <optgroup label="Aviation & Defence">
              <option value="pilot">Commercial Pilot (CPL / DGCA Flight School)</option>
              <option value="defense-officer">Defence Officer (NDA / CDS / Armed Forces)</option>
            </optgroup>
            <optgroup label="Law & Administration">
              <option value="lawyer">Corporate Lawyer / Advocate (BA LLB - NLUs)</option>
              <option value="government-officer">Civil Services / IAS Officer (UPSC DAF)</option>
            </optgroup>
            <optgroup label="Commerce, Finance & Design">
              <option value="chartered-accountant">Chartered Accountant (ICAI)</option>
              <option value="financial-analyst">Financial Analyst / Investment Banker</option>
              <option value="graphic-designer">Graphic / UI/UX Designer (NID / NIFT)</option>
            </optgroup>
          </select>
        </div>

        {/* Category Filter */}
        <div className="md:col-span-4 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Document Classification</span>
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          >
            {ADMISSION_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="md:col-span-4 space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Search Certificate or Keyword</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. 'caste', 'migration', 'gap affidavit', 'pilot'..."
              className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>
          Showing <strong>{filteredDocuments.length}</strong> required documents
          {selectedCareer !== 'all' && currentCareerObj && ` for ${currentCareerObj.title}`}
        </span>
        <span className="text-[11px] italic">
          💡 Click the checkbox on any card to mark it as gathered
        </span>
      </div>

      {/* Document Cards Grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredDocuments.map((doc) => {
            const isGathered = collectedDocs.includes(doc.id);
            return (
              <div
                key={doc.id}
                onClick={() => toggleDocument(doc.id)}
                className={`cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between space-y-4 backdrop-blur-sm ${
                  isGathered
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 shadow-sm'
                    : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-subtle'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Bar with Badge & Checkbox */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                          doc.mandatoryLevel === 'Compulsory'
                            ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50'
                            : doc.mandatoryLevel === 'Conditional / Quota'
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50'
                            : 'bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-400 border border-brand-200 dark:border-brand-900/50'
                        }`}
                      >
                        {doc.mandatoryLevel}
                      </span>
                      {doc.category === 'career_specific' && (
                        <span className="text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50 px-2 py-0.5 rounded">
                          Discipline Specific
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDocument(doc.id);
                      }}
                      className="shrink-0 p-1 hover:scale-110 transition-transform"
                      title={isGathered ? 'Mark as not gathered' : 'Mark as gathered'}
                    >
                      {isGathered ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950/50" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600 hover:text-slate-400" />
                      )}
                    </button>
                  </div>

                  {/* Title & Hindi Title */}
                  <div>
                    <h3
                      className={`text-base font-bold transition-colors ${
                        isGathered
                          ? 'text-emerald-950 dark:text-emerald-200 line-through decoration-emerald-500/50'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {doc.title}
                    </h3>
                    {doc.hindiTitle && (
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {doc.hindiTitle}
                      </p>
                    )}
                  </div>

                  {/* Purpose */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.purpose}
                  </p>

                  {/* Authority & Format Grid */}
                  <div className="grid grid-cols-1 gap-2 pt-2 text-[11px] text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        Issuing Authority:
                      </span>{' '}
                      {doc.issuingAuthority}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        Required Copies & Format:
                      </span>{' '}
                      <span className="text-brand-900 dark:text-brand-300 font-medium">
                        {doc.formatRequired}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Critical Counselor Tip Box */}
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">Pro Tip: </strong>
                    {doc.criticalTip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">No Matching Documents Found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or reset the career filter to view all universal admission documents.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedCareer('all');
            }}
            className="px-4 py-2 bg-brand-900 dark:bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-800 shadow-sm"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Verification Rules & Counselor Guidance Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-brand-300 text-xs font-semibold backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Essential Counseling Advice</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Golden Rules of Document Verification
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Counseling cells at IITs, NITs, Medical Boards, and National Law Universities operate under zero-tolerance verification mandates. Review these vital points to avoid sudden disqualification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 pt-2">
          {ADMISSION_VERIFICATION_TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 backdrop-blur-sm"
            >
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <span>0{idx + 1}.</span>
                <span>{tip.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
          <span>Need help resolving a document discrepancy? Ask our Academic Counselor.</span>
          <Link
            href="/guidance?query=What+documents+do+I+need+if+there+is+a+spelling+difference+in+my+marksheet%3F"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-300 hover:text-white"
          >
            <span>Ask Counselor Advisor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default function AdmissionDocumentsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-slate-500">Loading Admission Documents Portal...</div>}>
      <DocumentsContent />
    </Suspense>
  );
}
