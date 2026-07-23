import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navegacionPrincipal" aria-label="Navegación principal">
      <div className="contenedorNavegacion">
        <a className="marcaNavegacion" href="#inicio" onClick={cerrarMenu}>
          <span>JL</span>
          <span className="marcaNavegacionTexto">Jorge Leonardo Núñez</span>
        </a>
        <button
          className="botonMenu"
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`enlacesNavegacion ${menuAbierto ? "abierto" : ""}`}>
          <a href="#servicios" onClick={cerrarMenu}>Servicios</a>
          <a href="#proyectos" onClick={cerrarMenu}>Proyectos</a>
          <a href="#sobreMi" onClick={cerrarMenu}>Sobre mí</a>
          <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
