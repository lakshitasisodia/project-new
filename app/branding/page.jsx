// FILE: app/branding/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Brand Identity & Design",
  description:
    "Logo, visual identity, brand guidelines, and positioning — designed to be distinct, consistent, and built to last. Graphical Proximity creates brand identity systems for businesses across India.",
  alternates: { canonical: "https://www.graphicalproximity.com/branding" },
  openGraph: {
    title: "Brand Identity & Design",
    description: "Logo, visual system, positioning, and guidelines. Built to be remembered.",
    url: "https://www.graphicalproximity.com/branding",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const brandingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/branding/#service",
  name: "Brand Identity & Design",
  url: "https://www.graphicalproximity.com/branding",
  description:
    "Logo design, visual identity systems, brand guidelines, colour and typography, and brand positioning — built to create instant recognition and long-term competitive advantage.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Brand Identity Design",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Brand Identity & Design", item: "https://www.graphicalproximity.com/branding" },
    ],
  },
};

const brandingHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Brand Identity Service — Key Topics",
  url: "https://www.graphicalproximity.com/branding",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "What Is Brand Identity and Why Does It Matter?" },
    { "@type": "ListItem", position: 2, name: "What a Strong Brand Identity Includes" },
    { "@type": "ListItem", position: 3, name: "How We Build Your Brand" },
    { "@type": "ListItem", position: 4, name: "What You Receive" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const brandingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a brand identity package include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A brand identity package from Graphical Proximity includes logo design (primary, secondary, and icon variants), colour palette, typography system, brand voice guidelines, and a brand style guide you can share with any designer, printer, or marketer.",
      },
    },
    {
      "@type": "Question",
      name: "How is brand identity different from a logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A logo is one element of a brand identity. Brand identity is the complete visual and verbal system — logo, colours, fonts, imagery style, tone of voice, and positioning — that makes your business instantly recognisable and consistently communicated across every touchpoint.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a brand identity project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard brand identity project takes 2–4 weeks from brief to final delivery. Timeline depends on the scope — logo only, full identity system, or brand guidelines document. We set a clear timeline and milestone schedule at kickoff.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do brand identity for new businesses or only rebrands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We work with new businesses that need a complete identity from scratch, and with established businesses that need a rebrand to better reflect their current position, audience, and growth ambitions.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingFAQSchema) }} />
      <ServicePage serviceKey="branding" />
    </>
  );
}