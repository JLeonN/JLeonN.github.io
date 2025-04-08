import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

function Comienzo() {
  return (
    <>
      <div className="dimensiones">
        <section className="contenedor tamaño sobreMi">
          <div className="fotoPerfil">
            <img src="/Imagenes/FotoPerfil.jpeg" alt="Foto del perfil" />
          </div>
          <div className="detallesPerfil">
            <h1 className="titulo">Leonardo Núñez</h1>
            <p>
              Hola, gracias por visitar mi página web. Soy Leo, desarrollador
              web con experiencia en HTML, CSS, JavaScript y React. Estoy
              interesado en formar parte de su equipo y aportar soluciones
              creativas y eficientes.
            </p>
            <div className="iconosSociales">
              <a href="mailto:jorgebike.75@gmail.com" title="Envíame un correo">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/JLeonN"
                target="_blank"
                rel="noopener noreferrer"
                title="Visita mi GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/j-l-n-técnico/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visita mi perfil en LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="C.V/C.V.Programación.pdf"
                download="C.V - Leonardo Núñez.pdf"
                title="Descarga mi C.V."
              >
                <FaFileDownload />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Comienzo;
