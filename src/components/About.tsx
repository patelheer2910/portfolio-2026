"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.32, 1] as const;

const bio: { emoji: string | null; text: React.ReactNode; highlight?: boolean }[] = [
  {
    emoji: null,
    text: "I have always been drawn to the space where AI meets real people with real problems. Not the benchmarks, not the papers, but the moment someone's life gets a little easier because a system actually worked for them. That is what drives everything I build.",
  },
  {
    emoji: "🎓",
    text: "I recently finished my Master's in AI at Boston University, working across research, engineering, and leadership, sometimes all at once. It has been the most humbling and rewarding chapter of my life so far.",
  },
  {
    emoji: "🔬",
    text: (
      <>
        As a GenAI Researcher at BU's BIT Lab, I worked alongside{" "}
        <span style={{ color: "var(--accent-light)", fontWeight: 600 }}>The Washington Post</span>{" "}
        to understand what really happens after a generative AI gives you an answer.
        I also reviewed{" "}
        <em>Context Engineering for Multi-Agent Systems</em>{" "}
        for Packt. Both experiences reinforced the same belief: the hardest problems in AI
        are not technical. They are about trust between systems and the people who use them.
      </>
    ),
  },
  {
    emoji: "🛠️",
    text: "On the engineering side, I have built and shipped things across internships, production environments, and client-facing products. Leading a team as a Technical PM taught me something that has stuck with me: great engineering is really just great listening.",
  },
  {
    emoji: "👩🏻‍🏫",
    text: "Teaching is where it all clicks together. As a Graduate Teaching Fellow, I supported students in building multimodal AI systems from the ground up. Watching someone go from complete confusion to a working model is honestly one of the best feelings this field has to offer.",
  },
  {
    emoji: "⚠️",
    highlight: true,
    text: "Side effect of hiring me: unreasonably high output.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          style={{ marginBottom: 52 }}
        >
          <p className="label">About</p>
          <h2 className="heading">Who I Am</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          style={{ maxWidth: 720 }}
        >
          {bio.map((p, i) => (
            <p
              key={i}
              style={{
                color: p.highlight ? "#f0ece4" : "var(--text-soft)",
                lineHeight: 1.9,
                fontSize: "0.9375rem",
                marginBottom: i < bio.length - 1 ? 18 : 0,
                fontWeight: p.highlight ? 600 : 400,
              }}
            >
              {p.emoji && (
                <span style={{ marginRight: 8, fontStyle: "normal" }}>{p.emoji}</span>
              )}
              {p.text}
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
