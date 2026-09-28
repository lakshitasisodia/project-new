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

  "social-media": {
    title: "Social Media",
    label: "Social Media by Specialty",
    heading: "Instagram, LinkedIn, or the Strategy Behind Both?",
    subtitle:
      "Instagram management, LinkedIn management, and the strategy layer that decides what either should actually contain — three different jobs. Pick the one that matches where you are.",
    intro:
      "\"Social media management\" gets used as if it's one job across every platform. It isn't — Instagram and LinkedIn have different audiences, different content formats, and different management rhythms, and both depend on a strategy decision (platform, pillars, cadence) that should happen before either starts. This hub splits social media into those three pieces. Everything here rolls up into the combined retainer on the main Social Media Management page.",
    quote: "Instagram and LinkedIn are different jobs wearing the same job title.",
    flatPageHref: "/social-media",
    flatPageLabel: "See the Full Social Media Management Retainer",
    children: [
      {
        slug: "instagram-management",
        title: "Instagram Management",
        sub: "Content calendar, feed posts, reels scripts, and DM handling — consistent presence that converts.",
        status: "live",
      },
      {
        slug: "linkedin-management",
        title: "LinkedIn Management",
        sub: "LinkedIn run inside the same system as Instagram — see the full dedicated service on LinkedIn Personal Branding.",
        status: "live",
      },
      {
        slug: "social-media-optimization",
        title: "Social Media Optimization",
        sub: "The audit and strategy layer before content gets made — platform choice, content pillars, and posting cadence.",
        status: "live",
      },
    ],
  },

  "branding": {
    title: "Branding",
    label: "Branding by Phase",
    heading: "Diagnose First, or Go Straight to Design?",
    subtitle:
      "A brand audit and brand identity design are two different phases — diagnosis, then build. See each on its own page, or the combined process on the main Branding page.",
    intro:
      "Branding work splits naturally into two phases: understanding what's currently wrong or inconsistent (a brand audit), and then actually designing the fix (brand identity design). Businesses unsure whether they need a full rebrand often benefit from starting with the audit alone. Businesses that already know they need new design work can go straight to the build. Everything here rolls up into the combined process on the main Branding page.",
    quote: "You can't design your way out of a problem you haven't diagnosed.",
    flatPageHref: "/branding",
    flatPageLabel: "See the Full Branding Process",
    children: [
      {
        slug: "brand-audit",
        title: "Brand Audit",
        sub: "A structured diagnostic of your current brand, delivered as a prioritised report — often the right first step.",
        status: "live",
      },
      {
        slug: "brand-identity-design",
        title: "Brand Identity Design",
        sub: "Logo, visual system, and guidelines — the actual build, for founders who already know what they need.",
        status: "live",
      },
    ],
  },
};

export default serviceHubData;
