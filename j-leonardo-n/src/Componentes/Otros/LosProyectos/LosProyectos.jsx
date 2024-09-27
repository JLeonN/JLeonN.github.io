import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import Proyectos from "../../Paginas/Proyectos";

const LosProyectos = () => {
  return (
    <>
      {/* The Cowboys */}
      <section className="dimensiones dimensionesTarjeta">
        <Proyectos
          src="/Imagenes/Cowboys - 4.png"
          alt="Imagen del proyecto The Cowboys"
          titulo="The Cowboys"
          descripcion="hola soy un proyecto"
          gitHub={
            <a
              href="https://github.com/JLeonN/the-cowboy-day"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaGithub />
              </i>
            </a>
          }
          enProduccion={
            <a
              href="https://thecowboys.one/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <AiFillGoogleCircle />
              </i>
            </a>
          }
        />

        {/* Bitácora */}
        <Proyectos
          src="/Imagenes/Bitácora.jpg"
          alt="Imagen del proyecto Bitácora"
          titulo="Bitácora"
          descripcion="hola soy un proyecto"
          gitHub={
            <a
              href="https://github.com/JLeonN/Bit-cora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaGithub />
              </i>
            </a>
          }
        />
        {/* Subscriptions Tracker */}
        <Proyectos
          src="/Imagenes/SubscriptionsTracker.jpg"
          alt="Imagen del proyecto Subscriptions Tracker"
          titulo="Subscriptions Tracker"
          descripcion="hola soy un proyecto"
          gitHub={
            <a
              href="https://github.com/JLeonN/Subscriptions-Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaGithub />
              </i>
            </a>
          }
        />
      </section>
    </>
  );
};

export default LosProyectos;
