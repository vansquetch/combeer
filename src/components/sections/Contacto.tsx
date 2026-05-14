import { useState } from "react";
import { useInView } from "../../utils/functions";

export function Contacto() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);

  const socials = [
    {
      label: "@COMBEER_PUB",
      href: "https://instagram.com/combeer_pub",
      icon: "IG",
    },
    {
      label: "@HABA_TONKA_PA",
      href: "https://instagram.com/haba_tonka_pa",
      icon: "IG",
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        background: "#000",
        padding: "120px 8vw",
        borderTop: "1px solid #111",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left col */}
        <div>
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
              Contacto
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#fff",
                lineHeight: 0.9,
                margin: "0 0 48px",
              }}
            >
              HABLEMOS
            </h2>
          </div>

          <div
            className={`fade-up ${inView ? "visible" : ""} d2`}
            style={{ marginBottom: 48 }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              ¿Quieres reservar para un evento privado,
              <br />o simplemente pasarte a tomar una pinta?
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  color: "#444",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Ubicación
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                Cra. 14 #77-30 · Bogotá D.C
              </span>
            </div>
          </div>

          {/* Socials */}
          <div
            className={`fade-up ${inView ? "visible" : ""} d3`}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: "#444",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Redes Sociales
            </span>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.75rem",
                    color: "#555",
                    background: "#111",
                    padding: "2px 6px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.icon}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right col: form */}
        <div className={`fade-up ${inView ? "visible" : ""} d2`}>
          {!sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <label
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Nombre
                </label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Correo
                </label>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    color: "#444",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  className="contact-input"
                  rows={4}
                  placeholder="¿En qué te podemos ayudar?"
                  style={{ resize: "none" }}
                />
              </div>
              <div>
                <button className="send-btn" onClick={() => setSent(true)}>
                  Enviar mensaje
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 300,
              }}
            >
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3rem",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                ¡Gracias!
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#666",
                  marginTop: 16,
                }}
              >
                Te contactamos pronto. Mientras tanto, una pinta te espera.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
