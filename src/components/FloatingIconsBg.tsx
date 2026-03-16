"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ICONS = [
  { name: "Python",        slug: "python",            hex: "3776AB" },
  { name: "PyTorch",       slug: "pytorch",           hex: "EE4C2C" },
  { name: "TensorFlow",    slug: "tensorflow",        hex: "FF6F00" },
  { name: "Pandas",        slug: "pandas",            hex: "150458" },
  { name: "NumPy",         slug: "numpy",             hex: "4DABCF" },
  { name: "scikit-learn",  slug: "scikitlearn",       hex: "F7931E" },
  { name: "PostgreSQL",    slug: "postgresql",        hex: "4169E1" },
  { name: "AWS",           slug: "amazonwebservices", hex: "FF9900" },
  { name: "Google Cloud",  slug: "googlecloud",       hex: "4285F4" },
  { name: "Azure",         slug: "microsoftazure",    hex: "0078D4" },
  { name: "Docker",        slug: "docker",            hex: "2496ED" },
  { name: "LangChain",     slug: "langchain",         hex: "1C3C3C" },
  { name: "Hugging Face",  slug: "huggingface",       hex: "FFD21E" },
  { name: "Git",           slug: "git",               hex: "F05032" },
  { name: "Jupyter",       slug: "jupyter",           hex: "F37626" },
  { name: "FastAPI",       slug: "fastapi",           hex: "009688" },
];

// Divide viewport into a 4-col × 4-row grid → 16 zones
// Each icon lands in one zone, randomly offset within it
// This guarantees even spread with zero clustering
const COLS = 4;
const ROWS = 4;

function buildZones() {
  const colW = 100 / COLS;
  const rowH = 100 / ROWS;
  // Shuffle zone indices deterministically (Fisher-Yates with seeded values)
  const zoneIdxs = Array.from({ length: COLS * ROWS }, (_, i) => i);
  for (let i = zoneIdxs.length - 1; i > 0; i--) {
    const seed = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    const j = Math.abs(Math.floor(seed - Math.floor(seed)) * (i + 1));
    [zoneIdxs[i], zoneIdxs[j]] = [zoneIdxs[j], zoneIdxs[i]];
  }

  return ICONS.map((icon, i) => {
    const zone = zoneIdxs[i % zoneIdxs.length];
    const col  = zone % COLS;
    const row  = Math.floor(zone / COLS);
    // Add ±10% random offset within the zone
    const rand = (seed: number) => {
      const x = Math.sin(seed) * 43758.5453;
      return x - Math.floor(x);
    };
    const xOff = (rand(i * 17.3) - 0.5) * colW * 0.65;
    const yOff = (rand(i * 31.7) - 0.5) * rowH * 0.65;
    return {
      ...icon,
      x:        col  * colW  + colW  / 2 + xOff,
      y:        row  * rowH  + rowH  / 2 + yOff,
      size:     Math.round(28 + rand(i * 7.1) * 14),      // 28–42 px
      floatY:   (rand(i * 13.3) - 0.5) * 22,
      floatX:   (rand(i * 19.7) - 0.5) * 10,
      dur:      5 + rand(i * 23.1) * 5,
      delay:    rand(i * 41.9) * 3,
    };
  });
}

const zones = buildZones();

export default function FloatingIconsBg() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return null;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {zones.map((z) => (
        <IconItem key={z.slug} z={z} />
      ))}
    </div>
  );
}

function IconItem({ z }: { z: ReturnType<typeof buildZones>[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${z.x}%`,
        top:  `${z.y}%`,
        pointerEvents: "auto",
        zIndex: hovered ? 10 : 1,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ y: [0, z.floatY, 0], x: [0, z.floatX, 0] }}
      transition={{ duration: z.dur, delay: z.delay, repeat: Infinity, ease: "easeInOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            translateX: "-50%",
            whiteSpace: "nowrap",
            fontSize: "0.65rem",
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#e8e4dc",
            backdropFilter: "blur(8px)",
            pointerEvents: "none",
          }}
        >
          {z.name}
        </motion.span>
      )}

      {/* Icon */}
      <motion.div
        animate={{
          opacity: hovered ? 0.95 : 0.14,
          scale:   hovered ? 1.3  : 1,
          filter:  hovered ? "none" : "brightness(0) invert(1)",
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.32, 1] }}
        style={{ width: z.size, height: z.size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${z.slug}/${z.hex}`}
          alt={z.name}
          width={z.size}
          height={z.size}
          style={{ width: "100%", height: "100%", display: "block" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </motion.div>
    </motion.div>
  );
}
