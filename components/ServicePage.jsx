"use client";

import React, { useRef, useState } from "react";
import {
  motion, useScroll, useTransform,
  useInView, AnimatePresence
} from "framer-motion";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import servicesData from "@/components/data/servicesData";
import serviceExtensions from "@/components/data/serviceExtensions";

// Additive merge only — servicesData.js itself is never modified.
// serviceExtensions.js supplies: new nested-page keys (e.g. "seo-technical-seo")
// and per-key overrides (e.g. hubLink added onto the existing "seo-services" entry).
const allServiceData = { ...servicesData, ...serviceExtensions };

/* ─────────────────────────────────────────────────────────────────────────────
   ServicePage.jsx  —  single component, all service routes, data-driven
   CHANGE LOG (additive only, no visual/behavioural change to any existing route):
     - Reveal, PLabel, PH2, PBody, Ticker, CTABand, and CSS are now exported so
       the new /services/<hub> pages (ServiceHubPage.jsx) can reuse the exact
       same code instead of duplicating it.
     - A new RelatedHub block renders ONLY when service.hubLink is present in
       servicesData.js. No existing service currently sets that field, so this
       is a zero-visual-change addition for all 9 current routes.
   ───────────────────────────────────────────────────────────────────────────── */

export const CSS = `
  .sp { background:#fafaf8; color:rgb(29,2,29); overflow-x:hidden; }
  .sp *, .sp *::before, .sp *::after { box-sizing:border-box; margin:0; padding:0; }

  /* Grid pattern */
  .sp-grid {
    position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image:
      linear-gradient(rgba(85,0,85,.03) 1px,transparent 1px),
      linear-gradient(90deg,rgba(85,0,85,.03) 1px,transparent 1px);
    background-size:64px 64px;
  }
  .sp-blob { position:absolute; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
  .sp-z { position:relative; z-index:1; }

  /* Ticker */
  .sp-tk  { display:flex; white-space:nowrap; animation:sp-tick 32s linear infinite; }
  @keyframes sp-tick { to { transform:translateX(-50%); } }

  /* Float animation */
  .sp-fl  { animation:sp-fl 7s ease-in-out infinite; }
  .sp-fl2 { animation:sp-fl 9s ease-in-out infinite; animation-delay:-4s; }
  @keyframes sp-fl {
    0%,100% { transform:translateY(0) rotate(0deg);   }
    40%     { transform:translateY(-14px) rotate(1deg); }
    70%     { transform:translateY(-6px) rotate(-.8deg); }
  }

  /* Dot pulse */
  .sp-dot { animation:sp-pulse 2s ease-in-out infinite; }
  @keyframes sp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.55)} }

  /* Cards */
  .sp-card {
    background:#fff;
    border:1.5px solid rgba(85,0,85,.1);
    border-radius:20px;
    transition:transform .28s,border-color .28s,box-shadow .28s;
  }
  .sp-card:hover {
    transform:translateY(-6px);
    border-color:rgba(85,0,85,.35);
    box-shadow:0 20px 60px rgba(85,0,85,.13);
  }

  /* How-We-Do-It cards */
  .sp-hw {
    background:#fff;
    border:1.5px solid rgba(85,0,85,.09);
    border-radius:20px;
    padding:32px 28px;
    transition:transform .28s,border-color .28s,box-shadow .28s;
    display:flex; flex-direction:column; gap:14px;
  }
  .sp-hw:hover {
    transform:translateY(-6px);
    border-color:rgba(85,0,85,.3);
    box-shadow:0 16px 50px rgba(85,0,85,.11);
  }

  /* FAQ items */
  .sp-fq {
    border-bottom:1.5px solid rgba(29,2,29,.07);
    cursor:pointer;
    padding:20px 0;
    transition:background .2s;
  }
  .sp-fq:hover { padding-left:4px; }

  /* Image overlapping card effect */
  .sp-img-card {
    border-radius:24px;
    overflow:hidden;
    box-shadow:0 24px 80px rgba(85,0,85,.2);
    position:relative;
  }

  /* Stat pill */
  .sp-stat-pill {
    display:inline-flex; align-items:center; gap:10px;
    padding:14px 22px;
    background:#fff;
    border:1.5px solid rgba(85,0,85,.12);
    border-radius:16px;
    box-shadow:0 4px 20px rgba(85,0,85,.07);
  }

  /* Section padding helper */
  .sp-sec {
    position:relative;
    padding:clamp(60px,9vw,110px) clamp(20px,6vw,100px);
    overflow:hidden;
  }
  .sp-sec-light { background:#f4f0f4; }
  .sp-sec-white { background:#fff; }
  .sp-sec-base  { background:#fafaf8; }

  /* Breadcrumb */
  .sp-bc a { color:#df45ed; text-decoration:none; font-weight:600; }

  /* Quote */
  .sp-quote {
    border-left:4px solid rgb(85,0,85);
    padding:20px 24px;
    background:rgba(85,0,85,.04);
    border-radius:0 12px 12px 0;
    font-family:'Montserrat',sans-serif;
    font-style:italic;
    font-size:clamp(1.05rem,2vw,1.35rem);
    font-weight:700;
    color:rgb(29,2,29);
    line-height:1.5;
  }

  @media(max-width:700px){
    .sp-2col { grid-template-columns:1fr !important; }
    .sp-3col { grid-template-columns:1fr 1fr !important; }
  }
  @media(max-width:480px){
    .sp-3col { grid-template-columns:1fr !important; }
  }
`;

// ── Primitives ────────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, dir = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      variants={{
        h:{ opacity:0,
            y: dir==="up"?44:dir==="down"?-44:0,
            x: dir==="left"?60:dir==="right"?-60:0 },
        v:{ opacity:1, y:0, x:0 },
      }}
      initial="h" animate={inView?"v":"h"}
      transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
    >{children}</motion.div>
  );
}

export const PLabel = ({ t }) => (
  <p style={{ fontFamily:"'Rubik',sans-serif", fontSize:".7rem", fontWeight:700,
      letterSpacing:".18em", textTransform:"uppercase",
      color:"rgb(85,0,85)", marginBottom:"12px" }}>
    — {t} —
  </p>
);

export const PH2 = ({ children, center }) => (
  <h2 style={{
    fontFamily:"'Montserrat',sans-serif", fontWeight:900,
    fontSize:"clamp(1.9rem,4.2vw,3.2rem)",
    lineHeight:1.05, letterSpacing:"-.025em", color:"rgb(29,2,29)",
    textAlign: center ? "center" : "left",
  }}>{children}</h2>
);

export const PBody = ({ children }) => (
  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(1rem,1.8vw,1.13rem)",
      lineHeight:1.85, color:"#5a5a5a", fontWeight:300 }}>
    {children}
  </p>
);

// ── Ticker ────────────────────────────────────────────────────────────────────
export function Ticker({ title }) {
  const words = [title,"·","Graphical Proximity","·","India","·","Digital Growth","·",
                 title,"·","Graphical Proximity","·","India","·","Digital Growth","·"];
  return (
    <div className="sp-z" style={{ borderTop:"1px solid rgba(85,0,85,.1)",
        borderBottom:"1px solid rgba(85,0,85,.1)", padding:"14px 0",
        overflow:"hidden", background:"#fff" }}>
      <div className="sp-tk">
        {[...Array(2)].map((_,r)=>(
          <React.Fragment key={r}>
            {words.map((w,i)=>(
              <span key={`${r}-${i}`} style={{
                fontFamily:"'Montserrat',sans-serif", fontSize:".68rem", fontWeight:700,
                letterSpacing:".2em", textTransform:"uppercase",
                padding:"0 20px", whiteSpace:"nowrap",
                color: w==="·" ? "rgb(85,0,85)" : "rgba(29,2,29,.2)",
              }}>{w}</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── 1. HERO ───────────────────────────────────────────────────────────────────
export function ServiceHero({ service }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const bgY   = useTransform(scrollYProgress,[0,1],[0,90]);
  const textY = useTransform(scrollYProgress,[0,.3],[0,-50]);
  const op    = useTransform(scrollYProgress,[0,.3],[1,0]);

  return (
     <section ref={ref} style={{
      position:"relative", minHeight:"88vh",
      display:"flex", alignItems:"flex-end",
      overflow:"hidden", background:"#060006",
    }}>
      {/* BG image — parallax on Y only */}
      <motion.div style={{ position:"absolute", inset:0, y:bgY }}>
      </motion.div>

      {/* Gradient */}
      <div style={{ position:"absolute", inset:0,
        background:"linear-gradient(to top,rgba(6,0,6,.96) 0%,rgba(6,0,6,.6) 38%,rgba(6,0,6,.12) 100%)",
        pointerEvents:"none" }} />

      {/* Grid */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(223,69,237,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(223,69,237,.04) 1px,transparent 1px)",
        backgroundSize:"64px 64px" }} />

      {/* Accent glow */}
      <div style={{ position:"absolute", bottom:"-80px", left:"10%",
        width:"500px", height:"300px", borderRadius:"50%",
        background:"rgba(85,0,85,.18)", filter:"blur(100px)", pointerEvents:"none" }} />

      {/* Content — NO y/opacity transforms. Text stays put. */}
      <div style={{ position:"relative", zIndex:10, width:"100%",
          padding:"clamp(40px,7vw,90px) clamp(20px,6vw,100px) clamp(50px,6vw,80px)" }}>

        <div style={{ maxWidth:"1200px" }}>
          {/* Breadcrumb */}
          <motion.p
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.55 }}
            className="sp-bc"
            style={{ fontFamily:"'Rubik',sans-serif", fontSize:".82rem",
              color:"rgba(255,255,255,.38)", marginBottom:"18px" }}>
            <Link href="/services">Services</Link>
            <span style={{ margin:"0 8px", opacity:.4 }}>›</span>
            <span style={{ color:"rgba(255,255,255,.6)" }}>{service.title}</span>
          </motion.p>

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.6, delay:.1 }}
            style={{ display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"9px 20px", borderRadius:"100px",
              border:"1px solid rgba(223,69,237,.32)",
              background:"rgba(223,69,237,.09)",
              fontFamily:"'Rubik',sans-serif", fontSize:".72rem", fontWeight:600,
              letterSpacing:".1em", textTransform:"uppercase", color:"#df45ed",
              marginBottom:"22px" }}>
            <span className="sp-dot" style={{ width:"7px", height:"7px",
              borderRadius:"50%", background:"#df45ed", display:"inline-block" }} />
            Graphical Proximity
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity:0, y:44 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.95, delay:.18, ease:[.22,1,.36,1] }}
            style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900,
              fontSize:"clamp(2.8rem,7.5vw,6.5rem)", lineHeight:.97,
              letterSpacing:"-.03em", color:"#fff",
              maxWidth:"820px", marginBottom:"22px" }}>
            {service.title}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.85, delay:.32 }}
            style={{ fontFamily:"'Nunito',sans-serif",
              fontSize:"clamp(1rem,2vw,1.28rem)", fontWeight:300,
              color:"rgba(255,255,255,.52)", maxWidth:"580px", lineHeight:1.78 }}>
            {service.details.subtitle.length > 160
              ? service.details.subtitle.slice(0,160) + "…"
              : service.details.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:.8, delay:.46 }}
            style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginTop:"36px" }}>
            <Link href="/get-intouch-form" style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"16px 36px",
                background:"linear-gradient(135deg,#df45ed,#8d07be)",
                color:"#fff", borderRadius:"14px",
                fontFamily:"'Montserrat',sans-serif", fontWeight:800,
                fontSize:".92rem", letterSpacing:".06em", textDecoration:"none",
                boxShadow:"0 10px 36px rgba(223,69,237,.42)",
                transition:"transform .2s,box-shadow .2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)";
                e.currentTarget.style.boxShadow="0 16px 48px rgba(223,69,237,.58)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="";
                e.currentTarget.style.boxShadow="0 10px 36px rgba(223,69,237,.42)"; }}>
              Start This Service →
            </Link>
            <Link href="/services" style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"16px 28px",
                border:"1px solid rgba(255,255,255,.2)", borderRadius:"14px",
                color:"rgba(255,255,255,.6)",
                fontFamily:"'Rubik',sans-serif", fontSize:".9rem", fontWeight:500,
                textDecoration:"none", transition:"all .25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.5)";
                e.currentTarget.style.color="#fff"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.2)";
                e.currentTarget.style.color="rgba(255,255,255,.6)"; }}>
              All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── 2. INTRO SPLIT — text left, single image right ────────────────────────────
function IntroSplit({ details }) {
  return (
    <section className="sp-sec sp-sec-white sp-z" style={{ position:"relative" }}>
      <div className="sp-blob" style={{ width:"500px",height:"400px",
          background:"rgba(85,0,85,.055)",top:"-60px",right:"-100px" }} />

      <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
        <div className="sp-2col" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"clamp(40px,6vw,100px)",
          alignItems:"center",
        }}>
          {/* Left — all text */}
          <div style={{ display:"flex",flexDirection:"column",gap:"28px" }}>
            <Reveal>
              <PLabel t="Overview" />
              <h2 style={{
                fontFamily:"'Montserrat',sans-serif",fontWeight:900,
                fontSize:"clamp(2rem,4vw,3rem)",lineHeight:1.05,
                letterSpacing:"-.025em",color:"rgb(29,2,29)",marginBottom:"8px",
              }}>{details.heading}</h2>
            </Reveal>
            <Reveal delay={.1}><PBody>{details.intro}</PBody></Reveal>
            <Reveal delay={.18}>
              <blockquote className="sp-quote">"{details.quote}"</blockquote>
            </Reveal>
            <Reveal delay={.24}>
              <Link href="/get-intouch-form" style={{
                  display:"inline-flex",alignItems:"center",gap:"10px",
                  padding:"14px 32px",
                  background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",
                  color:"#fff",borderRadius:"14px",
                  fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                  fontSize:".88rem",letterSpacing:".06em",textDecoration:"none",
                  width:"fit-content",
                  boxShadow:"0 8px 28px rgba(85,0,85,.28)",
                  transition:"transform .2s,box-shadow .2s" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)";
                  e.currentTarget.style.boxShadow="0 14px 40px rgba(85,0,85,.4)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="";
                  e.currentTarget.style.boxShadow="0 8px 28px rgba(85,0,85,.28)"; }}>
                Get in Touch →
              </Link>
            </Reveal>
          </div>

          {/* Right — single tall image */}
          <Reveal dir="left" delay={.14}>
            <motion.div className="sp-img-card sp-fl"
              style={{  maxHeight:"400px" }}>
              <img src={details.image1} alt={details.heading}
                style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} />
              
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── 3. DETAILS REVERSE — full-width image left, text right ────────────────────
function DetailReverse({ details }) {
  return (
    <section className="sp-sec sp-sec-light sp-z" style={{ position:"relative" }}>
      <div className="sp-blob" style={{ width:"450px",height:"380px",
          background:"rgba(223,69,237,.055)",bottom:"-40px",left:"-80px" }} />

      <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
        <div className="sp-2col" style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"clamp(40px,6vw,100px)",
          alignItems:"center",
        }}>
          {/* Left — square image */}
          <Reveal dir="right" delay={.1}>
            <motion.div className="sp-img-card sp-fl2"
              style={{  maxHeight:"400px" }}>
              <img src={details.image2} alt="Service detail"
                style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} />
              {/* Stats pill overlay */}
              <div style={{ position:"absolute",top:"20px",left:"20px" }}>
                <div style={{ background:"rgba(255,255,255,.95)",
                    backdropFilter:"blur(12px)",borderRadius:"14px",
                    padding:"14px 20px",
                    boxShadow:"0 8px 32px rgba(29,2,29,.14)" }}>
                  <p style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
                      fontSize:"1.6rem",
                      background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",
                      WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                      backgroundClip:"text",lineHeight:1 }}>GP</p>
                  <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".68rem",
                      fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",
                      color:"rgba(29,2,29,.55)",marginTop:"4px" }}>Est. 2020</p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right — text */}
          <div style={{ display:"flex",flexDirection:"column",gap:"24px" }}>
            <Reveal>
              <PLabel t="Why It Matters" />
              <PH2>{details.heading}</PH2>
            </Reveal>
            <Reveal delay={.1}>
              <PBody>{details.subtitle}</PBody>
            </Reveal>

            {/* 3 micro-stats */}
            <Reveal delay={.18}>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"8px" }}>
                {[
                  { n:"10+", l:"Active Clients"     },
                  { n:"25+", l:"Projects Delivered"  },
                  { n:"4+",  l:"Years Experience"    },
                  { n:"100%",l:"Delivery Rate"       },
                ].map(s=>(
                  <div key={s.l} className="sp-stat-pill">
                    <p style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
                        fontSize:"1.4rem",lineHeight:1,
                        background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",
                        WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                        backgroundClip:"text" }}>{s.n}</p>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".82rem",
                        color:"#888",fontWeight:400 }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 4. HOW WE DO IT — proper 3-col card grid ─────────────────────────────────
function HowWeDoIt({ serviceName, data }) {
  return (
    <section className="sp-sec sp-sec-base sp-z" style={{ position:"relative" }}>
      <div className="sp-grid" />
      <div className="sp-blob" style={{ width:"500px",height:"400px",
          background:"rgba(85,0,85,.045)",top:0,right:"-80px" }} />

      <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
        <Reveal>
          <div style={{ textAlign:"center",marginBottom:"clamp(40px,5vw,70px)" }}>
            <PLabel t="Our Process" />
            <PH2 center>
              How we deliver{" "}
              <span style={{ background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",
                  WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                  backgroundClip:"text" }}>
                {serviceName}
              </span>
            </PH2>
            {data.subtitle && (
              <p style={{ fontFamily:"'Nunito',sans-serif",
                  fontSize:"clamp(1rem,1.8vw,1.12rem)",fontWeight:300,
                  color:"#777",maxWidth:"580px",margin:"16px auto 0",lineHeight:1.75 }}>
                {data.subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="sp-3col" style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"18px",
        }}>
          {data.items.map((item,i)=>(
            <Reveal key={i} delay={i*.06}>
              <motion.div className="sp-hw" whileHover={{ y:-5 }}
                transition={{ duration:.25 }}>
                {/* Icon — square container, fixed size */}
                <div style={{
                  width:"64px",height:"64px",borderRadius:"16px",
                  background:"rgba(85,0,85,.07)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  flexShrink:0,
                }}>
                  <img src={item.icon} alt={item.title}
                    style={{ width:"100%",height:"100%",objectFit:"contain" }} />
                </div>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                    fontSize:"1.05rem",color:"rgb(29,2,29)",lineHeight:1.25 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",
                    color:"#777",lineHeight:1.65,fontWeight:300 }}>
                  {item.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. WHAT IS — full-width editorial, expandable ────────────────────────────
function WhatIs({ data }) {
  const [more, setMore] = useState(false);
  const preview = data.content.slice(0,3);
  const rest    = data.content.slice(3);

  return (
    <section className="sp-sec sp-sec-light sp-z" style={{ position:"relative" }}>
      <div className="sp-blob" style={{ width:"400px",height:"320px",
          background:"rgba(223,69,237,.05)",bottom:"-40px",right:"-60px" }} />

      <div style={{ maxWidth:"900px",margin:"0 auto",position:"relative",zIndex:1 }}>
        <Reveal>
          <div style={{ marginBottom:"clamp(32px,4vw,52px)" }}>
            <PLabel t="Deep Dive" />
            <PH2>{data.title}</PH2>
          </div>
        </Reveal>

        <div style={{ display:"flex",flexDirection:"column",gap:"22px" }}>
          {preview.map((p,i)=>(
            <Reveal key={i} delay={i*.07}>
              <PBody>{p}</PBody>
            </Reveal>
          ))}

          <AnimatePresence>
            {more && rest.map((p,i)=>(
              <motion.div key={`more-${i}`}
                initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }}
                exit={{ opacity:0 }}
                transition={{ duration:.5,delay:i*.05 }}>
                <PBody>{p}</PBody>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {rest.length>0 && (
          <Reveal delay={.1}>
            <button onClick={()=>setMore(v=>!v)}
              style={{
                marginTop:"32px",display:"inline-flex",alignItems:"center",gap:"8px",
                padding:"13px 28px",
                border:"1.5px solid rgba(85,0,85,.25)",borderRadius:"12px",
                color:"rgb(85,0,85)",fontFamily:"'Rubik',sans-serif",
                fontWeight:600,fontSize:".88rem",background:"none",cursor:"pointer",
                transition:"all .25s",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgb(85,0,85)";
                e.currentTarget.style.color="#fff"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="";
                e.currentTarget.style.color="rgb(85,0,85)"; }}>
              {more ? "Show Less ↑" : `Continue Reading (${rest.length} more sections) ↓`}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
}

// ── 6. FAQ — clean accordion + image card ────────────────────────────────────
function FAQ({ data }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="sp-sec sp-sec-base sp-z" style={{ position:"relative" }}>
      <div className="sp-grid" />
      <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>

        <Reveal>
          <div style={{ marginBottom:"clamp(36px,5vw,60px)" }}>
            <PLabel t="FAQ" />
            <PH2>{data.heading}</PH2>
          </div>
        </Reveal>

        <div className="sp-2col" style={{
          display:"grid",
          gridTemplateColumns:"1.1fr .9fr",
          gap:"clamp(40px,6vw,80px)",
          alignItems:"start",
        }}>
          {/* Left — misconception + accordion */}
          <div style={{ display:"flex",flexDirection:"column",gap:"0" }}>
            <Reveal>
              <div style={{
                padding:"22px 24px",marginBottom:"28px",
                background:"rgba(85,0,85,.06)",
                borderRadius:"16px",borderLeft:"4px solid rgb(85,0,85)",
              }}>
                <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".68rem",fontWeight:700,
                    letterSpacing:".12em",textTransform:"uppercase",color:"rgb(85,0,85)",
                    marginBottom:"8px" }}>Common Misconception</p>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".98rem",
                    lineHeight:1.7,color:"rgb(29,2,29)",fontWeight:400 }}>
                  {data.misconception}
                </p>
              </div>
            </Reveal>

            {data.faqs.map((faq,i)=>(
              <Reveal key={i} delay={i*.06}>
                <div className="sp-fq"
                  onClick={()=>setOpen(open===i?null:i)}>
                  <div style={{ display:"flex",alignItems:"flex-start",
                      justifyContent:"space-between",gap:"16px" }}>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:700,
                        fontSize:"clamp(1rem,1.8vw,1.1rem)",color:"rgb(29,2,29)",
                        lineHeight:1.35,flex:1 }}>
                      {faq.question}
                    </h3>
                    <div style={{ flexShrink:0,marginTop:"2px" }}>
                      {open===i
                        ? <Minus size={18} color="rgb(85,0,85)" />
                        : <Plus  size={18} color="rgb(85,0,85)" />
                      }
                    </div>
                  </div>
                  <AnimatePresence>
                    {open===i && (
                      <motion.p
                        initial={{ opacity:0,height:0 }}
                        animate={{ opacity:1,height:"auto" }}
                        exit={{ opacity:0,height:0 }}
                        transition={{ duration:.3 }}
                        style={{ fontFamily:"'Nunito',sans-serif",
                            fontSize:"clamp(.9rem,1.6vw,1.02rem)",
                            lineHeight:1.78,color:"#666",
                            marginTop:"14px",fontWeight:300 }}>
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right — image with overlay */}
          <Reveal dir="left" delay={.16}>
            <div className="sp-img-card" style={{ position:"sticky",top:"100px" }}>
              <img src={data.image} alt={data.tagline}
                style={{ width:"100%",height:"clamp(340px,40vw,500px)",
                    objectFit:"cover",display:"block" }} />
              {/* Overlay text */}
              <div style={{
                position:"absolute",inset:0,
                background:"linear-gradient(to top,rgba(29,2,29,.9) 0%,rgba(29,2,29,.3) 55%,transparent 100%)",
                display:"flex",flexDirection:"column",
                justifyContent:"flex-end",padding:"28px 28px 32px",
              }}>
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
                    fontSize:"clamp(1.3rem,2.5vw,1.7rem)",color:"#fff",
                    lineHeight:1.15,marginBottom:"8px" }}>
                  {data.tagline}
                </h3>
                <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".93rem",
                    color:"rgba(255,255,255,.6)",fontWeight:300,lineHeight:1.6 }}>
                  {data.subtitle}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── 7. CTA BAND ───────────────────────────────────────────────────────────────
export function CTABand({ title }) {
  return (
    <div className="sp-z" style={{ padding:"0 clamp(16px,4vw,60px) 60px" }}>
      <div style={{
        padding:"clamp(44px,6vw,72px) clamp(32px,5vw,80px)",
        background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",
        borderRadius:"28px",
        display:"flex",flexWrap:"wrap",alignItems:"center",
        justifyContent:"space-between",gap:"24px",
        position:"relative",overflow:"hidden",
      }}>
        <div style={{ position:"absolute",inset:0,pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize:"40px 40px" }} />
        <div style={{ position:"relative",zIndex:1 }}>
          <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
              fontSize:"clamp(1.8rem,4vw,3rem)",color:"#fff",
              lineHeight:1.05,marginBottom:"10px" }}>
            Ready to get started<br />with {title}?
          </h2>
          <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",
              color:"rgba(255,255,255,.55)",fontWeight:300 }}>
            Let's build a strategy that moves the needle.
          </p>
        </div>
        <Link href="/get-intouch-form"
          style={{ position:"relative",zIndex:1,display:"inline-flex",alignItems:"center",
              gap:"10px",padding:"17px 38px",background:"#fff",color:"rgb(85,0,85)",
              borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",
              fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none",
              transition:"transform .2s,box-shadow .2s" }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)";
            e.currentTarget.style.boxShadow="0 10px 30px rgba(255,255,255,.25)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform="";
            e.currentTarget.style.boxShadow=""; }}>
          Start a Project →
        </Link>
      </div>
    </div>
  );
}

// ── 7B. RELATED HUB — additive, only renders when service.hubLink exists ──────
// Zero impact on the 9 existing routes: none of their servicesData.js entries
// set `hubLink`, so this block is not present in any current page's output.
function RelatedHub({ hubLink }) {
  if (!hubLink) return null;
  return (
    <section className="sp-sec sp-sec-light sp-z">
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal>
          <Link href={hubLink.href} style={{ textDecoration:"none",display:"block" }}>
            <div className="sp-card" style={{
              padding:"clamp(28px,4vw,40px)",cursor:"pointer",
              display:"flex",flexWrap:"wrap",alignItems:"center",
              justifyContent:"space-between",gap:"20px",
            }}>
              <div>
                <PLabel t="Go Deeper" />
                <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,
                    fontSize:"clamp(1.2rem,2.5vw,1.6rem)",color:"rgb(29,2,29)",
                    lineHeight:1.25 }}>
                  {hubLink.label}
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
  );
}

// ── 8. OTHER SERVICES ─────────────────────────────────────────────────────────
function OtherServices({ currentKey }) {
  const all = [
    { key:"digital-pr",            label:"Digital PR",                 path:"/digital-pr"            },
    { key:"digital-marketing",     label:"Digital Marketing",           path:"/digital-marketing"     },
    { key:"performance-marketing", label:"Performance Marketing",       path:"/performance-marketing" },
    { key:"branding",              label:"Brand Identity & Design",     path:"/branding"              },
    { key:"web-development",       label:"Web Design & Development",    path:"/web-development"       },
    { key:"seo-services",          label:"SEO Services",                path:"/seo-services"          },
    { key:"social-media",          label:"Social Media Management",     path:"/social-media"          },
    { key:"linkedin-branding",     label:"LinkedIn Personal Branding",  path:"/linkedin-branding"     },
    { key:"ai-integration",        label:"AI Integration",              path:"/ai-integration"        },
  ].filter(s=>s.key!==currentKey);

  return (
    <section className="sp-sec sp-sec-light sp-z">
      <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
        <Reveal>
          <div style={{ textAlign:"center",marginBottom:"clamp(32px,4vw,52px)" }}>
            <PLabel t="Also From Us" />
            <PH2 center>Explore other services.</PH2>
          </div>
        </Reveal>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"12px" }}>
          {all.map((s,i)=>(
            <Reveal key={s.key} delay={i*.05}>
              <Link href={s.path} style={{ textDecoration:"none",display:"block" }}>
                <div className="sp-card" style={{ padding:"22px 24px",cursor:"pointer" }}>
                  <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:700,
                      fontSize:".98rem",color:"rgb(29,2,29)",lineHeight:1.3 }}>
                    {s.label} →
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function ServicePage({ serviceKey }) {
  const service = allServiceData[serviceKey];

  if (!service) return (
    <div style={{ padding:"120px 40px",textAlign:"center" }}>
      <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,
          fontSize:"2rem",color:"rgb(29,2,29)",marginBottom:"20px" }}>
        Service not found.
      </h2>
      <Link href="/services"
        style={{ color:"rgb(85,0,85)",fontWeight:600,fontSize:"1rem" }}>
        ← Back to Services
      </Link>
    </div>
  );

  const whatIs    = service.sections.find(s=>s.type==="whatIs");
  const howWeDoIt = service.sections.find(s=>s.type==="howWeDoIt");
  const faq       = service.sections.find(s=>s.type==="faq");

  return (
    <>
      <style>{CSS}</style>
      <div className="sp">

        {/* 1. Dark parallax hero */}
        <ServiceHero service={service} />

        {/* 2. Ticker */}
        <Ticker title={service.title} />

        {/* 3. Intro — text left / tall image right */}
        <IntroSplit details={service.details} />

        {/* 4. Detail reverse — square image left / stats right */}
        <DetailReverse details={service.details} />

        {/* 5. How We Do It — 3-col icon cards */}
        {howWeDoIt && <HowWeDoIt serviceName={service.title} data={howWeDoIt} />}

        {/* 6. What Is — editorial expandable */}
        {whatIs && <WhatIs data={whatIs} />}

        {/* 7. FAQ — accordion + sticky image */}
        {faq && <FAQ data={faq} />}

        {/* 7B. Related hub — additive, only if service.hubLink is set */}
        <RelatedHub hubLink={service.hubLink} />

        {/* 8. CTA band */}
        <CTABand title={service.title} />

        {/* 9. Other services */}
        <OtherServices currentKey={serviceKey} />

      </div>
    </>
  );
}
