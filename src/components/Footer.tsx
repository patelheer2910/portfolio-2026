export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingBlock: 28 }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
          © 2026 Heer Patel
        </p>
        <p style={{ fontSize: "0.75rem", color: "rgba(107,107,133,0.6)" }}>
          Next.js · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
