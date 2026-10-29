export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  role: "client" | "admin";
  company?: string;
  phone?: string;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  budget?: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  source: string;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  client_id: string;
  status: "pending" | "in_progress" | "review" | "completed" | "cancelled";
  priority: "low" | "medium" | "high";
  budget?: number;
  start_date?: string;
  end_date?: string;
  progress: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectFile {
  id: string;
  project_id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploaded_by: string;
  created_at: string;
}

export interface Message {
  id: string;
  project_id?: string;
  sender_id: string;
  content: string;
  attachments?: string[];
  read: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar_url?: string;
  project_id?: string;
  approved: boolean;
  created_at: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  short_description: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  pricing_start: number;
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image_url?: string;
  order: number;
  active: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  category_id: string;
  author_id: string;
  published: boolean;
  featured: boolean;
  views: number;
  meta_title?: string;
  meta_description?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  post_count?: number;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  short_description: string;
  client_name: string;
  category: string;
  technologies: string[];
  image_urls: string[];
  results: string;
  live_url?: string;
  github_url?: string;
  featured: boolean;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client_name: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  timeline: string;
  outcome: string;
  business_impact: string;
  metrics: { label: string; value: string }[];
  image_urls: string[];
  created_at: string;
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  budget: string;
  timeline: string;
  email: string;
  name: string;
  attachments?: string[];
  status: "new" | "reviewing" | "quoted" | "accepted" | "rejected";
  created_at: string;
}

export interface Invoice {
  id: string;
  project_id: string;
  client_id: string;
  amount: number;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  due_date: string;
  paid_at?: string;
  items: { description: string; quantity: number; rate: number; amount: number }[];
  notes?: string;
  created_at: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  billing_period: "monthly" | "one_time";
  features: string[];
  popular: boolean;
  order: number;
}
