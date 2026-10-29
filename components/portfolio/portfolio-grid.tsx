"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Search, CheckCircle } from "lucide-react"
import { ExtendedPortfolioItem } from "@/lib/data/portfolio"

interface Props {
  projects: ExtendedPortfolioItem[]
}

const categories = [
  "All",
  "AI Agent",
  "E-Commerce",
  "Dashboard",
  "Web App",
  "Automation",
  "SaaS",
]

export default function PortfolioGrid({ projects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase())

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tech or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-muted/20 rounded-2xl border border-dashed border-border">
          <p className="text-muted-foreground mb-4">No projects found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("All")
              setSearchQuery("")
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-border/70 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image_urls[0] || "/images/placeholder.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="backdrop-blur-md bg-background/85 shadow-sm">
                      {project.category}
                    </Badge>
                    {project.live_url && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-semibold backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live App
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <Link href={`/portfolio/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                    {project.short_description}
                  </p>

                  {/* Results highlight if present */}
                  {project.results && (
                    <div className="mb-4 p-2.5 rounded-lg bg-primary/5 border border-primary/10 text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.results}</span>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-muted font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </div>

              {/* Card Footer with CTAs */}
              <div className="p-6 pt-0 border-t border-border/40 mt-auto flex items-center justify-between gap-2 pt-4">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
                >
                  Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <span>Launch Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
