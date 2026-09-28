// FILE: app/services/branding/page.jsx

import ServiceHubPage from "@/components/ServiceHubPage";

export const metadata = {
  title: "Branding Services by Phase — Brand Audit & Identity Design",
  description:
    "Brand audit and brand identity design, split into their own pages — diagnose first, or go straight to the build. Graphical Proximity's branding hub for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/branding" },
  openGraph: {
    title: "Branding Services by Phase | Graphical Proximity",
    description: "A brand audit and brand identity design are two different phases — diagnosis, then build.",
    url: "https://www.graphicalproximity.com/services/branding",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const brandingHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/branding/#service",
  name: "Branding Services",
  url: "https://www.graphicalproximity.com/services/branding",
  description: "Branding split into Brand Audit (diagnosis) and Brand Identity Design (build), each with its own dedicated page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Brand Identity Design",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Branding", item: "https://www.graphicalproximity.com/services/branding" },
    ],
  },
};

const brandingHubItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Branding Phases",
  url: "https://www.graphicalproximity.com/services/branding",
  numberOfItems: 2,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Brand Audit", url: "https://www.graphicalproximity.com/services/branding/brand-audit" },
    { "@type": "ListItem", position: 2, name: "Brand Identity Design", url: "https://www.graphicalproximity.com/services/branding/brand-identity-design" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingHubItemListSchema) }} />
      <ServiceHubPage hubKey="branding" />
    </>
  );
}
