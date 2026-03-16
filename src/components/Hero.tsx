"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import FloatingIconsBg from "./FloatingIconsBg";

const ease = [0.16, 1, 0.32, 1] as const;
const up   = (delay = 0) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, delay, ease } });

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <FloatingIconsBg />

      {/* Subtle center vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(8,8,15,0) 0%, rgba(8,8,15,0.6) 100%)",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 0 }}>

          {/* Status pill */}
          <motion.div {...up(0.1)} style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--glass)", border: "1px solid var(--border)",
              backdropFilter: "blur(16px)", padding: "7px 16px", borderRadius: 999,
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.7rem", fontWeight: 500, color: "var(--text-soft)",
              letterSpacing: "0.08em", fontVariantLigatures: "none",
            }}>
              <span className="pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
              Open to AI Engineer or ML Engineer roles
            </span>
          </motion.div>

          {/* Name — jahnshah-inspired large display type */}
          <motion.h1
            {...up(0.25)}
            className="display"
            style={{
              fontSize: "clamp(3.8rem, 11vw, 8.5rem)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            <span className="grad">Heer</span>{" "}
            <span style={{ color: "#f0ece4" }}>Patel</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            {...up(0.38)}
            className="mono"
            style={{
              fontSize: "clamp(0.8rem, 1.6vw, 1rem)",
              fontWeight: 500,
              color: "var(--text-soft)",
              marginBottom: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            AI Researcher &amp; Engineer
          </motion.p>

          {/* Tagline — short and punchy */}
          <motion.p
            {...up(0.48)}
            style={{
              fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
              color: "var(--text-muted)",
              maxWidth: 520,
              lineHeight: 1.75,
              marginBottom: 40,
              fontVariantLigatures: "none",
            }}
          >
            Powered by chai, curiosity, and the belief that technology should feel human before it feels intelligent.
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.58)} style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 48 }}>
            <a href="#projects" className="btn btn-solid">View Projects</a>
            <a href="https://mail.google.com/mail/?view=cm&to=patelheer2002@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Get in Touch</a>
          </motion.div>

          {/* Social icons */}
          <motion.div {...up(0.68)} style={{ display: "flex", gap: 10 }}>
            {[
              { Icon: Github,   href: "https://www.github.com/patelheer2910",      label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/heer-patel29",  label: "LinkedIn" },
              { Icon: Mail,     href: "mailto:patelheer2002@gmail.com",            label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40, borderRadius: 10,
                  background: "var(--glass)", border: "1px solid var(--border)",
                  color: "var(--text-muted)", transition: "all 0.22s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
          color: "var(--text-muted)", textDecoration: "none",
          fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
        }}
      >
        scroll
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={13} />
        </motion.div>
      </motion.a>
    </section>
  );
}
