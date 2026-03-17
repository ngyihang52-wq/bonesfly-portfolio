import { useState } from "react";
import { useNavigate } from "react-router";
import logoImg from "../../assets/6b7cea4d455900676a17175fb7bc972172d2e1b4.png";

/* ── shared dot-grid bg ──────────────────────────────── */
const dotGrid: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, #C8C8C8 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  backgroundColor: "#FAFAFA",
};

const MONO = "'Space Mono', monospace";
const SERIF = "'Playfair Display', serif";
const SANS = "'DM Sans', sans-serif";

const workItems = ["Brand Identity", "Poster Series", "Typography", "Packaging", "Editorial", "Digital UI"];
const photoItems = ["Travel", "Wedding", "Portrait", "Street", "Architecture", "Nature"];

/* ── Navigation half-panel ───────────────────────────── */
function NavPanel({
  index,
  label,
  subtitle,
  items,
  border,
  onClick,
}: {
  index: string;
  label: string;
  subtitle: string;
  items: string[];
  border?: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "52px 52px 48px",
        background: hovered ? "#111111" : "transparent",
        borderLeft: border ? "1px solid #DDDBD8" : undefined,
        cursor: "pointer",
        transition: "background 0.4s ease",
        textAlign: "left",
        border: "none",
        outline: "none",
        minHeight: "100%",
      }}
    >
      {/* Top: number + label */}
      <div style={{ width: "100%" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: hovered ? "rgba(255,255,255,0.3)" : "#AAAAAA",
            marginBottom: 28,
            transition: "color 0.4s ease",
          }}
        >
          {index}
        </p>

        <h2
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: hovered ? "#FFFFFF" : "#111111",
            marginBottom: 8,
            transition: "color 0.4s ease",
          }}
        >
          {label}
        </h2>

        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: hovered ? "rgba(255,255,255,0.3)" : "#AAAAAA",
            marginBottom: 44,
            transition: "color 0.4s ease",
          }}
        >
          {subtitle}
        </p>

        {/* Rule */}
        <div
          style={{
            height: 1,
            background: hovered ? "rgba(255,255,255,0.15)" : "#E4E2DF",
            marginBottom: 28,
            transition: "background 0.4s ease",
          }}
        />

        {/* Items list */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item, i) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: SANS,
                fontSize: "0.82rem",
                fontWeight: 300,
                color: hovered ? "rgba(255,255,255,0.5)" : "#888888",
                transition: "color 0.4s ease",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.55rem",
                  color: hovered ? "rgba(255,255,255,0.2)" : "#CCCCCC",
                  transition: "color 0.4s ease",
                  minWidth: 20,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: enter button */}
      <div
        style={{
          marginTop: 52,
          display: "flex",
          alignItems: "center",
          gap: 14,
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: hovered ? "#FFFFFF" : "#AAAAAA",
            transition: "color 0.4s ease",
          }}
        >
          Enter
        </span>
        <div
          style={{
            width: 36,
            height: 36,
            border: `1px solid ${hovered ? "rgba(255,255,255,0.3)" : "#CCCCCC"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.4s ease, transform 0.3s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.7rem",
              color: hovered ? "#FFFFFF" : "#888888",
              transition: "color 0.4s ease",
            }}
          >
            →
          </span>
        </div>
      </div>
    </button>
  );
}

/* ── Main Page ────────────────────────────────────────── */
export function MainPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        ...dotGrid,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        animation: "pageFadeIn 0.6s ease forwards",
      }}
    >
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Top bar ── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
          height: 52,
          borderBottom: "1px solid #E4E2DF",
          background: "rgba(250,250,250,0.85)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.25em", color: "#888888", textTransform: "uppercase" }}>
          樂樂
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logoImg} alt="lele logo" style={{ width: 28, height: 28, objectFit: "contain" }} />
        </div>
        <span style={{ fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.15em", color: "#AAAAAA" }}>
          {new Date().getFullYear()}
        </span>
      </header>

      {/* ── Page identity block ── */}
      <div
        style={{
          padding: "52px 52px 44px",
          borderBottom: "1px solid #E4E2DF",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontWeight: 400,
              color: "#111111",
              letterSpacing: "-0.01em",
              marginBottom: 6,
            }}
          >
            Bonesfly Workspace
          </h1>
          <p
            style={{
              fontFamily: MONO,
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#BBBBBB",
            }}
          >
            Design &amp; Photography
          </p>
        </div>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.58rem",
            color: "#CCCCCC",
            letterSpacing: "0.12em",
          }}
        >
          02 disciplines · 12 projects
        </p>
      </div>

      {/* ── Split nav panels ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          minHeight: "calc(100vh - 52px - 120px - 56px)",
        }}
      >
        {/* Left — Work */}
        <div style={{ flex: 1, borderRight: "1px solid #E4E2DF", display: "flex" }}>
          <NavPanel
            index="01 / Work"
            label="Work"
            subtitle="Projects & Explorations"
            items={workItems}
            onClick={() => navigate("/work")}
          />
        </div>

        {/* Right — Photography */}
        <div style={{ flex: 1, display: "flex" }}>
          <NavPanel
            index="02 / Photography"
            label="Photo"
            subtitle="Moments in Frame"
            items={photoItems}
            border
            onClick={() => navigate("/photography")}
          />
        </div>
      </div>

      {/* Mobile stacked layout */}
      <style>{`
        @media (max-width: 680px) {
          .main-split { flex-direction: column !important; }
        }
      `}</style>

      {/* ── Bottom bar ── */}
      <footer
        style={{
          height: 52,
          borderTop: "1px solid #E4E2DF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
          background: "rgba(250,250,250,0.85)",
        }}
      >
        <span style={{ fontFamily: MONO, fontSize: "0.58rem", color: "#CCCCCC", letterSpacing: "0.12em" }}>
          hello@studio.com
        </span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Instagram", "Behance"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                fontFamily: MONO,
                fontSize: "0.55rem",
                color: "#CCCCCC",
                textDecoration: "none",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#CCCCCC")}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}