// FILE: app/services/personal-branding/page.jsx
// Nested duplicate-topic page, Option A. Distinct slug from the flat
// /linkedin-branding page — presented under the broader "Personal Branding"
// heading per the approved page structure.

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Personal Branding Services | Inside Our Services Architecture | Graphical Proximity",
  description:
    "Personal branding for founders and professionals — currently delivered through LinkedIn — presented inside the full services architecture. See the main LinkedIn Personal Branding page for pricing.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/personal-branding" },
  openGraph: {
    title: "Personal Branding | Graphical Proximity",
    description: "Authority building, content, and DM management that generates inbound leads for founders and professionals.",
    url: "https://www.graphicalproximity.com/services/personal-branding",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const nestedPersonalBrandingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/personal-branding/#service",
  name: "Personal Branding",
  url: "https://www.graphicalproximity.com/services/personal-branding",
  description: "Founder and professional personal branding, currently delivered through LinkedIn, presented inside the services architecture. Full pricing on the main LinkedIn Personal Branding page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Personal Branding",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Personal Branding", item: "https://www.graphicalproximity.com/services/personal-branding" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nestedPersonalBrandingSchema) }} />
      <ServicePage serviceKey="services-personal-branding" />
    </>
  );
}
