import { Metadata } from "next"
import { ConsultationForm } from "@/components/forms/consultation-form"

export const metadata: Metadata = {
  title: "Free Consultation",
  description: "Book a free consultation with our experts. We will analyze your needs and provide a tailored proposal.",
  alternates: { canonical: "/free-consultation" },
}

export default function FreeConsultationPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Free Consultation</h1>
          <p className="text-muted-foreground text-lg">Tell us about your project and we will get back to you within 24 hours.</p>
        </div>
        <ConsultationForm />
      </div>
    </div>
  )
}
