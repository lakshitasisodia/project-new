"use client";

// ─────────────────────────────────────────────────────────────────────────────
// shared.jsx  —  Graphical Proximity design system
// All text content sourced from Agency Operating System (AOS) + Pitch Deck
// Brand voice: confident, direct, jargon-free, results-focused
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── Brand tokens ──────────────────────────────────────────────────────────────
export const B = {
  deep:     "rgb(29,2,29)",
  purple:   "rgb(85,0,85)",
  mid:      "rgb(114,1,114)",
  magenta:  "#df45ed",
  pink:     "#ff008c",
  offWhite: "#fafaf8",
  grey:     "#717171",
  light:    "#f4f0f4",
};

// ── Global CSS ────────────────────────────────────────────────────────────────
export const LIGHT_CSS = `
  .gp-page { background:#fafaf8; color:rgb(29,2,29); overflow-x:hidden; font-family:'Rubik',sans-serif; }
  .gp-page *, .gp-page *::before, .gp-page *::after { box-sizing:border-box; margin:0; padding:0; }

  .gp-lg {
    position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image:
      linear-gradient(rgba(85,0,85,.04) 1px,transparent 1px),
      linear-gradient(90deg,rgba(85,0,85,.04) 1px,transparent 1px);
    background-size:60px 60px;
  }

  .gp-lb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; z-index:0; }

  .gp-tk { display:flex; white-space:nowrap; animation:gp-tick 28s linear infinite; }
  @keyframes gp-tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  .gp-fl  { animation:gp-fl 7s ease-in-out infinite; }
  .gp-fl2 { animation:gp-fl 9s ease-in-out infinite; animation-delay:-3.5s; }
  @keyframes gp-fl { 0%,100%{transform:translateY(0)rotate(0deg)} 40%{transform:translateY(-14px)rotate(1.5deg)} 70%{transform:translateY(-6px)rotate(-1deg)} }

  .gp-orb  { animation:gp-spin 20s linear infinite; transform-origin:center; transform-box:fill-box; }
  .gp-orb2 { animation:gp-spin 13s linear infinite reverse; transform-origin:center; transform-box:fill-box; }
  @keyframes gp-spin { to{transform:rotate(360deg)} }

  .gp-dot { animation:gp-pulse 2s ease-in-out infinite; }
  @keyframes gp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }

  .gp-sl { position:absolute;left:18px;top:40px;bottom:-12px;width:2px;background:linear-gradient(to bottom,rgba(85,0,85,.45),transparent); }

  .gp-in {
    width:100%; padding:14px 18px;
    background:#fff;
    border:1.5px solid rgba(85,0,85,.18);
    border-radius:12px;
    font-size:1rem; color:rgb(29,2,29);
    font-family:'Nunito',sans-serif;
    outline:none; transition:border-color .25s,box-shadow .25s;
  }
  .gp-in::placeholder { color:rgba(29,2,29,.3); }
  .gp-in:focus { border-color:rgb(85,0,85); box-shadow:0 0 0 3px rgba(85,0,85,.08); }

  .gp-lbl {
    display:block; font-size:.7rem; font-weight:700;
    letter-spacing:.13em; text-transform:uppercase;
    color:rgb(85,0,85); margin-bottom:8px; font-family:'Rubik',sans-serif;
  }

  .gp-btn {
    width:100%; padding:17px;
    background:linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29));
    color:#fff; border:none; border-radius:14px;
    font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800;
    letter-spacing:.07em; cursor:pointer;
    transition:transform .2s,box-shadow .2s;
  }
  .gp-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 14px 40px rgba(85,0,85,.3); }
  .gp-btn:disabled { background:rgba(29,2,29,.2); cursor:not-allowed; }

  .gp-num {
    font-family:'Montserrat',sans-serif; font-weight:900;
    font-size:clamp(2.8rem,5.5vw,5rem); line-height:1; letter-spacing:-.04em;
    background:linear-gradient(135deg,#df45ed,rgb(85,0,85));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }

  .gp-pill {
    display:inline-flex; align-items:center; gap:8px;
    padding:9px 20px; border:1.5px solid rgba(85,0,85,.22);
    border-radius:100px; background:rgba(85,0,85,.06);
    font-size:.78rem; font-weight:600; letter-spacing:.07em;
    text-transform:uppercase; color:rgb(85,0,85); font-family:'Rubik',sans-serif;
  }

  .gp-z { position:relative; z-index:1; }

  @media(max-width:600px){ .gp-2col{ grid-template-columns:1fr !important; } }

  .gp-card {
    background:#fff; border:1.5px solid rgba(85,0,85,.1);
    border-radius:20px; transition:transform .28s,border-color .28s,box-shadow .28s;
  }
  .gp-card:hover { transform:translateY(-5px); border-color:rgba(85,0,85,.35); box-shadow:0 16px 50px rgba(85,0,85,.12); }
`;

// ── Primitives ────────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, dir = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref}
      variants={{
        h: { opacity:0, y:dir==="up"?48:dir==="down"?-48:0, x:dir==="left"?56:dir==="right"?-56:0 },
        v: { opacity:1, y:0, x:0 },
      }}
      initial="h" animate={inView?"v":"h"}
      transition={{ duration:0.75, delay, ease:[0.22,1,0.36,1] }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  useEffect(() => {
    if (!inView) return;
    let cur = 0; const step = to / 55;
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(t); } else setVal(Math.floor(cur));
    }, 18);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref} className="gp-num">{val}{suffix}</span>;
}

export function Ticker() {
  const words = [
    "SEO", "•", "Web Design", "•", "Branding", "•",
    "Digital PR", "•", "AI Integration", "•", "Social Media", "•",
    "Performance Marketing", "•", "Funnel Building", "•",
  ];
  return (
    <div className="gp-z" style={{ borderTop:"1px solid rgba(85,0,85,.1)", borderBottom:"1px solid rgba(85,0,85,.1)", padding:"13px 0", overflow:"hidden", background:"#fff" }}>
      <div className="gp-tk">
        {[...Array(2)].map((_, r) => (
          <React.Fragment key={r}>
            {words.map((w, i) => (
              <span key={`${r}-${i}`} style={{ fontFamily:"'Montserrat',sans-serif", fontSize:".68rem", fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", padding:"0 18px", color:w==="•"?"rgb(85,0,85)":"rgba(29,2,29,.22)", whiteSpace:"nowrap" }}>{w}</span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export const Label = ({ children }) => (
  <p style={{ fontFamily:"'Rubik',sans-serif", fontSize:".72rem", fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"rgb(85,0,85)", marginBottom:"12px" }}>
    — {children} —
  </p>
);

export const H1 = ({ children }) => (
  <h1 style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:"clamp(2.6rem,7vw,6rem)", lineHeight:1.0, letterSpacing:"-.03em", color:"rgb(29,2,29)" }}>
    {children}
  </h1>
);

export const H2 = ({ children, center = false }) => (
  <h2 style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:900, fontSize:"clamp(2rem,4.5vw,3.5rem)", lineHeight:1.05, letterSpacing:"-.02em", color:"rgb(29,2,29)", textAlign:center?"center":"left" }}>
    {children}
  </h2>
);

export const Body = ({ children, center = false }) => (
  <p style={{ fontFamily:"'Nunito',sans-serif", fontSize:"1.05rem", lineHeight:1.8, color:"#666", fontWeight:300, textAlign:center?"center":"left" }}>
    {children}
  </p>
);

// ── SVG Illustrations (unchanged — design only) ───────────────────────────────

export function SvgOrbit({ dark = false }) {
  const acc = dark ? "#df45ed" : "rgb(85,0,85)";
  const acc2 = dark ? "#ff008c" : "#df45ed";
  return (
    <svg viewBox="0 0 420 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="og-l" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={acc} stopOpacity=".85" />
          <stop offset="100%" stopColor="rgb(29,2,29)" stopOpacity=".25" />
        </radialGradient>
        <filter id="ogl"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g className="gp-orb">
        <ellipse cx="210" cy="210" rx="175" ry="58" fill="none" stroke={`${acc}30`} strokeWidth="1.5" strokeDasharray="7 5"/>
        <circle cx="385" cy="210" r="11" fill={acc} filter="url(#ogl)" opacity=".9"/>
        <circle cx="35" cy="210" r="7" fill="rgb(85,0,85)" opacity=".55"/>
      </g>
      <g className="gp-orb2">
        <ellipse cx="210" cy="210" rx="125" ry="40" fill="none" stroke={`${acc2}28`} strokeWidth="1.5" strokeDasharray="5 7" transform="rotate(-22 210 210)"/>
        <circle cx="330" cy="175" r="9" fill={acc2} filter="url(#ogl)" opacity=".8"/>
      </g>
      <circle cx="210" cy="210" r="78" fill="none" stroke={`${acc}14`} strokeWidth="1"/>
      <circle cx="210" cy="210" r="46" fill="url(#og-l)" filter="url(#ogl)"/>
      <circle cx="210" cy="210" r="30" fill={dark?"rgba(8,0,8,.85)":"rgba(250,250,248,.9)"}/>
      <text x="210" y="217" textAnchor="middle" fill={acc} fontSize="15" fontWeight="900" fontFamily="Montserrat,sans-serif">GP</text>
      {[{x:70,y:80,t:"SEO"},{x:320,y:65,t:"Brand"},{x:350,y:342,t:"Web"},{x:62,y:340,t:"PR"}].map(l=>(
        <g key={l.t}>
          <rect x={l.x-28} y={l.y-14} width="56" height="28" rx="14" fill={`${acc}12`} stroke={`${acc}30`} strokeWidth="1"/>
          <text x={l.x} y={l.y+5} textAnchor="middle" fill={acc} fontSize="9.5" fontWeight="700" fontFamily="Rubik,sans-serif" letterSpacing=".06em">{l.t}</text>
        </g>
      ))}
    </svg>
  );
}

export function SvgGrowth() {
  const pts = "18,148 60,128 102,108 144,82 186,60 228,42 270,26 312,14 354,5";
  return (
    <svg viewBox="0 0 374 162" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(85,0,85)"/><stop offset="100%" stopColor="#df45ed"/>
        </linearGradient>
        <linearGradient id="lg2l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(85,0,85)" stopOpacity=".18"/><stop offset="100%" stopColor="rgb(85,0,85)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[40,80,120].map(y=><line key={y} x1="18" y1={y} x2="354" y2={y} stroke="rgba(85,0,85,.07)" strokeWidth="1"/>)}
      <polygon points={`18,158 ${pts} 354,158`} fill="url(#lg2l)"/>
      <polyline points={pts} fill="none" stroke="url(#lg1l)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.split(" ").map((p,i)=>{const[x,y]=p.split(",");return<circle key={i} cx={x} cy={y} r="5" fill="rgb(85,0,85)" stroke="#fafaf8" strokeWidth="2"/>;} )}
      {["Jan","Mar","May","Jul","Sep"].map((m,i)=>(
        <text key={m} x={18+i*84} y="157" fill="rgba(29,2,29,.28)" fontSize="8.5" fontFamily="Rubik" textAnchor="middle">{m}</text>
      ))}
    </svg>
  );
}

export function SvgFunnel() {
  const rows = [
    { label:"10,000+ Agencies", w:310, a:0.08 },
    { label:"500 Find You",      w:230, a:0.18 },
    { label:"50 Consider You",   w:155, a:0.38 },
    { label:"You Chose GP ✦",   w:90,  a:1    },
  ];
  return (
    <svg viewBox="0 0 310 212" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {rows.map((r,i)=>(
        <g key={i} transform={`translate(${(310-r.w)/2},${i*50})`}>
          <rect width={r.w} height="38" rx="10" fill={`rgba(85,0,85,${r.a})`} stroke="rgba(85,0,85,.25)" strokeWidth="1"/>
          <text x={r.w/2} y="23.5" textAnchor="middle" fill={r.a>0.5?"#fff":"rgba(29,2,29,.7)"} fontSize="10" fontWeight="600" fontFamily="Nunito,sans-serif">{r.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function SvgBranding() {
  return (
    <svg viewBox="0 0 340 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(85,0,85)" stopOpacity=".9"/>
          <stop offset="100%" stopColor="#df45ed" stopOpacity=".7"/>
        </linearGradient>
      </defs>
      <rect x="30" y="20" width="280" height="170" rx="18" fill="url(#bg1)"/>
      <circle cx="80" cy="70" r="28" fill="rgba(255,255,255,.2)"/>
      <text x="80" y="77" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="900" fontFamily="Montserrat,sans-serif">GP</text>
      <rect x="120" y="56" width="150" height="12" rx="6" fill="rgba(255,255,255,.5)"/>
      <rect x="120" y="76" width="100" height="8" rx="4" fill="rgba(255,255,255,.25)"/>
      {["rgb(29,2,29)","rgb(85,0,85)","#df45ed","#ff008c","#fafaf8"].map((c,i)=>(
        <circle key={i} cx={60+i*36} cy="150" r="14" fill={c} stroke="rgba(255,255,255,.3)" strokeWidth="1.5"/>
      ))}
      <rect x="30" y="210" width="280" height="55" rx="14" fill="#fff" stroke="rgba(85,0,85,.15)" strokeWidth="1.5"/>
      <text x="50" y="232" fill="rgb(85,0,85)" fontSize="10" fontWeight="700" fontFamily="Rubik,sans-serif" letterSpacing=".1em">MONTSERRAT · NUNITO · RUBIK</text>
      <text x="50" y="252" fill="rgb(29,2,29)" fontSize="13" fontWeight="800" fontFamily="Montserrat,sans-serif">Bold. Clear. Yours.</text>
    </svg>
  );
}

export function SvgSEO() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="300" height="44" rx="22" fill="#fff" stroke="rgba(85,0,85,.2)" strokeWidth="1.5"/>
      <circle cx="48" cy="42" r="10" fill="none" stroke="rgb(85,0,85)" strokeWidth="2"/>
      <line x1="55" y1="49" x2="62" y2="56" stroke="rgb(85,0,85)" strokeWidth="2" strokeLinecap="round"/>
      <text x="80" y="47" fill="rgba(29,2,29,.45)" fontSize="11" fontFamily="Nunito,sans-serif">graphicalproximity.com</text>
      {[0,1,2].map(i=>(
        <g key={i} transform={`translate(20,${80+i*52})`}>
          <rect width="300" height="42" rx="10" fill={i===0?"rgba(85,0,85,.08)":"#fff"} stroke={i===0?"rgba(85,0,85,.3)":"rgba(29,2,29,.07)"} strokeWidth="1.5"/>
          {i===0&&<rect x="0" y="0" width="4" height="42" rx="2" fill="rgb(85,0,85)"/>}
          <text x="16" y="16" fill="rgba(29,2,29,.4)" fontSize="8" fontFamily="Rubik,sans-serif" letterSpacing=".06em">{i===0?"TOP RESULT":`RESULT ${i+1}`}</text>
          <rect x="16" y="22" width={200-i*30} height="8" rx="4" fill={i===0?"rgba(85,0,85,.35)":"rgba(29,2,29,.1)"}/>
        </g>
      ))}
      <circle cx="298" cy="82" r="20" fill="rgb(85,0,85)"/>
      <text x="298" y="87" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="900" fontFamily="Montserrat,sans-serif">#1</text>
    </svg>
  );
}

export function SvgWebDev() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="300" height="200" rx="14" fill="#fff" stroke="rgba(85,0,85,.15)" strokeWidth="1.5"/>
      <rect x="20" y="20" width="300" height="36" rx="14" fill="rgba(85,0,85,.07)"/>
      <rect x="20" y="44" width="300" height="12" fill="rgba(85,0,85,.07)"/>
      {["#ef4444","#f59e0b","#22c55e"].map((c,i)=><circle key={i} cx={40+i*16} cy="38" r="5" fill={c}/>)}
      <rect x="90" y="30" width="180" height="16" rx="8" fill="rgba(255,255,255,.7)"/>
      <text x="180" y="42" textAnchor="middle" fill="rgba(29,2,29,.4)" fontSize="7.5" fontFamily="Rubik,sans-serif">graphicalproximity.com</text>
      <rect x="35" y="66" width="270" height="80" rx="8" fill="rgba(85,0,85,.08)"/>
      <rect x="50" y="82" width="120" height="14" rx="7" fill="rgba(85,0,85,.5)"/>
      <rect x="50" y="102" width="85" height="8" rx="4" fill="rgba(29,2,29,.12)"/>
      <rect x="50" y="118" width="65" height="18" rx="9" fill="rgb(85,0,85)"/>
      {[0,1,2].map(i=>(
        <rect key={i} x={35+i*92} y="158" width="82" height="48" rx="8" fill={i===0?"rgba(85,0,85,.1)":"#f4f0f4"} stroke="rgba(85,0,85,.1)" strokeWidth="1"/>
      ))}
    </svg>
  );
}

export function SvgSocial() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="110" y="10" width="120" height="220" rx="18" fill="#fff" stroke="rgba(85,0,85,.2)" strokeWidth="1.5"/>
      <rect x="120" y="25" width="100" height="190" rx="10" fill="#fafaf8"/>
      <rect x="124" y="30" width="92" height="80" rx="8" fill="rgba(85,0,85,.12)"/>
      <circle cx="140" cy="48" r="10" fill="rgb(85,0,85)" opacity=".6"/>
      <rect x="156" y="44" width="48" height="7" rx="3" fill="rgba(29,2,29,.2)"/>
      <rect x="156" y="55" width="34" height="5" rx="2.5" fill="rgba(29,2,29,.1)"/>
      <rect x="124" y="70" width="92" height="32" rx="4" fill="rgba(85,0,85,.18)"/>
      {["❤️","👍","🔥"].map((e,i)=><text key={i} x={130+i*22} y="125" fontSize="12">{e}</text>)}
      <rect x="124" y="130" width="92" height="6" rx="3" fill="rgba(29,2,29,.1)"/>
      <rect x="124" y="140" width="65" height="6" rx="3" fill="rgba(29,2,29,.07)"/>
      <circle cx="60" cy="80" r="35" fill="none" stroke="rgba(85,0,85,.15)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <circle cx="60" cy="80" r="22" fill="rgba(85,0,85,.08)"/>
      <text x="60" y="76" textAnchor="middle" fill="rgb(85,0,85)" fontSize="9" fontWeight="700" fontFamily="Montserrat,sans-serif">+2.4K</text>
      <text x="60" y="88" textAnchor="middle" fill="rgba(29,2,29,.4)" fontSize="7" fontFamily="Rubik,sans-serif">followers</text>
      <circle cx="280" cy="160" r="32" fill="none" stroke="rgba(223,69,237,.15)" strokeWidth="1.5" strokeDasharray="5 4"/>
      <circle cx="280" cy="160" r="20" fill="rgba(223,69,237,.08)"/>
      <text x="280" y="156" textAnchor="middle" fill="#df45ed" fontSize="9" fontWeight="700" fontFamily="Montserrat,sans-serif">+890</text>
      <text x="280" y="167" textAnchor="middle" fill="rgba(29,2,29,.4)" fontSize="7" fontFamily="Rubik,sans-serif">reach</text>
    </svg>
  );
}

export function SvgAI() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ai-g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(85,0,85)" stopOpacity=".12"/>
          <stop offset="100%" stopColor="rgb(85,0,85)" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="170" cy="120" r="90" fill="url(#ai-g)"/>
      <circle cx="170" cy="120" r="32" fill="rgba(85,0,85,.12)" stroke="rgba(85,0,85,.3)" strokeWidth="1.5"/>
      <text x="170" y="116" textAnchor="middle" fill="rgb(85,0,85)" fontSize="9" fontWeight="700" fontFamily="Rubik,sans-serif">AI</text>
      <text x="170" y="128" textAnchor="middle" fill="rgb(85,0,85)" fontSize="9" fontWeight="700" fontFamily="Rubik,sans-serif">ENGINE</text>
      {[{x:170,y:38,label:"Automation"},{x:265,y:78,label:"Analytics"},{x:265,y:162,label:"Content"},{x:170,y:202,label:"Chatbots"},{x:75,y:162,label:"SEO AI"},{x:75,y:78,label:"Insights"}].map((n,i)=>(
        <g key={i}>
          <line x1="170" y1="120" x2={n.x} y2={n.y} stroke="rgba(85,0,85,.18)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <circle cx={n.x} cy={n.y} r="22" fill="rgba(85,0,85,.07)" stroke="rgba(85,0,85,.22)" strokeWidth="1"/>
          <text x={n.x} y={n.y+4} textAnchor="middle" fill="rgb(85,0,85)" fontSize="7.5" fontWeight="600" fontFamily="Rubik,sans-serif">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

export function SvgPR() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {[{x:20,y:20,w:185,h:90,label:"Tech Publication"},{x:220,y:20,w:100,h:90,label:"News Media"},{x:20,y:125,w:100,h:95,label:"Industry Blog"},{x:135,y:125,w:185,h:95,label:"Podcast Feature"}].map((c,i)=>(
        <g key={i}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="12" fill={i===0?"rgba(85,0,85,.08)":"#fff"} stroke="rgba(85,0,85,.14)" strokeWidth="1.5"/>
          <rect x={c.x+12} y={c.y+16} width={c.w-24} height="8" rx="4" fill="rgba(85,0,85,.3)"/>
          <rect x={c.x+12} y={c.y+30} width={c.w-40} height="6" rx="3" fill="rgba(29,2,29,.1)"/>
          <rect x={c.x+12} y={c.y+42} width={c.w-55} height="6" rx="3" fill="rgba(29,2,29,.07)"/>
          <text x={c.x+12} y={c.y+c.h-12} fill="rgba(85,0,85,.5)" fontSize="7.5" fontWeight="700" fontFamily="Rubik,sans-serif" letterSpacing=".06em">{c.label}</text>
        </g>
      ))}
      <circle cx="170" cy="120" r="22" fill="rgb(85,0,85)" stroke="#fafaf8" strokeWidth="3"/>
      <text x="170" y="116" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Rubik,sans-serif">AUTH</text>
      <text x="170" y="127" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Rubik,sans-serif">ORITY</text>
    </svg>
  );
}

export function SvgDigitalMkt() {
  return (
    <svg viewBox="0 0 340 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {[{y:10,w:300,h:44,label:"Awareness — 10,000 reach"},{y:68,w:220,h:44,label:"Interest — 2,400 engaged"},{y:126,w:150,h:44,label:"Decision — 480 clicks"},{y:184,w:90,h:44,label:"Conversion ✦"}].map((r,i)=>(
        <g key={i} transform={`translate(${(340-r.w)/2},${r.y})`}>
          <rect width={r.w} height={r.h} rx="10" fill={`rgba(85,0,85,${0.08+i*0.14})`} stroke="rgba(85,0,85,.22)" strokeWidth="1.5"/>
          <text x={r.w/2} y={r.h/2+4} textAnchor="middle" fill={i>1?"#fff":"rgba(29,2,29,.65)"} fontSize="9.5" fontWeight="600" fontFamily="Nunito,sans-serif">{r.label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── GP Agency Content ─────────────────────────────────────────────────────────
// All copy blocks sourced directly from the AOS and Pitch Deck.
// Use these in page components instead of writing generic placeholder text.

export const GP_CONTENT = {

  // ── Homepage ──────────────────────────────────────────────────────────────
  home: {
    heroPill:    "Full-Service Digital Growth Agency — India & International",
    heroH1Line1: "Creating Your Story",
    heroH1Line2: "For You.",
    heroSub:     "Most businesses don't fail because their product is bad. They fail because they are invisible online. Graphical Proximity fixes that — permanently.",
    heroCtaPrimary:   "Our Services",
    heroCtaSecondary: "Start a Project",

    impactLabel: "Our Impact",
    impactH2Line1: "Numbers that",
    impactH2Line2: "speak for us.",
    impactBody:  "Every decision we make ties to client growth. We report on revenue impact — not vanity metrics. Here's what that looks like.",

    stats: [
      { n:10,  s:"+", l:"Active Clients"     },
      { n:25,  s:"+", l:"Projects Delivered"  },
      { n:4,   s:"+", l:"Years in Digital"    },
      { n:100, s:"%", l:"Delivery Rate"       },
    ],

    servicesLabel: "What We Do",
    servicesH2:    "Three growth engines. Nine services. One agency.",
    services: [
      { n:"01", t:"SEO & Google Visibility",    d:"Free, compounding organic traffic. Page 1 rankings for 5+ target keywords. GMB views up 50%+ in 90 days.",                               path:"/seo-services"      },
      { n:"02", t:"Web Design & Development",   d:"Mobile-first, load speed under 3 seconds, conversion rate above 2%. Built to turn visitors into clients.",                               path:"/web-development"   },
      { n:"03", t:"Branding & Identity",        d:"Logo, visual language, positioning, and brand guidelines. Built to stand distinct and timeless.",                                         path:"/branding"          },
      { n:"04", t:"Digital PR",                 d:"High-authority placements, backlink building, and media outreach. Credibility that search engines reward.",                               path:"/digital-pr"        },
      { n:"05", t:"Social Media Marketing",     d:"Feed posts, reels, stories, DM management, analytics. Engagement rate above 3%. Followers that convert.",                                path:"/social-media"      },
      { n:"06", t:"Performance Marketing",      d:"Google Ads and Meta Ads — live within 5–7 days. ROAS above 3x for e-commerce. CPL below industry benchmark.",                           path:"/performance-marketing" },
    ],

    thinkLabel: "How We Think",
    thinkH2Line1: "Results compound.",
    thinkH2Line2: "Excuses don't.",
    thinkBody:  "We don't sell services. We build digital engines that generate leads, build authority, and compound over time. Our clients don't hire us for tasks. They hire us for results.",
    thinkSteps: [
      { n:"01", t:"Discovery",  s:"We audit your current digital presence, identify gaps, and define your Ideal Client Profile." },
      { n:"02", t:"Strategy",   s:"Custom growth plan built around one or more of our three engines — Performance, Content, or SEO." },
      { n:"03", t:"Execution",  s:"We build, publish, optimise, and report. You see revenue impact — not just activity reports." },
    ],

    whyLabel:    "Why Choose Us",
    whyH2Line1:  "There are 10,000+ agencies",
    whyH2Line2:  "out there. You found us.",
    whyBody:     "That's not luck — that's the same precision we apply to making your business the obvious choice in your market. AI-powered execution plus human strategy means faster results at lower cost than traditional agencies.",

    testimonialLabel: "What Clients Say",
    testimonialH2:    "Proof over promises.",
    testimonials: [
      { name:"Maa Bartala Construction", quote:"Zero to first-page Google in under three months. We started getting client enquiries we never had before." },
      { name:"Pawan Gupta",              quote:"Channel management became structured and scalable. Monetisation threshold reached within four months of working together." },
      { name:"Jonathan Martinez",        quote:"On-time delivery, clear communication, measurable improvement. The platform is better in every way." },
      { name:"Anil Singh",               quote:"Website live in 3 weeks. First client enquiry arrived in week one. Exactly what we needed at launch." },
    ],

    ctaH2:  "Ready to stop being invisible?",
    ctaSub: "Most businesses that contact us see measurable movement in the first 30–60 days. Let's talk about yours.",
  },

  // ── About ─────────────────────────────────────────────────────────────────
  about: {
    heroPill:    "Graphical Proximity",
    heroH2Line1: "A digital agency",
    heroH2Line2: "built for results.",
    heroSub:     "We are a full-service digital growth agency built for businesses across India and internationally that want to dominate online. We don't just run ads or build websites — we engineer complete digital growth systems.",

    defineLabel: "What Defines Us",
    defineH2:    "We fix the visibility problem for growing businesses.",
    definePara1: "Graphical Proximity is the growth partner for ambitious businesses — gyms, salons, restaurants, clinics, real estate firms, B2B companies, founders, and creators — that are ready to stop being invisible online.",
    definePara2: "Founded by Lakshita Singh Sisodia, the agency combines AI-powered execution with human strategy. The result: faster results, sharper targeting, and marketing that ties directly to revenue — not just activity.",
    definePara3: "We treat every client's business like our own. That means proactive recommendations, honest timelines, and reporting that ties directly to revenue — not vanity metrics.",

    stats: [
      { n:10,  s:"+", l:"Active Clients"    },
      { n:25,  s:"+", l:"Projects Delivered" },
      { n:4,   s:"+", l:"Years in Market"   },
      { n:9,   s:"",  l:"Service Lines"     },
    ],

    valuesLabel: "Core Values",
    valuesH2:    "How we work. Every day.",
    values: [
      { tag:"Results First",        title:"Every decision ties to client growth.",             body:"We report on revenue impact, not impressions or follower counts. If it doesn't move the needle for your business, we don't prioritise it." },
      { tag:"Radical Clarity",      title:"No jargon. No confusion. No surprises.",            body:"Simple reporting, honest timelines, and clear contracts. You always know what's being done, why it's being done, and what it's producing." },
      { tag:"Ownership Mindset",    title:"We treat your business like our own.",              body:"Proactive recommendations — not just order-taking. If we see an opportunity or a problem, we surface it immediately." },
      { tag:"Speed + Quality",      title:"Fast delivery without cutting corners.",            body:"Templated systems that maintain high standards. Most websites live in 10–14 days. Most ad campaigns are live within 5–7 business days." },
    ],

    missionLabel: "Mission & Vision",
    mission: {
      tag:"Mission",
      title:"Make every business impossible to ignore.",
      body:"To help businesses grow faster online by combining smart strategy, world-class design, and AI-powered execution — delivering results that actually move the needle. Premium digital growth should be accessible to ambitious businesses, not just enterprise brands.",
    },
    vision: {
      tag:"Vision",
      title:"From local sparks to national voices.",
      body:"Graphical Proximity aims to be the growth partner that helps ambitious local businesses transform into recognised names. We are building the systems, talent, and track record to scale with every client we take on.",
    },

    founderLabel: "Founder",
    founderName:  "Lakshita Singh Sisodia",
    founderRole:  "Founder, Graphical Proximity",
    founderBio: [
      "Lakshita started Graphical Proximity with a clear problem in mind: most local businesses in India have great products but zero digital visibility. Traditional agencies were either too expensive, too slow, or too focused on activity over outcomes. She built something different.",
      "With a background in Computer Science and Business Systems, Lakshita combines technical execution with commercial strategy. She built the agency around AI-powered systems that deliver the output of a full marketing team at a fraction of the cost — without compromising on quality.",
      "Under her leadership, Graphical Proximity has helped businesses in construction, consulting, e-commerce, and professional services grow their online presence and generate real, measurable leads — across India and internationally. Each project is driven by outcomes, not just deliverables.",
    ],
    founderCta: "Work With Us →",

    ctaH2:  "Let's build something together.",
    ctaSub: "No commitment required for the first conversation.",
  },

  // ── Services page ─────────────────────────────────────────────────────────
  services: {
    heroPill:    "What We Do",
    heroH2Line1: "Elevate Your",
    heroH2Line2: "Digital Presence.",
    heroSub:     "From Branding to AI Integration — nine service lines, three growth engines, one agency. We don't sell services. We build digital engines.",

    listLabel: "Service Lines",
    listH2:    "Nine ways we grow your business.",
    services: [
      { n:"01", slug:"seo-services",      title:"SEO & Google Visibility",           sub:"Page 1 rankings. Compounding organic traffic. GMB views up 50%+ in 90 days."           },
      { n:"02", slug:"web-development",   title:"Web Design & Development",          sub:"Mobile-first. Load under 3 seconds. Conversion rate above 2%."                          },
      { n:"03", slug:"branding",          title:"Branding & Identity Design",        sub:"Logo, visual system, positioning, brand guidelines. Built to last."                      },
      { n:"04", slug:"digital-pr",        title:"Digital PR & Authority Building",   sub:"High-authority placements. Backlink building. Media outreach that compounds."            },
      { n:"05", slug:"social-media",      title:"Social Media Marketing",            sub:"Feed posts, reels, DM management, analytics. Engagement rate above 3%."                  },
      { n:"06", slug:"performance-marketing", title:"Performance Marketing",             sub:"Google and Meta Ads live within 5–7 days. ROAS above 3x. CPL below benchmark."           },
      { n:"07", slug:"ai-integration",    title:"AI Integration & Automation",       sub:"Automate lead follow-up, content pipelines, and reporting. Scale without hiring."         },
    ],

    visualLabel: "By the Numbers",
    visualH2:    "What our clients actually get.",

    ctaH2:  "Not sure which service you need?",
    ctaSub: "Tell us your goal — revenue, visibility, or leads. We'll map the right service mix.",
  },

  // ── Clients page ──────────────────────────────────────────────────────────
  clients: {
    heroPill:    "Client Work",
    heroH2Line1: "Proof, not",
    heroH2Line2: "promises.",
    heroSub:     "We work with local service businesses that are serious about digital growth. Here's what that looks like in practice.",

    statsLabel: "Track Record",
    stats: [
      { n:10,  s:"+", l:"Active Clients"    },
      { n:4,   s:"",  l:"Client Verticals"  },
      { n:100, s:"%", l:"Delivery Rate"     },
      { n:25,  s:"+", l:"Projects Done"     },
    ],

    clientsLabel: "Client Work",
    clientsH2:    "Businesses we have grown.",
    clients: [
      { name:"Maa Bartala Construction", tag:"Web + Local SEO",      result:"Zero digital presence to first-page Google for local construction searches.",      outcome:"First online enquiry within 2 weeks of site launch."          },
      { name:"Pawan Gupta",              tag:"YouTube Strategy",     result:"Unstructured channel to monetisation-ready. Content calendar, SEO, and analytics in place.", outcome:"Monetisation threshold reached in 4 months."                   },
      { name:"Jonathan Martinez",        tag:"Web Development",      result:"Legacy platform rebuilt — fast, mobile-first, user-friendly. Zero scope creep.",             outcome:"Platform performance scores improved by 60%."                  },
      { name:"Anil Singh",               tag:"Business Launch Site", result:"Brand new website designed, built, and live in 3 weeks. Conversion-focused from day one.",   outcome:"First paying client acquired in week one of launch."           },
    ],

    testimonialLabel: "In Their Own Words",
    testimonialH2:    "What our clients say.",
    testimonials: [
      { name:"Maa Bartala Construction", quote:"We went from invisible to first-page Google. Real enquiries from real clients — not just a nice-looking website." },
      { name:"Pawan Gupta",              quote:"Finally structured and scalable. The channel is growing and monetisation is real. I wish I'd done this sooner." },
      { name:"Jonathan Martinez",        quote:"Professional, on time, and measurably better. Clear communication from start to finish." },
      { name:"Anil Singh",               quote:"Three weeks from zero to live. First client came through the website in week one." },
    ],

    ctaH2:  "Want to be our next success story?",
    ctaSub: "We work with businesses ready to commit to 60–90 days of measurable growth.",
  },

  // ── Get In Touch ──────────────────────────────────────────────────────────
  contact: {
    heroH1Line1: "There are 10,000+",
    heroH1Line2: "agencies out there.",
    heroH1Line3: "You still found us.",
    heroSub:     "That's not luck — that's the same precision we'll apply to making your business the obvious choice in your market.",
    heroPill:    "Full-Service Digital Growth Agency — India & International",

    funnelCaption: "How you found us",
    funnelTagline: "You're exactly who we work with.",

    whyLabel:    "The Numbers",
    whyH2Line1:  "You filtered through the noise.",
    whyH2Line2:  "So did we.",
    whyBody:     "We work with local service businesses, founders, e-commerce brands, and B2B companies — across India and internationally — that are ready to stop being invisible. We don't take every client. We take the right ones.",

    servicesLabel: "What We Offer",
    servicesH2:    "Nine ways we grow your business.",
    services: [
      { ic:"📈", t:"Performance Marketing", d:"Google Ads & Meta Ads campaigns live in 5–7 days. Every rupee of ad spend tracked to a real lead or sale."                    },
      { ic:"🔍", t:"SEO",                   d:"Page 1 rankings. Compounding organic traffic that doesn't stop when your budget does."                                          },
      { ic:"🌐", t:"Web Design",            d:"Mobile-first, fast-loading, conversion-focused. Built to turn visitors into paying clients."                                    },
      { ic:"✦",  t:"Branding",              d:"Logo, visual identity, brand guidelines. Designed to be distinct, consistent, and timeless."                                   },
      { ic:"📣", t:"Digital PR",            d:"High-authority placements and backlinks. Credibility that compounds in search engines and buyer trust."                        },
      { ic:"📱", t:"Social Media",          d:"Content strategy, creation, and community management. Followers that actually convert."                                        },
      { ic:"💼", t:"LinkedIn Branding",     d:"Authority content and DM management for founders and professionals generating inbound leads."                                  },
      { ic:"🚀", t:"Digital Marketing",     d:"Multi-channel growth strategy — content, email, funnels — built around your revenue goals."                                    },
      { ic:"🤖", t:"AI Integration",        d:"Automate lead follow-up, content pipelines, and reporting. More output, lower overhead."                                       },
    ],

    thinkLabel:  "How We Think",
    thinkH2Line1:"Results compound.",
    thinkH2Line2:"Excuses don't.",
    thinkBody:   "Every service we run is designed to build on itself. SEO compounds. Brand authority compounds. Good design compounds. We think in systems, not single shots.",
    thinkSteps: [
      { n:"01", t:"Discovery",  s:"We audit your presence, identify gaps, and define your Ideal Client Profile."             },
      { n:"02", t:"Strategy",   s:"Custom plan. No templates. Built for your market, your budget, your goals."               },
      { n:"03", t:"Execution",  s:"We build, publish, optimise, and report. You see revenue impact — not activity reports."  },
    ],

    proofLabel: "Social Proof",
    proofH2:    "Proof over promises.",
    testimonials: [
      { name:"Maa Bartala Construction", quote:"Zero to first-page Google. Real enquiries from real clients — not just a nice-looking website."         },
      { name:"Pawan Gupta",              quote:"Finally structured and scalable. Monetisation is real and the channel keeps growing month on month."     },
      { name:"Jonathan Martinez",        quote:"Clear communication, on-time delivery. Measurably better in every way."                                 },
      { name:"Anil Singh",               quote:"Website live in 3 weeks. First paying client came through in week one."                                 },
    ],

    formLabel:  "Get in Touch",
    formH2:     "Ready to be found by the right people?",
    formSub:    "Fill in your details. We respond within 24 hours — always.",
    formSuccess:"Message received. We'll be in touch within 24 hours. Talk soon.",
    formCta:    "Send Message →",
    formAlt:    "Or email us directly:",
    formEmail:  "hello@graphicalproximity.com",

    bottomCta:   "Get in Touch →",
  },
};