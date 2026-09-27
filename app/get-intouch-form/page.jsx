import GetOutput from "@/components/GetOutput";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Get in Touch | Start Your Digital Growth Project",
  description:
    "Ready to grow your business online? Contact Graphical Proximity — India's digital growth agency. We respond within 24 hours. Performance marketing, SEO, web design, branding, and AI automation.",
  alternates: {
    canonical: "https://www.graphicalproximity.com/get-intouch-form",
  },
  openGraph: {
    title: "Get in Touch — Start a Project",
    description:
      "Tell us your goal. We'll build the strategy. Performance marketing, SEO, web design, branding — done properly.",
    url: "https://www.graphicalproximity.com/get-intouch-form",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.graphicalproximity.com/get-intouch-form/#webpage",
  url: "https://www.graphicalproximity.com/get-intouch-form",
  name: "Get in Touch — Start Your Project",
  description:
    "Contact Graphical Proximity to start a digital growth project. We work with local service businesses, e-commerce brands, and founders across India and internationally.",
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
        name: "Get in Touch",
        item: "https://www.graphicalproximity.com/get-intouch-form",
      },
    ],
  },
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.graphicalproximity.com/#organization",
  name: "Graphical Proximity",
  url: "https://www.graphicalproximity.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "letsdoit@graphicalproximity.com",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
};

// ── Sitelinks — shown under /get-intouch-form in search results ──────────────
const contactSitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Quick Links from Contact Page",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      url: "https://www.graphicalproximity.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Services",
      url: "https://www.graphicalproximity.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Client Results",
      url: "https://www.graphicalproximity.com/clients",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSitelinksSchema) }}
      />
      <GetOutput />
    </>
  );
}