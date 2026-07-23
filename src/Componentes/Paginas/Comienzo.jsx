import { FaArrowDown, FaFileDownload, FaLinkedin } from "react-icons/fa";

function Comienzo() {
  return (
    <section id="inicio" className="seccionPortada">
      <div className="resplandorPortada resplandorPortadaUno" />
      <div className="resplandorPortada resplandorPortadaDos" />
      <div className="contenedorPrincipal contenidoPortada">
        <div className="presentacionPortada">
          <p className="etiquetaPortada">Desarrollo de software a medida</p>
          <h1>Jorge Leonardo <span>Núñez</span></h1>
          <p className="descripcionPortada">
            Creo aplicaciones a medida para convertir necesidades reales en
            soluciones útiles: páginas web, aplicaciones móviles y herramientas
            de escritorio.
          </p>
          <p className="detallePortada">
            Escucho el problema, propongo una solución y la construyo para que
            sea práctica, clara y preparada para crecer.
          </p>
          <div className="accionesPortada">
            <a
              className="botonPrincipal"
              href="https://www.linkedin.com/in/j-l-n-técnico/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> Contactar por LinkedIn
            </a>
            <a
              className="botonSecundario"
              href="/C.V/C.V.Programación.pdf"
              download="CV - Jorge Leonardo Núñez.pdf"
            >
              <FaFileDownload /> Ver mi CV
            </a>
          </div>
        </div>
        <div className="marcoFotoPerfil">
          <div className="orbitaFoto" />
          <img src="/Imagenes/FotoPerfil.jpeg" alt="Jorge Leonardo Núñez" />
          <p>Web · Móvil · Escritorio</p>
        </div>
      </div>
      <a className="indicadorDesplazamiento" href="#servicios" aria-label="Ir a servicios">
        <span>Explorar</span>
        <FaArrowDown />
      </a>
    </section>
  );
}

export default Comienzo;
