import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Comienzo() {
  return (
    <>
      <div className="dimensiones">
        <section className="contenedor tamaño sobreMi">
          <div className="fotoPerfil">
            <img src="/Imagenes/Estrella.jpg" alt="Foto del perfil" />
          </div>
          <div className="detallesPerfil">
            <h1 className="titulo">J.Leonardo.N</h1>
            <p>
              Hola, gracias por visitar mi página web. Soy Leo, desarrollador
              web con experiencia en HTML, CSS, JavaScript y React. Estoy
              interesado en formar parte de su equipo y aportar soluciones
              creativas y eficientes.
            </p>
            <div className="iconosSociales">
              <a href="mailto:jorgebike.75@gmail.com">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/JLeonN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/j-l-n-técnico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Comienzo;
