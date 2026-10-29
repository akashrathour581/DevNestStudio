import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "DevNest Studio terms of service — rules and guidelines for using our services.",
}

export default function TermsPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: October 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing our website or engaging our services, you agree to these Terms of Service. If you disagree with any part, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevNest Studio provides software development services including web development, mobile apps, AI integrations, and automation. The scope of each project is defined in a separate Statement of Work (SOW) or Upwork contract agreed upon before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Standard payments are milestone-based or hourly ($15/hr) through Upwork Escrow or direct agreement. Milestones are funded upfront and released upon client acceptance of deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon full payment, you receive 100% complete ownership of all deliverables, repositories, and source code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Revisions & Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              All projects include revision rounds and ongoing bug support during the warranty period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              DevNest Studio is not liable for indirect, incidental, or consequential damages arising from the use of our deliverables. Our maximum liability is limited to the total amount paid for the specific project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, contact us at <a href="mailto:clashertitan839@gmail.com" className="text-primary hover:underline">clashertitan839@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
