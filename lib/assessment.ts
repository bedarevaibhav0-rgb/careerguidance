import { AssessmentQuestion, AssessmentResultItem, CareerCategory } from '@/types';
import { CAREERS } from './careers-data';

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    dimension: 'Academic Affinity',
    question: 'Which subjects or learning areas do you naturally enjoy the most?',
    subtitle: 'Think about what you enjoy exploring even outside exam requirements.',
    options: [
      {
        label: 'Mathematics, Logic & Computing',
        description: 'Solving numerical puzzles, writing scripts, analyzing patterns, discrete logic.',
        categoryWeights: { 'Computer Science & IT': 5, 'Finance': 3, 'Engineering': 4 }
      },
      {
        label: 'Physics, Machines & Physical Structures',
        description: 'Understanding how things move, electricity, mechanical gears, construction, flight.',
        categoryWeights: { 'Engineering': 5, 'Aviation': 4, 'Defence': 3 }
      },
      {
        label: 'Biology, Human Health & Life Sciences',
        description: 'Human anatomy, medicine, chemical compounds, healing and patient wellness.',
        categoryWeights: { 'Medicine & Healthcare': 5, 'Science & Research': 3 }
      },
      {
        label: 'Economics, Commerce, Markets & Business',
        description: 'Financial balance sheets, stock markets, business models, entrepreneurial ideas.',
        categoryWeights: { 'Finance': 5, 'Business & Management': 4, 'Entrepreneurship': 4 }
      },
      {
        label: 'Civics, History, Law & Social Systems',
        description: 'Constitutional debates, public policy, global affairs, defending rights and justice.',
        categoryWeights: { 'Law': 5, 'Government Services': 5, 'Defence': 3 }
      },
      {
        label: 'Visual Arts, Aesthetics & User Experience',
        description: 'Drawing, digital layouts, graphic composition, typography, and creative media.',
        categoryWeights: { 'Design': 5, 'Media': 4 }
      }
    ]
  },
  {
    id: 2,
    dimension: 'Core Daily Activity',
    question: 'What kind of daily activity gives you the most satisfaction?',
    subtitle: 'Select the activity where hours pass by without feeling bored.',
    options: [
      {
        label: 'Building digital systems and writing code',
        description: 'Creating software, designing databases, troubleshooting complex bugs.',
        categoryWeights: { 'Computer Science & IT': 5 }
      },
      {
        label: 'Hands-on patient care and medical diagnosis',
        description: 'Interacting with individuals needing care, understanding symptoms, prescribing healing.',
        categoryWeights: { 'Medicine & Healthcare': 5 }
      },
      {
        label: 'Designing physical machines, circuits, or infrastructure',
        description: 'Drafting 3D models, stress testing materials, inspecting construction blueprints.',
        categoryWeights: { 'Engineering': 5 }
      },
      {
        label: 'Analyzing financial data and managing capital',
        description: 'Forecasting returns, auditing books, structuring deals and corporate budgets.',
        categoryWeights: { 'Finance': 5, 'Business & Management': 3 }
      },
      {
        label: 'Public leadership, administration and societal defense',
        description: 'Governing public policy, tactical command, maintaining civic order and security.',
        categoryWeights: { 'Government Services': 5, 'Defence': 5 }
      },
      {
        label: 'Mentoring, teaching, and explaining concepts',
        description: 'Breaking down hard concepts so others understand, guiding young minds.',
        categoryWeights: { 'Education': 5 }
      },
      {
        label: 'Founding a venture and taking market risks',
        description: 'Building a new brand from scratch, pitching investors, chasing growth.',
        categoryWeights: { 'Entrepreneurship': 5 }
      }
    ]
  },
  {
    id: 3,
    dimension: 'Key Cognitive Strength',
    question: 'What is your greatest natural cognitive strength?',
    subtitle: 'What do mentors, teachers, or friends frequently compliment you for?',
    options: [
      {
        label: 'Abstract logical reasoning and structured problem decomposition',
        description: 'Breaking down large, ambiguous problems into clean, solvable steps.',
        categoryWeights: { 'Computer Science & IT': 4, 'Engineering': 4 }
      },
      {
        label: 'Deep empathy, active listening, and calm patience',
        description: 'Understanding people’s vulnerabilities, reassuring them during stress.',
        categoryWeights: { 'Medicine & Healthcare': 5, 'Education': 4 }
      },
      {
        label: 'Sharp persuasive rhetoric, argument structuring, and debate',
        description: 'Spotting flaws in arguments, presenting compelling legal or strategic cases.',
        categoryWeights: { 'Law': 5, 'Government Services': 3 }
      },
      {
        label: 'Numerical rigor and attention to decimal precision',
        description: 'Zero tolerance for careless calculation errors, spotting financial anomalies.',
        categoryWeights: { 'Finance': 5 }
      },
      {
        label: 'Spatial visualization and aesthetic intuition',
        description: 'Visualizing 3D structures, color harmony, visual hierarchy, and balance.',
        categoryWeights: { 'Design': 5, 'Engineering': 3 }
      },
      {
        label: 'Crisis courage, physical discipline, and command presence',
        description: 'Staying poised and decisive when others panic under intense operational pressure.',
        categoryWeights: { 'Defence': 5, 'Aviation': 4, 'Government Services': 3 }
      }
    ]
  },
  {
    id: 4,
    dimension: 'Ideal Work Setting',
    question: 'In what physical setting do you see yourself thriving most comfortably?',
    subtitle: 'Consider how you prefer to spend your working hours.',
    options: [
      {
        label: 'Modern tech office or flexible remote workstation',
        description: 'Dual monitor setup, ergonomic chair, quiet focus blocks, asynchronous collaboration.',
        categoryWeights: { 'Computer Science & IT': 4, 'Design': 3 }
      },
      {
        label: 'Hospitals, surgical theaters, and clinical consultation suites',
        description: 'Fast-paced, compassionate healthcare setting interacting directly with patients.',
        categoryWeights: { 'Medicine & Healthcare': 5 }
      },
      {
        label: 'Industrial testing labs, fabrication floors, and outdoor sites',
        description: 'Active physical interaction with machines, test rigs, or building construction.',
        categoryWeights: { 'Engineering': 4 }
      },
      {
        label: 'Corporate boardrooms, financial headquarters, and legal chambers',
        description: 'Professional executive atmosphere negotiating deals and analyzing contracts.',
        categoryWeights: { 'Finance': 4, 'Law': 4 }
      },
      {
        label: 'Military cantonments, naval vessels, and flight cockpits',
        description: 'Disciplined operational bases, high-altitude cockpits, and tactical units.',
        categoryWeights: { 'Defence': 5, 'Aviation': 5 }
      },
      {
        label: 'Classrooms, school campuses, and academic lecture halls',
        description: 'Energetic campus environment surrounded by curious learners and educators.',
        categoryWeights: { 'Education': 5 }
      }
    ]
  },
  {
    id: 5,
    dimension: 'Risk & Career Stability',
    question: 'How do you view career risk versus guaranteed stability?',
    subtitle: 'Every career balances predictability against high variance reward.',
    options: [
      {
        label: 'I value lifelong stability, national prestige, and structured tenure',
        description: 'Prefer established public institutions, permanent civil appointments, or defense.',
        categoryWeights: { 'Government Services': 5, 'Defence': 4 }
      },
      {
        label: 'I desire steady professional growth in established licensed professions',
        description: 'Medicine, Chartered Accountancy, or Engineering with clear promotion milestones.',
        categoryWeights: { 'Medicine & Healthcare': 4, 'Finance': 4, 'Engineering': 3 }
      },
      {
        label: 'I seek high market compensation tied to modern merit and skills',
        description: 'Fast-moving tech industries, investment banking, or specialized digital design.',
        categoryWeights: { 'Computer Science & IT': 4, 'Finance': 4 }
      },
      {
        label: 'I thrive on uncertainty and desire limitless upside potential',
        description: 'Willing to risk financial stability early to build and own an innovative business.',
        categoryWeights: { 'Entrepreneurship': 5 }
      }
    ]
  },
  {
    id: 6,
    dimension: 'Problem Solving Style',
    question: 'When faced with a difficult challenge, what is your instinctive approach?',
    subtitle: 'How do you naturally tackle roadblocks?',
    options: [
      {
        label: 'I model the problem into algorithms and write a script to automate it',
        description: 'Search for computational leverage, repeatable patterns, and code automation.',
        categoryWeights: { 'Computer Science & IT': 5 }
      },
      {
        label: 'I research empirical scientific evidence, clinical studies, and biological causes',
        description: 'Rely on verified biomedical facts and methodical diagnostics.',
        categoryWeights: { 'Medicine & Healthcare': 5 }
      },
      {
        label: 'I analyze the physical forces, materials, and mechanical constraints',
        description: 'Consider stress, thermal limits, electrical loads, and structural safety margins.',
        categoryWeights: { 'Engineering': 5 }
      },
      {
        label: 'I examine the legal contracts, precedents, and regulatory compliance',
        description: 'Analyze rights, obligations, dispute mechanisms, and statutory wording.',
        categoryWeights: { 'Law': 5, 'Government Services': 3 }
      },
      {
        label: 'I build a financial spreadsheet and examine the unit economics and ROI',
        description: 'Focus on numbers, cost-benefit ratios, capital efficiency, and profitability.',
        categoryWeights: { 'Finance': 5, 'Business & Management': 4 }
      },
      {
        label: 'I sketch visual wireframes and empathize with how the user feels',
        description: 'Focus on visual clarity, emotional resonance, and reducing human friction.',
        categoryWeights: { 'Design': 5 }
      }
    ]
  },
  {
    id: 7,
    dimension: 'Interpersonal Preference',
    question: 'How do you prefer collaborating with other people?',
    subtitle: 'Different careers vary widely in their social requirements.',
    options: [
      {
        label: 'Deep individual concentration interspersed with team syncs',
        description: 'I do best when I have long blocks of uninterrupted focus to solve tough problems.',
        categoryWeights: { 'Computer Science & IT': 4, 'Engineering': 3 }
      },
      {
        label: 'Direct one-on-one personal empathy and supportive counseling',
        description: 'Connecting genuinely with an individual to understand their pain and provide relief.',
        categoryWeights: { 'Medicine & Healthcare': 5, 'Education': 4 }
      },
      {
        label: 'Leading teams, directing operational logistics, and making executive calls',
        description: 'Rallying groups toward a mission, delegating tasks, maintaining morale.',
        categoryWeights: { 'Government Services': 4, 'Defence': 4, 'Entrepreneurship': 4 }
      },
      {
        label: 'Persuasive client presentations, negotiation, and high-stakes advisory',
        description: 'Influencing counterparties, closing transactions, and arguing cases.',
        categoryWeights: { 'Law': 4, 'Finance': 4 }
      }
    ]
  },
  {
    id: 8,
    dimension: 'Long-term Impact',
    question: 'Looking back on your career 25 years from now, what would make you proudest?',
    subtitle: 'What ultimate legacy matters most to your personal values?',
    options: [
      {
        label: 'Having built software or technologies used daily by millions worldwide',
        description: 'Digital tools that streamlined human productivity and advanced technology.',
        categoryWeights: { 'Computer Science & IT': 5 }
      },
      {
        label: 'Having directly alleviated physical suffering and saved human lives',
        description: 'Hands-on medical interventions and restoring patients to health and family.',
        categoryWeights: { 'Medicine & Healthcare': 5 }
      },
      {
        label: 'Having built critical physical infrastructure: bridges, machines, or clean grids',
        description: 'Tangible physical creations that endure and support economic civilization.',
        categoryWeights: { 'Engineering': 5 }
      },
      {
        label: 'Having protected the sovereign nation and defended civic peace and justice',
        description: 'Serving the constitution, defending borders, or reforming public governance.',
        categoryWeights: { 'Defence': 5, 'Government Services': 5, 'Law': 4 }
      },
      {
        label: 'Having founded and scaled an enduring enterprise from the ground up',
        description: 'Creating jobs, innovative products, and substantial economic value.',
        categoryWeights: { 'Entrepreneurship': 5 }
      },
      {
        label: 'Having mentored and inspired generations of young students to achieve their potential',
        description: 'Instilling knowledge and confidence into future generations.',
        categoryWeights: { 'Education': 5 }
      }
    ]
  }
];

export function calculateAssessmentResults(selectedOptionIndices: Record<number, number>): AssessmentResultItem[] {
  // Category score accumulators
  const categoryScores: Record<CareerCategory, number> = {
    'Computer Science & IT': 0,
    'Engineering': 0,
    'Medicine & Healthcare': 0,
    'Business & Management': 0,
    'Finance': 0,
    'Law': 0,
    'Government Services': 0,
    'Defence': 0,
    'Design': 0,
    'Science & Research': 0,
    'Education': 0,
    'Media': 0,
    'Aviation': 0,
    'Entrepreneurship': 0
  };

  // Tally weights
  Object.entries(selectedOptionIndices).forEach(([questionIdStr, optionIndex]) => {
    const questionId = Number(questionIdStr);
    const question = ASSESSMENT_QUESTIONS.find(q => q.id === questionId);
    if (question && question.options[optionIndex]) {
      const weights = question.options[optionIndex].categoryWeights;
      Object.entries(weights).forEach(([cat, score]) => {
        if (score) {
          categoryScores[cat as CareerCategory] += score;
        }
      });
    }
  });

  // Calculate maximum score attained across categories
  const maxScore = Math.max(...Object.values(categoryScores), 1);

  // Score individual careers
  const scoredCareers = CAREERS.map(career => {
    const baseCategoryScore = categoryScores[career.category] || 0;
    
    // Normalize to percentage between 45% and 96%
    const normalizedMatch = Math.min(96, Math.max(48, Math.round((baseCategoryScore / maxScore) * 94) + Math.floor(Math.random() * 3)));
    
    // Generate tailored reasons based on career traits
    const matchReasons: string[] = [];
    if (career.category === 'Computer Science & IT') {
      matchReasons.push('Strong natural affinity for structured logic, computational thinking, and software problem-solving.');
      matchReasons.push('Enjoys modern technical workstations with continuous self-directed learning.');
      matchReasons.push('Desires high-demand career pathways with strong global industry mobility.');
    } else if (career.category === 'Medicine & Healthcare') {
      matchReasons.push('Demonstrates deep empathy for human health, patient well-being, and physiological sciences.');
      matchReasons.push('Comfortable in rigorous clinical healthcare environments dedicated to healing.');
      matchReasons.push('Values direct societal impact and high lifelong professional job security.');
    } else if (career.category === 'Engineering') {
      matchReasons.push('Strong interest in applied physics, mechanical systems, or infrastructure design.');
      matchReasons.push('Prefers tangible problem solving with machines, structural simulations, or electrical systems.');
      matchReasons.push('Excels at converting theoretical mathematical calculations into reliable real-world systems.');
    } else if (career.category === 'Finance') {
      matchReasons.push('High numerical rigor and comfort analyzing balance sheets, capital markets, and corporate valuation.');
      matchReasons.push('Values structured professional milestones and analytical financial advisory roles.');
      matchReasons.push('Thrives on detail-oriented auditing, taxation precision, and economic data.');
    } else if (career.category === 'Law') {
      matchReasons.push('Strong natural aptitude for critical argumentation, statutory interpretation, and legal research.');
      matchReasons.push('Motivated by defending client rights, corporate agreements, and constitutional justice.');
      matchReasons.push('Enjoys persuasive writing, intellectual debate, and contract negotiation.');
    } else if (career.category === 'Government Services' || career.category === 'Defence') {
      matchReasons.push('Deep commitment to public service, national security, and constitutional governance.');
      matchReasons.push('Exhibits poise, leadership under operational pressure, and dedication to societal welfare.');
      matchReasons.push('Values constitutional authority, command responsibility, and permanent institutional leadership.');
    } else if (career.category === 'Design') {
      matchReasons.push('Strong spatial aesthetic sense, visual composition, and user empathy.');
      matchReasons.push('Excels at translating complex ideas into intuitive digital interfaces and visual systems.');
      matchReasons.push('Prefers creative studio environments with rapid visual iteration.');
    } else if (career.category === 'Education') {
      matchReasons.push('Patience, inspiring communication, and joy in explaining complex concepts clearly.');
      matchReasons.push('Motivated by mentoring young minds and creating positive academic impact.');
      matchReasons.push('Values campus environments and structured academic schedules.');
    } else {
      matchReasons.push('High initiative, comfort with uncertainty, and enthusiasm for building new ventures.');
      matchReasons.push('Desires direct ownership over creative output and scalable commercial rewards.');
      matchReasons.push('Enjoys pitching value propositions and rallying teams toward ambitious milestones.');
    }

    return {
      careerId: career.id,
      careerTitle: career.title,
      category: career.category,
      matchPercentage: normalizedMatch,
      matchReasons: matchReasons.slice(0, 3),
      skillsToDevelop: career.keySkills.slice(0, 4),
      suggestedEducationPath: `${career.educationRequired} (${career.minYearsStudy} Years typical duration)`,
      nextSteps: [
        `Review the complete curriculum and requirements for ${career.title}.`,
        `Explore eligibility for key entrance exams: ${career.entranceExams.map(e => e.name).join(', ') || 'Standard university admissions'}.`,
        `Begin building foundational skills in ${career.technicalSkills[0] || career.keySkills[0]}.`,
        `Consult our Guidance Advisor for personalized course and subject recommendations.`
      ]
    };
  });

  // Sort descending by match percentage
  scoredCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return scoredCareers;
}
