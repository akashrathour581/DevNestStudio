import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FolderKanban, MessageSquare, FileText, FileArchive, LogOut } from "lucide-react"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const { data: profile } = await supabase.from("users").select("*").eq("id", user.id).single()

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-muted/30 hidden lg:flex flex-col p-6">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-sky-400/50 shrink-0">
              <img src="/images/logo.png" alt="DevNest Studio" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              DevNest<span className="text-sky-500">Studio</span>
            </span>
          </Link>
        </div>
        <nav className="space-y-1 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
            <FolderKanban className="w-4 h-4" /> Projects
          </Link>
          <Link href="/dashboard/messages" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
            <MessageSquare className="w-4 h-4" /> Messages
          </Link>
          <Link href="/dashboard/invoices" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
            <FileText className="w-4 h-4" /> Invoices
          </Link>
          <Link href="/dashboard/documents" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm">
            <FileArchive className="w-4 h-4" /> Documents
          </Link>
        </nav>
        <div className="pt-4 border-t">
          <form action="/api/auth/signout" method="post">
            <Button variant="ghost" className="w-full justify-start gap-3 text-sm" type="submit">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:p-8">{children}</main>
    </div>
  )
}
