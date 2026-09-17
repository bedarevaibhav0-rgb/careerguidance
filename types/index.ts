export type CareerCategory = 
  | 'Computer Science & IT'
  | 'Engineering'
  | 'Medicine & Healthcare'
  | 'Business & Management'
  | 'Finance'
  | 'Law'
  | 'Government Services'
  | 'Defence'
  | 'Design'
  | 'Science & Research'
  | 'Education'
  | 'Media'
  | 'Aviation'
  | 'Entrepreneurship';

export interface CareerSalary {
  entry: string;
  mid: string;
  senior: string;
  currency: string;
}

export interface EducationPathwayStep {
  stepNumber: number;
  stage: string; // e.g. "10th Standard", "10+2 / Secondary", "Undergraduate", "Professional Training", "Entry Role"
  title: string;
  details: string;
  criticalMilestone?: string;
}

export interface EntranceExam {
  name: string;
  level: string; // National, State, University
  eligibility: string;
  targetCourses: string;
}

export interface CareerGrowthStage {
  stageName: string;
  experience: string;
  typicalDesignation: string;
  focus: string;
}

export interface CareerFAQ {
  question: string;
  answer: string;
}

export interface Career {
  id: string;
  title: string;
  category: CareerCategory;
  shortIntro: string;
  heroImage: string;
  educationRequired: string;
  minYearsStudy: number;
  workStyle: 'Office' | 'Remote / Hybrid' | 'Hospital / Clinical' | 'Hospital/Clinical' | 'Lab / Clinical' | 'Studio / Workshop' | 'Field & Travel' | 'Operational Base';
  growthRate: 'High Demand' | 'Steady Growth' | 'Rapidly Growing' | 'Selective & Elite';
  salary: CareerSalary;
  keySkills: string[];
  technicalSkills: string[];
  softSkills: string[];
  overview: string;
  dailyRoutine: string;
  coreResponsibilities: string[];
  educationPathway: EducationPathwayStep[];
  importantSubjects: {
    highSchool: string[];
    higherSecondary: string[];
    undergraduate: string[];
  };
  recommendedCourses: string[];
  entranceExams: EntranceExam[];
  jobRoles: string[];
  industries: string[];
  growthLadder: CareerGrowthStage[];
  higherEducation: string[];
  faqs: CareerFAQ[];
  workLifeBalance: string;
  workEnvironment: string;
  stressLevel: 'Moderate' | 'High' | 'Variable' | 'Structured';
}

export interface AssessmentQuestion {
  id: number;
  dimension: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    categoryWeights: Partial<Record<CareerCategory, number>>;
  }[];
}

export interface AssessmentResultItem {
  careerId: string;
  careerTitle: string;
  category: CareerCategory;
  matchPercentage: number;
  matchReasons: string[];
  skillsToDevelop: string[];
  suggestedEducationPath: string;
  nextSteps: string[];
}

export interface UserAssessmentSubmission {
  id: string;
  date: string;
  topCareerMatches: AssessmentResultItem[];
  dominantStrengths: string[];
}
