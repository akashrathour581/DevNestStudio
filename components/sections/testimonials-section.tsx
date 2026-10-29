import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: "1",
    name: "Alex Sterling",
    role: "Founder, SaaS Metrics HQ (via Upwork)",
    rating: 5,
    content: "DevNest Studio delivered our full-stack analytics platform well ahead of schedule. Akash's understanding of Next.js, FastAPI, and data architecture is top-tier. Highly recommended!",
    initials: "AS",
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "CTO, CloudOps Automation",
    rating: 5,
    content: "We hired DevNest Studio to build an autonomous web scraper and LangChain document AI agent. Zero headaches, crystal clear communication, and incredible execution.",
    initials: "MV",
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Director, EduSphere Tech",
    rating: 5,
    content: "DevNest Studio automated our entire multi-tier workflow. What used to take 25 manual hours every week is now handled automatically. Super reliable team on Upwork.",
    initials: "VS",
  },
  {
    id: "4",
    name: "Elena Rostova",
    role: "Head of Product, Omnistore Global",
    rating: 5,
    content: "The custom headless e-commerce store DevNest Studio built achieved a 99+ Lighthouse speed score. Our checkout conversions immediately rose by 38%. Worth every dollar.",
    initials: "ER",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <Card key={t.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
