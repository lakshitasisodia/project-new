// FILE: app/services/branding/brand-audit/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "Brand Audit Services | Diagnose Before You Rebuild | Graphical Proximity",
  description:
    "A structured brand audit — visual identity, messaging, and consistency evaluated and delivered as a prioritised report. Often the right first step before a full identity project.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/branding/brand-audit" },
  openGraph: {
    title: "Brand Audit | Graphical Proximity",
    description: "A structured evaluation of your current brand, delivered as a clear, prioritised report.",
    url: "https://www.graphicalproximity.com/services/branding/brand-audit",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/branding/brand-audit/#service",
  name: "Brand Audit",
  url: "https://www.graphicalproximity.com/services/branding/brand-audit",
  description: "A structured evaluation of visual identity, messaging, competitive position, and touchpoint consistency, delivered as a prioritised written report.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "Brand Audit",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "Branding", item: "https://www.graphicalproximity.com/services/branding" },
      { "@type": "ListItem", position: 4, name: "Brand Audit", item: "https://www.graphicalproximity.com/services/branding/brand-audit" },
    ],
  },
};

const auditFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does a brand audit include design work?", acceptedAnswer: { "@type": "Answer", text: "No — it's a diagnostic report. Any resulting design work is scoped separately as a Brand Identity Design project." } },
    { "@type": "Question", name: "How is this priced?", acceptedAnswer: { "@type": "Answer", text: "It isn't a fixed package tier — cost depends on how many touchpoints exist to review, and is discussed directly based on your specific brand." } },
    { "@type": "Question", name: "Do I have to move into a full rebrand afterward?", acceptedAnswer: { "@type": "Answer", text: "No. The audit stands alone. Many businesses use it purely for clarity and implement the fixes themselves." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(auditFAQSchema) }} />
      <ServicePage serviceKey="branding-brand-audit" />
    </>
  );
}
