// FILE: app/case-studies/page.jsx
// Case studies are empty for now — noindex set to prevent Google indexing thin content.
// Remove the robots noindex once case studies are published.

import CaseStudyBlog from "@/components/CaseStudyBlog";

export const metadata = {
  title: "Case Studies",
  description: "Real results from real clients — case studies coming soon from Graphical Proximity.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CaseStudyBlog />;
}