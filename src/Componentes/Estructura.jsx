import Comienzo from "./Paginas/Comienzo";
import Conocimientos from "./Paginas/Conocimientos";
import LosProyectos from "../Componentes/Otros/LosProyectos/LosProyectos";
import Contacto from "./Paginas/Contacto";
import Linea from "./Otros/Linea";
import SobreMi from "./Paginas/SobreMi";

function Estructura() {
  return (
    <>
      <Comienzo />
      <div className="dimensiones">
        <Linea />
      </div>
      <LosProyectos />
      <div className="dimensiones">
        <Linea />
      </div>
      <Conocimientos />
      <div className="dimensiones">
        <Linea />
      </div>
      <SobreMi />
      <div className="dimensiones">
        <Linea />
      </div>
      <Contacto />
    </>
  );
}

export default Estructura;
