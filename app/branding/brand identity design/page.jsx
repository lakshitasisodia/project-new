// FILE: app/services/branding/brand-identity-design/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Brand Identity Design Services | Logo & Visual System | Graphical Proximity",
  description:
    "Brand identity design — logo, colour, typography, and guidelines. The build phase of branding, for founders who already know they need the design work done.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/branding/brand-identity-design" },
  openGraph: {
    title: "Brand Identity Design | Graphical Proximity",
    description: "Logo, visual identity system, and guidelines — the actual build.",
    url: "https://www.graphicalproximity.com/services/branding/brand-identity-design",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const identitySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/branding/brand-identity-design/#service",
  name: "Brand Identity Design",
  url: "https://www.graphicalproximity.com/services/branding/brand-identity-design",
  description: "Logo design, colour and typography system, brand guidelines, and digital application — the design build phase of branding.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Brand Identity Design",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Branding", item: "https://www.graphicalproximity.com/services/branding" },
      { "@type": "ListItem", position: 4, name: "Brand Identity Design", item: "https://www.graphicalproximity.com/services/branding/brand-identity-design" },
    ],
  },
};

const identityFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should I start here or with a Brand Audit?", acceptedAnswer: { "@type": "Answer", text: "If you already know you need a new or refreshed identity, start here. If you're not sure what's actually wrong with your current brand, a Brand Audit first will make this process faster and more targeted." } },
    { "@type": "Question", name: "How long does this take?", acceptedAnswer: { "@type": "Answer", text: "A full identity project — strategy, logo, visual system, and guidelines — typically takes 4–8 weeks depending on scope." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identityFAQSchema) }} />
      <ServicePage serviceKey="branding-brand-identity-design" />
    </>
  );
}
