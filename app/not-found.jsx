"use client";

// FILE: app/not-found.jsx
// Next.js App Router convention — automatically rendered for any unmatched
// route. Pure addition: no existing route, redirect, or URL is affected.
// Built only from components/shared.jsx's existing, already-exported
// primitives — same fonts, colors, spacing, and card style as every other
// page on the site.

import React from "react";
import Link from "next/link";
import { Reveal, Label, H2, Body, LIGHT_CSS } from "@/components/shared";

export default function NotFound() {
  return (
    <>
      <style>{LIGHT_CSS}</style>
      <div className="gp-page" style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(60px,10vw,120px) clamp(20px,6vw,100px)",
        overflow: "hidden",
      }}>
        <div className="gp-lg" />
        <div className="gp-lb" style={{ width: "500px", height: "500px", background: "rgba(85,0,85,.06)", top: "-80px", right: "-100px" }} />

        <div className="gp-z" style={{ maxWidth: "620px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Label>404</Label>
            <p style={{
              fontFamily: "'Montserrat',sans-serif", fontWeight: 900,
              fontSize: "clamp(4rem,10vw,7rem)", lineHeight: 1,
              letterSpacing: "-.03em",
              background: "linear-gradient(135deg,rgb(85,0,85),#df45ed)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", marginBottom: "8px",
            }}>
              404
            </p>
            <H2 center>This page went invisible.</H2>
          </Reveal>

          <Reveal delay={.1}>
            <div style={{ marginTop: "18px", marginBottom: "36px" }}>
              <Body center>
                Which is exactly what we help businesses avoid. The page you're looking for doesn't exist — but the rest of the site does.
              </Body>
            </div>
          </Reveal>

          <Reveal delay={.18}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "15px 34px",
                background: "linear-gradient(135deg,rgb(85,0,85),rgb(29,2,29))",
                color: "#fff", borderRadius: "14px",
                fontFamily: "'Montserrat',sans-serif", fontWeight: 800,
                fontSize: ".9rem", letterSpacing: ".06em", textDecoration: "none",
                boxShadow: "0 6px 24px rgba(85,0,85,.3)",
              }}>
                Back to Home →
              </Link>
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "15px 26px",
                border: "1.5px solid rgba(85,0,85,.25)", borderRadius: "14px",
                color: "rgba(29,2,29,.65)", fontSize: ".9rem",
                fontFamily: "'Rubik',sans-serif", fontWeight: 500,
                textDecoration: "none",
              }}>
                See Our Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={.26}>
            <div style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {[
                { l: "SEO", p: "/services/seo" },
                { l: "Performance Marketing", p: "/services/performance-marketing" },
                { l: "Social Media", p: "/services/social-media" },
                { l: "Branding", p: "/services/branding" },
                { l: "Get in Touch", p: "/get-intouch-form" },
              ].map(link => (
                <Link key={link.p} href={link.p} style={{
                  fontFamily: "'Rubik',sans-serif", fontSize: ".82rem",
                  color: "rgb(85,0,85)", textDecoration: "none",
                  padding: "8px 16px", borderRadius: "100px",
                  border: "1px solid rgba(85,0,85,.15)", background: "rgba(85,0,85,.04)",
                }}>
                  {link.l}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
