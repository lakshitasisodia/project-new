// FILE: app/web-development/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Web Design & Development | Fast, Mobile-First Websites",
  description:
    "Custom website design and development — mobile-first, fast-loading, and built to convert visitors into clients. Websites delivered in 10–28 days. Serving businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/web-development" },
  openGraph: {
    title: "Web Design & Development",
    description: "Fast, mobile-first, conversion-optimised websites and web applications. Your 24/7 sales engine.",
    url: "https://www.graphicalproximity.com/web-development",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const webDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/web-development/#service",
  name: "Web Design & Development",
  url: "https://www.graphicalproximity.com/web-development",
  description:
    "Custom-designed, mobile-first websites built on WordPress or Webflow. Launch Website from ₹9,000, Business Website ₹13,000, Growth Website ₹22,000. Delivered in 10–28 days.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Web Design and Development",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "9000",
    highPrice: "22000",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    description: "Launch Website ₹9,000 | Business Website ₹13,000 | Growth Website ₹22,000",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Web Design & Development", item: "https://www.graphicalproximity.com/web-development" },
    ],
  },
};

const webDevHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development Service — Key Topics",
  url: "https://www.graphicalproximity.com/web-development",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Why Your Website Is Your Most Important Business Asset" },
    { "@type": "ListItem", position: 2, name: "What We Build — WordPress and Webflow" },
    { "@type": "ListItem", position: 3, name: "How We Build Your Website — Step by Step" },
    { "@type": "ListItem", position: 4, name: "Website Packages and Pricing" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const webDevFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Launch Website (10–14 pages) is delivered in 10–14 days. Business Website (15–20 pages) in 2–3 weeks. Growth Website (20+ pages with custom design) in 3–4 weeks. Timelines depend on how quickly the client provides assets and approvals.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you build on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build primarily on WordPress and Webflow. Both are production-ready, fully responsive, and easy for clients to manage after handover. The platform choice depends on your content needs, budget, and long-term maintenance preference.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO included in the website build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All website packages include at minimum basic on-page SEO setup — title tags, meta descriptions, heading structure, image alt text, and Google Search Console integration. The Growth Website includes advanced SEO structure and GA4 analytics integration.",
      },
    },
    {
      "@type": "Question",
      name: "Will the website be mobile-friendly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every website we build is fully mobile-responsive and optimised for mobile PageSpeed scores above 85. Mobile performance is a non-negotiable standard — not an add-on.",
      },
    },
    {
      "@type": "Question",
      name: "What is the payment structure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website projects require 50% advance before work begins, with the remaining 50% due before the site goes live. All prices are one-time for the build — ongoing maintenance is available as a separate monthly retainer.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevFAQSchema) }} />
      <ServicePage serviceKey="web-development" />
    </>
  );
}