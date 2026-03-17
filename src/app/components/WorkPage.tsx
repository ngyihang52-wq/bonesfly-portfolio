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

const projects = [
  {
    id: "01",
    title: "Brand Identity",
    category: "Branding",
    year: "2024",
    desc: "A full visual identity system — logo, colour palette, and type.",
    img: "https://images.unsplash.com/photo-1622503247445-cfe020cd0e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMGdyYXBoaWMlMjBkZXNpZ24lMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzc0Mjk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "02",
    title: "Poster Series",
    category: "Print",
    year: "2024",
    desc: "Bold typographic posters exploring form, colour, and rhythm.",
    img: "https://images.unsplash.com/photo-1734543920075-59872330bec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGhpYyUyMHBvc3RlciUyMGFydCUyMGJsYWNrJTIwd2hpdGUlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzczNzQyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "03",
    title: "Typography",
    category: "Type",
    year: "2023",
    desc: "Custom lettering and type systems for editorial print work.",
    img: "https://images.unsplash.com/photo-1627543858482-b98694bcb2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXJpbmclMjB0eXBvZ3JhcGh5JTIwaGFuZCUyMGRyYXduJTIwYmxhY2t8ZW58MXx8fHwxNzczNzQyOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        borderTop: "1px solid #E4E2DF",
        paddingTop: 0,
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          background: "#EEEEEE",
          position: "relative",
        }}
      >
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease, filter 0.4s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            filter: hovered ? "grayscale(0%)" : "grayscale(20%)",
          }}
        />
        {/* Number overlay */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            fontFamily: MONO,
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.1em",
            background: "rgba(17,17,17,0.5)",
            padding: "3px 8px",
          }}
        >
          {project.id}
        </div>
      </div>

      {/* Meta */}
      <div
        style={{
          padding: "18px 2px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
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
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: MONO,
              fontSize: "0.55rem",
              color: "#CCCCCC",
              letterSpacing: "0.1em",
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.55rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#AAAAAA",
          }}
        >
          {project.category}
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
          {project.desc}
        </p>
      </div>
    </div>
  );
}

export function WorkPage() {
  const navigate = useNavigate();

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
          Work / 01
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
          Projects &amp; Explorations
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
          Work
        </h1>

        {/* Rule with count */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 36,
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#E4E2DF" }} />
          <span style={{ fontFamily: MONO, fontSize: "0.55rem", color: "#CCCCCC", letterSpacing: "0.15em", whiteSpace: "nowrap" }}>
            {projects.length} projects
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
        <style>{`
          @media (max-width: 900px) {
            .work-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .work-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* ── End marker ── */}
      <div
        style={{
          padding: "0 52px 60px",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
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
          End of catalogue
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
          onClick={() => navigate("/photography")}
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
          Photography →
        </button>
      </footer>
    </div>
  );
}