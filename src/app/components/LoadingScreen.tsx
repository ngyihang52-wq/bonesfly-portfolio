import { useState, useEffect } from "react";
import loadingImg from "../../assets/lele_loading.gif";

interface Props {
  onDone: () => void;
}

export function LoadingScreen({ onDone }: Props) {
  const [phase, setPhase] = useState<"hold" | "slide">("hold");

  useEffect(() => {
    // Hold for 1.6s so the character is visible, then slide the panel down
    const t1 = setTimeout(() => setPhase("slide"), 1600);
    const t2 = setTimeout(() => onDone(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#FAFAFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: phase === "slide" ? "translateY(100%)" : "translateY(0)",
        transition: "transform 1.35s cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: phase === "slide" ? "none" : "all",
      }}
    >
      {/* Dot-grid paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #CCCCCC 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Lele character — figma:asset PNG with CSS animation */}
        <img
          src={loadingImg}
          alt="lele"
          style={{
            width: 180,
            height: 180,
            objectFit: "contain",
            marginBottom: 8,
            animation: "leleBounce 0.7s ease-in-out infinite alternate",
          }}
        />

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#111111",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          lele.
        </h1>

        {/* Animated rule line */}
        <div
          style={{
            height: 1,
            background: "#CCCCCC",
            width: 200,
            animation: "lineGrow 0.9s ease forwards 0.1s",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            marginBottom: 14,
          }}
        />

        {/* Sub label */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#BBBBBB",
          }}
        >
          Design &amp; Photography
        </p>
      </div>

      {/* Corner markers */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 36,
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.55rem",
          color: "#CCCCCC",
          letterSpacing: "0.1em",
        }}
      >
        No. 01
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 36,
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.55rem",
          color: "#CCCCCC",
          letterSpacing: "0.1em",
        }}
      >
        {new Date().getFullYear()}
      </div>

      <style>{`
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes leleBounce {
          from { transform: translateY(0px) rotate(-2deg); }
          to   { transform: translateY(-14px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}