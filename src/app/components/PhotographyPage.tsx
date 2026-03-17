import { useState } from "react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../assets/6b7cea4d455900676a17175fb7bc972172d2e1b4.png";

const MONO = "'Space Mono', monospace";
const SERIF = "'Playfair Display', serif";
const SANS = "'DM Sans', sans-serif";

const dotGrid: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, #C8C8C8 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  backgroundColor: "#FAFAFA",
};

const series = [
  {
    id: "01",
    title: "Travel",
    subtitle: "Across Borders",
    year: "2024",
    count: "48 frames",
    desc: "Landscapes, streets, and fleeting light from across the world.",
    img: "https://images.unsplash.com/photo-1759770264113-9a090db30208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsYW5kc2NhcGUlMjBkb2N1bWVudGFyeSUyMGZpbG0lMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzM3NDI5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aspect: "landscape",
  },
  {
    id: "02",
    title: "Wedding",
    subtitle: "Love Stories",
    year: "2024",
    count: "200+ frames",
    desc: "Candid moments that hold a lifetime — documented with care.",
    img: "https://images.unsplash.com/photo-1765292783761-cd5689dbdc91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjByb21hbnRpYyUyMGNvdXBsZSUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzczNzQyOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    aspect: "portrait",
  },
  {
    id: "03",
    title: "Portrait",
    subtitle: "Faces & Stories",
    year: "2023",
    count: "36 frames",
    desc: "Intimate portraits that reveal the quiet strength in every person.",
    img: "https://images.unsplash.com/photo-1764844463456-146fa9a6dadf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjBzdHVkaW8lMjBuYXR1cmFsJTIwbGlnaHQlMjBtb29keXxlbnwxfHx8fDE3NzM3NDI5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aspect: "portrait",
  },
  {
    id: "04",
    title: "Street",
    subtitle: "Urban Pulse",
    year: "2023",
    count: "120 frames",
    desc: "Candid city life — the unscripted theatre of everyday streets.",
    img: "https://images.unsplash.com/photo-1649633204614-d9fabf0b799f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFuJTIwY2l0eSUyMGNhbmRpZCUyMGZpbG18ZW58MXx8fHwxNzczNzQyOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    aspect: "landscape",
  },
  {
    id: "05",
    title: "Nature",
    subtitle: "Quiet World",
    year: "2022",
    count: "84 frames",
    desc: "Macro, light, and texture — nature as abstract fine art.",
    img: "https://images.unsplash.com/photo-1725205564622-e96d9c0f54cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBhYnN0cmFjdCUyMG1hY3JvJTIwZmluZSUyMGFydCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3Mzc0Mjk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    aspect: "landscape",
  },
];

/* ── Lightbox ──────────────────────────────────────────── */
function Lightbox({
  item,
  onClose,
}: {
  item: (typeof series)[0] | null;
  onClose: () => void;
}) {
  if (!item) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(17,17,17,0.94)",
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        animation: "lbIn 0.3s ease forwards",
      }}
    >
      <style>{`@keyframes lbIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 880,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          background: "#FAFAFA",
        }}
      >
        {/* Image */}
        <div style={{ width: "100%", maxHeight: "68vh", overflow: "hidden" }}>
          <img
            src={item.img}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        {/* Meta bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            borderTop: "1px solid #E4E2DF",
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
            <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#AAAAAA", letterSpacing: "0.15em" }}>{item.id}</span>
            <span style={{ fontFamily: SERIF, fontSize: "1.1rem", color: "#111111" }}>{item.title}</span>
            <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#CCCCCC", letterSpacing: "0.1em" }}>{item.subtitle}</span>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#CCCCCC", letterSpacing: "0.1em" }}>{item.count}</span>
            <button
              onClick={onClose}
              style={{
                fontFamily: MONO,
                fontSize: "0.6rem",
                color: "#888888",
                background: "none",
                border: "1px solid #CCCCCC",
                cursor: "pointer",
                padding: "6px 14px",
                letterSpacing: "0.1em",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Photo Card ────────────────────────────────────────── */
function PhotoCard({
  item,
  onClick,
}: {
  item: (typeof series)[0];
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        borderTop: "1px solid #E4E2DF",
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "3/4",
          overflow: "hidden",
          background: "#EEEEEE",
          position: "relative",
        }}
      >
        <ImageWithFallback
          src={item.img}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s ease, filter 0.4s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered ? "grayscale(0%)" : "grayscale(30%)",
          }}
        />
        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(17,17,17,0.08)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            display: "flex",
            alignItems: "flex-end",
            padding: 16,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.15em",
              background: "rgba(17,17,17,0.6)",
              padding: "4px 10px",
            }}
          >
            View series →
          </span>
        </div>

        {/* Series count chip */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontFamily: MONO,
            fontSize: "0.52rem",
            color: "rgba(255,255,255,0.8)",
            background: "rgba(17,17,17,0.45)",
            padding: "3px 8px",
            letterSpacing: "0.08em",
          }}
        >
          {item.count}
        </div>
      </div>

      {/* Meta */}
      <div style={{ padding: "18px 2px 28px", display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "#111111",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#CCCCCC", letterSpacing: "0.1em" }}>
            {item.year}
          </span>
        </div>
        <p style={{ fontFamily: MONO, fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#AAAAAA" }}>
          {item.subtitle}
        </p>
        <p
          style={{
            fontFamily: SANS,
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "#888888",
            lineHeight: 1.7,
            marginTop: 4,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Photography Page ──────────────────────────────────── */
export function PhotographyPage() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<(typeof series)[0] | null>(null);

  return (
    <div style={{ ...dotGrid, minHeight: "100vh", animation: "pageFadeIn 0.5s ease forwards" }}>
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(10px); }
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
          background: "rgba(250,250,250,0.9)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#888888", letterSpacing: "0.15em" }}>
            ← Main
          </span>
        </button>

        <img src={logoImg} alt="lele logo" style={{ width: 26, height: 26, objectFit: "contain" }} />

        <span style={{ fontFamily: MONO, fontSize: "0.6rem", color: "#AAAAAA", letterSpacing: "0.2em" }}>
          Photography / 02
        </span>
      </header>

      {/* ── Page heading ── */}
      <div style={{ padding: "60px 52px 48px" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#AAAAAA",
            marginBottom: 20,
          }}
        >
          Moments in Frame
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#111111",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          Photography
        </h1>

        {/* Rule with count */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 36 }}>
          <div style={{ flex: 1, height: 1, background: "#E4E2DF" }} />
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.55rem",
              color: "#CCCCCC",
              letterSpacing: "0.15em",
              whiteSpace: "nowrap",
            }}
          >
            {series.length} series
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <div
        style={{
          padding: "0 52px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0 36px",
        }}
      >
        {series.map((s) => (
          <PhotoCard key={s.id} item={s} onClick={() => setLightbox(s)} />
        ))}
      </div>

      {/* ── End marker ── */}
      <div style={{ padding: "0 52px 60px", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ flex: 1, height: 1, background: "#E4E2DF" }} />
        <span
          style={{
            fontFamily: MONO,
            fontSize: "0.55rem",
            color: "#CCCCCC",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          End of archive
        </span>
        <div style={{ flex: 1, height: 1, background: "#E4E2DF" }} />
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid #E4E2DF",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            fontFamily: MONO,
            fontSize: "0.58rem",
            color: "#888888",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.15em",
            padding: 0,
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
        >
          ← Back to Main
        </button>
        <button
          onClick={() => navigate("/work")}
          style={{
            fontFamily: MONO,
            fontSize: "0.58rem",
            color: "#888888",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.15em",
            padding: 0,
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#111")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888")}
        >
          Work →
        </button>
      </footer>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}