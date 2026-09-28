// FILE: app/services/social-media/instagram-management/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Instagram Management Services | Content, Reels & DM Handling | Graphical Proximity",
  description:
    "Full Instagram management — content calendar, feed posts, reels scripts, captions, and DM handling. Consistent presence that converts, for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/social-media/instagram-management" },
  openGraph: {
    title: "Instagram Management | Graphical Proximity",
    description: "Content calendar, feed posts, stories, reels scripts, and DM handling — run as one consistent system.",
    url: "https://www.graphicalproximity.com/services/social-media/instagram-management",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const igSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/social-media/instagram-management/#service",
  name: "Instagram Management",
  url: "https://www.graphicalproximity.com/services/social-media/instagram-management",
  description: "Content calendar, feed posts, stories, reel scripts, caption copywriting, DM handling, and monthly reporting for Instagram.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Instagram Management",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Social Media", item: "https://www.graphicalproximity.com/services/social-media" },
      { "@type": "ListItem", position: 4, name: "Instagram Management", item: "https://www.graphicalproximity.com/services/social-media/instagram-management" },
    ],
  },
};

const igFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many posts per week is included?", acceptedAnswer: { "@type": "Answer", text: "Frequency depends on the package — see the Starter, Growth, and Authority tiers on the main Social Media Management page for exact quantities." } },
    { "@type": "Question", name: "Do you handle DMs and comments personally?", acceptedAnswer: { "@type": "Answer", text: "Yes, as part of the retainer — daily monitoring and response is included, not billed separately." } },
    { "@type": "Question", name: "What is the minimum commitment?", acceptedAnswer: { "@type": "Answer", text: "Three months, matching every social media package on the main Social Media Management page." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(igSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(igFAQSchema) }} />
      <ServicePage serviceKey="social-media-instagram-management" />
    </>
  );
}
