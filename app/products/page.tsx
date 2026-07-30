import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Shop | After Hours Vodka",
  description: "Order After Hours Vodka — Canada's premium black bottle vodka crafted with glacier water.",
};

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "420px", overflow: "hidden", background: "#000" }}>
        <Image src="/shoppage.png" alt="Premium spirits" fill style={{ objectFit: "cover", opacity: 0.25 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 40px 80px", textAlign: "center" }}>
          <div>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>Shop</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.0 }}>The Collection</h1>
          </div>
        </div>
      </section>

      {/* Product */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", border: "1px solid #1a1a1a" }} className="product-main-grid">
            {/* Image */}
            <div className="reveal-left hover-zoom" style={{ position: "relative", height: "640px", background: "#070707", overflow: "hidden" }}>
              <Image src="/bottle-real-front.jpg" alt="After Hours Vodka" fill style={{ objectFit: "cover" }} />
              {/* Sale badge */}
              <div style={{ position: "absolute", top: "24px", right: "24px", background: "#0a0a0a", border: "1px solid #2a2a2a", padding: "10px 16px" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" }}>Limited Offer</span>
              </div>
            </div>

            {/* Details */}
            <div className="reveal-right" style={{ padding: "60px 60px 60px 20px" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "20px" }}>Premium Edition — Canadian Vodka</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.1, marginBottom: "16px" }}>
                After Hours<br /><em style={{ fontStyle: "italic", color: "#888" }}>Vodka</em>
              </h2>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid #1a1a1a" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "#3a3a3a", textDecoration: "line-through" }}>$51.99</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 600, color: "#d4d4d4", lineHeight: 1 }}>$47.99</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#888", textTransform: "uppercase", background: "#111", border: "1px solid #222", padding: "4px 10px" }}>Save $4</span>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "16px" }}>
                Northern Quality. You Can Taste and Trust.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", lineHeight: 1.85, color: "#666", marginBottom: "32px" }}>
                Canada's premium black bottle vodka. Sugar cane distilled, naturally gluten-free, and crafted with glacier water from the Rocky Mountains for an exceptionally smooth finish. A spirit as unforgettable on the table as it is in the glass.
              </p>

              {/* Features */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "36px" }}>
                {[
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C12 2 4 9 4 14a8 8 0 0 0 16 0c0-5-8-12-8-12z"/></svg>, label: "Glacier Water" },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>, label: "Canadian Made" },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>, label: "Premium Grade" },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, label: "Smooth Finish" },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l2.5 6.5L21 9l-5 5 1.5 7L12 17.5 6.5 21 8 14 3 9l6.5-.5z"/></svg>, label: "Sugar Cane Distilled" },
                  { icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><line x1="6" y1="6" x2="18" y2="18"/></svg>, label: "Gluten-Free" },
                ].map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#555" }}>
                    {f.icon}
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555" }}>{f.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="mailto:Info@afterhoursvodka.ca" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
                  Order Now
                </a>
                <Link href="/contact" className="btn-ghost" style={{ textAlign: "center", justifyContent: "center" }}>
                  Restaurant &amp; Bar Pricing
                </Link>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#333", textAlign: "center", marginTop: "20px", letterSpacing: "0.1em" }}>
                Contact for restaurant, bar &amp; bulk pricing
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .product-main-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Why After Hours */}
      <section style={{ background: "#050505", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="luxury-divider" style={{ marginBottom: "32px" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>Why After Hours</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#d4d4d4" }}>The Difference Is in the Details</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            {[
              { num: "01", title: "The Source", body: "Glacier water from Canada's Rocky Mountains — pristine, mineral-rich, and the foundation of our exceptional taste." },
              { num: "02", title: "The Craft", body: "Distilled with uncompromising attention to detail. Every batch is held to the same exacting standard before it earns the After Hours name." },
              { num: "03", title: "The Bottle", body: "The premium black bottle is a statement piece — designed to look as refined on your bar shelf as it does on the finest tables." },
            ].map((item, i) => (
              <div key={i} className="reveal hover-lift" style={{ paddingTop: "32px", borderTop: "1px solid #1a1a1a", ["--reveal-delay" as string]: `${i * 0.12}s` }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, color: "#1e1e1e", lineHeight: 1, marginBottom: "16px" }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, color: "#b8b8b8", marginBottom: "14px" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", lineHeight: 1.85, color: "#555" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
