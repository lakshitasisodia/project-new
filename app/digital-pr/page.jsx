// FILE: app/services/digital-pr/page.jsx
// Nested duplicate-topic page, per Section 6.1 Option A: coexists with the
// existing flat /digital-pr page, self-canonical, differentiated intro copy.

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Digital PR Services | Inside Our Services Architecture | Graphical Proximity",
  description:
    "Digital PR — media outreach, backlink building, and authority placements — presented inside the full services architecture. See the main Digital PR page for the complete process.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/digital-pr" },
  openGraph: {
    title: "Digital PR | Graphical Proximity",
    description: "Editorial placements, backlink building, and media outreach that compounds.",
    url: "https://www.graphicalproximity.com/services/digital-pr",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const nestedDigitalPRSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/digital-pr/#service",
  name: "Digital PR",
  url: "https://www.graphicalproximity.com/services/digital-pr",
  description: "Media outreach, strategic link building, and authority-building placements, presented inside the services architecture. Full detail on the main Digital PR page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Digital PR and Link Building",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Digital PR", item: "https://www.graphicalproximity.com/services/digital-pr" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nestedDigitalPRSchema) }} />
      <ServicePage serviceKey="services-digital-pr" />
    </>
  );
}
