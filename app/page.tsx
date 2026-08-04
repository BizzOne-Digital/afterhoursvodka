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
        <div className="hero-content" style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center", maxWidth: "1400px", margin: "0 auto", padding: "clamp(110px, 16vh, 160px) 40px 0" }}>
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

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#aaa", marginBottom: "16px" }}>
                Northern Quality. You Can Taste and Trust.
              </p>

              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.75, color: "#888", maxWidth: "480px", marginBottom: "40px" }}>
                Sugar cane distilled and made with gluten-free ingredients, crafted with glacier water from Canada's Rocky Mountains for an exceptionally smooth finish.
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
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1fr", alignItems: "stretch" }} className="craft-grid">
          {/* Image - full bleed, 0px from edges */}
          <div className="craft-image reveal-left" style={{ position: "relative", minHeight: "560px" }}>
            <Image
              src="/new1.png"
              alt="After Hours Premium Vodka bottle"
              fill
              style={{ objectFit: "cover", objectPosition: "left center" }}
            />
          </div>

          {/* Text */}
          <div className="reveal-right" style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#b8944f", marginBottom: "20px" }}>The Craftsmanship</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, lineHeight: 1.3, color: "#f0f0f0", marginBottom: "40px", textTransform: "uppercase" }}>
              Exceptional by Nature.<br />Premium by Choice.
            </h2>

            {/* Feature grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "40px" }} className="craft-feature-grid">
              {[
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.2"><path d="M12 2C12 2 4 9 4 14a8 8 0 0 0 16 0c0-5-8-12-8-12z"/></svg>, title: "Premium Ingredients", desc: "Made from the finest sugar cane." },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.2"><path d="M12 2l9 18H3z"/><path d="M8 14l4-8 4 8"/></svg>, title: "Glacier Filtered", desc: "Infused with pure Canadian glacier water." },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.2"><path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-4.5 5-10 5-10z"/></svg>, title: "Ultra Smooth", desc: "Four times distilled for unmatched smoothness." },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#b8944f" strokeWidth="1.2"><path d="M12 2s-6 4-6 9a6 6 0 0 0 12 0c0-5-6-9-6-9z"/><path d="M12 11v10"/></svg>, title: "Crafted in Canada", desc: "Proudly distilled and bottled in Canada." },
              ].map((f, i) => (
                <div key={i} style={{ borderLeft: i === 0 ? "none" : "1px solid #222", paddingLeft: i === 0 ? "0" : "20px" }}>
                  <div style={{ marginBottom: "12px" }}>{f.icon}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d4d4d4", marginBottom: "8px", lineHeight: 1.4 }}>{f.title}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "#777", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <div>
              <Link href="/about" className="hover-glow" style={{ display: "inline-block", padding: "16px 36px", border: "1px solid #b8944f", color: "#b8944f", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}>Explore the Bottle</Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .craft-grid { grid-template-columns: 1fr !important; }
            .craft-image { min-height: 400px !important; }
            .craft-feature-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .craft-feature-grid > div { border-left: none !important; padding-left: 0 !important; }
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
                src="/pro.jpeg"
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
              { img: "/celeb.jpeg", label: "Celebrations", desc: "Perfect for milestones that deserve to be remembered." },
              { img: "/enter.jpeg", label: "Entertaining", desc: "The bottle your guests will notice before you even pour." },
              { img: "/afterhour.jpeg", label: "After Hours", desc: "When the night calls for something elevated." },
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

      {/* ── SIGNATURE SERVES ── */}
      <section style={{ background: "#000", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="luxury-divider" style={{ marginBottom: "24px" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", color: "#555", textTransform: "uppercase" }}>Crafted Moments</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#d4d4d4" }}>Signature Serves</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { img: "/lom.png", name: "Northern Lights", desc: "Crisp. Refreshing. Unforgettable.", ingredients: ["2 oz After Hours Premium Vodka", "4 oz premium lemonade", "1 oz sparkling water", "Fresh lemon wedge", "Ice"] },
              { img: "/midnight.png", name: "Midnight Maple", desc: "A true Canadian original.", ingredients: ["2 oz After Hours Premium Vodka", "½ oz pure Canadian maple syrup", "2 dashes Angostura bitters", "Orange peel", "Ice"] },
              { img: "/cocktail-espresso.png", name: "After Hours Espresso", desc: "Refined. Smooth. Timeless.", ingredients: ["2 oz After Hours Premium Vodka", "1 oz espresso", "½ oz coffee liqueur", "½ oz simple syrup", "3 coffee beans (garnish)", "Ice"] },
              { img: "/cocktail-mule.png", name: "Rocky Mountain Mule", desc: "Bold. Refreshing. Canadian.", ingredients: ["2 oz After Hours Premium Vodka", "½ oz fresh lime juice", "4 oz ginger beer", "Lime wheel", "Fresh mint"] },
              { img: "/cocktail-collins.png", name: "Black Label Collins", desc: "Crisp. Elegant. Effortless.", ingredients: ["2 oz After Hours Premium Vodka", "1 oz fresh lemon juice", "½ oz simple syrup", "Soda water", "Lemon wheel"] },
            ].map((c, i) => (
              <div key={i} className="reveal-scale hover-lift" style={{ background: "#0a0a0a", border: "1px solid #1a1a1a", ["--reveal-delay" as string]: `${i * 0.1}s` }}>
                <div className="hover-zoom" style={{ position: "relative", height: "260px" }}>
                  <Image src={c.img} alt={c.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "#d4d4d4", marginBottom: "6px" }}>{c.name}</h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "#777", fontStyle: "italic", marginBottom: "16px" }}>{c.desc}</p>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#555", marginBottom: "10px" }}>Ingredients</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
                    {c.ingredients.map((ing, j) => (
                      <li key={j} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "#888" }}>{ing}</li>
                    ))}
                  </ul>
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
