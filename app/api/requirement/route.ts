import { NextResponse } from "next/server"
import { requirementSchema } from "@/lib/validations/contact"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = requirementSchema.parse(body)

    const supabase = await createClient()
    const { error } = await supabase.from("requirements").insert({
      title: data.title,
      description: data.description,
      budget: data.budget,
      timeline: data.timeline,
      email: data.email,
      name: data.name,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Requirement form error:", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}
