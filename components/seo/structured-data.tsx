"use client"

import Script from "next/script"

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "Service" | "FAQPage" | "Article" | "BreadcrumbList"
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
