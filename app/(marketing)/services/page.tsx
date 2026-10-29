import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, ShoppingCart, Brain, Zap, Smartphone, LayoutDashboard, Webhook } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive software development services including web development, mobile apps, AI agents, automation, and more.",
  alternates: { canonical: "/services" },
}

const services = [
  {
    id: "1",
    icon: "Globe",
    title: "Website Development",
    slug: "website-development",
    description: "Custom websites built with Next.js, React, and modern tech stacks. Fast, SEO-optimized, and designed to convert visitors into customers.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    pricing_start: 499,
  },
  {
    id: "2",
    icon: "ShoppingCart",
    title: "E-commerce Development",
    slug: "ecommerce-development",
    description: "Full-featured online stores with payment integration, inventory management, and seamless checkout experiences.",
    technologies: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
    pricing_start: 799,
  },
  {
    id: "3",
    icon: "Brain",
    title: "AI Agent Development",
    slug: "ai-agent-development",
    description: "Custom AI agents and chatbots powered by LLMs. Automate customer support, lead generation, and internal workflows.",
    technologies: ["OpenAI", "LangChain", "Python", "FastAPI"],
    pricing_start: 1299,
  },
  {
    id: "4",
    icon: "Zap",
    title: "Automation Solutions",
    slug: "automation-solutions",
    description: "Streamline repetitive tasks with smart automation. Connect your tools, reduce manual work, and scale operations effortlessly.",
    technologies: ["n8n", "Zapier", "Python", "REST APIs"],
    pricing_start: 599,
  },
  {
    id: "5",
    icon: "Smartphone",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Cross-platform mobile apps for iOS and Android. Smooth performance, native feel, and built for user engagement.",
    technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
    pricing_start: 1499,
  },
  {
    id: "6",
    icon: "LayoutDashboard",
    title: "Dashboard Development",
    slug: "dashboard-development",
    description: "Data-rich admin dashboards and analytics panels. Real-time charts, KPIs, and role-based access control.",
    technologies: ["React", "Recharts", "Supabase", "PostgreSQL"],
    pricing_start: 699,
  },
  {
    id: "7",
    icon: "Webhook",
    title: "API & Backend Development",
    slug: "api-backend-development",
    description: "Scalable REST and GraphQL APIs. Built with Django, FastAPI, or Node.js — ready for production workloads.",
    technologies: ["Django", "FastAPI", "Node.js", "PostgreSQL"],
    pricing_start: 599,
  },
]

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  LayoutDashboard: <LayoutDashboard className="w-8 h-8" />,
  Webhook: <Webhook className="w-8 h-8" />,
}

export default function ServicesPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground text-lg">
            End-to-end software development tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {iconMap[service.icon] || <Globe className="w-8 h-8" />}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Starting from{" "}
                    <span className="text-lg font-bold text-foreground">
                      ${service.pricing_start.toLocaleString()}
                    </span>
                  </div>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="rounded-full gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <h2 className="text-2xl font-bold mb-3">Not sure which service you need?</h2>
          <p className="text-muted-foreground mb-6">Book a free 30-minute consultation and we'll help you figure out the best approach.</p>
          <Link href="/free-consultation">
            <Button size="lg" className="rounded-full gap-2 px-8">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
