import { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DevNest Studio — Chandigarh, India. Direct email, WhatsApp, or Upwork contract.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <div className="py-20 lg:py-32 bg-grid-cyber">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Let's Build Together</h1>
          <p className="text-muted-foreground text-lg">Have a project or technical requirement? Talk directly to our architects.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-4">
            <Card className="glow-card border-border/80">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Email</div>
                  <a href="mailto:clashertitan839@gmail.com" className="text-sm text-muted-foreground hover:text-sky-500 transition-colors">
                    clashertitan839@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card border-border/80">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">WhatsApp / Direct</div>
                  <a href="https://wa.me/918580730520" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors">
                    +91 85807 30520
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card border-border/80">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Headquarters</div>
                  <div className="text-sm text-muted-foreground">Chandigarh, India</div>
                </div>
              </CardContent>
            </Card>

            <a
              href="https://www.upwork.com/agencies/2104202313777019716/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-4 rounded-xl badge-upwork hover:opacity-90 transition-opacity flex items-center justify-between text-xs font-semibold">
                <span>⭐ Hire DevNest on Upwork</span>
                <span>$15/hr →</span>
              </div>
            </a>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
