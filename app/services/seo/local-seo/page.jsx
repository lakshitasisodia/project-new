// FILE: app/services/seo/local-seo/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Local SEO Services | Google Business Profile & Map Rankings | Graphical Proximity",
  description:
    "Local SEO services — Google Business Profile optimisation, citation building, review management, and location-qualified content. Rank in the Google Maps 3-pack for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/seo/local-seo" },
  openGraph: {
    title: "Local SEO Services | Graphical Proximity",
    description: "Google Business Profile, citations, and reviews — built to win local search and the Maps 3-pack.",
    url: "https://www.graphicalproximity.com/services/seo/local-seo",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const localSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/seo/local-seo/#service",
  name: "Local SEO",
  url: "https://www.graphicalproximity.com/services/seo/local-seo",
  description:
    "Google Business Profile optimisation, local citation building, review management, location-qualified on-page content, and local schema markup.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Local Search Engine Optimisation",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.graphicalproximity.com/services/seo" },
      { "@type": "ListItem", position: 4, name: "Local SEO", item: "https://www.graphicalproximity.com/services/seo/local-seo" },
    ],
  },
};

const localSeoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is local SEO different from regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular SEO competes for national or topic-wide rankings. Local SEO targets location-specific searches and relies more on Google Business Profile strength, citation consistency, and reviews.",
      },
    },
    {
      "@type": "Question",
      name: "How fast does local SEO show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile improvements are often visible within 30 days. Map-pack ranking movement typically follows within 60–90 days of consistent work.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a physical address to benefit from local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A verifiable address strengthens local SEO, but service-area businesses without a public storefront can still rank locally using a defined service area on their Google Business Profile.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoFAQSchema) }} />
      <ServicePage serviceKey="seo-local-seo" />
    </>
  );
}
