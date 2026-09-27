// FILE: app/services/seo/geo-aeo/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "GEO & AEO Services | Getting Cited by AI Search | Graphical Proximity",
  description:
    "Generative and Answer Engine Optimisation — structured Q&A content, FAQ/Service schema, and entity consistency built to get your business cited by ChatGPT, Google AI Overviews, and Perplexity.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/seo/geo-aeo" },
  openGraph: {
    title: "GEO & AEO Services | Graphical Proximity",
    description: "Structured content and entity data built for how AI search tools actually select and cite sources.",
    url: "https://www.graphicalproximity.com/services/seo/geo-aeo",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const geoAeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/seo/geo-aeo/#service",
  name: "GEO / AEO — Generative & Answer Engine Optimisation",
  url: "https://www.graphicalproximity.com/services/seo/geo-aeo",
  description:
    "Structured Q&A content, FAQ/Service/Organization schema, sourced-statistic content, and entity consistency auditing built to improve citation by AI search tools.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Generative Engine Optimisation",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.graphicalproximity.com/services/seo" },
      { "@type": "ListItem", position: 4, name: "GEO / AEO", item: "https://www.graphicalproximity.com/services/seo/geo-aeo" },
    ],
  },
};

const geoAeoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GEO/AEO a replacement for classic SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It's an additional layer built on top of solid technical and content SEO, not a substitute for it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee my business gets cited by ChatGPT or AI Overviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical agency can guarantee citation by a third-party AI system. We use a structured approach aligned with current public guidance on what these systems favour.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure GEO/AEO progress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We periodically test relevant queries across ChatGPT, Google AI Overviews, and Perplexity to check whether your business is being surfaced, alongside the underlying content and schema work.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAeoFAQSchema) }} />
      <ServicePage serviceKey="seo-geo-aeo" />
    </>
  );
}
