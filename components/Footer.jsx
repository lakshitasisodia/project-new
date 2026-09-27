"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  const services = [
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

  const explore = [
    { name: "About Us",     path: "/about"           },
    { name: "Services",     path: "/services"         },
    { name: "Clients",      path: "/clients"          },
    { name: "Case Studies", path: "/blog"             },
    { name: "Contact Us",   path: "/get-intouch-form" },
  ];

  const lk = {
    display: "block", padding: "9px 0",
    fontFamily: "'Nunito',sans-serif", fontSize: "0.93rem", fontWeight: 400,
    color: "#666", textDecoration: "none",
    borderBottom: "1px solid rgba(29,2,29,.05)",
    transition: "color .2s, padding-left .2s",
  };

  return (
    <footer style={{ background: "rgb(29,2,29)", color: "rgba(240,232,240,.85)", marginTop: "0" }}>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: .15 }}
        transition={{ duration: .85, ease: "easeOut" }}
        style={{
          maxWidth: "1400px", margin: "0 auto",
          padding: "clamp(50px,8vw,80px) clamp(20px,6vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "clamp(30px,5vw,60px)",
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 1" }}>
          <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "#fff", marginBottom: "16px", letterSpacing: "-.01em" }}>
            Graphical Proximity
          </h3>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: ".92rem", lineHeight: 1.75, color: "rgba(240,232,240,.5)", fontWeight: 300, marginBottom: "24px" }}>
            A digital growth agency helping businesses across India and internationally get visible, attract clients, and grow — through performance marketing (Google & Meta Ads), SEO, web design, branding, social media, LinkedIn branding, and AI automation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="mailto:letsdoit@graphicalproximity.com"
              style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".88rem", color: "rgba(240,232,240,.6)", textDecoration: "none", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#df45ed"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(240,232,240,.6)"}>
              <span style={{ color: "#df45ed", fontWeight: 600, marginRight: "8px" }}>Email</span>
              letsdoit@graphicalproximity.com
            </a>
           
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,232,240,.4)", marginBottom: "18px" }}>Services</h4>
          <ul style={{ listStyle: "none" }}>
            {services.map(s => (
              <li key={s.path}>
                <Link href={s.path} style={{ ...lk, color: "rgba(240,232,240,.5)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,232,240,.5)"; e.currentTarget.style.paddingLeft = "0"; }}
                >{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,232,240,.4)", marginBottom: "18px" }}>Explore</h4>
          <ul style={{ listStyle: "none" }}>
            {explore.map(e => (
              <li key={e.path}>
                <Link href={e.path} style={{ ...lk, color: "rgba(240,232,240,.5)" }}
                  onMouseEnter={el => { el.currentTarget.style.color = "#fff"; el.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={el => { el.currentTarget.style.color = "rgba(240,232,240,.5)"; el.currentTarget.style.paddingLeft = "0"; }}
                >{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(240,232,240,.4)", marginBottom: "18px" }}>Follow Us</h4>
          <ul style={{ listStyle: "none" }}>
            {[
              { n: "Instagram", href: "https://instagram.com/graphicalproximity" },
              { n: "LinkedIn",  href: "https://www.linkedin.com/in/lakashita-sisodia/" },
              { n: "GitHub",    href: "https://github.com/lakshitasisodia" },
            ].map(s => (
              <li key={s.n}>
                <a href={s.href} target="_blank" rel="noreferrer" style={{ ...lk, color: "rgba(240,232,240,.5)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.paddingLeft = "6px"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,232,240,.5)"; e.currentTarget.style.paddingLeft = "0"; }}
                >{s.n}</a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div style={{ borderTop: "1px solid rgba(240,232,240,.07)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px clamp(20px,6vw,80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".8rem", color: "rgba(240,232,240,.22)" }}>© 2025–26 Graphical Proximity. All Rights Reserved.</p>
          <p style={{ fontFamily: "'Rubik',sans-serif", fontSize: ".8rem", color: "rgba(240,232,240,.18)" }}>India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;