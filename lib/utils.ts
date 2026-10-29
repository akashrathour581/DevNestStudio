import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateMetadata(title: string, description: string, path: string) {
  const url = process.env.NEXT_PUBLIC_APP_URL || "https://devneststudio.com";
  return {
    title: `${title} | DevNest Studio`,
    description,
    openGraph: {
      title: `${title} | DevNest Studio`,
      description,
      url: `${url}${path}`,
      siteName: "DevNest Studio",
      locale: "en_US",
      type: "website",
      images: [{ url: `${url}/images/logo.png`, width: 800, height: 800, alt: "DevNest Studio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | DevNest Studio`,
      description,
      images: [`${url}/images/logo.png`],
    },
    alternates: {
      canonical: `${url}${path}`,
    },
  };
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
