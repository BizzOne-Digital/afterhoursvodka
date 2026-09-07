import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | After Hours Vodka",
  description: "Every bottle tells a story. After Hours was created to redefine what Canadian vodka can be.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "70vh", minHeight: "500px", overflow: "hidden", background: "#000" }}>
        <Image src="/aboutpage.png" alt="Rocky Mountains" fill style={{ objectFit: "cover", opacity: 0.3 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "80px", textAlign: "center", padding: "0 40px 80px" }}>
          <div>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>Our Story</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 7vw, 90px)", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.0 }}>
              About After Hours
            </h1>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#777", marginTop: "24px" }}>
              Northern Quality. You Can Taste and Trust.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "100px", alignItems: "center" }} className="about-grid">
            <div className="reveal-left">
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                <div style={{ height: "1px", width: "40px", background: "#333" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#555" }}>The Beginning</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 50px)", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.15, marginBottom: "32px" }}>
                Every Bottle<br /><em style={{ fontStyle: "italic", color: "#888" }}>Tells a Story</em>
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.9, color: "#666", marginBottom: "24px" }}>
                After Hours was created with one goal: to redefine what Canadian vodka can be. Crafted with exceptional ingredients and uncompromising attention to detail, every bottle reflects our commitment to quality, craftsmanship, and unforgettable moments.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.9, color: "#555" }}>
                We believe that a truly premium spirit doesn't need to announce itself — it speaks through experience. The feel of the bottle in your hand. The clarity in the glass. The smoothness on the palate. That is After Hours.
              </p>
            </div>
            <div className="reveal-right hover-zoom about-image" style={{ position: "relative", height: "600px" }}>
              <Image src="/aboutpagepic.jpg" alt="Vodka craftsmanship" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.2), transparent)" }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; }
            .about-image { height: auto !important; aspect-ratio: 1 / 1; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: "#050505", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
            <div className="luxury-divider" style={{ marginBottom: "32px" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>What We Stand For</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#d4d4d4" }}>Our Principles</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><path d="M12 2C12 2 4 9 4 14a8 8 0 0 0 16 0c0-5-8-12-8-12z"/></svg>, title: "Purity", desc: "Glacier water from Canada's Rocky Mountains, sugar cane distilled and made with gluten-free ingredients. Nothing added, nothing removed. Pristine from source to bottle." },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>, title: "Patience", desc: "Our process is deliberate and unhurried. We take the time that quality demands, no shortcuts." },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>, title: "Excellence", desc: "From the bottle design to the final taste — every detail is a decision made in pursuit of the exceptional." },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>, title: "Canadian Pride", desc: "Built in Canada, for the world. We are proud of where we come from and the spirit we create." },
            ].map((v, i) => (
              <div key={i} className="reveal hover-lift" style={{ background: "#0a0a0a", border: "1px solid #161616", padding: "48px 36px", ["--reveal-delay" as string]: `${i * 0.12}s` }}>
                <div style={{ marginBottom: "24px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#d4d4d4", marginBottom: "16px" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", lineHeight: 1.85, color: "#555" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div className="reveal" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div className="luxury-divider" style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>Who We're For</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#d4d4d4", marginBottom: "32px" }}>
            Made for Those Who<br /><em style={{ fontStyle: "italic", color: "#888" }}>Appreciate the Exceptional</em>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", lineHeight: 1.8, color: "#666", marginBottom: "24px" }}>
            After Hours is designed for adults who appreciate premium quality and want a vodka that feels elevated without being pretentious. Professionals, entrepreneurs, and hospitality enthusiasts who value craftsmanship, modern design, and supporting Canadian brands.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.8, color: "#555", fontStyle: "italic" }}>
            They're looking for a spirit perfect for celebrations, entertaining, or enjoying with friends. A bottle they're proud to display.
          </p>
          <div style={{ marginTop: "48px" }}>
            <Link href="/products" className="btn-primary">Shop the Collection</Link>
          </div>
        </div>
      </section>
    </>
  );
}
