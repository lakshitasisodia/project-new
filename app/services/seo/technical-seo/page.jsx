// FILE: app/services/seo/technical-seo/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Technical SEO Services | Speed, Crawlability & Schema | Graphical Proximity",
  description:
    "Technical SEO audits and fixes — Core Web Vitals, crawlability, mobile performance, and structured data. The foundation every other SEO investment depends on. Serving businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/seo/technical-seo" },
  openGraph: {
    title: "Technical SEO Services | Graphical Proximity",
    description: "Fix what Google can't see or can't trust — page speed, crawlability, schema markup, and mobile performance.",
    url: "https://www.graphicalproximity.com/services/seo/technical-seo",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const technicalSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/seo/technical-seo/#service",
  name: "Technical SEO",
  url: "https://www.graphicalproximity.com/services/seo/technical-seo",
  description:
    "Core Web Vitals optimisation, crawlability and indexation fixes, mobile performance, structured data implementation, and site architecture cleanup.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Technical Search Engine Optimisation",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.graphicalproximity.com/services/seo" },
      { "@type": "ListItem", position: 4, name: "Technical SEO", item: "https://www.graphicalproximity.com/services/seo/technical-seo" },
    ],
  },
};

const technicalSeoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need technical SEO if my content is already good?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Good content on a slow, poorly structured, or partially unindexed site consistently underperforms the same content on a technically sound site.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my site has technical SEO problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include slow load times, pages missing from Google search results, and inconsistent rankings. A full technical audit identifies the specific issues.",
      },
    },
    {
      "@type": "Question",
      name: "Is technical SEO a one-time fix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial audit and fix is a project, but technical health needs ongoing monitoring as new pages and updates can reintroduce speed or crawl issues.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(technicalSeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(technicalSeoFAQSchema) }} />
      <ServicePage serviceKey="seo-technical-seo" />
    </>
  );
}
