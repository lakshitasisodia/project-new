"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Reveal, Ticker, Label, H2, Body, SvgOrbit, SvgGrowth, SvgSEO, SvgWebDev, SvgBranding, SvgSocial, SvgAI, SvgPR, SvgDigitalMkt, LIGHT_CSS } from "./shared";
import serviceHubData from "@/components/data/serviceHubData";

const CSS = LIGHT_CSS;

// All 9 services — slugs match servicesData keys and App.jsx routes exactly
const SERVICES = [
  { n:"01", slug:"digital-pr",            title:"Digital PR & Online Authority",              sub:"Editorial placements, backlink building, and media outreach that compounds." },
  { n:"02", slug:"digital-marketing",     title:"Digital Marketing & Growth Strategy",        sub:"Brand positioning, content funnels, and multi-channel campaigns built for ROI." },
  { n:"03", slug:"performance-marketing", title:"Performance Marketing — Google & Meta Ads",  sub:"Paid campaigns live in 5–7 days. Every rupee tracked. Every lead counted." },
  { n:"04", slug:"branding",              title:"Brand Identity & Design",                    sub:"Logo, visual system, positioning, and guidelines. Built to be remembered." },
  { n:"05", slug:"web-development",       title:"Web Design & Development",                   sub:"Fast, mobile-first, conversion-optimised websites and web applications." },
  { n:"06", slug:"seo-services",          title:"SEO & Search Engine Optimisation",           sub:"Page-one rankings. Organic traffic that compounds without ongoing ad spend." },
  { n:"07", slug:"social-media",          title:"Social Media Management & Content",          sub:"Strategy, creation, community management, and analytics across platforms." },
  { n:"08", slug:"linkedin-branding",     title:"LinkedIn Personal Branding",                 sub:"Authority building, content, and DM management that generates inbound leads." },
  { n:"09", slug:"ai-integration",        title:"AI Integration & Marketing Automation",      sub:"Automate workflows. Scale content output. Move faster without hiring." },
];

// SVG map for visual showcase section
const SVG_MAP = {
  "seo-services":       <SvgSEO />,
  "web-development":    <SvgWebDev />,
  "branding":           <SvgBranding />,
  "social-media":       <SvgSocial />,
  "ai-integration":     <SvgAI />,
  "digital-pr":         <SvgPR />,
  "digital-marketing":  <SvgGrowth />,
  "performance-marketing": <SvgDigitalMkt />,
  "linkedin-branding":  <SvgSocial />,
};

// Additive: hubs rendered from serviceHubData.js. Batch 1 only defines "seo";
// later batches add more keys there and they appear here automatically —
// no further change to this file needed.
const HUBS = Object.entries(serviceHubData).map(([key, hub]) => ({ key, ...hub }));

function ServicesOutput() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const heroY  = useTransform(scrollYProgress, [0, 0.18], [0, -50]);
  const heroOp = useTransform(scrollYProgress, [0, 0.2],  [1, 0]);

  return (
    <>
      <style>{CSS}</style>
      <div id="gp-services" className="gp-page" ref={ref}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ position:"relative",minHeight:"72vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",padding:"clamp(60px,10vw,120px) clamp(20px,6vw,100px) clamp(50px,6vw,80px)",overflow:"hidden" }}>
          <div className="gp-lg" />
          <div className="gp-lb" style={{ width:"550px",height:"450px",background:"rgba(85,0,85,.06)",top:"-60px",right:"-120px" }} />

          <motion.div style={{ y:heroY, opacity:heroOp, position:"relative", zIndex:2 }}>
            <motion.div initial={{ opacity:0,scale:.85 }} animate={{ opacity:1,scale:1 }} transition={{ duration:.6 }} className="gp-pill" style={{ marginBottom:"20px" }}>
              <span className="gp-dot" style={{ width:"7px",height:"7px",borderRadius:"50%",background:"rgb(85,0,85)",display:"inline-block" }} />
              Digital Marketing Services
            </motion.div>
            <motion.h1 initial={{ opacity:0,y:40 }} animate={{ opacity:1,y:0 }} transition={{ duration:.9,delay:.15,ease:[.22,1,.36,1] }}
              style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,lineHeight:1.0,letterSpacing:"-.03em",color:"rgb(29,2,29)",fontSize:"clamp(2.8rem,8vw,6.5rem)",margin:0 }}>
              Nine Services.
              <br />
              <span style={{ background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                One Growth System.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity:0,y:22 }} animate={{ opacity:1,y:0 }} transition={{ duration:.85,delay:.35 }}
              style={{ fontFamily:"'Nunito',sans-serif",fontSize:"clamp(1rem,2vw,1.3rem)",fontWeight:300,color:"#777",maxWidth:"540px",lineHeight:1.78,marginTop:"20px" }}>
              From performance marketing (Google & Meta Ads) and SEO to LinkedIn branding and AI automation — every service is built to generate leads, build authority, and compound over time.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity:0,scale:.7 }} animate={{ opacity:1,scale:1 }} transition={{ duration:1.2,delay:.5 }}
            className="gp-fl" style={{ position:"absolute",right:"clamp(20px,5vw,80px)",top:"50%",transform:"translateY(-50%)",width:"clamp(200px,28vw,380px)",opacity:.55,zIndex:1,pointerEvents:"none" }}>
            <SvgOrbit />
          </motion.div>
        </section>

        <Ticker />

        {/* ── SERVICE LIST ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"20px" }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <motion.div whileHover={{ x: 6 }} transition={{ duration:.25 }}>
                  <Link href={`/${s.slug}`} style={{ textDecoration:"none",display:"block" }}>
                    <div style={{
                      display:"grid", gridTemplateColumns:"60px 1fr auto",
                      alignItems:"center", gap:"clamp(16px,3vw,40px)",
                      padding:"clamp(22px,3vw,36px) clamp(20px,3vw,40px)",
                      background:"#fff", border:"1.5px solid rgba(85,0,85,.1)",
                      borderRadius:"20px", cursor:"pointer",
                      transition:"border-color .25s,box-shadow .25s",
                    }}
                      onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(85,0,85,.4)"; e.currentTarget.style.boxShadow="0 10px 40px rgba(85,0,85,.1)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(85,0,85,.1)"; e.currentTarget.style.boxShadow=""; }}>
                      <span style={{ fontFamily:"'Rubik',sans-serif",fontSize:".75rem",fontWeight:700,letterSpacing:".14em",color:"rgb(85,0,85)" }}>{s.n}</span>
                      <div>
                        <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"clamp(1.1rem,2.2vw,1.5rem)",color:"rgb(29,2,29)",marginBottom:"6px",letterSpacing:"-.01em" }}>{s.title}</h3>
                        <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".93rem",color:"#888",lineHeight:1.5 }}>{s.sub}</p>
                      </div>
                      <div style={{ width:"44px",height:"44px",borderRadius:"50%",border:"1.5px solid rgba(85,0,85,.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgb(85,0,85)",fontSize:"1.1rem",flexShrink:0,transition:"all .25s" }}>→</div>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── EXPLORE BY SPECIALTY (new, additive) ───────────────────────────
             Links to the new nested /services/<hub> pages. Reuses the exact
             same card markup/style as the SERVICE LIST section above — no new
             visual pattern. Renders nothing extra if serviceHubData.js is
             ever empty, so this section costs nothing until hubs exist. */}
        {HUBS.length > 0 && (
          <section className="gp-z" style={{ padding:"0 clamp(20px,6vw,100px) clamp(50px,8vw,90px)" }}>
            <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
              <Reveal>
                <div style={{ marginBottom:"clamp(28px,4vw,44px)" }}>
                  <Label>Go Deeper</Label>
                  <H2>Explore by specialty.</H2>
                  <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1rem",color:"#888",fontWeight:300,maxWidth:"640px",marginTop:"12px",lineHeight:1.7 }}>
                    Some services split into distinct specialties worth their own page. Start here if you already know the specific problem you're solving.
                  </p>
                </div>
              </Reveal>
              <div style={{ display:"flex",flexDirection:"column",gap:"16px" }}>
                {HUBS.map((hub, i) => (
                  <Reveal key={hub.key} delay={i * 0.06}>
                    <motion.div whileHover={{ x: 6 }} transition={{ duration:.25 }}>
                      <Link href={`/services/${hub.key}`} style={{ textDecoration:"none",display:"block" }}>
                        <div style={{
                          display:"grid", gridTemplateColumns:"1fr auto",
                          alignItems:"center", gap:"clamp(16px,3vw,40px)",
                          padding:"clamp(20px,3vw,30px) clamp(20px,3vw,36px)",
                          background:"#f4f0f4", border:"1.5px solid rgba(85,0,85,.1)",
                          borderRadius:"20px", cursor:"pointer",
                          transition:"border-color .25s,box-shadow .25s",
                        }}
                          onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(85,0,85,.4)"; e.currentTarget.style.boxShadow="0 10px 40px rgba(85,0,85,.1)"; }}
                          onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(85,0,85,.1)"; e.currentTarget.style.boxShadow=""; }}>
                          <div>
                            <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.1rem",color:"rgb(29,2,29)",marginBottom:"4px" }}>{hub.title} — {hub.children.length} specialties</h3>
                            <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".88rem",color:"#888",lineHeight:1.5 }}>{hub.children.map(c=>c.title).join(" · ")}</p>
                          </div>
                          <div style={{ width:"40px",height:"40px",borderRadius:"50%",border:"1.5px solid rgba(85,0,85,.2)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgb(85,0,85)",fontSize:"1rem",flexShrink:0 }}>→</div>
                        </div>
                      </Link>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── PROCESS ─────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div className="gp-lg" style={{ opacity:.5 }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,56px)" }}><Label>How It Works</Label><H2 center>From brief to results.<br />Here is the process.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"14px" }}>
              {[
                { n:"01", t:"Discovery",   d:"We learn your business, your audience, and your growth goals in depth." },
                { n:"02", t:"Strategy",    d:"A custom digital marketing plan built for your market. No templates." },
                { n:"03", t:"Execution",   d:"We build, launch, and optimise — from websites to ad campaigns to SEO." },
                { n:"04", t:"Measurement", d:"Clear reporting on what is working, what is improving, and what is next." },
              ].map((step,i)=>(
                <Reveal key={step.n} delay={i*.07}>
                  <div className="gp-card" style={{ padding:"26px 24px" }}>
                    <span style={{ fontFamily:"'Rubik',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"rgb(85,0,85)",display:"block",marginBottom:"12px" }}>{step.n}</span>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.1rem",color:"rgb(29,2,29)",marginBottom:"8px" }}>{step.t}</h3>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#777",lineHeight:1.6 }}>{step.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SVG SHOWCASE ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"0 clamp(20px,6vw,100px) clamp(50px,8vw,90px)" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,56px)",marginTop:"clamp(36px,5vw,56px)" }}><Label>Visual Overview</Label><H2 center>Every service, visualised.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"16px" }}>
              {SERVICES.map((s,i)=>(
                <Reveal key={s.slug} delay={i*.05}>
                  <Link href={`/${s.slug}`} style={{ textDecoration:"none" }}>
                    <div className="gp-card" style={{ padding:"28px",cursor:"pointer" }}>
                      <div style={{ marginBottom:"18px" }}>{SVG_MAP[s.slug] || <SvgGrowth />}</div>
                      <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.05rem",color:"rgb(29,2,29)",lineHeight:1.3 }}>{s.title} →</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ margin:"0 clamp(16px,4vw,60px)",marginBottom:"60px",padding:"clamp(40px,6vw,70px) clamp(30px,5vw,80px)",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",borderRadius:"28px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none" }} />
          <div style={{ position:"relative",zIndex:1 }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#fff",lineHeight:1.05,marginBottom:"10px" }}>Not sure which service you need?</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(255,255,255,.65)",fontWeight:300 }}>Tell us your goal. We will map the right path.</p>
          </div>
          <Link href="/get-intouch-form" style={{ position:"relative",zIndex:1,display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 36px",background:"#fff",color:"rgb(85,0,85)",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none" }}>
            Get a Free Consultation →
          </Link>
        </section>

      </div>
    </>
  );
}

export default ServicesOutput;
