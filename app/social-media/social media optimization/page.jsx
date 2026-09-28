// FILE: app/services/social-media/social-media-optimization/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Social Media Optimization | Strategy & Audit | Graphical Proximity",
  description:
    "Social media strategy and audit — platform choice, content pillars, posting cadence, and profile structure — the plan before content gets made. For businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/social-media/social-media-optimization" },
  openGraph: {
    title: "Social Media Optimization | Graphical Proximity",
    description: "The audit and strategy layer before ongoing management: platform, content pillars, posting cadence, and profile structure.",
    url: "https://www.graphicalproximity.com/services/social-media/social-media-optimization",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const smoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/social-media/social-media-optimization/#service",
  name: "Social Media Optimization",
  url: "https://www.graphicalproximity.com/services/social-media/social-media-optimization",
  description: "Account audit, platform and content-pillar strategy, posting cadence planning, and profile structure optimisation — a strategy engagement distinct from ongoing management.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Social Media Strategy",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Social Media", item: "https://www.graphicalproximity.com/services/social-media" },
      { "@type": "ListItem", position: 4, name: "Social Media Optimization", item: "https://www.graphicalproximity.com/services/social-media/social-media-optimization" },
    ],
  },
};

const smoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need this if I'm already using Instagram Management?", acceptedAnswer: { "@type": "Answer", text: "An initial strategy conversation is part of onboarding any management retainer. This is for businesses who specifically want the audit and plan first, before committing to ongoing content production." } },
    { "@type": "Question", name: "How is this priced?", acceptedAnswer: { "@type": "Answer", text: "It isn't a fixed package tier — scope and cost depend on your current account and goals, and are discussed directly on a call." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(smoFAQSchema) }} />
      <ServicePage serviceKey="social-media-social-media-optimization" />
    </>
  );
}
