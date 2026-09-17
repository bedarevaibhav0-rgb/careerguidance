import { AssessmentResultItem } from '@/types';

const STORAGE_KEYS = {
  SAVED_CAREERS: 'cc_saved_careers_v1',
  COMPARE_CAREERS: 'cc_compare_careers_v1',
  RECENT_CAREERS: 'cc_recent_careers_v1',
  ASSESSMENT_RESULT: 'cc_assessment_result_v1',
  ROADMAP_CHECKLIST: 'cc_roadmap_checklist_v1',
};

// Safe helper for client-side storage
function safeGet(key: string, fallback: any = null) {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
}

function safeSet(key: string, value: any) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Dispatch custom storage event for in-tab reactivity
    window.dispatchEvent(new Event('local-storage-update'));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage`, e);
  }
}

// 1. Saved Careers
export function getSavedCareerIds(): string[] {
  return safeGet(STORAGE_KEYS.SAVED_CAREERS, []);
}

export function isCareerSaved(id: string): boolean {
  const ids = getSavedCareerIds();
  return ids.includes(id);
}

export function toggleSaveCareer(id: string): boolean {
  const ids = getSavedCareerIds();
  let updated: string[];
  let isNowSaved = false;
  if (ids.includes(id)) {
    updated = ids.filter(item => item !== id);
    isNowSaved = false;
  } else {
    updated = [...ids, id];
    isNowSaved = true;
  }
  safeSet(STORAGE_KEYS.SAVED_CAREERS, updated);
  return isNowSaved;
}

export function removeSavedCareer(id: string): void {
  const ids = getSavedCareerIds();
  safeSet(STORAGE_KEYS.SAVED_CAREERS, ids.filter(item => item !== id));
}

// 2. Compared Careers (Maximum 3)
export function getComparedCareerIds(): string[] {
  return safeGet(STORAGE_KEYS.COMPARE_CAREERS, []);
}

export function toggleCompareCareer(id: string): { success: boolean; message?: string } {
  const ids = getComparedCareerIds();
  if (ids.includes(id)) {
    safeSet(STORAGE_KEYS.COMPARE_CAREERS, ids.filter(item => item !== id));
    return { success: true };
  } else {
    if (ids.length >= 3) {
      return { success: false, message: 'You can compare a maximum of 3 careers simultaneously.' };
    }
    safeSet(STORAGE_KEYS.COMPARE_CAREERS, [...ids, id]);
    return { success: true };
  }
}

export function clearComparedCareers(): void {
  safeSet(STORAGE_KEYS.COMPARE_CAREERS, []);
}

// 3. Recently Viewed Careers
export function addRecentCareer(id: string): void {
  const current = safeGet(STORAGE_KEYS.RECENT_CAREERS, []);
  const filtered = current.filter((item: string) => item !== id);
  const updated = [id, ...filtered].slice(0, 8); // Keep last 8
  safeSet(STORAGE_KEYS.RECENT_CAREERS, updated);
}

export function getRecentCareerIds(): string[] {
  return safeGet(STORAGE_KEYS.RECENT_CAREERS, []);
}

// 4. Assessment Results
export interface StoredAssessment {
  timestamp: string;
  results: AssessmentResultItem[];
}

export function saveAssessmentResult(results: AssessmentResultItem[]): void {
  const data: StoredAssessment = {
    timestamp: new Date().toISOString(),
    results
  };
  safeSet(STORAGE_KEYS.ASSESSMENT_RESULT, data);
}

export function getLatestAssessmentResult(): StoredAssessment | null {
  return safeGet(STORAGE_KEYS.ASSESSMENT_RESULT, null);
}

// 5. Roadmap Progress
export function getRoadmapCompletedSteps(careerId: string): number[] {
  const allData = safeGet(STORAGE_KEYS.ROADMAP_CHECKLIST, {});
  return allData[careerId] || [];
}

export function toggleRoadmapStep(careerId: string, stepNumber: number): number[] {
  const allData = safeGet(STORAGE_KEYS.ROADMAP_CHECKLIST, {});
  const currentSteps: number[] = allData[careerId] || [];
  let updated: number[];
  if (currentSteps.includes(stepNumber)) {
    updated = currentSteps.filter(s => s !== stepNumber);
  } else {
    updated = [...currentSteps, stepNumber];
  }
  allData[careerId] = updated;
  safeSet(STORAGE_KEYS.ROADMAP_CHECKLIST, allData);
  return updated;
}
