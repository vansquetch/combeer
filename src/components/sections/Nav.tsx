import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  //const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Eventos", "Promos", "Contacto"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(0,0,0,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #333" : "1px solid transparent",
        fontFamily: "'Bebas Neue', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
 
        * { box-sizing: border-box; margin: 0; padding: 0; }
 
        html { scroll-behavior: smooth; }
 
        body { background: #000; color: #fff; }
 
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up.d1 { transition-delay: 0.1s; }
        .fade-up.d2 { transition-delay: 0.25s; }
        .fade-up.d3 { transition-delay: 0.4s; }
        .fade-up.d4 { transition-delay: 0.55s; }
 
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #fff;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
 
        .hero-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(60px);
          animation: charUp 0.6s ease forwards;
        }
        @keyframes charUp {
          to { opacity: 1; transform: translateY(0); }
        }
 
        .marquee-track {
          display: flex;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
 
        .event-card {
          background: #0a0a0a;
          border: 1px solid #222;
          transition: border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .event-card:hover {
          border-color: #fff;
          transform: translateY(-4px);
        }
 
        .promo-card {
          border: 1px solid #1a1a1a;
          transition: background 0.3s, border-color 0.3s;
          cursor: default;
        }
        .promo-card:hover {
          background: #111;
          border-color: #444;
        }
 
        .contact-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid #333;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          padding: 12px 0;
          width: 100%;
          outline: none;
          transition: border-color 0.3s;
        }
        .contact-input::placeholder { color: #555; }
        .contact-input:focus { border-color: #fff; }
 
        .send-btn {
          background: #fff;
          color: #000;
          border: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.2em;
          padding: 14px 48px;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
        }
        .send-btn:hover { background: #000; color: #fff; outline: 1px solid #fff; }
 
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #888;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          transition: color 0.3s;
        }
        .social-link:hover { color: #fff; }
 
        .line-rule {
          border: none;
          border-top: 1px solid #1c1c1c;
          margin: 0;
        }
 
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo text */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.6rem",
              color: "#fff",
              letterSpacing: "0.08em",
            }}
          >
            combear
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              color: "#666",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Cerveza Artesanal
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 40 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
        </div>

        {/* IG badge */}
        <a
          href="https://instagram.com/combeer_pub"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
          style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
        >
          @COMBEER_PUB
        </a>
      </div>
    </nav>
  );
}
