import AboutOutput from "@/components/AboutOutput";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "About Graphical Proximity",
  description:
    "Learn about Graphical Proximity, its founder Lakashita Sisodia, and our approach to SEO, web design, branding, performance marketing and AI.",
  alternates: {
    canonical: "https://www.graphicalproximity.com/about",
  },
  openGraph: {
    title: "About Graphical Proximity | Digital Growth Agency — India",
    description:
      "We help local and national businesses dominate online through SEO, performance marketing, web design, branding, and AI automation. Built on results, not promises.",
    url: "https://www.graphicalproximity.com/about",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.graphicalproximity.com/about/#webpage",
  url: "https://www.graphicalproximity.com/about",
  name: "About Graphical Proximity",
  description:
    "Graphical Proximity is a full-service digital growth agency in India, founded by Lakashita Sisodia, helping businesses get visible, attract clients, and grow through performance marketing, SEO, web design, branding, and AI automation.",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.graphicalproximity.com/about",
      },
    ],
  },
};

// ── Sitelinks — shown under /about in search results ─────────────────────────
const aboutSitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Quick Links from About Page",
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
    {
      "@type": "ListItem",
      position: 4,
      name: "Get in Touch",
      url: "https://www.graphicalproximity.com/get-intouch-form",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSitelinksSchema) }}
      />
      <AboutOutput />
    </>
  );
}