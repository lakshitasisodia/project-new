// FILE: app/linkedin-branding/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "LinkedIn Personal Branding | Authority Content for Founders",
  description:
    "Build personal authority on LinkedIn — posts, articles, DM management, profile optimisation, and growth strategy. Graphical Proximity manages LinkedIn branding for founders, consultants, and professionals across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/linkedin-branding" },
  openGraph: {
    title: "LinkedIn Personal Branding",
    description: "Authority building, content, and DM management that generates inbound leads for founders and service businesses.",
    url: "https://www.graphicalproximity.com/linkedin-branding",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const linkedinSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/linkedin-branding/#service",
  name: "LinkedIn Personal Branding",
  url: "https://www.graphicalproximity.com/linkedin-branding",
  description:
    "Monthly LinkedIn management — posts, articles, DM handling, profile optimisation, engagement, and growth strategy for founders and professionals. Professional Presence from ₹10,000/month.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "LinkedIn Personal Branding and Content Management",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "10000",
    highPrice: "22000",
    offerCount: "3",
    availability: "https://schema.org/InStock",
    description: "Professional Presence ₹10,000/mo | Authority Builder ₹16,000/mo | Thought Leader ₹22,000/mo",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "LinkedIn Personal Branding", item: "https://www.graphicalproximity.com/linkedin-branding" },
    ],
  },
};

const linkedinHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LinkedIn Branding Service — Key Topics",
  url: "https://www.graphicalproximity.com/linkedin-branding",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Why LinkedIn Is the Highest-ROI Platform for Founders" },
    { "@type": "ListItem", position: 2, name: "What LinkedIn Personal Branding Actually Involves" },
    { "@type": "ListItem", position: 3, name: "Profile Optimisation — Your Digital Business Card" },
    { "@type": "ListItem", position: 4, name: "Monthly Packages and What Is Included" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const linkedinFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is LinkedIn personal branding for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LinkedIn branding is for founders, consultants, coaches, B2B service providers, and professionals who want to generate inbound leads, build industry authority, or grow a following that converts to business opportunities. It is not for passive presence — it is for active authority building.",
      },
    },
    {
      "@type": "Question",
      name: "Do you write all the content or do I need to provide ideas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We write all content based on a brief and discovery call where we understand your voice, views, and expertise. We then develop a monthly content strategy and all post copy. You review and approve before anything goes live — your authenticity is always preserved.",
      },
    },
    {
      "@type": "Question",
      name: "How many posts per month do you create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional Presence: 12 posts/month. Authority Builder: 20 posts/month + 2 articles. Thought Leader: 20 posts/month + 4 articles + 5 scripts. All packages include DM handling and engagement management.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage DMs and enquiries on my behalf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DM management is included in all LinkedIn packages. We handle inbound messages, follow up with leads, and flag high-priority opportunities for you to personally respond to. We work within clear guidelines so the tone always sounds like you.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedinSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedinHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkedinFAQSchema) }} />
      <ServicePage serviceKey="linkedin-branding" />
    </>
  );
}