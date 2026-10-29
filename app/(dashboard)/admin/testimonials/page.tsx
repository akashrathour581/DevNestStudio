import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default async function AdminTestimonialsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()
  if (profile?.role !== "admin") redirect("/dashboard")

  const { data: testimonials } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
      <div className="space-y-4">
        {testimonials?.map((t) => (
          <Card key={t.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role} at {t.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {t.approved ? <Badge className="bg-green-100 text-green-800">Approved</Badge> : <Badge variant="outline">Pending</Badge>}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">&ldquo;{t.content}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
        {(!testimonials || testimonials.length === 0) && (
          <p className="text-muted-foreground text-center py-8">No testimonials yet.</p>
        )}
      </div>
    </div>
  )
}
