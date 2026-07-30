"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY * 0.4;
        heroRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "700px", overflow: "hidden", background: "#000" }}>
        {/* BG image with parallax */}
        <div ref={heroRef} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/hero.png"
            alt="Mountain glacier backdrop"
            fill
            className="desktop-hero-img"
            style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 1 }}
            priority
          />
          <Image
            src="/mobile-hero.png"
            alt="Mountain glacier backdrop"
            fill
            className="mobile-hero-img"
            style={{ objectFit: "cover", objectPosition: "center 25%", opacity: 1, display: "none" }}
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.15) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "300px", background: "linear-gradient(to top, #000, transparent)", zIndex: 2 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", alignItems: "center", maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "60px", alignItems: "center", width: "100%" }}>
            {/* Left text */}
            <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                <div style={{ height: "1px", width: "40px", background: "#d4d4d4" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#888" }}>Canada's Premium Spirit</span>
              </div>

              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.05, marginBottom: "28px" }}>
                <span style={{ display: "block", fontSize: "clamp(52px, 8vw, 110px)", background: "linear-gradient(135deg, #888 0%, #e8e8e8 40%, #b0b0b0 60%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>After</span>
                <span style={{ display: "block", fontSize: "clamp(52px, 8vw, 110px)", background: "linear-gradient(135deg, #888 0%, #e8e8e8 40%, #b0b0b0 60%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Hours</span>
                <span style={{ display: "block", textAlign: "left", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 300, fontStyle: "normal", marginTop: "8px", background: "linear-gradient(135deg, #888 0%, #e8e8e8 40%, #b0b0b0 60%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Vodka</span>
              </h1>

              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.75, color: "#888", maxWidth: "480px", marginBottom: "40px" }}>
                Crafted with glacier water from Canada's Rocky Mountains for an exceptionally smooth finish.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/products" className="btn-primary">Discover the Spirit</Link>
                <Link href="/about" className="btn-ghost">Our Story</Link>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "40px", marginTop: "60px", paddingTop: "40px", borderTop: "1px solid #1a1a1a" }}>
                {[
                  { num: "100%", label: "Canadian Glacier Water" },
                  { num: "Premium", label: "Black Bottle Edition" },
                  { num: "$47.99", label: "Available Now" },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, color: "#d4d4d4" }}>{s.num}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - text + socials */}
            <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 1.2s ease 0.6s", display: "flex", alignItems: "center", gap: "36px", marginRight: "20px" }} className="hero-side">
              <div style={{ textAlign: "right" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: "10px", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#999" }}>Diamond</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", fontWeight: 600, color: "#e8e8e8", lineHeight: 1 }}>8X</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#999" }}>Filtered</span>
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d4d4d4" }}>Glacier Water</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#666", marginTop: "4px" }}>Distilled from Corn</div>
              </div>

              {/* Social icons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <a href="#" aria-label="Facebook" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" aria-label="Twitter / X" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.803 2.293 8.365 3.294 13 2 4.518-1.294 7.837-4.845 9-9.5v-2.5C22.964 6.766 23.478 5.487 24 4c-1.002.63-2.213 1.11-3 1.5 1.121-1.265 1.478-2.487 2-4z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: "#444", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #444, transparent)", animation: "fadeIn 2s ease infinite" }} />
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-side { display: none !important; }
            .desktop-hero-img { display: none !important; }
            .mobile-hero-img { display: block !important; }
          }
        `}</style>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section style={{ background: "#000", padding: "100px 40px", textAlign: "center" }}>
        <div className="reveal" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div className="luxury-divider" style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>The Standard</span>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300, lineHeight: 1.55, color: "#ccc", fontStyle: "italic" }}>
            "After Hours was created with one goal: to redefine what Canadian vodka can be. Every bottle reflects our commitment to quality, craftsmanship, and unforgettable moments."
          </p>
          <div style={{ width: "48px", height: "1px", background: "#333", margin: "40px auto 0" }} />
        </div>
      </section>

      {/* ── CRAFT SECTION ── */}
      <section style={{ background: "#0a0a0a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", alignItems: "stretch" }} className="craft-grid">
          {/* Image - full bleed, 0px from edges */}
          <div className="craft-image reveal-left" style={{ position: "relative", minHeight: "640px" }}>
            <Image
              src="/abouth.png"
              alt="Glacier water craftsmanship"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Text */}
          <div className="reveal-right" style={{ padding: "100px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
              <div style={{ height: "1px", width: "40px", background: "#b8944f" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#b8944f" }}>The Craft</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, color: "#f0f0f0", marginBottom: "28px" }}>
              Purity Born<br />
              <em style={{ fontStyle: "italic", color: "#b8944f" }}>from the Mountains</em>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", lineHeight: 1.85, color: "#999", marginBottom: "20px" }}>
              Every bottle of After Hours is crafted using glacier water sourced from Canada's Rocky Mountains — pristine, mineral-rich, and impossibly smooth. This is the foundation of everything we do.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", lineHeight: 1.85, color: "#777", marginBottom: "40px" }}>
              From the raw ingredient to the final pour, our process is deliberate, unhurried, and uncompromising — delivering a vodka that is exceptional without effort.
            </p>
            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.5"><path d="M12 2C12 2 4 9 4 14a8 8 0 0 0 16 0c0-5-8-12-8-12z"/></svg>, text: "Canadian Glacier Water" },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>, text: "Premium Craft Distillation" },
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, text: "Exceptionally Smooth Finish" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span>{f.icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>{f.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px" }}>
              <Link href="/about" className="hover-glow" style={{ display: "inline-block", padding: "16px 36px", border: "1px solid #b8944f", color: "#b8944f", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>Learn More</Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .craft-grid { grid-template-columns: 1fr !important; }
            .craft-image { min-height: 400px !important; }
          }
        `}</style>
      </section>

      {/* ── PRODUCT SPOTLIGHT ── */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="luxury-divider" style={{ marginBottom: "32px" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>Shop</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, color: "#d4d4d4", marginBottom: "16px" }}>
              The Bottle
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#666", fontStyle: "italic" }}>
              As unforgettable on the table as it is in the glass.
            </p>
          </div>

          {/* Product card */}
          <div className="product-card-grid reveal-scale hover-lift" style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid #1a1a1a" }}>
            <div style={{ position: "relative", minHeight: "500px", height: "100%", background: "#080808" }}>
              <Image
                src="/product.png"
                alt="After Hours Vodka"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0a0a0a" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#555", marginBottom: "20px", display: "block" }}>Premium Edition</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 300, color: "#d4d4d4", lineHeight: 1.1, marginBottom: "12px" }}>
                After Hours<br /><em style={{ fontStyle: "italic", color: "#888" }}>Vodka</em>
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px", marginTop: "8px" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#444", textDecoration: "line-through" }}>$51.99</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 600, color: "#d4d4d4" }}>$47.99</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", lineHeight: 1.8, color: "#555", marginBottom: "32px" }}>
                Canada's premium black bottle vodka. Crafted for professionals, entrepreneurs, and those who appreciate the exceptional.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link href="/products" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>Order Now</Link>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.2em", color: "#444", textTransform: "uppercase", textAlign: "center", marginTop: "8px" }}>
                  Contact for restaurant &amp; bar pricing
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .product-card-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── AUDIENCE SECTION ── */}
      <section style={{ background: "#050505", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", border: "1px solid #1a1a1a", overflow: "hidden" }}>
            {[
              { img: "https://images.unsplash.com/photo-1699730164892-d7c433524ff3?q=80", label: "Celebrations", desc: "Perfect for milestones that deserve to be remembered." },
              { img: "https://images.unsplash.com/photo-1629223404788-db15f97f9cec?q=80", label: "Entertaining", desc: "The bottle your guests will notice before you even pour." },
              { img: "https://images.unsplash.com/photo-1557861755-116b854811e2?q=80", label: "After Hours", desc: "When the night calls for something elevated." },
            ].map((item, i) => (
              <div key={i} className="reveal-scale" style={{ position: "relative", height: "380px", overflow: "hidden", cursor: "pointer", ["--reveal-delay" as string]: `${i * 0.15}s` }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector('.card-img') as HTMLElement; if (img) img.style.transform = "scale(1.08)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector('.card-img') as HTMLElement; if (img) img.style.transform = "scale(1)"; }}
              >
                <Image src={item.img} alt={item.label} fill className="card-img" style={{ objectFit: "cover", transition: "transform 0.8s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "#d4d4d4", marginBottom: "8px" }}>{item.label}</h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "#888", fontStyle: "italic" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#000", padding: "120px 40px", textAlign: "center", borderTop: "1px solid #111", borderBottom: "1px solid #111" }}>
        <div className="reveal" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, transparent, #333)", margin: "0 auto 48px" }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "24px" }}>
            <span style={{ background: "linear-gradient(135deg, #888 0%, #e8e8e8 40%, #b0b0b0 60%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Order Your Bottle Today
            </span>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", lineHeight: 1.7, color: "#666", marginBottom: "40px", fontStyle: "italic" }}>
            A premium Canadian vodka that's as unforgettable on the table as it is in the glass.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/products" className="btn-primary">Shop Now</Link>
            <Link href="/contact" className="btn-ghost">Contact for Bulk Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
