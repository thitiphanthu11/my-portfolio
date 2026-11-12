export type Social = { label: string; kind: "github" | "linkedin" | "email" | "instagram"; href: string | null };
export type PortfolioLink = { label: string; href: string };
export type Project = { id: string; period: string; name: string; category: string; description: string; highlights?: string[]; stack: string[]; github: string | null; demo: string | null; links?: PortfolioLink[] };
export type Locale = "en" | "th";
export const LANGUAGE_COOKIE = "portfolio-language";
export type NavigationItem = { id: string; label: string };
export type Portfolio = {
  name: string;
  role: string;
  tagline: string;
  email: string | null;
  phone: { label: string; href: string };
  resumeUrl: string;
  siteUrl: string | null;
  description: string;
  aboutTitle: string;
  about: string[];
  experience: { period: string; role: string; project: string; company: string; highlights: string[]; stack: string[]; links: PortfolioLink[] }[];
  projects: Project[];
  skills: { category: string; items: string[] }[];
  activities: { title: string; award: string; role: string; period: string; highlights: string[] }[];
  socials: Social[];
};

const sedaLinks: PortfolioLink[] = [
  { label: "User Portal", href: "https://match-skill-user.vercel.app/user/login" },
  { label: "Admin Portal", href: "https://match-skill-admin-jade.vercel.app/admin/login" },
];

// Replace bracketed placeholders with verified information. Keep unavailable URLs null.
export const portfolio: Portfolio = {
  name: "Thitiphan Peanbangna (Benz)",
  role: "Digital Technology Student",
  tagline: "Turning AI models into practical, real-world solutions.",
  email: "thitiphanthu11@gmail.com" as string | null,
  phone: { label: "099 673 5629", href: "tel:+66996735629" },
  resumeUrl: "/Cv1.pdf",
  siteUrl: null as string | null,
  description: "Personal portfolio of Thitiphan Peanbangna (Benz), a Digital Technology student at Suranaree University of Technology with interests in Data Science and AI.",
  aboutTitle: "Hi, I’m Benz.",
  about: [
    "Hello! My name is **Thitiphan Peanbangna**, and I am a Digital Technology student at **Suranaree University of Technology (SUT)**. I am interested in Data Science, Artificial Intelligence, and developing technologies to solve real-world problems.",
    "My interest in technology comes from curiosity and a desire to understand how data can be used to solve problems. I am particularly interested in **Data Science**, from data collection and preparation to pattern analysis, data visualization, and transforming complex data into meaningful insights that support decision-making.",
    "I also have a strong interest in **Artificial Intelligence (AI)**, especially **Machine Learning (ML)** and **Deep Learning (DL)**. I enjoy exploring how intelligent models can learn from data, recognize patterns, and predict outcomes. Recently, I have also started studying **Natural Language Processing (NLP)** to expand my understanding of AI and its practical applications.",
  ],
  experience: [{
    period: "August 2026 – October 2026",
    role: "Project Lead",
    project: "Student Assessment Web Application",
    company: "Client: SEDA",
    highlights: [
      "Led the development of a web application for assessing SUT students participating in university activities, coordinating client requirements, team tasks, and project timelines.",
      "Collaborated with developers to plan system features, design database structures, and create website UI/UX based on client requirements.",
    ],
    stack: [] as string[],
    links: sedaLinks,
  }],
  projects: [
    {
      id: "01",
      period: "[Month Year]",
      name: "Rice Yield Decline Analysis Using Machine Learning",
      category: "Machine Learning",
      description: "Rice yield analysis and predictive modeling with five regression models.",
      highlights: [
        "Cleaned and preprocessed rice yield datasets using Python and Pandas for predictive modeling.",
        "Developed and compared five regression models: Ridge Regression, Random Forest, CatBoost, XGBoost, and LightGBM.",
        "Trained and evaluated five regression models, with Ridge Regression achieving the highest R² score of 0.9125.",
      ],
      stack: ["Python", "Pandas", "Scikit-learn"],
      github: null,
      demo: null,
    },
    {
      id: "02",
      period: "[Month Year]",
      name: "Disaster Risk Assessment and Data Analytics System",
      category: "Data Analytics",
      description: "Disaster risk analysis supported by data preparation and visual reporting.",
      highlights: [
        "Analyzed population, emergency shelter, flood, and damage data to assess disaster risks and identify relevant patterns.",
        "Processed and organized datasets using Python to prepare data for analysis and interpretation.",
        "Developed Power BI dashboards and infographics to visualize key indicators and communicate data-driven insights.",
      ],
      stack: ["Python", "Power BI"],
      github: null,
      demo: null,
    },
    {
      id: "03",
      period: "[Month Year]",
      name: "Rice Disease Prediction Using Deep Learning",
      category: "Deep Learning",
      description: "A two-stage deep learning pipeline for rice leaf detection and disease classification.",
      highlights: [
        "Developed a two-stage deep learning pipeline using binary classification for rice leaf detection, followed by six-class disease classification.",
        "Trained and compared five CNN architectures using transfer learning and hyperparameter tuning.",
        "Fine-tuned and evaluated model performance, achieving 96.33% test accuracy and a macro F1-score of 0.9633.",
      ],
      stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "FastAPI"],
      github: null,
      demo: "https://rice-ai-platform.vercel.app/disease",
    },
  ] satisfies Project[],
  skills: [
    { category: "Technical", items: ["Python", "SQL", "Power BI", "Tableau", "Microsoft Office 365"] },
    { category: "Language", items: ["English (Basic)", "Thai (Native)"] },
    { category: "Interests", items: ["People Growth", "Investing", "Artificial Intelligence", "Football", "Traveling"] },
  ],
  activities: [{
    title: "Hack the Research Paper to Prototype",
    award: "2nd Place",
    role: "Team Leader",
    period: "June 2026",
    highlights: [
      "Led the team in developing an AI-powered application for food analysis and personalized meal recommendations for people with diabetes.",
      "Applied multi-class classification to identify specific rice diseases and compared five deep learning models.",
      "Trained AI models and managed project financial planning.",
    ],
  }],
  socials: [
    { label: "Instagram · @jilx.qc", kind: "instagram", href: "https://www.instagram.com/jilx.qc/" },
    { label: "GitHub", kind: "github", href: null },
    { label: "LinkedIn", kind: "linkedin", href: null },
    { label: "Email", kind: "email", href: null },
  ] satisfies Social[],
};

export const navigation = [
  { id: "about", label: "About" }, { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }, { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
] as const;

// Technical names, metrics, IDs, and URLs are shared across translations.
type ProjectTranslation = Pick<Project, "period" | "name" | "category" | "description" | "highlights">;
const thaiProjects: Record<string, ProjectTranslation> = {
  "01": {
    period: "[เดือน ปี]",
    name: "การวิเคราะห์การลดลงของผลผลิตข้าวด้วย Machine Learning",
    category: "แมชชีนเลิร์นนิง",
    description: "วิเคราะห์ผลผลิตข้าวและสร้างโมเดลพยากรณ์ โดยเปรียบเทียบโมเดลถดถอย 5 แบบ",
    highlights: [
      "ทำความสะอาดและเตรียมชุดข้อมูลผลผลิตข้าวด้วย Python และ Pandas เพื่อใช้สร้างโมเดลพยากรณ์",
      "พัฒนาและเปรียบเทียบโมเดลถดถอย 5 แบบ ได้แก่ Ridge Regression, Random Forest, CatBoost, XGBoost และ LightGBM",
      "ฝึกและประเมินโมเดลถดถอยทั้ง 5 แบบ โดย Ridge Regression ให้ค่า R² สูงที่สุดที่ 0.9125",
    ],
  },
  "02": {
    period: "[เดือน ปี]",
    name: "ระบบประเมินความเสี่ยงภัยพิบัติและวิเคราะห์ข้อมูล",
    category: "การวิเคราะห์ข้อมูล",
    description: "วิเคราะห์ความเสี่ยงจากภัยพิบัติ ตั้งแต่การเตรียมข้อมูลไปจนถึงการนำเสนอผลด้วยภาพ",
    highlights: [
      "วิเคราะห์ข้อมูลประชากร ศูนย์พักพิงฉุกเฉิน น้ำท่วม และความเสียหาย เพื่อประเมินความเสี่ยงจากภัยพิบัติและค้นหารูปแบบที่เกี่ยวข้อง",
      "ประมวลผลและจัดระเบียบชุดข้อมูลด้วย Python เพื่อเตรียมพร้อมสำหรับการวิเคราะห์และตีความ",
      "พัฒนาแดชบอร์ดด้วย Power BI และสร้างอินโฟกราฟิก เพื่อแสดงตัวชี้วัดสำคัญและสื่อสารข้อค้นพบจากข้อมูล",
    ],
  },
  "03": {
    period: "[เดือน ปี]",
    name: "การทำนายโรคข้าวด้วย Deep Learning",
    category: "ดีปเลิร์นนิง",
    description: "ระบบประมวลผลด้วย Deep Learning สองขั้นตอน สำหรับตรวจจับใบข้าวและจำแนกโรคข้าว",
    highlights: [
      "พัฒนาระบบ Deep Learning สองขั้นตอน โดยใช้การจำแนกแบบสองกลุ่มเพื่อตรวจจับใบข้าว แล้วจำแนกโรคออกเป็น 6 กลุ่ม",
      "ฝึกและเปรียบเทียบสถาปัตยกรรม CNN จำนวน 5 แบบ โดยใช้ Transfer Learning และปรับค่า Hyperparameter",
      "ปรับแต่งและประเมินประสิทธิภาพโมเดล ได้ค่าความแม่นยำบนชุดทดสอบ 96.33% และค่า macro F1-score เท่ากับ 0.9633",
    ],
  },
};

const thaiPortfolio: Portfolio = {
  ...portfolio,
  name: "ฐิติพันธ์ุ แป้นบางนา (เบนซ์)",
  role: "นักศึกษาเทคโนโลยีดิจิทัล",
  tagline: "เปลี่ยนโมเดล AI ให้เป็นโซลูชันที่ใช้งานได้จริง",
  description: "แฟ้มสะสมผลงานของ ฐิติพันธ์ุ แป้นบางนา (เบนซ์) นักศึกษาเทคโนโลยีดิจิทัล มหาวิทยาลัยเทคโนโลยีสุรนารี ผู้สนใจวิทยาการข้อมูลและปัญญาประดิษฐ์",
  aboutTitle: "สวัสดีครับ ผมเบนซ์",
  about: [
    "สวัสดีครับ! ผม **ฐิติพันธ์ุ แป้นบางนา** นักศึกษาสาขาเทคโนโลยีดิจิทัล จาก **มหาวิทยาลัยเทคโนโลยีสุรนารี (SUT)** ผมชื่นชอบเทคโนโลยี นวัตกรรม และการแก้ปัญหาที่เกิดขึ้นจริง",
    "ผมสนใจ **วิทยาการข้อมูล (Data Science)** เป็นพิเศษ ชอบตั้งคำถามและค้นหาคำตอบจากข้อมูลมากกว่าการคาดเดา ผมชอบทำงานกับข้อมูลตั้งแต่การรวบรวม ทำความสะอาด วิเคราะห์ สร้างภาพข้อมูล ไปจนถึงการเล่าเรื่อง สำหรับผม สิ่งสำคัญไม่ใช่แค่ตัวเลขหรือแดชบอร์ด แต่คือการเปลี่ยนข้อมูลที่ซับซ้อนให้เป็นข้อค้นพบที่มีความหมายและนำไปใช้ได้จริง",
    "ผมยังสนใจ **ปัญญาประดิษฐ์ (AI)** โดยเฉพาะ **Machine Learning (ML)** และ **Deep Learning (DL)** และการเรียนรู้ว่าโมเดลอัจฉริยะสามารถเรียนรู้ พยากรณ์ และแก้ปัญหาได้อย่างไร ช่วงนี้ผมกำลังขยายความสนใจไปยัง **การประมวลผลภาษาธรรมชาติ (NLP)** โดยมีเป้าหมายในการพัฒนาโซลูชัน AI ที่นำไปใช้งานได้จริง",
  ],
  experience: portfolio.experience.map((job) => ({
    ...job,
    period: "สิงหาคม 2026 – ตุลาคม 2026",
    role: "หัวหน้าโครงการ",
    project: "เว็บแอปพลิเคชันประเมินนักศึกษา",
    company: "ลูกค้า: SEDA",
    highlights: [
      "นำทีมพัฒนาเว็บแอปพลิเคชันสำหรับประเมินนักศึกษา SUT ที่เข้าร่วมกิจกรรมของมหาวิทยาลัย โดยประสานความต้องการของลูกค้า แบ่งงานในทีม และดูแลกำหนดการของโครงการ",
      "ร่วมกับทีมพัฒนาวางแผนฟีเจอร์ของระบบ ออกแบบโครงสร้างฐานข้อมูล และออกแบบ UI/UX ของเว็บไซต์ให้ตรงกับความต้องการของลูกค้า",
    ],
    links: job.links.map((link, index) => ({ ...link, label: index === 0 ? "สำหรับผู้ใช้งาน" : "สำหรับผู้ดูแลระบบ" })),
  })),
  projects: portfolio.projects.map((project) => ({ ...project, ...thaiProjects[project.id] })),
  skills: [
    { category: "ทักษะด้านเทคนิค", items: portfolio.skills[0].items },
    { category: "ภาษา", items: ["ภาษาอังกฤษ (พื้นฐาน)", "ภาษาไทย (ภาษาแม่)"] },
    { category: "ความสนใจ", items: ["การพัฒนาศักยภาพคน", "การลงทุน", "ปัญญาประดิษฐ์", "ฟุตบอล", "การเดินทาง"] },
  ],
  activities: portfolio.activities.map((activity) => ({
    ...activity,
    award: "รางวัลรองชนะเลิศอันดับ 1",
    role: "หัวหน้าทีม",
    period: "มิถุนายน 2026",
    highlights: [
      "นำทีมพัฒนาแอปพลิเคชันที่ใช้ AI วิเคราะห์อาหารและแนะนำมื้ออาหารเฉพาะบุคคลสำหรับผู้เป็นเบาหวาน",
      "ประยุกต์ใช้การจำแนกแบบหลายกลุ่มเพื่อระบุโรคข้าว และเปรียบเทียบโมเดล Deep Learning จำนวน 5 แบบ",
      "ฝึกโมเดล AI และดูแลการวางแผนการเงินของโครงการ",
    ],
  })),
  socials: portfolio.socials.map((social) => ({ ...social, label: social.kind === "email" ? "อีเมล" : social.label })),
};

const englishUi = {
  navigation: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", activities: "Activities" },
  sections: { experience: "Experience", projects: "Selected projects", skills: "Skills & Interests", activities: "Activities" },
  navigationLabel: "Sections",
  viewResume: "View Résumé",
  resumeHint: "PDF, opens in a new tab",
  exploreWork: "Explore the work",
  opensInNewTab: "opens in a new tab",
  technologies: "Technologies",
  projectDetails: "Project details",
  sourceCode: "Source code",
  liveDemo: "Live demo",
  skipToContent: "Skip to content",
  backToTop: "Back to top",
  languageLabel: "Website language",
  changingLanguage: "Changing language…",
  activeLanguage: "Website language: English",
};
export type UiText = typeof englishUi;
export const uiText: Record<Locale, UiText> = {
  en: englishUi,
  th: {
    navigation: { about: "เกี่ยวกับผม", experience: "ประสบการณ์", projects: "โปรเจกต์", skills: "ทักษะ", activities: "กิจกรรม" },
    sections: { experience: "ประสบการณ์", projects: "ผลงานที่คัดสรร", skills: "ทักษะและความสนใจ", activities: "กิจกรรม" },
    navigationLabel: "เมนูเนื้อหา",
    viewResume: "ดูเรซูเม่",
    resumeHint: "PDF เปิดในแท็บใหม่",
    exploreWork: "ชมผลงาน",
    opensInNewTab: "เปิดในแท็บใหม่",
    technologies: "เทคโนโลยีที่ใช้",
    projectDetails: "รายละเอียดโปรเจกต์",
    sourceCode: "ซอร์สโค้ด",
    liveDemo: "ทดลองใช้งาน",
    skipToContent: "ข้ามไปยังเนื้อหา",
    backToTop: "กลับด้านบน",
    languageLabel: "ภาษาเว็บไซต์",
    changingLanguage: "กำลังเปลี่ยนภาษา…",
    activeLanguage: "ภาษาเว็บไซต์: ไทย",
  },
};

export function getPortfolio(locale: Locale): Portfolio {
  return locale === "th" ? thaiPortfolio : portfolio;
}

export function getNavigation(locale: Locale): NavigationItem[] {
  return navigation.map((item) => ({ id: item.id, label: uiText[locale].navigation[item.id] }));
}
