import { CAREERS } from './careers-data';
import { Career } from '@/types';

export interface GuidanceResponse {
  answer: string;
  matchedCareers: {
    id: string;
    title: string;
    category: string;
    shortIntro: string;
  }[];
  followUpSuggestions: string[];
}

export function generateGuidanceCounselorResponse(query: string): GuidanceResponse {
  const q = query.toLowerCase().trim();

  // 0. Admission Documents & Counseling Certificates Query
  if (q.includes('document') || q.includes('documents') || q.includes('admission') || q.includes('counseling') || q.includes('affidavit') || q.includes('certificate') || q.includes('dastawej') || q.includes('kya document')) {
    const matched = CAREERS.slice(0, 4);
    return {
      answer: `College admissions and counseling reporting (JoSAA, NEET/MCC, CLAT, UPSC, etc.) require a structured set of verified physical documents:

1. **Mandatory Academic Dossier:**
   • **10th Board Certificate & Marksheet:** Essential legal proof of candidate Date of Birth (DOB) and parent name spellings.
   • **12th Board Marksheet & Passing Certificate:** Confirms qualifying marks in mandatory subjects (PCM, PCB, etc.).
   • **School Leaving Certificate (TC/SLC) & Migration Certificate:** Universities keep the original TC permanently.
   • **Character / Conduct Certificate:** Issued by the head of the institution last attended.

2. **Entrance & Allotment Dossier:**
   • Original Admit Card with candidate photo.
   • Official Rank / Scorecard (AIR & Category Rank).
   • Provisional Seat Allotment Letter (JoSAA / MCC / State Portal).
   • Seat Acceptance Fee payment receipt.

3. **Identity & Quota Verification:**
   • Aadhaar Card (Must have active phone number for biometric e-KYC).
   • Domicile / Permanent Residence Certificate for state quota seats.
   • Category Certificate (SC/ST/OBC-NCL/EWS) in **Central Government Format**. Note: OBC-NCL and EWS must be issued on or after April 1 of the admission academic year!

4. **Medical & Affidavits:**
   • Physical Fitness Certificate by a registered medical practitioner.
   • Gap Year Affidavit on non-judicial stamp paper if you took a drop year.
   • Anti-Ragging undertaking signed by student and parents (via antiragging.in).

👉 **Interactive Tool:** We have built a dedicated **Admission Documents Portal** where you can select any career pathway, filter requirements, check off items, and print your physical counseling checklist! Visit **/documents** in the navigation menu.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'What documents are needed for JoSAA engineering counseling?',
        'What is a Gap Year Affidavit and how do I make one?',
        'What is the validity rule for OBC-NCL and EWS certificates?'
      ]
    };
  }

  // 1. Math & Computers
  if ((q.includes('math') || q.includes('mathematics')) && (q.includes('computer') || q.includes('coding') || q.includes('software'))) {
    const matched = CAREERS.filter(c => ['software-engineer', 'data-scientist', 'ai-ml-engineer', 'web-developer'].includes(c.id));
    return {
      answer: `Combining an interest in mathematics and computing is one of the strongest foundations in the modern economy. Mathematics provides the foundational mental models—discrete logic, linear algebra, graph theory, and probability—while computing provides the engine to bring those ideas into reality at scale.

Here are the highest-impact paths aligned with your strengths:

1. **Software Engineering**: Focuses on turning algorithmic logic into production systems, mobile/web platforms, and enterprise architecture. You'll use discrete mathematics and problem decomposition daily.
2. **Artificial Intelligence & Machine Learning**: Ideal if you genuinely enjoy calculus, statistics, and linear algebra. ML engineers design models that learn predictive patterns from data.
3. **Data Science & Quantitative Analysis**: Focuses on probability, regression, and data storytelling, translating raw numbers into high-stakes business and scientific decisions.

**Recommended Academic Path:**
• In 10+2: Choose Physics, Chemistry, and Mathematics (PCM). Computer Science or Informatics Practices is a great elective.
• Undergraduate: Aim for a B.Tech / B.E. in Computer Science, Data Science, or Mathematics & Computing, or a strong BCA/B.Sc CS program followed by an MCA/M.S.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'What should I study to become an AI engineer?',
        'What is the difference between Data Science and Software Engineering?',
        'Which entrance exams should I prepare for in 12th?'
      ]
    };
  }

  // 2. Engineering vs Management
  if ((q.includes('engineering') && q.includes('management')) || q.includes('confused between engineering and management') || (q.includes('mba') && q.includes('btech'))) {
    const matched = CAREERS.filter(c => ['software-engineer', 'mechanical-engineer', 'banking-professional', 'entrepreneur'].includes(c.id));
    return {
      answer: `This is one of the most common and healthy dilemmas students face. The good news is that **Engineering and Management are not mutually exclusive—they are frequently complementary phases of a single career.**

Here is how to think through this decision:

• **The Nature of the Work:**
  - **Engineering** is about *systems, physics, and technical problem-solving*: understanding *how* things work, optimizing performance, and building functional products.
  - **Management** is about *people, resource allocation, and strategy*: understanding *why* things should be built, managing team dynamics, budgeting, and driving revenue.

• **A Proven Strategic Pathway (The Techno-Managerial Route):**
  Many of the world's most effective corporate leaders start with a quantitative undergraduate degree (such as B.Tech/B.E. in any branch). After working 2 to 4 years as an engineer understanding real-world technical operations, they pursue an MBA (e.g., at IIMs, ISB, or international business schools). This combination gives you technical credibility that pure generalists often lack.

• **If You Prefer Starting Directly in Business:**
  If you feel disengaged from advanced calculus and laboratory physics and prefer economics, public speaking, case competitions, and organizational psychology, pursuing a BBA/BMS or B.Com followed by an MBA is an equally direct, high-growth path.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Is it better to do BBA or B.Tech before an MBA?',
        'What careers combine technology and business?',
        'Tell me about Product Management careers.'
      ]
    };
  }

  // 3. How to become a software engineer
  if (q.includes('how to become') && (q.includes('software engineer') || q.includes('programmer') || q.includes('developer')) || q.includes('study to become a software engineer')) {
    const matched = CAREERS.filter(c => ['software-engineer', 'web-developer'].includes(c.id));
    return {
      answer: `To become a professional Software Engineer, you need a disciplined combination of foundational computer science theory and hands-on production coding experience.

Here is the realistic step-by-step roadmap:

1. **Secondary & Higher Secondary (10th & 12th):**
   • Focus on Mathematics and Physics (PCM stream). Develop logical reasoning and comfortable algebra habits.
   • Experiment with a beginner-friendly programming language like Python or JavaScript to build small hobby projects.

2. **Undergraduate Degree (Years 1 to 4):**
   • Target a B.Tech / B.E. in Computer Science, IT, or related fields (through JEE Main/Advanced, BITSAT, or State CETs), or a BCA/B.Sc CS.
   • Master core subjects: Data Structures & Algorithms (DSA), Operating Systems, Database Management Systems (SQL), and Computer Networks.

3. **Practical Portfolio & Real Projects:**
   • Build 2 or 3 complete full-stack web applications or mobile apps that solve real user problems.
   • Publish clean, documented code on GitHub.
   • Practice algorithmic problem-solving on platforms like LeetCode or Codeforces for technical interview preparation.

4. **Internships & Industry Induction:**
   • Complete at least one summer software engineering internship between your 3rd and 4th year to understand team version control (Git), code reviews, and Agile workflows.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Can I become a software engineer without a CS degree?',
        'What skills do recruiters look for in junior developers?',
        'How should I prepare for coding interviews?'
      ]
    };
  }

  // 4. Medicine / Healthcare / Doctor / Biology
  if (q.includes('doctor') || q.includes('mbbs') || q.includes('medical') || q.includes('biology') || q.includes('medicine')) {
    const matched = CAREERS.filter(c => ['doctor', 'pharmacist', 'nurse'].includes(c.id));
    return {
      answer: `A career in medicine and healthcare offers unmatched societal impact, intellectual fascination with human physiology, and lifelong career resilience. However, it requires an honest appraisal of the educational timeline.

Here are the primary pathways in this domain:

• **MBBS (Physician / Surgeon):**
  - Requires clearing **NEET-UG** with a top percentile.
  - Duration: 5.5 years (including 1-year compulsory internship) + 3 years of postgraduate residency (MD/MS) to become a specialized practitioner.
  - Best for students passionate about direct clinical diagnosis, critical emergency interventions, and continuous patient care.

• **Pharmacy (B.Pharm / Pharm.D):**
  - Focuses on drug formulation, pharmacokinetics, and clinical drug safety.
  - Duration: 4 years (B.Pharm) or 6 years (Pharm.D).
  - Offers excellent career opportunities in pharmaceutical R&D, clinical trial management, and regulatory compliance without the grueling night shifts of surgical residency.

• **Nursing (B.Sc Nursing):**
  - The frontline backbone of acute patient recovery and ICU management.
  - High global demand with rapid international migration pathways to the UK, Canada, Australia, and the US.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'What are the alternative careers if I don\'t crack NEET?',
        'What is the daily routine of an MBBS resident doctor?',
        'How long does it take to become a specialized surgeon?'
      ]
    };
  }

  // 5. Civil Services / Government / IAS / UPSC
  if (q.includes('upsc') || q.includes('ias') || q.includes('civil services') || q.includes('government officer') || q.includes('collector')) {
    const matched = CAREERS.filter(c => ['government-officer', 'lawyer', 'defence-officer'].includes(c.id));
    return {
      answer: `Becoming a Civil Services Officer (IAS, IPS, IFS, IRS) is one of the most prestigious callings in public life. It grants extraordinary constitutional authority to direct district administration, manage public emergencies, and reform socio-economic welfare delivery.

Key Realities & Strategy:
• **Eligibility:** Any Bachelor's degree in any subject from a recognized university. Minimum age is 21.
• **Exam Structure:** 
  1. Prelims (Objective: General Studies + CSAT)
  2. Mains (9 written subjective descriptive papers, including your chosen Optional Subject)
  3. Personality Test (Interview before the UPSC board)

• **Counselor Advice on College Choice:**
  Do not rush into an undergraduate degree solely for UPSC. Choose a degree subject you genuinely enjoy (whether that is Engineering, Economics, Political Science, or Commerce). This gives you a strong backup career while you prepare systematically for the exam.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Which graduation degree is best for UPSC preparation?',
        'What is the daily life of a District Magistrate (IAS)?',
        'How do I balance college studies with UPSC prep?'
      ]
    };
  }

  // 6. Pilot / Aviation
  if (q.includes('pilot') || q.includes('flying') || q.includes('aviation') || q.includes('aircraft')) {
    const matched = CAREERS.filter(c => ['pilot', 'defence-officer', 'mechanical-engineer'].includes(c.id));
    return {
      answer: `Becoming a Commercial Airline Pilot is an exhilarating career combining technical precision, aerodynamics, and global travel.

**Key Requirements:**
1. **Academic Prerequisite:** 10+2 with Physics and Mathematics (minimum 50%).
2. **Medical Fitness:** Class 2 followed by a stringent Class 1 Aviation Medical clearance (normal color perception and cardiovascular health).
3. **Training Pathway:**
   • Clear DGCA/FAA Ground Theory examinations (Air Navigation, Meteorology, Air Regulations, Technical General, Radio Telephony).
   • Complete 200 hours of flight training at an approved flying training organization to obtain your Commercial Pilot License (CPL).
   • Complete Type Rating on an airliner (e.g., Airbus A320 or Boeing 737).

**Financial Planning:**
Flight training is capital-intensive (typically ₹45 to ₹75 Lakhs total investment). Research structured Airline Cadet Programs (such as IndiGo or Air India Cadet programs) which offer structured paths and letters of intent.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Can I become a pilot if I wear glasses?',
        'What is an Airline Cadet Pilot Program?',
        'What is the difference between an Air Force pilot and a commercial pilot?'
      ]
    };
  }

  // 7. Law / Lawyer
  if (q.includes('law') || q.includes('lawyer') || q.includes('advocate') || q.includes('clat') || q.includes('court')) {
    const matched = CAREERS.filter(c => ['lawyer', 'government-officer', 'chartered-accountant'].includes(c.id));
    return {
      answer: `The legal profession has expanded dramatically beyond traditional courtroom drama. Today, law graduates have diverse career trajectories spanning corporate boardrooms, international arbitration, intellectual property, and public policy.

• **5-Year Integrated LLB (BA.LLB / BBA.LLB):**
  - Direct entry after 10+2 via entrance exams like **CLAT** (for National Law Universities) or **AILET**.
  - Provides early exposure to constitutional law, contract drafting, and moot courts.

• **Major Career Streams in Law:**
  1. **Corporate Law & M&A:** Advising global enterprises on mergers, venture capital funding, cross-border acquisitions, and contracts. High starting compensation.
  2. **Litigation & Trial Advocacy:** Appearing before High Courts and the Supreme Court arguing civil, criminal, and constitutional matters.
  3. **In-House Legal Counsel:** Working inside tech companies (Google, Microsoft, Amazon) managing intellectual property, privacy, and regulatory compliance.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'How do I prepare for CLAT in 11th and 12th?',
        'Do I need a family background in law to succeed?',
        'What is the work culture in top corporate law firms?'
      ]
    };
  }

  // 8. Finance / CA / Banking
  if (q.includes('finance') || q.includes('chartered accountant') || q.includes('ca ') || q.includes('banking') || q.includes('money') || q.includes('stock')) {
    const matched = CAREERS.filter(c => ['chartered-accountant', 'banking-professional', 'data-scientist'].includes(c.id));
    return {
      answer: `Finance is the universal language of business. If you enjoy numerical precision, economic trends, and strategic decision-making, you have several powerful career options:

• **Chartered Accountancy (CA - ICAI):**
  - The gold standard for financial audit, taxation strategy, and corporate governance.
  - High return on investment (minimal tuition cost compared to private business schools), but requires disciplined self-study and 2-3 years of hands-on articleship training.

• **Investment Banking & Private Equity:**
  - Advising corporations on raising capital, issuing IPOs, and structuring mergers.
  - Highly lucrative, quantitative, and fast-paced. Typically requires an MBA in Finance from a premier institution (IIM/ISB) or a CFA charter.

• **Commercial & Corporate Banking:**
  - Managing lending portfolios, assessing business creditworthiness, and underwriting commercial expansion loans. Provides stable, structured work hours.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Can a Science student pursue Chartered Accountancy (CA)?',
        'What is the difference between CA and CFA?',
        'How do I build skills in financial modeling?'
      ]
    };
  }

  // 9. Design / Creative / UI UX
  if (q.includes('design') || q.includes('graphic') || q.includes('ui/ux') || q.includes('art') || q.includes('creative')) {
    const matched = CAREERS.filter(c => ['graphic-designer', 'web-developer'].includes(c.id));
    return {
      answer: `A design career combines human empathy, visual aesthetics, and problem-solving. In today's digital era, Product Designers (UI/UX) and Brand Designers play critical roles in shaping how humans interact with technology.

**Key Pathways in Modern Design:**
• **UI/UX & Digital Product Design:** Researching user behavior, wireframing digital journeys in Figma, and designing intuitive interfaces for mobile and web software.
• **Brand Identity & Visual Design:** Crafting typography systems, logos, packaging, and visual marketing assets.

**How to Start:**
1. You can enter design from *any* 10+2 stream (Arts, Science, or Commerce).
2. Prepare for design entrance examinations such as **UCEED** (for IIT design programs), **NID DAT**, or **NIFT**.
3. Build a personal portfolio of 3-4 detailed design case studies demonstrating your process: problem definition, research, wireframing, and final polished design.`,
      matchedCareers: matched.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
      followUpSuggestions: [
        'Do I need to know programming to be a UI/UX designer?',
        'How do I build a design portfolio as a beginner?',
        'What is the difference between Graphic Design and UI/UX?'
      ]
    };
  }

  // Default intelligent counselor synthesis
  const suggestedCareers = CAREERS.slice(0, 4);
  return {
    answer: `Thank you for asking this thoughtful question. In career planning, the most important rule is to look at the intersection of three factors:
1. **Your natural strengths**: What subjects and activities feel energizing and intuitive to you?
2. **The reality of the day-to-day work**: What does an actual Tuesday morning look like in that profession?
3. **The educational and credential pathway**: What degrees, entrance exams, and years of preparation are required?

Based on your inquiry regarding "${query}", I recommend exploring the careers listed below. Take a close look at their education timelines, technical and soft skills, and day-in-the-life overviews to see which aligns best with your personal ambitions.`,
    matchedCareers: suggestedCareers.map(c => ({ id: c.id, title: c.title, category: c.category, shortIntro: c.shortIntro })),
    followUpSuggestions: [
      'Take our Career Assessment for a personalized profile match',
      'Compare Software Engineering with Data Science',
      'How do I choose between Science and Commerce in 11th?'
    ]
  };
}
