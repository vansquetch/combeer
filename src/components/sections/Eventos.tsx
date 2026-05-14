import { useInView } from "../../utils/functions";

export function Eventos() {
  const [ref, inView] = useInView();

  const events = [
    {
      date: "JUN",
      day: "06",
      title: "Jazz & Craft Night",
      desc: "Trío de jazz en vivo con maridaje de nuestras cervezas artesanales de temporada.",
      tag: "Música en vivo",
    },
    {
      date: "JUN",
      day: "13",
      title: "Stand Up Comedy",
      desc: "Una noche de risas con los mejores comediantes del circuito bogotano.",
      tag: "Comedy",
    },
    {
      date: "JUN",
      day: "20",
      title: "Noche Alemana",
      desc: "Celebración de la cultura cervecera alemana: salchichas, música y cervezas especiales.",
      tag: "Especial",
    },
    {
      date: "JUN",
      day: "28",
      title: "Sesión Acústica",
      desc: "Bandas emergentes de Bogotá en una noche íntima y artesanal.",
      tag: "Música en vivo",
    },
  ];

  return (
    <section id="eventos" style={{ background: "#000", padding: "120px 8vw" }}>
      <div ref={ref}>
        {/* Header */}
        <div
          className={`fade-up ${inView ? "visible" : ""} d1`}
          style={{ marginBottom: 80 }}
        >
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
            Próximos Eventos
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
            LO QUE
            <br />
            <span
              style={{ color: "transparent", WebkitTextStroke: "1.5px #fff" }}
            >
              SE VIENE
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
          }}
        >
          {events.map((ev, i) => (
            <div
              key={i}
              className={`event-card fade-up ${inView ? "visible" : ""} d${i + 1}`}
              style={{ padding: "40px 32px" }}
            >
              {/* Date */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3.5rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {ev.day}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#555",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {ev.date}
                </span>
              </div>

              {/* Tag */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#000",
                  background: "#fff",
                  padding: "3px 10px",
                  display: "inline-block",
                  marginBottom: 16,
                }}
              >
                {ev.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "#fff",
                  marginBottom: 12,
                  fontWeight: 700,
                }}
              >
                {ev.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                {ev.desc}
              </p>

              {/* Rule */}
              <div
                style={{
                  borderTop: "1px solid #1c1c1c",
                  marginTop: 32,
                  paddingTop: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#444",
                    letterSpacing: "0.15em",
                  }}
                >
                  CRA. 14 #77-30 · BOGOTÁ
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
