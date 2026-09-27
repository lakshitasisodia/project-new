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

};

export default serviceExtensions;
