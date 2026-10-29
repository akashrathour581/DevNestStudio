import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react"
import { getFeaturedPortfolioItems } from "@/lib/data/portfolio"

export default function PortfolioPreviewSection() {
  const featuredProjects = getFeaturedPortfolioItems()

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Production Case Studies & Live Deployments
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Featured Client Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our live production deployments — from autonomous AI systems to ultra-fast e-commerce.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="rounded-full gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.slice(0, 4).map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image_urls[0] || "/images/placeholder.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category & Status badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="secondary" className="shadow-sm backdrop-blur-md bg-background/80">
                      {project.category}
                    </Badge>
                    {project.live_url && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-medium backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live in Production
                      </span>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <Link href={`/portfolio/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {project.short_description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/40 mt-auto pt-4">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
