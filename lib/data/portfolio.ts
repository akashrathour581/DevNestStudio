import { PortfolioItem } from "@/types"

export interface ExtendedPortfolioItem extends PortfolioItem {
  features?: string[];
  key_metrics?: { label: string; value: string }[];
}

export const portfolioItems: ExtendedPortfolioItem[] = [
  {
    id: "nexus-ai-workspace",
    slug: "nexus-ai-workspace",
    title: "NexusAI — Autonomous AI Business Workspace & Multi-Agent OS",
    short_description:
      "Enterprise AI operating system featuring autonomous task agents, LangChain RAG vector knowledge base, and live operations dashboard.",
    description:
      "NexusAI is a full-stack, enterprise-grade AI operations platform built to orchestrate autonomous business workflows. It combines intelligent multi-agent systems (Autonomous Support Agent, Data Analyst, Automation Bot) with real-time analytics, vector document indexing, and custom AI prompt pipelines. Built with Next.js 15, FastAPI, LangChain, and pgvector, NexusAI delivers instant knowledge retrieval, real-time token tracking, and enterprise-level reliability.",
    client_name: "Nexus Enterprise Labs",
    category: "AI Agent",
    technologies: ["Next.js 15", "FastAPI", "LangChain", "OpenAI", "pgvector", "TypeScript", "Tailwind CSS"],
    image_urls: ["/portfolio/nexusai.png"],
    results: "85% reduction in support response latency, 4.2x faster document processing via RAG, 99.98% system uptime.",
    live_url: "https://nexusai-akash-rathour-projects.vercel.app",
    featured: true,
    created_at: new Date().toISOString(),
    features: [
      "Autonomous Multi-Agent Coordination (Support, Analyst, Automation Bots)",
      "LangChain RAG Document Ingestion & Semantic Vector Search",
      "Real-Time System Metrics & Token Consumption Analytics",
      "Interactive Dark/Light Glassmorphism Interface with Live Agent Status",
      "Workflow Automation Engine with Webhook & API Triggers",
    ],
    key_metrics: [
      { label: "Response Latency", value: "-85%" },
      { label: "Doc Processing Speed", value: "4.2x" },
      { label: "System Uptime", value: "99.98%" },
    ],
  },
  {
    id: "vendrix-ecommerce-store",
    slug: "vendrix-ecommerce-store",
    title: "Vendrix — Ultra-Fast Curated Lifestyle E-Commerce Store",
    short_description:
      "Modern lifestyle storefront featuring dynamic multi-category filtering, instant slide-over cart, coupon engine, and 99+ Lighthouse performance.",
    description:
      "Vendrix is a high-performance modern e-commerce storefront engineered for maximum conversion and frictionless shopping. Featuring an editorial catalog of curated essentials, category filtration, quick-view modals, and an instant slide-over micro-cart with a dynamic free shipping threshold, Vendrix delivers an exceptional shopping experience. Built with Next.js, TypeScript, Tailwind CSS, and Stripe integration.",
    client_name: "Vendrix Retail Co.",
    category: "E-Commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Zustand", "Framer Motion"],
    image_urls: ["/portfolio/vendrix.png"],
    results: "3.4x conversion uplift, 99+ mobile Lighthouse score, sub-second product filtering across 1,000+ SKUs.",
    live_url: "https://vendrix.shop",
    featured: true,
    created_at: new Date().toISOString(),
    features: [
      "Dynamic Product Catalog with Category & Price Filtering",
      "Interactive Slide-Over Cart with Free Shipping Progress Bar",
      "Real-time Coupon Code Verification & Instant Checkout Drawer",
      "Fully Responsive Mobile-First Design & Micro-Interactions",
      "High-Performance Edge Caching & SEO Optimization",
    ],
    key_metrics: [
      { label: "Conversion Uplift", value: "3.4x" },
      { label: "Lighthouse Score", value: "99+" },
      { label: "Filter Latency", value: "<100ms" },
    ],
  },
  {
    id: "datasphere-ai-data-analyst",
    slug: "datasphere-ai-data-analyst",
    title: "DataSphere AI — Autonomous In-Browser Data Analyst & Intelligence Suite",
    short_description:
      "Zero-latency in-browser CSV/Excel data intelligence platform enabling natural language queries, automated cleaning, anomaly detection, and instant charts.",
    description:
      "DataSphere AI is an intelligent data analysis platform that brings the power of an autonomous data scientist directly into the browser. Users simply upload CSV or Excel files, and DataSphere instantly parses datasets client-side using WebAssembly for total data privacy. Users interact via natural language to generate SQL aggregations, detect statistical outliers, produce rich interactive Recharts, and export one-click executive summaries.",
    client_name: "DataSphere Analytics",
    category: "Dashboard",
    technologies: ["Next.js", "TypeScript", "WebAssembly", "DuckDB", "OpenAI API", "Recharts", "Tailwind CSS"],
    image_urls: ["/portfolio/datasphere.png"],
    results: "15+ hours/week saved for business analysts, zero-server privacy-preserving processing for 500k+ row datasets, 100% data residency adherence.",
    live_url: "https://datasphere-lemon.vercel.app/ai-data-analyst",
    featured: true,
    created_at: new Date().toISOString(),
    features: [
      "Client-Side In-Browser Data Parsing (100% Private, Zero Server Upload)",
      "Natural Language Query Engine with Auto-Generated SQL & Chart Logic",
      "Automated Data Profiling, Missing Value Detection & Anomaly Highlighting",
      "Interactive Multi-Chart Dashboards (Bar, Line, Scatter, Heatmap)",
      "One-Click Executive Summary PDF & Cleaned Dataset Export",
    ],
    key_metrics: [
      { label: "Time Saved / Week", value: "15+ hrs" },
      { label: "Dataset Processing", value: "500K+ rows" },
      { label: "Server Latency", value: "0ms (Client-Side)" },
    ],
  },
  {
    id: "emeralds-greens-luxury-resort",
    slug: "emeralds-greens-luxury-resort",
    title: "Emeralds Greens — Luxury Golf Resort & Nature Sanctuary Portal",
    short_description:
      "Ultra-premium hospitality portal showcasing championship golf courses, luxury private villas, wellness retreats, and direct booking engine.",
    description:
      "Emeralds Greens is an immersive web portal designed for an ultra-luxury golf resort and nature sanctuary. Built to reflect timeless architectural elegance, it showcases championship 18-hole golf courses, luxury presidential suites and private villas, signature dining, and wellness retreats. The site features an intuitive direct booking reservation flow, interactive photo galleries, and hole-by-hole course previews optimized for high-net-worth clientele.",
    client_name: "Emeralds Greens Hospitality Group",
    category: "Web App",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Direct Booking API", "Responsive Web Vitals"],
    image_urls: ["/portfolio/emeralds-greens.png"],
    results: "180% surge in direct villa & tee-time reservations, zero third-party OTA commissions, 65% longer average session duration.",
    live_url: "https://emeralds-greens.vercel.app",
    featured: true,
    created_at: new Date().toISOString(),
    features: [
      "Editorial Luxury Design System with Emerald & Champagne Accents",
      "Interactive Villa & Suite Showcase with Real-Time Availability Checking",
      "Direct Reservation Inquiry Engine with Integrated Calendar Picker",
      "Championship Golf Course Tour and Exclusive Club Membership Portal",
      "Fast 60fps Scrolling with High-Resolution Visual Optimization",
    ],
    key_metrics: [
      { label: "Direct Bookings", value: "+180%" },
      { label: "Session Duration", value: "+65%" },
      { label: "OTA Commission Saved", value: "100%" },
    ],
  },
  {
    id: "automateflow-pipeline-engine",
    slug: "automateflow-pipeline-engine",
    title: "AutomateFlow — Enterprise Web Scraper & Data Engine",
    short_description:
      "Scalable crawler and automated ETL pipeline extracting 100K+ daily records with webhook sync to CRMs and databases.",
    description:
      "A high-throughput web scraping and data pipeline architecture designed to harvest, clean, and sync real-time market data across thousands of enterprise sources without IP blocks or downtime.",
    client_name: "GrowthScale Data",
    category: "Automation",
    technologies: ["Python", "Playwright", "FastAPI", "Redis", "Docker", "PostgreSQL"],
    image_urls: ["/images/portfolio-mobile.jpg"],
    results: "100K+ records processed daily with 99.8% extraction reliability and real-time CRM webhook sync.",
    featured: false,
    created_at: new Date().toISOString(),
    features: [
      "Distributed proxy rotation & anti-bot evasion",
      "Automated schema validation and JSON/CSV delivery",
      "Asynchronous webhook dispatch to Zapier, Hubspot, and Supabase",
    ],
  },
  {
    id: "ludhiana-marketplace",
    slug: "ludhiana-marketplace",
    title: "Local Demand Marketplace & Vendor Exchange",
    short_description:
      "Reverse marketplace where buyers post demands and nearby verified sellers respond with instant offers and WhatsApp delivery.",
    description:
      "Hyperlocal commerce engine tailored for regional merchants, allowing rapid buyer demand broadcast, instant merchant bidding, and automated WhatsApp confirmation workflows.",
    client_name: "Punjab Retailers Network",
    category: "Web App",
    technologies: ["Django REST", "React", "PostgreSQL", "WhatsApp Cloud API"],
    image_urls: ["/images/portfolio-ecommerce.jpg"],
    results: "Over 5,000 monthly buyer requests connected to 400+ local retail vendors.",
    featured: false,
    created_at: new Date().toISOString(),
    features: [
      "Instant buyer quote requests with category geo-routing",
      "Vendor notification engine via SMS & WhatsApp",
      "Direct vendor-buyer chat with order closing confirmation",
    ],
  },
  {
    id: "academy-sphere-saas",
    slug: "tuition-management-saas",
    title: "AcademySphere — Institute & Tuition Management SaaS",
    short_description:
      "All-in-one management system for coaching institutes — student records, fees, attendance, and parent communication.",
    description:
      "Cloud SaaS platform built for schools and private tutoring institutes to automate student fee receipts, biometric/QR attendance tracking, test grading, and automated WhatsApp report cards.",
    client_name: "BrightPath Academy",
    category: "SaaS",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Razorpay"],
    image_urls: ["/images/portfolio-saas.jpg"],
    results: "80% reduction in administrative overhead, 300+ students onboarded.",
    featured: false,
    created_at: new Date().toISOString(),
    features: [
      "Online fee collection with automated GST invoices",
      "Batch scheduling & attendance registers",
      "Parent WhatsApp alerts for exams and announcements",
    ],
  },
]

export function getPortfolioItems(): ExtendedPortfolioItem[] {
  return portfolioItems
}

export function getFeaturedPortfolioItems(): ExtendedPortfolioItem[] {
  return portfolioItems.filter((item) => item.featured)
}

export function getPortfolioItemBySlug(slug: string): ExtendedPortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug || item.id === slug)
}
