// FILE: app/ai-integration/page.jsx

import ServicePage from "@/components/ServicePage";

export const metadata = {
  title: "AI Integration & Marketing Automation Agency India",
  description:
    "Get AI automation for your business with lead capture, CRM workflows, content pipelines and reporting systems built around your needs.",
  alternates: { canonical: "https://www.graphicalproximity.com/ai-integration" },
  openGraph: {
    title: "AI Integration & Marketing Automation",
    description: "Automate workflows. Scale content output. Move faster without hiring.",
    url: "https://www.graphicalproximity.com/ai-integration",
    images: [{ url: "https://www.graphicalproximity.com/og-image.jpg" }],
  },
};

const aiSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.graphicalproximity.com/ai-integration/#service",
  name: "AI Integration & Marketing Automation Agency India",
  url: "https://www.graphicalproximity.com/ai-integration",
  description:
    "CRM setup, lead capture automation, follow-up sequences, content pipelines, and AI-powered workflow automation using tools like Make, Zapier, GoHighLevel, and Claude AI. ",
  provider: { "@id": "https://www.graphicalproximity.com/#organization" },
  areaServed: "IN",
  serviceType: "AI Marketing Automation and System Integration",
  offers: { "@type": "Offer", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.graphicalproximity.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.graphicalproximity.com/services" },
      { "@type": "ListItem", position: 3, name: "AI Integration", item: "https://www.graphicalproximity.com/ai-integration" },
    ],
  },
};

const aiHeadingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Integration Service — Key Topics",
  url: "https://www.graphicalproximity.com/ai-integration",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "What Is AI Marketing Automation and Why Does It Matter?" },
    { "@type": "ListItem", position: 2, name: "What Can Be Automated — Lead Follow-Up, Content, and Reporting" },
    { "@type": "ListItem", position: 3, name: "Tools We Use — Make, Zapier, GoHighLevel, Claude AI" },
    { "@type": "ListItem", position: 4, name: "How We Set Up Your Automation System" },
    { "@type": "ListItem", position: 5, name: "Frequently Asked Questions" },
  ],
};

const aiFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What marketing processes can be automated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lead follow-up sequences, CRM pipeline management, content scheduling, monthly report generation, form-to-CRM sync, DM sequences, email drips, and cross-posting across platforms are all automatable. We identify the highest-impact opportunities for your business in the discovery call.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use for automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily use Make (formerly Integromat), Zapier, GoHighLevel, and Claude AI. Tool selection depends on your existing tech stack, budget, and complexity of workflows required.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical knowledge to use the automations you set up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We set everything up, document how each workflow functions, and train you or your team on how to manage it. The goal is systems that run without you needing to touch them — and are easy to oversee when you do.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI replace my marketing team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI augments your team — it does not replace human strategy and relationship management. It handles repetitive, time-consuming tasks so your team focuses on high-value work. For small businesses with no marketing team, AI automation fills critical operational gaps without the cost of full-time hires.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up marketing automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full automation setup — CRM, lead capture, follow-up sequences, and cross-tool integrations — typically takes 2–4 weeks. Simpler workflows like form-to-CRM or email triggers can be live within days.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiHeadingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFAQSchema) }} />
      <ServicePage serviceKey="ai-integration" />
    </>
  );
}