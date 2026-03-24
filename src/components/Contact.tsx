"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.32, 1] }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">Contact</p>
          <h2 className="heading">Let&apos;s Connect</h2>
          <p style={{ color: "var(--text-muted)", marginTop: 10, fontSize: "0.9375rem", maxWidth: 420, lineHeight: 1.7 }}>
            Open to AI/ML roles, research collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 16, maxWidth: 880 }}>
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.32, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {[
              { Icon: Mail,   label: "Email",    value: "patelheer2002@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=patelheer2002@gmail.com" },
              { Icon: Phone,  label: "Phone",    value: "(617) 359-2146",          href: "tel:+16173592146" },
              { Icon: MapPin, label: "Location", value: "Boston, MA",             href: "#" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", textDecoration: "none" }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
                }}>
                  <Icon size={15} style={{ color: "var(--accent-light)" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: 1 }}>{label}</p>
                  <p style={{ fontSize: "0.875rem", color: "#f0ece4", fontWeight: 600 }}>{value}</p>
                </div>
              </a>
            ))}

            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {[
                { Icon: Github,   label: "GitHub",   href: "https://www.github.com/patelheer2910" },
                { Icon: Linkedin, label: "LinkedIn",  href: "https://www.linkedin.com/in/heer-patel29" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    gap: 8, padding: "12px", textDecoration: "none",
                    fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-soft)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-soft)")}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.32, 1] }}
            className="card"
            style={{ padding: "40px 36px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}
          >
            <div style={{
              width: 56, height: 56, borderRadius: 16, marginBottom: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)",
            }}>
              <Mail size={24} style={{ color: "var(--accent-light)" }} />
            </div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#f0ece4", marginBottom: 10 }}>Say Hello</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 28, maxWidth: 260 }}>
              Whether it&apos;s a role, a research collab, or just a chat about AI — my inbox is always open.
            </p>
            <a href="https://mail.google.com/mail/?view=cm&to=patelheer2002@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
