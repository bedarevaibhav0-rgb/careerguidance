import { Career } from '@/types';

export const CAREERS: Career[] = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'Computer Science & IT',
    shortIntro: 'Designs, builds, and maintains software applications and system architecture solving complex computational challenges.',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree (B.Tech / B.E. / B.Sc / BCA)",
    minYearsStudy: 4,
    workStyle: 'Remote / Hybrid',
    growthRate: 'High Demand',
    salary: {
      entry: '₹4.5 - ₹10 LPA ($65,000 - $95,000)',
      mid: '₹12 - ₹24 LPA ($110,000 - $160,000)',
      senior: '₹28 - ₹55+ LPA ($175,000 - $260,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Data Structures & Algorithms', 'System Architecture', 'Version Control (Git)', 'Full-Stack Development', 'Problem Decomposition'],
    technicalSkills: ['Java / Python / TypeScript / C++', 'Relational & NoSQL Databases (PostgreSQL, Redis)', 'System Design & Distributed Systems', 'CI/CD & Cloud Platforms (AWS, Docker)', 'Unit & Integration Testing Frameworks'],
    softSkills: ['Analytical Rigor', 'Cross-functional Collaboration', 'Technical Documentation', 'Continuous Self-Learning', 'Constructive Code Review'],
    overview: 'Software engineers translate human needs and business objectives into robust, scalable digital tools. Far from merely writing syntax, modern engineering requires architectural thinking, performance profiling, security audits, and collaborating closely with product managers and UX designers to build reliable systems.',
    dailyRoutine: 'Morning standup meeting with the agile squad, 3-4 hours of focused coding and algorithmic problem solving, conducting pull request code reviews for peers, investigating latency logs, and contributing to technical architecture discussions.',
    coreResponsibilities: [
      'Write clean, modular, and testable code adhering to software engineering principles.',
      'Design RESTful/GraphQL APIs and optimize database query efficiency.',
      'Diagnose production incidents, performance bottlenecks, and memory leaks.',
      'Participate in architecture reviews and mentor associate engineers.',
      'Implement security best practices to protect user data from vulnerabilities.'
    ],
    educationPathway: [
      {
        stepNumber: 1,
        stage: '10th Standard',
        title: 'Strong Math & Logical Foundation',
        details: 'Focus on mathematics, physics, and basic computational logic. Cultivate curiosity through hobby programming or algorithmic puzzles.',
        criticalMilestone: 'Strong score in 10th Board Mathematics'
      },
      {
        stepNumber: 2,
        stage: '10+2 / Higher Secondary',
        title: 'Science Stream (PCM)',
        details: 'Physics, Chemistry, and Mathematics (PCM). Computer Science as an elective provides a significant early advantage in data handling.',
        criticalMilestone: 'Entrance Exam Preparation (JEE Main/Advanced, BITSAT, State CETs)'
      },
      {
        stepNumber: 3,
        stage: 'Undergraduate Degree (4 Years)',
        title: 'B.Tech / B.E. / BCA / B.Sc CS',
        details: 'Core focus on Operating Systems, Computer Networks, Database Management Systems, Theory of Computation, and Compiler Design.',
        criticalMilestone: 'Consistent GPA (>7.5/10) + Open-source contributions'
      },
      {
        stepNumber: 4,
        stage: 'Practical Experience & Projects',
        title: 'Internships & Production Applications',
        details: 'Build 2-3 end-to-end applications solving real user problems, complete at least one summer software engineering internship, and practice coding interview platforms.',
        criticalMilestone: 'Pre-placement offer or campus recruitment'
      },
      {
        stepNumber: 5,
        stage: 'Career Specialization',
        title: 'Junior to Staff / Principal Engineer',
        details: 'Progress from building isolated components to architecting high-scale distributed systems and driving technical strategy.',
        criticalMilestone: 'Leading a core service or system migration'
      }
    ],
    importantSubjects: {
      highSchool: ['Algebra', 'Geometry', 'Physics', 'Logical Reasoning'],
      higherSecondary: ['Calculus', 'Linear Algebra', 'Physics (Mechanics/Electricity)', 'Introductory Programming'],
      undergraduate: ['Data Structures & Algorithms', 'Operating Systems', 'Database Systems', 'Computer Networks', 'Software Engineering Principles']
    },
    recommendedCourses: [
      'CS50: Introduction to Computer Science (Harvard)',
      'Algorithms Specialization (Stanford / Coursera)',
      'Designing Data-Intensive Applications (Self-Study)',
      'Full Stack Open (University of Helsinki)'
    ],
    entranceExams: [
      { name: 'JEE Main & Advanced', level: 'National', eligibility: '10+2 with PCM', targetCourses: 'IITs, NITs, IIITs B.Tech' },
      { name: 'BITSAT', level: 'University', eligibility: '10+2 with PCM (75% min)', targetCourses: 'BITS Pilani Campuses' },
      { name: 'State CETs (MHT-CET, KCET, WBJEE)', level: 'State', eligibility: '10+2 PCM', targetCourses: 'Top State Engineering Colleges' }
    ],
    jobRoles: ['Backend Engineer', 'Frontend Engineer', 'Full-Stack Developer', 'Systems Architect', 'DevOps/SRE Engineer'],
    industries: ['Enterprise Software (SaaS)', 'Financial Technology', 'Healthcare Tech', 'E-Commerce & Logistics', 'Aerospace & Automotive'],
    growthLadder: [
      { stageName: 'Associate / Junior Software Engineer', experience: '0 - 2 Years', typicalDesignation: 'Software Engineer I', focus: 'Writing clean code for assigned tickets and bug fixes under guidance.' },
      { stageName: 'Software Engineer II / Mid-Level', experience: '2 - 5 Years', typicalDesignation: 'Software Engineer II', focus: 'Independent ownership of subsystem features, architectural decisions, and code reviews.' },
      { stageName: 'Senior Software Engineer', experience: '5 - 8 Years', typicalDesignation: 'Senior / Staff Software Engineer', focus: 'System design across services, mentoring juniors, defining engineering standards.' },
      { stageName: 'Lead / Principal / Engineering Director', experience: '8+ Years', typicalDesignation: 'Principal Engineer / VP of Engineering', focus: 'Company-wide technical roadmap, multi-team architecture, and strategic technology selection.' }
    ],
    higherEducation: ['M.S. in Computer Science', 'M.Tech in Software Engineering', 'MBA in Technology Management', 'Ph.D. in Computer Science (Systems/Theory)'],
    faqs: [
      {
        question: 'Is a Computer Science degree strictly mandatory to become a software engineer?',
        answer: 'No. While a CS degree remains the most straightforward campus recruiting pipeline, thousands of engineers enter through other engineering branches, bootcamps, or self-taught portfolios by demonstrating strong fundamentals in algorithms, system design, and production code.'
      },
      {
        question: 'How much mathematics do software engineers actually use daily?',
        answer: 'Day-to-day application development uses algebra and discrete logic rather than advanced calculus. However, fields like computer graphics, game physics, cryptography, and machine learning require deep linear algebra and statistics.'
      },
      {
        question: 'What is the realistic work-life balance?',
        answer: 'Generally balanced (40-45 hours/week) in established enterprise firms and mature product companies. Early-stage startups or during critical launch cycles can require occasional on-call shifts for production incidents.'
      }
    ],
    workLifeBalance: 'Moderate to Good; on-call rotation common every 6-8 weeks.',
    workEnvironment: 'Ergonomic office setup or remote home workstation with dual monitors.',
    stressLevel: 'Moderate'
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    category: 'Computer Science & IT',
    shortIntro: 'Develops mathematical models, neural networks, and scalable pipelines that enable computers to learn from data and automate complex cognitive tasks.',
    heroImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's / Master's in CS, Data Science, or Mathematics",
    minYearsStudy: 4,
    workStyle: 'Remote / Hybrid',
    growthRate: 'Rapidly Growing',
    salary: {
      entry: '₹6.5 - ₹14 LPA ($80,000 - $115,000)',
      mid: '₹18 - ₹35 LPA ($130,000 - $190,000)',
      senior: '₹38 - ₹75+ LPA ($210,000 - $350,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Deep Learning & Neural Networks', 'PyTorch / TensorFlow', 'Linear Algebra & Probability', 'MLOps & Model Serving', 'Data Wrangling'],
    technicalSkills: ['Python, C++, CUDA', 'Transformers, LLMs, Computer Vision architectures', 'Vector Databases & Embedding models', 'Docker, Kubernetes, Triton Inference Server', 'Feature Stores and Experiment Tracking (MLflow, Weights & Biases)'],
    softSkills: ['Scientific Skepticism', 'Hypothesis-Driven Thinking', 'Communicating Model Trade-offs', 'Ethical AI Awareness', 'Persistent Debugging'],
    overview: 'AI and Machine Learning Engineers sit at the intersection of computer science and mathematical statistics. They research, implement, and deploy predictive and generative algorithms to interpret images, parse human language, forecast financial markets, and power autonomous vehicles.',
    dailyRoutine: 'Reviewing experiment evaluation runs from overnight GPU jobs, cleaning messy training datasets, tuning hyperparameters, writing unit tests for model training pipelines, and packaging models into microservices for low-latency inference.',
    coreResponsibilities: [
      'Design, train, and validate machine learning and deep learning architectures.',
      'Optimize models for inference latency and memory footprints (quantization, pruning).',
      'Build reproducible automated data preprocessing and feature engineering pipelines.',
      'Monitor production models for data drift, bias, and accuracy degradation.',
      'Translate business challenges into measurable statistical objectives.'
    ],
    educationPathway: [
      {
        stepNumber: 1,
        stage: '10th Standard',
        title: 'Mathematical Rigor',
        details: 'Develop strong aptitude for functions, algebraic equations, and coordinate geometry.',
        criticalMilestone: 'Distinction in Mathematics'
      },
      {
        stepNumber: 2,
        stage: '10+2',
        title: 'PCM with Applied Mathematics',
        details: 'Focus on probability distributions, matrices, derivatives, and vectors.',
        criticalMilestone: 'Targeting top tier CS/Math institutions'
      },
      {
        stepNumber: 3,
        stage: 'Undergraduate',
        title: 'B.Tech / B.S. in CS, Data Science, or Math & Computing',
        details: 'Master probability theory, multivariate calculus, optimization techniques, and classical algorithms.',
        criticalMilestone: 'Kaggle competitions / Research paper publication'
      },
      {
        stepNumber: 4,
        stage: 'Specialization (Optional but High Value)',
        title: 'Master’s / Research Fellowships',
        details: 'Focus on specialized sub-fields: Natural Language Processing, Computer Vision, Reinforcement Learning, or MLOps.',
        criticalMilestone: 'Production deployment experience or NeurIPS/CVPR workshop presentation'
      }
    ],
    importantSubjects: {
      highSchool: ['Mathematics', 'Statistics', 'Physics'],
      higherSecondary: ['Multivariate Calculus', 'Probability & Combinatorics', 'Linear Algebra', 'Python Programming'],
      undergraduate: ['Optimization Theory', 'Machine Learning Foundations', 'Deep Learning Architecture', 'Information Theory']
    },
    recommendedCourses: [
      'Machine Learning Specialization by Andrew Ng (DeepLearning.AI)',
      'CS229: Machine Learning (Stanford)',
      'Practical Deep Learning for Coders (Fast.ai)',
      'Full Stack Deep Learning (FSDL)'
    ],
    entranceExams: [
      { name: 'JEE Main & Advanced', level: 'National', eligibility: '10+2 PCM', targetCourses: 'B.Tech CS / AI in IITs & NITs' },
      { name: 'GATE (CS / DA - Data Science & AI)', level: 'National', eligibility: 'Undergraduate Degree', targetCourses: 'M.Tech in AI at IISc & IITs' },
      { name: 'GRE', level: 'International', eligibility: "Bachelor's Degree", targetCourses: 'M.S. in AI/CS in USA/Europe' }
    ],
    jobRoles: ['Machine Learning Engineer', 'Deep Learning Researcher', 'Computer Vision Specialist', 'NLP / LLM Engineer', 'MLOps Specialist'],
    industries: ['Autonomous Mobility', 'Healthcare Diagnostics', 'Financial Risk Modeling', 'Search Engines & Recommendation', 'Robotics'],
    growthLadder: [
      { stageName: 'Junior ML Engineer', experience: '0 - 2 Years', typicalDesignation: 'ML Engineer I', focus: 'Data cleaning, running existing baselines, and model validation.' },
      { stageName: 'Machine Learning Engineer', experience: '2 - 5 Years', typicalDesignation: 'ML Engineer II', focus: 'Custom model architecture design, loss function experimentation, and deployment.' },
      { stageName: 'Staff ML Engineer / Research Lead', experience: '5 - 9 Years', typicalDesignation: 'Lead ML Scientist', focus: 'Guiding enterprise AI strategy, novel model breakthroughs, and production stability.' }
    ],
    higherEducation: ['M.S. in Artificial Intelligence', 'Ph.D. in Machine Learning / Computer Vision', 'M.Tech in Computational Data Science'],
    faqs: [
      {
        question: 'Do I need a Ph.D. to work in AI?',
        answer: 'Not for Machine Learning Engineering. A Ph.D. is beneficial for fundamental research labs (like Google DeepMind or FAIR) inventing brand new architectures, but applied ML engineers deploying real-world systems primarily need strong software engineering skills paired with applied mathematics.'
      },
      {
        question: 'What differentiates a Data Scientist from an ML Engineer?',
        answer: 'Data scientists primarily analyze data to extract business insights and build prototype statistical models. ML Engineers specialize in turning those models into production-grade, low-latency, scalable software services running on cloud infrastructure.'
      }
    ],
    workLifeBalance: 'Good; heavy cognitive focus during model training and evaluation.',
    workEnvironment: 'Tech campuses or remote workstations with cloud GPU access.',
    stressLevel: 'Moderate'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Computer Science & IT',
    shortIntro: 'Uncovers hidden patterns, predicts trends, and drives business decisions using statistical modeling, big data tools, and experimental design.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's / Master's in Statistics, CS, Economics, or Math",
    minYearsStudy: 4,
    workStyle: 'Remote / Hybrid',
    growthRate: 'High Demand',
    salary: {
      entry: '₹5.5 - ₹11 LPA ($70,000 - $100,000)',
      mid: '₹14 - ₹26 LPA ($115,000 - $165,000)',
      senior: '₹28 - ₹55 LPA ($170,000 - $240,000)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Statistical Inference', 'Python / R Programming', 'SQL & Data Warehousing', 'A/B Testing & Causal Inference', 'Data Storytelling & Dashboards'],
    technicalSkills: ['Pandas, NumPy, Scikit-learn', 'BigQuery, Snowflake, Spark', 'Tableau, PowerBI, Streamlit', 'Hypothesis Testing & Bayesian Modeling', 'Git & Docker basics'],
    softSkills: ['Business Acumen', 'Executive Presentation', 'Curiosity', 'Translating Ambiguous Problems', 'Cross-team Communication'],
    overview: 'Data Scientists empower organizations to make evidence-based decisions rather than relying on intuition. They query massive enterprise data warehouses, formulate hypotheses, run controlled experiments, and build predictive models to answer critical questions about customer retention, pricing, and operational efficiency.',
    dailyRoutine: 'Writing complex SQL queries to extract cohort data, conducting exploratory data analysis in Jupyter notebooks, designing an A/B test sample size calculation, meeting with marketing leadership to present model findings, and documenting business impacts.',
    coreResponsibilities: [
      'Formulate analytical hypotheses to address core business dilemmas.',
      'Design, monitor, and statistically evaluate randomized controlled trials (A/B experiments).',
      'Construct supervised and unsupervised predictive models for customer segmentation and forecasting.',
      'Build intuitive dashboards that allow stakeholders to self-serve operational metrics.',
      'Collaborate with data engineers to ensure clean, reliable ETL pipelines.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Quantitative Basics', details: 'Focus on graphs, percentages, probability, and algebraic problem-solving.', criticalMilestone: 'Consistent math proficiency' },
      { stepNumber: 2, stage: '10+2', title: 'Science or Commerce with Math/Stats', details: 'Applied mathematics, statistics, computer science, or economics.', criticalMilestone: 'Solid grasp of probability and differential calculus' },
      { stepNumber: 3, stage: 'Undergraduate', title: 'B.Sc / B.Tech / B.Stat in Stats, CS, or Econ', details: 'Study regression models, statistical hypothesis testing, algorithms, and relational databases.', criticalMilestone: 'Real-world data analysis portfolio with GitHub / Tableau' },
      { stepNumber: 4, stage: 'Applied Experience', title: 'Data Analytics Internships', details: 'Demonstrate measurable business ROI through data projects in marketing, finance, or product.', criticalMilestone: 'First full-time Data Scientist appointment' }
    ],
    importantSubjects: {
      highSchool: ['Mathematics', 'Economics', 'Basic Statistics'],
      higherSecondary: ['Probability Distributions', 'Descriptive Statistics', 'Calculus', 'Computer Science'],
      undergraduate: ['Applied Linear Regression', 'Multivariate Analysis', 'Econometrics', 'Database Management Systems']
    },
    recommendedCourses: ['IBM Data Science Professional Certificate', 'Statistical Learning by Hastie & Tibshirani (Stanford)', 'SQL for Data Science (UC Davis)', 'Causal Inference for The Brave and True'],
    entranceExams: [
      { name: 'ISI Admission Test', level: 'National', eligibility: '10+2 / Bachelor’s with Math', targetCourses: 'B.Stat / M.Stat at Indian Statistical Institute' },
      { name: 'IIT JAM (Mathematical Statistics)', level: 'National', eligibility: "Bachelor's with Math/Stats", targetCourses: 'M.Sc in Stats at IITs' },
      { name: 'GATE (Data Science & AI)', level: 'National', eligibility: 'Degree in Science/Engg', targetCourses: 'M.Tech Data Science' }
    ],
    jobRoles: ['Data Scientist', 'Product Data Analyst', 'Quantitative Analyst', 'Business Intelligence Consultant', 'Decision Scientist'],
    industries: ['E-Commerce & Retail', 'Fintech & Risk Assessment', 'Streaming Entertainment', 'Healthcare & Pharmaceuticals', 'Consulting'],
    growthLadder: [
      { stageName: 'Junior Data Scientist / Analyst', experience: '0 - 2 Years', typicalDesignation: 'Associate Data Scientist', focus: 'SQL extraction, descriptive dashboards, and exploratory data reporting.' },
      { stageName: 'Data Scientist', experience: '2 - 5 Years', typicalDesignation: 'Data Scientist II', focus: 'Predictive modeling, end-to-end experiment design, and driving business KPIs.' },
      { stageName: 'Lead Data Scientist', experience: '5 - 8 Years', typicalDesignation: 'Staff / Principal Data Scientist', focus: 'Company experimentation strategy, metric governance, and mentoring analytics teams.' }
    ],
    higherEducation: ['M.S. in Data Science', 'M.Stat (Master of Statistics)', 'M.S. in Business Analytics', 'Ph.D. in Applied Statistics'],
    faqs: [
      { question: 'Is coding difficult for non-computer science students wanting to enter data science?', answer: 'Python and SQL are widely considered the most accessible programming languages for beginners. A background in math, economics, or biology can transition smoothly into data science by focusing on practical analytics libraries.' },
      { question: 'What is the difference between Data Analyst and Data Scientist?', answer: 'Data Analysts focus primarily on what happened in the past (reporting, historical trends, KPI tracking). Data Scientists focus on why it happened and what will happen next (predictive modeling, causal inference, and automated decision algorithms).' }
    ],
    workLifeBalance: 'Usually very good; predictable project timelines and minimal on-call urgency.',
    workEnvironment: 'Corporate offices, consulting firms, or remote home offices.',
    stressLevel: 'Moderate'
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Computer Science & IT',
    shortIntro: 'Protects computer networks, sensitive data, and digital infrastructure from malicious cyber attacks, breaches, and vulnerabilities.',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's in CS, IT, Cybersecurity, or relevant certifications",
    minYearsStudy: 4,
    workStyle: 'Office',
    growthRate: 'High Demand',
    salary: {
      entry: '₹4.5 - ₹9 LPA ($68,000 - $92,000)',
      mid: '₹12 - ₹22 LPA ($105,000 - $155,000)',
      senior: '₹26 - ₹50+ LPA ($165,000 - $240,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Network Protocol Analysis', 'Vulnerability Assessment (VAPT)', 'Security Information & Event Management (SIEM)', 'Incident Response', 'Threat Modeling'],
    technicalSkills: ['Wireshark, Nmap, Metasploit, Burp Suite', 'Linux System Administration & Shell Scripting', 'Firewalls, IDS/IPS configuration', 'Splunk, Microsoft Sentinel', 'Identity and Access Management (IAM)'],
    softSkills: ['Attention to Anomalies', 'Calmness Under Pressure', 'Investigative Mindset', 'Discreet Integrity', 'Cross-functional Crisis Communication'],
    overview: 'Cybersecurity Analysts act as digital defenders. They monitor network traffic for suspicious activity, configure defensive perimeters, audit systems for unpatched vulnerabilities, and coordinate immediate containment responses when an attack or data breach occurs.',
    dailyRoutine: 'Analyzing security alerts from SIEM dashboards, triaging potential phishing incidents, running vulnerability scans against external IP blocks, reviewing firewall access rules, and updating security incident documentation.',
    coreResponsibilities: [
      'Monitor organization-wide network logs and investigate suspicious behavioral spikes.',
      'Perform regular penetration testing and vulnerability assessments on web apps and servers.',
      'Coordinate incident containment procedures during ransomware or unauthorized access alerts.',
      'Enforce multi-factor authentication, endpoint security agents, and least-privilege policies.',
      'Conduct employee security awareness training and tabletop crisis simulations.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Computer Fundamentals', details: 'Familiarity with operating systems, computer hardware, and internet protocol basics.', criticalMilestone: 'Aptitude for logical deduction' },
      { stepNumber: 2, stage: '10+2', title: 'Science or IT Stream', details: 'Physics, Mathematics, and Computer Science / Informatics Practices.', criticalMilestone: 'Setting up home lab with Linux and virtual machines' },
      { stepNumber: 3, stage: 'Undergraduate', title: 'B.Tech CS / BCA / B.Sc Cyber Forensics', details: 'Study computer networking (TCP/IP, routing, DNS), cryptography, and operating system kernels.', criticalMilestone: 'CompTIA Security+ or CEH certification' },
      { stepNumber: 4, stage: 'SOC or Junior Analyst Role', title: 'Security Operations Center (SOC)', details: 'Hands-on triage of tier-1 alerts, log correlation, and real attack remediation.', criticalMilestone: 'Advancement to Tier-2 incident responder or pen-tester' }
    ],
    importantSubjects: {
      highSchool: ['Computer Applications', 'Mathematics', 'Physics'],
      higherSecondary: ['Computer Science', 'Data Communication', 'Algebra', 'Electronics'],
      undergraduate: ['Computer Networks', 'Applied Cryptography', 'Ethical Hacking', 'Information Security Law & Forensics']
    },
    recommendedCourses: ['CompTIA Security+ Certification', 'Certified Information Systems Security Professional (CISSP)', 'Offensive Security Certified Professional (OSCP)', 'Google Cybersecurity Professional Certificate'],
    entranceExams: [
      { name: 'JEE Main', level: 'National', eligibility: '10+2 with PCM', targetCourses: 'B.Tech in CS / Information Security' },
      { name: 'State Engineering Entrance (KEAM, KCET)', level: 'State', eligibility: '10+2 PCM', targetCourses: 'Cybersecurity engineering seats' }
    ],
    jobRoles: ['SOC Analyst', 'Penetration Tester / Ethical Hacker', 'Security Consultant', 'Incident Response Specialist', 'Chief Information Security Officer (CISO)'],
    industries: ['Banking & Financial Services', 'Defense & Intelligence', 'Critical Infrastructure & Energy', 'Healthcare Systems', 'Cloud Providers'],
    growthLadder: [
      { stageName: 'SOC Analyst Tier 1', experience: '0 - 2 Years', typicalDesignation: 'Junior Security Analyst', focus: 'Monitoring alerts, initial threat triaging, and privilege escalation checks.' },
      { stageName: 'Security Engineer / Pen-Tester', experience: '2 - 5 Years', typicalDesignation: 'VAPT Specialist / Security Engineer', focus: 'Active intrusion testing, defensive architectural reviews, and automation.' },
      { stageName: 'Lead Security Architect / CISO', experience: '7+ Years', typicalDesignation: 'Head of Information Security', focus: 'Enterprise risk management, regulatory compliance (ISO 27001, SOC 2), and board reporting.' }
    ],
    higherEducation: ['M.S. in Cybersecurity & Information Assurance', 'M.Tech in Cyber Security and Digital Forensics', 'Executive Cybersecurity Leadership Diplomas'],
    faqs: [
      { question: 'Is ethical hacking legal?', answer: 'Yes, completely legal when performed with explicit written authorization from the system owner. Ethical hackers (penetration testers) are hired by companies specifically to find and fix vulnerabilities before cybercriminals exploit them.' },
      { question: 'Are industry certifications more important than a degree in cybersecurity?', answer: 'Certifications (such as CompTIA Security+, CEH, and especially practical exams like OSCP) carry immense weight in cybersecurity hiring because they demonstrate real hands-on command-line capability.' }
    ],
    workLifeBalance: 'Structured with occasional high-intensity shifts during active security incidents.',
    workEnvironment: 'Secure SOC monitoring rooms or corporate office security departments.',
    stressLevel: 'High'
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    category: 'Computer Science & IT',
    shortIntro: 'Builds interactive websites, web applications, and digital interfaces that users engage with every day across browsers and devices.',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's (BCA / B.Sc / B.Tech) or Strong Portfolio",
    minYearsStudy: 3,
    workStyle: 'Remote / Hybrid',
    growthRate: 'High Demand',
    salary: {
      entry: '₹3.5 - ₹8 LPA ($55,000 - $80,000)',
      mid: '₹10 - ₹20 LPA ($95,000 - $140,000)',
      senior: '₹22 - ₹42 LPA ($150,000 - $210,000)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['HTML5, CSS3, Modern JavaScript', 'React / Next.js / Vue', 'Responsive Design & Accessibility', 'RESTful APIs & State Management', 'Web Performance Optimization'],
    technicalSkills: ['TypeScript, Tailwind CSS, SASS', 'Node.js / Express or Python backend basics', 'PostgreSQL, MongoDB, Supabase', 'Git, Vercel, Netlify, CI/CD', 'Browser DevTools & Lighthouse Audits'],
    softSkills: ['Visual Precision', 'Empathy for User Experience', 'Fast Adaptability to New Tooling', 'Self-Directed Problem Solving', 'Clear Remote Collaboration'],
    overview: 'Web Developers create the visual, functional, and responsive components of the internet. They bridge the gap between creative visual designs and backend data pipelines, ensuring pages load quickly, look polished across every screen size, and provide intuitive user interactions.',
    dailyRoutine: 'Converting Figma design prototypes into clean React components, hooking up frontend state to backend REST APIs, debugging browser cross-compatibility quirks, running Lighthouse performance audits, and shipping updates.',
    coreResponsibilities: [
      'Implement pixel-perfect, accessible web layouts following modern semantic standards.',
      'Optimize client-side rendering, assets, and bundle sizes for fast load times.',
      'Integrate third-party payment gateways, authentication flows, and analytics services.',
      'Ensure cross-browser compatibility across Safari, Chrome, Firefox, and Edge.',
      'Collaborate with UI/UX designers to bring interaction prototypes to life.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Basic Computer Curiosity', details: 'Learn basic HTML, CSS, and how web browsers display pages.', criticalMilestone: 'Building a first personal static webpage' },
      { stepNumber: 2, stage: '10+2', title: 'Any Stream with Math/CS', details: 'Science, Commerce, or Arts with Computer Science or Informatics Practices.', criticalMilestone: 'Mastering modern JavaScript fundamentals (ES6+)' },
      { stepNumber: 3, stage: 'Degree or Bootcamp', title: 'BCA / B.Tech / B.Sc or Intensive Practice', details: 'Deep dive into modern component frameworks (React, Next.js), TypeScript, and databases.', criticalMilestone: '3 deployed full-stack web applications live on custom domains' },
      { stepNumber: 4, stage: 'Professional Entry', title: 'Junior Web Developer / Freelance', details: 'Work on client applications, agency projects, or early-stage tech startup codebases.', criticalMilestone: 'Building production-grade client-facing features' }
    ],
    importantSubjects: {
      highSchool: ['Computer Applications', 'English', 'Art / Design basics'],
      higherSecondary: ['Web Scripting', 'Mathematics', 'Computer Science'],
      undergraduate: ['Internet & Web Technologies', 'Database Systems', 'User Interface Design', 'Software Engineering']
    },
    recommendedCourses: ['The Odin Project (Free, Open Source)', 'Full Stack Open (University of Helsinki)', 'Meta Front-End Developer Professional Certificate', 'Epic React by Kent C. Dodds'],
    entranceExams: [
      { name: 'NIMCET', level: 'National', eligibility: 'BCA / B.Sc with Math', targetCourses: 'MCA in National Institutes of Technology (NITs)' },
      { name: 'CUET UG', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'BCA / B.Sc Computer Science in Central Universities' }
    ],
    jobRoles: ['Frontend Developer', 'Full-Stack Web Developer', 'UI Engineer', 'Web Applications Specialist', 'Freelance Web Consultant'],
    industries: ['Digital Agencies & Design Studios', 'SaaS Products', 'E-Commerce Brands', 'Media & Publishing', 'Fintech'],
    growthLadder: [
      { stageName: 'Junior Frontend Developer', experience: '0 - 2 Years', typicalDesignation: 'Junior Web Developer', focus: 'Translating designs into responsive HTML/CSS/React and fixing layout bugs.' },
      { stageName: 'Mid-Level Web Developer', experience: '2 - 5 Years', typicalDesignation: 'Frontend / Fullstack Developer', focus: 'Complex state management, API contracts, caching strategies, and animations.' },
      { stageName: 'Lead Frontend Architect', experience: '5 - 8 Years', typicalDesignation: 'Staff Frontend Engineer', focus: 'Design system governance, micro-frontend architecture, and web performance standards.' }
    ],
    higherEducation: ['MCA (Master of Computer Applications)', 'M.S. in Human-Computer Interaction', 'Specialized Certifications in Cloud Architecture'],
    faqs: [
      { question: 'Can I get a web development job without a college degree?', answer: 'Yes, web development is one of the most meritocratic fields in technology. A public portfolio of live, well-crafted applications and clean GitHub repositories often speaks louder than a formal degree to agency and startup recruiters.' },
      { question: 'What should I learn first: Frontend or Backend?', answer: 'Starting with Frontend (HTML, CSS, and modern JavaScript) provides immediate visual feedback for your code, making early learning deeply rewarding. Once comfortable, adding backend logic (Node.js/SQL) makes you a versatile full-stack builder.' }
    ],
    workLifeBalance: 'Very flexible; substantial opportunities for remote work and freelancing.',
    workEnvironment: 'Remote home workspace, co-working studios, or agency offices.',
    stressLevel: 'Moderate'
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    shortIntro: 'Researches, designs, develops, and tests mechanical and thermal devices, engines, robotics, and manufacturing machines.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree (B.Tech / B.E. in Mechanical Engineering)",
    minYearsStudy: 4,
    workStyle: 'Lab / Clinical',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹3.8 - ₹7 LPA ($62,000 - $82,000)',
      mid: '₹8 - ₹18 LPA ($90,000 - $135,000)',
      senior: '₹20 - ₹40+ LPA ($140,000 - $200,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Computer-Aided Design (CAD)', 'Thermodynamics & Heat Transfer', 'Finite Element Analysis (FEA)', 'Fluid Mechanics', 'Materials Science'],
    technicalSkills: ['SolidWorks, CATIA, AutoCAD, ANSYS', 'Geometric Dimensioning & Tolerancing (GD&T)', 'CNC Programming & 3D Prototyping', 'MATLAB & Simulink', 'Design for Manufacturing (DFM)'],
    softSkills: ['Spatial Reasoning', 'Hands-On Pragmatism', 'Safety Consciousness', 'Multi-Disciplinary Teamwork', 'Root-Cause Analysis'],
    overview: 'Mechanical Engineering is one of the broadest and foundational engineering disciplines. Mechanical engineers design everything from miniature medical implants and electric vehicle drivetrains to aerospace turbines, renewable energy plants, and automated assembly robotics.',
    dailyRoutine: 'Modifying parametric 3D CAD assemblies in SolidWorks, running finite element stress simulations in ANSYS, inspecting prototype parts on the shop floor with digital calipers, evaluating supplier material certificates, and conducting thermal heat dissipation tests.',
    coreResponsibilities: [
      'Model precision 3D components and create detailed 2D fabrication blueprints with GD&T.',
      'Conduct structural stress, vibration, and thermal computational simulations.',
      'Select appropriate industrial materials (alloys, polymers, composites) for mechanical wear and durability.',
      'Supervise testing of functional prototypes under extreme load conditions.',
      'Collaborate with electrical and software engineers on mechatronic control systems.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Physics & Applied Mathematics', details: 'Build solid mechanics foundations: forces, work, energy, and geometric calculation.', criticalMilestone: 'Strong scores in Math and Science' },
      { stepNumber: 2, stage: '10+2', title: 'Science Stream (PCM)', details: 'Physics, Chemistry, and Mathematics. Developing spatial drawing and physics intuition is essential.', criticalMilestone: 'Engineering Entrance Exams (JEE, State CETs)' },
      { stepNumber: 3, stage: 'Undergraduate', title: 'B.Tech / B.E. in Mechanical Engineering', details: 'Study kinematics of machines, strength of materials, thermodynamics, fluid dynamics, and manufacturing processes.', criticalMilestone: 'Formula Student / BAJA competition team participation' },
      { stepNumber: 4, stage: 'Industrial Training', title: 'Factory / R&D Internships', details: 'Gain hands-on shop-floor and design-office experience in automotive, heavy machinery, or HVAC plants.', criticalMilestone: 'Completing a working mechanical capstone prototype' }
    ],
    importantSubjects: {
      highSchool: ['Physics', 'Mathematics', 'Technical Drawing / Geometry'],
      higherSecondary: ['Applied Mechanics', 'Calculus', 'Thermodynamic Principles', 'Chemistry of Metals'],
      undergraduate: ['Strength of Materials', 'Machine Design', 'Fluid Mechanics & Machinery', 'Manufacturing Technology', 'Heat & Mass Transfer']
    },
    recommendedCourses: ['SolidWorks Associate Certification (CSWA/CSWP)', 'Ansys Simulation Fundamentals (Cornell / edX)', 'Introduction to Mechatronics (Georgia Tech)', 'Design for Manufacturing Specialization'],
    entranceExams: [
      { name: 'JEE Main & Advanced', level: 'National', eligibility: '10+2 PCM', targetCourses: 'Mechanical Engineering in IITs & NITs' },
      { name: 'GATE (Mechanical Engineering)', level: 'National', eligibility: 'B.Tech / B.E.', targetCourses: 'PSU Recruitment (IOCL, ONGC, BHEL) & M.Tech' },
      { name: 'State Engineering CETs', level: 'State', eligibility: '10+2 PCM', targetCourses: 'Premier State Engineering Colleges' }
    ],
    jobRoles: ['CAD / Design Engineer', 'Thermal Systems Engineer', 'Automotive R&D Specialist', 'Mechatronics Engineer', 'Plant Operations Manager'],
    industries: ['Automotive & Electric Vehicles', 'Aerospace & Defence Equipment', 'Heavy Machinery & Robotics', 'Renewable Energy & Power Plants', 'Medical Device Manufacturing'],
    growthLadder: [
      { stageName: 'Graduate Engineer Trainee (GET)', experience: '0 - 2 Years', typicalDesignation: 'Junior Mechanical Engineer', focus: 'Drafting 2D blueprints, testing prototypes, and assisting senior designers.' },
      { stageName: 'Design / Systems Engineer', experience: '2 - 6 Years', typicalDesignation: 'Mechanical Design Engineer II', focus: 'Independent component design, FEA validation, and supplier fabrication coordination.' },
      { stageName: 'Principal Mechanical Architect', experience: '7 - 12+ Years', typicalDesignation: 'Chief Engineer / Technical Director', focus: 'Leading cross-functional vehicle or machine platform development from concept to mass production.' }
    ],
    higherEducation: ['M.Tech / M.S. in Automotive / Aerospace / Robotics', 'M.S. in Computational Mechanics', 'MBA in Operations & Supply Chain'],
    faqs: [
      { question: 'Is mechanical engineering relevant in the era of software and AI?', answer: 'Extremely relevant. Electric vehicles, aerospace exploration, advanced robotics, renewable wind turbines, and wearable biomedical devices all rely on mechanical engineers to build the physical hardware that software operates on. Modern mechanical engineers also utilize programming and simulation automation.' },
      { question: 'Can mechanical engineers transition to robotics or mechatronics?', answer: 'Yes. Mechatronics is a natural extension combining mechanical systems with sensors, microcontrollers, and actuator control code.' }
    ],
    workLifeBalance: 'Predictable hours; mix of modern CAD design offices and factory testing floors.',
    workEnvironment: 'Engineering design bureaus, testing test-beds, and manufacturing facilities.',
    stressLevel: 'Moderate'
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    category: 'Engineering',
    shortIntro: 'Conceives, designs, builds, supervises, and maintains infrastructure projects like bridges, roads, dams, skyscrapers, and water supply networks.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree (B.Tech / B.E. in Civil Engineering)",
    minYearsStudy: 4,
    workStyle: 'Field & Travel',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹3.5 - ₹6.5 LPA ($60,000 - $80,000)',
      mid: '₹8 - ₹16 LPA ($85,000 - $125,000)',
      senior: '₹18 - ₹36+ LPA ($130,000 - $190,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Structural Analysis', 'Geotechnical Engineering', 'Surveying & GIS', 'Construction Project Management', 'Building Information Modeling (BIM)'],
    technicalSkills: ['AutoCAD Civil 3D, Revit, STAAD.Pro, ETABS', 'Primavera P6, MS Project', 'Reinforced Concrete & Steel Design Codes (IS / Eurocode / ACI)', 'Hydraulic Modeling & Soil Testing', 'Cost Estimation & Quantity Surveying'],
    softSkills: ['Site Leadership', 'Environmental Ethics', 'Rigorous Safety Mindset', 'Negotiation with Contractors', 'Resilience in Outdoor Conditions'],
    overview: 'Civil engineers shape the physical foundation of human civilization. They transform raw land into livable, interconnected communities by engineering earthquake-resistant structures, modern transit systems, sustainable water filtration plants, and coastal defense systems.',
    dailyRoutine: 'Inspecting foundation rebar placement on the construction site alongside surveyors, reviewing structural load calculations in STAAD.Pro, verifying concrete cube compression test lab reports, and reviewing project milestone schedules with site contractors.',
    coreResponsibilities: [
      'Calculate structural loads (dead, live, wind, seismic) to ensure building safety.',
      'Supervise on-site construction quality, material standards, and worker safety protocols.',
      'Interpret geotechnical soil borehole reports to recommend safe foundation depths.',
      'Prepare detailed bill of quantities (BOQ) and cost estimation sheets for tenders.',
      'Ensure infrastructure designs comply with municipal environmental and zoning codes.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Geometry & Environmental Science', details: 'Solid grasp of physical science, landforms, and geometric calculation.', criticalMilestone: 'High proficiency in Mathematics' },
      { stepNumber: 2, stage: '10+2', title: 'Science (PCM)', details: 'Physics, Chemistry, and Mathematics. Focus on statics, vectors, and fluid properties.', criticalMilestone: 'Competitive score in JEE / State Engineering exams' },
      { stepNumber: 3, stage: 'Undergraduate', title: 'B.Tech / B.E. in Civil Engineering', details: 'Coursework in Structural Analysis, Soil Mechanics, Fluid Hydraulics, Surveying, and Environmental Engineering.', criticalMilestone: 'Site internship with an infrastructure or contracting firm' },
      { stepNumber: 4, stage: 'Professional Licensure', title: 'Chartered / Licensed Structural Engineer', details: 'Gain site experience and achieve recognized professional licensing to sign off on structural drawings.', criticalMilestone: 'Registered Professional Engineer status' }
    ],
    importantSubjects: {
      highSchool: ['Geometry', 'Physics', 'Earth Sciences'],
      higherSecondary: ['Vectors & Statics', 'Calculus', 'Physical Chemistry', 'Technical Graphics'],
      undergraduate: ['Structural Mechanics', 'Soil Mechanics & Geotechnical Engg', 'Design of Concrete & Steel Structures', 'Hydrology & Water Resources', 'Transportation Engineering']
    },
    recommendedCourses: ['STAAD.Pro & ETABS Structural Modeling', 'Autodesk Certified Professional: Revit for Structural Design', 'Project Management Professional (PMP) / Construction PM', 'Green Building Design (LEED / GRIHA)'],
    entranceExams: [
      { name: 'JEE Main & Advanced', level: 'National', eligibility: '10+2 PCM', targetCourses: 'Civil Engineering in IITs & NITs' },
      { name: 'GATE (Civil Engineering)', level: 'National', eligibility: 'B.Tech Civil', targetCourses: 'PSU Jobs (NHAI, DMRC, NBCC) & Master’s in Structures' },
      { name: 'UPSC Indian Engineering Services (IES/ESE)', level: 'National', eligibility: 'Civil Engineering Degree', targetCourses: 'Gazetted Civil Engineering Officer in Central Govt' }
    ],
    jobRoles: ['Structural Engineer', 'Site Construction Manager', 'Geotechnical Consultant', 'Transportation Planner', 'Quantity Surveyor & Cost Estimator'],
    industries: ['Transportation (Highways, Metro, High-Speed Rail)', 'Commercial & Residential Real Estate', 'Public Works & Water Supply Departments', 'Renewable Energy Infrastructure (Dams, Wind Parks)', 'Disaster Mitigation Agencies'],
    growthLadder: [
      { stageName: 'Junior Site / Structural Engineer', experience: '0 - 2 Years', typicalDesignation: 'Assistant Civil Engineer', focus: 'Site supervision, quality verification, and assisting with drafting.' },
      { stageName: 'Project Engineer / Senior Structural Analyst', experience: '3 - 7 Years', typicalDesignation: 'Structural Design Lead', focus: 'Complete independent design of multi-story structures and contractor milestone oversight.' },
      { stageName: 'Project Director / Chief Engineer', experience: '8 - 15+ Years', typicalDesignation: 'Infrastructure Project Director', focus: 'Managing multi-million dollar infrastructure contracts, government liaison, and master planning.' }
    ],
    higherEducation: ['M.Tech in Structural Engineering', 'M.Tech in Geotechnical / Transportation Engineering', 'Master of Construction Management (NICMAR / International)'],
    faqs: [
      { question: 'Does a civil engineer have to spend all their time on noisy construction sites?', answer: 'Not necessarily. The profession divides into Site Engineering (managing actual on-ground execution, concrete pouring, and safety) and Design Engineering (working in modern corporate offices running structural software simulations like ETABS and Revit).' },
      { question: 'What is the future outlook with smart cities and green buildings?', answer: 'The demand for civil engineers specialized in sustainable building materials, earthquake resilience, flood defense modeling, and urban transit networks is rapidly expanding.' }
    ],
    workLifeBalance: 'Varies; site roles can require early mornings, while consulting design offices keep standard business hours.',
    workEnvironment: 'Balance between corporate structural design offices and outdoor active construction sites.',
    stressLevel: 'Structured'
  },
  {
    id: 'electrical-engineer',
    title: 'Electrical Engineer',
    category: 'Engineering',
    shortIntro: 'Designs, develops, tests, and supervises the manufacturing of electrical equipment, energy grids, circuit boards, and electric propulsion systems.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree (B.Tech / B.E. in Electrical Engineering)",
    minYearsStudy: 4,
    workStyle: 'Lab / Clinical',
    growthRate: 'High Demand',
    salary: {
      entry: '₹4.0 - ₹7.5 LPA ($64,000 - $85,000)',
      mid: '₹9 - ₹19 LPA ($92,000 - $138,000)',
      senior: '₹22 - ₹44+ LPA ($145,000 - $210,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Circuit Design & Simulation', 'Power Systems & Smart Grids', 'Electromagnetic Theory', 'Embedded Systems & Microcontrollers', 'Control Systems Engineering'],
    technicalSkills: ['MATLAB / Simulink, Altium Designer, LTspice', 'PLC & SCADA Programming', 'Power World Simulator, ETAP', 'Battery Management Systems (BMS) for EVs', 'Hardware Description Languages (VHDL / Verilog)'],
    softSkills: ['Safety Compliance Rigor', 'Analytical Diagnosis', 'Precision Measurement', 'Interdisciplinary Coordination', 'Methodical Problem Solving'],
    overview: 'Electrical engineers are the architects of modern power and electronics. They span microelectronics (the miniature circuits inside smartphones and medical pacemakers) all the way to macro power grids, smart solar farms, and high-voltage electric vehicle drivetrains.',
    dailyRoutine: 'Testing a printed circuit board prototype with an oscilloscope and multimeter, simulating transient voltage spikes in LTspice, inspecting solar inverter transformer installations, and writing microcontroller firmware in C for an electric scooter powertrain.',
    coreResponsibilities: [
      'Design electronic schematics, PCB layouts, and power distribution switchboards.',
      'Simulate electrical harmonics, load flow, and thermal dissipation before fabrication.',
      'Ensure high-voltage equipment satisfies strict international electrical safety standards (IEEE / IEC).',
      'Develop embedded firmware to control electrical motors, actuators, and sensor arrays.',
      'Architect renewable energy integration (solar panels, wind turbines) into utility grids.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Electricity & Magnetism Foundations', details: 'Ohm’s law, magnetic fields, and algebraic circuit calculations.', criticalMilestone: 'Top grades in Science & Math' },
      { stepNumber: 2, stage: '10+2', title: 'Science (PCM)', details: 'Alternating currents, electromagnetic induction, semiconductors, and calculus.', criticalMilestone: 'Entrance Exam Rank (JEE / State Tests)' },
      { stepNumber: 3, stage: 'Undergraduate', title: 'B.Tech / B.E. in Electrical / EEE', details: 'Master Network Theory, Electrical Machines, Power Systems, Analog/Digital Electronics, and Control Systems.', criticalMilestone: 'Hardware capstone project (e.g., Inverter or EV powertrain design)' },
      { stepNumber: 4, stage: 'Specialization', title: 'EV / Power Electronics / Embedded Systems', details: 'Specialize in emerging high-growth sub-fields like battery systems or semiconductor design.', criticalMilestone: 'R&D role or grid operations appointment' }
    ],
    importantSubjects: {
      highSchool: ['Physics (Electricity)', 'Mathematics', 'Chemistry'],
      higherSecondary: ['Electromagnetism', 'Calculus', 'Complex Numbers', 'Semiconductor Physics'],
      undergraduate: ['Circuit Analysis', 'Power Electronics', 'Electrical Machines', 'Signals and Systems', 'Control Engineering']
    },
    recommendedCourses: ['Electric Cars: Technology and Business (TU Delft)', 'Power Electronics Specialization (University of Colorado Boulder)', 'Altium Essentials PCB Design', 'Embedded Systems - Shape the World (UT Austin)'],
    entranceExams: [
      { name: 'JEE Main & Advanced', level: 'National', eligibility: '10+2 PCM', targetCourses: 'Electrical Engineering in IITs & NITs' },
      { name: 'GATE (Electrical Engineering - EE)', level: 'National', eligibility: 'B.Tech EE/EEE', targetCourses: 'Power Grid, NTPC, BHEL, ISRO & M.Tech' }
    ],
    jobRoles: ['Power Systems Engineer', 'EV Powertrain / Battery Engineer', 'Hardware Design Specialist', 'Control Systems Engineer', 'Substation Automation Engineer'],
    industries: ['Electric Vehicle (EV) Automakers', 'Renewable Energy & Solar Parks', 'Semiconductor & Consumer Electronics', 'National Power Distribution Utilities', 'Aerospace & Defense'],
    growthLadder: [
      { stageName: 'Graduate Trainee Engineer', experience: '0 - 2 Years', typicalDesignation: 'Assistant Electrical Engineer', focus: 'Circuit board testing, schematic documentation, and lab measurements.' },
      { stageName: 'Electrical Design Specialist', experience: '3 - 6 Years', typicalDesignation: 'Hardware / Power Systems Engineer', focus: 'Independent PCB architectural design, power flow simulations, and prototyping.' },
      { stageName: 'Chief Electrical Architect', experience: '7 - 12+ Years', typicalDesignation: 'Principal Electrical Engineer / Grid Specialist', focus: 'Leading platform-wide electrification programs or high-voltage grid infrastructure.' }
    ],
    higherEducation: ['M.Tech in Power Electronics & Drives', 'M.S. in Electrical and Computer Engineering (ECE)', 'Master in Energy Systems Engineering'],
    faqs: [
      { question: 'What is the difference between Electrical Engineering (EE) and Electronics (ECE)?', answer: 'Electrical Engineering focuses heavily on power generation, high-voltage transmission, heavy motors, and renewable grids. Electronics Engineering concentrates on low-voltage signals, microchips, telecommunications, and digital microprocessors.' },
      { question: 'How big is the impact of Electric Vehicles (EVs) on this career?', answer: 'Enormous. Every EV requires battery management systems, motor inverters, fast charging infrastructure, and regenerative braking controllers—creating unprecedented demand for power electronics engineers.' }
    ],
    workLifeBalance: 'Steady and balanced; test bench lab work with minimal after-hours emergency calls.',
    workEnvironment: 'Hardware laboratories with oscilloscopes, test chambers, and clean room facilities.',
    stressLevel: 'Moderate'
  },
  {
    id: 'doctor',
    title: 'Doctor (MBBS / Physician)',
    category: 'Medicine & Healthcare',
    shortIntro: 'Diagnoses clinical ailments, prescribes therapeutics, performs interventions, and safeguards patient wellness.',
    heroImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    educationRequired: 'MBBS + MD/MS / DM Specialization',
    minYearsStudy: 5.5,
    workStyle: 'Hospital/Clinical',
    growthRate: 'High Demand',
    salary: {
      entry: '₹6.0 - ₹12 LPA ($65,000 - $90,000 as Resident)',
      mid: '₹15 - ₹35 LPA ($180,000 - $300,000 Specialist)',
      senior: '₹40 - ₹90+ LPA ($320,000 - $550,000+ Super-specialist)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Clinical Diagnosis', 'Patient Empathy & Bedside Manner', 'Pharmacology & Therapeutics', 'Emergency Critical Care', 'Medical Ethics'],
    technicalSkills: ['Patient History Taking & Physical Examination', 'Diagnostic Interpretation (ECG, X-Ray, CT/MRI, Blood Panels)', 'Minor Surgical Procedures & Suturing', 'Life Support Protocols (BLS / ACLS)', 'Electronic Health Records (EHR) Documentation'],
    softSkills: ['Emotional Resilience', 'High Stakes Decision Making', 'Active Listening', 'Compassion in Crisis', 'Lifelong Learning'],
    overview: 'Physicians combine deep anatomical and physiological science with human empathy to heal disease and preserve human life. The path requires immense dedication, emotional maturity, and years of rigorous clinical residency, rewarded by unmatched societal impact and job security.',
    dailyRoutine: 'Morning hospital ward rounds reviewing post-operative patient charts, outpatient clinic consultations diagnosing varied clinical complaints, interpreting radiological imaging, consulting with specialist colleagues, and performing clinical procedures.',
    coreResponsibilities: [
      'Take exhaustive clinical histories and perform methodical physical examinations.',
      'Order appropriate laboratory and radiological tests to pinpoint etiology.',
      'Formulate evidence-based pharmacological and therapeutic treatment plans.',
      'Educate patients and families regarding prognosis, lifestyle modifications, and surgical risks.',
      'Adhere strictly to medical confidentiality, infection control protocols, and informed consent.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Biology & Human Physiology Curiosity', details: 'Master cellular biology, basic human anatomy, chemistry, and scientific method.', criticalMilestone: 'High academic standing in Science' },
      { stepNumber: 2, stage: '10+2', title: 'PCB Stream (Physics, Chemistry, Biology)', details: 'Intense mastery of Botany, Zoology, Organic Chemistry, and Physics.', criticalMilestone: 'Qualifying NEET-UG with top national percentile' },
      { stepNumber: 3, stage: 'Undergraduate (5.5 Years)', title: 'MBBS (Bachelor of Medicine & Bachelor of Surgery)', details: '4.5 years of preclinical, paraclinical, and clinical subjects + 1 year of compulsory rotating internship.', criticalMilestone: 'Medical Council Registration (RMP)' },
      { stepNumber: 4, stage: 'Postgraduate Residency (3 Years)', title: 'MD / MS Specialization', details: 'Residency in General Medicine, General Surgery, Pediatrics, Cardiology, Orthopedics, etc.', criticalMilestone: 'Qualifying NEET-PG / INI-CET / USMLE' },
      { stepNumber: 5, stage: 'Super-Specialization (Optional 3 Years)', title: 'DM / MCh / Fellowship', details: 'Sub-specialization in fields such as Neurosurgery, Medical Oncology, or Interventional Cardiology.', criticalMilestone: 'Consultant / Attending Physician status' }
    ],
    importantSubjects: {
      highSchool: ['General Science', 'Human Biology', 'Chemistry', 'English'],
      higherSecondary: ['Zoology & Human Physiology', 'Botany & Genetics', 'Organic & Inorganic Chemistry', 'Physics'],
      undergraduate: ['Human Anatomy', 'Physiology & Biochemistry', 'Pathology & Microbiology', 'Pharmacology', 'Forensic Medicine', 'General Medicine & Surgery']
    },
    recommendedCourses: ['Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)', 'Good Clinical Practice (GCP) Certification', 'Medical Ethics and Global Health (Coursera)', 'Clinical Epidemiology and Evidence-Based Medicine'],
    entranceExams: [
      { name: 'NEET-UG', level: 'National', eligibility: '10+2 PCB with 50% min', targetCourses: 'MBBS in AIIMS, Govt Medical Colleges, Private Institutions' },
      { name: 'NEET-PG / INI-CET', level: 'National', eligibility: 'MBBS + 1-Year Internship', targetCourses: 'MD / MS / DNB Postgraduate Specialties' },
      { name: 'USMLE (Steps 1, 2CK, 3)', level: 'International (USA)', eligibility: 'Enrolled/Graduated MBBS', targetCourses: 'Medical Residency in the United States' }
    ],
    jobRoles: ['General Physician', 'Surgeon', 'Pediatrician', 'Cardiologist', 'Hospital Medical Director', 'Public Health Medical Officer'],
    industries: ['Tertiary Care Multispecialty Hospitals', 'Government Healthcare Services', 'Private Clinics & Diagnostic Centers', 'Academic Teaching Medical Colleges', 'International NGOs (WHO, MSF)'],
    growthLadder: [
      { stageName: 'Junior Resident / Intern', experience: '0 - 3 Years', typicalDesignation: 'Junior Resident (MBBS)', focus: 'Ward management, night casualty duties, collecting samples, patient monitoring under senior oversight.' },
      { stageName: 'Senior Resident / Specialist', experience: '3 - 6 Years', typicalDesignation: 'Senior Resident / Specialist (MD/MS)', focus: 'Conducting independent outpatient clinics, performing surgeries, guiding junior doctors.' },
      { stageName: 'Consultant / Head of Department', experience: '7 - 15+ Years', typicalDesignation: 'Senior Consultant / Professor', focus: 'Leading clinical departments, complex surgical procedures, medical research, and institutional policy.' }
    ],
    higherEducation: ['MD (Doctor of Medicine)', 'MS (Master of Surgery)', 'DM / MCh (Super-specialty)', 'Fellowship in Minimally Invasive Surgery'],
    faqs: [
      { question: 'Is the medical journey too long compared to other careers?', answer: 'Yes, becoming a fully independent specialist doctor takes roughly 8 to 11 years (5.5 years MBBS + 3 years MD/MS + optional fellowships). However, junior doctors begin earning a stipend during their internship and residency from year 5 onward.' },
      { question: 'How demanding is the work-life balance during training?', answer: 'Residency involves long hours, night duties, and emotional intensity. However, as doctors establish their practice or transition into outpatient consulting, work hours become significantly more predictable.' }
    ],
    workLifeBalance: 'Demanding in early residency; stabilizes as an experienced senior consultant.',
    workEnvironment: 'Hospitals, surgical suites, and outpatient clinics.',
    stressLevel: 'High'
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    category: 'Medicine & Healthcare',
    shortIntro: 'Dispenses medications, counsels patients on safe drug utilization, compounds therapeutics, and researches pharmacology.',
    heroImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree (B.Pharm) or Doctor of Pharmacy (Pharm.D)",
    minYearsStudy: 4,
    workStyle: 'Hospital/Clinical',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹3.0 - ₹5.5 LPA ($50,000 - $72,000)',
      mid: '₹7 - ₹14 LPA ($78,000 - $115,000)',
      senior: '₹16 - ₹32+ LPA ($120,000 - $165,000+)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Pharmacokinetics & Drug Interactions', 'Pharmaceutical Quality Assurance', 'Patient Medication Counseling', 'Regulatory Affairs & FDA Compliance', 'Sterile Compounding'],
    technicalSkills: ['HPLC, Mass Spectrometry & Chromatography', 'Pharmacy Management Software', 'Clinical Trial Documentation', 'Pharmacovigilance (Adverse Drug Event reporting)', 'Formulation Development'],
    softSkills: ['Metronomic Accuracy', 'Clear Patient Communication', 'Ethical Vigilance', 'Interpersonal Tact', 'Attention to Dosage Details'],
    overview: 'Pharmacists are medication experts who ensure patients receive the correct drugs, proper dosages, and are aware of potential harmful interactions. Beyond community retail pharmacies, pharmacists play vital roles in hospital clinical rounds, pharmaceutical manufacturing, regulatory compliance, and drug discovery trials.',
    dailyRoutine: 'Verifying physician prescriptions against patient allergen and interaction databases, dispensing medications with precise instructions, advising patients on timing and side effects, and reviewing pharmacy inventory.',
    coreResponsibilities: [
      'Screen prescriptions for dangerous drug interactions, incorrect dosages, and contraindications.',
      'Counsel patients regarding proper administration, storage, and potential dietary conflicts.',
      'Ensure hospital intensive care units receive strictly sterile intravenous formulations.',
      'Manage controlled substances inventory in compliance with state and national narcotics laws.',
      'Report adverse drug reactions to pharmacovigilance databases.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Chemistry & Biology Basics', details: 'Build solid chemistry and biological vocabulary.', criticalMilestone: 'Consistent scores in Science' },
      { stepNumber: 2, stage: '10+2', title: 'PCB or PCM Stream', details: 'Physics, Chemistry, and Biology or Mathematics with 50% minimum.', criticalMilestone: 'State Pharmacy Entrance Examination' },
      { stepNumber: 3, stage: 'Undergraduate (4 Years)', title: 'B.Pharm (Bachelor of Pharmacy) or Pharm.D (6 Yrs)', details: 'Study Medicinal Chemistry, Pharmacology, Pharmacognosy, and Pharmaceutical Analysis.', criticalMilestone: 'Pharmacy Council Registration (Registered Pharmacist)' },
      { stepNumber: 4, stage: 'Specialization or Entry', title: 'Hospital / Industrial / Clinical Practice', details: 'Join hospital clinical pharmacy teams or pharmaceutical manufacturing QA/QC departments.', criticalMilestone: 'Professional certification or GPAT qualification' }
    ],
    importantSubjects: {
      highSchool: ['General Science', 'Chemistry', 'Biology'],
      higherSecondary: ['Organic Chemistry', 'Human Biology', 'Physics', 'Biochemistry'],
      undergraduate: ['Medicinal Chemistry', 'Pharmaceutics', 'Pharmacology & Toxicology', 'Biopharmaceutics', 'Hospital & Clinical Pharmacy']
    },
    recommendedCourses: ['Clinical Pharmacokinetics by Stanford Online', 'Pharmacovigilance & Drug Safety (Coursera)', 'Regulatory Affairs in Life Sciences', 'Good Manufacturing Practices (GMP) Training'],
    entranceExams: [
      { name: 'GPAT (Graduate Pharmacy Aptitude Test)', level: 'National', eligibility: 'B.Pharm Graduate', targetCourses: 'M.Pharm in premier institutes like NIPER' },
      { name: 'State Pharmacy Entrance (MHT-CET, WBJEE Pharm)', level: 'State', eligibility: '10+2 PCB/PCM', targetCourses: 'B.Pharm admission in state universities' }
    ],
    jobRoles: ['Clinical Pharmacist', 'Hospital Pharmacist', 'Drug Safety / Pharmacovigilance Associate', 'Pharmaceutical Formulation Scientist', 'Regulatory Affairs Specialist'],
    industries: ['Pharmaceutical Manufacturing Companies', 'Multispecialty Hospitals & Cancer Centers', 'Community & Retail Pharmacy Chains', 'Clinical Research Organizations (CROs)', 'Drug Regulatory Authorities (CDSCO, US FDA)'],
    growthLadder: [
      { stageName: 'Staff Pharmacist / QA Trainee', experience: '0 - 2 Years', typicalDesignation: 'Registered Pharmacist', focus: 'Dispensing verification, patient counseling, and batch manufacturing record keeping.' },
      { stageName: 'Clinical Specialist / QA Manager', experience: '3 - 6 Years', typicalDesignation: 'Senior Clinical Pharmacist / Drug Safety Lead', focus: 'ICU therapeutic drug monitoring, clinical trial audit compliance, and team oversight.' },
      { stageName: 'Director of Pharmacy / VP Regulatory Affairs', experience: '8 - 15+ Years', typicalDesignation: 'Director of Pharmacy Services', focus: 'Formulary management, strategic drug supply chain, and global regulatory submissions.' }
    ],
    higherEducation: ['M.Pharm (Pharmacology / Pharmaceutics)', 'Pharm.D (Post-Baccalaureate)', 'MBA in Pharmaceutical Management', 'Ph.D. in Drug Discovery'],
    faqs: [
      { question: 'Is pharmacy limited to working in a retail drugstore?', answer: 'Not at all. More than 60% of pharmacy graduates work in pharmaceutical manufacturing, clinical research, drug safety monitoring (pharmacovigilance), hospital ICU advisory rounds, or government regulatory agencies.' },
      { question: 'Can I study pharmacy if I took PCM instead of Biology in 12th?', answer: 'Yes! In most jurisdictions and universities, both PCM (Maths) and PCB (Biology) students are eligible for B.Pharm admission, with remedial biology offered in the first semester.' }
    ],
    workLifeBalance: 'Good and predictable; clean, controlled indoor environments.',
    workEnvironment: 'Hospitals, modern analytical laboratories, or clean retail pharmacies.',
    stressLevel: 'Structured'
  },
  {
    id: 'nurse',
    title: 'Nurse (Registered Professional)',
    category: 'Medicine & Healthcare',
    shortIntro: 'Provides hands-on patient care, monitors vital indicators, administers medications, and advocates for patient well-being.',
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "B.Sc Nursing (4 Years) or GNM Diploma",
    minYearsStudy: 4,
    workStyle: 'Hospital/Clinical',
    growthRate: 'High Demand',
    salary: {
      entry: '₹3.2 - ₹6.0 LPA ($55,000 - $78,000 abroad)',
      mid: '₹7 - ₹14 LPA ($85,000 - $110,000)',
      senior: '₹15 - ₹28+ LPA ($115,000 - $145,000+ Nurse Practitioner)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Patient Assessment & Triage', 'Medication Administration & IV Therapy', 'Wound Care & Sterile Procedures', 'Critical Care & Cardiac Monitoring', 'Compassionate Patient Advocacy'],
    technicalSkills: ['Infusion Pumps & Ventilator Monitoring', 'Crash Cart & Emergency Resuscitation (BLS / ACLS)', 'Electronic Medical Records (Cerner / Epic)', 'Catheterization and Arterial Line Sampling', 'Infection Control Protocols'],
    softSkills: ['Deep Empathy', 'Stamina & Calmness', 'Observation of Subtle Health Shifts', 'Clear Communication under Stress', 'Cultural Sensitivity'],
    overview: 'Nurses spend more direct time with patients than any other healthcare professional. They are the frontline observers who notice subtle changes in patient vitals, administer intravenous medications, comfort anxious families, and advocate tirelessly for patient safety.',
    dailyRoutine: 'Receiving shift handover report, assessing assigned patients, administering prescribed IV antibiotics and analgesics, documenting vitals in hospital electronic records, assisting surgeons in sterile dressings, and educating family members on post-discharge home care.',
    coreResponsibilities: [
      'Assess and continuously monitor physical and physiological vital signs of assigned patients.',
      'Administer oral, intravenous, and subcutaneous medications following the 5 rights of medication safety.',
      'Operate advanced medical monitoring equipment (cardiac telemetry, syringe pumps, ventilators).',
      'Act rapidly during clinical emergencies by initiating CPR and alerting the medical crash team.',
      'Provide supportive emotional care to vulnerable patients and their families.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Biology & General Science Foundation', details: 'Cultivate understanding of biology, health, and human care.', criticalMilestone: 'Consistent academic record' },
      { stepNumber: 2, stage: '10+2', title: 'Science (PCB)', details: 'Physics, Chemistry, and Biology with minimum 45-50%. English proficiency is vital.', criticalMilestone: 'State or Institutional Nursing Entrance Exam' },
      { stepNumber: 3, stage: 'Undergraduate (4 Years)', title: 'B.Sc Nursing', details: 'Comprehensive clinical rotations across Medical-Surgical, Pediatric, Obstetric, Psychiatric, and Community Health nursing.', criticalMilestone: 'State Nursing Council Registration as RN & RM' },
      { stepNumber: 4, stage: 'Specialized Clinical Experience', title: 'ICU / OT / Emergency Specialty', details: 'Gain 2-3 years in high-acuity intensive care units or cardiac catheterization labs.', criticalMilestone: 'Certifications like Critical Care RN (CCRN) or NCLEX-RN for global mobility' }
    ],
    importantSubjects: {
      highSchool: ['General Science', 'Biology', 'English'],
      higherSecondary: ['Anatomy & Physiology', 'Biochemistry', 'Microbiology', 'General Psychology'],
      undergraduate: ['Medical-Surgical Nursing', 'Pharmacology in Nursing', 'Obstetrics & Gynecological Nursing', 'Community Health Nursing', 'Nursing Administration']
    },
    recommendedCourses: ['Basic Life Support (BLS) & Pediatric Advanced Life Support (PALS)', 'Critical Care Nursing Certification', 'Infection Control Specialist Program', 'NCLEX-RN Preparation (for US/Canada licensing)'],
    entranceExams: [
      { name: 'AIIMS B.Sc Nursing Entrance', level: 'National', eligibility: '10+2 PCB (Females)', targetCourses: 'B.Sc Nursing at AIIMS Institutions' },
      { name: 'State Nursing Entrance Tests', level: 'State', eligibility: '10+2 PCB', targetCourses: 'Government & Private Nursing Colleges' },
      { name: 'NCLEX-RN', level: 'International', eligibility: 'Registered Nurse', targetCourses: 'Nursing Licensure in USA, Canada, Australia' }
    ],
    jobRoles: ['Staff Nurse', 'Critical Care / ICU Nurse', 'Operation Theatre (OT) Nurse', 'Pediatric / Neonatal Nurse', 'Nursing Supervisor / Matron', 'Nurse Practitioner (NP)'],
    industries: ['Multispecialty Hospitals', 'Ambulatory Surgical Centers', 'Home Healthcare & Palliative Care', 'International Healthcare Migration (UK, USA, Australia, Gulf)', 'Corporate Occupational Health Centers'],
    growthLadder: [
      { stageName: 'Staff Nurse', experience: '0 - 2 Years', typicalDesignation: 'Junior Registered Nurse', focus: 'Bedside care, medication administration, vitals tracking, and patient hygiene.' },
      { stageName: 'Senior Critical Care Nurse / In-charge', experience: '3 - 7 Years', typicalDesignation: 'Senior Staff Nurse / Charge Nurse', focus: 'Managing ventilator-dependent patients, mentoring junior nurses, and coordinating ward admissions.' },
      { stageName: 'Nursing Superintendent / Director of Nursing', experience: '8 - 15+ Years', typicalDesignation: 'Chief Nursing Officer (CNO)', focus: 'Hospital-wide nursing staffing, infection control policies, patient safety accreditations (JCI/NABH).' }
    ],
    higherEducation: ['M.Sc Nursing (Medical-Surgical, Pediatrics, OBG)', 'Nurse Practitioner Critical Care (NPCC)', 'Master in Hospital Administration (MHA)', 'Ph.D. in Nursing Sciences'],
    faqs: [
      { question: 'What is the international demand for professional nurses?', answer: 'Phenomenal. Due to aging populations in North America, Europe, Australia, and the UK, licensed nurses with 1-2 years of clinical ICU experience and English test qualifications (IELTS/OET) have exceptional fast-track immigration and high-salary career options.' },
      { question: 'Is nursing open to male students?', answer: 'Absolutely. Male nurses are highly respected and represent a growing percentage of emergency room, psychiatric, and intensive care nursing teams worldwide.' }
    ],
    workLifeBalance: 'Shift work (morning, evening, night) requires routine adjustment, but typically provides dedicated consecutive days off.',
    workEnvironment: 'Modern hospital wards, clean emergency departments, and intensive care units.',
    stressLevel: 'High'
  },
  {
    id: 'lawyer',
    title: 'Lawyer (Advocate / Legal Counsel)',
    category: 'Law',
    shortIntro: 'Advises clients on legal rights, drafts contracts, negotiates disputes, and represents individuals and corporations in courts and tribunals.',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    educationRequired: 'Integrated BA/BBA LLB (5 Years) or LLB (3 Years)',
    minYearsStudy: 5,
    workStyle: 'Office',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹4.0 - ₹9 LPA ($70,000 - $110,000 in Corporate Law)',
      mid: '₹12 - ₹28 LPA ($120,000 - $200,000)',
      senior: '₹35 - ₹1 Crore+ LPA ($220,000 - $450,000+ Law Firm Partner)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Legal Research & Precedent Analysis', 'Contract Drafting & Negotiation', 'Oral Advocacy & Persuasion', 'Statutory Interpretation', 'Due Diligence'],
    technicalSkills: ['SCC Online, Manupatra, LexisNexis, Westlaw', 'Corporate M&A Deal Structuring', 'Cross-Examination Techniques', 'Arbitration & Dispute Resolution (ADR)', 'Intellectual Property Filing'],
    softSkills: ['Rhetorical Precision', 'Analytical Skepticism', 'Composure Under Grilling', 'Client Discretion', 'Tenacity'],
    overview: 'Lawyers interpret the framework of laws that govern human civilization, commerce, and human rights. Whether standing before a Supreme Court judge arguing constitutional liberties, or negotiating multi-billion dollar mergers in corporate boardrooms, lawyers protect interests and ensure justice.',
    dailyRoutine: 'Reading case precedents on digital law databases, drafting a commercial contract with indemnity clauses, consulting with clients on regulatory compliance, appearing before judicial magistrates or arbitral tribunals, and preparing case briefs for senior counsel.',
    coreResponsibilities: [
      'Draft ironclad contracts, legal notices, writ petitions, and corporate resolutions.',
      'Conduct rigorous legal research to locate binding judicial precedents.',
      'Argue motions, bail applications, and substantive cases before judicial benches.',
      'Advise corporations on antitrust, data privacy, taxation, and labor laws.',
      'Negotiate amicable out-of-court settlements through mediation and arbitration.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Reading & Critical Thinking', details: 'Develop vocabulary, reading speed, and interest in social sciences and current affairs.', criticalMilestone: 'Consistent academic performance' },
      { stepNumber: 2, stage: '10+2', title: 'Any Stream (Arts, Commerce, or Science)', details: 'Focus on English comprehension, logical reasoning, and legal awareness.', criticalMilestone: 'Competitive ranking in CLAT, AILET, or LSAT' },
      { stepNumber: 3, stage: 'Integrated Law Degree (5 Years)', title: 'BA.LL.B / BBA.LL.B / B.Com.LL.B', details: 'Study Constitutional Law, Contracts, Torts, Criminal Law, Corporate Law, and participate in Moot Court competitions.', criticalMilestone: 'Internships with trial lawyers, high court judges, and tier-1 law firms' },
      { stepNumber: 4, stage: 'Bar Enrollment', title: 'All India Bar Examination (AIBE)', details: 'Enroll with the State Bar Council and pass the Bar exam to obtain a License to Practice (Sanad).', criticalMilestone: 'Licensed Advocate status' }
    ],
    importantSubjects: {
      highSchool: ['English', 'Social Studies (Civics/History)', 'Logical Reasoning'],
      higherSecondary: ['Political Science', 'Economics', 'Sociology / Business Studies', 'English Literature'],
      undergraduate: ['Constitutional Law', 'Law of Contracts', 'Criminal Procedure Code (CrPC) & IPC', 'Company Law & M&A', 'Civil Procedure Code (CPC)', 'Intellectual Property Rights']
    },
    recommendedCourses: ['Contract Law: From Trust to Promise to Contract (Harvard Online)', 'International Commercial Arbitration', 'Cyber Law and Data Privacy Compliance (GDPR)', 'Moot Court Advocacy Workshops'],
    entranceExams: [
      { name: 'CLAT (Common Law Admission Test)', level: 'National', eligibility: '10+2 Any Stream (45% min)', targetCourses: '5-Year Integrated LLB at National Law Universities (NLUs)' },
      { name: 'AILET', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'National Law University, Delhi' },
      { name: 'SLAT / LSAT—India', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'Symbiosis, Jindal Global Law School' }
    ],
    jobRoles: ['Litigation Advocate', 'Corporate Legal Counsel / In-house Counsel', 'M&A Law Firm Associate', 'Intellectual Property Attorney', 'Judicial Magistrate / Judge', 'Public Prosecutor'],
    industries: ['Tier-1 Law Firms (Corporate/Dispute)', 'High Courts & Supreme Court of India', 'Multinational Corporations (In-House Legal)', 'Investment Banks & Venture Capital', 'Human Rights NGOs & International Organizations'],
    growthLadder: [
      { stageName: 'Junior Associate / Chamber Junior', experience: '0 - 2 Years', typicalDesignation: 'Associate / Junior Advocate', focus: 'Case law research, filing petitions, drafting notices, and court registry clerk work.' },
      { stageName: 'Senior Associate / Independent Practitioner', experience: '3 - 7 Years', typicalDesignation: 'Senior Associate / Advocate', focus: 'Independent courtroom arguments, client management, and leading transaction due diligence.' },
      { stageName: 'Partner / Senior Counsel / Judge', experience: '8 - 15+ Years', typicalDesignation: 'Law Firm Equity Partner / Senior Advocate', focus: 'High-stakes Supreme Court advocacy, leading equity partnerships, or judicial elevation.' }
    ],
    higherEducation: ['LL.M. (Master of Laws in Corporate, IPR, or Constitutional Law)', 'Ph.D. in Jurisprudence', 'Bar Examinations in UK (SQE) or US (New York / California Bar)'],
    faqs: [
      { question: 'Do I have to come from a family of lawyers to succeed in law?', answer: 'Not at all, especially in Corporate Law. Premier corporate law firms (like Cyril Amarchand, Shardul Amarchand, AZB & Partners) hire purely on merit, academic rank at National Law Universities, and internship performance. In courtroom litigation, first-generation lawyers build solid reputations through diligence and chamber mentorship.' },
      { question: 'Is courtroom litigation the only option for a law graduate?', answer: 'No. The majority of top law graduates work in corporate law firms, technology companies (drafting SaaS and privacy contracts), intellectual property firms, or in-house legal departments without ever setting foot inside a courtroom.' }
    ],
    workLifeBalance: 'Challenging during deal closings or court trial dates; highly intellectually stimulating.',
    workEnvironment: 'High-end corporate law offices, air-conditioned courtrooms, and legal libraries.',
    stressLevel: 'High'
  },
  {
    id: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    category: 'Finance',
    shortIntro: 'Audits financial statements, oversees taxation strategy, provides forensic financial analysis, and advises businesses on fiscal health.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    educationRequired: 'ICAI CA Qualification (Foundation, Intermediate, Articleship, Final)',
    minYearsStudy: 4.5,
    workStyle: 'Office',
    growthRate: 'High Demand',
    salary: {
      entry: '₹7.5 - ₹14 LPA ($72,000 - $98,000 in Big 4)',
      mid: '₹16 - ₹30 LPA ($115,000 - $170,000)',
      senior: '₹35 - ₹75+ LPA ($185,000 - $320,000+ CFO / Partner)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Statutory & Internal Auditing', 'Corporate & Direct Taxation', 'Financial Reporting (Ind AS / IFRS)', 'Financial Due Diligence', 'Cost Optimization'],
    technicalSkills: ['SAP, TallyPrime, Oracle Financials', 'Advanced Financial Modeling in Excel', 'Power BI for Financial Insights', 'Forensic Audit Tools', 'Company Law Compliance'],
    softSkills: ['Absolute Financial Integrity', 'Meticulous Attention to Decimal Precision', 'Objective Professional Skepticism', 'Client Advisory Tact', 'Analytical Rigor'],
    overview: 'Chartered Accountants are the guardians of corporate financial integrity and transparency. They verify that balance sheets represent a true and fair view of company operations, navigate complex national and international tax codes, guide mergers and acquisitions, and serve as strategic financial advisors to CEOs.',
    dailyRoutine: 'Reviewing audit working papers at a client site, examining revenue recognition compliance under Ind AS 115, structuring corporate tax planning to minimize capital gains liabilities, and meeting with audit committees to present statutory audit findings.',
    coreResponsibilities: [
      'Conduct statutory, tax, and forensic audits of public and private corporate financial statements.',
      'Formulate strategic direct and indirect tax planning in compliance with GST and income tax laws.',
      'Prepare consolidated financial accounts adhering to international accounting standards (IFRS/GAAP).',
      'Conduct pre-acquisition financial due diligence on merger target companies.',
      'Advise corporate boards on risk mitigation, capital restructuring, and cost management.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Numerical Aptitude', details: 'Develop comfortable arithmetic speed, percentages, and logical problem-solving.', criticalMilestone: 'Consistent scores in Math' },
      { stepNumber: 2, stage: '10+2', title: 'Commerce with Math (or Science)', details: 'Accountancy, Business Studies, Economics, and Mathematics.', criticalMilestone: 'Register for CA Foundation Exam with ICAI' },
      { stepNumber: 3, stage: 'CA Foundation & Intermediate', title: 'ICAI Professional Exams', details: 'Pass CA Foundation, then tackle the rigorous 6-paper CA Intermediate curriculum.', criticalMilestone: 'Passing both groups of CA Intermediate' },
      { stepNumber: 4, stage: 'Compulsory Articleship (2-3 Years)', title: 'Hands-on CA Articleship Training', details: 'Rigorous real-world audit, taxation, and advisory training under a practicing Chartered Accountant firm.', criticalMilestone: 'Articleship completion certificate + CA Final examination' },
      { stepNumber: 5, stage: 'CA Final & Membership', title: 'Qualified Chartered Accountant', details: 'Pass CA Final (Financial Reporting, Strategic Financial Management, Advanced Auditing) and receive ICAI Membership.', criticalMilestone: 'Fellow Chartered Accountant (FCA)' }
    ],
    importantSubjects: {
      highSchool: ['Mathematics', 'Economics', 'Commercial Studies'],
      higherSecondary: ['Accountancy', 'Business Studies', 'Applied Mathematics', 'Microeconomics'],
      undergraduate: ['Financial Accounting', 'Corporate Laws', 'Cost and Management Accounting', 'Taxation (Income Tax & GST)', 'Auditing and Assurance']
    },
    recommendedCourses: ['ICAI Integrated Course on Information Technology and Soft Skills (ICITSS)', 'Financial Modeling & Valuation Analyst (FMVA)', 'Diploma in International Financial Reporting (DipIFR - ACCA)', 'Certified Fraud Examiner (CFE)'],
    entranceExams: [
      { name: 'CA Foundation', level: 'National', eligibility: 'Appeared/Passed 10+2', targetCourses: 'Entry to ICAI Chartered Accountancy' },
      { name: 'CA Direct Entry Route', level: 'National', eligibility: 'Commerce Graduate (55% min) or Others (60%)', targetCourses: 'Exempts CA Foundation, enters directly to CA Inter' }
    ],
    jobRoles: ['Statutory Auditor', 'Tax Consultant / Transfer Pricing Specialist', 'Chief Financial Officer (CFO)', 'Forensic Auditor', 'Investment Banker / M&A Due Diligence Specialist', 'Practicing CA Firm Partner'],
    industries: ['Big 4 Accounting Firms (PwC, EY, Deloitte, KPMG)', 'Fortune 500 Corporate Finance Departments', 'Commercial & Investment Banks', 'Tax Advisory Boutiques', 'Government Revenue & Regulatory Bodies'],
    growthLadder: [
      { stageName: 'CA Article Assistant', experience: '0 - 2 Years (During Training)', typicalDesignation: 'Trainee Auditor', focus: 'Vouching, bank reconciliations, inventory physical verification, and filing GST returns.' },
      { stageName: 'Qualified CA / Assistant Manager', experience: '0 - 4 Years Post-CA', typicalDesignation: 'Audit / Tax Manager', focus: 'Leading audit engagements, drafting tax opinions, and supervising audit teams.' },
      { stageName: 'CFO / Senior Partner', experience: '8 - 15+ Years', typicalDesignation: 'Partner / Chief Financial Officer', focus: 'Enterprise capital allocation, signing audit reports, managing multimillion-dollar corporate portfolios.' }
    ],
    higherEducation: ['CFA (Chartered Financial Analyst)', 'CPA (US Certified Public Accountant)', 'Executive MBA in Finance from premier IIMs', 'DISA (Diploma in Information Systems Audit)'],
    faqs: [
      { question: 'Is the CA exam really as difficult as people say?', answer: 'The pass percentage is notoriously rigorous (historically 10% to 20%), requiring immense disciplined consistency, conceptual mastery, and perseverance. However, the qualification requires virtually zero tuition fee compared to private colleges, making it one of the highest ROI professions in the world.' },
      { question: 'Can a Science student in 12th become a Chartered Accountant?', answer: 'Yes! Anyone from Science or Arts can register for CA Foundation. Science students frequently perform exceptionally well due to their disciplined analytical thinking and mathematical training.' }
    ],
    workLifeBalance: 'Intense during tax audit deadlines (July–September) and annual fiscal year-end (February–April); more relaxed during mid-year.',
    workEnvironment: 'Corporate headquarters, modern accounting firms, and financial client boardrooms.',
    stressLevel: 'Structured'
  },
  {
    id: 'banking-professional',
    title: 'Banking Professional (Investment & Commercial)',
    category: 'Finance',
    shortIntro: 'Manages financial capital, underwrites commercial loans, facilitates mergers & acquisitions, and structures investment portfolios.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's (Economics / Finance / B.Com / Engg) + MBA / CFA",
    minYearsStudy: 4,
    workStyle: 'Office',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹5.5 - ₹16 LPA ($85,000 - $140,000 in Investment Banking)',
      mid: '₹18 - ₹38 LPA ($150,000 - $240,000)',
      senior: '₹45 - ₹1.2 Crore+ LPA ($260,000 - $500,000+ Managing Director)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Financial Modeling & DCF Valuation', 'Credit Risk Analysis', 'Capital Markets & Syndication', 'Wealth Management', 'Mergers & Acquisitions (M&A)'],
    technicalSkills: ['Bloomberg Terminal & FactSet', 'Advanced Excel (VBA, Macros)', 'Financial Statement Deconstruction', 'Pitch Book Creation (PowerPoint)', 'Securities Trading Platforms'],
    softSkills: ['High-Pressure Stamina', 'Persuasive Pitching', 'Networking & Client Relationship Management', 'Discreet Integrity', 'Speed with Numbers'],
    overview: 'Banking professionals channel financial capital from where it sits idle to where it generates productive economic activity. While commercial bankers underwrite loans for growing businesses and manage retail operations, investment bankers advise global corporations on raising billions through IPOs, bonds, and strategic takeovers.',
    dailyRoutine: 'Building discounted cash flow (DCF) valuation models in Excel, drafting a 40-slide acquisition pitch deck for a software company buyout, reviewing corporate borrower financial covenants, and participating in syndicated debt negotiation calls.',
    coreResponsibilities: [
      'Construct multi-scenario financial valuation models (LBO, DCF, Trading Comps).',
      'Assess corporate loan creditworthiness and calculate default probability risks.',
      'Prepare investor pitch decks and information memorandums for public debt or equity offerings.',
      'Coordinate deal execution with legal, tax, and accounting advisory teams.',
      'Cultivate relationships with corporate treasurers, private equity sponsors, and high-net-worth clients.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Mathematical Confidence', details: 'Solid grasp of percentages, algebraic modeling, and economic news.', criticalMilestone: 'Consistent quantitative grades' },
      { stepNumber: 2, stage: '10+2', title: 'Commerce with Math or Science', details: 'Mathematics, Economics, Accountancy, or Physics. Analytical strength is paramount.', criticalMilestone: 'Admission to top university (SRCC, IITs, St. Stephen’s, St. Xavier’s)' },
      { stepNumber: 3, stage: 'Undergraduate Degree', title: 'B.Com / B.A. Economics / B.Tech / BMS', details: 'Focus on financial accounting, corporate finance, statistics, and business economics.', criticalMilestone: 'Summer Analyst internship in banking or equity research' },
      { stepNumber: 4, stage: 'Postgraduate / Professional Credential', title: 'MBA in Finance (IIM/ISB/Top Global) or CFA', details: 'Accelerate directly into front-office Investment Banking or Corporate Banking associate tracks.', criticalMilestone: 'CFA Level 1/2 clearance or campus IB placement' }
    ],
    importantSubjects: {
      highSchool: ['Mathematics', 'Economics', 'Commercial Studies'],
      higherSecondary: ['Applied Calculus', 'Accountancy', 'Macroeconomics', 'Business Studies'],
      undergraduate: ['Corporate Finance', 'Investment Analysis & Portfolio Management', 'Money & Banking', 'Financial Derivatives', 'Quantitative Methods']
    },
    recommendedCourses: ['Wall Street Prep: Financial Modeling Certification', 'CFA Institute Investment Foundations', 'Corporate Finance Institute (CFI - FMVA)', 'Wharton: Business and Financial Modeling Specialization'],
    entranceExams: [
      { name: 'CAT (Common Admission Test)', level: 'National', eligibility: "Bachelor's Degree (50% min)", targetCourses: 'MBA in IIM Ahmedabad, Bangalore, Calcutta, Lucknow' },
      { name: 'IBPS PO / SBI PO', level: 'National', eligibility: "Bachelor's in Any Discipline", targetCourses: 'Probationary Officer in Public Sector Commercial Banks' },
      { name: 'GMAT', level: 'International', eligibility: "Bachelor's Degree", targetCourses: 'Top International Business Schools (LBS, Wharton, INSEAD)' }
    ],
    jobRoles: ['Investment Banking Analyst / Associate', 'Corporate Credit Manager', 'Equity Research Associate', 'Private Wealth Advisor', 'Treasury & FX Trader', 'Managing Director (MD)'],
    industries: ['Global Investment Banks (Goldman Sachs, Morgan Stanley, J.P. Morgan)', 'Private Commercial Banks (HDFC, ICICI, Axis)', 'Private Equity & Venture Capital Funds', 'Credit Rating Agencies (CRISIL, ICRA)', 'Sovereign Wealth Funds'],
    growthLadder: [
      { stageName: 'Analyst', experience: '0 - 3 Years', typicalDesignation: 'Investment Banking / Credit Analyst', focus: 'Financial modeling, market research, drafting pitch books, running data room requests.' },
      { stageName: 'Associate / Vice President', experience: '3 - 8 Years', typicalDesignation: 'VP / Senior Deal Manager', focus: 'Managing transaction execution, client interaction, and supervising analysts.' },
      { stageName: 'Managing Director / Sector Head', experience: '9 - 15+ Years', typicalDesignation: 'Managing Director (MD)', focus: 'Originating deals, board-level client advisory, and profit & loss ownership.' }
    ],
    higherEducation: ['CFA (Chartered Financial Analyst)', 'MBA in Finance', 'M.S. in Computational Finance / Financial Engineering'],
    faqs: [
      { question: 'Is the working culture in investment banking truly intense?', answer: 'Yes, front-office investment banking (M&A, Equity Capital Markets) is famous for long hours (65-80 hours per week) during live deal transactions. In contrast, commercial banking, private wealth management, and corporate credit maintain much more predictable, standard business hours.' },
      { question: 'Do engineering graduates get hired in banking?', answer: 'Extensively. Top investment banks and quantitative trading desks recruit heavily from engineering colleges because of engineers’ exceptional quantitative modeling, programming, and algorithmic discipline.' }
    ],
    workLifeBalance: 'Demanding in front-office investment banking; balanced in commercial and retail banking.',
    workEnvironment: 'High-rise financial centers, glass-walled boardrooms, and trading desks.',
    stressLevel: 'High'
  },
  {
    id: 'government-officer',
    title: 'Government Officer (Civil Services / Administrative)',
    category: 'Government Services',
    shortIntro: 'Administers public policy, manages district governance, oversees law and order, and drives socio-economic development programs.',
    heroImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree in Any Discipline + UPSC Civil Services",
    minYearsStudy: 4,
    workStyle: 'Field & Travel',
    growthRate: 'Selective & Elite',
    salary: {
      entry: '₹56,100/mo Basic + DA + HRA (Pay Level 10, ~₹9 - ₹12 LPA gross + housing & vehicle benefits)',
      mid: '₹18 - ₹28 LPA equivalent + executive perks',
      senior: 'Cabinet Secretary / Chief Secretary (Apex Scale: ₹2,50,000/mo basic + constitutional privileges)',
      currency: 'INR / Govt Pay Matrix'
    },
    keySkills: ['Public Administration & Policy Formulation', 'Crisis & Disaster Management', 'District Administrative Leadership', 'Inter-Departmental Coordination', 'Budgetary Allocation & Welfare Delivery'],
    technicalSkills: ['Statutory Administrative Law & Procedure', 'Public Financial Management System (PFMS)', 'E-Governance Portals & GIS Land Records', 'Media & Press Briefings', 'Regulatory Enforcement'],
    softSkills: ['Impartial Integrity', 'Empathetic Public Service Orientation', 'Equanimity Under Political Pressure', 'Decisiveness in Emergencies', 'Strategic Long-Term Vision'],
    overview: 'Civil Services officers (such as IAS, IPS, and IFS officers) represent the permanent executive backbone of the nation. They administer districts home to millions of citizens, oversee disaster relief, execute infrastructure initiatives, formulate national educational and healthcare policies, and represent the sovereign state.',
    dailyRoutine: 'Chairing district development committee meetings reviewing rural healthcare rollouts, inspecting subsidized food grain distribution depots, coordinating flood relief logistics with the police and army, resolving citizen grievances, and reviewing legal land dispute records.',
    coreResponsibilities: [
      'Maintain law, order, and public harmony across assigned administrative divisions.',
      'Supervise efficient, leak-proof implementation of central and state socio-economic welfare schemes.',
      'Direct rapid relief and rehabilitation operations during natural catastrophes or epidemics.',
      'Prepare policy briefs, legislative draft bills, and cabinet notes for ministers.',
      'Oversee district revenue collection, municipal land management, and public developmental expenditure.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Broad Curiosity & Social Awareness', details: 'Read daily national newspapers (The Hindu / Indian Express), cultivate interest in history, geography, and polity.', criticalMilestone: 'Consistent all-around academics' },
      { stepNumber: 2, stage: '10+2', title: 'Any Academic Stream', details: 'Humanities, Science, or Commerce. Deep conceptual reading and essay writing fluency.', criticalMilestone: 'Choosing a rigorous undergraduate subject' },
      { stepNumber: 3, stage: 'Undergraduate Degree', title: 'Bachelor’s in Any Discipline (B.A., B.Sc., B.Tech, MBBS, B.Com)', details: 'Maintain strong conceptual fundamentals in your subject while systematically mastering the UPSC General Studies syllabus.', criticalMilestone: 'Graduation with minimum 21 years of age' },
      { stepNumber: 4, stage: 'UPSC Civil Services Examination', title: 'Prelims, Mains, and Personality Test', details: 'Clear the 3-tier national examination competing among 1,000,000 aspirants for top 1,000 ranks.', criticalMilestone: 'Selection in IAS / IPS / IFS / IRS' },
      { stepNumber: 5, stage: 'Academy Training (2 Years)', title: 'LBSNAA Mussoorie Training', details: 'Rigorous foundation course, district field attachments, tribal study tours, and administrative attachments.', criticalMilestone: 'Posting as Sub-Divisional Magistrate (SDM)' }
    ],
    importantSubjects: {
      highSchool: ['History', 'Civics & Political Science', 'Geography', 'Economics'],
      higherSecondary: ['Indian Constitution', 'Modern Indian History', 'Macroeconomics', 'World Geography'],
      undergraduate: ['Public Administration / Sociology / History (or engineering/medical degree)', 'Ethics, Integrity & Aptitude', 'International Relations', 'Current National Affairs']
    },
    recommendedCourses: ['NCERT Standard Textbooks (Classes 6-12) for foundational conceptual mastery', 'Indian Polity by M. Laxmikanth', 'Public Administration and Public Policy (Harvard / IGNOU)', 'Disaster Management and Humanitarian Response Programs'],
    entranceExams: [
      { name: 'UPSC Civil Services Examination (CSE)', level: 'National', eligibility: "Bachelor's Degree (Age 21-32)", targetCourses: 'IAS, IPS, IFS, IRS, IRTS' },
      { name: 'State Public Service Commission (State PSCs)', level: 'State', eligibility: "Bachelor's Degree", targetCourses: 'Deputy Collector, DSP, Commercial Tax Officer in State Govt' }
    ],
    jobRoles: ['District Magistrate / Collector (DM)', 'Sub-Divisional Magistrate (SDM)', 'Joint Secretary / Secretary to Govt of India', 'Superintendent of Police (IPS)', 'Commissioner of Income Tax / Customs (IRS)'],
    industries: ['Government of India Ministries & Departments', 'State Secretariat & District Collectorates', 'Public Sector Enterprises', 'Diplomatic Missions Abroad', 'NITI Aayog & Regulatory Commissions'],
    growthLadder: [
      { stageName: 'SDM / Assistant Collector', experience: '0 - 4 Years', typicalDesignation: 'Sub-Divisional Magistrate (SDM)', focus: 'Sub-divisional revenue, local law and order, and direct citizen interface.' },
      { stageName: 'District Magistrate / Collector', experience: '5 - 12 Years', typicalDesignation: 'Deputy Commissioner / DM', focus: 'Total executive leadership of an entire district (2 to 4 million population).' },
      { stageName: 'Joint Secretary / Chief Secretary', experience: '15 - 30+ Years', typicalDesignation: 'Secretary to Government of India', focus: 'Formulating national policies, international trade treaties, and guiding union cabinets.' }
    ],
    higherEducation: ['Master of Public Administration (MPA) at Harvard Kennedy School or LSE (Govt Sponsored)', 'Ph.D. in Public Policy', 'Advanced Defence College (NDC) diplomas'],
    faqs: [
      { question: 'Which undergraduate degree gives the best advantage for UPSC?', answer: 'UPSC permits graduates from any discipline (engineering, medicine, commerce, arts). Humanities (History, Political Science, Economics) align closely with General Studies, but engineering and medical graduates frequently top the exam due to disciplined study schedules and structured analytical answers.' },
      { question: 'What is the real authority and impact of an IAS officer?', answer: 'Unmatched in public life. A District Collector directs police deployment, manages disaster relief, supervises hospitals, schools, and roads, and holds legal powers to safeguard vulnerable citizens and execute public policy.' }
    ],
    workLifeBalance: '24/7 accountability as district head; immense personal and professional fulfillment.',
    workEnvironment: 'District collectorate headquarters, field inspection sites, and state secretariats.',
    stressLevel: 'High'
  },
  {
    id: 'defence-officer',
    title: 'Defence Officer (Army, Navy, Air Force)',
    category: 'Defence',
    shortIntro: 'Leads armed forces personnel, commands tactical combat units, operates advanced defense systems, and protects national sovereignty.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    educationRequired: '10+2 (for NDA) or Degree (for CDS / AFCAT / Direct Tech Entry)',
    minYearsStudy: 4,
    workStyle: 'Operational Base',
    growthRate: 'Selective & Elite',
    salary: {
      entry: '₹56,100/mo Basic + Military Service Pay (MSP ₹15,500/mo) + Allowances (~₹10 - ₹15 LPA gross)',
      mid: 'Major / Lt. Colonel (~₹18 - ₹28 LPA + furnished housing, healthcare, rations)',
      senior: 'Major General / Lt. General (~₹30 - ₹45 LPA + apex constitutional protocol)',
      currency: 'INR / Defense Pay Scale'
    },
    keySkills: ['Tactical Combat Command', 'Physical & Mental Conditioning', 'Strategic Geopolitical Analysis', 'Decisive Courage Under Fire', 'Personnel Management & Morale'],
    technicalSkills: ['Weapons Systems & Ballistics', 'Advanced Radar & Electronic Warfare Operations', 'Map Reading, GPS Navigation & Terrain Analysis', 'Aviation Flight Operations or Naval Navigation', 'Disaster Relief & Combat Logistics'],
    softSkills: ['Honor & Integrity Above Self', 'Inspiring Subordinates Under Duress', 'Unwavering Camaraderie', 'Adaptability in Austere Environments', 'Quick Situational Awareness'],
    overview: 'Commissioned officers in the Army, Navy, and Air Force lead from the front. They bear the supreme responsibility of defending the nation’s borders, airspace, and maritime economic zones, while embodying the highest standards of honor, discipline, and selfless service.',
    dailyRoutine: 'Morning physical training (PT) or parade drill with the battalion, briefing troops on operational readiness, supervising live-fire tactical firing or flight simulation exercises, reviewing equipment maintenance in the armory, and playing sports alongside enlisted soldiers.',
    coreResponsibilities: [
      'Command combat troops (infantry, armored cavalry, artillery, warships, or fighter squadrons).',
      'Formulate tactical defense and reconnaissance plans to neutralize security threats.',
      'Maintain peak operational readiness of weapons, electronic warfare suites, and aircraft.',
      'Execute humanitarian assistance and disaster relief (HADR) missions during earthquakes or floods.',
      'Care unconditionally for the physical well-being, training, and morale of troops under command.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Fitness & Academic Focus', details: 'Physical sports, cross-country running, leadership in NCC or Scouts, and strong math/science basics.', criticalMilestone: 'Exceptional physical fitness and stamina' },
      { stepNumber: 2, stage: '10+2', title: 'Science (PCM) for Air Force/Navy; Any for Army', details: 'Clear 10+2 with Physics and Mathematics to retain eligibility for all three wings.', criticalMilestone: 'Cracking NDA Written Exam & clearing 5-day SSB Interview' },
      { stepNumber: 3, stage: 'Military Academy Training (3-4 Years)', title: 'National Defence Academy (NDA) / IMA / OTA / INA / AFA', details: 'Rigorous physical training, academic bachelor’s degree (B.A./B.Sc/B.Tech), military tactics, weapon training, and equestrian sports.', criticalMilestone: 'Passing out parade and receiving the President’s Commission' },
      { stepNumber: 4, stage: 'Unit Commission', title: 'Lieutenant / Sub-Lieutenant / Flying Officer', details: 'Assume operational command of a platoon, ship department, or fighter jet cockpit.', criticalMilestone: 'First operational deployment' }
    ],
    importantSubjects: {
      highSchool: ['General Science', 'Mathematics', 'Physical Education', 'English'],
      higherSecondary: ['Physics (Mechanics)', 'Mathematics (Calculus/Trigonometry)', 'General Knowledge & Current Affairs'],
      undergraduate: ['Military History', 'Weapon Technology', 'International Security Studies', 'Strategic Leadership']
    },
    recommendedCourses: ['National Cadet Corps (NCC - ‘C’ Certificate with ‘A’ grade gives direct SSB entry)', 'SSB Psychology and Ground Task Preparation', 'Basic Mountain Warfare or Paratroopers Jump Training (Post-commission)'],
    entranceExams: [
      { name: 'NDA & NA Examination (UPSC)', level: 'National', eligibility: '10+2 (Age 16.5-19.5)', targetCourses: 'National Defence Academy, Khadakwasla' },
      { name: 'CDS Examination (Combined Defence Services)', level: 'National', eligibility: "Bachelor's Degree (Age 19-24)", targetCourses: 'IMA Dehradun, INA Ezhimala, AFA Dundigal, OTA Chennai' },
      { name: 'AFCAT (Air Force Common Admission Test)', level: 'National', eligibility: 'Graduation with Math & Physics', targetCourses: 'Flying & Ground Duty Branches in Indian Air Force' }
    ],
    jobRoles: ['Infantry / Armored Combat Leader', 'Fighter / Transport Pilot (Air Force)', 'Naval Warship Navigation Officer', 'Military Intelligence Specialist', 'Combat Engineer / Signals Officer'],
    industries: ['Armed Forces (Army, Navy, Air Force)', 'Coast Guard & Border Security Organizations', 'Strategic Forces Command & Defense Cyber Agency', 'UN Peacekeeping Missions Worldwide'],
    growthLadder: [
      { stageName: 'Lieutenant / Flying Officer', experience: '0 - 2 Years', typicalDesignation: 'Platoon / Flight Commander', focus: 'Leading 30 soldiers directly on ground patrols, border posts, or initial flight sorties.' },
      { stageName: 'Captain / Major / Squadron Leader', experience: '3 - 8 Years', typicalDesignation: 'Company Commander / Flight Leader', focus: 'Commanding an infantry company of 120+ troops or operating advanced radar/aircraft systems.' },
      { stageName: 'Colonel / Brigadier / General', experience: '12 - 25+ Years', typicalDesignation: 'Battalion Commanding Officer / Brigade Commander', focus: 'Leading entire 1,000-man military units, joint-service warfare operations, and national strategic planning.' }
    ],
    higherEducation: ['Defence Services Staff College (DSSC) Wellington', 'Higher Command Course at Army War College', 'Master of Science in Defence and Strategic Studies'],
    faqs: [
      { question: 'What makes the 5-day SSB (Services Selection Board) interview so unique?', answer: 'The SSB evaluates "Officer Like Qualities" (OLQs) such as effective intelligence, initiative, social adaptability, courage, and stamina through psychological tests, outdoor group tasks (GTO), and personal interviews rather than rote memory.' },
      { question: 'Are women eligible for permanent commission in combat and flying roles?', answer: 'Yes! Women now join NDA, fly supersonic fighter jets in the Air Force, command warships in the Navy, and serve across artillery, signals, and engineering branches with permanent commission.' }
    ],
    workLifeBalance: 'Challenging operational deployments alternated with peaceful peace-station cantonments with world-class sports and family facilities.',
    workEnvironment: 'Military cantonments, naval warships, fighter airbases, and high-altitude border posts.',
    stressLevel: 'High'
  },
  {
    id: 'pilot',
    title: 'Commercial Pilot',
    category: 'Aviation',
    shortIntro: 'Commands commercial passenger and cargo aircraft, navigating global air routes with precision, technical mastery, and calm crisis response.',
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    educationRequired: '10+2 (Physics & Math) + Commercial Pilot License (CPL)',
    minYearsStudy: 2.5,
    workStyle: 'Operational Base',
    growthRate: 'High Demand',
    salary: {
      entry: '₹12 - ₹20 LPA ($75,000 - $110,000 as First Officer)',
      mid: '₹28 - ₹55 LPA ($140,000 - $220,000 Senior First Officer)',
      senior: '₹65 - ₹1.2 Crore+ LPA ($240,000 - $380,000+ Airline Captain)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Instrument Flight Navigation (IFR)', 'Aerodynamic Performance Calculation', 'Crew Resource Management (CRM)', 'Meteorology & Storm Avoidance', 'Emergency Aviation Procedures'],
    technicalSkills: ['Flight Management System (FMS) programming', 'Autopilot and Glass Cockpit avionics', 'Aero-Engine thrust management', 'Air Traffic Control (ATC) radio telephony', 'Type Rating (Airbus A320 / Boeing 737)'],
    softSkills: ['Laser Focus for Extended Durations', 'Decisive Poise in Turbulence', 'Clear Cockpit Communication', 'Punctual Reliability', 'Strict Situational Awareness'],
    overview: 'Commercial pilots carry thousands of lives safely across continents at 35,000 feet. The role demands total technical mastery of multi-million dollar fly-by-wire jets, continuous regulatory medical evaluations, rigorous flight simulator evaluations, and split-second calm in challenging weather.',
    dailyRoutine: 'Conducting pre-flight weather and NOTAM briefing with the dispatch officer, inspecting aircraft exterior fuselage and tires in a pre-flight walkaround, programming navigational waypoints into the Flight Management Computer (FMC), executing smooth takeoff and approach procedures, and logging post-flight maintenance logs.',
    coreResponsibilities: [
      'Conduct rigorous exterior and interior pre-flight mechanical walkaround inspections.',
      'Calculate precise fuel requirements, takeoff trim, and runway performance limits.',
      'Fly instrument-guided flight paths maintaining designated altitude and heading clearances.',
      'Communicate seamlessly with international Air Traffic Control (ATC) centers.',
      'Execute emergency checklists methodically in the event of engine anomalies, cabin depressurization, or severe windshear.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Mathematics, Physics & Spatial Awareness', details: 'Cultivate strong mental math (angles, knots, descent rates) and 3D spatial thinking.', criticalMilestone: 'Consistent scores in Science & Math' },
      { stepNumber: 2, stage: '10+2', title: 'Physics & Mathematics Mandatory', details: 'Must achieve minimum 50% in Physics and Math (or NIOS equivalency).', criticalMilestone: 'Class 2 and Class 1 DGCA / FAA Aviation Medical Clearance' },
      { stepNumber: 3, stage: 'Ground School & Theory Exams', title: 'Aviation Ground Subjects', details: 'Clear 5 theory exams: Air Navigation, Aviation Meteorology, Air Regulations, Technical General, and Radio Telephony (RTR).', criticalMilestone: 'Clearing DGCA / National Aviation Authority Theory papers' },
      { stepNumber: 4, stage: 'Flying Training (200 Hours)', title: 'Commercial Pilot License (CPL) Flying School', details: 'Complete 200 hours of flight time on single-engine and multi-engine aircraft, including night flying and instrument cross-country flying.', criticalMilestone: 'Issuance of Commercial Pilot License (CPL)' },
      { stepNumber: 5, stage: 'Type Rating & Airline Induction', title: 'Type Rating (A320 / B737)', details: 'Undergo full-flight simulator training for specific passenger airliners and pass airline selection tests.', criticalMilestone: 'Joining an airline as Junior First Officer' }
    ],
    importantSubjects: {
      highSchool: ['Mathematics', 'Physics', 'Geography (Climate & Winds)'],
      higherSecondary: ['Vector Physics', 'Trigonometry', 'Atmospheric Thermodynamics'],
      undergraduate: ['Air Navigation Theory', 'Aviation Meteorology', 'Aero-Engines & Airframes', 'Radio Telephony & Communication']
    },
    recommendedCourses: ['ICAO English Language Proficiency (Level 4 minimum, Level 6 preferred)', 'Type Rating Course on Airbus A320 or Boeing 737-800', 'Multi-Crew Cooperation (MCC) Course', 'Advanced Upset Prevention and Recovery Training (UPRT)'],
    entranceExams: [
      { name: 'Airline Cadet Pilot Programs (IndiGo, Air India, Emirates)', level: 'National/International', eligibility: '10+2 Physics & Math (50-60% min)', targetCourses: 'Fast-track sponsored pilot training from zero hours to airline cockpit' },
      { name: 'IGRUA Entrance Exam', level: 'National', eligibility: '10+2 Physics & Math (55% min)', targetCourses: 'Indira Gandhi Rashtriya Uran Akademi' }
    ],
    jobRoles: ['First Officer / Co-Pilot', 'Airline Captain (Commander)', 'Flight Instructor (CFI)', 'Corporate Jet Pilot', 'Cargo Airline Pilot'],
    industries: ['Commercial Passenger Airlines', 'Air Cargo Operators (FedEx, DHL, Blue Dart)', 'Charter & VIP Business Aviation', 'Flight Training Academies', 'Offshore Oil Rig Helicopter Services'],
    growthLadder: [
      { stageName: 'Junior First Officer', experience: '0 - 2 Years', typicalDesignation: 'Second Officer / First Officer', focus: 'Undergoing supervised line flights (SLF), flying under the command of experienced Captains.' },
      { stageName: 'Senior First Officer', experience: '3 - 6 Years', typicalDesignation: 'Senior First Officer', focus: 'Building total flight hours (1,500 - 3,000 hours minimum) and ATPL exam clearance.' },
      { stageName: 'Airline Captain / Commander', experience: '6 - 12+ Years', typicalDesignation: 'Captain / Type Rating Instructor (TRI)', focus: 'Ultimate operational authority over the aircraft, crew, and passenger safety.' }
    ],
    higherEducation: ['Airline Transport Pilot License (ATPL)', 'Type Rating Examiner (TRE) Certification', 'B.Sc in Aviation / M.S. in Aviation Management'],
    faqs: [
      { question: 'What is the financial cost to become a commercial pilot?', answer: 'Aviation training is capital-intensive: earning a CPL and Type Rating typically costs between ₹40 Lakhs to ₹75 Lakhs ($80,000 to $120,000). Many students fund this through specialized education bank loans or structured Airline Cadet Programs with letter-of-intent hiring.' },
      { question: 'Can I be a pilot if I wear spectacles or contact lenses?', answer: 'Yes! Contrary to popular myth, 6/6 uncorrected vision is not mandatory. You can wear glasses or contact lenses as long as your vision is correctable to 6/6 and you have normal color perception.' }
    ],
    workLifeBalance: 'Non-standard rosters with regulated rest periods between duty shifts; free flight travel privileges worldwide.',
    workEnvironment: 'Modern glass cockpits at high altitudes and international airport transit terminals.',
    stressLevel: 'Structured'
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer (UI/UX & Brand)',
    category: 'Design',
    shortIntro: 'Creates visual brand identities, digital product interfaces, typography systems, and compelling user-centered experiences.',
    heroImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree in Design (B.Des / BFA) or Outstanding Portfolio",
    minYearsStudy: 3,
    workStyle: 'Studio / Workshop',
    growthRate: 'High Demand',
    salary: {
      entry: '₹3.6 - ₹7.5 LPA ($50,000 - $75,000)',
      mid: '₹9 - ₹18 LPA ($85,000 - $130,000)',
      senior: '₹20 - ₹42+ LPA ($140,000 - $210,000+ Design Director)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Visual Hierarchy & Composition', 'Typography & Color Theory', 'UI / UX Design & Prototyping', 'Design Systems & Component Libraries', 'User Research & Wireframing'],
    technicalSkills: ['Figma, Adobe Illustrator, Photoshop', 'After Effects (Micro-animations)', 'Wireframing & Usability Testing (Maze)', 'Responsive Grid Systems & HTML/CSS basics', 'Brand Guidelines & Vector Illustration'],
    softSkills: ['Visual Empathy', 'Giving & Receiving Constructive Critique', 'Storytelling & Presentation', 'Curiosity About Human Behavior', 'Speed of Iteration'],
    overview: 'Designers determine how humans experience the digital and physical world. From mobile apps that millions use effortlessly to iconic corporate branding, packaging, and digital interactions, designers use balance, hierarchy, and empathy to make technology intuitive and visually captivating.',
    dailyRoutine: 'Facilitating a user journey mapping workshop in FigJam, creating responsive UI component variants in Figma, reviewing user testing session recordings for usability friction, collaborating with frontend engineers on handoff tokens, and designing marketing brand collateral.',
    coreResponsibilities: [
      'Create intuitive, beautiful interfaces for mobile apps, web platforms, and software.',
      'Develop cohesive brand identity systems: logos, typography guidelines, and packaging.',
      'Build and maintain scalable design systems with reusable components and tokens.',
      'Conduct qualitative user interviews and usability usability tests on wireframes.',
      'Advocate for visual accessibility standards (contrast ratios, readable typography).'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Creative Observation & Sketching', details: 'Practice hand drawing, photography, color combinations, and studying digital app layouts.', criticalMilestone: 'Consistent creativity and visual curiosity' },
      { stepNumber: 2, stage: '10+2', title: 'Any Stream (Arts, Commerce, or Science)', details: 'All streams welcome. Prepare a creative portfolio of sketches, posters, and digital artwork.', criticalMilestone: 'Cracking Design Entrance Exams (UCEED, NID-DAT, NIFT)' },
      { stepNumber: 3, stage: 'Undergraduate (4 Years)', title: 'B.Des / BFA in Visual Communication / Interaction Design', details: 'Study design history, typography, semiotics, human-computer interaction, and design thinking.', criticalMilestone: 'High-impact Behance / Dribbble / Case Study portfolio' },
      { stepNumber: 4, stage: 'Design Studio / Tech Agency Entry', title: 'Product / Visual Designer', details: 'Internship at a digital agency, tech product company, or branding consultancy.', criticalMilestone: 'Shipping designs used by real users' }
    ],
    importantSubjects: {
      highSchool: ['Fine Arts', 'Computer Graphics', 'English Literature'],
      higherSecondary: ['Visual Arts / Applied Art', 'Psychology / Human Behavior', 'Graphic Communication'],
      undergraduate: ['Typography Systems', 'Interaction Design Principles', 'Color Psychology', 'Information Architecture', 'Design Research Methods']
    },
    recommendedCourses: ['Google UX Design Professional Certificate (Coursera)', 'Shift Nudge - Interface Design Course', 'Refactoring UI by Adam Wathan & Steve Schoger', 'CalArts Graphic Design Specialization'],
    entranceExams: [
      { name: 'UCEED (IIT Bombay)', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'B.Des in IIT Bombay, IIT Delhi, IIT Guwahati' },
      { name: 'NID DAT', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'National Institute of Design (Ahmedabad, etc.)' },
      { name: 'NIFT Entrance Exam', level: 'National', eligibility: '10+2 Any Stream', targetCourses: 'National Institute of Fashion Technology' }
    ],
    jobRoles: ['Product Designer (UI/UX)', 'Visual / Brand Identity Designer', 'Design Systems Specialist', 'Motion Graphics Designer', 'Creative Director'],
    industries: ['Consumer Tech & SaaS Products', 'Branding & Advertising Agencies', 'E-Commerce Platforms', 'Fintech & Edtech Companies', 'Entertainment & Gaming Studios'],
    growthLadder: [
      { stageName: 'Junior Designer', experience: '0 - 2 Years', typicalDesignation: 'Associate Product / Visual Designer', focus: 'Designing screen mockups, creating banner assets, adhering to existing design systems.' },
      { stageName: 'Senior Product Designer', experience: '3 - 6 Years', typicalDesignation: 'Senior UI/UX Designer', focus: 'End-to-end feature design, user testing, complex user flows, and cross-team alignment.' },
      { stageName: 'Design Director / VP of Design', experience: '7 - 12+ Years', typicalDesignation: 'Head of Design / VP Design', focus: 'Company-wide design vision, user experience strategy, brand positioning, and scaling design teams.' }
    ],
    higherEducation: ['M.Des in Interaction Design / New Media', 'M.S. in Human-Computer Interaction (HCI)', 'Specialized Master classes in Typography or Motion'],
    faqs: [
      { question: 'Do I need to know how to code to be a UI/UX designer?', answer: 'No. UI/UX designers focus on user flows, wireframing, typography, visual hierarchy, and user research using tools like Figma. However, understanding basic HTML/CSS constraints helps you collaborate seamlessly with frontend engineers.' },
      { question: 'Is a formal design degree mandatory?', answer: 'Design is one of the most portfolio-driven fields in the world. A stellar online portfolio showcasing 3-4 detailed case studies with clear problem statements and user research often wins over recruiters more than a degree certificate alone.' }
    ],
    workLifeBalance: 'Flexible and creative; opportunities for remote employment and freelance projects.',
    workEnvironment: 'Creative studios, vibrant tech offices, or flexible remote workstations.',
    stressLevel: 'Moderate'
  },
  {
    id: 'teacher',
    title: 'Teacher / High School Educator',
    category: 'Education',
    shortIntro: 'Shapes young minds, instills conceptual knowledge, cultivates critical inquiry, and mentors the next generation of leaders.',
    heroImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Bachelor's Degree + B.Ed (Bachelor of Education)",
    minYearsStudy: 4,
    workStyle: 'Office',
    growthRate: 'Steady Growth',
    salary: {
      entry: '₹3.0 - ₹6.0 LPA ($45,000 - $65,000)',
      mid: '₹7 - ₹14 LPA ($68,000 - $95,000 in International Schools)',
      senior: '₹15 - ₹28+ LPA ($100,000 - $135,000+ Principal / School Head)',
      currency: 'INR / USD Eq.'
    },
    keySkills: ['Curriculum Planning & Lesson Design', 'Classroom Engagement & Management', 'Student Empathy & Mentorship', 'Differentiated Learning', 'Formative Assessment Strategies'],
    technicalSkills: ['Smart Classroom & Interactive Whiteboards', 'Learning Management Systems (Google Classroom, Canvas)', 'Educational Technology Tools (Kahoot, Quizlet)', 'Student Progress Analytics', 'Special Needs Accommodations'],
    softSkills: ['Infinite Patience', 'Inspiring Storytelling', 'Active Listening', 'Emotional Encouragement', 'Clear Articulation'],
    overview: 'Educators have an enduring influence on human civilization. Beyond lecturing from textbooks, great teachers spark curiosity, build confidence in struggling learners, instill ethical principles, and provide a safe, intellectually vibrant environment where students can flourish.',
    dailyRoutine: 'Delivering interactive classroom lessons with experiments or group debates, assessing student assignments with encouraging written feedback, preparing tailored lesson plans for the upcoming week, meeting parents during parent-teacher conferences, and organizing after-school clubs.',
    coreResponsibilities: [
      'Design engaging, curriculum-aligned lesson plans utilizing multimodal teaching techniques.',
      'Cultivate an inclusive, disciplined, and emotionally supportive classroom environment.',
      'Evaluate student academic comprehension through varied formative and summative assessments.',
      'Provide individualized academic interventions for students facing learning difficulties.',
      'Communicate constructively with parents regarding academic progress and behavioral development.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Academic Breadth & Curiosity', details: 'Focus on mastering core school subjects and enjoying explaining concepts to peers.', criticalMilestone: 'Consistent scores in core subjects' },
      { stepNumber: 2, stage: '10+2', title: 'Stream Relevant to Your Passion', details: 'Choose Science, Commerce, or Arts based on the subject you aspire to teach.', criticalMilestone: 'Undergraduate college admission' },
      { stepNumber: 3, stage: 'Undergraduate Degree (3-4 Years)', title: 'B.Sc / B.A. / B.Com in Teaching Subject', details: 'Gain deep subject-matter expertise in your chosen domain (Physics, Math, History, English).', criticalMilestone: 'Strong GPA in major subject' },
      { stepNumber: 4, stage: 'Professional Teaching Qualification (2 Years)', title: 'B.Ed (Bachelor of Education)', details: 'Master pedagogical methods, educational psychology, lesson delivery, and school practice teaching.', criticalMilestone: 'Clearing Teacher Eligibility Tests (CTET / State TET)' },
      { stepNumber: 5, stage: 'School Appointment', title: 'TGT (Trained Graduate Teacher) / PGT (Post Graduate)', details: 'Join reputed CBSE, ICSE, IB, or state government schools.', criticalMilestone: 'School faculty appointment' }
    ],
    importantSubjects: {
      highSchool: ['Subject of interest (Science, Math, Social Sciences, Languages)', 'English Communication'],
      higherSecondary: ['Specialized subject stream', 'Child Psychology / Sociology fundamentals'],
      undergraduate: ['Major subject deep-dive', 'Educational Psychology', 'Curriculum and Pedagogic Studies', 'Classroom Assessment']
    },
    recommendedCourses: ['Teaching Character and Creating Positive Classrooms (Relay GSE / Coursera)', 'Foundations of Teaching for Learning Specialization', 'International Baccalaureate (IB) Educator Certificate', 'Special Education and Inclusive Classrooms Training'],
    entranceExams: [
      { name: 'CTET (Central Teacher Eligibility Test)', level: 'National', eligibility: 'Graduation + B.Ed', targetCourses: 'Teaching in Kendriya Vidyalayas, Navodaya Vidyalayas, CBSE schools' },
      { name: 'State TETs', level: 'State', eligibility: 'Graduation + B.Ed / D.El.Ed', targetCourses: 'Government and aided school teacher positions' }
    ],
    jobRoles: ['High School Subject Teacher (TGT/PGT)', 'IB / Cambridge International School Educator', 'Academic Coordinator', 'Curriculum Developer', 'School Vice Principal / Principal'],
    industries: ['Private & Public K-12 Schools', 'International Baccalaureate (IB) Schools', 'Educational Technology (EdTech) Curriculum Firms', 'Non-profit Education Initiatives (Teach for India)', 'Higher Secondary Colleges'],
    growthLadder: [
      { stageName: 'Junior / Trainee Teacher', experience: '0 - 2 Years', typicalDesignation: 'Primary / Middle School Teacher', focus: 'Classroom instruction, grading, lesson planning, and student supervision.' },
      { stageName: 'Senior Teacher / PGT', experience: '3 - 8 Years', typicalDesignation: 'High School Department Teacher', focus: 'Board exam preparation, curriculum innovation, mentoring trainee teachers.' },
      { stageName: 'Academic Head / Principal', experience: '9 - 18+ Years', typicalDesignation: 'School Principal / Director', focus: 'School-wide pedagogical vision, administrative governance, accreditation, and parent relations.' }
    ],
    higherEducation: ['M.Ed (Master of Education)', 'Master’s Degree in subject area (M.Sc / M.A.) for senior secondary teaching', 'Ph.D. in Education / Educational Leadership'],
    faqs: [
      { question: 'What is the difference between TGT and PGT teachers?', answer: 'Trained Graduate Teachers (TGT - requiring a Bachelor’s + B.Ed) teach students up to Class 10. Post Graduate Teachers (PGT - requiring a Master’s Degree + B.Ed) teach senior secondary students in Classes 11 and 12.' },
      { question: 'What are the opportunities in International (IB/Cambridge) schools?', answer: 'International schools offer very attractive compensation packages, collaborative inquiry-based teaching environments, and international mobility options for educators certified in IB methodologies.' }
    ],
    workLifeBalance: 'Generous vacation periods (summer/winter holidays); disciplined daylight work hours with after-school grading.',
    workEnvironment: 'Spacious classrooms, science laboratories, school libraries, and campus grounds.',
    stressLevel: 'Moderate'
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur (Founder / Business Builder)',
    category: 'Entrepreneurship',
    shortIntro: 'Identifies market inefficiencies, builds innovative products or services, rallies capital, and scales resilient commercial ventures.',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    educationRequired: "Any Degree or Self-Taught (No formal prerequisite)",
    minYearsStudy: 3,
    workStyle: 'Office',
    growthRate: 'Selective & Elite',
    salary: {
      entry: '₹0 - Reinvestment phase ($0 - $35,000 founder stipend)',
      mid: '₹12 - ₹35 LPA ($70,000 - $140,000 cash salary + significant company equity)',
      senior: 'Unlimited equity value creation ($500,000 - Multimillion net worth upon scale/exit)',
      currency: 'INR / Equity Value'
    },
    keySkills: ['Product-Market Fit Discovery', 'Fundraising & Capital Allocation', 'Sales & Value Proposition Pitching', 'Team Recruitment & Culture Building', 'Financial Unit Economics'],
    technicalSkills: ['Lean Startup Methodology & Rapid Prototyping', 'Basic Financial Modeling (Burn rate, Runway, CAC/LTV)', 'Digital Marketing & Growth Funnels', 'Contracts, Term Sheets & Cap Table Management', 'Customer Interview Analysis'],
    softSkills: ['Relentless Resilience', 'Comfort with Radical Uncertainty', 'Visionary Persuasion', 'Extreme Ownership', 'Emotional Fortitude'],
    overview: 'Entrepreneurs bring new value into the world. They spot unmet needs, take calculated risks, build teams out of thin air, and persevere through countless rejections to build companies that create jobs, solve problems, and drive economic prosperity.',
    dailyRoutine: 'Conducting user interviews to diagnose product friction, meeting angel investors for seed financing discussions, reviewing monthly cash runway with the finance lead, recruiting a key senior engineer, and troubleshooting an operational logistics bottleneck.',
    coreResponsibilities: [
      'Discover and validate customer problems through deep qualitative interviews.',
      'Develop minimum viable products (MVPs) and iterate rapidly based on user feedback.',
      'Recruit, inspire, and retain high-caliber founding team members.',
      'Manage corporate cash runway, burn rate, and raise venture capital or bank financing.',
      'Drive customer acquisition, revenue growth, and enterprise client partnerships.'
    ],
    educationPathway: [
      { stepNumber: 1, stage: '10th Standard', title: 'Curiosity & Initiative', details: 'Sell a small product, organize school events, read biographies of innovative builders.', criticalMilestone: 'Self-starter mindset' },
      { stepNumber: 2, stage: '10+2', title: 'Any Stream', details: 'Build foundational skills: coding, writing, mathematics, or commerce economics.', criticalMilestone: 'Launching a side hobby or small online project' },
      { stepNumber: 3, stage: 'Undergraduate Degree', title: 'Any Discipline (B.Tech, BBA, B.Com, Design)', details: 'Surround yourself with talented peers, build prototypes, join campus entrepreneurship cells (E-Cells).', criticalMilestone: 'Building a working prototype / signing first paying customers' },
      { stepNumber: 4, stage: 'Venture Launch / Accelerator', title: 'Startup Launch & Incubation', details: 'Enter startup incubators (Y Combinator, Techstars, IIT Incubators), raise angel or pre-seed capital, and achieve product-market fit.', criticalMilestone: 'Achieving sustainable positive unit economics' }
    ],
    importantSubjects: {
      highSchool: ['Economics', 'Mathematics', 'Communication'],
      higherSecondary: ['Business Studies', 'Microeconomics', 'Computer Science'],
      undergraduate: ['Corporate Finance & Accounting', 'Product Design & Management', 'Marketing & Consumer Psychology', 'Contract Law']
    },
    recommendedCourses: ['How to Start a Startup by Sam Altman (Stanford / Y Combinator)', 'The Lean Startup by Eric Ries', 'Zero to One by Peter Thiel', 'Technology Entrepreneurship (Wharton / Harvard Online)'],
    entranceExams: [
      { name: 'Incubator & Accelerator Applications (Y Combinator, Antler, Surge)', level: 'Global', eligibility: 'Early-stage founding team with prototype', targetCourses: 'Pre-seed capital, mentorship, and investor demo day' }
    ],
    jobRoles: ['Startup Founder / Co-Founder', 'Chief Executive Officer (CEO)', 'Product Builder', 'Venture Studio Entrepreneur-in-Residence', 'Angel Investor'],
    industries: ['Software as a Service (SaaS)', 'E-Commerce & Direct-to-Consumer Brands', 'HealthTech & Biotechnology', 'CleanTech & Renewable Energy', 'Fintech & Digital Payments'],
    growthLadder: [
      { stageName: 'Idea & Prototype Stage', experience: 'Year 0 - 1', typicalDesignation: 'Solo Founder / Co-founder', focus: 'Talking to 100 potential customers, building MVP, securing initial validation.' },
      { stageName: 'Product-Market Fit & Seed', experience: 'Year 1 - 3', typicalDesignation: 'Founder & CEO', focus: 'Hiring the initial core team of 5-15 people, scaling revenue, raising institutional seed rounds.' },
      { stageName: 'Growth & Scaling Stage', experience: 'Year 4+', typicalDesignation: 'CEO / Chairman', focus: 'Executive management, international expansion, board governance, and potential IPO or acquisition.' }
    ],
    higherEducation: ['MBA from top institutions (Stanford GSB, Harvard, IIMs)', 'Venture Capital Fellowship Programs', 'Self-directed continuous learning from industry practitioners'],
    faqs: [
      { question: 'Is it necessary to have a brilliant original idea to start a business?', answer: 'Rarely. Most successful companies do not invent completely new concepts; they execute significantly better, provide better customer service, streamline pricing, or apply a proven model to an underserved market niche.' },
      { question: 'What is the biggest cause of startup failure?', answer: 'Building something nobody actually wants (lack of product-market fit) and running out of cash before discovering a scalable sales model. Continuous customer interviews prevent this.' }
    ],
    workLifeBalance: 'Intense and all-consuming in early stages; offers total autonomy and direct control over one’s destiny.',
    workEnvironment: 'Dynamic co-working incubators, customer offices, or virtual remote teams.',
    stressLevel: 'High'
  }
];

export const CATEGORIES = [
  'All Categories',
  'Computer Science & IT',
  'Engineering',
  'Medicine & Healthcare',
  'Business & Management',
  'Finance',
  'Law',
  'Government Services',
  'Defence',
  'Design',
  'Science & Research',
  'Education',
  'Media',
  'Aviation',
  'Entrepreneurship'
] as const;
