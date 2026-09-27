// FILE: app/services/performance-marketing/page.jsx
// New nested hub page. Additive — does not replace or redirect /performance-marketing.

import ServiceHubPage from "@/components/ServiceHubPage";

export const metadata = {
  title: "Performance Marketing by Platform — Google Ads vs Meta Ads",
  description:
    "Google Ads and Meta Ads, broken down separately. See how each platform works, who it fits, and how they combine — from Graphical Proximity, performance marketing for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/performance-marketing" },
  openGraph: {
    title: "Performance Marketing by Platform | Graphical Proximity",
    description: "Google Ads captures search intent. Meta Ads creates demand. See both platforms broken down separately.",
    url: "https://www.graphicalproximity.com/services/performance-marketing",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const perfHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/performance-marketing/#service",
  name: "Performance Marketing",
  url: "https://www.graphicalproximity.com/services/performance-marketing",
  description:
    "Performance marketing broken down by platform — Google Ads (Search, Performance Max, Display) and Meta Ads (Facebook, Instagram) — each with its own dedicated page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Paid Advertising Management",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Performance Marketing", item: "https://www.graphicalproximity.com/services/performance-marketing" },
    ],
  },
};

const perfHubItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Performance Marketing Platforms",
  url: "https://www.graphicalproximity.com/services/performance-marketing",
  numberOfItems: 2,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Google Ads", url: "https://www.graphicalproximity.com/services/performance-marketing/google-ads" },
    { "@type": "ListItem", position: 2, name: "Meta Ads", url: "https://www.graphicalproximity.com/services/performance-marketing/meta-ads" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(perfHubSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(perfHubItemListSchema) }} />
      <ServiceHubPage hubKey="performance-marketing" />
    </>
  );
}
