import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default async function ClientDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false })

  const { data: invoices } = await supabase
    .from("invoices")
    .select("*")
    .eq("client_id", user?.id)

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("sender_id", user?.id)
    .eq("read", false)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted-foreground mb-8">Welcome back! Here is an overview of your account.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold">{projects?.length || 0}</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold">{messages?.length || 0}</div>
            <div className="text-sm text-muted-foreground">Unread Messages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-3xl font-bold">
              ${invoices?.filter((i) => i.status === "sent").reduce((sum, i) => sum + i.amount, 0).toLocaleString() || 0}
            </div>
            <div className="text-sm text-muted-foreground">Pending Invoices</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Your Projects</h2>
        <Link href="/dashboard/projects">
          <Button variant="ghost" size="sm" className="gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {projects?.slice(0, 3).map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium uppercase">
                  {project.status}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
            </CardContent>
          </Card>
        ))}
        {(!projects || projects.length === 0) && (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground mb-4">No projects yet.</p>
            <Link href="/free-consultation">
              <Button>Start a Project</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
