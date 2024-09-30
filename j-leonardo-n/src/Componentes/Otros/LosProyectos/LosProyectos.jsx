import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Proyectos from "../../Paginas/Proyectos";
import Linea from "../Linea";

const LosProyectos = () => {
  return (
    <>
      {/* The Cowboys */}
      <section className="dimensiones dimensionesTarjeta">
        <Proyectos
          src="/Imagenes/Cowboys - 4.png"
          alt="Imagen del proyecto The Cowboys"
          titulo="The Cowboys"
          descripcion="The Cowboys es una página web creada en colaboración con amigos, donde participé en el desarrollo del front-end. La web asigna diariamente a un 'tonto del día' y un 'cowboys del día', permitiendo compartir los resultados por WhatsApp. Es un proyecto orientado a la diversión y el registro de estos roles dentro de nuestro grupo."
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
                <TbWorld />
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
        <Linea />
      </section>
    </>
  );
};

export default LosProyectos;
