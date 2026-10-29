import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

export default async function ClientProjectsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false })

  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    review: "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-gray-100 text-gray-800",
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">My Projects</h1>
      <p className="text-muted-foreground mb-8">Track all your projects and their progress.</p>

      <div className="space-y-4">
        {projects?.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={statusColors[project.status] || ""}>{project.status}</Badge>
                  <Badge variant="outline">{project.priority}</Badge>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {project.start_date && <span>Start: {formatDate(project.start_date)}</span>}
                {project.end_date && <span>End: {formatDate(project.end_date)}</span>}
                {project.budget && <span>Budget: ${project.budget.toLocaleString()}</span>}
              </div>
            </CardContent>
          </Card>
        ))}
        {(!projects || projects.length === 0) && (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground mb-4">No projects yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
