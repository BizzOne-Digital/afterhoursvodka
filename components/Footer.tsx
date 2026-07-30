"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1a1a1a", paddingTop: "80px", paddingBottom: "40px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "60px", marginBottom: "60px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ width: "68px", height: "68px", position: "relative" }}>
                <Image src="/ah-logo-new.png" alt="After Hours" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#777", marginBottom: "12px" }}>
              Northern Quality. You Can Taste and Trust.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px", lineHeight: 1.8, color: "#555", fontStyle: "italic" }}>
              Canada's premium black bottle vodka. Sugar cane distilled, gluten-free, and crafted with glacier water from the Rocky Mountains.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
              {/* Instagram */}
              <a href="https://instagram.com/afterhoursvodkas" target="_blank" rel="noreferrer" style={{ color: "#555", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#d4d4d4"} onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" style={{ color: "#555", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#d4d4d4"} onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" style={{ color: "#555", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#d4d4d4"} onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", color: "#555", textTransform: "uppercase", marginBottom: "24px" }}>Navigate</h4>
            {[["Home", "/"], ["About Us", "/about"], ["Shop", "/products"], ["Services", "/services"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "#444", textDecoration: "none", marginBottom: "14px", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#b8b8b8"} onMouseLeave={e => e.currentTarget.style.color = "#444"}>{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", color: "#555", textTransform: "uppercase", marginBottom: "24px" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: "Info@afterhoursvodka.ca" },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, text: "819-578-2093" },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: "afterhoursvodka.ca" },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#444" }}>
                  <span style={{ color: "#555", flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.05em", color: "#555" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.1em", color: "#333" }}>
            © 2026 After Hours Vodka. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px", fontStyle: "italic", color: "#333" }}>
            Please drink responsibly. Must be of legal drinking age.
          </p>
        </div>
      </div>
    </footer>
  );
}
