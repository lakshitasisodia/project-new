"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { Reveal, Ticker, Label, H2, Body, Counter, SvgGrowth, SvgSEO, LIGHT_CSS } from "./shared";

const CSS = LIGHT_CSS + `
  #gp-home .hero-grad {
    background: linear-gradient(135deg,rgb(85,0,85),#df45ed,#ff008c);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }
  #gp-home .card-hover {
    transition: transform .28s, box-shadow .28s, border-color .28s;
  }
  #gp-home .card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 50px rgba(85,0,85,.14);
    border-color: rgba(85,0,85,.35);
  }

  /* Hero layout */
  .gp-hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px,5vw,80px);
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  /* Image column */
  .gp-hero-img-col {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: clamp(380px, 55vw, 620px);
  }

  /* On mobile: single column, text on top, image below */
  @media (max-width: 900px) {
    .gp-hero-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .gp-hero-text {
      align-items: center !important;
    }
    .gp-hero-ctas {
      justify-content: center !important;
    }
    .gp-hero-img-col {
      height: clamp(260px, 70vw, 420px);
      order: 2;
    }
    .gp-hero-text {
      order: 1;
    }
  }
`;

// SEO-optimised service descriptions targeting search intent
const SERVICES = [
  { n:"01", t:"Performance Marketing",  d:"Google Ads & Meta Ads campaigns live in 5–7 days. Every rupee of ad spend tracked to a real lead or sale. No guesswork.",                    path:"/performance-marketing" },
  { n:"02", t:"SEO",                    d:"Rank on page one of Google for searches your clients are already making. Organic traffic that compounds month after month.",                    path:"/seo-services"          },
  { n:"03", t:"Web Design",             d:"Fast, mobile-first websites built for conversions. Your 24/7 sales engine — not a static brochure.",                                           path:"/web-development"       },
  { n:"04", t:"Digital Marketing",      d:"Multi-channel growth strategy — content funnels, email automation, and campaigns built around your revenue goals, not just impressions.",       path:"/digital-marketing"     },
  { n:"05", t:"Branding",               d:"Brand identity systems that build instant recognition — logo, typography, colour, and voice. Built to be remembered.",                         path:"/branding"              },
  { n:"06", t:"Social Media",           d:"Strategy, creation, and community management that turns followers into enquiries. Instagram, LinkedIn, and beyond.",                           path:"/social-media"          },
  { n:"07", t:"LinkedIn Branding",      d:"Authority building, thought leadership content, and DM management that generates inbound leads for founders and service businesses.",          path:"/linkedin-branding"     },
  { n:"08", t:"Digital PR",             d:"Editorial placements, high-authority backlinks, and media outreach. Credibility that compounds — and that your competitors can't buy.",        path:"/digital-pr"            },
  { n:"09", t:"AI Integration",         d:"Marketing automation and AI-powered workflows that cut manual work, speed up delivery, and scale your content output.",                        path:"/ai-integration"        },
];

const TESTIMONIALS = [
  { name:"Maa Bartala Construction", quote:"Zero to first-page Google in under three months. Real results, not just reports." },
  { name:"Pawan Gupta",              quote:"YouTube channel finally structured. Monetisation became achievable within weeks."  },
  { name:"Jonathan Martinez",        quote:"Clear communication, on-time delivery. The platform is measurably better now."    },
  { name:"Anil Singh",               quote:"Website live in 3 weeks. First client enquiry arrived in week one."               },
];

function MainOutput() {
  const ref = useRef(null);

  return (
    <>
      <style>{CSS}</style>
      <div id="gp-home" className="gp-page" ref={ref}>

        {/* ── HERO ──────────────────────────────────────────────────────── */}
       <section className="gp-z" style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          padding: "clamp(80px,10vw,120px) clamp(20px,6vw,80px) clamp(40px,6vw,80px)",
          overflow: "hidden",
          background: "#fafaf8",
        }}>
          {/* Subtle decorative blobs — behind everything */}
          <div className="gp-lg" />
          <div className="gp-lb" style={{ width:"600px",height:"600px",background:"rgba(85,0,85,.055)",top:"-120px",right:"-80px",zIndex:0 }} />
          <div className="gp-lb" style={{ width:"350px",height:"350px",background:"rgba(223,69,237,.04)",bottom:"-40px",left:"-60px",zIndex:0 }} />

          <div className="gp-hero-inner">

            {/* ── LEFT — all text ── */}
            <motion.div
              className="gp-hero-text"
              style={{ display:"flex",flexDirection:"column",gap:"22px",alignItems:"flex-start",position:"relative",zIndex:2 }}
              initial={{ opacity:0, x:-40 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:.9, ease:[.22,1,.36,1] }}
            >
              {/* Pill */}
              <div className="gp-pill">
                <span className="gp-dot" style={{ width:"7px",height:"7px",borderRadius:"50%",background:"rgb(85,0,85)",display:"inline-block" }} />
                Digital Growth Agency
              </div>

              {/* H1 */}
              <h1 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,lineHeight:1.0,letterSpacing:"-.03em",color:"rgb(29,2,29)",fontSize:"clamp(2.4rem,5.5vw,5rem)",margin:0 }}>
                Creating Your Story
                <br />
                <span className="hero-grad">For You.</span>
              </h1>

              {/* Typed */}
              <span style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.3rem,3vw,2.4rem)",color:"rgb(85,0,85)",minHeight:"1.2em",display:"block" }}>
                <ReactTyped
                  strings={["Performance Marketing","SEO","Web Design","Branding","Social Media","LinkedIn Branding","Digital PR","AI Integration"]}
                  typeSpeed={90} backSpeed={90} backDelay={1500}
                  loop smartBackspace showCursor={false}
                />
              </span>

              {/* Sub */}
              <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"clamp(.98rem,1.8vw,1.18rem)",fontWeight:300,color:"#666",maxWidth:"480px",lineHeight:1.78,margin:0 }}>
                We help businesses across India and internationally get visible on Google, run ads that generate leads, and build brands that convert. Done properly.
              </p>

              {/* CTAs */}
              <div className="gp-hero-ctas" style={{ display:"flex",flexWrap:"wrap",gap:"14px",marginTop:"6px" }}>
                <Link href="/services" style={{ display:"inline-flex",alignItems:"center",gap:"10px",padding:"15px 34px",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",color:"#fff",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"0.92rem",letterSpacing:".06em",textDecoration:"none",boxShadow:"0 6px 24px rgba(85,0,85,.3)",transition:"transform .2s,box-shadow .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 36px rgba(85,0,85,.4)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 6px 24px rgba(85,0,85,.3)";}}>
                  Our Services →
                </Link>
                <Link href="/get-intouch-form" style={{ display:"inline-flex",alignItems:"center",gap:"8px",padding:"15px 26px",border:"1.5px solid rgba(85,0,85,.25)",borderRadius:"14px",color:"rgba(29,2,29,.65)",fontSize:".9rem",fontFamily:"'Rubik',sans-serif",fontWeight:500,textDecoration:"none",transition:"all .25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgb(85,0,85)";e.currentTarget.style.color="rgb(29,2,29)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(85,0,85,.25)";e.currentTarget.style.color="rgba(29,2,29,.65)";}}>
                  Start a Project
                </Link>
              </div>
            </motion.div>

            {/* ── RIGHT — image only, no text behind it ── */}
            <motion.div
              className="gp-hero-img-col"
              initial={{ opacity:0, x:40 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:1.0, delay:.2, ease:[.22,1,.36,1] }}
            >
              {/* Decorative ring behind image */}
              <div style={{
                position:"absolute",
                width:"80%", height:"80%",
                borderRadius:"50%",
                background:"rgba(85,0,85,.06)",
                border:"1.5px solid rgba(85,0,85,.1)",
                top:"50%", left:"50%",
                transform:"translate(-50%,-50%)",
                zIndex:0,
              }} />
              <div style={{
                position:"absolute",
                width:"65%", height:"65%",
                borderRadius:"50%",
                background:"rgba(223,69,237,.05)",
                top:"50%", left:"50%",
                transform:"translate(-50%,-50%)",
                zIndex:0,
              }} />

              {/* The character image — sits in front of rings, no text overlap */}
              <img
                src="/mainpage-section1-head.png"
                alt="Graphical Proximity"
                style={{
                  position:"relative",
                  zIndex:1,
                  height:"100%",
                  width:"auto",
                  maxWidth:"100%",
                  objectFit:"contain",
                  objectPosition:"bottom",
                  display:"block",
                  /* No opacity reduction — full contrast, no camouflage */
                }}
              />

              {/* Floating stats pill — decorative */}
              <motion.div
                animate={{ y:[0,-8,0] }}
                transition={{ duration:4,repeat:Infinity,ease:"easeInOut" }}
                style={{
                  position:"absolute", bottom:"14%", left:"-10px",
                  background:"#fff",
                  border:"1.5px solid rgba(85,0,85,.14)",
                  borderRadius:"16px",
                  padding:"12px 18px",
                  boxShadow:"0 8px 30px rgba(85,0,85,.13)",
                  zIndex:2,
                  display:"flex", alignItems:"center", gap:"10px",
                }}>
                <div style={{ width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:".95rem",color:"rgb(29,2,29)",lineHeight:1 }}>25+ Projects</p>
                  <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".68rem",color:"#999",marginTop:"2px" }}>Delivered on time</p>
                </div>
              </motion.div>

              {/* Second floating pill */}
              <motion.div
                animate={{ y:[0,-10,0] }}
                transition={{ duration:5,repeat:Infinity,ease:"easeInOut",delay:1.5 }}
                style={{
                  position:"absolute", top:"18%", right:"-10px",
                  background:"#fff",
                  border:"1.5px solid rgba(85,0,85,.14)",
                  borderRadius:"16px",
                  padding:"12px 18px",
                  boxShadow:"0 8px 30px rgba(85,0,85,.13)",
                  zIndex:2,
                  display:"flex", alignItems:"center", gap:"10px",
                }}>
                <div style={{ width:"36px",height:"36px",borderRadius:"10px",background:"linear-gradient(135deg,#df45ed,#ff008c)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:".95rem",color:"rgb(29,2,29)",lineHeight:1 }}>10+ Clients</p>
                  <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".68rem",color:"#999",marginTop:"2px" }}>Active retainers</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ── TICKER ─────────────────────────────────────────────────────── */}
        <Ticker />

        {/* ── ABOUT STRIP ─────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div className="gp-lb" style={{ width:"450px",height:"350px",background:"rgba(85,0,85,.05)",top:0,left:"-100px" }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:"24px" }}>
              <Reveal>
                <Label>Who We Are</Label>
                {/* H2 with target keyword */}
                <H2>India's digital growth agency<br />for ambitious businesses.</H2>
              </Reveal>
              <Reveal delay={.1}>
                <Body>We help businesses get visible online, attract the right clients, and grow revenue — through SEO, web design, paid ads, branding, and social media. Whether you're a local business or scaling nationally, we build the digital foundation that makes growth possible.</Body>
              </Reveal>
              <Reveal delay={.18}>
                <Body>Founded by Lakshita Singh Sisodia, Graphical Proximity was built on one idea: most businesses are invisible online. We fix that — with strategy, craft, and execution that actually moves the needle.</Body>
              </Reveal>
              <Reveal delay={.25}>
                <Link href="/about" style={{ display:"inline-flex",alignItems:"center",gap:"10px",padding:"13px 26px",border:"1.5px solid rgba(85,0,85,.3)",color:"rgb(85,0,85)",borderRadius:"12px",fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:".85rem",textDecoration:"none",width:"fit-content" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgb(85,0,85)";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="";e.currentTarget.style.color="rgb(85,0,85)";}}>
                  See Our Clients →
                </Link>
              </Reveal>
            </div>

            {/* Stats */}
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px" }}>
              {[{n:10,s:"+",l:"Active Clients"},{n:25,s:"+",l:"Projects Delivered"},{n:2,s:"+",l:"Years in Digital"},{n:100,s:"%",l:"Outcome Focused"}].map((st,i)=>(
                <Reveal key={st.l} delay={i*.08}>
                  <div className="gp-card" style={{ padding:"22px 24px" }}>
                    <Counter to={st.n} suffix={st.s} />
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#888",marginTop:"4px" }}>{st.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div className="gp-lg" style={{ opacity:.5 }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1 }}>
            <Reveal>
              <div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,60px)" }}>
                <Label>Our Services</Label>
                {/* H2 keyword: digital marketing services */}
                <H2 center>Digital marketing services<br />that grow your business.</H2>
              </div>
            </Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"14px" }}>
              {SERVICES.map((s,i)=>(
                <Reveal key={s.t} delay={i*.07}>
                  <Link href={s.path} style={{ textDecoration:"none",display:"block" }}>
                    <div className="gp-card" style={{ padding:"28px",cursor:"pointer",height:"100%" }}>
                      <span style={{ fontFamily:"'Rubik',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"rgb(85,0,85)",display:"block",marginBottom:"12px" }}>{s.n}</span>
                      <h3 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.15rem",color:"rgb(29,2,29)",marginBottom:"10px" }}>{s.t}</h3>
                      <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".93rem",color:"#777",lineHeight:1.65 }}>{s.d}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE THINK ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div className="gp-lb" style={{ width:"480px",height:"380px",background:"rgba(223,69,237,.05)",top:"10%",right:"-100px" }} />
          <div style={{ maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center" }}>
            <Reveal>
              <div className="gp-fl" style={{ maxWidth:"460px" }}>
                <p style={{ fontFamily:"'Rubik',sans-serif",fontSize:".7rem",letterSpacing:".13em",textTransform:"uppercase",color:"rgba(29,2,29,.3)",marginBottom:"14px" }}>Client visibility over time</p>
                <SvgGrowth />
              </div>
            </Reveal>
            <Reveal dir="left" delay={.18}>
              <div style={{ display:"flex",flexDirection:"column",gap:"22px" }}>
                <div><Label>How We Work</Label><H2>Results compound.<br /><span style={{ color:"rgba(29,2,29,.25)" }}>Excuses don't.</span></H2></div>
                <Body>We think in systems. Every campaign builds on itself — SEO, paid ads, brand authority, good design, performance marketing. Done correctly, they compound. We don't chase vanity metrics or sell activity for the sake of it.</Body>
                <div style={{ display:"flex",flexDirection:"column",gap:0,marginTop:"8px" }}>
                  {[{n:"01",t:"Discovery Call",s:"We learn your business, your audience, your goals, and your current gaps."},{n:"02",t:"Growth Strategy",s:"A custom plan for your market. No templates, no copy-paste."},{n:"03",t:"Execution & Reporting",s:"We build, publish, optimise, and report with full transparency."}].map((st,i)=>(
                    <div key={st.n} style={{ position:"relative",paddingLeft:"54px",paddingBottom:i<2?"26px":"0" }}>
                      {i<2 && <div className="gp-sl" />}
                      <div style={{ position:"absolute",left:0,top:0,width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Montserrat',sans-serif",fontSize:".7rem",fontWeight:800,color:"#fff" }}>{st.n}</div>
                      <h4 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:"1rem",color:"rgb(29,2,29)",marginBottom:"4px" }}>{st.t}</h4>
                      <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"#888" }}>{st.s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WHY US ──────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",background:"#f4f0f4",position:"relative",overflow:"hidden" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center" }}>
            <Reveal dir="right">
              <div style={{ display:"flex",flexDirection:"column",gap:"22px" }}>
                <Label>Why Graphical Proximity</Label>
                <H2>There are 10,000+<br /><span style={{ background:"linear-gradient(135deg,rgb(85,0,85),#df45ed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>agencies.</span><br />You chose us.</H2>
                <Body>That's not luck. It's the same precision we'll bring to growing your business — we find the right clients, build the right systems, and measure what actually matters.</Body>
                <Link href="/get-intouch-form" style={{ display:"inline-flex",alignItems:"center",gap:"10px",padding:"15px 30px",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",color:"#fff",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none",width:"fit-content",boxShadow:"0 6px 24px rgba(85,0,85,.25)" }}>
                  Start a Project →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={.15}>
              <div className="gp-fl2" style={{ maxWidth:"320px",margin:"0 auto" }}>
                <SvgSEO />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ padding:"clamp(50px,8vw,90px) clamp(20px,6vw,100px)",position:"relative",overflow:"hidden" }}>
          <div style={{ maxWidth:"1200px",margin:"0 auto" }}>
            <Reveal><div style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,56px)" }}><Label>Client Results</Label><H2 center>What our clients say.</H2></div></Reveal>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"16px" }}>
              {TESTIMONIALS.map((t,i)=>(
                <Reveal key={t.name} delay={i*.08}>
                  <div className="gp-card" style={{ padding:"28px",height:"100%" }}>
                    <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:".95rem",lineHeight:1.72,color:"#666",fontWeight:300,marginBottom:"20px" }}>"{t.quote}"</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".78rem",fontWeight:700,color:"rgb(85,0,85)",letterSpacing:".07em",textTransform:"uppercase" }}>— {t.name}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{ margin:"0 clamp(16px,4vw,60px)",marginBottom:"60px",padding:"clamp(40px,6vw,70px) clamp(30px,5vw,80px)",background:"linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",borderRadius:"28px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"40px 40px",pointerEvents:"none" }} />
          <div style={{ position:"relative",zIndex:1 }}>
            <h2 style={{ fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(1.8rem,4vw,3rem)",color:"#fff",lineHeight:1.05,marginBottom:"10px" }}>Ready to grow your business online?</h2>
            <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(255,255,255,.65)",fontWeight:300 }}>Tell us your goal. We'll build the strategy.</p>
          </div>
          <Link href="/get-intouch-form" style={{ position:"relative",zIndex:1,display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 36px",background:"#fff",color:"rgb(85,0,85)",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:".9rem",letterSpacing:".06em",textDecoration:"none",transition:"transform .2s,box-shadow .2s" }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";}}>
            Get a Free Consultation →
          </Link>
        </section>

      </div>
    </>
  );
}

export default MainOutput;