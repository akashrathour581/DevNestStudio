import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, ExternalLink, Sparkles } from "lucide-react"
import { getCaseStudies } from "@/lib/data/case-studies"

export const metadata: Metadata = {
  title: "Case Studies | DevNest Studio",
  description:
    "In-depth engineering and product case studies. See how DevNest Studio builds custom AI systems, headless e-commerce, and high-performance web applications that deliver measurable ROI.",
  alternates: { canonical: "/case-studies" },
}

export default function CaseStudiesPage() {
  const studies = getCaseStudies()

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Real Business Impact • Detailed Breakdowns
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Engineering Case Studies
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
            Real problems. Modern architectures. Measurable outcomes. Dive deep into how our software solutions helped businesses scale and automate operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study) => (
            <Card
              key={study.id}
              className="group overflow-hidden border border-border/70 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
                {study.image_urls && study.image_urls[0] && (
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={study.image_urls[0]}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <Badge variant="secondary" className="backdrop-blur-md bg-background/80">
                        {study.industry}
                      </Badge>
                      {study.live_url && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live Project
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <CardHeader className="p-6 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Client: {study.client_name}
                  </p>
                  <Link href={`/case-studies/${study.slug}`}>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">
                      {study.title}
                    </h3>
                  </Link>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                    {study.problem}
                  </p>

                  {/* Result metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                      >
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="font-bold">{m.value}</span> {m.label}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Footer Links */}
              <div className="p-6 pt-0 border-t border-border/40 mt-auto flex items-center justify-between gap-2 pt-4">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {study.live_url && (
                  <a
                    href={study.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Visit Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-10 rounded-3xl bg-primary/5 border border-primary/10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to achieve similar results?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Book a discovery call with our architecture team to discuss your goals, tech stack, and timeline.
          </p>
          <Link href="/free-consultation">
            <Badge
              variant="outline"
              className="text-sm px-8 py-3.5 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold inline-flex items-center gap-2 rounded-full"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  )
}
