"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CSS, Reveal, PLabel, PH2, PBody, Ticker, ServiceHero, CTABand,
} from "@/components/ServicePage";
import serviceHubData from "@/components/data/serviceHubData";

/* ─────────────────────────────────────────────────────────────────────────────
   ServiceHubPage.jsx  —  template for the new /services/<hub> parent pages
   (e.g. /services/seo). Composed ONLY from pieces already used by every
   existing service route (ServicePage.jsx's CSS, Reveal, PLabel, PH2, PBody,
   Ticker, ServiceHero, CTABand). No new colors, fonts, spacing scale, or
   animation timing is introduced — this is the same design system, reused.

   Routes in app/:
     app/services/seo/page.jsx  → <ServiceHubPage hubKey="seo" />
   ───────────────────────────────────────────────────────────────────────────── */

export default function ServiceHubPage({ hubKey }) {
  const hub = serviceHubData[hubKey];

  if (!hub) return (
    <div style={{ padding:"120px 40px",textAlign:"center" }}>
      <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
          fontSize:"2rem",color:"rgb(29,2,29)",marginBottom:"20px" }}>
        Hub not found.
      </h2>
      <Link href="/services" style={{ color:"rgb(85,0,85)",fontWeight:600,fontSize:"1rem" }}>
        ← Back to Services
      </Link>
    </div>
  );

  // Reuses the exact same "service" shape ServiceHero already expects.
  const heroService = { title: hub.title, details: { subtitle: hub.subtitle } };

  return (
    <>
      <style>{CSS}</style>
      <div className="sp">

        {/* 1. Same dark parallax hero used by every service page */}
        <ServiceHero service={heroService} />

        {/* 2. Same ticker */}
        <Ticker title={hub.title} />

        {/* 3. Intro — same sp-sec / sp-quote pattern as IntroSplit, text-only (no image row for a hub) */}
        <section className="sp-sec sp-sec-white sp-z" style={{ position:"relative" }}>
          <div className="sp-blob" style={{ width:"500px",height:"400px",
              background:"rgba(85,0,85,.055)",top:"-60px",right:"-100px" }} />
          <div style={{ maxWidth:"800px",margin:"0 auto",position:"relative",zIndex:1,
              display:"flex",flexDirection:"column",gap:"28px" }}>
            <Reveal>
              <PLabel t="Overview" />
              <h2 style={{
                fontFamily:"'Montserrat',sans-serif",fontWeight:900,
                fontSize:"clamp(2rem,4vw,3rem)",lineHeight:1.05,
                letterSpacing:"-.025em",color:"rgb(29,2,29)",marginBottom:"8px",
              }}>{hub.heading}</h2>
            </Reveal>
            <Reveal delay={.1}><PBody>{hub.intro}</PBody></Reveal>
            <Reveal delay={.18}>
              <blockquote className="sp-quote">"{hub.quote}"</blockquote>
            </Reveal>
            <Reveal delay={.24}>
              <Link href={hub.flatPageHref} style={{
                  display:"inline-flex",alignItems:"center",gap:"10px",
                  padding:"14px 32px",
                  border:"1.5px solid rgba(85,0,85,.3)",
                  color:"rgb(85,0,85)",borderRadius:"14px",
                  fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                  fontSize:".88rem",letterSpacing:".06em",textDecoration:"none",
                  width:"fit-content" }}
                onMouseEnter={e=>{ e.currentTarget.style.background="rgb(85,0,85)";
                  e.currentTarget.style.color="#fff"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="";
                  e.currentTarget.style.color="rgb(85,0,85)"; }}>
                {hub.flatPageLabel} →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 4. Children grid — same sp-card / sp-grid pattern used by HowWeDoIt / OtherServices */}
        <section className="sp-sec sp-sec-base sp-z" style={{ position:"relative" }}>
          <div className="sp-grid" />
          <div className="sp-blob" style={{ width:"500px",height:"400px",
              background:"rgba(85,0,85,.045)",top:0,right:"-80px" }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
            <Reveal>
              <div style={{ textAlign:"center",marginBottom:"clamp(40px,5vw,70px)" }}>
                <PLabel t="Go Deeper" />
                <PH2 center>Pick the {hub.title} specialty<br />that matches your problem.</PH2>
              </div>
            </Reveal>
            <div className="sp-3col" style={{
              display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"18px",
            }}>
              {hub.children.map((child, i) => {
                const isLive = child.status === "live";
                const Card = (
                  <motion.div className="sp-hw" whileHover={isLive ? { y:-5 } : {}}
                    transition={{ duration:.25 }}
                    style={{ opacity: isLive ? 1 : .6, cursor: isLive ? "pointer" : "default" }}>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                        fontSize:"1.15rem",color:"rgb(29,2,29)",lineHeight:1.25,
                        display:"flex",alignItems:"center",gap:"10px" }}>
                      {child.title}
                      {!isLive && (
                        <span style={{ fontFamily:"'Rubik',sans-serif",fontSize:".6rem",
                            fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",
                            color:"rgb(85,0,85)",background:"rgba(85,0,85,.08)",
                            padding:"3px 9px",borderRadius:"100px" }}>Coming Soon</span>
                      )}
                    </h3>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",
                        color:"#777",lineHeight:1.65,fontWeight:300 }}>
                      {child.sub}
                    </p>
                    {isLive && (
                      <span style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:700,
                          fontSize:".82rem",color:"rgb(85,0,85)" }}>Read more →</span>
                    )}
                  </motion.div>
                );
                return (
                  <Reveal key={child.slug} delay={i*.06}>
                    {isLive
                      ? <Link href={`/services/${hubKey}/${child.slug}`} style={{ textDecoration:"none",display:"block" }}>{Card}</Link>
                      : Card}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Back-to-hub / services link — same sp-card pattern as ServicePage's RelatedHub block */}
        <section className="sp-sec sp-sec-light sp-z">
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal>
              <Link href="/services" style={{ textDecoration:"none",display:"block" }}>
                <div className="sp-card" style={{
                  padding:"clamp(28px,4vw,40px)",cursor:"pointer",
                  display:"flex",flexWrap:"wrap",alignItems:"center",
                  justifyContent:"space-between",gap:"20px",
                }}>
                  <div>
                    <PLabel t="All Services" />
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                        fontSize:"clamp(1.2rem,2.5vw,1.6rem)",color:"rgb(29,2,29)",
                        lineHeight:1.25 }}>
                      See all nine Graphical Proximity services
                    </h3>
                  </div>
                  <div style={{ width:"44px",height:"44px",borderRadius:"50%",
                      border:"1.5px solid rgba(85,0,85,.2)",display:"flex",
                      alignItems:"center",justifyContent:"center",color:"rgb(85,0,85)",
                      fontSize:"1.1rem",flexShrink:0 }}>→</div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 6. Same CTA band used everywhere */}
        <CTABand title={hub.title} />

      </div>
    </>
  );
}
