import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static-client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, ExternalLink, ArrowRight, Sparkles } from "lucide-react"
import { getCaseStudies, getCaseStudyBySlug, ExtendedCaseStudy } from "@/lib/data/case-studies"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const staticStudies = getCaseStudies()
  const staticSlugs = staticStudies.map((s) => ({ slug: s.slug }))

  try {
    const supabase = createStaticClient()
    const { data } = await supabase.from("case_studies").select("slug")
    if (data && data.length > 0) {
      const dbSlugs = data.map((d) => ({ slug: d.slug }))
      const allSlugs = Array.from(
        new Set([...staticSlugs.map((s) => s.slug), ...dbSlugs.map((s) => s.slug)])
      )
      return allSlugs.map((slug) => ({ slug }))
    }
  } catch {
    // Fall back to static list
  }

  return staticSlugs
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  let study: ExtendedCaseStudy | undefined

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("case_studies")
      .select("title, outcome")
      .eq("slug", slug)
      .single()
    if (data) {
      study = data as ExtendedCaseStudy
    }
  } catch {
    // Fall back
  }

  if (!study) {
    study = getCaseStudyBySlug(slug)
  }

  if (!study) return { title: "Case Study Not Found | DevNest Studio" }

  return {
    title: `${study.title} | Case Study`,
    description: study.outcome || study.problem,
    alternates: { canonical: `/case-studies/${slug}` },
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  let study: ExtendedCaseStudy | undefined

  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("case_studies")
      .select("*")
      .eq("slug", slug)
      .single()
    if (data) {
      study = data as ExtendedCaseStudy
    }
  } catch {
    // Fall back
  }

  if (!study) {
    study = getCaseStudyBySlug(slug)
  }

  if (!study) notFound()

  const metrics = (study.metrics as { label: string; value: string }[]) || []
  const imageSrc =
    study.image_urls && study.image_urls.length > 0
      ? study.image_urls[0]
      : "/images/placeholder.jpg"

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/case-studies">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>

          {study.live_url && (
            <a
              href={study.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Launch Live App
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Title & Metadata */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="px-3 py-1 text-sm">{study.industry}</Badge>
            {study.timeline && (
              <span className="text-xs text-muted-foreground font-medium">
                Timeline: {study.timeline}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            {study.title}
          </h1>

          <p className="text-lg text-muted-foreground">
            Client: <span className="font-semibold text-foreground">{study.client_name}</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-border/70 shadow-xl bg-muted">
          <Image
            src={imageSrc}
            alt={study.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Metrics Bar */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-foreground mb-1">{metric.value}</div>
                <div className="text-xs font-medium text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* The Problem & Our Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/15">
            <h2 className="text-xl font-bold text-destructive mb-3">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {study.problem}
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/15">
            <h2 className="text-xl font-bold text-primary mb-3">Our Engineering Solution</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-12 p-6 rounded-2xl bg-muted/30 border border-border/50">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Core Technologies & Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Key Outcome & Delivery
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            {study.outcome}
          </p>
        </div>

        {/* Business Impact */}
        {study.business_impact && (
          <div className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold">Long-Term Business Impact</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {study.business_impact}
            </p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Want to build something similar?</h3>
            <p className="text-sm text-muted-foreground">
              Let us analyze your requirements and propose the optimal technical architecture.
            </p>
          </div>
          <div className="flex gap-3">
            {study.live_url && (
              <a href={study.live_url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </Button>
              </a>
            )}
            <Link href="/free-consultation">
              <Button className="rounded-full gap-2">
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
