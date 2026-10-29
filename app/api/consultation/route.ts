import { NextResponse } from "next/server"
import { consultationSchema } from "@/lib/validations/contact"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = consultationSchema.parse(body)

    const supabase = await createClient()
    const { error } = await supabase.from("leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: "Free Consultation Request",
      message: `Business: ${data.businessType}
Budget: ${data.budget}
Preferred Date: ${data.preferredDate || "Not specified"}

${data.projectDetails}`,
      budget: data.budget,
      source: "consultation_form",
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Consultation form error:", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}
