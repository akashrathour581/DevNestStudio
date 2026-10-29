import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

export default async function ClientDocumentsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: files } = await supabase
    .from("project_files")
    .select("*")
    .eq("uploaded_by", user?.id)
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Documents</h1>
      <p className="text-muted-foreground mb-8">Access your project files and documents.</p>

      <div className="space-y-4">
        {files?.map((file) => (
          <Card key={file.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{file.name}</h3>
                    <p className="text-sm text-muted-foreground">{formatDate(file.created_at)} | {(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
        {(!files || files.length === 0) && (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground">No documents uploaded yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
