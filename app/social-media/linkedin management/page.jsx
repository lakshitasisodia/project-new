// FILE: app/services/social-media/linkedin-management/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "LinkedIn Management | Inside Our Social Media System | Graphical Proximity",
  description:
    "LinkedIn management as part of a coordinated social media system alongside Instagram. For the full dedicated service — profile optimisation, articles, growth strategy — see LinkedIn Personal Branding.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/social-media/linkedin-management" },
  openGraph: {
    title: "LinkedIn Management | Graphical Proximity",
    description: "LinkedIn run with the same operational discipline as Instagram, inside one coordinated content calendar.",
    url: "https://www.graphicalproximity.com/services/social-media/linkedin-management",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const liSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/social-media/linkedin-management/#service",
  name: "LinkedIn Management",
  url: "https://www.graphicalproximity.com/services/social-media/linkedin-management",
  description: "LinkedIn content planning, post creation, engagement management, and DM handling, run alongside Instagram inside one social media system.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "LinkedIn Management",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Social Media", item: "https://www.graphicalproximity.com/services/social-media" },
      { "@type": "ListItem", position: 4, name: "LinkedIn Management", item: "https://www.graphicalproximity.com/services/social-media/linkedin-management" },
    ],
  },
};

const liFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should I use this page or the full LinkedIn Personal Branding page?", acceptedAnswer: { "@type": "Answer", text: "If you want LinkedIn managed alongside Instagram as part of one system, this page describes that. If LinkedIn is your primary channel, see the full LinkedIn Personal Branding page." } },
    { "@type": "Question", name: "Is the content different from the standalone LinkedIn service?", acceptedAnswer: { "@type": "Answer", text: "The core work — posts, engagement, DM handling — is the same. The standalone service additionally includes profile optimisation, article writing, and a dedicated growth strategy." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(liSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(liFAQSchema) }} />
      <ServicePage serviceKey="social-media-linkedin-management" />
    </>
  );
}
