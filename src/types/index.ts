export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    telegram?: string;
    github?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    base: number;
    currency: string;
    period?: string;
  };
}

export interface Audit {
  id: string;
  projectName: string;
  client: string;
  blockchain: string;
  date: string;
  type: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  reportUrl?: string;
  findings?: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    informational: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: TeamMember;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  blockchain: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface AuditRequest {
  projectName: string;
  contractAddress?: string;
  blockchain: string;
  language: string;
  auditType: string;
  urgency: 'standard' | 'express' | 'emergency';
  budget: string;
  description: string;
  contactInfo: {
    name: string;
    email: string;
    telegram?: string;
    company?: string;
  };
}