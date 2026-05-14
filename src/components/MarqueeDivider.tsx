export function MarqueeDivider() {
  const items = [
    "CRAFT BEER",
    "·",
    "MÚSICA EN VIVO",
    "·",
    "STAND UP COMEDY",
    "·",
    "EVENTOS",
    "·",
    "BOGOTÁ",
    "·",
  ];
  const repeated = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        padding: "16px 0",
        background: "#000",
      }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "0.9rem",
              color: i % 2 === 1 ? "#444" : "#888",
              letterSpacing: "0.2em",
              marginRight: 32,
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
