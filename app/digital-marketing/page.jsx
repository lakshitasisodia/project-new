// FILE: app/digital-marketing/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Digital Marketing & Growth Strategy",
  description:
    "Multi-channel digital marketing strategy built for revenue growth — content funnels, email automation, brand positioning, and campaigns that compound. Serving businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/digital-marketing" },
  openGraph: {
    title: "Digital Marketing & Growth Strategy",
    description: "Brand positioning, content funnels, and multi-channel campaigns built for ROI. Not just impressions.",
    url: "https://www.graphicalproximity.com/digital-marketing",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const digitalMktSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/digital-marketing/#service",
  name: "Digital Marketing & Growth Strategy",
  url: "https://www.graphicalproximity.com/digital-marketing",
  description:
    "Brand positioning, content funnels, email campaigns, and multi-channel growth strategy built around your revenue goals — not vanity metrics.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Digital Marketing Strategy",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Digital Marketing", item: "https://www.graphicalproximity.com/digital-marketing" },
    ],
  },
};

const digitalMktHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Service — Key Topics",
  url: "https://www.graphicalproximity.com/digital-marketing",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "What Is Digital Marketing — And Why Do Businesses Fail Without It?" },
    { "@type": "ListItem", position: 2, name: "How We Build Your Growth System" },
    { "@type": "ListItem", position: 3, name: "What You Get" },
    { "@type": "ListItem", position: 4, name: "Frequently Asked Questions" },
  ],
};

const digitalMktFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a digital marketing strategy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A digital marketing strategy from Graphical Proximity includes brand positioning, target audience mapping, content funnel design, channel selection (SEO, paid ads, social, email), and monthly performance reporting tied to revenue — not just traffic or impressions.",
      },
    },
    {
      "@type": "Question",
      name: "How is digital marketing different from running ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Running ads is one tactic within digital marketing. A full digital marketing strategy covers multiple channels — SEO, content, email, social media, and paid ads — working together as a system to attract, convert, and retain customers. Ads stop when the budget stops. A strategy compounds.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid channels like ads can deliver leads within 5–7 days. SEO and content typically show measurable movement in 3–6 months. A full multi-channel strategy compounds over 6–12 months. We set clear expectations in the first discovery call based on your specific goals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses or only large brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Graphical Proximity primarily works with local service businesses, e-commerce brands, founders, and B2B service companies — not enterprise. Our packages start from ₹9,000/month and are designed for businesses that want to grow efficiently without a full in-house team.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMktSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMktHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalMktFAQSchema) }} />
      <ServicePage serviceKey="digital-marketing" />
    </>
  );
}