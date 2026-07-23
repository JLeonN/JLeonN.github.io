import Contacto from "./Paginas/Contacto";
import Comienzo from "./Paginas/Comienzo";
import Servicios from "./Paginas/Servicios";
import SobreMi from "./Paginas/SobreMi";
import LosProyectos from "./Otros/LosProyectos/LosProyectos";

function Estructura() {
  return (
    <main>
      <Comienzo />
      <Servicios />
      <LosProyectos />
      <SobreMi />
      <Contacto />
    </main>
  );
}

export default Estructura;
