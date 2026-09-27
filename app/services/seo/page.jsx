// FILE: app/services/seo/page.jsx
// New nested hub page. Additive — does not replace or redirect /seo-services.

import ServiceHubPage from "@/components/ServiceHubPage";

export const metadata = {
  title: "SEO Services by Specialty — Technical, Local, E-Commerce & GEO/AEO",
  description:
    "Break SEO down by specialty: technical SEO, local SEO, e-commerce SEO, and GEO/AEO for AI search. Graphical Proximity's SEO hub for businesses across India who want the specific fix that matches their problem.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/seo" },
  openGraph: {
    title: "SEO Services by Specialty | Graphical Proximity",
    description: "Technical SEO, Local SEO, E-Commerce SEO, and GEO/AEO — broken down so you can go deep on the one that matters most.",
    url: "https://www.graphicalproximity.com/services/seo",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const seoHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/seo/#service",
  name: "SEO Services",
  url: "https://www.graphicalproximity.com/services/seo",
  description:
    "SEO broken into its specialties — technical SEO, local SEO, e-commerce SEO, and GEO/AEO (generative and answer engine optimisation) — each with its own dedicated page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Search Engine Optimisation",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.graphicalproximity.com/services/seo" },
    ],
  },
};

const seoHubItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SEO Specialties",
  url: "https://www.graphicalproximity.com/services/seo",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Technical SEO", url: "https://www.graphicalproximity.com/services/seo/technical-seo" },
    { "@type": "ListItem", position: 2, name: "Local SEO", url: "https://www.graphicalproximity.com/services/seo/local-seo" },
    { "@type": "ListItem", position: 3, name: "E-Commerce SEO", url: "https://www.graphicalproximity.com/services/seo/ecommerce-seo" },
    { "@type": "ListItem", position: 4, name: "GEO / AEO", url: "https://www.graphicalproximity.com/services/seo/geo-aeo" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoHubItemListSchema) }} />
      <ServiceHubPage hubKey="seo" />
    </>
  );
}
