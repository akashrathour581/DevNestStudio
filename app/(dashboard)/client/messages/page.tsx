import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default async function ClientMessagesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("sender_id", user?.id)
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Messages</h1>
      <p className="text-muted-foreground mb-8">Your communication with our team.</p>

      <div className="space-y-4">
        {messages?.map((msg) => (
          <Card key={msg.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-muted-foreground">{formatDate(msg.created_at)}</div>
                {!msg.read && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <p className="text-sm">{msg.content}</p>
            </CardContent>
          </Card>
        ))}
        {(!messages || messages.length === 0) && (
          <div className="text-center py-12 bg-muted/30 rounded-xl">
            <p className="text-muted-foreground">No messages yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
