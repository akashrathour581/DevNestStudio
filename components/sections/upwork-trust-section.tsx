"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Star, Clock, Lock, CheckCircle2, ArrowUpRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UpworkTrustSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-3xl p-8 lg:p-12 border border-sky-500/20 bg-card/60 backdrop-blur-xl relative overflow-hidden shadow-xl">
          {/* Cyan glow effect */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Upwork Profile Highlights */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-upwork text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Officially Verified Upwork Agency</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Work With <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">DevNest Studio</span> Directly on Upwork
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Enjoy complete peace of mind with Upwork Payment Protection, verified agency contracts, and milestone-based deliveries. Hire us hourly at <strong>$15/hr</strong> or under fixed-price contracts.
              </p>

              {/* Guarantees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    icon: Lock,
                    title: "Escrow Payment Protection",
                    desc: "Funds stay in escrow until you test and approve each milestone.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "100% IP & Code Ownership",
                    desc: "You retain full rights to all GitHub code, designs, and assets.",
                  },
                  {
                    icon: Clock,
                    title: "Rapid Sprint Delivery",
                    desc: "Weekly staging demos, continuous deployment, and prompt updates.",
                  },
                  {
                    icon: Star,
                    title: "100% Job Success Rate",
                    desc: "Consistent 5-star ratings from global founders and teams.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border/50">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Upwork Profile Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-slate-950 text-white border border-sky-400/30 shadow-2xl relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400 p-0.5 bg-black shrink-0">
                    <img
                      src="/images/logo.png"
                      alt="DevNest Studio"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">DevNest Studio</h3>
                    <p className="text-xs text-sky-400 font-medium">Build • Code • Deploy</p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Upwork Agency Member</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Business Manager:</span>
                    <span className="font-semibold text-white">Akash A. (Chandigarh, IN)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Agency Rate:</span>
                    <span className="font-semibold text-emerald-400">$15.00 / hr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Primary Focus:</span>
                    <span className="font-semibold text-white">Full Stack & AI Agents</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Job Success:</span>
                    <span className="font-semibold text-amber-400">★★★★★ 100%</span>
                  </div>
                </div>

                <div className="mt-5 space-y-2.5">
                  <a
                    href="https://www.upwork.com/agencies/2104202313777019716/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold gap-2 shadow-lg shadow-emerald-500/20">
                      <span>View Profile on Upwork</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </a>
                  <p className="text-[11px] text-center text-slate-400">
                    Direct hiring & escrow available through Upwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
