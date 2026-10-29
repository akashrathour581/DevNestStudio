import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default async function AdminServicesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single()
  if (profile?.role !== "admin") redirect("/dashboard")

  const { data: services } = await supabase.from("services").select("*").order("order", { ascending: true })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Services</h1>
      <div className="space-y-4">
        {services?.map((service) => (
          <Card key={service.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.short_description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.technologies.slice(0, 5).map((tech: string) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-muted">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold">${service.pricing_start.toLocaleString()}</div>
                  {service.active ? <Badge className="bg-green-100 text-green-800">Active</Badge> : <Badge variant="outline">Inactive</Badge>}
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" size="sm"><ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {(!services || services.length === 0) && (
          <p className="text-muted-foreground text-center py-8">No services found.</p>
        )}
      </div>
    </div>
  )
}
