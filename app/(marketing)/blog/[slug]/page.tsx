import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static-client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const supabase = createStaticClient()
  const { data } = await supabase.from("blog_posts").select("slug").eq("published", true)
  return data?.map((d) => ({ slug: d.slug })) || []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await supabase.from("blog_posts").select("title, excerpt, meta_title, meta_description").eq("slug", slug).single()
  if (!data) return { title: "Not Found" }
  return {
    title: data.meta_title || data.title,
    description: data.meta_description || data.excerpt,
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from("blog_posts").select("*, categories(name, slug)").eq("slug", slug).single()
  if (!post) notFound()

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        <Badge variant="secondary" className="mb-4">
          {(post.categories as any)?.name || "Article"}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">
          {post.published_at ? formatDate(post.published_at) : "Draft"}
        </p>

        {post.cover_image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image src={post.cover_image} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  )
}
