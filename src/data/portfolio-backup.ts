
export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

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

export const profile = {
  fullName: 'Prapthi',
  displayName: 'Prapthi',
  firstName: 'PRAPTHI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A PRAPTHI ORIGINAL',
  role: 'AI & Machine Learning Engineering Student',
  tagline: [
    'AI & ML Engineering',
    'Artificial Intelligence',
    'Software Development',
  ],
  intro:
    'An Artificial Intelligence and Machine Learning engineering student interested in building intelligent applications, AI-powered solutions and practical software projects.',
  location: 'India',
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/prapthi-poojary-60676a365',
    github: 'https://github.com/prapthipoojary',
  },
  resumePdf: '',
  portrait: {
    src: '',
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
    degree:
      'Bachelor of Engineering — Artificial Intelligence and Machine Learning',
    period: 'Present – 2028',
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
      'Completed practical internship assignments related to data analytics.',
      'Explored data-driven approaches to understanding real-world problems.',
    ],
  },
  {
    company: 'InAmigos Foundation',
    role: 'AI/ML Intern',
    place: 'Remote',
    period: 'Completed',
    points: [
      'Completed practical assignments related to Artificial Intelligence and Machine Learning.',
      'Explored real-world applications of AI and ML.',
    ],
  },
];

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
      'Worked on a multi-agent AI workflow for handling civic complaints such as potholes and road-related issues.',
      'Implemented complaint classification, priority assessment, department routing and resolution tracking.',
    ],
    features: [
      'AI-based complaint classification',
      'Automatic priority assessment',
      'Intelligent department routing',
      'Complaint resolution workflow',
      'Complaint status tracking',
    ],
    metrics: [],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
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
    palette: {
      from: '#24060b',
      via: '#6e0d1d',
      to: '#09070a',
      accent: '#ff3d5a',
    },
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
      'Building a multi-agent travel planning application with a backend API and interactive frontend.',
      'Working on intelligent trip planning and automated travel recommendations.',
    ],
    features: [
      'AI-powered trip planning',
      'Multi-agent workflow',
      'Travel recommendations',
      'Interactive frontend',
    ],
    metrics: [],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
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
    palette: {
      from: '#120822',
      via: '#3d1a6e',
      to: '#07060c',
      accent: '#b98bff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  title: string;
  description: string;
  year?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export const certifications: Certification[] = [];

export const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'FastAPI'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Artificial Intelligence', 'Machine Learning', 'AI Agents'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

export const skillEvidence = {};

export const seasons = [];

export const topPicks = [];

export const introSlides = [];

export type ProfileId = 'prapthi' | 'recruiter' | 'developer' | 'creative';

export const viewerProfiles = [
  {
    id: 'prapthi',
    name: 'Prapthi',
    description: 'AI & Machine Learning Engineering Student',
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    description: 'Explore my experience and projects',
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Explore my technical work',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Explore my interests and ideas',
  },
];
export const sectionMeta = {
  home: {
    label: 'Home',
    title: 'Home',
  },
  about: {
    label: 'About',
    title: 'About Me',
  },
  experience: {
    label: 'Experience',
    title: 'Experience',
  },
  projects: {
    label: 'Projects',
    title: 'Projects',
  },
  skills: {
    label: 'Skills',
    title: 'Skills',
  },
  contact: {
    label: 'Contact',
    title: 'Contact',
  },
};