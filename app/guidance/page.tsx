'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MessageSquareQuote, 
  Send, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  HelpCircle, 
  Compass, 
  Orbit,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { GuidanceResponse } from '@/lib/guidance-engine';

interface ChatMessage {
  id: string;
  sender: 'counselor' | 'student';
  text: string;
  matchedCareers?: {
    id: string;
    title: string;
    category: string;
    shortIntro: string;
  }[];
  followUpSuggestions?: string[];
  timestamp: string;
}

const PRESET_QUESTIONS = [
  'I like mathematics and computers. What careers can I explore?',
  'What should I study to become a software engineer?',
  'I am confused between engineering and management.',
  'How do I become a Civil Services (IAS) officer?',
  'What is the training cost and eligibility for a commercial pilot?',
  'Can I pursue a law career without doing courtroom litigation?'
];

function GuidanceContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query');

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'counselor',
      text: `Hello! I am your Educational & Career Guidance Advisor.

Whether you are deciding which higher secondary stream to pick, choosing an undergraduate degree, or weighing two different career paths, I am here to provide realistic, structured advice based on verified educational requirements and day-to-day career realities.

How can I help you navigate your academic future today?`,
      timestamp: 'Just now',
      followUpSuggestions: [
        'I like mathematics and computers. What careers can I explore?',
        'What should I study to become a software engineer?',
        'I am confused between engineering and management.'
      ]
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Handle URL query parameter pre-population
  useEffect(() => {
    if (queryParam) {
      handleSendMessage(queryParam);
    }
  }, [queryParam]);

  const handleSendMessage = async (queryText: string) => {
    const q = queryText.trim();
    if (!q || loading) return;

    // Add student message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'student',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data: GuidanceResponse = await response.json();

      const counselorMsg: ChatMessage = {
        id: `counselor-${Date.now()}`,
        sender: 'counselor',
        text: data.answer,
        matchedCareers: data.matchedCareers,
        followUpSuggestions: data.followUpSuggestions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, counselorMsg]);
    } catch (err) {
      console.error('Error fetching guidance:', err);
      const errorMsg: ChatMessage = {
        id: `counselor-err-${Date.now()}`,
        sender: 'counselor',
        text: 'I encountered an issue connecting to the guidance engine. Please try asking your question again or choose one of the recommended topics below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        followUpSuggestions: PRESET_QUESTIONS.slice(0, 3)
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetConversation = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'counselor',
        text: `Conversation reset. Feel free to ask another career question or click one of the suggested inquiries below!`,
        timestamp: 'Just now',
        followUpSuggestions: PRESET_QUESTIONS.slice(0, 3)
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 dark:bg-brand-950/70 text-brand-900 dark:text-brand-300 text-xs font-semibold border border-brand-200 dark:border-brand-700/50">
            <Orbit className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Academic Counseling Service</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Personalized Guidance Advisor
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Ask questions regarding course choices, dilemmas between disciplines, and career entry pathways.
          </p>
        </div>

        <button
          onClick={handleResetConversation}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white self-start sm:self-auto py-1.5 px-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Conversation</span>
        </button>
      </div>

      {/* Preset Common Inquiries Chips */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Suggested Inquiries:
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((question, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(question)}
              disabled={loading}
              className="text-left text-xs font-medium bg-white/90 dark:bg-slate-900/85 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-800 shadow-subtle transition-colors"
            >
              &ldquo;{question}&rdquo;
            </button>
          ))}
        </div>
      </div>

      {/* Main Conversation Window */}
      <div className="bg-white/90 dark:bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col h-[560px]">
        
        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map((msg) => {
            const isCounselor = msg.sender === 'counselor';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isCounselor ? 'items-start' : 'items-start ml-auto flex-row-reverse'}`}
              >
                {/* Avatar Icon */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isCounselor 
                    ? 'bg-brand-900 dark:bg-brand-600 text-white shadow-sm' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                }`}>
                  {isCounselor ? <Orbit className="w-4 h-4 text-amber-400" /> : 'You'}
                </div>

                {/* Message Bubble */}
                <div className="space-y-3">
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed ${
                      isCounselor
                        ? 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80'
                        : 'bg-brand-900 dark:bg-brand-600 text-white shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {/* Matched Careers Cards (When Counselor recommends pathways) */}
                  {msg.matchedCareers && msg.matchedCareers.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Relevant Directory Profiles:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {msg.matchedCareers.map((c) => (
                          <Link
                            key={c.id}
                            href={`/careers/${c.id}`}
                            className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-300 dark:hover:border-brand-500/60 hover:bg-brand-50/40 dark:hover:bg-brand-950/40 transition-colors flex items-center justify-between group"
                          >
                            <div className="truncate pr-2">
                              <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 block">
                                {c.category}
                              </span>
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-900 dark:group-hover:text-brand-400 truncate block">
                                {c.title}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-900 dark:group-hover:text-brand-400 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Follow-up Question Suggestions */}
                  {msg.followUpSuggestions && msg.followUpSuggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.followUpSuggestions.map((suggestion, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSendMessage(suggestion)}
                          disabled={loading}
                          className="text-[11px] font-semibold text-brand-900 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/80 hover:bg-brand-100 dark:hover:bg-brand-900 border border-brand-200 dark:border-brand-700/60 px-2.5 py-1 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[10px] text-slate-400 dark:text-slate-500 ${isCounselor ? 'text-left' : 'text-right'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-900 dark:bg-brand-600 text-white flex items-center justify-center shrink-0">
                <Orbit className="w-4 h-4 text-amber-400 animate-spin" />
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                Reviewing academic pathways and preparing guidance...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Text Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputQuery);
          }}
          className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 rounded-b-2xl flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Type your question (e.g., 'What can I study with biology and math?')..."
            disabled={loading}
            className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || loading}
            className={`p-2.5 rounded-xl font-bold transition-colors shrink-0 ${
              inputQuery.trim() && !loading
                ? 'bg-brand-900 dark:bg-brand-600 text-white hover:bg-brand-800 dark:hover:bg-brand-500 shadow-sm'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
            }`}
            title="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
}

export default function GuidancePage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-500">Loading Guidance Counselor...</div>}>
      <GuidanceContent />
    </Suspense>
  );
}
