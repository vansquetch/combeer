import { MarqueeDivider } from "./components/MarqueeDivider";
import { Contacto } from "./components/sections/Contacto";
import { Eventos } from "./components/sections/Eventos";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Nav } from "./components/sections/Nav";
import { Promociones } from "./components/sections/Promociones";

function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <MarqueeDivider />
      <Eventos />
      <MarqueeDivider />
      <Promociones />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
