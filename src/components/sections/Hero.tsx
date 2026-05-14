import logo from "../../assets/logo.png";
export function Hero() {
  const headline = "COMBEAR";
  const sub = "PUB";

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 8vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Tag line */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.4em",
          color: "#666",
          textTransform: "uppercase",
          marginBottom: 10,
          animation: "charUp 0.7s ease 0.2s both",
        }}
      >
        Bogotá D.C · Cervecería Artesanal
      </p>

      {/* Main headline */}
      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          lineHeight: 0.88,
          margin: 0,
        }}
      >
        <img
          style={{
            height: "200px",
          }}
          src={logo}
        />
      </h1>

      {/* Descriptor */}
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 2vw, 1rem)",
          color: "#777",
          marginTop: 10,
          maxWidth: 480,
          lineHeight: 1.2,
          animation: "charUp 0.8s ease 1.2s both",
        }}
      >
        Música en vivo, Stand Up Comedy &amp; eventos en el corazón de Bogotá.
        Siempre con la mejor energía.
      </p>

      {/* CTA */}
      <a
        href="#eventos"
        style={{
          marginTop: 48,
          display: "inline-block",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1rem",
          letterSpacing: "0.25em",
          color: "#000",
          background: "#fff",
          padding: "14px 40px",
          textDecoration: "none",
          animation: "charUp 0.8s ease 1.5s both",
          transition: "background 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#fff";
          e.target.style.outline = "1px solid #fff";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "#fff";
          e.target.style.color = "#000";
          e.target.style.outline = "none";
        }}
      >
        Ver Próximos Eventos
      </a>

      {/* Bottom address */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: "8vw",
          textAlign: "right",
          animation: "charUp 0.8s ease 1.7s both",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            color: "#444",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Cra. 14 #77-30
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            color: "#444",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Bogotá D.C
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "8vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "charUp 0.8s ease 2s both",
        }}
      >
        <div
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, transparent, #555)",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            color: "#444",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}
