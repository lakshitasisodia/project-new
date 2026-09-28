// FILE: app/services/website-design-development/page.jsx
// Nested duplicate-topic page, Option A. Distinct slug from the flat
// /web-development page, per the approved page structure.

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Website Design & Development | Inside Our Services Architecture | Graphical Proximity",
  description:
    "Custom, mobile-first website design and development, presented inside the full services architecture. See the main Web Design & Development page for pricing and packages.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/website-design-development" },
  openGraph: {
    title: "Website Design & Development | Graphical Proximity",
    description: "Fast, mobile-first, conversion-optimised websites and web applications.",
    url: "https://www.graphicalproximity.com/services/website-design-development",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const nestedWebDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/website-design-development/#service",
  name: "Website Design & Development",
  url: "https://www.graphicalproximity.com/services/website-design-development",
  description: "Custom-designed, mobile-first websites, presented inside the services architecture. Full pricing and packages on the main Web Design & Development page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Web Design and Development",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Website Design & Development", item: "https://www.graphicalproximity.com/services/website-design-development" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nestedWebDevSchema) }} />
      <ServicePage serviceKey="services-website-design-development" />
    </>
  );
}
