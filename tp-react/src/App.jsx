import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const nombreSitio = "Mi Sitio";

  const links = [
    "Inicio",
    "Videojuegos",
    "Contacto"
  ];

  const titulo = "Videojuegos";

  const descripcion =
    "Los mejores videojuegos para disfrutar y divertirse.";

  const items = [
    "Minecraft",
    "GTA V",
    "FIFA 26"
  ];

  const textoFooter = "Página reservada con derechos de autor";

  const anio = "2026";

  return (
    <>
      <Navbar
        titulo={nombreSitio}
        links={links}
      />

      <Main
        titulo={titulo}
        descripcion={descripcion}
        items={items}
      />

      <Footer
        texto={textoFooter}
        anio={anio}
      />
    </>
  );
}

export default App;