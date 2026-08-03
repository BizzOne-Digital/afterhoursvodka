"use client";
import { useEffect, useState } from "react";

export default function AgeGate() {
  const [status, setStatus] = useState<"checking" | "ask" | "confirmed" | "blocked">("checking");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? sessionStorage.getItem("ah_age_verified") : null;
    setStatus(saved === "yes" ? "confirmed" : "ask");
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("ah_age_verified", "yes");
    setStatus("confirmed");
  };

  const handleNo = () => {
    setStatus("blocked");
  };

  if (status === "checking" || status === "confirmed") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: "rgba(5,5,5,0.98)",
        borderTop: "1px solid #2a2a2a",
        backdropFilter: "blur(12px)",
        padding: "18px 24px",
      }}
    >
      {status === "ask" && (
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#ccc",
              margin: 0,
            }}
          >
            Are you 19 years of age or older?
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={handleYes}
              style={{
                padding: "10px 28px",
                background: "#d4d4d4",
                color: "#000",
                border: "1px solid #d4d4d4",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              style={{
                padding: "10px 28px",
                background: "transparent",
                color: "#888",
                border: "1px solid #333",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              No
            </button>
          </div>
        </div>
      )}

      {status === "blocked" && (
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#888",
              margin: 0,
            }}
          >
            You must be 19 years of age or older to view this site.
          </p>
        </div>
      )}
    </div>
  );
}
