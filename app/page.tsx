import { Suspense } from "react";
import { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import ProcessSection from "@/components/sections/process-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PortfolioPreviewSection from "@/components/sections/portfolio-preview-section";
import FAQSection from "@/components/sections/faq-section";
import CTASection from "@/components/sections/cta-section";
import UpworkTrustSection from "@/components/sections/upwork-trust-section";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "DevNest Studio | Build • Code • Deploy — Web, Mobile, AI & Automation Agency",
  description:
    "DevNest Studio is a top-rated software development agency. We build high-performance web applications, custom AI agents with RAG, mobile apps, and intelligent automation systems.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="Organization"
        data={{
          name: "DevNest Studio",
          url: "https://devneststudio.com",
          logo: "https://devneststudio.com/images/logo.png",
          sameAs: [
            "https://www.upwork.com/agencies/2104202313777019716/",
            "https://github.com",
            "https://linkedin.com",
          ],
          contactPoint: {
            contactType: "Customer Support & Architecture Lead",
            email: "clashertitan839@gmail.com",
            telephone: "+91-8580730520",
            availableLanguage: ["English", "Hindi"],
          },
        }}
      />
      <StructuredData
        type="WebSite"
        data={{
          name: "DevNest Studio",
          url: "https://devneststudio.com",
        }}
      />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[250px]" />}>
        <UpworkTrustSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <WhyChooseUsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <PortfolioPreviewSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <CTASection />
      </Suspense>
    </>
  );
}
