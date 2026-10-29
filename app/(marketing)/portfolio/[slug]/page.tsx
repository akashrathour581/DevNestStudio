import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static-client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import {
  getPortfolioItems,
  getPortfolioItemBySlug,
  ExtendedPortfolioItem,
} from "@/lib/data/portfolio"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const staticItems = getPortfolioItems()
  const staticSlugs = staticItems.map((item) => ({ slug: item.slug }))

  try {
    const supabase = createStaticClient()
    const { data } = await supabase.from("portfolio_items").select("slug")
    if (data && data.length > 0) {
      const dbSlugs = data.map((d) => ({ slug: d.slug }))
      const allSlugs = Array.from(
        new Set([...staticSlugs.map((s) => s.slug), ...dbSlugs.map((s) => s.slug)])
      )
      return allSlugs.map((slug) => ({ slug }))
    }
  } catch {
    // If Supabase is unreachable at build time, fall back safely to static list
  }

  return staticSlugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  let project: ExtendedPortfolioItem | undefined

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("portfolio_items")
      .select("title, description")
      .eq("slug", slug)
      .single()
    if (data) {
      project = data as ExtendedPortfolioItem
    }
  } catch {
    // Fall back to local data
  }

  if (!project) {
    project = getPortfolioItemBySlug(slug)
  }

  if (!project) return { title: "Project Not Found | DevNest Studio" }

  return {
    title: `${project.title} | Portfolio Case Study`,
    description: project.short_description || project.description,
    alternates: { canonical: `/portfolio/${slug}` },
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  let project: ExtendedPortfolioItem | undefined

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("portfolio_items")
      .select("*")
      .eq("slug", slug)
      .single()
    if (data) {
      project = data as ExtendedPortfolioItem
    }
  } catch {
    // Fall back to local data
  }

  if (!project) {
    project = getPortfolioItemBySlug(slug)
  }

  if (!project) notFound()

  // Related projects
  const allProjects = getPortfolioItems()
  const relatedProjects = allProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  const imageSrc =
    project.image_urls && project.image_urls.length > 0
      ? project.image_urls[0]
      : "/images/placeholder.jpg"

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Button>
          </Link>

          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Deployment Active
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                Featured Case Study
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {project.short_description || project.description}
          </p>
        </div>

        {/* Live CTA Action Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-12 p-4 rounded-2xl bg-muted/40 border border-border/60">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" className="gap-2 rounded-full px-6 shadow-md">
                <ExternalLink className="w-4 h-4" />
                Launch Live Application
              </Button>
            </a>
          )}

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" variant="outline" className="gap-2 rounded-full">
                <Github className="w-4 h-4" />
                View Repository
              </Button>
            </a>
          )}

          <Link href="/free-consultation" className="inline-flex">
            <Button size="lg" variant="secondary" className="gap-2 rounded-full">
              Build Something Similar
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Project Screenshot Showcase */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border/80 shadow-2xl bg-muted">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Key Metrics / Highlights if available */}
        {project.key_metrics && project.key_metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {project.key_metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 mb-2 text-primary">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
                <div className="text-3xl font-extrabold text-foreground">{metric.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Overview & Client Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Key Capabilities & Features
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/50 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Specs */}
          <div className="space-y-6">
            <Card className="border border-border/60 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Client / Partner
                  </h4>
                  <p className="font-semibold text-foreground">{project.client_name}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    Category
                  </h4>
                  <p className="font-semibold text-foreground">{project.category}</p>
                </div>

                {project.results && (
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Business Impact
                    </h4>
                    <p className="text-sm text-muted-foreground leading-snug">{project.results}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.live_url && (
                  <div className="pt-2">
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block"
                    >
                      <Button className="w-full gap-2 rounded-xl text-xs font-semibold">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open Live Application
                      </Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">More Projects</h3>
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link key={rel.id} href={`/portfolio/${rel.slug}`}>
                  <Card className="group overflow-hidden border border-border/60 hover:border-primary/40 transition-all">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={rel.image_urls[0] || "/images/placeholder.jpg"}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {rel.category}
                      </Badge>
                      <h4 className="font-bold group-hover:text-primary transition-colors text-base line-clamp-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {rel.short_description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
