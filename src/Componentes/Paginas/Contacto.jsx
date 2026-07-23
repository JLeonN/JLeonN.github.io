import { FaEnvelope, FaFileDownload, FaLinkedin } from "react-icons/fa";

function Contacto() {
  return (
    <section id="contacto" className="seccionContacto">
      <div className="contenedorPrincipal contenidoContacto">
        <div>
          <p className="etiquetaSeccion">¿Tenés una idea o una necesidad?</p>
          <h2>Conversemos sobre tu próxima aplicación</h2>
          <p>
            Estoy disponible para conocer tu proyecto y pensar una solución web,
            móvil, de escritorio o de automatización que realmente te sirva.
          </p>
        </div>
        <div className="accionesContacto">
          <a href="mailto:jorgebike.75@gmail.com"><FaEnvelope /> Enviar correo</a>
          <a href="https://www.linkedin.com/in/j-l-n-técnico/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="/C.V/C.V.Programación.pdf" download="CV - Jorge Leonardo Núñez.pdf"><FaFileDownload /> Descargar CV</a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
