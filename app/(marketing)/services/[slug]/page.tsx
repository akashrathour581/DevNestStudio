import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { createStaticClient } from "@/lib/supabase/static-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Check, CheckCircle2, MessageCircle } from "lucide-react"
import { StructuredData } from "@/components/seo/structured-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const supabase = createStaticClient()
  const { data: services } = await supabase.from("services").select("slug")
  return services?.map((s) => ({ slug: s.slug })) || []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: service } = await supabase
    .from("services")
    .select("title, description")
    .eq("slug", slug)
    .single()

  if (!service) return { title: "Service Not Found" }

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!service) notFound()

  const serviceProcessSteps = (service.process as { step: number; title: string; description: string }[]) || []
  const faqs = (service.faqs as { question: string; answer: string }[]) || []

  return (
    <>
      <StructuredData
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          provider: { "@type": "Organization", name: "DevNest Studio" },
          offers: {
            "@type": "Offer",
            price: service.pricing_start,
            priceCurrency: "USD",
          },
        }}
      />
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Development Service
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {service.features.map((feature: string) => (
              <Card key={feature} className="border-0 shadow-sm">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit: string) => (
                <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-background">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {serviceProcessSteps.map((step) => (
                <Card key={step.step} className="border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech: string) => (
                <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 mb-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="text-4xl font-bold mb-2">
              ${service.pricing_start.toLocaleString()}
              <span className="text-lg font-normal text-primary-foreground/70">+</span>
            </div>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Starting price. Final quote depends on project scope, complexity, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-consultation">
                <Button size="lg" variant="secondary" className="rounded-full gap-2">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/cost-calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Cost Calculator
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let us discuss your {service.title.toLowerCase()} project and create a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-consultation">
                <Button size="lg" className="rounded-full gap-2">
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || "918580730520"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
