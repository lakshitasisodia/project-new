"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SERVICES = [
  { name: "All Services",               path: "/services"              },
  { name: "Digital PR",                 path: "/digital-pr"            },
  { name: "Digital Marketing",          path: "/digital-marketing"     },
  { name: "Performance Marketing",      path: "/performance-marketing" },
  { name: "Brand Identity & Design",    path: "/branding"              },
  { name: "Web Design & Development",   path: "/web-development"       },
  { name: "SEO Services",               path: "/seo-services"          },
  { name: "Social Media Management",    path: "/social-media"          },
  { name: "LinkedIn Personal Branding", path: "/linkedin-branding"     },
  { name: "AI Integration",             path: "/ai-integration"        },
];

function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef                 = useRef(null);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { setOpen(false); setDropOpen(false); }, [pathname]);

  const lk = (path) => ({
    fontFamily: "'Rubik',sans-serif", fontSize: "0.85rem", fontWeight: 500,
    letterSpacing: "0.06em", textTransform: "uppercase",
    color: pathname === path ? "rgb(85,0,85)" : "rgba(29,2,29,0.6)",
    textDecoration: "none", padding: "6px 4px",
    borderBottom: pathname === path ? "2px solid rgb(85,0,85)" : "2px solid transparent",
    transition: "all 0.22s",
  });

  return (
    <>
      <header style={{
        position: "fixed", top: scrolled ? "12px" : "20px", left: "50%",
        transform: "translateX(-50%)", zIndex: 100,
        width: scrolled ? "min(96vw, 1200px)" : "min(92vw, 1160px)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 24px",marginBottom:"2px", height: scrolled ? "67px" : "75px",
          background: scrolled ? "rgba(250,250,248,0.97)" : "rgba(250,250,248,0.88)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderRadius: "100px", border: "1.5px solid rgba(85,0,85,0.12)",
          boxShadow: scrolled ? "0 8px 40px rgba(29,2,29,0.14), 0 2px 12px rgba(85,0,85,0.08)" : "0 4px 24px rgba(29,2,29,0.08)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}>
         <Link href="/" style={{ display: "flex", alignItems: "center" }}>
  <Image
    src="/logo.png"
    alt="Graphical Proximity — Digital Marketing Agency"
    height={60}
    width={180}
    className="h-12.5 lg:h-16.25 w-auto"
    style={{ objectFit: "contain" }}
    priority
  />
</Link>

          <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
            <Link href="/"       style={lk("/")}>Home</Link>
            <Link href="/about"  style={lk("/about")}>About</Link>

            <div ref={dropRef} style={{ position: "relative" }}>
              <button onClick={() => setDropOpen(v => !v)} style={{
                fontFamily: "'Rubik',sans-serif", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: dropOpen ? "rgb(85,0,85)" : "rgba(29,2,29,0.6)",
                background: "none", border: "none", cursor: "pointer",
                padding: "6px 4px", display: "flex", alignItems: "center", gap: "5px",
              }}>
                Services
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  style={{ transition: "transform 0.25s", transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 12px)", left: "50%",
                  transform: "translateX(-50%)", width: "290px",
                  background: "rgba(250,250,248,0.98)", backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)", borderRadius: "20px",
                  border: "1.5px solid rgba(85,0,85,0.1)",
                  boxShadow: "0 16px 50px rgba(29,2,29,0.14)",
                  padding: "8px", zIndex: 200, animation: "fadeDown 0.2s ease",
                }}>
                  {SERVICES.map(s => (
                    <Link key={s.path} href={s.path}
                      style={{ display: "block", padding: "10px 16px", borderRadius: "12px", fontFamily: "'Nunito',sans-serif", fontSize: "0.92rem", fontWeight: 500, color: "rgb(29,2,29)", textDecoration: "none", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgb(85,0,85)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "rgb(29,2,29)"; }}
                    >{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/clients" style={lk("/clients")}>Clients</Link>
            <Link href="/blog"    style={lk("/blog")}>Blog</Link>
          </div>

          <Link href="/get-intouch-form" className="hidden lg:flex" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "10px 24px", background: "linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",
            color: "#fff", fontFamily: "'Montserrat',sans-serif", fontSize: "0.82rem",
            fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
            borderRadius: "100px", textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(85,0,85,0.3)",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(85,0,85,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(85,0,85,0.3)"; }}
          >Get in Touch</Link>

          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open} className="lg:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px", background: "rgb(29,2,29)",
                borderRadius: "2px", transition: "all 0.3s",
                transform: open ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 1 ? "scaleX(0)" : "rotate(-45deg) translate(5px,-5px)") : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </nav>
      </header>

      <style>{`@keyframes fadeDown { from{opacity:0;transform:translateX(-50%) translateY(-6px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }`}</style>

      {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(29,2,29,0.45)", zIndex: 98, backdropFilter: "blur(4px)" }} />}

      <div style={{
        position: "fixed", top: 0, right: 0, height: "100%", width: "min(340px,90vw)",
        background: "rgba(250,250,248,0.98)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        zIndex: 99, transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.32s cubic-bezier(0.22,1,0.36,1)",
        display: "flex", flexDirection: "column",
        borderLeft: "1.5px solid rgba(85,0,85,0.1)", boxShadow: "-8px 0 40px rgba(29,2,29,0.12)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(85,0,85,0.08)" }}>
          <Image src="/logo.png" alt="Graphical Proximity" height={44} width={160} style={{ height: "44px", width: "auto", objectFit: "contain" }} />
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.4rem", color: "rgba(29,2,29,0.4)", lineHeight: 1 }}>✕</button>
        </div>

        <nav style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {[{ l:"Home",p:"/" },{ l:"About",p:"/about" },{ l:"Clients",p:"/clients" },{ l:"Blog",p:"/blog" }].map(item => (
            <Link key={item.p} href={item.p}
              style={{ display: "block", padding: "13px 16px", borderRadius: "12px", fontFamily: "'Montserrat',sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "rgb(29,2,29)", textDecoration: "none", transition: "all 0.2s", marginBottom: "2px" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(85,0,85,0.08)"; e.currentTarget.style.color = "rgb(85,0,85)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "rgb(29,2,29)"; }}
            >{item.l}</Link>
          ))}

          <div style={{ borderTop: "1px solid rgba(85,0,85,0.08)", marginTop: "12px", paddingTop: "16px" }}>
            <p style={{ fontFamily: "'Rubik',sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgb(85,0,85)", padding: "0 16px 10px" }}>Services</p>
            {SERVICES.map(s => (
              <Link key={s.path} href={s.path}
                style={{ display: "block", padding: "10px 16px", borderRadius: "10px", fontFamily: "'Nunito',sans-serif", fontSize: "0.92rem", fontWeight: 500, color: "rgba(29,2,29,0.65)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(85,0,85,0.08)"; e.currentTarget.style.color = "rgb(85,0,85)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "rgba(29,2,29,0.65)"; }}
              >{s.name}</Link>
            ))}
          </div>
        </nav>

        <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(85,0,85,0.08)" }}>
          <Link href="/get-intouch-form"
            style={{ display: "block", width: "100%", padding: "16px", textAlign: "center", background: "linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))", color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "1rem", borderRadius: "14px", textDecoration: "none" }}
          >GET IN TOUCH</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
