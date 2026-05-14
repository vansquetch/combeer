import { useInView } from "../../utils/functions";

export function Promociones() {
  const [ref, inView] = useInView();

  const promos = [
    {
      label: "Comida + Bebida",
      title: "Sandwich Focaccia\n+ Pinta",
      price: "$31.900",
      desc: "Pan focaccia, jamón de pierna, roastbeef, queso & salsa pesto con una pinta de cerveza artesanal.",
    },
    {
      label: "Comida + Bebida",
      title: "Salchicha Alemana\n+ Pinta",
      price: "$34.900",
      desc: "Tu elección de salchicha alemana (Gruyere, Berner o Nürnberger) con una pinta artesanal.",
    },
    {
      label: "Para Compartir",
      title: "Picada Deutch\n+ Jarra",
      price: "$99.000",
      desc: "Mix de 3 salchichas alemanas, papas doradas y salsas de la casa + jarra de 1.6L.",
    },
    {
      label: "Craft Beer",
      title: "Golden Ale\nPinta 450ml",
      price: "$15.000",
      desc: "ABV 4.5% · Rubia, refrescante, notas a cáscara de naranja, bajo amargor. La entrada perfecta.",
    },
  ];

  return (
    <section
      id="promos"
      style={{ background: "#050505", padding: "120px 8vw" }}
    >
      <div ref={ref}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div className={`fade-up ${inView ? "visible" : ""} d1`}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.4em",
                color: "#555",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Promociones
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#fff",
                lineHeight: 0.9,
                margin: 0,
              }}
            >
              MEJOR
              <br />
              <span
                style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}
              >
                PRECIO
              </span>
            </h2>
          </div>
          <p
            className={`fade-up ${inView ? "visible" : ""} d2`}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#555",
              maxWidth: 300,
              lineHeight: 1.7,
            }}
          >
            Maridajes pensados para que disfrutes más con menos.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
          }}
        >
          {promos.map((p, i) => (
            <div
              key={i}
              className={`promo-card fade-up ${inView ? "visible" : ""} d${i + 1}`}
              style={{
                padding: "40px 28px",
                background: i === 2 ? "#fff" : "#050505",
                color: i === 2 ? "#000" : "#fff",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: i === 2 ? "#888" : "#555",
                  marginBottom: 24,
                }}
              >
                {p.label}
              </p>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  lineHeight: 1.05,
                  marginBottom: 16,
                  whiteSpace: "pre-line",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: i === 2 ? "#555" : "#666",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  borderTop: `1px solid ${i === 2 ? "#ddd" : "#1c1c1c"}`,
                  paddingTop: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2.2rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className={`fade-up ${inView ? "visible" : ""} d4`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            color: "#333",
            marginTop: 32,
            letterSpacing: "0.05em",
          }}
        >
          * Precios sujetos a cambio sin previo aviso. Consulta disponibilidad.
        </p>
      </div>
    </section>
  );
}
