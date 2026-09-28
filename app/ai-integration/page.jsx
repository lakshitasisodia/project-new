// FILE: app/services/ai-integration/page.jsx
// Nested duplicate-topic page, Option A. Same slug text as the flat
// /ai-integration page but a distinct URL path (/services/ai-integration).

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "AI Integration Services | Inside Our Services Architecture | Graphical Proximity",
  description:
    "AI integration and marketing automation, presented inside the full services architecture. See the main AI Integration page for the complete process and FAQ.",
  alternates: { canonical: "https://www.graphicalproximity.com/services/ai-integration" },
  openGraph: {
    title: "AI Integration | Graphical Proximity",
    description: "Automate workflows. Scale content output. Move faster without hiring.",
    url: "https://www.graphicalproximity.com/services/ai-integration",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const nestedAISchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/services/ai-integration/#service",
  name: "AI Integration",
  url: "https://www.graphicalproximity.com/services/ai-integration",
  description: "AI-powered marketing automation and workflow integration, presented inside the services architecture. Full detail on the main AI Integration page.",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "AI Marketing Automation and System Integration",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "AI Integration", item: "https://www.graphicalproximity.com/services/ai-integration" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(nestedAISchema) }} />
      <ServicePage serviceKey="services-ai-integration" />
    </>
  );
}
