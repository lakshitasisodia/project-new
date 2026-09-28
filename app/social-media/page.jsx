// FILE: app/services/social-media/page.jsx

import ServiceHubPage from "@/components/ServiceHubPage";

export const metadata = {
  title: "Social Media Services by Specialty — Instagram, LinkedIn & Strategy",
  description:
    "Instagram management, LinkedIn management, and social media strategy — broken into three distinct services. Graphical Proximity's social media hub for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/social-media" },
  openGraph: {
    title: "Social Media Services by Specialty | Graphical Proximity",
    description: "Instagram management, LinkedIn management, and the strategy layer that decides what either should contain.",
    url: "https://www.graphicalproximity.com/services/social-media",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const socialHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/social-media/#service",
  name: "Social Media Services",
  url: "https://www.graphicalproximity.com/services/social-media",
  description: "Social media split into Instagram management, LinkedIn management, and social media optimization strategy, each with its own dedicated page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Social Media Management",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Social Media", item: "https://www.graphicalproximity.com/services/social-media" },
    ],
  },
};

const socialHubItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Social Media Specialties",
  url: "https://www.graphicalproximity.com/services/social-media",
  numberOfItems: 3,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Instagram Management", url: "https://www.graphicalproximity.com/services/social-media/instagram-management" },
    { "@type": "ListItem", position: 2, name: "LinkedIn Management", url: "https://www.graphicalproximity.com/services/social-media/linkedin-management" },
    { "@type": "ListItem", position: 3, name: "Social Media Optimization", url: "https://www.graphicalproximity.com/services/social-media/social-media-optimization" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialHubItemListSchema) }} />
      <ServiceHubPage hubKey="social-media" />
    </>
  );
}
