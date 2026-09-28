// components/data/serviceExtensions.js
//
// Additive-only data for the new /services/<hub>/<child> architecture.
// servicesData.js is never imported or modified here — this file is merged
// on top of it inside ServicePage.jsx (`{ ...servicesData, ...serviceExtensions }`).
//
// Two kinds of entries live here:
//   1. Overrides for an EXISTING key (e.g. "seo-services") — only the fields
//      listed are added on top of the original entry; everything else in the
//      original servicesData.js stays exactly as written.
//   2. Brand-new keys for the new nested child pages (e.g. "seo-technical-seo"),
//      shaped identically to every other servicesData.js entry so they render
//      through the same, unmodified ServicePage.jsx template.
//
// Batch 1 scope: /services/seo, /services/seo/technical-seo, /services/seo/local-seo.

import servicesData from "@/components/data/servicesData";

const serviceExtensions = {

  // ── Override: adds a "Go Deeper" link from the existing /seo-services page
  // to the new /services/seo hub. No other field on this entry changes.
  "seo-services": {
    ...servicesData["seo-services"],
    hubLink: {
      href: "/services/seo",
      label: "Explore SEO by specialty: Technical, Local, E-Commerce & GEO/AEO →",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/seo/technical-seo
  // ─────────────────────────────────────────────────────────────────────────
  "seo-technical-seo": {
    title: "Technical SEO",
    heroImage: "",
    hubLink: {
      href: "/services/seo",
      label: "Back to the SEO hub — Local, E-Commerce & GEO/AEO →",
    },
    details: {
      heading: "Technical SEO — The Foundation Every Ranking Depends On",
      subtitle:
        "Technical SEO fixes what Google can't see or can't trust: slow pages, broken crawl paths, missing structured data, and mobile performance issues. Without it, even the best content and backlinks underperform. We audit and fix the technical layer first, so every other SEO investment actually compounds.",
      quote: "You can't out-content a broken foundation. Technical SEO comes first for a reason.",
      image1: "/servicesImg/serviceImgthree.png",
      image2: "/servicesImg/serviceImgeleven.png",
      background: "/servicesImg/serviceImgeight.jpeg",
      intro:
        "Most SEO conversations start with keywords and content. They should start here. Technical SEO is the plumbing of your website — page speed, crawlability, mobile performance, structured data, and indexation. When it's broken, Google struggles to find, understand, or trust your pages, and every other SEO investment underperforms as a result. We run a full technical audit before any content or link-building work begins, so the foundation is solid first.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What Technical SEO Actually Covers",
        content: [
          "Technical SEO is the set of website-level fixes that determine whether Google can efficiently crawl, index, and rank your pages at all — independent of how good your content is. It covers page speed and Core Web Vitals, mobile responsiveness, site architecture and URL structure, XML sitemaps, robots.txt configuration, structured data (schema markup), canonical tags, redirect handling, and crawl error resolution.",
          "Page speed is one of the highest-leverage technical factors. A page that takes 6 seconds to load loses the majority of visitors before it even renders, and Google's Core Web Vitals — Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift — are now direct ranking inputs. We diagnose what's slowing a site down (unoptimised images, render-blocking scripts, poor hosting, bloated code) and fix it at the source.",
          "Crawlability and indexation are the second pillar. If Google's crawler can't reach a page — because of a broken internal link, a misconfigured robots.txt, a missing sitemap entry, or a canonical tag pointing the wrong way — that page effectively doesn't exist in search, no matter how good the content is. We audit crawl paths, fix broken links, and make sure every page that should be indexed actually can be.",
          "Structured data (schema markup) tells Google exactly what a page is about in a format it can parse directly — a service, a review, an FAQ, a business address. It doesn't guarantee rankings on its own, but it is what unlocks rich results (star ratings, FAQ dropdowns, breadcrumbs) in the search results, and it is increasingly what AI-powered search tools use to understand and cite a page correctly.",
          "Technical SEO is invisible when it's done right — visitors never notice it, and neither does anyone reading your homepage copy. But it is the layer that determines whether everything else you invest in — content, backlinks, local SEO — actually gets the chance to rank. Skipping it is the most common reason SEO campaigns underperform relative to the effort put into content.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "A structured technical audit and fix process — the same one we run before starting any SEO retainer.",
        items: [
          { title: "Core Web Vitals Audit", text: "We measure Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift, then fix the specific causes — images, scripts, or hosting — slowing your site down.", icon: "/whatweoffer-img (1).png" },
          { title: "Crawlability & Indexation", text: "We audit robots.txt, XML sitemaps, canonical tags, and internal link structure to make sure Google can find and index every page that should rank.", icon: "/whatweoffer-img (2).png" },
          { title: "Mobile Optimisation", text: "Since most search traffic and all of Google's indexing is mobile-first, we verify and fix mobile rendering, tap targets, and responsive layout issues.", icon: "/whatweoffer-img (3).png" },
          { title: "Structured Data / Schema Markup", text: "We implement Service, FAQ, Review, and Breadcrumb schema so Google — and AI search tools — can parse your pages correctly and surface rich results.", icon: "/whatweoffer-img (9).png" },
          { title: "Site Architecture & URL Structure", text: "We fix messy URL structures, redirect chains, and duplicate-content issues that dilute ranking signal across near-identical pages.", icon: "/whatweoffer-img (6).png" },
          { title: "Ongoing Technical Monitoring", text: "As part of the SEO retainer, we re-check technical health monthly — new crawl errors, speed regressions, or broken links are caught before they cost rankings.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Technical SEO",
        misconception:
          "Most businesses think SEO starts with keywords and content. It doesn't. Content published on a technically broken site rarely ranks — the technical layer has to be fixed first.",
        faqs: [
          { question: "Do I need technical SEO if my content is already good?", answer: "Yes. Good content on a slow, poorly-structured, or partially-unindexed site consistently underperforms the same content on a technically sound site. Technical SEO is what lets your content compete at all." },
          { question: "How do I know if my site has technical SEO problems?", answer: "Common signs: slow load times, pages missing from Google search results, inconsistent rankings, or a mobile experience that feels different from desktop. We run a full audit as the first step of any SEO engagement to identify the specific issues." },
          { question: "Is technical SEO a one-time fix?", answer: "The initial audit and fix is a project, but technical health needs monitoring — new pages, plugins, or content updates can reintroduce speed or crawl issues. It's included as an ongoing part of our SEO retainer, not a one-off." },
          { question: "Does technical SEO alone get me to page one?", answer: "No. Technical SEO removes the barriers to ranking — it doesn't replace content, keyword targeting, or backlinks. Think of it as the foundation the rest of the SEO strategy is built on." },
        ],
        image: "/servicesImg/serviceImgfour.jpg",
        tagline: "Fix the Foundation First.",
        subtitle: "Technical SEO clears the path so every other ranking signal can actually work.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/seo/local-seo
  // ─────────────────────────────────────────────────────────────────────────
  "seo-local-seo": {
    title: "Local SEO",
    heroImage: "",
    hubLink: {
      href: "/services/seo",
      label: "Back to the SEO hub — Technical, E-Commerce & GEO/AEO →",
    },
    details: {
      heading: "Local SEO — Rank Where Your Actual Customers Are Searching",
      subtitle:
        "When someone searches for a service 'near me' or in a specific city, Google prioritises businesses with strong local signals — an optimised Google Business Profile, consistent citations, and real reviews. For local businesses, this is often the fastest path to page-one visibility and qualified enquiries.",
      quote: "National rankings are a long game. Local rankings can move in weeks.",
      image1: "/servicesImg/serviceImgeleven.png",
      image2: "/servicesImg/serviceImgthree.png",
      background: "/servicesImg/serviceImgeight.jpeg",
      intro:
        "Most of your customers aren't searching nationally — they're searching in their own city, for a business near them, right now. Local SEO is the discipline of making sure your business shows up in that exact moment: in the Google Maps 3-pack, in 'near me' searches, and in location-qualified results. It combines Google Business Profile optimisation, consistent local citations, review management, and location-specific on-page content into one system built to win local search.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What Local SEO Covers — And Why It Moves Faster Than National SEO",
        content: [
          "Local SEO is the practice of optimising your online presence to rank for searches tied to a specific location — 'gym near me', 'digital marketing agency Kolkata', or 'restaurant in [neighbourhood]'. It draws on a different set of ranking signals than national SEO: proximity, Google Business Profile completeness, citation consistency, and review volume and quality matter more here than raw domain authority.",
          "Google Business Profile (formerly Google My Business) is the single highest-leverage local SEO asset. A complete, actively-managed profile — accurate categories, business hours, photos, services listed, and a steady flow of responded-to reviews — is what determines whether you appear in the Google Maps 3-pack, the small block of local results shown above the standard organic listings for local-intent searches.",
          "Citations — consistent listings of your business name, address, and phone number (NAP) across directories like Justdial, Sulekha, industry-specific listings, and general business directories — reinforce to Google that your business is real, established, and located where you say it is. Inconsistent NAP data across the web is one of the most common reasons local rankings underperform.",
          "Reviews function as both a ranking signal and a trust signal. Google factors review volume, recency, and rating into local rankings, and prospective customers factor them into their decision to call. A structured system for requesting, monitoring, and responding to reviews compounds over time — both for rankings and for conversion.",
          "Local SEO typically moves faster than national SEO because the competitive set is smaller — you're competing against other businesses in your city or neighbourhood, not the entire country. Profile improvements are often visible within 30 days, and consistent local SEO work compounds into a durable local-search advantage that's hard for a new competitor to displace quickly.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "A complete local SEO system — profile, citations, reviews, and location content working together.",
        items: [
          { title: "Google Business Profile Optimisation", text: "We complete and optimise every field — categories, services, hours, photos, Q&A — and keep the profile actively updated so it performs as a ranking asset, not a dormant listing.", icon: "/whatweoffer-img (2).png" },
          { title: "Local Citation Building", text: "We build and correct consistent NAP listings across relevant directories, fixing conflicting or outdated data that undermines local ranking signals.", icon: "/whatweoffer-img (6).png" },
          { title: "Review Generation & Management", text: "We set up a system for requesting reviews from happy clients and respond to every review that comes in — building both ranking signal and visible trust.", icon: "/whatweoffer-img (10).png" },
          { title: "Location-Qualified On-Page Content", text: "We write service and landing page content that clearly signals the specific city or area you serve, matching how real local searches are phrased.", icon: "/whatweoffer-img (5).png" },
          { title: "Local Schema Markup", text: "We implement LocalBusiness structured data so Google can parse your address, service area, and hours directly, supporting both classic and map-pack rankings.", icon: "/whatweoffer-img (9).png" },
          { title: "Monthly Local Performance Reporting", text: "We track Google Business Profile views, map-pack rankings, and review growth every month, so local SEO progress is visible, not assumed.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Local SEO",
        misconception:
          "Most businesses think a Google Business Profile listing is enough on its own. In reality, an unoptimised, inactive profile ranks worse than a competitor's fully-optimised one — completeness and activity both matter.",
        faqs: [
          { question: "How is local SEO different from regular SEO?", answer: "Regular SEO competes for national or topic-wide rankings. Local SEO targets location-specific searches and relies more heavily on Google Business Profile strength, citation consistency, and reviews than on domain-wide authority." },
          { question: "How fast does local SEO show results?", answer: "Google Business Profile improvements are often visible within 30 days. Map-pack ranking movement typically follows within 60–90 days of consistent local SEO work, faster than most national SEO timelines because the competitive set is smaller." },
          { question: "Do I need a physical address to benefit from local SEO?", answer: "A verifiable business address strengthens local SEO significantly, but service-area businesses without a public storefront can still rank locally using a defined service area on their Google Business Profile." },
          { question: "How many reviews do I need to rank well locally?", answer: "There's no fixed threshold — review count matters, but so does recency, rating, and how well you respond to them. A steady stream of recent, responded-to reviews consistently outperforms a large but stagnant review count." },
        ],
        image: "/servicesImg/serviceImgtwo.jpg",
        tagline: "Be Found Nearby.",
        subtitle: "Local SEO turns 'near me' searches into enquiries from customers already close to you.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/seo/ecommerce-seo
  // ─────────────────────────────────────────────────────────────────────────
  "seo-ecommerce-seo": {
    title: "E-Commerce SEO",
    heroImage: "",
    hubLink: {
      href: "/services/seo",
      label: "Back to the SEO hub — Technical, Local & GEO/AEO →",
    },
    details: {
      heading: "E-Commerce SEO — Rank Product and Category Pages That Actually Sell",
      subtitle:
        "E-commerce SEO is a different discipline from standard SEO — it's built around product pages, category architecture, and purchase-intent keywords rather than blog traffic. We structure your store so Google can crawl it, rank it, and send buyers, not just browsers.",
      quote: "A category page that ranks for a browsing keyword is traffic. A product page that ranks for a buying keyword is revenue.",
      image1: "/servicesImg/serviceImgsix.jpg",
      image2: "/servicesImg/serviceImgseven.webp",
      background: "/servicesImg/serviceImgthirteen.png",
      intro:
        "Standard SEO optimises for informational search — someone researching a topic. E-commerce SEO optimises for transactional search — someone ready to buy. That difference changes everything about the approach: product page structure, category architecture, schema markup for products and reviews, and internal linking all need to be built specifically to rank purchase-intent keywords and convert the traffic that finds them.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What Makes E-Commerce SEO Different",
        content: [
          "E-commerce SEO applies SEO principles to online stores, but the priorities shift. Instead of optimising a handful of blog posts, you're optimising potentially hundreds or thousands of product and category pages, each competing for its own set of purchase-intent keywords. The scale alone requires a more systematic approach than standard content SEO.",
          "Category page architecture is the backbone of e-commerce SEO. A well-structured category hierarchy — clear parent and subcategories, logical URL paths, and internal linking that flows from broad categories down to specific products — helps Google understand what you sell and helps shoppers actually find it. A flat or confusing structure buries products that should be ranking.",
          "Product page optimisation covers title tags, descriptions, and structured data written for both search engines and buyers: unique product descriptions (not manufacturer copy-paste, which Google treats as duplicate content), clear pricing and availability, and Product schema markup that can trigger rich results — star ratings, price, and stock status — directly in the search results.",
          "Reviews and schema markup compound here more than almost anywhere else in SEO. Product review schema can surface star ratings directly in Google's search results, which measurably increases click-through rate. Combined with a steady stream of genuine reviews, this is one of the highest-leverage e-commerce SEO levers available.",
          "Internal linking between related products, category pages, and buying guides spreads ranking signal across the catalog and keeps shoppers moving toward checkout instead of hitting a dead end. E-commerce SEO done well isn't just about ranking — it's about ranking the pages that are one click from a sale.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Store structure, product-page optimisation, and schema — built to rank and convert purchase-intent traffic.",
        items: [
          { title: "Category Architecture", text: "We map and rebuild category and subcategory structure so Google can crawl the full catalog and shoppers can navigate it intuitively.", icon: "/whatweoffer-img (2).png" },
          { title: "Product Page Optimisation", text: "Unique titles, descriptions, and on-page structure written to rank for purchase-intent keywords — never manufacturer copy-paste.", icon: "/whatweoffer-img (5).png" },
          { title: "Product & Review Schema", text: "We implement Product and Review structured data to unlock star-rating rich results and give shoppers a reason to click your listing over a competitor's.", icon: "/whatweoffer-img (9).png" },
          { title: "Internal Linking Strategy", text: "We build internal links between related products, categories, and guides that spread ranking signal and keep shoppers moving toward checkout.", icon: "/whatweoffer-img (6).png" },
          { title: "Purchase-Intent Keyword Mapping", text: "We map transactional keywords to the specific product and category pages built to convert them, avoiding cannibalisation across similar listings.", icon: "/whatweoffer-img (3).png" },
          { title: "Technical Foundation for Scale", text: "Faceted navigation, pagination, and duplicate-content handling — the technical issues that specifically break large product catalogs at scale.", icon: "/whatweoffer-img (1).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About E-Commerce SEO",
        misconception:
          "Most stores think uploading products with manufacturer descriptions is enough. Google treats duplicate manufacturer copy as low-value content — it rarely ranks against competitors using unique descriptions.",
        faqs: [
          { question: "Do I need unique descriptions for every product?", answer: "For products you want to rank and sell in volume, yes. Manufacturer descriptions duplicated across many stores give Google no reason to prefer your listing." },
          { question: "How is e-commerce SEO different from a blog SEO strategy?", answer: "Blog SEO targets informational keywords across a smaller set of long-form pages. E-commerce SEO targets purchase-intent keywords across potentially hundreds of product and category pages, with a much heavier emphasis on structure and schema." },
          { question: "Does product review schema actually help rankings?", answer: "Review schema primarily improves click-through rate by showing star ratings in search results, rather than directly boosting rank position — but higher click-through rate is itself a positive signal over time." },
        ],
        image: "/servicesImg/serviceImgnine.jpeg",
        tagline: "Rank the Pages That Sell.",
        subtitle: "E-commerce SEO built around purchase intent, not just traffic volume.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/seo/geo-aeo
  // ─────────────────────────────────────────────────────────────────────────
  "seo-geo-aeo": {
    title: "GEO / AEO",
    heroImage: "",
    hubLink: {
      href: "/services/seo",
      label: "Back to the SEO hub — Technical, Local & E-Commerce →",
    },
    details: {
      heading: "GEO & AEO — Getting Cited by AI Search, Not Just Ranked by Google",
      subtitle:
        "A growing share of buying journeys now start inside ChatGPT, Google AI Overviews, or Perplexity instead of ten blue links. Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) is the discipline of making sure your business is the one these tools cite.",
      quote: "Classic SEO gets you ranked. GEO/AEO gets you quoted.",
      image1: "/servicesImg/serviceImgfour.jpg",
      image2: "/servicesImg/serviceImgone.jpg",
      background: "/servicesImg/serviceImgeleven.png",
      intro:
        "AI search tools answer questions directly instead of returning a list of links — and they choose which sources to cite based on different signals than classic Google ranking factors: concrete, sourced statistics, clear direct quotes from named experts, well-structured Q&A content, and consistent entity information across the web. GEO/AEO is the practice of shaping your content and structured data so these systems can find, trust, and cite your business by name.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What GEO/AEO Covers and Why It's a Distinct Discipline From Classic SEO",
        content: [
          "Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO) describe the emerging practice of optimising content so AI systems — ChatGPT, Google's AI Overviews, Perplexity, and similar tools — surface and cite it when answering a user's question directly, rather than only returning a ranked list of links. This is a distinct discipline from classic SEO because the selection mechanism is different: these systems synthesise an answer from multiple sources and choose which ones to name.",
          "Current research and public guidance from these platforms point to a consistent pattern: AI systems favour content containing concrete statistics with a clear, checkable source; direct quotes attributable to a named person; explicit, well-structured answers to specific questions; and consistent entity information (who you are, what you do, where you're based) that can be cross-referenced across your website, schema markup, and other public profiles.",
          "FAQ-style content is particularly well-suited to AEO because it is already structured as a direct question paired with a direct answer — the exact shape AI systems extract from most easily. Content that buries the answer inside long, unstructured paragraphs is harder for these systems to lift cleanly, even if the underlying information is accurate and useful.",
          "Structured data plays a larger role here than in classic SEO. FAQPage, Service, and Organization schema give AI systems a machine-readable version of your content to parse directly, rather than relying entirely on natural-language extraction. Keeping this schema accurate and consistent with your visible page content is one of the highest-leverage GEO/AEO actions available.",
          "Entity consistency — your business name, founder name, credentials, and address matching exactly across your website, schema markup, Google Business Profile, and any other public profiles — increasingly determines whether AI systems resolve who you are with confidence before deciding whether to cite you at all. Inconsistent or conflicting information across these sources works against you here even more than it does in classic local SEO.",
          "This is a young and fast-moving field. We treat GEO/AEO as a layer added on top of solid classic SEO and technical foundations — not a replacement for either — and update our approach as these platforms publish more about how they select and cite sources.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Structuring content and entity data so AI search tools can find, trust, and cite your business.",
        items: [
          { title: "Structured Q&A Content", text: "We turn key topics into direct, well-structured question-and-answer content — the format AI systems extract from most cleanly.", icon: "/whatweoffer-img (5).png" },
          { title: "FAQ & Service Schema", text: "We implement and keep accurate FAQPage, Service, and Organization structured data, giving AI systems a machine-readable version of your content.", icon: "/whatweoffer-img (9).png" },
          { title: "Numbers-Led, Sourced Content", text: "We rewrite key pages to include concrete, checkable statistics and named-expert quotes — the content type GEO research consistently points to.", icon: "/whatweoffer-img (10).png" },
          { title: "Entity Consistency Audit", text: "We check and align your business name, founder details, and address across your site, schema, Google Business Profile, and other public profiles.", icon: "/whatweoffer-img (2).png" },
          { title: "AI-Citation Monitoring", text: "We periodically check how and whether your business is being surfaced or cited in ChatGPT, AI Overviews, and Perplexity for relevant queries.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About GEO/AEO",
        misconception:
          "Most businesses assume ranking well on Google automatically means being cited by AI search tools. The two overlap but are not the same thing — AI systems weigh sourced facts, direct quotes, and structured Q&A content more heavily than classic keyword ranking factors.",
        faqs: [
          { question: "Is GEO/AEO a replacement for classic SEO?", answer: "No. It's an additional layer built on top of solid technical and content SEO — strong classic SEO remains the foundation, and GEO/AEO adds the structure and citation signals AI systems specifically look for." },
          { question: "Can you guarantee my business gets cited by ChatGPT or AI Overviews?", answer: "No ethical agency can guarantee citation by a third-party AI system whose selection process isn't fully public. We can guarantee a structured, evidence-based approach aligned with what current public guidance and research indicate these systems favour." },
          { question: "How do you measure GEO/AEO progress?", answer: "We periodically test relevant queries across ChatGPT, Google AI Overviews, and Perplexity to check whether and how your business is being surfaced, alongside the underlying content and schema work completed each month." },
        ],
        image: "/servicesImg/serviceImgtwelve.jpeg",
        tagline: "Be the Cited Source.",
        subtitle: "Structured for the way AI search actually selects and quotes its sources.",
      },
    ],
  },

  // ── Override: adds a "Go Deeper" link from the existing /performance-marketing
  // page to the new /services/performance-marketing hub. No other field changes.
  "performance-marketing": {
    ...servicesData["performance-marketing"],
    hubLink: {
      href: "/services/performance-marketing",
      label: "Explore Performance Marketing by Platform: Google Ads & Meta Ads →",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/performance-marketing/google-ads
  // ─────────────────────────────────────────────────────────────────────────
  "performance-marketing-google-ads": {
    title: "Google Ads Management",
    heroImage: "",
    hubLink: {
      href: "/services/performance-marketing",
      label: "Back to Performance Marketing — Meta Ads →",
    },
    details: {
      heading: "Google Ads — Capture Demand That Already Exists",
      subtitle:
        "Google Ads places your business in front of people actively searching for exactly what you offer, right now. We build Search, Performance Max, and Display campaigns around a clear conversion goal, tracked to the rupee.",
      quote: "Google Ads doesn't create demand. It captures the demand that's already searching for you.",
      image1: "/servicesImg/serviceImgsix.jpg",
      image2: "/servicesImg/serviceImgthirteen.png",
      background: "/servicesImg/serviceImgseven.webp",
      intro:
        "When someone searches 'best gym near me' or 'web design agency India', Google Search ads put your business at the top of those results before any organic listing gets the chance. That high-intent traffic converts at a meaningfully higher rate than cold social traffic, because the prospect is already in a buying mindset — the job is to be there, clearly, when they search.",
    },
    sections: [
      {
        type: "whatIs",
        title: "How Google Ads Works and Why Search Intent Changes Everything",
        content: [
          "Google Ads operates on an auction system tied to search intent: when someone searches a keyword you're targeting, your ad competes with others for placement based on bid, ad quality, and relevance. Unlike social advertising, which interrupts someone mid-scroll, Google Search ads meet someone at the exact moment they've expressed a need — which is why intent-based advertising consistently outperforms interruption-based advertising on cost-efficiency and conversion rate.",
          "Search campaigns are the core of most Google Ads accounts — text ads triggered by specific keyword searches, built around tightly grouped ad groups so each ad matches the exact intent of the keywords triggering it. Performance Max campaigns extend reach across Google's full inventory (Search, Display, YouTube, Gmail, Discover) from a single campaign, using Google's automation to find conversions across placements. Display ads build awareness and support retargeting across the web.",
          "Campaign structure determines cost-efficiency more than budget size does. Tightly themed ad groups, negative keywords that filter out irrelevant searches, and ad copy that speaks directly to the specific keyword's intent all reduce wasted spend and improve Quality Score, which in turn lowers cost per click. A poorly structured account burns budget on searches that were never going to convert.",
          "Conversion tracking has to be correct before optimisation means anything. Without accurate tracking of leads, calls, or purchases attributed to specific keywords and ads, campaign decisions are guesses. We set up Google Analytics 4 and conversion actions at the start of every engagement so every rupee of spend can be traced to an outcome.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Search, Performance Max, and Display — built around a clear conversion goal and tracked in full.",
        items: [
          { title: "Search Campaign Setup", text: "Keyword research, tightly themed ad groups, and ad copy built around high-intent searches for what you actually offer.", icon: "/whatweoffer-img (3).png" },
          { title: "Performance Max Campaigns", text: "Cross-inventory campaigns spanning Search, Display, YouTube, and Discover, built and monitored for conversion quality, not just volume.", icon: "/whatweoffer-img (11).png" },
          { title: "Negative Keyword Management", text: "Ongoing filtering of irrelevant search terms so spend concentrates on searches that actually match your offer.", icon: "/whatweoffer-img (2).png" },
          { title: "Conversion Tracking Setup", text: "Full Google Analytics 4 and conversion action implementation, so every lead or sale is attributed to the correct keyword and campaign.", icon: "/whatweoffer-img (1).png" },
          { title: "Bid Strategy & Budget Management", text: "We select and adjust bid strategy based on account maturity and data volume, moving toward automated bidding only once it's earned enough signal to work well.", icon: "/whatweoffer-img (9).png" },
          { title: "Weekly Optimisation", text: "Every week we review search terms, pause underperformers, and reallocate budget toward what's converting.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Google Ads",
        misconception:
          "Most businesses think a bigger budget fixes a underperforming campaign. Usually the structure — keyword match types, ad group tightness, negative keywords — is the actual problem, and no amount of extra budget fixes a structural issue.",
        faqs: [
          { question: "How quickly can Google Ads campaigns go live?", answer: "Search campaigns can typically go live within 5–7 business days of onboarding, covering strategy, keyword research, ad copy, and conversion tracking setup." },
          { question: "Is ad spend included in the management fee?", answer: "No. Ad spend is paid directly by you into your Google Ads account. We charge a management fee only, separate from your ad budget." },
          { question: "What's the difference between Search and Performance Max?", answer: "Search campaigns target specific keyword searches with text ads. Performance Max uses Google's automation to find conversions across Search, Display, YouTube, and more from a single campaign, trading some manual control for broader reach." },
        ],
        image: "/servicesImg/serviceImgfive.png",
        tagline: "Meet the Search, Not the Scroll.",
        subtitle: "Google Ads built around the exact moment someone searches for what you offer.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/performance-marketing/meta-ads
  // ─────────────────────────────────────────────────────────────────────────
  "performance-marketing-meta-ads": {
    title: "Meta Ads Management",
    heroImage: "",
    hubLink: {
      href: "/services/performance-marketing",
      label: "Back to Performance Marketing — Google Ads →",
    },
    details: {
      heading: "Meta Ads — Create Demand With Precision Targeting",
      subtitle:
        "Meta Ads on Facebook and Instagram don't wait for someone to search — they place compelling content in front of highly targeted audiences based on demographics, interests, and behaviour. For local businesses and consumer brands, this is often the lowest-cost path to qualified leads.",
      quote: "Meta doesn't capture demand. It creates it — with the right audience and the right creative.",
      image1: "/servicesImg/serviceImgseven.webp",
      image2: "/servicesImg/serviceImgsix.jpg",
      background: "/servicesImg/serviceImgthirteen.png",
      intro:
        "Meta Ads work differently from Google Search: instead of capturing someone already searching, they interrupt the right person with the right message at the right moment — using precise audience targeting built from demographics, interests, behaviours, and lookalike audiences drawn from your existing customers. For gyms, restaurants, salons, e-commerce brands, and other consumer-facing businesses, well-targeted Meta campaigns consistently generate leads at a cost that undercuts most other paid channels.",
    },
    sections: [
      {
        type: "whatIs",
        title: "How Meta Ads Work and Where They Outperform Search",
        content: [
          "Meta Ads run across Facebook and Instagram from a single campaign structure, using Meta's audience data — demographics, interests, behaviours, and connections — to place your content in front of people who match your ideal client profile, whether or not they've ever searched for your business by name. This is fundamentally a demand-creation channel, not a demand-capture one.",
          "Audience targeting is the core lever. Custom audiences built from your existing customer list, lookalike audiences modelled on your best customers, and interest- or behaviour-based targeting all let you reach people who resemble your ideal client at a much larger scale than organic content alone could reach. The quality of this targeting is usually the single biggest factor in campaign cost-efficiency.",
          "Creative does more work in Meta Ads than in Search, because the ad itself has to stop the scroll and communicate value in the first second or two — there's no existing search query doing half the work. Strong creative, tested in multiple variations, consistently outperforms a larger budget behind weak creative.",
          "Retargeting is one of the highest-ROI tactics available on Meta: showing tailored ads to people who've already visited your website, engaged with your content, or added to cart but not converted. These warm audiences convert at a meaningfully higher rate than cold prospecting audiences, which is why we run both types of campaigns together rather than cold traffic alone.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Audience-led, creative-tested campaigns across Facebook and Instagram — built for leads, sales, or awareness.",
        items: [
          { title: "Audience Strategy", text: "Custom audiences from your customer list, lookalike audiences, and interest/behaviour targeting built around your specific ideal client profile.", icon: "/whatweoffer-img (5).png" },
          { title: "Creative Direction & Testing", text: "Multiple ad creative and copy variations tested systematically to find what actually stops the scroll and converts for your audience.", icon: "/whatweoffer-img (4).png" },
          { title: "Meta Pixel & Conversion Tracking", text: "Full Meta Pixel and conversion event setup so every lead or sale is attributed correctly and feeds back into targeting and optimisation.", icon: "/whatweoffer-img (1).png" },
          { title: "Retargeting Campaigns", text: "Always-on retargeting to website visitors and engaged users, converting warm prospects who didn't act on the first impression.", icon: "/whatweoffer-img (7).png" },
          { title: "Campaign Objective Matching", text: "We match campaign objective — leads, traffic, conversions, or awareness — to your actual business goal rather than defaulting to one setup for everything.", icon: "/whatweoffer-img (3).png" },
          { title: "Weekly Optimisation & Reporting", text: "Weekly review of spend, cost per result, and creative fatigue, with budget reallocated toward what's converting.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Meta Ads",
        misconception:
          "Most businesses assume Meta Ads and Google Ads are interchangeable. They target fundamentally different moments — Google captures existing search intent, Meta creates awareness and demand in people who weren't searching yet.",
        faqs: [
          { question: "How is Meta Ads different from Google Ads?", answer: "Google Ads captures people already searching for what you offer. Meta Ads creates demand by targeting people based on interests and behaviour, regardless of whether they've searched. Both work well together." },
          { question: "How long before Meta campaigns stabilise?", answer: "Meta campaigns typically need 2–4 weeks of optimisation and learning before lead flow and cost per result stabilise, as the algorithm needs conversion data to optimise delivery." },
          { question: "Is ad spend included in the management fee?", answer: "No. Ad spend is paid directly by you into your Meta Ads account. We charge a management fee only." },
        ],
        image: "/servicesImg/serviceImgone.jpg",
        tagline: "Reach People Before They Search.",
        subtitle: "Meta Ads built on precision targeting and creative that earns the click.",
      },
    ],
  },

  // ── Override: social-media flat page → new /services/social-media hub
  "social-media": {
    ...servicesData["social-media"],
    hubLink: {
      href: "/services/social-media",
      label: "Explore Social Media by Specialty: Instagram, LinkedIn & Strategy →",
    },
  },

  // ── Override: linkedin-branding flat page → the new linkedin-management child
  // (per the blueprint's explicit cross-link requirement).
  "linkedin-branding": {
    ...servicesData["linkedin-branding"],
    hubLink: {
      href: "/services/social-media/linkedin-management",
      label: "See LinkedIn Management as Part of a Social Media System →",
    },
  },

  // ── Override: branding flat page → new /services/branding hub
  "branding": {
    ...servicesData["branding"],
    hubLink: {
      href: "/services/branding",
      label: "Explore Branding by Phase: Audit & Identity Design →",
    },
  },

  // ── Override: digital-pr flat page → new nested /services/digital-pr page
  "digital-pr": {
    ...servicesData["digital-pr"],
    hubLink: {
      href: "/services/digital-pr",
      label: "See Digital PR Inside the Services Architecture →",
    },
  },

  // ── Override: web-development flat page → new nested page (different slug:
  // "website-design-development", per the approved page structure)
  "web-development": {
    ...servicesData["web-development"],
    hubLink: {
      href: "/services/website-design-development",
      label: "See Web Design & Development Inside the Services Architecture →",
    },
  },

  // ── Override: ai-integration flat page → new nested /services/ai-integration page
  "ai-integration": {
    ...servicesData["ai-integration"],
    hubLink: {
      href: "/services/ai-integration",
      label: "See AI Integration Inside the Services Architecture →",
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/social-media/instagram-management
  // ─────────────────────────────────────────────────────────────────────────
  "social-media-instagram-management": {
    title: "Instagram Management",
    heroImage: "",
    hubLink: { href: "/services/social-media", label: "Back to Social Media — LinkedIn & Strategy →" },
    details: {
      heading: "Instagram Management — Consistent Presence That Converts",
      subtitle:
        "Full Instagram management — content calendar, feed posts, stories, reels scripts, DM handling, and engagement — run so your account shows up consistently and turns followers into enquiries.",
      quote: "Instagram rewards consistency more than perfection. Show up on schedule, every week, with content built to convert.",
      image1: "/servicesImg/serviceImgeleven.png",
      image2: "/servicesImg/serviceImgtwo.jpg",
      background: "/servicesImg/serviceImgthree.png",
      intro:
        "Instagram is the highest-traffic platform for most local service businesses, gyms, salons, restaurants, and consumer brands — but only if the account is managed with a real content system behind it, not sporadic posting. We run the full pipeline: monthly content calendar, feed posts, stories, reel scripts, caption copywriting, DM handling, and engagement, all built around your specific brand and audience.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What Instagram Management Covers",
        content: [
          "Instagram management is the ongoing operation of your account: planning what to post, creating it, publishing on schedule, and handling the audience interaction that comes back. Done properly, it is not a content calendar alone — it includes community management (replying to comments and DMs), performance tracking, and monthly adjustments based on what's actually working.",
          "The content mix matters more than volume. A well-run account balances educational content, authority-building posts, behind-the-scenes content, and clear offers — the same content-pillar structure used across the agency's own marketing. Random posting with no mix produces followers who never convert.",
          "DM and comment management is where most of the actual business impact happens. An account that posts well but responds to enquiries slowly loses the lead anyway. We handle this as part of daily management so no DM sits unanswered.",
          "Instagram management is priced as a monthly retainer with a minimum 3-month commitment — consistent with how social media results actually compound, and matching the pricing structure on the main Social Media Management page.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Content, publishing, and community management run as one system.",
        items: [
          { title: "Monthly Content Calendar", text: "A full calendar mapped to content pillars — results, education, behind-the-scenes, and offers — approved by you before creation starts.", icon: "/whatweoffer-img (12).png" },
          { title: "Feed Posts & Stories", text: "Branded graphics and story content designed to your visual identity, published on a consistent weekly schedule.", icon: "/whatweoffer-img (4).png" },
          { title: "Reel Scriptwriting", text: "Hook–problem–solution–proof–CTA scripts built for reach and retention, ready for filming or editing.", icon: "/whatweoffer-img (8).png" },
          { title: "Caption Copywriting", text: "Every post written with a scroll-stopping hook, a clear body, and a specific CTA — never generic filler captions.", icon: "/whatweoffer-img (5).png" },
          { title: "DM & Comment Management", text: "Daily monitoring and response to comments and DMs, so no enquiry sits unanswered.", icon: "/whatweoffer-img (3).png" },
          { title: "Monthly Reporting", text: "Follower growth, engagement rate, and reach tracked monthly against the goals set at kickoff.", icon: "/whatweoffer-img (13).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Instagram Management",
        misconception:
          "Most businesses think posting consistently is enough. Posting without a content-pillar strategy and DM response system produces followers, not enquiries.",
        faqs: [
          { question: "How many posts per week is included?", answer: "Frequency depends on the package — see the Starter, Growth, and Authority tiers on the main Social Media Management page for exact quantities." },
          { question: "Do you handle DMs and comments personally?", answer: "Yes, as part of the retainer — daily monitoring and response is included, not billed separately." },
          { question: "What is the minimum commitment?", answer: "Three months, matching every social media package on the main Social Media Management page — results compound and need that runway to show." },
        ],
        image: "/servicesImg/serviceImgten.jpeg",
        tagline: "Show Up. Every Week.",
        subtitle: "Instagram management built around consistency, not sporadic bursts.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/social-media/linkedin-management
  // ─────────────────────────────────────────────────────────────────────────
  "social-media-linkedin-management": {
    title: "LinkedIn Management",
    heroImage: "",
    hubLink: { href: "/services/social-media", label: "Back to Social Media — Instagram & Strategy →" },
    details: {
      heading: "LinkedIn Management — Inside a Broader Social Media System",
      subtitle:
        "The same LinkedIn personal branding service — profile optimisation, content, engagement, and DM handling — shown here as part of a full social media system alongside Instagram. For the complete, dedicated breakdown, see LinkedIn Personal Branding.",
      quote: "LinkedIn works best for founders and B2B service businesses when it's run with the same discipline as any other channel.",
      image1: "/servicesImg/serviceImgnine.jpeg",
      image2: "/servicesImg/serviceImgeight.jpeg",
      background: "/servicesImg/serviceImgtwelve.jpeg",
      intro:
        "For founders, consultants, and B2B service businesses, LinkedIn is often the highest-ROI channel available — and it deserves the same structured management as any other platform: a content strategy, a consistent posting schedule, engagement management, and DM handling. This page positions LinkedIn as one channel inside a broader social media system; the full dedicated service — profile optimisation, article writing, and growth strategy — lives on the LinkedIn Personal Branding page.",
    },
    sections: [
      {
        type: "whatIs",
        title: "LinkedIn Inside a Social Media System",
        content: [
          "Businesses running both Instagram and LinkedIn benefit from having both channels planned together — shared brand voice, coordinated content themes, and a single content calendar that adapts format and tone per platform rather than treating them as unrelated efforts.",
          "LinkedIn management specifically covers post creation, engagement with your professional network, and DM handling for inbound enquiries — the operational layer that makes a founder's or company's LinkedIn presence actually productive rather than dormant.",
          "For the complete LinkedIn service — including profile optimisation, long-form article writing, scriptwriting for LinkedIn video, and a dedicated growth strategy — see the full LinkedIn Personal Branding page, which this page rolls up into.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "LinkedIn run with the same operational discipline as every other channel.",
        items: [
          { title: "Content Planning", text: "LinkedIn posts planned inside the same monthly calendar as Instagram, coordinated on themes but written specifically for a professional audience.", icon: "/whatweoffer-img (5).png" },
          { title: "Post Creation & Publishing", text: "Authority-building and thought-leadership posts written in your voice, published on a consistent schedule.", icon: "/whatweoffer-img (4).png" },
          { title: "Engagement Management", text: "Responses to comments on your posts and strategic engagement with your target audience's content.", icon: "/whatweoffer-img (3).png" },
          { title: "DM & Enquiry Handling", text: "Inbound LinkedIn messages monitored and responded to promptly, with high-value conversations routed to you.", icon: "/whatweoffer-img (6).png" },
          { title: "Cross-Platform Reporting", text: "LinkedIn performance reported alongside Instagram inside one combined monthly report, not two separate ones.", icon: "/whatweoffer-img (13).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions",
        misconception:
          "Most businesses treat LinkedIn as an afterthought to Instagram. For B2B and founder-led businesses, it's often the higher-converting channel and deserves equal planning.",
        faqs: [
          { question: "Should I use this page or the full LinkedIn Personal Branding page?", answer: "If you want LinkedIn managed alongside Instagram as part of one system, this page describes that. If LinkedIn is your primary or only channel, see the full LinkedIn Personal Branding page for the complete dedicated service." },
          { question: "Is the content different from the standalone LinkedIn service?", answer: "The core work — posts, engagement, DM handling — is the same. The standalone service additionally includes profile optimisation, article writing, and a dedicated growth strategy." },
        ],
        image: "/servicesImg/serviceImgnine.jpeg",
        tagline: "One System, Every Channel.",
        subtitle: "LinkedIn managed with the same discipline as Instagram, inside one coordinated calendar.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/social-media/social-media-optimization
  // ─────────────────────────────────────────────────────────────────────────
  "social-media-social-media-optimization": {
    title: "Social Media Optimization",
    heroImage: "",
    hubLink: { href: "/services/social-media", label: "Back to Social Media — Instagram & LinkedIn Management →" },
    details: {
      heading: "Social Media Optimization — The Strategy Layer Before Execution",
      subtitle:
        "Before content gets made, someone has to decide what the account should actually be about: which platform, what content pillars, what posting cadence, and what a completed profile looks like. This is that layer — an audit and strategy service, distinct from day-to-day management.",
      quote: "Posting without a strategy first is like running ads without knowing who you're targeting.",
      image1: "/servicesImg/serviceImgtwo.jpg",
      image2: "/servicesImg/serviceImgeleven.png",
      background: "/servicesImg/serviceImgthree.png",
      intro:
        "Social media optimization is the strategic layer that sits before ongoing management: auditing your current profile and content, defining the right platform mix and content pillars for your specific business, and setting a posting cadence and profile structure built to perform. It's a distinct scope from Instagram or LinkedIn management — this is the plan; management is the execution of that plan.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What This Covers, and How It's Different From Management",
        content: [
          "Social media optimization is a strategy and audit engagement, not a content-production retainer. It answers the questions that should be settled before a single post gets made: which platform actually fits your audience, what content pillars will carry the account, what posting frequency is realistic and effective, and whether your current profile — bio, highlights, link-in-bio, visual consistency — is set up to convert visitors.",
          "For businesses with an existing account that isn't performing, this is typically the right starting point: an audit identifies what's working, what isn't, and why, before committing to a management retainer built on the same broken foundation.",
          "For businesses starting from zero, this defines the strategy — platform choice, content pillars, and posting cadence — that then feeds directly into Instagram Management or LinkedIn Management once execution begins.",
          "This is currently scoped as a strategy engagement rather than a standalone monthly retainer — pricing and format (one-time audit vs. ongoing strategic review) are discussed directly based on where your account currently stands, since it isn't yet a fixed line item in the standard package tiers.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "Audit, strategy, and profile structure — the plan before the content gets made.",
        items: [
          { title: "Account & Content Audit", text: "A full review of your current profile, content history, and performance to identify what's working and what's holding growth back.", icon: "/whatweoffer-img (1).png" },
          { title: "Platform & Content Pillar Strategy", text: "We define the right platform mix and the specific content pillars — results, education, behind-the-scenes, offers — for your business.", icon: "/whatweoffer-img (12).png" },
          { title: "Posting Cadence Planning", text: "A realistic, effective posting schedule set based on your goals and capacity, not a generic industry default.", icon: "/whatweoffer-img (6).png" },
          { title: "Profile Structure Optimisation", text: "Bio, highlights, link-in-bio, and visual consistency reviewed and restructured to convert profile visitors into followers and enquiries.", icon: "/whatweoffer-img (10).png" },
          { title: "Handover to Management", text: "The resulting strategy feeds directly into Instagram Management or LinkedIn Management if you move into ongoing execution with us.", icon: "/whatweoffer-img (9).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions",
        misconception:
          "Most businesses assume strategy and management are the same service. Strategy defines what to do; management is doing it — they're often bought separately, especially for an account that already exists but isn't performing.",
        faqs: [
          { question: "Do I need this if I'm already using Instagram Management?", answer: "Not necessarily — an initial strategy conversation is part of onboarding any management retainer. This page describes it as a standalone engagement for businesses that specifically want the audit and plan first, before committing to ongoing content production." },
          { question: "How is this priced?", answer: "It isn't a fixed package tier yet — scope and cost depend on your current account and goals, and are discussed directly on a call." },
        ],
        image: "/servicesImg/serviceImgfour.jpg",
        tagline: "Plan First. Post Second.",
        subtitle: "The strategy layer that makes every post afterward more likely to work.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/branding/brand-audit
  // ─────────────────────────────────────────────────────────────────────────
  "branding-brand-audit": {
    title: "Brand Audit",
    heroImage: "",
    hubLink: { href: "/services/branding", label: "Back to Branding — Brand Identity Design →" },
    details: {
      heading: "Brand Audit — Know What's Working Before You Rebuild Anything",
      subtitle:
        "A structured evaluation of your current brand — visual identity, messaging, and consistency across touchpoints — delivered as a prioritised report. Often the right first step before a full identity project, or a standalone diagnostic if you just need clarity.",
      quote: "You can't fix a brand problem you haven't actually diagnosed.",
      image1: "/servicesImg/serviceImgeight.jpeg",
      image2: "/servicesImg/serviceImgnine.jpeg",
      background: "/servicesImg/serviceImgeleven.png",
      intro:
        "A brand audit is a structured diagnostic, not a redesign. We evaluate your current logo, visual system, messaging, and consistency across every touchpoint your customers actually see — website, social media, print materials, signage — and deliver a clear, prioritised report on what's working, what's inconsistent, and what's actively costing you trust or recognition. For businesses unsure whether they need a full rebrand or just targeted fixes, this is the right starting point.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What a Brand Audit Actually Evaluates",
        content: [
          "A brand audit examines four layers: visual identity (logo, colour, typography — is it applied consistently everywhere it appears?), messaging (does your positioning and tone of voice stay consistent across your website, social media, and sales materials?), competitive position (how does your brand actually compare to the two or three businesses your prospects are also considering?), and touchpoint consistency (does a customer's experience of your brand feel like the same business across every channel?).",
          "The output is a written, prioritised report — not vague feedback. It identifies specific inconsistencies (a logo used in three different colour variations, messaging that contradicts itself between the website and Instagram bio, and so on) and ranks them by how much they're actually costing you in trust or recognition versus how easy they are to fix.",
          "For a business considering a full rebrand, the audit answers the question before you commit budget: is this a full identity rebuild, or are there a handful of specific, cheaper fixes that solve most of the problem? For a business that just wants clarity, the audit stands alone as a diagnostic without any obligation to proceed into a build.",
          "This is currently scoped and delivered as a standalone diagnostic engagement rather than a fixed package tier — pricing depends on the size of your current brand footprint (how many touchpoints exist to review) and is discussed directly rather than quoted generically.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "A structured evaluation across visual identity, messaging, and consistency — delivered as a clear report.",
        items: [
          { title: "Visual Identity Review", text: "We check logo usage, colour, and typography consistency across every place your brand currently appears.", icon: "/whatweoffer-img (4).png" },
          { title: "Messaging & Voice Audit", text: "We compare your positioning and tone of voice across your website, social media, and sales materials for consistency and clarity.", icon: "/whatweoffer-img (5).png" },
          { title: "Competitive Position Check", text: "We evaluate how your brand actually compares to the specific businesses your prospects are considering alongside you.", icon: "/whatweoffer-img (10).png" },
          { title: "Touchpoint Consistency Mapping", text: "We map every customer-facing touchpoint and flag where the brand experience breaks or contradicts itself.", icon: "/whatweoffer-img (6).png" },
          { title: "Prioritised Fix Report", text: "A written report ranking every finding by impact and effort, so you know exactly what to fix first.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions About Brand Audits",
        misconception:
          "Most businesses think an audit and a rebrand are the same request. An audit is diagnosis; a rebrand is treatment — you don't need to commit to the second to get value from the first.",
        faqs: [
          { question: "Does a brand audit include design work?", answer: "No — it's a diagnostic report. Any resulting design work (a new logo, updated guidelines) is scoped separately as a Brand Identity Design project." },
          { question: "How is this priced?", answer: "It isn't a fixed package tier — cost depends on how many touchpoints exist to review, and is discussed directly based on your specific brand." },
          { question: "Do I have to move into a full rebrand afterward?", answer: "No. The audit stands alone. Many businesses use it purely for clarity and implement the fixes themselves or with their existing team." },
        ],
        image: "/servicesImg/serviceImgtwelve.jpeg",
        tagline: "Diagnose First.",
        subtitle: "A clear, prioritised picture of your brand before you spend on fixing it.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW CHILD: /services/branding/brand-identity-design
  // ─────────────────────────────────────────────────────────────────────────
  "branding-brand-identity-design": {
    title: "Brand Identity Design",
    heroImage: "",
    hubLink: { href: "/services/branding", label: "Back to Branding — Brand Audit →" },
    details: {
      heading: "Brand Identity Design — The Build Phase",
      subtitle:
        "Logo, visual identity system, and brand guidelines — the actual design work. This page focuses specifically on the build; if you're not sure what needs fixing yet, start with a Brand Audit first.",
      quote: "Strategy decides what your brand should say. Identity design is how it says it, visually, every time.",
      image1: "/servicesImg/serviceImgnine.jpeg",
      image2: "/servicesImg/serviceImgeight.jpeg",
      background: "/servicesImg/serviceImgeleven.png",
      intro:
        "Brand identity design is the visible output of brand strategy: the logo, colour palette, typography system, and guidelines that make your business instantly recognisable across every touchpoint. This page covers that build phase specifically. For the full context — positioning, messaging, and the complete strategy-to-guidelines process — see the main Branding page; this page exists for founders who already know they need the design work done.",
    },
    sections: [
      {
        type: "whatIs",
        title: "What Brand Identity Design Delivers",
        content: [
          "A brand identity design engagement produces a logo (primary, secondary, and icon variants), a defined colour palette and typography system, and a set of practical brand guidelines your team or any future designer can follow to keep everything consistent. It's the tangible, reusable system behind every piece of marketing you'll produce afterward.",
          "The work starts from positioning, not just aesthetics — who you're building for and what you want them to feel determines every subsequent design decision, from colour psychology to typography weight. Design without that grounding produces something that looks fine but doesn't actually differentiate.",
          "A complete identity system pays for itself across every other marketing channel: social media posts, ads, the website, and printed materials all become faster and cheaper to produce once the system exists, because the decisions are already made.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "From positioning to a complete, usable identity system.",
        items: [
          { title: "Logo & Symbol Design", text: "A distinctive, scalable mark with primary, secondary, and icon variants that work across every format.", icon: "/whatweoffer-img (4).png" },
          { title: "Colour & Typography System", text: "A defined palette and type system built for consistency across digital and print applications.", icon: "/whatweoffer-img (9).png" },
          { title: "Brand Guidelines Document", text: "A practical guide covering logo usage, colour codes, typography rules, and tone of voice for your team or any future designer.", icon: "/whatweoffer-img (6).png" },
          { title: "Digital Application", text: "The identity applied across your website, social profiles, and templates so everything launches cohesive from day one.", icon: "/whatweoffer-img (7).png" },
        ],
      },
      {
        type: "faq",
        heading: "Common Questions",
        misconception:
          "Most businesses think this starts with logo sketches. It starts with positioning — the logo is one of the last things actually designed.",
        faqs: [
          { question: "Should I start here or with a Brand Audit?", answer: "If you already know you need a new or refreshed identity, start here. If you're not sure what's actually wrong with your current brand, a Brand Audit first will make this process faster and more targeted." },
          { question: "How long does this take?", answer: "A full identity project — strategy, logo, visual system, and guidelines — typically takes 4–8 weeks depending on scope, matching the timeline on the main Branding page." },
        ],
        image: "/servicesImg/serviceImgeight.jpeg",
        tagline: "Built to Be Recognised.",
        subtitle: "The visual system every future piece of marketing gets faster and more consistent from.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW STANDALONE (no children): /services/digital-pr
  // ─────────────────────────────────────────────────────────────────────────
  "services-digital-pr": {
    title: "Digital PR",
    heroImage: "",
    hubLink: { href: "/digital-pr", label: "See the Full Digital PR Service Page →" },
    details: {
      heading: "Digital PR, Inside the Services Architecture",
      subtitle:
        "The same Digital PR service — media outreach, strategic link building, and authority-building placements — presented here as part of the broader services structure. For the complete deep-dive, see the main Digital PR page.",
      quote: "Authority earned in the right places compounds. Authority bought fades.",
      image1: "/servicesImg/serviceImgone.jpg",
      image2: "/servicesImg/serviceImgtwo.jpg",
      background: "/servicesImg/serviceImgten.jpeg",
      intro:
        "Digital PR — earning editorial placements, backlinks, and media mentions in the publications and platforms your audience already trusts — is one of Graphical Proximity's nine core services. This page presents it inside the newer, structured services architecture. The complete deep-dive — full process, FAQ, and detail — lives on the main Digital PR page, which this links to directly.",
    },
    sections: [
      {
        type: "whatIs",
        title: "Digital PR, Briefly",
        content: [
          "Digital PR builds your brand's online authority by securing placements in credible publications, blogs, podcasts, and directories — each placement typically including a backlink that strengthens your domain authority and improves your search rankings over time.",
          "Unlike paid advertising, which stops the moment budget stops, a strong editorial placement or backlink continues working indefinitely — referral traffic, ranking signal, and brand credibility all compound rather than reset.",
          "For the complete breakdown — the full process, audience research, outreach methodology, and detailed FAQ — see the main Digital PR page linked below.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "The same structured, SEO-led approach detailed in full on the main Digital PR page.",
        items: [
          { title: "Brand & SEO Audit", text: "We audit your current backlink profile and authority signals to identify the highest-impact placement opportunities.", icon: "/whatweoffer-img (1).png" },
          { title: "Media Outreach & Placement", text: "We pitch your story to editors and publications your audience trusts, securing real editorial mentions.", icon: "/whatweoffer-img (13).png" },
          { title: "Strategic Link Building", text: "Guest posts and editorial placements that earn high-quality backlinks and strengthen domain authority.", icon: "/whatweoffer-img (8).png" },
          { title: "Performance Reporting", text: "Every placement and backlink tracked, with clear reporting on the resulting authority and traffic impact.", icon: "/whatweoffer-img (12).png" },
        ],
      },
      {
        type: "faq",
        heading: "Quick Questions",
        misconception:
          "Most businesses think Digital PR is just press releases. It's a structured SEO and credibility system — see the main Digital PR page for the full explanation.",
        faqs: [
          { question: "Is this different from the main Digital PR page?", answer: "No — same service. This page presents it inside the newer services structure; the main page has the complete deep-dive and FAQ." },
          { question: "How long before Digital PR shows results?", answer: "Most brands see measurable backlink growth within 60–90 days, with significant ranking improvements typically appearing within 3–6 months." },
        ],
        image: "/servicesImg/serviceImgfour.jpg",
        tagline: "Authority That Compounds.",
        subtitle: "See the full Digital PR service page for the complete process and detail.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW STANDALONE (no children): /services/website-design-development
  // ─────────────────────────────────────────────────────────────────────────
  "services-website-design-development": {
    title: "Website Design & Development",
    heroImage: "",
    hubLink: { href: "/web-development", label: "See the Full Web Design & Development Page →" },
    details: {
      heading: "Website Design & Development, Inside the Services Architecture",
      subtitle:
        "The same website design and development service presented here as part of the broader services structure. For pricing, packages, and the complete build process, see the main Web Design & Development page.",
      quote: "Your website is your best salesperson. It works 24 hours a day and never asks for a raise.",
      image1: "/servicesImg/serviceImgthirteen.png",
      image2: "/servicesImg/serviceImgseven.webp",
      background: "/servicesImg/serviceImgfourteen.png",
      intro:
        "Custom, mobile-first websites built to convert — the same service detailed in full on the main Web Design & Development page, presented here inside the newer services structure for anyone navigating by specialty first.",
    },
    sections: [
      {
        type: "whatIs",
        title: "Website Design & Development, Briefly",
        content: [
          "A professionally built website combines front-end design, back-end architecture, technical SEO, and security into one product built to load fast, rank well, and convert visitors into enquiries — not just look good in a screenshot.",
          "Packages range from a Launch Website for small businesses and startups up to a fully custom Growth Website for businesses scaling online — full pricing and package detail live on the main Web Design & Development page.",
          "For the complete process — from wireframe to launch, platform choice (WordPress or Webflow), and full FAQ — see the main page linked below.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "The same build process detailed in full on the main Web Design & Development page.",
        items: [
          { title: "UX & Conversion-Led Design", text: "Every page designed around user behaviour and a clear conversion goal.", icon: "/whatweoffer-img (5).png" },
          { title: "Front-End & Back-End Development", text: "Responsive, fast-loading interfaces built on scalable, secure back-end architecture.", icon: "/whatweoffer-img (7).png" },
          { title: "Technical SEO Foundation", text: "Clean URLs, structured data, and Core Web Vitals optimisation built in from the first line of code.", icon: "/whatweoffer-img (3).png" },
          { title: "CMS & Ongoing Support", text: "A CMS your team can update without touching code, plus maintenance retainers available after launch.", icon: "/whatweoffer-img (11).png" },
        ],
      },
      {
        type: "faq",
        heading: "Quick Questions",
        misconception:
          "Most businesses think a website is a one-time project. It's a living business asset that needs ongoing optimisation — see the main page for the full explanation.",
        faqs: [
          { question: "Is this different from the main Web Design & Development page?", answer: "No — same service and same packages. This page presents it inside the newer services structure; the main page has full pricing and process detail." },
          { question: "How long does a build take?", answer: "10–14 days for a Launch Website up to 3–4 weeks for a Growth Website, depending on scope — see the main page for the full package breakdown." },
        ],
        image: "/servicesImg/serviceImgfive.png",
        tagline: "Technology Meets Commercial Thinking.",
        subtitle: "See the full Web Design & Development page for packages and pricing.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW STANDALONE (no children): /services/personal-branding
  // ─────────────────────────────────────────────────────────────────────────
  "services-personal-branding": {
    title: "Personal Branding",
    heroImage: "",
    hubLink: { href: "/linkedin-branding", label: "See the Full LinkedIn Personal Branding Page →" },
    details: {
      heading: "Personal Branding, Inside the Services Architecture",
      subtitle:
        "The same LinkedIn personal branding service — profile optimisation, authority content, and DM management — presented here under the broader \"Personal Branding\" heading. For pricing, packages, and full detail, see the main LinkedIn Personal Branding page.",
      quote: "Your LinkedIn profile is either working for you or against you. There is no neutral.",
      image1: "/servicesImg/serviceImgnine.jpeg",
      image2: "/servicesImg/serviceImgeight.jpeg",
      background: "/servicesImg/serviceImgtwelve.jpeg",
      intro:
        "Personal branding for founders, consultants, and professionals is currently delivered through LinkedIn — profile optimisation, authority content, DM handling, and growth strategy. This page presents that service under the broader \"Personal Branding\" heading inside the newer services structure. The complete deep-dive, packages, and pricing live on the main LinkedIn Personal Branding page.",
    },
    sections: [
      {
        type: "whatIs",
        title: "Personal Branding, Briefly",
        content: [
          "Personal branding here means building a founder's or professional's individual authority and reputation — currently executed through LinkedIn, the platform where B2B decision-makers and professional audiences are most active.",
          "A strong personal brand generates inbound opportunities directly: client enquiries, partnerships, speaking invitations, and media requests, without cold outreach or ad spend, once the profile and content strategy are working.",
          "For the complete process — profile optimisation, content strategy, article writing, and full FAQ — see the main LinkedIn Personal Branding page linked below.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "The same LinkedIn personal branding process detailed in full on the main page.",
        items: [
          { title: "Profile Optimisation", text: "A profile rewritten to position you as the authority in your niche and convert visitors into enquiries.", icon: "/whatweoffer-img (10).png" },
          { title: "Content Strategy & Creation", text: "Posts and articles built around your expertise and your audience's actual questions.", icon: "/whatweoffer-img (5).png" },
          { title: "Engagement & DM Handling", text: "Comments and inbound DMs managed so no opportunity is missed.", icon: "/whatweoffer-img (3).png" },
          { title: "Monthly Growth Reporting", text: "Follower growth, reach, and inbound enquiries tracked against the goals set at kickoff.", icon: "/whatweoffer-img (13).png" },
        ],
      },
      {
        type: "faq",
        heading: "Quick Questions",
        misconception:
          "Most professionals think LinkedIn is only for job seekers. It's one of the highest-ROI platforms for B2B lead generation and founder authority — see the main page for the full explanation.",
        faqs: [
          { question: "Is this different from the LinkedIn Personal Branding page?", answer: "No — same service and packages. This page presents it under the broader services structure; the main page has full pricing and process detail." },
          { question: "How long before this generates leads?", answer: "Inbound enquiries typically begin arriving in months 2–4 of consistent content, with a full pipeline building over 6–12 months — see the main page for the complete timeline." },
        ],
        image: "/servicesImg/serviceImgnine.jpeg",
        tagline: "Your Name. Their Inbox.",
        subtitle: "See the full LinkedIn Personal Branding page for packages and pricing.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // NEW STANDALONE (no children): /services/ai-integration
  // ─────────────────────────────────────────────────────────────────────────
  "services-ai-integration": {
    title: "AI Integration",
    heroImage: "",
    hubLink: { href: "/ai-integration", label: "See the Full AI Integration Page →" },
    details: {
      heading: "AI Integration, Inside the Services Architecture",
      subtitle:
        "The same AI integration and marketing automation service presented here as part of the broader services structure. For the complete deep-dive, see the main AI Integration page.",
      quote: "AI does not replace strategy. It executes strategy faster than any human team can.",
      image1: "/servicesImg/serviceImgfour.jpg",
      image2: "/servicesImg/serviceImgfive.png",
      background: "/servicesImg/serviceImgfourteen.png",
      intro:
        "AI-powered tools and automated workflows that reduce manual effort and scale output — the same service detailed in full on the main AI Integration page, presented here inside the newer services structure for anyone navigating by specialty first.",
    },
    sections: [
      {
        type: "whatIs",
        title: "AI Integration, Briefly",
        content: [
          "AI integration embeds AI tools and automated workflows into processes your business already runs — content production, lead follow-up, reporting, and customer communication — reducing manual effort without replacing human strategy.",
          "The businesses that benefit most are small and growing teams, where automation gives a proportionally larger efficiency gain than it does for a large enterprise with existing headcount to absorb repetitive work.",
          "For the complete process — workflow audit, chatbot deployment, CRM integration, and full FAQ — see the main AI Integration page linked below.",
        ],
      },
      {
        type: "howWeDoIt",
        subtitle: "The same practical AI implementation process detailed in full on the main AI Integration page.",
        items: [
          { title: "AI Workflow Audit", text: "We map your current operations to find the specific processes where automation delivers the highest time savings.", icon: "/whatweoffer-img (1).png" },
          { title: "Content Production Automation", text: "AI-assisted workflows for blog, social, ad copy, and email content that speed up production without losing brand voice.", icon: "/whatweoffer-img (11).png" },
          { title: "Chatbots & Lead Qualification", text: "AI-powered chatbots that engage visitors, qualify leads, and route high-intent prospects to your sales team instantly.", icon: "/whatweoffer-img (3).png" },
          { title: "Marketing Automation & CRM", text: "Connected workflows — lead nurture, follow-up triggers, and personalised sequences — running without manual input.", icon: "/whatweoffer-img (8).png" },
        ],
      },
      {
        type: "faq",
        heading: "Quick Questions",
        misconception:
          "Most businesses think AI integration is only for large enterprises. Smaller teams often see proportionally larger efficiency gains — see the main page for the full explanation.",
        faqs: [
          { question: "Is this different from the main AI Integration page?", answer: "No — same service. This page presents it inside the newer services structure; the main page has the complete deep-dive and FAQ." },
          { question: "Will AI replace my marketing team?", answer: "No — it replaces repetitive tasks like first drafts, scheduling, and reporting, freeing your team for strategy and client relationships." },
        ],
        image: "/servicesImg/serviceImgone.jpg",
        tagline: "Work Smarter. Scale Faster.",
        subtitle: "See the full AI Integration page for the complete process and detail.",
      },
    ],
  },

};

export default serviceExtensions;
