"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Shop" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(0,0,0,0.95)"
          : "transparent",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 24px 0 40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          {/* Logo */}
          <Link href="/" className="navbar-logo" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginLeft: "100px" }}>
            <div style={{ width: "68px", height: "68px", position: "relative" }}>
              <Image src="/logo1.png" alt="After Hours" fill style={{ objectFit: "contain" }} />
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-nav">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#888",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/products" className="btn-primary" style={{ padding: "10px 24px", fontSize: "10px" }}>
              Order Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <div style={{ width: "24px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ height: "1px", background: menuOpen ? "#888" : "#d4d4d4", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}></span>
              <span style={{ height: "1px", background: "#d4d4d4", display: "block", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }}></span>
              <span style={{ height: "1px", background: menuOpen ? "#888" : "#d4d4d4", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(0,0,0,0.98)", borderTop: "1px solid #1a1a1a", padding: "24px 40px 32px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "14px 0", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", textDecoration: "none", borderBottom: "1px solid #111" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .navbar-logo { margin-left: 0 !important; }
        }
      `}</style>
    </nav>
  );
}
