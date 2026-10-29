import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "E-commerce", href: "/services/ecommerce-development" },
    { label: "AI Agents", href: "/services/ai-agent-development" },
    { label: "Automation", href: "/services/automation-solutions" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "API Development", href: "/services/api-backend-development" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "Free Consultation", href: "/free-consultation" },
    { label: "Cost Calculator", href: "/cost-calculator" },
    { label: "Post Requirement", href: "/post-requirement" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-sky-400/40 shadow-sm shadow-sky-500/30">
                <img
                  src="/images/logo.png"
                  alt="DevNest Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight">
                  DevNest<span className="text-sky-500">Studio</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-sky-400">
                  Build • Code • Deploy
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-4 leading-relaxed">
              Full Stack Web, Mobile, Custom AI Agents, and Intelligent Automation for modern businesses and ambitious startups. Verified Agency on Upwork.
            </p>
            <div className="space-y-2 mb-6">
              <a
                href="https://wa.me/918580730520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                <span>+91 85807 30520 (WhatsApp / Call)</span>
              </a>
              <a
                href="mailto:clashertitan839@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                <span>clashertitan839@gmail.com</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://www.upwork.com/agencies/2104202313777019716/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full badge-upwork hover:opacity-90 transition-opacity"
              >
                <span>⭐ Upwork Agency Profile</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-background border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevNest Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
