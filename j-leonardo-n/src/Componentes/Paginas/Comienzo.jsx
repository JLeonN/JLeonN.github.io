import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Linea from "../Otros/Linea";
import LosProyectos from "../Otros/LosProyectos/LosProyectos";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, culpa perferendis! Commodi adipisci sed
              exercitationem ea, doloribus iusto, debitis, expedita possimus in
              unde molestiae facilis? Architecto alias praesentium delectus
              quas.
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
            <Linea />
          </div>
        </section>
      </div>
      <LosProyectos />
    </>
  );
}

export default Comienzo;
