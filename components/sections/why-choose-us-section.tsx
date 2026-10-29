"use client"

import { motion } from "framer-motion"
import { Rocket, Shield, Clock, Users, Code2, Headphones } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We use agile methodologies and modern tools to deliver projects 30% faster than industry average without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Your data and code are protected with enterprise-grade security, encryption, and compliance standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to ensure your systems run smoothly.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with senior developers, designers, and architects with 10+ years of combined experience.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "We write maintainable, well-documented code following industry best practices and standards.",
  },
  {
    icon: Headphones,
    title: "Dedicated PM",
    description:
      "Every project gets a dedicated project manager for clear communication and seamless delivery.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg">
            We do not just write code — we build partnerships that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
