"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Reveal, Ticker, Label, H2, Body, Counter, SvgOrbit, LIGHT_CSS } from "./shared";

const CSS = LIGHT_CSS;

function AboutOutput() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const heroY  = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const heroOp = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  return (
    <>
      <style>{CSS}</style>
      <div id="gp-about" className="gp-page" ref={ref}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ position:"relative",minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",padding:"clamp(60px,10vw,120px) clamp(20px,6vw,100px) clamp(50px,6vw,80px)",overflow:"hidden" }}>
          <div className="gp-lg" />
          <div className="gp-lb" style={{ width:"500px",height:"500px",background:"rgba(85,0,85,.06)",top:"-80px",right:"-100px" }} />

          <motion.div style={{ y: heroY, opacity: heroOp, position:"relative", zIndex:2 }}>
            <motion.div initial={{ opacity:0, scale:.85 }} animate={{ opacity:1, scale:1 }} transition={{ duration:.6 }} className="gp-pill" style={{ marginBottom:"20px" }}>
              <span className="gp-dot" style={{ width:"7px",height:"7px",borderRadius:"50%",background:"rgb(85,0,85)",display:"inline-block" }} />
              Graphical Proximity
            </motion.div>
            <motion.h1 initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:.9,delay:.15,ease:[.22,1,.36,1] }}
              style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,lineHeight:1.0,letterSpacing:"-.03em",color:"rgb(29,2,29)",fontSize:"clamp(2.8rem,8vw,6.5rem)",margin:0 }}>
              A Digital Agency
              <br />
              <span style={{ background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                Built on Results.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:.85,delay:.35 }}
              style={{ fontFamily:"'Nunito',sans-serif",fontSize:"clamp(1rem,2vw,1.3rem)",fontWeight:300,color:"#777",maxWidth:"520px",lineHeight:1.78,marginTop:"20px" }}>
              We help businesses across India and internationally get visible, attract clients, and grow — through SEO, performance marketing, paid ads, web design, branding, and social media. Done properly.
            </motion.p>
          </motion.div>

          {/* Orbit illustration */}
          <motion.div initial={{ opacity:0, scale:.7 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1.2,delay:.5 }}
            className="gp-fl" style={{ position:"absolute",right:"clamp(20px,5vw,80px)",top:"50%",transform:"translateY(-50%)",width:"clamp(200px,30vw,400px)",opacity:.6,zIndex:1,pointerEvents:"none" }}>
            <SvgOrbit />
          </motion.div>
        </section>

        <Ticker />

        {/* ── WHAT DEFINES US ─────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div className="gp-lb" style={{ width:"450px",height:"350px",background:"rgba(85,0,85,.05)",top:0,left:"-100px" }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:"24px" }}>
              <Reveal>
                <Label>What Defines Us</Label>
                <H2>We fix the visibility problem<br />for growing businesses.</H2>
              </Reveal>
              <Reveal delay={.1}><Body>Graphical Proximity is a digital growth agency. We help businesses — gyms, restaurants, clinics, salons, e-commerce brands, and B2B companies — get visible on Google, run paid ad campaigns that generate leads, and build websites that work.</Body></Reveal>
              <Reveal delay={.18}><Body>Founded by Lakashita Singh Sisodia, the agency was built around one idea: most businesses are invisible online, and invisibility costs revenue. We fix that through SEO, performance marketing (Google Ads & Meta Ads), web development, brand identity, LinkedIn personal branding, and AI-driven marketing workflows — serving clients across India and internationally.</Body></Reveal>
              <Reveal delay={.25}><Body>We don't do everything. We focus on the things that move the needle — and we measure every one of them.</Body></Reveal>
            </div>

            {/* Stats */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px" }}>
              {[{n:10,s:"+",l:"Active Clients"},{n:25,s:"+",l:"Projects Delivered"},{n:4,s:"+",l:"Years in Digital"},{n:9,s:"",l:"Core Services"}].map((st,i)=>(
                <Reveal key={st.l} delay={i*.08}>
                  <div className="gp-card" style={{ padding:"24px" }}>
                    <Counter to={st.n} suffix={st.s} />
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#888",marginTop:"4px" }}>{st.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── MISSION / VISION ────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div className="gp-lg" style={{ opacity:.5 }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,60px)" }}><Label>Our Purpose</Label><H2 center>Mission &amp; Vision.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px" }}>
              {[
                { tag:"Mission", title:"Make every business impossible to ignore.", body:"Our mission is to make premium digital marketing and brand communication accessible — not just to large enterprises, but to ambitious businesses that deserve to be seen. By combining data-driven strategy with strong creative execution, we help every client build a presence that doesn't just exist online, but connects with the right audience and converts." },
                { tag:"Vision",  title:"From local brands to global voices.", body:"Graphical Proximity aims to redefine how businesses grow digitally — by merging powerful design, sharp SEO strategy, and honest storytelling. Our vision is to help ambitious businesses scale from their home market to a national and international stage, making real proximity between brands and their ideal clients not just possible, but inevitable." },
              ].map((item,i)=>(
                <Reveal key={item.tag} delay={i*.1}>
                  <div className="gp-card" style={{ padding:"clamp(28px,4vw,44px)" }}>
                    <span style={{ display:"inline-block",padding:"6px 16px",background:"rgba(85,0,85,.08)",borderRadius:"100px",fontFamily:"'Rubik',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"rgb(85,0,85)",marginBottom:"18px" }}>{item.tag}</span>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.3rem,2.5vw,1.8rem)",color:"rgb(29,2,29)",lineHeight:1.15,marginBottom:"16px" }}>{item.title}</h3>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1rem",lineHeight:1.78,color:"#666",fontWeight:300 }}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ──────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ marginBottom:"clamp(36px,5vw,60px)" }}><Label>Our Capabilities</Label><H2>Nine services.<br />One growth system.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"14px" }}>
              {[
                { t:"SEO & Search Visibility",               d:"Rank on Google for terms your clients are already searching. Organic traffic that compounds over time without ongoing ad spend." },
                { t:"Performance Marketing — Google & Meta", d:"Paid advertising campaigns that generate qualified leads fast. Every rupee tracked to a real result. Google Ads and Meta Ads." },
                { t:"Web Design & Development",              d:"Fast, conversion-optimised websites built on modern tech. Custom builds — no page builders, no templates." },
                { t:"Brand Identity & Design",               d:"Logo, typography, colour, and brand voice. Built to be distinct, consistent, and timeless." },
                { t:"Social Media Management",               d:"Strategy, content, and community management across Instagram, LinkedIn, and more." },
                { t:"LinkedIn Personal Branding",            d:"Authority-building content and DM management for founders and service professionals generating inbound leads." },
                { t:"Digital PR",                            d:"Authority placement in publications and directories. Build credibility in spaces your audience already trusts." },
                { t:"Digital Marketing & Growth Strategy",   d:"Multi-channel growth systems that combine content, email, funnels, and paid channels into a single compounding strategy." },
                { t:"AI Integration & Automation",           d:"Marketing automation, AI-powered content workflows, and systems that save time and scale output." },
              ].map((s,i)=>(
                <Reveal key={s.t} delay={i*.06}>
                  <div className="gp-card" style={{ padding:"24px 26px" }}>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1rem",color:"rgb(29,2,29)",marginBottom:"8px",lineHeight:1.25 }}>{s.t}</h3>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".88rem",color:"#888",lineHeight:1.6 }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER ─────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div className="gp-lb" style={{ width:"500px",height:"400px",background:"rgba(223,69,237,.05)",bottom:"-60px",right:"-100px" }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ marginBottom:"clamp(36px,5vw,60px)" }}><Label>About the Founder</Label><H2>The mind<br />behind GP.</H2></div></Reveal>

            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(40px,6vw,70px)",alignItems:"start" }}>
              {/* Photo */}
              <Reveal dir="right">
                <motion.div whileHover={{ scale:1.02 }} transition={{ duration:.3 }} style={{ borderRadius:"24px",overflow:"hidden",boxShadow:"0 20px 60px rgba(85,0,85,.18)" }}>
                  <img src="/founder-img.jpg" alt="Lakashita Sisodia — Founder, Graphical Proximity digital marketing agency" style={{ width:"100%",height:"auto",objectFit:"cover",display:"block" }} />
                </motion.div>
              </Reveal>

              {/* Bio */}
              <Reveal delay={.15}>
                <div style={{ display:"flex",flexDirection:"column",gap:"20px" }}>
                  <div>
                    <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.6rem,3vw,2.2rem)",color:"rgb(29,2,29)",lineHeight:1.1,marginBottom:"8px" }}>Lakashita Sisodia</h3>
                    <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".8rem",fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:"rgb(85,0,85)" }}>Founder, Graphical Proximity</p>
                  </div>
                  {[
                    "Lakashita started the agency with a clear mission — to build brands that are not just seen, but remembered. In a market flooded with generic marketing, she set out to create a space where design meets depth and strategy produces real, measurable results.",
                    "With a background in Computer Science and Business Systems, Lakashita brings a rare combination of technical knowledge and strategic thinking. She understands both the back-end of how digital systems work and the front-end of how audiences respond to them. At Graphical Proximity, every project reflects that dual lens.",
                    "Under her leadership, the agency has grown its capability across SEO, performance marketing (Google Ads & Meta Ads), web development, brand identity, LinkedIn personal branding, social media, digital PR, and AI-driven marketing workflows — serving clients across India and internationally. Each project is driven by outcomes, not just deliverables.",
                  ].map((p,i)=>(
                    <p key={i} style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.02rem",lineHeight:1.8,color:"#666",fontWeight:300 }}>{p}</p>
                  ))}
                  <Link href="/get-intouch-form" style={{ display:"inline-flex",alignItems:"center",gap:"10px",padding:"14px 30px",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",color:"#fff",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".88rem",letterSpacing:".06em",textDecoration:"none",width:"fit-content",boxShadow:"0 6px 24px rgba(85,0,85,.25)",marginTop:"8px" }}>
                    Work With Us →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ margin:"0 clamp(16px,4vw,60px)",marginBottom:"60px",padding:"clamp(40px,6vw,70px) clamp(30px,5vw,80px)",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",borderRadius:"28px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none" }} />
          <div style={{ position:"relative",zIndex:1 }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#fff",lineHeight:1.05,marginBottom:"10px" }}>Let's build something together.</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(255,255,255,.65)",fontWeight:300 }}>Start a conversation. No commitment required.</p>
          </div>
          <Link href="/get-intouch-form" style={{ position:"relative",zIndex:1,display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 36px",background:"#fff",color:"rgb(85,0,85)",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none" }}>
            Get in Touch →
          </Link>
        </section>

      </div>
    </>
  );
}

export default AboutOutput;