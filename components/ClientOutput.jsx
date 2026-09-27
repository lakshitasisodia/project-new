"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Reveal, Ticker, Label, H2, Body, Counter, SvgGrowth, LIGHT_CSS, SvgPR } from "./shared";


const CSS = LIGHT_CSS;

const CLIENTS = [
  { name:"Maa Bartala Construction", img:"/MaaBartala.png",     tag:"Web Design + Local SEO",  result:"Built their first digital presence from scratch. Now ranking on Google for targeted construction searches.", outcome:"First online enquiry received within 2 weeks of launch."  },
  { name:"Pawan Singh",              img:"/Client-PawanG.jpg",  tag:"YouTube Strategy",          result:"Structured content calendar and monetisation roadmap. Channel engagement improved measurably and consistently.", outcome:"YouTube monetisation threshold reached within 4 months." },
  { name:"Jonal Mill",        img:"/client-JM.png",      tag:"Web Development",           result:"Legacy platform fully rebuilt — modern stack, faster load times, improved UX. Delivered on time, zero scope creep.", outcome:"Platform performance scores improved by over 60%."     },
  { name:"Anil Singh",               img:"/client-AS.png",      tag:"Business Launch Website",   result:"Website designed, developed, and live in under 3 weeks. Clean, conversion-focused, fully mobile-first.", outcome:"First client enquiry arrived in week one of launch."    },
];

const TESTIMONIALS = [
  { name:"Maa Bartala Construction", quote:"We went from zero online presence to appearing on Google for local searches. Real results, not just reports.",            img:"/MaaBartala.png" },
  { name:"Pawan Singh",              quote:"My channel finally had structure. Engagement improved steadily and monetisation became achievable.",                       img:"/Client-PawanG.jpg" },
  { name:"Jonal Mill",        quote:"Clear communication throughout, delivered on time. The platform is now fast, modern, and measurably better.",              img:"/client-JM.png" },
  { name:"Anil Singh",               quote:"Website was live in 3 weeks. First client enquiry came in week one — exactly what I needed to launch.",                   img:"/client-AS.png" },
];

function ClientOutput() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const heroY  = useTransform(scrollYProgress, [0, 0.18], [0, -50]);
  const heroOp = useTransform(scrollYProgress, [0, 0.2],  [1, 0]);

  return (
    <>
      <style>{CSS}</style>
      <div id="gp-clients" className="gp-page" ref={ref}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ position:"relative",minHeight:"72vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",padding:"clamp(60px,10vw,120px) clamp(20px,6vw,100px) clamp(50px,6vw,80px)",overflow:"hidden" }}>
          <div className="gp-lg" />
          <div className="gp-lb" style={{ width:"500px",height:"400px",background:"rgba(85,0,85,.06)",top:"-60px",right:"-80px" }} />

          <motion.div style={{ y:heroY, opacity:heroOp, position:"relative", zIndex:2 }}>
            <motion.div initial={{ opacity:0,scale:.85 }} animate={{ opacity:1,scale:1 }} transition={{ duration:.6 }} className="gp-pill" style={{ marginBottom:"20px" }}>
              <span className="gp-dot" style={{ width:"7px",height:"7px",borderRadius:"50%",background:"rgb(85,0,85)",display:"inline-block" }} />
              Client Results
            </motion.div>
            {/* H1 — proof-oriented, keyword-supportive */}
            <motion.h1 initial={{ opacity:0,y:40 }} animate={{ opacity:1,y:0 }} transition={{ duration:.9,delay:.15,ease:[.22,1,.36,1] }}
              style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,lineHeight:1.0,letterSpacing:"-.03em",color:"rgb(29,2,29)",fontSize:"clamp(2.8rem,8vw,6.5rem)",margin:0 }}>
              Real Businesses.
              <br />
              <span style={{ background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                Real Results.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity:0,y:22 }} animate={{ opacity:1,y:0 }} transition={{ duration:.85,delay:.35 }}
              style={{ fontFamily:"'Nunito',sans-serif",fontSize:"clamp(1rem,2vw,1.3rem)",fontWeight:300,color:"#777",maxWidth:"500px",lineHeight:1.78,marginTop:"20px" }}>
              Every client story is a proof point, not a promise. Here's what we've built — across SEO, paid ads, web development, and branding — and what it delivered.
            </motion.p>
          </motion.div>

          {/* Growth chart — decorative */}
          <motion.div initial={{ opacity:0,x:40 }} animate={{ opacity:1,x:0 }} transition={{ duration:1.2,delay:.5 }}
            className="gp-fl" style={{ position:"absolute",right:"clamp(20px,5vw,80px)",bottom:"clamp(40px,5vw,80px)",width:"clamp(200px,30vw,400px)",opacity:.5,zIndex:1,pointerEvents:"none" }}>
            <SvgPR />
          </motion.div>
        </section>

        <Ticker />

        {/* ── STATS ───────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(40px,7vw,80px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div className="gp-lg" style={{ opacity:.5 }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"16px" }}>
              {[{n:10,s:"+",l:"Active Clients"},{n:4,s:"",l:"Industries Served"},{n:100,s:"%",l:"Project Delivery Rate"},{n:25,s:"+",l:"Projects Completed"}].map((st,i)=>(
                <Reveal key={st.l} delay={i*.07}>
                  <div className="gp-card" style={{ padding:"24px",textAlign:"center" }}>
                    <Counter to={st.n} suffix={st.s} />
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#888",marginTop:"4px" }}>{st.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT CARDS ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ marginBottom:"clamp(36px,5vw,60px)" }}><Label>Case Studies</Label><H2>Businesses we have grown.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px" }}>
              {CLIENTS.map((c,i)=>(
                <Reveal key={c.name} delay={i*.08}>
                  <div className="gp-card" style={{ padding:"0",overflow:"hidden" }}>
                    {/* Image */}
                    <div style={{ height:"200px",background:"rgba(85,0,85,.06)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden" }}>
                      <img src={c.img} alt={`${c.name} — client of Graphical Proximity`} style={{ width:"110px",height:"110px",borderRadius:"50%",objectFit:"cover",border:"3px solid rgba(85,0,85,.2)" }} />
                    </div>
                    {/* Content */}
                    <div style={{ padding:"24px 24px 28px" }}>
                      <span style={{ display:"inline-block",padding:"5px 14px",background:"rgba(85,0,85,.08)",borderRadius:"100px",fontFamily:"'Rubik',sans-serif",fontSize:".68rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgb(85,0,85)",marginBottom:"14px" }}>{c.tag}</span>
                      <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.1rem",color:"rgb(29,2,29)",marginBottom:"10px",lineHeight:1.2 }}>{c.name}</h3>
                      <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#777",lineHeight:1.65,marginBottom:"14px" }}>{c.result}</p>
                      <div style={{ padding:"12px 16px",background:"rgba(85,0,85,.06)",borderRadius:"10px",borderLeft:"3px solid rgb(85,0,85)" }}>
                        <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".85rem",color:"rgb(85,0,85)",fontWeight:600,lineHeight:1.5 }}>{c.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,56px)" }}><Label>Testimonials</Label><H2 center>In their own words.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"16px" }}>
              {TESTIMONIALS.map((t,i)=>(
                <Reveal key={t.name} delay={i*.08}>
                  <div className="gp-card" style={{ padding:"28px",height:"100%",display:"flex",flexDirection:"column",gap:"16px" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"14px" }}>
                      <img src={t.img} alt={t.name} style={{ width:"52px",height:"52px",borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(85,0,85,.18)",flexShrink:0 }} />
                      <p style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".82rem",fontWeight:700,color:"rgb(29,2,29)",letterSpacing:".04em" }}>{t.name}</p>
                    </div>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".95rem",lineHeight:1.72,color:"#666",fontWeight:300,flex:1 }}>"{t.quote}"</p>
                    <div style={{ display:"flex",gap:"3px" }}>
                      {[...Array(5)].map((_,si)=><span key={si} style={{ color:"rgb(85,0,85)",fontSize:"0.85rem" }}>★</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ──────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,56px)" }}><Label>Industries We Serve</Label><H2 center>Built for businesses<br />across every sector.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"12px" }}>
              {[
                "Gyms & Fitness","Restaurants & F&B","Clinics & Healthcare","Salons & Beauty",
                "Construction","E-Commerce","Real Estate","Education & Coaching",
                "B2B Services","YouTube Creators",
              ].map((ind,i)=>(
                <Reveal key={ind} delay={i*.04}>
                  <div style={{ padding:"16px 18px",background:"#fff",border:"1.5px solid rgba(85,0,85,.1)",borderRadius:"14px",textAlign:"center" }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:".85rem",color:"rgb(29,2,29)",lineHeight:1.3 }}>{ind}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ margin:"0 clamp(16px,4vw,60px)",marginBottom:"60px",padding:"clamp(40px,6vw,70px) clamp(30px,5vw,80px)",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",borderRadius:"28px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none" }} />
          <div style={{ position:"relative",zIndex:1 }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#fff",lineHeight:1.05,marginBottom:"10px" }}>Want to be our next success story?</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(255,255,255,.65)",fontWeight:300 }}>Let's talk about what we can build together.</p>
          </div>
          <Link href="/get-intouch-form" style={{ position:"relative",zIndex:1,display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 36px",background:"#fff",color:"rgb(85,0,85)",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none" }}>
            Start a Project →
          </Link>
        </section>

      </div>
    </>
  );
}

export default ClientOutput;