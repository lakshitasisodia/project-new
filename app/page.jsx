import MainOutput from "@/components/MainOutput";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Graphical Proximity | Digital Growth Agency — India",
  description:
    "Graphical Proximity helps businesses across India grow online through performance marketing, SEO, web design, branding, social media, and AI automation. Get visible. Get leads. Get results.",
  alternates: {
    canonical: "https://www.graphicalproximity.com",
  },
  openGraph: {
    title: "Graphical Proximity | Digital Growth Agency — India",
    description:
      "Performance marketing, SEO, web design, branding, and AI automation. We help local and national businesses dominate online.",
    url: "https://www.graphicalproximity.com",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.graphicalproximity.com/#webpage",
  url: "https://www.graphicalproximity.com",
  name: "Graphical Proximity | Digital Growth Agency — India",
  description:
    "Full-service digital growth agency helping businesses get visible, attract leads, and grow online through performance marketing, SEO, web design, branding, and AI automation.",
  isPartOf: { "@id": "https://www.graphicalproximity.com/#website" },
  about: { "@id": "https://www.graphicalproximity.com/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.graphicalproximity.com",
      },
    ],
  },
};

// ── Sitelinks schema — shows About, Services, Clients, Contact under homepage ──
const siteLinksSchema = {
  "@context": "https://schema.org",
  "@type": "SiteLinksSearchBox",
  url: "https://www.graphicalproximity.com",
  potentialAction: [
    {
      "@type": "ViewAction",
      name: "About Us",
      target: "https://www.graphicalproximity.com/about",
    },
    {
      "@type": "ViewAction",
      name: "Services",
      target: "https://www.graphicalproximity.com/services",
    },
    {
      "@type": "ViewAction",
      name: "Clients",
      target: "https://www.graphicalproximity.com/clients",
    },
    {
      "@type": "ViewAction",
      name: "Get in Touch",
      target: "https://www.graphicalproximity.com/get-intouch-form",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLinksSchema) }}
      />
      <MainOutput />
    </>
  );
}