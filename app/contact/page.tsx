"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to email/CRM
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0a0a0a",
    border: "1px solid #1e1e1e",
    borderRadius: 0,
    padding: "16px 20px",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    letterSpacing: "0.05em",
    color: "#b8b8b8",
    outline: "none",
    transition: "border-color 0.3s",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#555",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "400px", overflow: "hidden", background: "#000" }}>
        <Image src="/contact.png" alt="Contact" fill style={{ objectFit: "cover", opacity: 0.2 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 40px 80px", textAlign: "center" }}>
          <div>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>Let's Connect</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 300, color: "#d4d4d4" }}>Contact</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#777", marginTop: "24px" }}>
              Northern Quality. You Can Taste and Trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "80px" }} className="contact-grid">
          {/* Info */}
          <div className="reveal-left">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ height: "1px", width: "40px", background: "#333" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555" }}>Reach Us</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.2, marginBottom: "32px" }}>
              We'd Love to<br /><em style={{ fontStyle: "italic", color: "#888" }}>Hear From You</em>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.85, color: "#666", marginBottom: "48px" }}>
              Whether you're placing an order, enquiring about restaurant and bar pricing, or exploring a partnership — we're ready to help.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: "Email", value: "Info@afterhoursvodka.ca", href: "mailto:Info@afterhoursvodka.ca" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "Phone", value: "819-578-2093", href: "tel:8195782093" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: "Website", value: "afterhoursvodka.ca", href: "https://afterhoursvodka.ca" },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, label: "Instagram", value: "@AfterHoursvodkas", href: "https://instagram.com/afterhoursvodkas" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", paddingBottom: "28px", borderBottom: "1px solid #111" }}>
                  <div style={{ color: "#555", marginTop: "2px", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#444", marginBottom: "6px" }}>{c.label}</div>
                    <a href={c.href} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#888", textDecoration: "none", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = "#d4d4d4"} onMouseLeave={e => e.currentTarget.style.color = "#888"}>{c.value}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar/Restaurant note */}
            <div style={{ marginTop: "40px", background: "#080808", border: "1px solid #1a1a1a", padding: "24px 28px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", marginBottom: "10px" }}>Trade Enquiries</div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#666", lineHeight: 1.7 }}>
                Special pricing available for restaurants, bars, and hospitality professionals. Reach out to discuss partnership opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            {sent ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 40px", background: "#080808", border: "1px solid #1a1a1a" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1" style={{ marginBottom: "24px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#d4d4d4", marginBottom: "16px" }}>Message Sent</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#666", lineHeight: 1.7, fontStyle: "italic" }}>Thank you for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input required style={inputStyle} type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={e => e.target.style.borderColor = "#333"} onBlur={e => e.target.style.borderColor = "#1e1e1e"} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input required style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={e => e.target.style.borderColor = "#333"} onBlur={e => e.target.style.borderColor = "#1e1e1e"} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Phone (Optional)</label>
                  <input style={inputStyle} type="tel" placeholder="+1 (000) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={e => e.target.style.borderColor = "#333"} onBlur={e => e.target.style.borderColor = "#1e1e1e"} />
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                    <option value="">Select a subject</option>
                    <option value="order">Place an Order</option>
                    <option value="bar">Restaurant / Bar Pricing</option>
                    <option value="event">Event Partnership</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea required rows={6} style={{ ...inputStyle, resize: "vertical" }} placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={e => e.target.style.borderColor = "#333"} onBlur={e => e.target.style.borderColor = "#1e1e1e"} />
                </div>
                <button type="submit" className="btn-primary hover-glow" style={{ justifyContent: "center", fontSize: "11px" }}>
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9"/></svg>
                </button>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: "#333", textAlign: "center", letterSpacing: "0.1em" }}>
                  We typically respond within 24 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
