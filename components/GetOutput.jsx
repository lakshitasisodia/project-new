"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   GET IN TOUCH — Dark landing page
   Fonts: Montserrat (headings) · Nunito (body) · Rubik (UI) — brand preserved
   Colors: #080008 bg · rgb(85,0,85) purple · #df45ed magenta · #ff008c pink
   Google Forms submit logic kept exactly
   ───────────────────────────────────────────────────────────────────────────── */

const CSS = `
  #gp-get { background:#080008; color:#f0e6f8; overflow-x:hidden; font-family:'Rubik',sans-serif; }
  #gp-get *, #gp-get *::before, #gp-get *::after { box-sizing:border-box; }

  /* Noise */
  #gp-get::before {
    content:''; position:fixed; inset:0; pointer-events:none; z-index:0; opacity:.28;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E");
  }

  .gp-z { position:relative; z-index:1; }

  /* Grid */
  .gp-grid {
    position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image:
      linear-gradient(rgba(223,69,237,.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(223,69,237,.045) 1px, transparent 1px);
    background-size:64px 64px;
  }

  /* Blob */
  .gp-blob { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; z-index:0; }

  /* Ticker */
  .gp-ticker { display:flex; white-space:nowrap; animation:gp-tick 28s linear infinite; }
  @keyframes gp-tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* Float */
  .gp-fl  { animation:gp-float 7s ease-in-out infinite; }
  .gp-fl2 { animation:gp-float 9s ease-in-out infinite; animation-delay:-3.5s; }
  @keyframes gp-float {
    0%,100%{transform:translateY(0) rotate(0deg)}
    40%{transform:translateY(-16px) rotate(1.5deg)}
    70%{transform:translateY(-7px) rotate(-1deg)}
  }

  /* Orbits */
  .gp-orb  { animation:gp-spin 20s linear infinite; transform-origin:center; transform-box:fill-box; }
  .gp-orb2 { animation:gp-spin 13s linear infinite reverse; transform-origin:center; transform-box:fill-box; }
  @keyframes gp-spin { to{transform:rotate(360deg)} }

  /* Pulse dot */
  .gp-dot { animation:gp-pulse 2s ease-in-out infinite; }
  @keyframes gp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.65)} }

  /* Form inputs */
  .gp-in {
    width:100%; padding:15px 18px;
    background:rgba(255,255,255,.035);
    border:1px solid rgba(223,69,237,.22);
    border-radius:12px;
    font-size:1rem; color:#f0e6f8;
    font-family:'Nunito',sans-serif;
    outline:none; transition:border-color .25s, background .25s;
  }
  .gp-in::placeholder { color:rgba(240,230,248,.28); }
  .gp-in:focus { border-color:rgba(223,69,237,.65); background:rgba(223,69,237,.04); }
  .gp-in option { background:#0f000f; }

  .gp-lbl {
    display:block; font-size:.72rem; font-weight:600;
    letter-spacing:.13em; text-transform:uppercase;
    color:rgba(223,69,237,.85); margin-bottom:8px;
    font-family:'Rubik',sans-serif;
  }

  .gp-btn {
    width:100%; padding:18px;
    background:linear-gradient(135deg,#df45ed,#8d07be);
    color:#fff; border:none; border-radius:14px;
    font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800;
    letter-spacing:.07em; cursor:pointer; position:relative; overflow:hidden;
    transition:transform .2s, box-shadow .2s;
  }
  .gp-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 16px 50px rgba(223,69,237,.45); }
  .gp-btn:disabled { background:rgba(255,255,255,.08); cursor:not-allowed; }

  /* Counter */
  .gp-num {
    font-family:'Montserrat',sans-serif; font-weight:900;
    font-size:clamp(2.8rem,6vw,5.5rem); line-height:1; letter-spacing:-.04em;
    background:linear-gradient(135deg,#df45ed,#8d07be,#ff008c);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  /* Step line */
  .gp-step-line {
    position:absolute; left:18px; top:40px; bottom:-12px;
    width:2px; background:linear-gradient(to bottom,rgba(223,69,237,.5),transparent);
  }

  @media(max-width:640px) {
    .gp-2col { grid-template-columns:1fr !important; }
  }
`;

// ── SVG: Orbit brand mark ─────────────────────────────────────────────────────
function SvgOrbit() {
  return (
    <svg viewBox="0 0 420 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="og" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#df45ed" stopOpacity=".9"/>
          <stop offset="100%" stopColor="#5a009f" stopOpacity=".3"/>
        </radialGradient>
        <filter id="oglow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Ring 1 */}
      <g className="gp-orb">
        <ellipse cx="210" cy="210" rx="175" ry="58" fill="none" stroke="rgba(223,69,237,.18)" strokeWidth="1" strokeDasharray="7 5"/>
        <circle cx="385" cy="210" r="11" fill="#df45ed" filter="url(#oglow)" opacity=".9"/>
        <circle cx="35"  cy="210" r="7"  fill="#8d07be" opacity=".65"/>
      </g>

      {/* Ring 2 */}
      <g className="gp-orb2">
        <ellipse cx="210" cy="210" rx="125" ry="40" fill="none" stroke="rgba(141,7,190,.2)" strokeWidth="1" strokeDasharray="5 7" transform="rotate(-22 210 210)"/>
        <circle cx="328" cy="174" r="9" fill="#ff008c" filter="url(#oglow)" opacity=".8"/>
      </g>

      {/* Inner ring */}
      <circle cx="210" cy="210" r="78" fill="none" stroke="rgba(223,69,237,.1)" strokeWidth="1"/>

      {/* Core */}
      <circle cx="210" cy="210" r="46" fill="url(#og)" filter="url(#oglow)"/>
      <circle cx="210" cy="210" r="30" fill="rgba(8,0,8,.85)"/>
      <text x="210" y="217" textAnchor="middle" fill="#df45ed" fontSize="15" fontWeight="900" fontFamily="Montserrat,sans-serif">GP</text>

      {/* Labels */}
      {[{x:70,y:80,t:"SEO"},{x:320,y:65,t:"Brand"},{x:348,y:340,t:"Web"},{x:62,y:340,t:"PR"}].map(l=>(
        <g key={l.t}>
          <rect x={l.x-28} y={l.y-14} width="56" height="28" rx="14" fill="rgba(223,69,237,.09)" stroke="rgba(223,69,237,.28)" strokeWidth="1"/>
          <text x={l.x} y={l.y+5} textAnchor="middle" fill="#df45ed" fontSize="9.5" fontWeight="700" fontFamily="Rubik,sans-serif" letterSpacing=".06em">{l.t}</text>
        </g>
      ))}
    </svg>
  );
}

// ── SVG: Funnel ───────────────────────────────────────────────────────────────
function SvgFunnel() {
  const rows = [
    {label:"10,000+ Agencies Out There", w:310, a:.12},
    {label:"500 Find You Online",         w:230, a:.22},
    {label:"50 Actually Consider You",   w:155, a:.4 },
    {label:"You Chose Us ✦",             w:88,  a:1  },
  ];
  return (
    <svg viewBox="0 0 310 210" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {rows.map((r,i)=>(
        <g key={i} transform={`translate(${(310-r.w)/2},${i*48})`}>
          <rect width={r.w} height="38" rx="10" fill={`rgba(223,69,237,${r.a})`} stroke="rgba(223,69,237,.3)" strokeWidth="1"/>
          <text x={r.w/2} y="23.5" textAnchor="middle" fill={r.a>.6?"#fff":"rgba(240,230,248,.7)"} fontSize="10" fontWeight="600" fontFamily="Nunito,sans-serif">{r.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── SVG: Growth line ──────────────────────────────────────────────────────────
function SvgGrowth() {
  const pts = "18,148 60,128 102,108 144,82 186,60 228,42 270,26 312,14 354,5";
  return (
    <svg viewBox="0 0 374 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#df45ed"/>
          <stop offset="100%" stopColor="#ff008c"/>
        </linearGradient>
        <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#df45ed" stopOpacity=".22"/>
          <stop offset="100%" stopColor="#df45ed" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[40,80,120].map(y=><line key={y} x1="18" y1={y} x2="354" y2={y} stroke="rgba(223,69,237,.07)" strokeWidth="1"/>)}
      <polygon points={`18,158 ${pts} 354,158`} fill="url(#lg2)"/>
      <polyline points={pts} fill="none" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.split(" ").map((p,i)=>{const[x,y]=p.split(",");return<circle key={i} cx={x} cy={y} r="5" fill="#df45ed" stroke="#080008" strokeWidth="2"/>;})}
      {["Jan","Mar","May","Jul","Sep"].map((m,i)=>(
        <text key={m} x={18+i*84} y="155" fill="rgba(240,230,248,.25)" fontSize="8.5" fontFamily="Rubik" textAnchor="middle">{m}</text>
      ))}
    </svg>
  );
}

// ── Animated counter ──────────────────────────────────────────────────────────
function Counter({to, suffix=""}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:"-60px"});
  useEffect(()=>{
    if(!inView) return;
    let cur=0; const step=to/55;
    const t=setInterval(()=>{
      cur+=step; if(cur>=to){setVal(to);clearInterval(t);}else setVal(Math.floor(cur));
    },18);
    return ()=>clearInterval(t);
  },[inView,to]);
  return <span ref={ref} className="gp-num">{val}{suffix}</span>;
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function Reveal({children, delay=0, dir="up"}) {
  const ref = useRef(null);
  const inView = useInView(ref, {once:true, margin:"-50px"});
  return (
    <motion.div ref={ref}
      variants={{
        h:{opacity:0, y:dir==="up"?48:dir==="down"?-48:0, x:dir==="left"?56:dir==="right"?-56:0},
        v:{opacity:1, y:0, x:0},
      }}
      initial="h" animate={inView?"v":"h"}
      transition={{duration:.75, delay, ease:[.22,1,.36,1]}}
    >{children}</motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
function GetOutput() {
  const wrapRef = useRef(null);
  const {scrollYProgress} = useScroll({target:wrapRef});
  const heroY   = useTransform(scrollYProgress,[0,.2],[0,-55]);
  const heroOp  = useTransform(scrollYProgress,[0,.22],[1,0]);

  // Form state — same Google Forms IDs as original
  const [form, setForm] = useState({fullName:"",email:"",service:"",mobile:"",company:""});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const GFORM = "https://docs.google.com/forms/d/e/1FAIpQLScIYLzS0_d7L4Q2g27VSELxsc6xGlhlmpZTEScGaRKcTFmH6Q/formResponse";
  const SVC   = {"digital-pr":"Digital PR","social-media":"Social Media","web-dev":"Web Development","branding":"Branding"};

  const onChange = e => setForm({...form,[e.target.name]:e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    if(!form.fullName||!form.email||!form.service||!form.mobile||!form.company){alert("Please fill in all fields.");return;}
    setBusy(true);
    try {
      const p = new URLSearchParams();
      p.set("entry.1750294133",form.fullName); p.set("entry.2169000",form.email);
      p.set("entry.503342648",form.mobile);   p.set("entry.1041723599",form.company);
      p.set("entry.329502527",SVC[form.service]||form.service);
      p.set("fvv","1"); p.set("pageHistory","0"); p.set("fbzx",Date.now().toString());
      await fetch(GFORM,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:p.toString()});
      setDone(true); setForm({fullName:"",email:"",service:"",mobile:"",company:""});
    } catch{ alert("Submission failed. Please try again."); }
    finally { setBusy(false); }
  };

  const H2 = ({children, center=false}) => (
    <h2 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(2rem,4.5vw,3.5rem)",lineHeight:1.05,letterSpacing:"-.02em",color:"white",textAlign:center?"center":"left"}}>
      {children}
    </h2>
  );

  const Label = ({children}) => (
    <p style={{fontFamily:"'Rubik',sans-serif",fontSize:".72rem",fontWeight:600,letterSpacing:".18em",textTransform:"uppercase",color:"#df45ed",marginBottom:"12px"}}>
      — {children} —
    </p>
  );

  const Body = ({children, center=false}) => (
    <p style={{fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",lineHeight:1.8,color:"rgba(240,230,248,.55)",fontWeight:300,maxWidth:"46ch",textAlign:center?"center":"left"}}>
      {children}
    </p>
  );

  return (
    <>
      <style>{CSS}</style>
      <div id="gp-get" ref={wrapRef}>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{position:"relative",minHeight:"100svh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(90px,12vw,140px) clamp(20px,6vw,100px) clamp(60px,8vw,100px)",overflow:"hidden",textAlign:"center"}}>
          <div className="gp-grid"/>
          <div className="gp-blob" style={{width:"560px",height:"560px",background:"#8d07be",opacity:.11,top:"-130px",left:"-130px"}}/>
          <div className="gp-blob" style={{width:"400px",height:"400px",background:"#df45ed",opacity:.07,bottom:"-80px",right:"-80px"}}/>

          <motion.div style={{y:heroY,opacity:heroOp,position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",gap:"28px",maxWidth:"920px"}}>

            {/* Pill */}
            <motion.div initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{duration:.6}}
              style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"10px 22px",border:"1px solid rgba(223,69,237,.28)",borderRadius:"100px",background:"rgba(223,69,237,.07)",fontSize:".8rem",fontWeight:500,letterSpacing:".07em",textTransform:"uppercase",color:"#df45ed"}}>
              <span className="gp-dot" style={{width:"7px",height:"7px",borderRadius:"50%",background:"#df45ed",display:"inline-block"}}/>
              Digital Growth Agency 
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.15,ease:[.22,1,.36,1]}}
              style={{fontFamily:"'Montserrat',sans-serif",fontWeight:900,lineHeight:1.0,letterSpacing:"-.03em",color:"white",fontSize:"clamp(2.6rem,7vw,6rem)",margin:0}}>
              There are{" "}
              <span style={{background:"linear-gradient(135deg,#df45ed,#8d07be,#ff008c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                10,000+
              </span>
              {" "}agencies.
              <br/>You still found us.
            </motion.h1>

            {/* Sub */}
            <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.3,ease:[.22,1,.36,1]}}
              style={{fontFamily:"'Nunito',sans-serif",fontSize:"clamp(1rem,2vw,1.4rem)",fontWeight:300,color:"rgba(240,230,248,.55)",maxWidth:"600px",lineHeight:1.75,margin:0}}>
              That's not luck.{" "}
              <span style={{color:"rgba(240,230,248,.9)",fontWeight:600}}>
                That's the same precision we'll bring to growing your business.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.45}}
              style={{display:"flex",flexWrap:"wrap",gap:"14px",justifyContent:"center"}}>
              <a href="#gp-form" style={{display:"inline-flex",alignItems:"center",gap:"10px",padding:"16px 36px",background:"linear-gradient(135deg,#df45ed,#8d07be)",color:"white",borderRadius:"14px",fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1rem",letterSpacing:".06em",textDecoration:"none",transition:"transform .2s,box-shadow .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 14px 40px rgba(223,69,237,.4)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}
              >
                Start a Project
                <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </a>
              <a href="#gp-why" style={{display:"inline-flex",alignItems:"center",gap:"8px",padding:"16px 28px",border:"1px solid rgba(223,69,237,.3)",borderRadius:"14px",color:"rgba(240,230,248,.65)",fontSize:".95rem",fontFamily:"'Rubik',sans-serif",fontWeight:500,textDecoration:"none",transition:"all .25s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(223,69,237,.7)";e.currentTarget.style.color="#f0e6f8";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(223,69,237,.3)";e.currentTarget.style.color="rgba(240,230,248,.65)";}}
              >See Why Us ↓</a>
            </motion.div>
          </motion.div>

          {/* Orbit — decorative */}
          <motion.div initial={{opacity:0,scale:.7}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:.5}}
            className="gp-fl" style={{position:"absolute",right:"-60px",bottom:"-30px",width:"clamp(200px,28vw,380px)",opacity:.65,display:"none",pointerEvents:"none"}}
            aria-hidden="true">
            <SvgOrbit/>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.7}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:.5}}
            className="gp-fl" style={{position:"absolute",right:"-60px",bottom:"-30px",width:"clamp(200px,28vw,380px)",opacity:.65,pointerEvents:"none",display:"block"}}
            aria-hidden="true">
            <div style={{display:"block"}} className="hidden sm:block">
              <SvgOrbit/>
            </div>
          </motion.div>
        </section>

        {/* ── TICKER ──────────────────────────────────────────────────────── */}
        <div className="gp-z" style={{borderTop:"1px solid rgba(223,69,237,.1)",borderBottom:"1px solid rgba(223,69,237,.1)",padding:"14px 0",overflow:"hidden"}}>
          <div className="gp-ticker">
            {[...Array(2)].map((_,r)=>(
              <React.Fragment key={r}>
                {["SEO","•","Web Design","•","Branding","•","Digital PR","•","AI Integration","•","Social Media","•","Growth Systems","•"].map((w,i)=>(
                  <span key={`${r}-${i}`} style={{fontFamily:"'Montserrat',sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",padding:"0 20px",color:w==="•"?"#df45ed":"rgba(240,230,248,.22)",whiteSpace:"nowrap"}}>{w}</span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── WHY US ──────────────────────────────────────────────────────── */}
        <section id="gp-why" className="gp-z" style={{position:"relative",padding:"clamp(60px,10vw,120px) clamp(20px,6vw,100px)",overflow:"hidden"}}>
          <div className="gp-blob" style={{width:"550px",height:"380px",background:"#5a009f",opacity:.1,top:"10%",left:"55%"}}/>

          <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center"}}>

            {/* Left text */}
            <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
              <Reveal>
                <Label>The Numbers</Label>
                <H2>
                  You filtered through{" "}
                  <span style={{background:"linear-gradient(135deg,#df45ed,#8d07be)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                    the noise.
                  </span>
                  <br/>So did we.
                </H2>
              </Reveal>
              <Reveal delay={.12}>
                <Body>
                  Most businesses settle for the first agency they see. The ones that grow don't. They look deeper, ask harder questions, and find partners who think the same way they do. That's who we built Graphical Proximity for.
                </Body>
              </Reveal>

              {/* Stats */}
              <Reveal delay={.22}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginTop:"8px"}}>
                  {[{n:10,s:"+",l:"Active Clients"},{n:25,s:"+",l:"Projects Delivered"},{n:2,s:"+",l:"Years in Digital"},{n:100,s:"%",l:"Outcome Focused"}].map(st=>(
                    <div key={st.l} style={{padding:"20px 22px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(223,69,237,.12)",borderRadius:"16px"}}>
                      <Counter to={st.n} suffix={st.s}/>
                      <p style={{fontFamily:"'Nunito',sans-serif",fontSize:".88rem",color:"rgba(240,230,248,.4)",marginTop:"4px"}}>{st.l}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — funnel */}
            <Reveal dir="left" delay={.18}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"18px"}}>
                <p style={{fontFamily:"'Rubik',sans-serif",fontSize:".7rem",letterSpacing:".14em",textTransform:"uppercase",color:"rgba(240,230,248,.25)"}}>How you found us</p>
                <div className="gp-fl2" style={{width:"100%",maxWidth:"340px"}}><SvgFunnel/></div>
                <p style={{fontFamily:"'Montserrat',sans-serif",fontSize:"1rem",fontWeight:800,color:"#df45ed",letterSpacing:".04em",textAlign:"center"}}>You're exactly who we work with.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section className="gp-z" style={{position:"relative",padding:"clamp(50px,9vw,100px) clamp(20px,6vw,100px)",overflow:"hidden",background:"rgba(255,255,255,.015)"}}>
          <div className="gp-grid" style={{opacity:.45}}/>
          <div style={{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1}}>
            <Reveal>
              <div style={{textAlign:"center",marginBottom:"clamp(36px,5vw,60px)"}}>
                <Label>Services</Label>
                <H2 center>Six ways we grow your business.</H2>
              </div>
            </Reveal>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"14px"}}>
              {[
                {ic:"",t:"SEO",          d:"Rank where your clients search. Long-term compounding visibility."},
                {ic:"",t:"Web Design",   d:"Fast, conversion-focused sites that turn visitors into clients."},
                {ic:"", t:"Branding",     d:"Identity systems that stand distinct and timeless."},
                {ic:"",t:"Digital PR",   d:"Credibility placed in the spaces your audience trusts."},
                {ic:"",t:"Social Media", d:"Content that builds community and converts attention."},
                {ic:"",t:"AI Integration",d:"Automate the repetitive. Scale the strategic."},
              ].map((s,i)=>(
                <Reveal key={s.t} delay={i*.07}>
                  <motion.div whileHover={{y:-6,borderColor:"rgba(223,69,237,.5)"}} transition={{duration:.25}}
                    style={{padding:"28px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(223,69,237,.1)",borderRadius:"18px",cursor:"default",height:"100%"}}>
                    <div style={{fontSize:"1.7rem",marginBottom:"14px"}}>{s.ic}</div>
                    <h3 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:800,fontSize:"1.15rem",color:"white",marginBottom:"8px"}}>{s.t}</h3>
                    <p  style={{fontFamily:"'Nunito',sans-serif",fontSize:".93rem",color:"rgba(240,230,248,.45)",lineHeight:1.65}}>{s.d}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE THINK ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{position:"relative",padding:"clamp(50px,9vw,100px) clamp(20px,6vw,100px)",overflow:"hidden"}}>
          <div className="gp-blob" style={{width:"500px",height:"400px",background:"#df45ed",opacity:.07,top:"15%",right:"-110px"}}/>

          <div style={{maxWidth:"1200px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"clamp(40px,6vw,80px)",alignItems:"center"}}>

            {/* Chart */}
            <Reveal>
              <div className="gp-fl" style={{maxWidth:"460px"}}>
                <p style={{fontFamily:"'Rubik',sans-serif",fontSize:".7rem",letterSpacing:".13em",textTransform:"uppercase",color:"rgba(240,230,248,.25)",marginBottom:"14px"}}>Client visibility over time</p>
                <SvgGrowth/>
              </div>
            </Reveal>

            {/* Copy + steps */}
            <Reveal dir="left" delay={.18}>
              <div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
                <div>
                  <Label>How We Think</Label>
                  <H2>Results compound.<br/><span style={{color:"rgba(240,230,248,.3)"}}>Excuses don't.</span></H2>
                </div>
                <Body>We think in systems, not single shots. Every campaign builds on itself — SEO, brand authority, good design. They all compound when done correctly.</Body>

                {/* Steps */}
                <div style={{display:"flex",flexDirection:"column",gap:0,marginTop:"8px"}}>
                  {[
                    {n:"01",t:"Discovery Call", s:"We learn your business, goals, and current gaps in depth."},
                    {n:"02",t:"Strategy",       s:"A custom plan built for your market. No templates."},
                    {n:"03",t:"Execution",      s:"We build, publish, optimise, and report with full transparency."},
                  ].map((st,i)=>(
                    <div key={st.n} style={{position:"relative",paddingLeft:"54px",paddingBottom:i<2?"26px":"0"}}>
                      {i<2 && <div className="gp-step-line"/>}
                      <div style={{position:"absolute",left:0,top:0,width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg,#df45ed,#8d07be)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Montserrat',sans-serif",fontSize:".7rem",fontWeight:800,color:"white"}}>{st.n}</div>
                      <h4 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:"1rem",color:"white",marginBottom:"4px"}}>{st.t}</h4>
                      <p  style={{fontFamily:"'Nunito',sans-serif",fontSize:".9rem",color:"rgba(240,230,248,.42)"}}>{st.s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
        <section className="gp-z" style={{position:"relative",padding:"clamp(50px,9vw,100px) clamp(20px,6vw,100px)",overflow:"hidden",background:"linear-gradient(135deg,rgba(141,7,190,.06),rgba(223,69,237,.04))"}}>
          <div style={{maxWidth:"1140px",margin:"0 auto"}}>
            <Reveal>
              <div style={{textAlign:"center",marginBottom:"clamp(36px,5vw,56px)"}}>
                <Label>Social Proof</Label>
                <H2 center>Proof over promises.</H2>
              </div>
            </Reveal>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"14px"}}>
              {[
                {n:"Maa Bartala Construction",q:"We went from zero digital presence to appearing on Google for local searches. Real results, not just reports."},
                {n:"Pawan Singh",q:"YouTube channel management became structured. Engagement improved and monetisation finally became achievable."},
                {n:"Jonal Mill",q:"Clear communication, timely delivery. Our platform is now sleek, fast, and measurably better."},
                {n:"Anil Singh",q:"Business website launched in 3 weeks. First client enquiry arrived in week one."},
              ].map((t,i)=>(
                <Reveal key={t.n} delay={i*.08}>
                  <div style={{padding:"28px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(223,69,237,.1)",borderRadius:"18px",height:"100%"}}>
                    <p style={{fontFamily:"'Nunito',sans-serif",fontSize:".95rem",lineHeight:1.72,color:"rgba(240,230,248,.6)",fontWeight:300,marginBottom:"20px"}}>"{t.q}"</p>
                    <p style={{fontFamily:"'Montserrat',sans-serif",fontSize:".78rem",fontWeight:700,color:"#df45ed",letterSpacing:".07em",textTransform:"uppercase"}}>— {t.n}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM ────────────────────────────────────────────────────────── */}
        <section id="gp-form" className="gp-z" style={{position:"relative",padding:"clamp(60px,10vw,120px) clamp(20px,6vw,100px)",overflow:"hidden"}}>
          <div className="gp-blob" style={{width:"600px",height:"600px",background:"#8d07be",opacity:.12,top:"-120px",left:"-160px"}}/>
          <div className="gp-blob" style={{width:"380px",height:"380px",background:"#df45ed",opacity:.07,bottom:"-80px",right:"-100px"}}/>
          <div className="gp-grid"/>

          <div style={{maxWidth:"860px",margin:"0 auto",position:"relative",zIndex:1}}>
            <Reveal>
              <div style={{textAlign:"center",marginBottom:"clamp(36px,5vw,56px)"}}>
                <Label>Get in Touch</Label>
                <h2 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"clamp(2rem,5vw,4rem)",lineHeight:1.05,letterSpacing:"-.03em",color:"white",marginBottom:"16px"}}>
                  Ready to be found<br/>
                  <span style={{background:"linear-gradient(135deg,#df45ed,#ff008c)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                    by the right people?
                  </span>
                </h2>
                <p style={{fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(240,230,248,.45)",fontWeight:300}}>Fill in your details. We'll get back within 24 hours.</p>
              </div>
            </Reveal>

            {done ? (
              <Reveal>
                <div style={{padding:"60px 40px",textAlign:"center",background:"rgba(223,69,237,.06)",border:"1px solid rgba(223,69,237,.22)",borderRadius:"24px"}}>
                  <div style={{fontSize:"2.8rem",marginBottom:"18px",color:"#df45ed"}}>✦</div>
                  <h3 style={{fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:"1.8rem",color:"white",marginBottom:"10px"}}>Message received.</h3>
                  <p style={{fontFamily:"'Nunito',sans-serif",fontSize:"1.05rem",color:"rgba(240,230,248,.5)"}}>We'll be in touch within 24 hours. Talk soon.</p>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={.15}>
                <form onSubmit={onSubmit} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(223,69,237,.15)",borderRadius:"24px",padding:"clamp(26px,5vw,52px)",display:"flex",flexDirection:"column",gap:"20px"}}>

                  {/* Row 1 */}
                  <div className="gp-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                    <div><label className="gp-lbl">Full Name</label><input className="gp-in" type="text" name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" required disabled={busy}/></div>
                    <div><label className="gp-lbl">Company / Business</label><input className="gp-in" type="text" name="company" value={form.company} onChange={onChange} placeholder="Your business name" required disabled={busy}/></div>
                  </div>

                  {/* Row 2 */}
                  <div className="gp-2col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                    <div><label className="gp-lbl">Email</label><input className="gp-in" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" required disabled={busy}/></div>
                    <div><label className="gp-lbl">Phone</label><input className="gp-in" type="tel" name="mobile" value={form.mobile} onChange={onChange} placeholder="+91 XXXXX XXXXX" required disabled={busy}/></div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="gp-lbl">Service You Need</label>
                    <select className="gp-in" name="service" value={form.service} onChange={onChange} required disabled={busy}>
                      <option value="">— Select a service —</option>
                      <option value="digital-pr">Digital PR</option>
                      <option value="social-media">Social Media</option>
                      <option value="web-dev">Web Development</option>
                      <option value="branding">Branding</option>
                      <option value="seo">SEO Services</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="performance-marketing">Performance Marketing</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="gp-btn" disabled={busy} style={{marginTop:"6px"}}>
                    {busy ? "Sending…" : "Send Message →"}
                  </button>

                  <p style={{textAlign:"center",fontFamily:"'Nunito',sans-serif",fontSize:".85rem",color:"rgba(240,230,248,.22)"}}>
                    Or email directly:{" "}
                    <a href="mailto:letsdoit@graphicalproximity.com" style={{color:"#df45ed",textDecoration:"none"}}>letsdoit@graphicalproximity.com</a>
                  </p>
                </form>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── BOTTOM BAR ──────────────────────────────────────────────────── */}
        <div className="gp-z" style={{borderTop:"1px solid rgba(223,69,237,.1)",padding:"30px clamp(20px,6vw,100px)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px"}}>
          <p style={{fontFamily:"'Montserrat',sans-serif",fontWeight:900,fontSize:".95rem",color:"rgba(240,230,248,.14)",letterSpacing:".04em"}}>GRAPHICAL PROXIMITY</p>
          <p style={{fontFamily:"'Rubik',sans-serif",fontSize:".78rem",color:"rgba(240,230,248,.18)"}}>© 2025–26 · India</p>
        </div>

      </div>
    </>
  );
}

export default GetOutput;