import { Metadata } from "next"
import { RequirementForm } from "@/components/forms/requirement-form"

export const metadata: Metadata = {
  title: "Post Your Requirement",
  description: "Submit your project requirements and receive proposals from our team.",
  alternates: { canonical: "/post-requirement" },
}

export default function PostRequirementPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Post Your Requirement</h1>
          <p className="text-muted-foreground text-lg">Describe your project and we will match you with the right solution.</p>
        </div>
        <RequirementForm />
      </div>
    </div>
  )
}
