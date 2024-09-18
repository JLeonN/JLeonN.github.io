import { useState } from "react";

function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="tamaño">
        <div className="navbarLogo">
          <div class="linea"></div>
        </div>
        <div className={`navbarLinks ${menuAbierto ? "activo" : ""}`}>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <a href="#education">Educación</a>
        </div>
        <div className="contenedorHamburguesa">
          <div className="navbarBoton" onClick={toggleMenu}>
            <span className="barra"></span>
            <span className="barra"></span>
            <span className="barra"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
