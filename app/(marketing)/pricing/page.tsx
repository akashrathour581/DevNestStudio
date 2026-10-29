import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for all our software development services. No hidden fees, no surprises.",
  alternates: { canonical: "/pricing" },
}

const plans = [
  {
    name: "Starter",
    price: 499,
    description: "Perfect for small businesses and personal projects",
    color: "border-border",
    badge: null,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "2 rounds of revisions",
      "1 month support",
      "Deployment included",
    ],
    cta: "Get Started",
    href: "/free-consultation",
  },
  {
    name: "Professional",
    price: 1299,
    description: "Ideal for growing businesses that need more features",
    color: "border-primary",
    badge: "Most Popular",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Advanced SEO + sitemap",
      "CMS integration",
      "Payment gateway",
      "Admin dashboard",
      "5 rounds of revisions",
      "3 months support",
      "Performance optimization",
    ],
    cta: "Start Project",
    href: "/free-consultation",
  },
  {
    name: "Enterprise",
    price: 3499,
    description: "Full-scale solution for large teams and complex needs",
    color: "border-border",
    badge: null,
    features: [
      "Unlimited pages",
      "Custom architecture",
      "AI/Automation integration",
      "Multi-role dashboard",
      "API development",
      "Mobile app (optional)",
      "Unlimited revisions",
      "6 months priority support",
      "Dedicated project manager",
      "Source code ownership",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]

const addOns = [
  { name: "AI Chatbot Integration", price: 299 },
  { name: "Extra Support Month", price: 99 },
  { name: "Mobile App (React Native)", price: 999 },
  { name: "SEO Content Package", price: 199 },
  { name: "Email Marketing Setup", price: 149 },
  { name: "Analytics Dashboard", price: 249 },
]

export default function PricingPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <Zap className="w-4 h-4 text-primary" />
            Transparent Pricing — No Hidden Fees
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Simple, Honest Pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your project. All plans include code ownership and free hosting setup.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-2 ${plan.color} ${
                plan.badge ? "shadow-2xl scale-[1.02]" : ""
              } transition-all hover:shadow-xl`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price.toLocaleString()}</span>
                  <span className="text-muted-foreground text-sm ml-1">/ project</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}>
                  <Button
                    className="w-full rounded-full gap-2"
                    variant={plan.badge ? "default" : "outline"}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Optional Add-ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 rounded-xl border bg-muted/30 hover:bg-muted/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{addon.name}</span>
                </div>
                <span className="text-sm font-bold">+${addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer payment in installments?",
                a: "Yes! We typically work with 50% upfront and 50% on delivery. For larger projects, we can split into 3 milestones.",
              },
              {
                q: "What's included in 'support'?",
                a: "Bug fixes, minor content updates, and technical help over email/WhatsApp. Major feature additions are billed separately.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely. You can start with Starter and upgrade to Professional as your business grows. We handle the migration seamlessly.",
              },
              {
                q: "Do I own the source code?",
                a: "100%. Once the project is delivered and payment is complete, you own the full source code with no restrictions.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b pb-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <h2 className="text-2xl font-bold mb-3">Need a custom quote?</h2>
          <p className="text-muted-foreground mb-6">Every project is unique. Let's talk and build the right solution for your budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Button size="lg" className="rounded-full gap-2 px-8">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/cost-calculator">
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8">
                Use Cost Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
