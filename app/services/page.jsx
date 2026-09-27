import ServicesOutput from "@/components/ServicesOutput";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Digital Marketing Services | Nine Services. One Growth System.",
  description:
    "Performance marketing, SEO, web design, branding, social media, LinkedIn branding, digital PR, and AI automation — all under one agency. Graphical Proximity builds digital engines for local and national businesses in India.",
  alternates: {
    canonical: "https://www.graphicalproximity.com/services",
  },
  openGraph: {
    title: "Digital Marketing Services — Nine Services. One Growth System.",
    description:
      "Every service is built to generate leads, build authority, and compound over time. Performance marketing, SEO, web design, branding, LinkedIn, and AI automation.",
    url: "https://www.graphicalproximity.com/services",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.graphicalproximity.com/services/#webpage",
  url: "https://www.graphicalproximity.com/services",
  name: "Digital Marketing Services",
  description:
    "Nine digital marketing services under one growth system — performance marketing, SEO, web design, branding, social media, LinkedIn branding, digital PR, digital marketing, and AI automation.",
  isPartOf: { "@id": "https://www.graphicalproximity.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.graphicalproximity.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.graphicalproximity.com/services",
      },
    ],
  },
};

// ── ItemList — all 9 services listed for Google to index as sitelinks ─────────
const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Graphical Proximity Digital Marketing Services",
  description:
    "Complete list of digital marketing and growth services offered by Graphical Proximity.",
  url: "https://www.graphicalproximity.com/services",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Digital PR & Online Authority",
      url: "https://www.graphicalproximity.com/digital-pr",
      description: "Editorial placements, backlink building, and media outreach that compounds.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digital Marketing & Growth Strategy",
      url: "https://www.graphicalproximity.com/digital-marketing",
      description: "Brand positioning, content funnels, and multi-channel campaigns built for ROI.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Performance Marketing — Google & Meta Ads",
      url: "https://www.graphicalproximity.com/performance-marketing",
      description: "Paid campaigns live in 5–7 days. Every rupee tracked. Every lead counted.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Brand Identity & Design",
      url: "https://www.graphicalproximity.com/branding",
      description: "Logo, visual system, positioning, and guidelines. Built to be remembered.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Web Design & Development",
      url: "https://www.graphicalproximity.com/web-development",
      description: "Fast, mobile-first, conversion-optimised websites and web applications.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "SEO & Search Engine Optimisation",
      url: "https://www.graphicalproximity.com/seo-services",
      description: "Page-one rankings. Organic traffic that compounds without ongoing ad spend.",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Social Media Management & Content",
      url: "https://www.graphicalproximity.com/social-media",
      description: "Strategy, creation, community management, and analytics across platforms.",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "LinkedIn Personal Branding",
      url: "https://www.graphicalproximity.com/linkedin-branding",
      description: "Authority building, content, and DM management that generates inbound leads.",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "AI Integration & Marketing Automation",
      url: "https://www.graphicalproximity.com/ai-integration",
      description: "Automate workflows. Scale content output. Move faster without hiring.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />
      <ServicesOutput />
    </>
  );
}