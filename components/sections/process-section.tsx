"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business, goals, and target audience to create a strategic roadmap for success.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "Our designers craft beautiful, intuitive interfaces that delight users and drive conversions.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "We build with clean, scalable code using modern frameworks and best practices.",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous QA across devices, browsers, and real-world scenarios ensures flawless performance.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy with CI/CD, monitor performance, and provide ongoing support and optimization.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven 5-step process that ensures every project is delivered on time, on budget, and above expectations.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-4 shadow-sm">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 mb-2">
                    STEP {step.number}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
