import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, Users, Globe, Award, Code2, Heart, ArrowRight, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DevNest Studio — our mission, Build • Code • Deploy philosophy, and Upwork top-rated team.",
  alternates: { canonical: "/about" },
}

const team = [
  {
    name: "Akash A.",
    role: "Founder & Lead Architect",
    bio: "Full Stack Engineer & AI Specialist based in Chandigarh, India. Specializes in Next.js 15, FastAPI, LangChain, and high-performance system architecture. Upwork Business Manager.",
    image: "/images/team-akash.jpg",
    skills: ["Next.js", "Python FastAPI", "LangChain / RAG", "PostgreSQL", "React Native"],
  },
  {
    name: "Priya V.",
    role: "Lead UI/UX & Product Designer",
    bio: "Passionate about crafting intuitive, high-converting interfaces, design systems, and fluid micro-interactions for modern SaaS and mobile apps.",
    image: "/images/team-priya.jpg",
    skills: ["Figma", "Tailwind CSS", "Design Systems", "Prototyping"],
  },
  {
    name: "Rahul K.",
    role: "Mobile & Automation Engineer",
    bio: "Specializes in React Native cross-platform apps, web scraping with Playwright, and automated ETL pipelines with Redis and Docker.",
    image: "/images/team-rahul.jpg",
    skills: ["React Native", "Playwright", "Docker", "REST APIs"],
  },
]

export default function AboutPage() {
  return (
    <div className="py-20 lg:py-32 bg-grid-cyber">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Build • Code • Deploy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">DevNest Studio</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are a high-impact engineering studio operating on Upwork and globally. We turn ambitious startup concepts and complex business workflows into robust, scalable software.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Rocket, label: "Projects Delivered", value: "50+" },
            { icon: Users, label: "Happy Clients", value: "40+" },
            { icon: Globe, label: "Countries Served", value: "8+" },
            { icon: Award, label: "Years Experience", value: "4+" },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="max-w-3xl mx-auto mb-20 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower startups and small businesses with world-class digital products — without enterprise prices. 
              We believe every business deserves software that works as hard as they do. We focus on shipping fast, 
              communicating clearly, and building things that last.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Quality First", desc: "We write clean, well-tested code. No shortcuts that create debt." },
                { icon: Heart, title: "Transparency", desc: "Clear timelines, honest scope, and no surprise invoices." },
                { icon: Rocket, title: "Ship Fast", desc: "MVPs in weeks, not months. Iterate based on real feedback." },
                { icon: Code2, title: "Your Partner", desc: "We treat your project like our own product." },
              ].map((v) => (
                <div key={v.title} className="p-4 rounded-xl bg-muted/50">
                  <div className="flex items-center gap-3 mb-2">
                    <v.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">{v.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-10 border border-primary/10">
          <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Ready to build something great?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Book a free 30-minute call with us. No pressure, just a conversation about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation">
              <Button size="lg" className="rounded-full gap-2 px-8">
                Book Free Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                See Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
