import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services | After Hours Vodka",
  description: "After Hours Vodka for restaurants, bars, events, and celebrations across Canada.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "420px", overflow: "hidden", background: "#000" }}>
        <Image src="/service.png" alt="Bar service" fill style={{ objectFit: "cover", opacity: 0.25 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9))" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 40px 80px", textAlign: "center" }}>
          <div>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>For Professionals</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 300, color: "#d4d4d4" }}>Services</h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#777", marginTop: "24px" }}>
              Northern Quality. You Can Taste and Trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Product highlight */}
          <div className="service-card-grid reveal-scale hover-lift" style={{ background: "#080808", border: "1px solid #1a1a1a", padding: "60px", display: "grid", gridTemplateColumns: "1fr auto", gap: "60px", alignItems: "center", marginBottom: "80px" }}>
            <div>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "20px" }}>Premium Vodka</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.15, marginBottom: "24px" }}>
                After Hours Vodka
              </h2>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "24px" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", color: "#333", textDecoration: "line-through" }}>$51.99</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 600, color: "#d4d4d4" }}>$47.99</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.85, color: "#666", marginBottom: "32px" }}>
                Canada's premium black bottle vodka. Sugar cane distilled, naturally gluten-free, and crafted with glacier water from the Rocky Mountains. Perfect for restaurants, bars, events, and personal collections.
              </p>
              <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "20px 28px", display: "inline-block", marginBottom: "32px" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#666" }}>
                  Special pricing available for restaurants &amp; bars — contact us directly
                </span>
              </div>
              <div>
                <Link href="/contact" className="btn-primary">Contact for Pricing</Link>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="service-bottle">
              <div style={{ position: "relative", width: "180px", height: "320px" }}>
                <Image src="/bottle-real-front.png" alt="After Hours" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>

          {/* Who we serve */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><path d="M3 2h18l-2 7H5z"/><circle cx="8" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M5 9l1 11h12l1-11"/></svg>, title: "Retail Orders", body: "Order directly through us. Available for individuals, gift orders, and personal collections at our standard premium pricing." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: "Restaurants & Bars", body: "Exclusive pricing available for hospitality professionals. Contact us to discuss volume pricing and partnership opportunities." },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, title: "Events & Celebrations", body: "Elevate your event with After Hours. Perfect for corporate events, weddings, private parties, and branded experiences." },
            ].map((s, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "#080808", border: "1px solid #1a1a1a", padding: "44px 36px", ["--reveal-delay" as string]: `${i * 0.12}s` }}>
                <div style={{ marginBottom: "24px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#d4d4d4", marginBottom: "16px" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", lineHeight: 1.85, color: "#555" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .service-card-grid { grid-template-columns: 1fr !important; }
            .service-bottle { display: none !important; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#050505", padding: "100px 40px", textAlign: "center", borderTop: "1px solid #111" }}>
        <div className="reveal" style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#d4d4d4", marginBottom: "24px" }}>
            Ready to Partner?
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", lineHeight: 1.75, color: "#666", fontStyle: "italic", marginBottom: "40px" }}>
            Whether you're stocking a bar or planning an unforgettable event, we'd love to speak with you.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
