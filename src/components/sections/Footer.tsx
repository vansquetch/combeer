export function Footer() {
  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid #111",
        padding: "32px 8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.2rem",
          color: "#333",
          letterSpacing: "0.1em",
        }}
      >
        combear pub
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.65rem",
          color: "#333",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        © 2025 · Bogotá D.C · Todos los derechos reservados
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.65rem",
          color: "#333",
          letterSpacing: "0.15em",
        }}
      >
        @combeer_pub · @haba_tonka_pa
      </span>
    </footer>
  );
}
