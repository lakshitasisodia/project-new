// FILE: app/services/performance-marketing/meta-ads/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Meta Ads Management Services | Facebook & Instagram | Graphical Proximity",
  description:
    "Meta Ads management — Facebook and Instagram campaigns built on precise audience targeting, tested creative, and retargeting. Management fees only, ad spend paid directly by you.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/performance-marketing/meta-ads" },
  openGraph: {
    title: "Meta Ads Management | Graphical Proximity",
    description: "Facebook and Instagram campaigns built on audience targeting and creative that stops the scroll.",
    url: "https://www.graphicalproximity.com/services/performance-marketing/meta-ads",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const metaAdsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/performance-marketing/meta-ads/#service",
  name: "Meta Ads Management",
  url: "https://www.graphicalproximity.com/services/performance-marketing/meta-ads",
  description:
    "Facebook and Instagram ad campaign setup and management — audience strategy, creative testing, Meta Pixel tracking, and retargeting.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Meta Ads Management",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Performance Marketing", item: "https://www.graphicalproximity.com/services/performance-marketing" },
      { "@type": "ListItem", position: 4, name: "Meta Ads", item: "https://www.graphicalproximity.com/services/performance-marketing/meta-ads" },
    ],
  },
};

const metaAdsFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Meta Ads different from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Ads captures people already searching for what you offer. Meta Ads creates demand by targeting people based on interests and behaviour, regardless of whether they've searched.",
      },
    },
    {
      "@type": "Question",
      name: "How long before Meta campaigns stabilise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta campaigns typically need 2–4 weeks of optimisation before lead flow and cost per result stabilise, as the algorithm needs conversion data to optimise delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Is ad spend included in the management fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ad spend is paid directly by you into your Meta Ads account. We charge a management fee only.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metaAdsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metaAdsFAQSchema) }} />
      <ServicePage serviceKey="performance-marketing-meta-ads" />
    </>
  );
}
