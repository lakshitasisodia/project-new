import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.graphicalproximity.com"),
  title: {
    default: "Graphical Proximity | Digital Growth Agency — India",
  },
  description:
    "Graphical Proximity is a full-service digital growth agency in India. We help local and national businesses grow through performance marketing (Google & Meta Ads), SEO, web design, branding, social media, LinkedIn branding, and AI automation.",
  keywords:
    "digital growth agency India, performance marketing agency India, SEO agency India, web design agency India, social media agency India, Google Ads agency India, Meta Ads agency, branding agency India, LinkedIn branding agency, AI marketing automation, digital marketing agency Kolkata, West Bengal digital agency",
  authors: [{ name: "Graphical Proximity", url: "https://www.graphicalproximity.com" }],
  creator: "Graphical Proximity",
  publisher: "Graphical Proximity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.graphicalproximity.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.graphicalproximity.com",
    siteName: "Graphical Proximity",
    title: "Graphical Proximity | Digital Growth Agency — India",
    description:
      "Full-service digital growth agency helping local and national businesses dominate online — through performance marketing, SEO, web design, branding, and AI automation.",
    images: [
      {
        url: "https://www.graphicalproximity.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Graphical Proximity — Digital Growth Agency India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphical Proximity | Digital Growth Agency — India",
    description:
      "Performance marketing, SEO, web design, branding, and AI automation — done properly.",
    images: ["https://www.graphicalproximity.com/og-image.jpg"],
    creator: "@graphicalproximity",
  },
  verification: {
    // Add your Google Search Console verification token here
     google: "google-site-verification=Kcu2PRzxZf5a083hA5PfM9hNsDd2SvsMBJM3NKLmCdk",
  },
};

// ── Schema: LocalBusiness + WebSite (sitelinks searchbox) ──────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.graphicalproximity.com/#organization",
  name: "Graphical Proximity",
  alternateName: "GP Agency",
  url: "https://www.graphicalproximity.com",
  logo: "https://www.graphicalproximity.com/logo.png",
  image: "https://www.graphicalproximity.com/og-image.jpg",
  description:
    "Graphical Proximity is a full-service digital growth agency in India specialising in performance marketing, SEO, web design, branding, social media marketing, LinkedIn personal branding, and AI marketing automation.",
  email: "letsdoit@graphicalproximity.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "West Bengal",
    addressLocality: "Kolkata",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "International" },
  ],
  serviceType: [
    "Performance Marketing",
    "SEO Services",
    "Web Design and Development",
    "Social Media Marketing",
    "Brand Identity Design",
    "LinkedIn Personal Branding",
    "Digital PR",
    "Digital Marketing",
    "AI Marketing Automation",
  ],
  priceRange: "₹₹",
  sameAs: [
    "https://instagram.com/graphicalproximity",
    "https://www.linkedin.com/in/lakashita-sisodia/",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.graphicalproximity.com/#website",
  name: "Graphical Proximity",
  url: "https://www.graphicalproximity.com",
  publisher: {
    "@id": "https://www.graphicalproximity.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.graphicalproximity.com/services?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ── Fonts — all required weights ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Nunito:wght@400;600&display=swap" rel="stylesheet" />


        {/* ── Favicon ── */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ── Schema: LocalBusiness ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ── Schema: WebSite + SearchAction ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <main>
        <Navbar />
        <div style={{ height: "100px" }} />
        {children}
        <Footer />
        <noscript>
          This website requires JavaScript to run. Please enable it in your browser for the best experience.
        </noscript>
        </main>
      </body>
    </html>
  );
}