import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

export default async function AdminBlogPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()
  if (profile?.role !== "admin") redirect("/dashboard")

  const { data: posts } = await supabase.from("blog_posts").select("*, categories(name)").order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Management</h1>
      <div className="space-y-4">
        {posts?.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{(post.categories as any)?.name} | {formatDate(post.created_at)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {post.published ? <Badge className="bg-green-100 text-green-800">Published</Badge> : <Badge variant="outline">Draft</Badge>}
                  {post.featured && <Badge variant="secondary">Featured</Badge>}
                  <span className="text-xs text-muted-foreground">{post.views} views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {(!posts || posts.length === 0) && (
          <p className="text-muted-foreground text-center py-8">No blog posts yet.</p>
        )}
      </div>
    </div>
  )
}
