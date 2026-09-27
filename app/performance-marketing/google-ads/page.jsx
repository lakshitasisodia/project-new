// FILE: app/services/performance-marketing/google-ads/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Google Ads Management Services | Search, PMax & Display | Graphical Proximity",
  description:
    "Google Ads management — Search, Performance Max, and Display campaigns built around high-intent keywords, full conversion tracking, and weekly optimisation. Live in 5–7 days.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/performance-marketing/google-ads" },
  openGraph: {
    title: "Google Ads Management | Graphical Proximity",
    description: "Capture the demand that's already searching for you — Search, Performance Max, and Display campaigns.",
    url: "https://www.graphicalproximity.com/services/performance-marketing/google-ads",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const googleAdsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/performance-marketing/google-ads/#service",
  name: "Google Ads Management",
  url: "https://www.graphicalproximity.com/services/performance-marketing/google-ads",
  description:
    "Google Search, Performance Max, and Display campaign setup and management, with full conversion tracking and weekly optimisation.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Google Ads Management",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Performance Marketing", item: "https://www.graphicalproximity.com/services/performance-marketing" },
      { "@type": "ListItem", position: 4, name: "Google Ads", item: "https://www.graphicalproximity.com/services/performance-marketing/google-ads" },
    ],
  },
};

const googleAdsFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Google Ads campaigns go live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search campaigns can typically go live within 5–7 business days of onboarding, covering strategy, keyword research, ad copy, and conversion tracking setup.",
      },
    },
    {
      "@type": "Question",
      name: "Is ad spend included in the management fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ad spend is paid directly by you into your Google Ads account. We charge a management fee only.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Search and Performance Max?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search campaigns target specific keyword searches with text ads. Performance Max uses Google's automation to find conversions across Search, Display, YouTube, and more from a single campaign.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(googleAdsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(googleAdsFAQSchema) }} />
      <ServicePage serviceKey="performance-marketing-google-ads" />
    </>
  );
}
