"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.32, 1] }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(8,8,15,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <a href="#" className="grad display" style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.01em" }}>
            HP
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden md:flex">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1JbQQqIi6iGbVlGB-OD7fzcdXsVGK9iqD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ padding: "7px 18px", fontSize: "0.8125rem" }}
            >
              Résumé
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer", padding: 4 }}
            aria-label="Toggle menu"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden", background: "rgba(8,8,15,0.96)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="wrap" style={{ paddingBlock: 16, display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 4px",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1JbQQqIi6iGbVlGB-OD7fzcdXsVGK9iqD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 12,
                  display: "block",
                  textAlign: "center",
                  padding: "11px",
                  borderRadius: 10,
                  border: "1px solid rgba(99,102,241,0.4)",
                  color: "var(--accent-light)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
