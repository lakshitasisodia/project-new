// components/data/serviceHubData.js
//
// Content for the new /services/<hub> parent pages. Additive, standalone file —
// does not touch servicesData.js. Each entry powers one hub page rendered by
// components/ServiceHubPage.jsx.
//
// Batch 1 scope: only the "seo" hub. Further hubs (performance-marketing,
// social-media, branding, digital-pr, website-design-development,
// personal-branding, ai-integration) are added in later batches.

const serviceHubData = {
  seo: {
    title: "SEO",
    label: "SEO by Specialty",
    heading: "SEO, Broken Down by What Actually Moves Rankings.",
    subtitle:
      "SEO isn't one thing. Technical fixes, local visibility, e-commerce structure, and how AI search engines cite you are four different disciplines with four different playbooks. This hub breaks SEO into its specialties — dig into the one your business needs most, or see the full retainer on our main SEO Services page.",
    intro:
      "\"SEO\" gets used as a catch-all, but a technical audit, a local Google Business Profile push, an e-commerce category-page restructure, and getting cited correctly by AI search tools are four different jobs requiring four different approaches. This hub exists to let you go deep on the specific SEO problem you actually have, rather than reading one generic page. Every specialty below rolls up into the full SEO retainer we run on the main SEO Services page — start here if you want to understand the piece that matters most for your business first.",
    quote: "Generic SEO advice fixes nothing. The right fix depends on which SEO problem you actually have.",
    flatPageHref: "/seo-services",
    flatPageLabel: "See the Full SEO Retainer",
    children: [
      {
        slug: "technical-seo",
        title: "Technical SEO",
        sub: "The foundation — page speed, crawlability, mobile performance, and structured data. Fix this first.",
        status: "live",
      },
      {
        slug: "local-seo",
        title: "Local SEO",
        sub: "Google Business Profile, citations, reviews, and map-pack rankings for businesses that serve a specific city or area.",
        status: "live",
      },
      {
        slug: "ecommerce-seo",
        title: "E-Commerce SEO",
        sub: "Product and category page architecture, schema, and internal linking built to rank purchase-intent keywords.",
        status: "live",
      },
      {
        slug: "geo-aeo",
        title: "GEO / AEO",
        sub: "Getting cited correctly by ChatGPT, Google AI Overviews, and Perplexity — the newest layer of search visibility.",
        status: "live",
      },
    ],
  },

  "performance-marketing": {
    title: "Performance Marketing",
    label: "Performance Marketing by Platform",
    heading: "Google Ads or Meta Ads? See Both, Then Decide.",
    subtitle:
      "Google captures people already searching. Meta creates demand in people who aren't searching yet. Most accounts need a mix — this hub breaks down each platform on its own so you can see how they differ before committing budget.",
    intro:
      "Google Ads and Meta Ads solve different problems and are often talked about as if they're interchangeable — they aren't. Google Search ads meet people at the exact moment they're searching for what you offer. Meta Ads create that demand in the first place, using audience targeting instead of search intent. This hub gives each platform its own page so you can see the mechanics, the audience fit, and the trade-offs clearly. Everything here rolls up into the combined retainer on the main Performance Marketing page.",
    quote: "Google meets intent. Meta creates it. Most businesses need both, in the right proportion.",
    flatPageHref: "/performance-marketing",
    flatPageLabel: "See the Full Performance Marketing Retainer",
    children: [
      {
        slug: "google-ads",
        title: "Google Ads",
        sub: "Search, Performance Max, and Display — capturing people already searching for what you offer.",
        status: "live",
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        sub: "Facebook and Instagram campaigns built on audience targeting and creative that stops the scroll.",
        status: "live",
      },
    ],
  },
};

export default serviceHubData;
