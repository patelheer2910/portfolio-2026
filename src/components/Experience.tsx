"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Generative AI Researcher",
    org: "Questrom School of Business, Boston University",
    location: "Boston, MA",
    period: "Jun 2025 – Jan 2026",
    note: "Research under Prof. Dokyun Lee",
    color: "#818cf8",
    bullets: [
      "Partnered with The Washington Post to investigate user behavior in generative AI search — uncovering how query intent shapes engagement and personalized search design.",
      "Trained BERTopic on 120k+ article headlines to construct a shared topic space across queries, AI-generated answers, and article content.",
      "Quantified semantic drift using Jensen-Shannon distance across query-answer-source pairs, enabling formal analysis of generative search alignment.",
    ],
  },
  {
    role: "Technical Reviewer",
    org: "Packt",
    location: "Remote",
    period: "Sep 2025 – Dec 2025",
    note: "Reviewed \u201cContext Engineering for Multi-Agent Systems\u201d by Denis Rothman for technical accuracy and clarity",
    color: "#a78bfa",
    bullets: [],
  },
  {
    role: "ML Technical Project Manager",
    org: "BU Spark!",
    location: "Boston, MA",
    period: "Sep 2025 – Dec 2025",
    color: "#22d3ee",
    bullets: [
      "Oversaw end-to-end lifecycle of 4 external client ML products; optimized project velocity by 30% via Scrum boards.",
      "Reduced debugging cycles by 25% through rigorous code review and architectural mentorship for 15+ developers.",
    ],
  },
  {
    role: "Graduate Teaching Fellow",
    org: "Boston University",
    location: "Boston, MA",
    period: "Jun 2025 – Aug 2025",
    color: "#818cf8",
    bullets: [
      "Guided 60+ students through PyTorch pipelines for neural modeling — increasing project completion rates by 40%.",
      "Architected template pipelines for multimodal tasks; student teams achieved ~90% accuracy in emotion recognition and symptom detection.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "The AI Collective",
    location: "Boston, MA",
    period: "Jan 2025 – Jun 2025",
    color: "#22d3ee",
    bullets: [
      "Engineered a constraint-aware semantic matching engine with community governance rules, improving match precision by 25%.",
      "Optimized vector search pipeline, cutting batch runtime by 50% and achieving 85% SLA compliance under high load.",
    ],
  },
  {
    role: "AI Intern",
    org: "RadicalX",
    location: "Remote",
    period: "Nov 2023 – Jan 2024",
    color: "#818cf8",
    bullets: [
      "Used OpenAI, VertexAI, and TensorFlow to enhance ReX, an AI coaching product.",
      "Built personalized career guidance and mentorship features serving 500+ learners.",
    ],
  },
  {
    role: "AI Engineering Intern",
    org: "SAP",
    location: "Gujarat, India",
    period: "Jan 2024 – Jun 2024",
    note: "Selected among top 60 students across Gujarat",
    color: "#a78bfa",
    bullets: [
      "Built an AI recruitment platform using NLP-based resume-JD matching and automated soft-skill interviews — 87% classification accuracy.",
      "Implemented extraction, semantic mapping, and sentiment analysis for talent-role alignment.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "BrainyBeam Technologies",
    location: "Ahmedabad, India",
    period: "Jul 2023 – Aug 2023",
    color: "#22d3ee",
    bullets: [
      "Built ML models to predict bank marketing campaign performance; optimized SQL queries reducing retrieval time by 10%.",
      "Aggregated 1k+ real-time insights from operational data for SalesForce case investigation.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Cygnet Infotech",
    location: "Ahmedabad, India",
    period: "Jul 2021 – Oct 2021",
    color: "#818cf8",
    bullets: [
      "Created custom ML applications for critical predictions, automated reasoning, and optimization algorithms.",
      "Prototyped ML applications and evaluated application vulnerability early in development.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.32, 1] }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">Experience</p>
          <h2 className="heading">Where I&apos;ve Worked</h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Line */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute", left: 16, top: 8, bottom: 8, width: 1,
              background: "linear-gradient(to bottom, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.05) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.32, 1] }}
                style={{ position: "relative" }}
                className="md:pl-12"
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:block"
                  style={{
                    position: "absolute", left: 10, top: 26,
                    width: 12, height: 12, borderRadius: "50%",
                    border: `2px solid ${exp.color}`,
                    background: "var(--bg)",
                    boxShadow: `0 0 10px ${exp.color}60`,
                  }}
                />

                <div className="card" style={{ padding: "20px 24px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: exp.bullets.length > 0 ? 14 : 0 }}>
                    <div>
                      <h3 className="display" style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f0ece4", marginBottom: 2 }}>
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: exp.color }}>
                        {exp.org} · {exp.location}
                      </p>
                      {exp.note && (
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 3, fontStyle: "italic" }}>
                          {exp.note}
                        </p>
                      )}
                    </div>
                    <span className="mono" style={{
                      flexShrink: 0, fontSize: "0.68rem", fontWeight: 500,
                      padding: "4px 12px", borderRadius: 999,
                      background: "rgba(255,255,255,0.05)", color: "var(--text-muted)",
                      letterSpacing: "0.04em", whiteSpace: "nowrap",
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {exp.bullets.length > 0 && (
                    <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: "flex", gap: 10, fontSize: "0.8125rem", color: "var(--text-soft)", lineHeight: 1.65 }}>
                          <span style={{ flexShrink: 0, marginTop: 6, width: 4, height: 4, borderRadius: "50%", background: exp.color }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
