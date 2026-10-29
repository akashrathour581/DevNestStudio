import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and trends in software development, AI, and digital transformation.",
  alternates: { canonical: "/blog" },
}

const posts = [
  {
    id: "1",
    slug: "nextjs-15-supabase-full-stack-guide",
    title: "Building Full-Stack Apps with Next.js 15 and Supabase",
    excerpt: "A complete walkthrough of building production-ready applications using Next.js 15 App Router, Supabase Auth, and PostgreSQL — from setup to deployment.",
    cover_image: "/images/blog-cover-1.jpg",
    category: "Tutorial",
    published_at: "2025-06-10",
    read_time: "8 min read",
  },
  {
    id: "2",
    slug: "ai-agents-for-small-business",
    title: "How AI Agents Are Transforming Small Business Operations",
    excerpt: "From automated customer support to intelligent lead follow-ups — discover how small businesses are using AI agents to work smarter and grow faster.",
    cover_image: "/images/blog-cover-2.jpg",
    category: "AI",
    published_at: "2025-05-28",
    read_time: "6 min read",
  },
  {
    id: "3",
    slug: "freelance-agency-pricing-guide-india",
    title: "Pricing Your Dev Agency Services in India: A Practical Guide",
    excerpt: "How to price web development projects for Indian clients without underselling your skills. Covers discovery, packaging, and upselling strategies.",
    cover_image: "/images/blog-cover-3.jpg",
    category: "Business",
    published_at: "2025-05-15",
    read_time: "5 min read",
  },
  {
    id: "4",
    slug: "django-rest-framework-best-practices",
    title: "Django REST Framework Best Practices for Production APIs",
    excerpt: "Serializers, viewsets, authentication, throttling — a battle-tested checklist for building DRF APIs that handle real production load.",
    cover_image: "/images/blog-cover-1.jpg",
    category: "Tutorial",
    published_at: "2025-04-30",
    read_time: "10 min read",
  },
  {
    id: "5",
    slug: "react-native-expo-2025",
    title: "React Native with Expo in 2025: Is It Worth It?",
    excerpt: "We've shipped 8 mobile apps with Expo. Here's our honest review — what works brilliantly, what frustrates us, and when to use bare React Native instead.",
    cover_image: "/images/blog-cover-2.jpg",
    category: "Mobile",
    published_at: "2025-04-10",
    read_time: "7 min read",
  },
  {
    id: "6",
    slug: "local-seo-for-businesses-ludhiana",
    title: "Local SEO for Punjab Businesses: Get Found on Google",
    excerpt: "A step-by-step local SEO guide tailored for businesses in Punjab and North India. Includes GMB setup, citation building, and content tips.",
    cover_image: "/images/blog-cover-3.jpg",
    category: "Marketing",
    published_at: "2025-03-22",
    read_time: "6 min read",
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Tutorials, insights, and business tips from our dev team.
          </p>
        </div>

        {/* Featured post */}
        <div className="mb-12">
          <Link href={`/blog/${posts[0].slug}`}>
            <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                  <Image
                    src={posts[0].cover_image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-3">{posts[0].category}</Badge>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{posts[0].excerpt}</p>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(posts[0].published_at)} · {posts[0].read_time}
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all h-full">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(post.published_at)} · {post.read_time}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
