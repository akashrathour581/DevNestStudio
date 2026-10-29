import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate, formatCurrency } from "@/lib/utils"

export default async function ClientInvoicesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: invoices } = await supabase
    .from("invoices")
    .select("*")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false })

  const statusColors: Record<string, string> = {
    draft: "bg-gray-100 text-gray-800",
    sent: "bg-blue-100 text-blue-800",
    paid: "bg-green-100 text-green-800",
    overdue: "bg-red-100 text-red-800",
    cancelled: "bg-gray-100 text-gray-800",
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Invoices</h1>
      <p className="text-muted-foreground mb-8">View and manage your invoices.</p>

      <div className="space-y-4">
        {invoices?.map((invoice) => (
          <Card key={invoice.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold">Invoice #{invoice.id.slice(0, 8)}</h3>
                  <p className="text-sm text-muted-foreground">Created: {formatDate(invoice.created_at)}</p>
                  <p className="text-sm text-muted-foreground">Due: {formatDate(invoice.due_date)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl font-bold">{formatCurrency(invoice.amount)}</div>
                  <Badge className={statusColors[invoice.status] || ""}>{invoice.status}</Badge>
                </div>
              </div>
              {invoice.notes && <p className="text-sm text-muted-foreground mt-3">{invoice.notes}</p>}
            </CardContent>
          </Card>
        ))}
        {(!invoices || invoices.length === 0) && (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground">No invoices yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
