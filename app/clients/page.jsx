import ClientOutput from "@/components/ClientOutput";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Client Results | Real Businesses. Real Growth.",
  description:
    "See the real results Graphical Proximity has delivered — from zero digital presence to first-page Google rankings, YouTube monetisation, and first client enquiries within days of launch.",
  alternates: {
    canonical: "https://www.graphicalproximity.com/clients",
  },
  openGraph: {
    title: "Client Results — Real Businesses. Real Growth.",
    description:
      "From construction businesses to YouTube creators — see what Graphical Proximity has built across SEO, web development, paid ads, and branding.",
    url: "https://www.graphicalproximity.com/clients",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
const clientsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.graphicalproximity.com/clients/#webpage",
  url: "https://www.graphicalproximity.com/clients",
  name: "Client Results — Real Businesses. Real Growth.",
  description:
    "Proof of real results delivered by Graphical Proximity across SEO, web development, performance marketing, and YouTube strategy.",
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
        name: "Client Results",
        item: "https://www.graphicalproximity.com/clients",
      },
    ],
  },
};

// ── Review schema — real testimonials ────────────────────────────────────────
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.graphicalproximity.com/#organization",
  name: "Graphical Proximity",
  url: "https://www.graphicalproximity.com",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Maa Bartala Construction" },
      reviewBody:
        "We went from zero online presence to appearing on Google for local searches. Real results, not just reports.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Pawan Gupta" },
      reviewBody:
        "My channel finally had structure. Engagement improved steadily and monetisation became achievable.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jonathan Martinez" },
      reviewBody:
        "Clear communication throughout, delivered on time. The platform is now fast, modern, and measurably better.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Anil Singh" },
      reviewBody:
        "Website was live in 3 weeks. First client enquiry came in week one — exactly what I needed to launch.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
  },
};

// ── Sitelinks — shown under /clients in search results ───────────────────────
const clientsSitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Quick Links from Clients Page",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsSitelinksSchema) }}
      />
      <ClientOutput />
    </>
  );
}