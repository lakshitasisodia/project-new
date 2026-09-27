// ═══════════════════════════════════════════════════════════════════════════════
// SERVICE PAGE SCHEMAS — Graphical Proximity
// Each block below = one file. Place at the path shown in the comment.
// All 9 services: digital-pr, digital-marketing, performance-marketing,
// branding, web-development, seo-services, social-media, linkedin-branding,
// ai-integration
// ═══════════════════════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/digital-pr/page.jsx
// ─────────────────────────────────────────────────────────────────────────────

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Digital PR & Online Authority Building",
  description:
    "Build online authority through editorial placements, high-authority backlinks, and strategic media outreach. Graphical Proximity's Digital PR service improves Google rankings and brand credibility that compounds over time.",
  alternates: { canonical: "https://www.graphicalproximity.com/digital-pr" },
  openGraph: {
    title: "Digital PR & Authority Building",
    description: "Editorial placements, backlink building, and media outreach that compounds. Authority earned in the right places stays.",
    url: "https://www.graphicalproximity.com/digital-pr",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const digitalPRSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/digital-pr/#service",
  name: "Digital PR & Online Authority Building",
  url: "https://www.graphicalproximity.com/digital-pr",
  description:
    "We position your brand in the publications, podcasts, and online spaces your audience already trusts. Our Digital PR service combines SEO-driven media outreach, strategic storytelling, and high-authority link building to earn lasting credibility, improve search rankings, and generate leads that advertising cannot buy.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Digital PR and Link Building",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Digital PR", item: "https://www.graphicalproximity.com/digital-pr" },
    ],
  },
};

const digitalPRHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital PR Service — Key Topics",
  url: "https://www.graphicalproximity.com/digital-pr",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "What Is Digital PR — And Why Does It Matter for SEO?" },
    { "@type": "ListItem", position: 2, name: "How We Do It" },
    { "@type": "ListItem", position: 3, name: "What You Get" },
    { "@type": "ListItem", position: 4, name: "Frequently Asked Questions" },
  ],
};

const digitalPRFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Digital PR and how is it different from traditional PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital PR focuses on earning editorial mentions, backlinks, and online placements in credible digital spaces — publications, blogs, podcasts, and directories. Unlike traditional PR, every placement directly improves your SEO through high-authority backlinks and increases organic search rankings.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Digital PR take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial placements can be secured within 4–8 weeks. Domain authority and ranking improvements typically become measurable within 3–6 months of consistent Digital PR activity. Unlike ads, the results compound over time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee placements in specific publications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do not guarantee specific publications as editorial decisions are made by third-party editors. We do guarantee a structured outreach process targeting relevant high-authority platforms and deliver monthly reporting on all placements secured.",
      },
    },
    {
      "@type": "Question",
      name: "What types of businesses benefit most from Digital PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local service businesses, e-commerce brands, consultants, agencies, and any business competing on Google organic search benefit significantly from Digital PR. It is especially powerful for businesses that want to build long-term authority rather than relying solely on paid ads.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalPRSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalPRHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalPRFAQSchema) }} />
      <ServicePage serviceKey="digital-pr" />
    </>
  );
}