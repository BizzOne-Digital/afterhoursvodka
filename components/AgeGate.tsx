"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AgeGate() {
  const [status, setStatus] = useState<"checking" | "ask" | "confirmed" | "blocked">("checking");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? sessionStorage.getItem("ah_age_verified") : null;
    setStatus(saved === "yes" ? "confirmed" : "ask");
  }, []);

  useEffect(() => {
    if (status === "ask" || status === "blocked") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

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
        inset: 0,
        zIndex: 3000,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
        <Image src="/newhero.png" alt="" fill style={{ objectFit: "cover" }} priority />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.92) 100%)" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "440px" }}>
        <div style={{ width: "56px", height: "56px", position: "relative", margin: "0 auto 28px" }}>
          <Image src="/ah-logo-new.png" alt="After Hours" fill style={{ objectFit: "contain" }} />
        </div>

        {status === "ask" && (
          <>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 300,
                color: "#e8e8e8",
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              Are You 19 Years of Age or Older?
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                color: "#777",
                fontStyle: "italic",
                marginBottom: "36px",
              }}
            >
              Please confirm your age to enter this site.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={handleYes}
                style={{
                  padding: "15px 44px",
                  background: "#d4d4d4",
                  color: "#000",
                  border: "1px solid #d4d4d4",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                style={{
                  padding: "15px 44px",
                  background: "transparent",
                  color: "#999",
                  border: "1px solid #333",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                No
              </button>
            </div>
          </>
        )}

        {status === "blocked" && (
          <>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 3.5vw, 32px)",
                fontWeight: 300,
                color: "#e8e8e8",
                marginBottom: "16px",
                lineHeight: 1.3,
              }}
            >
              Sorry, You Must Be 19+
            </h2>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                color: "#777",
                fontStyle: "italic",
              }}
            >
              You must be of legal drinking age to view this website.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
