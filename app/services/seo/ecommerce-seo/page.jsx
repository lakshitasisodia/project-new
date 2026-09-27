// FILE: app/services/seo/ecommerce-seo/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "E-Commerce SEO Services | Product & Category Page Optimisation | Graphical Proximity",
  description:
    "E-commerce SEO — category architecture, product page optimisation, and Product/Review schema built to rank purchase-intent keywords, not just traffic. Serving online stores across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/seo/ecommerce-seo" },
  openGraph: {
    title: "E-Commerce SEO Services | Graphical Proximity",
    description: "Category architecture, product page optimisation, and schema markup built to rank the pages that sell.",
    url: "https://www.graphicalproximity.com/services/seo/ecommerce-seo",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const ecommerceSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/seo/ecommerce-seo/#service",
  name: "E-Commerce SEO",
  url: "https://www.graphicalproximity.com/services/seo/ecommerce-seo",
  description:
    "Category and product page architecture, unique product page optimisation, Product and Review schema markup, and internal linking built for purchase-intent keywords.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "E-Commerce Search Engine Optimisation",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.graphicalproximity.com/services/seo" },
      { "@type": "ListItem", position: 4, name: "E-Commerce SEO", item: "https://www.graphicalproximity.com/services/seo/ecommerce-seo" },
    ],
  },
};

const ecommerceSeoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need unique descriptions for every product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For products you want to rank and sell in volume, yes. Duplicated manufacturer descriptions give Google no reason to prefer your listing over competitors using unique copy.",
      },
    },
    {
      "@type": "Question",
      name: "How is e-commerce SEO different from a blog SEO strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blog SEO targets informational keywords across long-form pages. E-commerce SEO targets purchase-intent keywords across product and category pages, with a heavier emphasis on structure and schema.",
      },
    },
    {
      "@type": "Question",
      name: "Does product review schema actually help rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review schema primarily improves click-through rate by showing star ratings in search results, rather than directly boosting rank position.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSeoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceSeoFAQSchema) }} />
      <ServicePage serviceKey="seo-ecommerce-seo" />
    </>
  );
}
