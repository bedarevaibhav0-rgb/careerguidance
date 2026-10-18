export interface AdmissionDoc {
  id: string;
  title: string;
  hindiTitle?: string;
  category: 'academic' | 'entrance' | 'identity' | 'quota' | 'medical_legal' | 'career_specific';
  purpose: string;
  issuingAuthority: string;
  formatRequired: string;
  applicableCareers: string[]; // career IDs or 'all'
  criticalTip: string;
  mandatoryLevel: 'Compulsory' | 'Conditional / Quota' | 'Stream Specific';
}

export const ADMISSION_CATEGORIES = [
  { id: 'all', label: 'All Documents (सम्पूर्ण दस्तावेज़)' },
  { id: 'academic', label: '1. Academic Marksheets & Certificates' },
  { id: 'entrance', label: '2. Entrance Exam & Counseling Allotments' },
  { id: 'identity', label: '3. Identity & Domicile Proofs' },
  { id: 'quota', label: '4. Caste, Quota & Income Certificates' },
  { id: 'medical_legal', label: '5. Medical, Affidavits & Bonds' },
  { id: 'career_specific', label: '6. Career-Specific Specialized Dossiers' },
] as const;

export const ADMISSION_DOCUMENTS: AdmissionDoc[] = [
  // --- 1. ACADEMIC CREDENTIALS ---
  {
    id: 'doc-10th-marksheet',
    title: 'Class 10th (Secondary) Marksheet & Certificate',
    hindiTitle: '10वीं बोर्ड अंकतालिका एवं मूल प्रमाण पत्र',
    category: 'academic',
    purpose: 'Acts as the primary universal legal proof of Candidate Date of Birth (DOB) and exact spelling of parents’ names.',
    issuingAuthority: 'CBSE / ICSE / State Secondary Education Board',
    formatRequired: 'Original + 4 Self-Attested Photocopies + Clear Color Scanned PDF (<200 KB)',
    applicableCareers: ['all'],
    criticalTip: 'Ensure candidate name and parent names match letter-for-letter with your Aadhaar and 12th marksheet.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-12th-marksheet',
    title: 'Class 12th (Higher Secondary 10+2) Marksheet',
    hindiTitle: '12वीं बोर्ड अंकतालिका (10+2)',
    category: 'academic',
    purpose: 'Verifies qualifying percentage in mandatory subjects (e.g. PCM for Engg, PCB for Medical, Maths for NATA).',
    issuingAuthority: 'CBSE / CISCE / State Higher Secondary Education Board',
    formatRequired: 'Original + 4 Self-Attested Photocopies + Scanned PDF (<300 KB)',
    applicableCareers: ['all'],
    criticalTip: 'If your original board marksheet has not arrived yet, obtain an internet copy countersigned by your school principal with official seal.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-12th-passing',
    title: 'Class 12th Passing / Provisional Certificate',
    hindiTitle: '12वीं उत्तीर्ण / प्रोविजनल प्रमाण पत्र',
    category: 'academic',
    purpose: 'Confirms completion of higher secondary schooling before original degree diplomas are printed by the board.',
    issuingAuthority: 'School Principal / Board Secretary',
    formatRequired: 'Original + 3 Photocopies',
    applicableCareers: ['all'],
    criticalTip: 'Provisional certificate is valid for 6 months from the date of issue until final board diploma arrives.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-transfer-cert',
    title: 'School Leaving Certificate (SLC) / Transfer Certificate (TC)',
    hindiTitle: 'स्थानांतरण प्रमाण पत्र (TC / SLC)',
    category: 'academic',
    purpose: 'Essential proof that student has formally dis-enrolled from school and is free to matriculate into college.',
    issuingAuthority: 'Head of Institution / School Principal',
    formatRequired: 'Original mandatory (Universities retain the original TC during admission)',
    applicableCareers: ['all'],
    criticalTip: 'Always keep at least 5 scanned color copies and 5 photocopies before submitting the original TC to college.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-migration-cert',
    title: 'Migration Certificate',
    hindiTitle: 'माइग्रेशन (प्रवास) प्रमाण पत्र',
    category: 'academic',
    purpose: 'Required when changing educational boards or migrating to a university in another state.',
    issuingAuthority: 'CBSE / ICSE / State Board Controller of Examinations / DigiLocker',
    formatRequired: 'Original Document (Retained by Admission Cell)',
    applicableCareers: ['all'],
    criticalTip: 'DigiLocker digitally signed migration certificates are legally valid under IT Act for Central Universities and IITs/NITs.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-character-cert',
    title: 'Character / Conduct Certificate',
    hindiTitle: 'चरित्र प्रमाण पत्र',
    category: 'academic',
    purpose: 'Certifies good moral conduct, discipline, and absence of pending criminal or disciplinary cases.',
    issuingAuthority: 'School / College Principal where candidate last studied',
    formatRequired: 'Original Document (Usually must be issued within the last 6 months)',
    applicableCareers: ['all'],
    criticalTip: 'If there was a drop year, get a character certificate countersigned by a Gazetted Officer or local Sub-Divisional Magistrate.',
    mandatoryLevel: 'Compulsory'
  },

  // --- 2. ENTRANCE EXAM & COUNSELING ALLOTMENTS ---
  {
    id: 'doc-entrance-admit',
    title: 'Entrance Exam Admit Card with Candidate Photograph',
    hindiTitle: 'प्रवेश परीक्षा प्रवेश पत्र (मूल फ़ोटो सहित)',
    category: 'entrance',
    purpose: 'Verifies the candidate actually sat for the examination under the roll number claimed on scorecard.',
    issuingAuthority: 'NTA (JEE/NEET), Consortium of NLUs (CLAT), UPSC, ICAI, State CET Cell',
    formatRequired: 'Printout of downloaded Admit Card with candidate and invigilator signature if available',
    applicableCareers: ['all'],
    criticalTip: 'Retain the exact admit card used inside the examination hall; do not misplace it after the exam finishes.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-entrance-scorecard',
    title: 'Official Entrance Exam Scorecard & Rank Card',
    hindiTitle: 'परीक्षा स्कोरकार्ड एवं रैंक कार्ड',
    category: 'entrance',
    purpose: 'Confirms All India Rank (AIR), category rank, percentile, and cutoff qualification status.',
    issuingAuthority: 'National Testing Agency (NTA) / Respective Testing Body',
    formatRequired: 'Official high-resolution color printout (3 copies) + PDF',
    applicableCareers: ['all'],
    criticalTip: 'Download multiple copies as examination score download portals often close 3-4 months after result declarations.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-allotment-letter',
    title: 'Counseling Provisional Seat Allotment Letter',
    hindiTitle: 'सीट आवंटन पत्र (JoSAA / MCC / State Allotment)',
    category: 'entrance',
    purpose: 'Proof that the specific branch and college were legitimately allocated to the student in counseling.',
    issuingAuthority: 'JoSAA / CSAB / MCC / State Counseling Authority Portal',
    formatRequired: 'Original Color Printout showing round number, institute code, and allotted quota',
    applicableCareers: ['all'],
    criticalTip: 'Carry proof of Seat Acceptance Fee (SAF) online payment receipt along with this allotment letter.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-choice-filling',
    title: 'Counseling Choice Filling & Registration Confirmation Slip',
    hindiTitle: 'काउंसलिंग विकल्प फॉर्म व रजिस्ट्रेशन रसीद',
    category: 'entrance',
    purpose: 'Document verifying the verified order of preferred colleges submitted by the student.',
    issuingAuthority: 'Counseling Portal (JoSAA, KEA, DTE, MHT CET, etc.)',
    formatRequired: 'Computer printout (2 copies)',
    applicableCareers: ['all'],
    criticalTip: 'Locked choice confirmation slip helps in case of any technical discrepancy in allocated seat category.',
    mandatoryLevel: 'Compulsory'
  },

  // --- 3. IDENTITY & DOMICILE ---
  {
    id: 'doc-aadhaar',
    title: 'Aadhaar Card / Valid Indian Passport / Voter ID',
    hindiTitle: 'आधार कार्ड / भारतीय पासपोर्ट / वोटर आईडी',
    category: 'identity',
    purpose: 'Government identity proof and permanent biometric residential verification.',
    issuingAuthority: 'UIDAI / Ministry of External Affairs / Election Commission of India',
    formatRequired: 'Original for in-person verification + 4 self-attested photocopies',
    applicableCareers: ['all'],
    criticalTip: 'Make sure phone number linked to Aadhaar is active to receive biometric OTP during e-KYC counseling.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-domicile',
    title: 'Domicile / Permanent Residence Certificate (PRC)',
    hindiTitle: 'मूल निवास प्रमाण पत्र (डोमिसाइल सर्टिफिकेट)',
    category: 'identity',
    purpose: 'Mandatory to claim 85% State Quota seats in Medical/Engineering colleges (NIT home quota, state govt colleges).',
    issuingAuthority: 'Tehsildar / Sub-Divisional Magistrate (SDM) / District Magistrate (DM)',
    formatRequired: 'Digitally signed official certificate with barcode / QR code verification',
    applicableCareers: ['all'],
    criticalTip: 'Must mention that candidate or parents have resided in the state for the minimum stipulated statutory years (typically 10-15 years).',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-passport-photos',
    title: 'Recent Passport-Sized Color Photographs (15 - 20 Copies)',
    hindiTitle: 'पासपोर्ट साइज़ नवीनतम रंगीन फ़ोटो (15-20 प्रतियाँ)',
    category: 'identity',
    purpose: 'Required for identity card, library card, hostel registration, examination forms, and university register.',
    issuingAuthority: 'Studio / Candidate',
    formatRequired: '3.5cm x 4.5cm on white background, sharp focus, ears visible; identical to entrance exam photo',
    applicableCareers: ['all'],
    criticalTip: 'Always print 20 identical copies of the exact photo uploaded on your JEE/NEET/Entrance admit card.',
    mandatoryLevel: 'Compulsory'
  },

  // --- 4. CASTE, QUOTA & INCOME CERTIFICATES ---
  {
    id: 'doc-caste-cert',
    title: 'Category Certificate (SC / ST / OBC-NCL)',
    hindiTitle: 'जाति प्रमाण पत्र (SC / ST / OBC-NCL)',
    category: 'quota',
    purpose: 'Mandatory to avail statutory reservation benefits in cutoff marks, seat allotment, and tuition fee waivers.',
    issuingAuthority: 'Authorized Revenue Authority (DM, ADM, Collector, SDM, Tehsildar)',
    formatRequired: 'Original Central Government Format (for central institutes like IIT, NIT, AIIMS, NLU) + 4 photocopies',
    applicableCareers: ['all'],
    criticalTip: 'For OBC-NCL, certificate MUST be issued on or after April 1 of the admission academic year in prescribed Govt of India format. State format is strictly rejected by Central Counseling!',
    mandatoryLevel: 'Conditional / Quota'
  },
  {
    id: 'doc-ews-cert',
    title: 'Economically Weaker Section (EWS) Certificate',
    hindiTitle: 'ईडब्ल्यूएस आय एवं संपत्ति प्रमाण पत्र',
    category: 'quota',
    purpose: 'To claim 10% EWS reservation in central and state universities.',
    issuingAuthority: 'Tehsildar / SDM / Revenue Officer',
    formatRequired: 'Income and Asset Certificate issued in Central Government format',
    applicableCareers: ['all'],
    criticalTip: 'Must be valid for the current financial year (issued on or after 1st April of admission year) confirming family annual gross income is below ₹8 Lakhs.',
    mandatoryLevel: 'Conditional / Quota'
  },
  {
    id: 'doc-income-cert',
    title: 'Annual Family Income Certificate',
    hindiTitle: 'वार्षिक पारिवारिक आय प्रमाण पत्र',
    category: 'quota',
    purpose: 'Required for full/partial tuition fee remissions at IITs, NITs, and government scholarship eligibility.',
    issuingAuthority: 'Competent Revenue Officer / Tehsildar / ITR Form 16 of Parents',
    formatRequired: 'Valid certificate issued within the current fiscal year',
    applicableCareers: ['all'],
    criticalTip: 'IITs and NITs grant 100% tuition waiver for families earning < ₹1 LPA, and 2/3rd waiver for families between ₹1 - ₹5 LPA.',
    mandatoryLevel: 'Conditional / Quota'
  },
  {
    id: 'doc-pwd-cert',
    title: 'Persons with Disabilities (PwD) Benchmark Certificate',
    hindiTitle: 'दिव्यांगता (PwD) प्रमाण पत्र',
    category: 'quota',
    purpose: 'To claim 5% horizontal PwD reservation in admissions.',
    issuingAuthority: 'Authorized District Medical Board / UDID Card (Unique Disability ID)',
    formatRequired: 'Permanent PwD certificate indicating at least 40% benchmark disability',
    applicableCareers: ['all'],
    criticalTip: 'Central counseling bodies (JoSAA/MCC) also require physical verification at designated counseling reporting centers.',
    mandatoryLevel: 'Conditional / Quota'
  },

  // --- 5. MEDICAL, AFFIDAVITS & BONDS ---
  {
    id: 'doc-medical-fitness',
    title: 'General Physical Fitness & Medical Certificate',
    hindiTitle: 'शारीरिक स्वास्थ्य व फिटनेस प्रमाण पत्र',
    category: 'medical_legal',
    purpose: 'Verifies candidate has no communicable disease or physical impairment preventing rigorous study.',
    issuingAuthority: 'Registered Medical Practitioner (MBBS) / Civil Surgeon / Chief Medical Officer (CMO)',
    formatRequired: 'On standard counseling format (e.g. JoSAA Annexure 7, MCC Medical Form) with doctor seal & MCI/NMC Reg No.',
    applicableCareers: ['all'],
    criticalTip: 'Must include blood group, eyesight acuity, chest measurement, and vaccination history.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-antiragging',
    title: 'Anti-Ragging Undertaking by Student & Parents',
    hindiTitle: 'एंटी-रैगिंग शपथ पत्र (छात्र व अभिभावक)',
    category: 'medical_legal',
    purpose: 'Statutory compliance under Supreme Court / UGC anti-ragging regulations.',
    issuingAuthority: 'National Anti-Ragging Portal (antiragging.in or amanmovement.org)',
    formatRequired: 'Downloaded online undertaking printout signed by both student and parent (or ₹10 notarized affidavit if requested by college)',
    applicableCareers: ['all'],
    criticalTip: 'Register online at www.antiragging.in to get your unique National Reference Number.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-gap-affidavit',
    title: 'Gap Year Affidavit (For Drop Year Students)',
    hindiTitle: 'गैप ईयर शपथ पत्र (ड्रॉप लेने वाले छात्रों के लिए)',
    category: 'medical_legal',
    purpose: 'Explains the 1-2 year gap between passing 12th standard and college admission.',
    issuingAuthority: 'Notary Public / Oath Commissioner',
    formatRequired: 'Affidavit typed on Non-Judicial Stamp Paper (₹50 or ₹100 value) duly signed & notarized',
    applicableCareers: ['all'],
    criticalTip: 'State clearly that during the gap period you were preparing for competitive entrance examinations and were not enrolled in any other degree or involved in criminal activities.',
    mandatoryLevel: 'Conditional / Quota'
  },

  // --- 6. CAREER-SPECIFIC SPECIALIZED DOSSIERS ---
  {
    id: 'doc-pilot-dgca-class2',
    title: 'DGCA Class 2 Medical Assessment Certificate',
    hindiTitle: 'डीजीसीए क्लास 2 मेडिकल असेसमेंट (पायलट)',
    category: 'career_specific',
    purpose: 'Preliminary fitness clearance mandatory before commencing commercial pilot ground school training.',
    issuingAuthority: 'DGCA Empaneled Class 2 Medical Examiner (Directorate General of Civil Aviation)',
    formatRequired: 'Original DGCA Assessment Sheet + Computer Number verification printout',
    applicableCareers: ['pilot'],
    criticalTip: 'Must test 6/6 distant vision (correctable with spectacles) and normal color vision with Ishihara test plates.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-pilot-dgca-class1',
    title: 'DGCA Class 1 Medical Fitness Clearance',
    hindiTitle: 'डीजीसीए क्लास 1 मेडिकल असेसमेंट (CPL हेतु अनिवार्य)',
    category: 'career_specific',
    purpose: 'Mandatory standard for commercial airline pilots in India.',
    issuingAuthority: 'Air Force Medical Centers (IAM Bengaluru, AFCME New Delhi, MEC Jorhat)',
    formatRequired: 'Official DGCA Class 1 Fitness Docket',
    applicableCareers: ['pilot'],
    criticalTip: 'Class 1 appointments book 2-3 months in advance on the DGCA eGCA portal; apply early!',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-pilot-police-clearance',
    title: 'Police Verification Certificate (PCC) & Passport',
    hindiTitle: 'पुलिस सत्यापन प्रमाण पत्र (PCC) व वैध पासपोर्ट',
    category: 'career_specific',
    purpose: 'Required for Bureau of Civil Aviation Security (BCAS) airport entry pass and international flight training.',
    issuingAuthority: 'Regional Passport Office / District Superintendent of Police',
    formatRequired: 'Valid Passport with at least 3 years remaining + Original PCC',
    applicableCareers: ['pilot'],
    criticalTip: 'No candidate can enter flying school airside operational zone without BCAS security clearance.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-doctor-rural-bond',
    title: 'Mandatory Rural Service & Discontinuation Penalty Bond',
    hindiTitle: 'अनिवार्य ग्रामीण सेवा बॉन्ड व क्षतिपूर्ति अनुबंध (MBBS)',
    category: 'career_specific',
    purpose: 'Legal agreement to serve in state government hospitals for 1-2 years after MBBS or pay statutory bond penalty (₹5L - ₹30L).',
    issuingAuthority: 'Directorate of Medical Education / State Health Dept on Judicial Stamp Paper',
    formatRequired: 'Executed Bond on Non-Judicial Stamp Paper with 2 Gazetted Sureties and Notary seal',
    applicableCareers: ['doctor'],
    criticalTip: 'Read the exact state bond tenure carefully before signing during state medical counseling.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-doctor-hepatitis',
    title: 'Hepatitis-B & Tetanus Immunization Record',
    hindiTitle: 'हेपेटाइटिस बी टीकाकरण प्रमाण पत्र (मेडिकल छात्र)',
    category: 'career_specific',
    purpose: 'Clinical protection before stepping into patient hospital wards, dissection rooms, and operation theatres.',
    issuingAuthority: 'Certified Immunization Center / Registered Hospital',
    formatRequired: 'Doctor signed vaccination card showing 3 doses of Hepatitis B vaccine + Antibody titer report',
    applicableCareers: ['doctor'],
    criticalTip: 'Hospital clinical training requires confirmed HBsAg antibody titer proof.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-engg-colorblind',
    title: 'Color Blindness & Visual Acuity Assessment',
    hindiTitle: 'कलर विज़न व दृष्टि परीक्षण प्रमाण पत्र (इलेक्ट्रिकल/सिविल)',
    category: 'career_specific',
    purpose: 'Essential for Electrical and Mining engineering because engineers must differentiate color-coded electrical phases (Red, Yellow, Blue, Neutral) and live circuit wiring safely.',
    issuingAuthority: 'Registered Ophthalmologist / Chief Medical Officer',
    formatRequired: 'Ishihara 38 Plates Color Vision Test Certificate',
    applicableCareers: ['electrical-engineer', 'civil-engineer', 'mechanical-engineer'],
    criticalTip: 'Severe color blindness can bar students from certain high-voltage substation engineering jobs and mining branches.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-law-clat-allotment',
    title: 'CLAT / AILET Counseling Admission Dossier',
    hindiTitle: 'क्लैट (CLAT) काउंसलिंग सीट आवंटन एवं शुल्क रसीद',
    category: 'career_specific',
    purpose: 'Required for admission into 26 National Law Universities (NLUs) in India.',
    issuingAuthority: 'Consortium of National Law Universities',
    formatRequired: 'Official Allotment Confirmation + Counseling Registration Receipt',
    applicableCareers: ['lawyer'],
    criticalTip: 'NLUs require immediate verification of 10th/12th marksheets and category certificates during physical reporting.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-ca-icai-registration',
    title: 'ICAI Student Registration Confirmation Letter',
    hindiTitle: 'आईसीएआई (ICAI) छात्र पंजीकरण स्वीकृति पत्र',
    category: 'career_specific',
    purpose: 'Confirms enrollment with the Institute of Chartered Accountants of India under Student Registration Number (SRN e.g. WRO/NRO/SRO).',
    issuingAuthority: 'The Institute of Chartered Accountants of India (ICAI)',
    formatRequired: 'Computerized Confirmation Letter downloaded from SSP (Self Service Portal)',
    applicableCareers: ['chartered-accountant', 'financial-analyst'],
    criticalTip: 'Retain your ICAI SRN number carefully as it serves as your permanent identifier from Foundation to Final.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-design-portfolio',
    title: 'Creative Design Portfolio & Original Sketchbook',
    hindiTitle: 'डिज़ाइन पोर्टफोलियो व मूल स्केचबुक (NID / NIFT / UCEED)',
    category: 'career_specific',
    purpose: 'Showcases artistic aptitude, 3D spatial thinking, material handling, and original creative ideation during studio test rounds.',
    issuingAuthority: 'Candidate’s Self-Authored Creative Works',
    formatRequired: 'Hardcopy Presentation Portfolio (A3/A4) + Digital PDF + Physical prototype models',
    applicableCareers: ['graphic-designer', 'product-manager'],
    criticalTip: 'Include process sketches showing problem identification to final conceptual resolution, not just finished renders.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-civil-services-daf',
    title: 'UPSC Detailed Application Form (DAF-I & DAF-II)',
    hindiTitle: 'यूपीएससी विस्तृत आवेदन पत्र (DAF I व II)',
    category: 'career_specific',
    purpose: 'Comprehensive biographical, educational, hobby, and cadre/service preference dossier submitted to Union Public Service Commission.',
    issuingAuthority: 'UPSC Online Portal (upsconline.nic.in)',
    formatRequired: 'Original Signed Printout of Submitted DAF along with all verified certificates',
    applicableCareers: ['government-officer'],
    criticalTip: 'Every single claim (extracurriculars, prizes, past employment) mentioned in DAF must be backed with documentary evidence at interview time.',
    mandatoryLevel: 'Compulsory'
  },
  {
    id: 'doc-defense-ssb',
    title: 'SSB Interview Call Letter & Medical Board Docket',
    hindiTitle: 'एसएसबी (SSB) साक्षात्कार कॉल लेटर व रक्षा मेडिकल दस्तावेज',
    category: 'career_specific',
    purpose: 'Admission into National Defence Academy (NDA) Khadakwasla / IMA Dehradun / Air Force Academy.',
    issuingAuthority: 'Directorate General of Recruiting, Indian Armed Forces',
    formatRequired: 'Original Call-up Letter + 10 Sets of Self-Attested Document Booklets + Risk Certificate',
    applicableCareers: ['defense-officer', 'pilot'],
    criticalTip: 'Must carry Parent Risk Certificate indemnifying the military during outdoor obstacle physical tests.',
    mandatoryLevel: 'Compulsory'
  }
];

// Document verification guidelines and common pitfalls
export const ADMISSION_VERIFICATION_TIPS = [
  {
    title: 'Name Consistency Across Records',
    description: 'The candidate’s name, father’s name, and mother’s name must be spelled identically across 10th Marksheet, 12th Marksheet, Aadhaar Card, and Category Certificate. A single misspelled vowel can trigger rejection or demand an affidavit.'
  },
  {
    title: 'Central vs State Caste Certificate Formats',
    description: 'All central institutions (IITs, NITs, IIITs, AIIMS, Central Universities, NLUs) mandate the Government of India (Central) format. State OBC/SC certificates are not accepted during JoSAA or MCC counseling.'
  },
  {
    title: 'Validity Date Rules for OBC-NCL & EWS',
    description: 'OBC-NCL and EWS certificates MUST be issued on or after April 1 of the admission academic year. Old certificates from previous financial years are strictly invalid.'
  },
  {
    title: 'Self-Attestation Standard',
    description: 'When colleges ask for "Self-Attested Photocopies", write: "Self-Attested", followed by your full running signature and current date on the bottom margin of every single photocopy.'
  },
  {
    title: 'DigiLocker Digital Credentials Legality',
    description: 'Under Rule 9A of Information Technology Rules 2016, digital certificates pulled directly from DigiLocker are treated at par with original physical documents by all AICTE & UGC approved colleges.'
  }
];
