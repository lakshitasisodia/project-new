// FILE: app/seo-services/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "SEO Services | Page One Google Rankings",
  description:
    "Get your business on page one of Google. Graphical Proximity offers on-page SEO, Google Business Profile optimisation, local citations, and monthly content — delivering compounding organic traffic without ongoing ad spend.",
  alternates: { canonical: "https://www.graphicalproximity.com/seo-services" },
  openGraph: {
    title: "SEO Services | Page One Google Rankings",
    description: "Page-one rankings. Organic traffic that compounds without ongoing ad spend. GMB views up 50%+ in 90 days.",
    url: "https://www.graphicalproximity.com/seo-services",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/seo-services/#service",
  name: "SEO & Google Visibility Services",
  url: "https://www.graphicalproximity.com/seo-services",
  description:
    "On-page SEO, Google Business Profile optimisation, local citations, backlink building, and monthly content. Significant ranking movement in 3–6 months. GMB improvements visible within 30 days.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Search Engine Optimisation",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO Services", item: "https://www.graphicalproximity.com/seo-services" },
    ],
  },
};

const seoHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SEO Service — Key Topics",
  url: "https://www.graphicalproximity.com/seo-services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "What Is SEO and Why Does Your Business Need It?" },
    { "@type": "ListItem", position: 2, name: "Local SEO vs National SEO — What Is Right for You?" },
    { "@type": "ListItem", position: 3, name: "Google Business Profile Optimisation" },
    { "@type": "ListItem", position: 4, name: "How We Do SEO — Our Monthly Process" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const seoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile improvements are typically visible within 30 days. Significant keyword ranking movement happens in 3–6 months. Full compounding organic traffic growth is measured over 6–12 months. SEO is a long-term investment — not an overnight fix.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page Google rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is controlled by Google, not us. What we can guarantee is a structured, white-hat SEO process, monthly transparency reporting, and a consistent improvement trajectory based on proven techniques.",
      },
    },
    {
      "@type": "Question",
      name: "What does local SEO involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO includes Google Business Profile optimisation, local keyword targeting, citation building across directories, review management strategy, and location-specific on-page content. It is the most effective SEO investment for businesses that serve a specific city or region.",
      },
    },
    {
      "@type": "Question",
      name: "Do you include content writing in your SEO service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our SEO retainer includes monthly content — blog posts, service pages, and location pages — targeting priority keywords. Content is the fuel that drives ranking improvement over time and is included as part of our monthly process.",
      },
    },
    {
      "@type": "Question",
      name: "Is Google Business Profile optimisation included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Business Profile (formerly Google My Business) setup and optimisation is included in all SEO retainers. This includes profile completion, photo uploads, service descriptions, Q&A management, and review response — critical for local search visibility.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoFAQSchema) }} />
      <ServicePage serviceKey="seo-services" />
    </>
  );
}