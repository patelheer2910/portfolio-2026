"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    degree: "M.S. Artificial Intelligence",
    school: "Boston University",
    location: "Boston, MA",
    period: "Aug 2024 - Jan 2026",
    gpa: "3.6 / 4.0",
    color: "#818cf8",
  },
  {
    degree: "B.E. Computer Science",
    school: "Gujarat Technological University",
    location: "Ahmedabad, India",
    period: "Aug 2020 - Jun 2024",
    gpa: "4.0 / 4.0",
    color: "#22d3ee",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.32, 1] }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">Education</p>
          <h2 className="heading">Academic Background</h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 720 }}>
          {edu.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.32, 1] }}
              className="card"
              style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}
            >
              {/* Icon */}
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `${e.color}15`, border: `1px solid ${e.color}25`,
              }}>
                <GraduationCap size={20} style={{ color: e.color }} />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 className="display" style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f0ece4", marginBottom: 2 }}>
                  {e.degree}
                </h3>
                <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: e.color, marginBottom: 1 }}>{e.school}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{e.location}</p>
              </div>

              {/* Meta */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flexShrink: 0 }}>
                <span style={{
                  fontSize: "0.7rem", fontWeight: 600, padding: "4px 12px", borderRadius: 999,
                  background: "rgba(255,255,255,0.05)", color: "var(--text-muted)",
                }}>
                  {e.period}
                </span>
                {e.gpa && (
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999,
                    background: `${e.color}12`, color: e.color, border: `1px solid ${e.color}22`,
                  }}>
                    GPA {e.gpa}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
