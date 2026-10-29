import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import { getPortfolioItems } from "@/lib/data/portfolio"
import { Sparkles, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | DevNest Studio",
  description:
    "Explore our portfolio of production deployments and successful client projects across AI agents, high-speed SaaS dashboards, headless e-commerce, and bespoke web apps.",
  alternates: { canonical: "/portfolio" },
}

export default function PortfolioPage() {
  const projects = getPortfolioItems()

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Tested in Production • Live Client Deployments
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Our Work & Live Projects
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Real software solving real problems. Browse our live interactive web applications, autonomous AI agents, enterprise dashboards, and e-commerce stores.
          </p>
        </div>

        {/* Portfolio Grid with Interactive Filters & Live Links */}
        <PortfolioGrid projects={projects} />

        {/* CTA */}
        <div className="mt-24 text-center p-10 lg:p-14 rounded-3xl bg-muted/40 border border-border/60 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Have a project you want to build?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            From initial prototype to full-scale cloud deployment, we turn your product ideas into high-performance web software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Badge
                variant="outline"
                className="text-sm px-8 py-3.5 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold inline-flex items-center gap-2 rounded-full"
              >
                <span>Book a Free Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
