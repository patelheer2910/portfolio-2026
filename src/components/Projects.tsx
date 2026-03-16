"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Vagueness Analysis of VLN Models",
    emoji: "🧭",
    period: "Jan - May 2025",
    desc: "Built a dual-metric framework (lexical + LLM-based) to quantify instruction vagueness across VLN datasets. Analyzed effects on SoTA VLN agent generalizability and explained architectural robustness factors.",
    tags: ["NLP", "LLM", "Vision-Language", "Research"],
    color: "#818cf8",
    github: "https://github.com/patelheer2910/Vagueness_Analysis_inVLNs",
  },
  {
    title: "UnMask: Occlusion-Resilient Face Recognition",
    emoji: "🎭",
    period: "Jan - May 2025",
    desc: "Improved occluded-face recognition by 25% using a frequency-aware Siamese network with LBP-based alignment. Achieved 36.4% partial and 21.9% masked similarity gains over baseline.",
    tags: ["Computer Vision", "PyTorch", "Siamese Net"],
    color: "#22d3ee",
    github: "https://github.com/patelheer2910/IVC_Project",
  },
  {
    title: "Real-time Lane Traffic Density Detection",
    emoji: "🚦",
    period: "Jan - May 2025",
    desc: "Trained a Deep Q-Network agent for adaptive traffic signal control. Reduced estimated vehicle travel latency by ~20% over static baselines across simulated multi-lane intersections.",
    tags: ["Reinforcement Learning", "DQN", "PyTorch"],
    color: "#c084fc",
    github: "https://github.com/patelheer2910/LiveWebLaneDetect",
  },
  {
    title: "Sequential Sentiment on Video Transcripts",
    emoji: "🎬",
    period: "Sep - Dec 2024",
    desc: "Fine-tuned DistilRoBERTa for minute-level sentiment classification on long-form video. Built temporal affective trend visualizations to surface narrative shifts and improve content interpretability.",
    tags: ["NLP", "Transformers", "DistilRoBERTa"],
    color: "#34d399",
    github: "https://github.com/patelheer2910/Sequential_Sentiment_Analysis",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.32, 1] }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">Projects</p>
          <h2 className="heading">Things I&apos;ve Built</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: 16 }}>
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.32, 1] }}
              className="card"
              style={{
                padding: "24px 26px",
                display: "flex",
                flexDirection: "column",
                borderTop: `1px solid ${p.color}30`,
                textDecoration: "none",
                cursor: "pointer",
              }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px rgba(0,0,0,0.35)`, borderColor: `${p.color}50` }}
            >
              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                  background: `${p.color}15`, border: `1px solid ${p.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", lineHeight: 1,
                }}>
                  {p.emoji}
                </div>

                {/* GitHub icon — decorative, card itself is the link */}
                <span style={{ padding: 6, color: "var(--text-muted)", display: "flex", alignItems: "center" }}>
                  <Github size={15} />
                </span>
              </div>

              {/* Title + period */}
              <h3 className="display" style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f0ece4", lineHeight: 1.3, marginBottom: 6 }}>
                {p.title}
              </h3>
              <p className="mono" style={{ fontSize: "0.68rem", fontWeight: 500, color: p.color, marginBottom: 12, letterSpacing: "0.05em" }}>
                {p.period}
              </p>

              {/* Description */}
              <p style={{ fontSize: "0.8125rem", color: "var(--text-soft)", lineHeight: 1.7, flex: 1, marginBottom: 18 }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{ background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}22` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
