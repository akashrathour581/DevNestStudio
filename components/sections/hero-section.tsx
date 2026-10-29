"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Terminal, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-grid-cyber">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/15 dark:bg-sky-500/20 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-400/10 dark:bg-cyan-400/15 rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <a
              href="https://www.upwork.com/agencies/2104202313777019716/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified Upwork Agency • 100% Job Success</span>
            </a>

            <div className="inline-flex items-center gap-1.5 rounded-full border bg-background/80 backdrop-blur-md px-3.5 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground shadow-xs">
              <span className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </span>
              <span>5.0 Star Rated Partner</span>
            </div>
          </motion.div>

          {/* DevNest Studio Badge / Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-sky-400/80 bg-slate-950 p-1 shadow-2xl">
                <img
                  src="/images/logo.png"
                  alt="DevNest Studio"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="text-xs sm:text-sm uppercase tracking-widest font-bold text-sky-500 mb-3">
              Build • Code • Deploy
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Full Stack Web, Mobile,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400">
                AI & Automation
              </span>{" "}
              Engineered to Scale.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            DevNest Studio partners with startups and businesses to build high-performance Next.js web applications,
            custom AI agents with RAG, cross-platform mobile apps, and robust automated data pipelines.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/free-consultation" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full gap-2 px-8 h-12 text-base font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Book Free Architecture Call</span>
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
                className="w-full sm:w-auto rounded-full gap-2 px-7 h-12 text-base font-semibold border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Hire Us on Upwork ($15/hr)</span>
              </Button>
            </a>

            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto rounded-full gap-2 px-6 h-12 text-base font-medium hover:bg-muted"
              >
                <span>Live Portfolio</span>
              </Button>
            </Link>
          </motion.div>

          {/* Key Value Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-sm"
          >
            {[
              {
                title: "Top 1% Engineering",
                desc: "Clean TypeScript & Python",
                icon: Terminal,
              },
              {
                title: "Autonomous AI Agents",
                desc: "LangChain, RAG & Vector DBs",
                icon: Sparkles,
              },
              {
                title: "Rapid Milestone Delivery",
                desc: "Production in weeks, not months",
                icon: Zap,
              },
              {
                title: "Upwork Guaranteed",
                desc: "100% Escrow & IP Protection",
                icon: CheckCircle2,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left p-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center mb-2">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-border/60"
          >
            {[
              { value: "100%", label: "Upwork Job Success" },
              { value: "$15/hr", label: "Starting Dev Rate" },
              { value: "50+", label: "Shipped Projects" },
              { value: "< 2 hrs", label: "First Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
