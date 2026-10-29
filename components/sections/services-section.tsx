import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, ShoppingCart, Brain, Zap, Smartphone, LayoutDashboard, Webhook } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    slug: "website-development",
    description: "Custom, ultra-fast web apps with Next.js 15, React 19, Python Django/FastAPI, and PostgreSQL.",
    technologies: ["Next.js", "React", "FastAPI", "PostgreSQL"],
    pricing_start: 350,
  },
  {
    icon: Brain,
    title: "AI Agents & LLM Systems",
    slug: "ai-agent-development",
    description: "Intelligent autonomous AI agents, customer support bots, LangChain workflows, and RAG document intelligence.",
    technologies: ["OpenAI", "LangChain", "RAG", "Vector DBs"],
    pricing_start: 500,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Cross-platform iOS & Android mobile apps with React Native & Expo. Fluid 60fps animations and offline sync.",
    technologies: ["React Native", "Expo", "iOS", "Android"],
    pricing_start: 600,
  },
  {
    icon: Zap,
    title: "Automation & Data Pipelines",
    slug: "automation-solutions",
    description: "Custom web scrapers, automated business workflows, multi-tool sync, and scheduled ETL data pipelines.",
    technologies: ["Python", "Playwright", "n8n", "REST APIs"],
    pricing_start: 250,
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards & Cloud",
    slug: "dashboard-development",
    description: "End-to-end SaaS products with role-based access control (RBAC), Stripe billing, and real-time analytics.",
    technologies: ["Supabase", "Tailwind", "Stripe", "AWS"],
    pricing_start: 450,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & High-Converting Stores",
    slug: "ecommerce-development",
    description: "Scalable online storefronts with sub-second page loads, conversion-optimized checkout, and inventory sync.",
    technologies: ["Shopify", "Next.js", "Stripe", "Tailwind"],
    pricing_start: 400,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Specialized Engineering Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From zero to production — we architect, code, and deploy resilient digital products tailored to your exact business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block h-full">
              <Card className="glow-card group h-full cursor-pointer bg-card/80 backdrop-blur-md border border-border/80 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-sky-500 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted/70 text-muted-foreground font-medium border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <span className="text-xs text-muted-foreground">
                      Starting at{" "}
                      <span className="text-sm font-bold text-foreground">
                        ${service.pricing_start.toLocaleString()}
                      </span>
                    </span>
                    <span className="text-xs font-semibold text-sky-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" className="rounded-full gap-2 px-8">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
