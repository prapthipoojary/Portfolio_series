
/**
 * Personal portfolio data for Prapthi.
 * All portfolio information is maintained in this file.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Prapthi',
  displayName: 'Prapthi',
  firstName: 'PRAPTHI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A PRAPTHI ORIGINAL',
  role: 'AI & Machine Learning Engineering Student',
  tagline: ['AI & ML Engineering', 'Artificial Intelligence', 'Software Development'],
  intro:
    'An Artificial Intelligence and Machine Learning engineering student at Canara Engineering College, interested in building intelligent applications, AI-powered solutions and practical software projects.',
  location: 'Mangaluru, Karnataka, India',
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/prapthi-poojary-60676a365',
    github: 'https://github.com/prapthipoojary',
  },
  resumePdf: '/documents/Prapthi_Poojary_Resume.pdf',
  portrait: {
    src: '/profile.jpg',
    srcSet: '',
    alt: 'Portrait of Prapthi',
  },
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Multi-Agent AI',
    'Software Development',
  ],
};

export const education = [
  {
    school: 'Canara Engineering College',
    place: 'Mangaluru, Karnataka',
    degree: 'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    period: '2028 (Expected)',
    score: 'CGPA 7.4',
  },
];

export const experience = [
  {
    company: 'InAmigos Foundation',
    role: 'Data Analyst Intern',
    place: 'Remote',
    period: 'Completed',
    points: [
      'Completed internship assignments related to data analytics.',
      'Worked on understanding data-driven approaches to real-world problems.',
    ],
  },
  {
    company: 'InAmigos Foundation',
    role: 'AI/ML Intern',
    place: 'Remote',
    period: 'Completed',
    points: [
      'Completed practical assignments related to Artificial Intelligence and Machine Learning.',
      'Explored real-world applications of AI and Machine Learning.',
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const projects: Project[] = [
  {
    id: 'city-friction',
    title: 'City Friction',
    year: '2026',
    genre: 'Agentic AI • Smart City • Automation',
    logline:
      'An AI-powered civic complaint management system that classifies, prioritizes and routes public complaints using multiple AI agents.',
    stack: ['Python', 'FastAPI', 'Multi-Agent AI', 'REST API'],
    build: [
      'Worked as part of a team to develop a multi-agent AI workflow for handling civic complaints such as potholes and road-related issues.',
      'Worked on complaint classification, priority assessment, department routing and resolution tracking.',
    ],
    features: [
      'AI-based complaint classification',
      'Automatic priority assessment',
      'Intelligent department routing',
      'Complaint resolution workflow',
      'Complaint status tracking',
    ],
    metrics: [],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'hengseng-ai',
    title: 'HengSeng AI Sentiment & Price Prediction',
    year: '2026',
    genre: 'AI • Machine Learning • Prediction',
    logline:
      'An AI and Machine Learning project exploring sentiment analysis and price prediction.',
    stack: ['Python', 'AI', 'Machine Learning'],
    build: [
      'Worked on a project combining sentiment analysis and price prediction using AI and Machine Learning techniques.',
    ],
    features: [
      'Sentiment analysis',
      'Price prediction',
      'AI and Machine Learning applications',
    ],
    metrics: [],
    github:
      'https://github.com/prapthipoojary/HengSeng-AI-Sentiment-Price-Prediction',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'travel-planner',
    title: 'Multi-Agent Travel Planner',
    year: '2026',
    genre: 'Agentic AI • Travel • Automation',
    logline:
      'An AI-powered travel planning application designed to generate personalized travel plans using multiple agents.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'AI Agents'],
    build: [
      'Developing a multi-agent travel planning application with a backend API and interactive frontend.',
      'Working on intelligent trip planning and automated travel recommendations.',
    ],
    features: [
      'AI-powered trip planning',
      'Multi-agent workflow',
      'Travel recommendations',
      'Interactive frontend',
    ],
    metrics: [],
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'ai-placement-room',
    title: 'AI Placement Room',
    year: '2026',
    genre: 'AI • EdTech • Career Development',
    logline:
      'An AI-powered placement preparation platform designed to help students improve their interview readiness.',
    stack: ['Python', 'AI', 'LLM', 'Web Development'],
    build: [
      'Developing an AI-powered platform for placement preparation, interview practice and personalized feedback.',
    ],
    features: [
      'AI weakness detector',
      'AI mock interviews',
      'Interview feedback',
      'Placement readiness score',
      'Mistake explanations',
      'Company-specific preparation',
      'Personalized study planner',
    ],
    metrics: [],
    palette: violet,
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
  image: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'InAmigos Foundation',
    name: 'Machine Learning Internship',
    link: '',
    image: '/certificates/img1.jpg',
  },
  {
    issuer: 'IEEE Computer Society, RNSIT',
    name: "ImpactX '26 National-Level Hackathon",
    link: '',
    image: '/certificates/img2.jpg',
  },
  {
    issuer: 'InAmigos Foundation',
    name: 'AI Data Analytics Internship',
    link: '',
    image: '/certificates/img3.jpg',
  },
  {
    issuer: 'Shooting Stars Foundation / WWT',
    name: 'WWT All India Women Only Hackathon',
    link: '',
    image: '/certificates/img4.jpg',
  },
  {
    issuer: 'Spoken Tutorial, IIT Bombay',
    name: 'Advanced C++ Training',
    link: '',
    image: '/certificates/img5.jpg',
  },
  {
    issuer: 'Spoken Tutorial, IIT Bombay',
    name: 'C Training',
    link: '',
    image: '/certificates/img6.jpg',
  },
  {
    issuer: 'Spoken Tutorial, IIT Bombay',
    name: 'HTML Training',
    link: '',
    image: '/certificates/img7.jpg',
  },
];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Programming languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Project experience' },
      { name: 'JavaScript', mono: 'Js', note: 'Project experience' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web development',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side development',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'Project experience' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent applications',
    skills: [
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'Machine Learning', mono: 'Ml', note: 'Project experience' },
      { name: 'Multi-Agent AI', mono: 'Ma', note: 'Project experience' },
      { name: 'LLMs', mono: 'Ll', note: 'Learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development tools',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: [
    'City Friction',
    'HengSeng AI',
    'Multi-Agent Travel Planner',
  ],
  JavaScript: [
    'Multi-Agent Travel Planner',
    'Frontend development',
  ],
  HTML: ['Frontend development'],
  CSS: ['Frontend development'],
  FastAPI: [
    'City Friction',
    'Multi-Agent Travel Planner',
  ],
  'REST APIs': ['City Friction', 'Backend development'],
  'Artificial Intelligence': [
    'City Friction',
    'AI Placement Room',
  ],
  'Machine Learning': ['HengSeng AI'],
  'Multi-Agent AI': [
    'City Friction',
    'Multi-Agent Travel Planner',
  ],
  LLMs: ['AI Placement Room — In Progress'],
  Git: ['Project development'],
  GitHub: ['Project repositories'],
  'VS Code': ['Project development'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};



export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'Engineering Journey',
    synopsis:
      'Beginning the journey in Artificial Intelligence and Machine Learning engineering at Canara Engineering College.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description:
          'Pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning.',
        tags: ['B.E.', 'AI & ML'],
        runtime: 'Expected graduation: 2028',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning & Exploring',
    period: 'Internship Experience',
    synopsis:
      'Exploring practical applications of data analytics, Artificial Intelligence and Machine Learning.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Data Analyst Intern',
        description:
          'Completed a Data Analyst internship at InAmigos Foundation.',
        tags: ['Data Analytics', 'Internship'],
        runtime: 'Completed',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The AI/ML Intern',
        description:
          'Completed an AI/ML internship at InAmigos Foundation.',
        tags: ['Artificial Intelligence', 'Machine Learning'],
        runtime: 'Completed',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Projects',
    period: '2026',
    synopsis:
      'Learning by developing AI-powered applications and practical software projects.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'City Friction',
        description:
          'A team hackathon project using multiple AI agents to manage civic complaints.',
        tags: ['Agentic AI', 'FastAPI', 'Smart City'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'HengSeng AI',
        description:
          'Exploring sentiment analysis and price prediction using AI and Machine Learning.',
        tags: ['Python', 'AI', 'Prediction'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Travel Planner',
        description:
          'Developing a personalized travel planning application using multiple agents.',
        tags: ['Multi-Agent AI', 'FastAPI'],
        runtime: 'In progress',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'AI Placement Room',
        description:
          'Developing an AI-based placement preparation and interview practice platform.',
        tags: ['AI', 'LLM', 'EdTech'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Education',
    title: 'AI & ML Engineering',
    detail: 'Canara Engineering College',
    palette: violet,
  },
  {
    label: 'Internship',
    title: 'Data Analyst Intern',
    detail: 'InAmigos Foundation',
    palette: ocean,
  },
  {
    label: 'Internship',
    title: 'AI/ML Intern',
    detail: 'InAmigos Foundation',
    palette: jade,
  },
  {
    label: 'Team Project',
    title: 'City Friction',
    detail: 'Multi-Agent AI civic complaint system',
    palette: ocean,
  },
  {
    label: 'AI Project',
    title: 'HengSeng AI',
    detail: 'Sentiment and price prediction',
    palette: crimson,
  },
  {
    label: 'In Progress',
    title: 'Multi-Agent Travel Planner',
    detail: 'Personalized AI travel planning',
    palette: jade,
  },
  {
    label: 'In Progress',
    title: 'AI Placement Room',
    detail: 'AI-based placement preparation',
    palette: violet,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · AI & ML',
    lines: [
      'Canara Engineering College',
      'Expected graduation: 2028',
    ],
    chips: ['CGPA 7.4'],
  },
  {
    kicker: 'Experience',
    title: 'Internship Journey',
    lines: [
      'Data Analyst Intern — InAmigos Foundation',
      'AI/ML Intern — InAmigos Foundation',
    ],
    chips: ['Completed'],
  },
  {
    kicker: 'Projects',
    title: 'Building with AI',
    lines: [
      'City Friction — Multi-Agent AI',
      'HengSeng AI — Sentiment & Price Prediction',
      'Multi-Agent Travel Planner — In Progress',
      'AI Placement Room — In Progress',
    ],
  },
  {
    kicker: 'Current focus',
    title: 'The Next Chapter',
    lines: [
      'Artificial Intelligence',
      'Machine Learning',
      'Multi-Agent Applications',
      'Software Development',
    ],
  },
];

export type ProfileId = 'prapthi' | 'recruiter' | 'developer' | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prapthi',
    name: 'Prapthi',
    blurb: 'The full series, in order',
    color: '#b98bff',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, projects and skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technology and skills first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'about',
      'moments',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story and project highlights',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'about',
      'moments',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot · Education & experience',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons · Learning and growth`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Projects · AI & Software`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Highlights from my journey',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'Achievements',
    meta: `${achievements.length} Achievements · ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume · View & download',
    palette: violet,
  },
};
