import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "DevNest Studio privacy policy — how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: October 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly, such as your name, email address, and project details when you fill out our contact form, book a consultation, or post a requirement. We also collect basic analytics data (page views, referral sources) to improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information is used to respond to inquiries, deliver project updates, send invoices, and improve our services. We do not sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Storage & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored securely on Supabase (PostgreSQL) with encryption at rest and in transit. We follow industry-standard security practices and regularly review our data handling procedures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use minimal cookies necessary for authentication and session management. No tracking cookies or third-party advertising cookies are used on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at clashertitan839@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any privacy-related questions, email us at <a href="mailto:clashertitan839@gmail.com" className="text-primary hover:underline">clashertitan839@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
