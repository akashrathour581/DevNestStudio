import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { getPortfolioItems } from "@/lib/data/portfolio"
import { getCaseStudies } from "@/lib/data/case-studies"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://devneststudio.com"
  
  let services: { slug: string; updated_at?: string }[] = []
  let posts: { slug: string; updated_at?: string }[] = []
  let portfolioSlugs: string[] = getPortfolioItems().map((p) => p.slug)
  let caseStudySlugs: string[] = getCaseStudies().map((c) => c.slug)

  try {
    const supabase = await createClient()
    const { data: dbServices } = await supabase.from("services").select("slug, updated_at")
    if (dbServices) services = dbServices

    const { data: dbPosts } = await supabase.from("blog_posts").select("slug, updated_at").eq("published", true)
    if (dbPosts) posts = dbPosts

    const { data: dbPortfolio } = await supabase.from("portfolio_items").select("slug")
    if (dbPortfolio) {
      portfolioSlugs = Array.from(new Set([...portfolioSlugs, ...dbPortfolio.map((p) => p.slug)]))
    }

    const { data: dbStudies } = await supabase.from("case_studies").select("slug")
    if (dbStudies) {
      caseStudySlugs = Array.from(new Set([...caseStudySlugs, ...dbStudies.map((s) => s.slug)]))
    }
  } catch {
    // Graceful fallback to static definitions
  }

  const staticRoutes = [
    "", "/services", "/portfolio", "/case-studies", "/pricing", "/blog",
    "/contact", "/free-consultation", "/cost-calculator", "/post-requirement", "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(s.updated_at || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogRoutes = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updated_at || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const portfolioRoutes = portfolioSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...portfolioRoutes, ...caseStudyRoutes]
}
