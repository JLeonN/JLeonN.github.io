import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contacto() {
  return (
    <>
      <div className="dimensiones">
        <section id="contacto" className="contenedor tamaño">
          <div className="contacto">
            <h2 className="tituloContacto">CONTACTO</h2>
            <p className="texto">
              Podés contactarme a través de LinkedIn, enviarme un email o
              explorar mis proyectos en GitHub. Estoy disponible para charlar
              sobre nuevas oportunidades.
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

export default Contacto;
