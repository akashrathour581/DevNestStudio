import { CaseStudy } from "@/types"

export interface ExtendedCaseStudy extends CaseStudy {
  live_url?: string;
  featured?: boolean;
}

export const caseStudies: ExtendedCaseStudy[] = [
  {
    id: "nexusai-enterprise-ai-agent",
    slug: "nexusai-enterprise-ai-agent",
    title: "How NexusAI Cut Customer Support Latency by 85% with Autonomous Multi-Agent RAG",
    client_name: "Nexus Enterprise Labs",
    industry: "AI SaaS & Enterprise Ops",
    problem:
      "Enterprise support and operational teams were losing 30+ hours weekly handling repetitive customer inquiries, complex document searches across knowledge bases, and manual data summaries. High customer churn and slow SLA response times were impacting growth.",
    solution:
      "We engineered NexusAI, an end-to-end autonomous business operating system featuring LangChain RAG pipelines, FastAPI orchestration, vector embeddings with pgvector, and multi-agent coordination. The system handles autonomous ticket resolution, live token telemetry, and conversational document retrieval in real time.",
    technologies: ["Next.js 15", "FastAPI", "LangChain", "OpenAI", "pgvector", "TypeScript", "Tailwind CSS"],
    timeline: "6 weeks",
    outcome:
      "Autonomous AI support agent handles 80%+ of incoming inquiries with zero human handoff, while response latency dropped from hours to seconds.",
    business_impact:
      "Operational support costs dropped by 65%, document query speed surged 4.2x, and customer satisfaction reached 98.4%.",
    metrics: [
      { label: "Latency Cut", value: "-85%" },
      { label: "Doc Search Speed", value: "4.2x" },
      { label: "Auto Resolution", value: "82%" },
      { label: "System Uptime", value: "99.98%" },
    ],
    image_urls: ["/portfolio/nexusai.png"],
    live_url: "https://nexusai-akash-rathour-projects.vercel.app",
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "vendrix-ecommerce-scale",
    slug: "vendrix-ecommerce-scale",
    title: "How Vendrix Scaled to 3.4x Conversion with a Headless Next.js Storefront",
    client_name: "Vendrix Retail Co.",
    industry: "E-Commerce & Retail",
    problem:
      "Vendrix operated on a bloated monolithic store with 4.5s initial load times, sluggish mobile navigation, and an abandoned cart rate exceeding 72% due to a cumbersome multi-page checkout flow.",
    solution:
      "We built Vendrix as an ultra-fast headless e-commerce application utilizing Next.js, Tailwind CSS, Zustand, and Stripe. We introduced an interactive slide-over cart drawer with a real-time free-shipping progress tracker, instant category filters, and edge caching for sub-second page switches.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Zustand", "Framer Motion"],
    timeline: "4 weeks",
    outcome:
      "Mobile Lighthouse scores jumped to 99/100, page transition times dropped to under 150ms, and checkout conversion surged dramatically.",
    business_impact:
      "Conversion rate increased by 3.4x, cart abandonment fell by 38%, and average order value rose by 24% through intelligent threshold prompts.",
    metrics: [
      { label: "Conversion Rate", value: "3.4x" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Cart Abandonment", value: "-38%" },
      { label: "AOV Increase", value: "+24%" },
    ],
    image_urls: ["/portfolio/vendrix.png"],
    live_url: "https://vendrix.shop",
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "datasphere-in-browser-analytics",
    slug: "datasphere-in-browser-analytics",
    title: "DataSphere AI: Eliminating Cloud Compute Costs with Client-Side AI Data Analytics",
    client_name: "DataSphere Analytics",
    industry: "Data Intelligence & Analytics",
    problem:
      "Data analysts and finance teams needed to explore sensitive 500k-row CSV and Excel datasets with AI assistance, but company compliance prohibited uploading proprietary spreadsheets to third-party cloud servers.",
    solution:
      "We engineered DataSphere AI, an in-browser analytics engine powered by WebAssembly (DuckDB) and interactive Recharts. Datasets are parsed locally in the user's browser for 100% data privacy, while an integrated AI agent generates SQL aggregations, anomaly detection models, and executive chart dashboards.",
    technologies: ["Next.js", "TypeScript", "WebAssembly", "DuckDB", "OpenAI API", "Recharts", "Tailwind CSS"],
    timeline: "5 weeks",
    outcome:
      "Zero-latency spreadsheet processing with total compliance adherence. Analysts can chat with their data and export finished executive decks in seconds.",
    business_impact:
      "Saved 15+ manual reporting hours every week, reduced cloud server compute costs by $1,800/month, and ensured zero data leaks.",
    metrics: [
      { label: "Weekly Hours Saved", value: "15+ hrs" },
      { label: "Dataset Processing", value: "500K+ rows" },
      { label: "Cloud Cost Saved", value: "$1.8K/mo" },
      { label: "Privacy Rating", value: "100%" },
    ],
    image_urls: ["/portfolio/datasphere.png"],
    live_url: "https://datasphere-lemon.vercel.app/ai-data-analyst",
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "emeralds-greens-luxury-hospitality",
    slug: "emeralds-greens-luxury-hospitality",
    title: "Emeralds Greens: Generating 180% More Direct Bookings for Luxury Resort & Golf Club",
    client_name: "Emeralds Greens Hospitality Group",
    industry: "Luxury Hospitality & Real Estate",
    problem:
      "Emeralds Greens was surrendering 18-22% in commission fees to online travel agencies (OTAs) because their legacy web portal failed to convey the resort's ultra-luxury ambiance or allow direct villa reservations.",
    solution:
      "We designed and developed an editorial luxury digital experience with bespoke emerald styling, smooth 60fps micro-animations, interactive villa tours, golf course hole-by-hole previews, and an integrated reservation inquiry calendar.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Direct Booking API", "Responsive Web Vitals"],
    timeline: "4 weeks",
    outcome:
      "Direct guest reservations skyrocketed while average on-site user engagement increased by 65%.",
    business_impact:
      "180% increase in direct bookings within 90 days, saving hundreds of thousands in third-party commissions while elevating brand prestige.",
    metrics: [
      { label: "Direct Bookings", value: "+180%" },
      { label: "OTA Fees Saved", value: "100%" },
      { label: "Session Duration", value: "+65%" },
      { label: "Mobile Bounce Rate", value: "-42%" },
    ],
    image_urls: ["/portfolio/emeralds-greens.png"],
    live_url: "https://emeralds-greens.vercel.app",
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "coaching-institute-automation",
    slug: "coaching-institute-automation",
    title: "Local Coaching Institute Saves 20 Hours/Week with Custom SaaS",
    client_name: "BrightPath Academy",
    industry: "Education",
    problem:
      "Fee tracking in spreadsheets, manual attendance registers, and WhatsApp groups for parent communication — a 300-student institute running entirely on manual processes.",
    solution:
      "We built an all-in-one management SaaS featuring student records, automated fee reminders, QR attendance, and automated WhatsApp report cards.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Razorpay"],
    timeline: "3 weeks",
    outcome:
      "80% of admin tasks automated, 20 hours/week saved, parents loved the instant communication portal.",
    business_impact:
      "Zero delayed tuition payments, 20 hours saved weekly, and 300 students onboarded seamlessly.",
    metrics: [
      { label: "Tasks Automated", value: "80%" },
      { label: "Time Saved/Week", value: "20 hrs" },
      { label: "Students", value: "300+" },
      { label: "Parent NPS", value: "94" },
    ],
    image_urls: ["/images/portfolio-saas.jpg"],
    featured: false,
    created_at: new Date().toISOString(),
  },
]

export function getCaseStudies(): ExtendedCaseStudy[] {
  return caseStudies
}

export function getCaseStudyBySlug(slug: string): ExtendedCaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug || study.id === slug)
}
