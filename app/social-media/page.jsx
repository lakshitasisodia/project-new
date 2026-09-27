// FILE: app/social-media/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Social Media Management & Content",
  description:
    "Instagram and LinkedIn social media management — strategy, content creation, community management, and analytics. Engagement rate above 3%. Minimum 3-month commitment. Serving businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/social-media" },
  openGraph: {
    title: "Social Media Management & Content",
    description: "Strategy, creation, community management, and analytics across platforms. Followers that actually convert.",
    url: "https://www.graphicalproximity.com/social-media",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const socialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/social-media/#service",
  name: "Social Media Management & Content",
  url: "https://www.graphicalproximity.com/social-media",
  description:
    "Monthly social media management including feed posts, stories, reel scripts, captions, DM management, engagement, and analytics reporting. Starter from ₹9,500/month.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Social Media Management",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "9500",
    highPrice: "20000",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    description: "Starter Presence ₹9,500/mo | Growth Accelerator ₹14,000/mo | Authority Builder ₹20,000/mo",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Social Media Management", item: "https://www.graphicalproximity.com/social-media" },
    ],
  },
};

const socialHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Social Media Management Service — Key Topics",
  url: "https://www.graphicalproximity.com/social-media",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Why Social Media Alone Is Not a Strategy" },
    { "@type": "ListItem", position: 2, name: "What a Proper Social Media System Looks Like" },
    { "@type": "ListItem", position: 3, name: "Instagram vs LinkedIn — Which Platform for Your Business?" },
    { "@type": "ListItem", position: 4, name: "Monthly Packages and What Is Included" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const socialFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What platforms do you manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily manage Instagram and LinkedIn. Both platforms are covered in our monthly packages. Facebook is included where relevant as part of Meta management. Platform selection is based on where your audience actually is — we recommend the right mix after the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create the content or do we provide it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We create everything — content strategy, captions, graphic design for posts and stories, reel scripts, and scheduling. We manage the full pipeline. You approve the monthly content calendar before any post goes live.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum commitment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All social media packages require a minimum 3-month commitment. Social media results compound — account growth, engagement, and audience trust take time to build. Three months is the minimum required to see measurable results and make data-driven optimisations.",
      },
    },
    {
      "@type": "Question",
      name: "Is ad spend included in the social media packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Social media packages cover organic content management only. Ad spend for Instagram or Facebook Ads is paid directly by you into your Meta Ads account and is billed separately as a performance marketing service.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialFAQSchema) }} />
      <ServicePage serviceKey="social-media" />
    </>
  );
}