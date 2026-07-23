import Contacto from "./Paginas/Contacto";
import CasoBitacora from "./Paginas/CasoBitacora";
import Comienzo from "./Paginas/Comienzo";
import Servicios from "./Paginas/Servicios";
import SobreMi from "./Paginas/SobreMi";
import LosProyectos from "./Otros/LosProyectos/LosProyectos";

function Estructura() {
  return (
    <main>
      <Comienzo />
      <Servicios />
      <CasoBitacora />
      <LosProyectos />
      <SobreMi />
      <Contacto />
    </main>
  );
}

export default Estructura;
