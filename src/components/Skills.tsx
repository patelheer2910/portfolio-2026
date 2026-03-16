"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Languages",
    color: "#818cf8",
    items: ["Python", "Java", "C++", "SQL", "JavaScript"],
  },
  {
    label: "ML & Deep Learning",
    color: "#22d3ee",
    items: ["PyTorch", "TensorFlow", "Transformers", "Scikit-learn", "OpenCV", "NumPy", "Pandas"],
  },
  {
    label: "AI Specializations",
    color: "#c084fc",
    items: ["LLM Fine-tuning", "NLP", "Generative AI", "Context Engineering", "Multi-agent Systems", "Topic Modeling", "Computer Vision"],
  },
  {
    label: "Tools & Infrastructure",
    color: "#34d399",
    items: ["Git", "AWS", "GCP", "Azure", "Docker", "REST APIs", "Linux", "Oracle DB", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.32, 1] }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">Skills</p>
          <h2 className="heading">Tech Stack</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: 16 }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.32, 1] }}
              className="card"
              style={{ padding: "22px 24px" }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ display: "block", width: 3, height: 18, borderRadius: 4, background: g.color, flexShrink: 0 }} />
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#f0ece4" }}>{g.label}</p>
              </div>

              {/* Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 + i * 0.07, ease: [0.16, 1, 0.32, 1] }}
                    className="tag"
                    style={{
                      background: `${g.color}10`,
                      color: g.color,
                      border: `1px solid ${g.color}20`,
                      cursor: "default",
                      transition: "transform 0.15s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
