import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-sky-950 via-slate-950 to-blue-950 text-white border-y border-sky-500/20">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <span>Let's Build • Code • Deploy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto">
          Ready to Turn Your Vision Into a Scalable Digital Product?
        </h2>
        <p className="text-sky-100/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Get a complimentary architecture consultation, transparent milestone roadmap, and fixed or hourly pricing ($15/hr) backed by Upwork escrow protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/free-consultation" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full gap-2 px-8 h-12 text-base font-semibold bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:from-sky-300 hover:to-blue-500 border-0 shadow-lg shadow-sky-500/30"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a
            href="https://www.upwork.com/agencies/2104202313777019716/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full gap-2 px-8 h-12 text-base font-semibold border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/20"
            >
              ⭐ Hire Us on Upwork
            </Button>
          </a>
          <a
            href="https://wa.me/918580730520"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full gap-2 px-7 h-12 text-base font-semibold border-white/20 text-white hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
