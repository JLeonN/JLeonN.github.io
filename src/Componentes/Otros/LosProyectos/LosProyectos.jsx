import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Proyectos from "../../Paginas/Proyectos";

const LosProyectos = () => {
  return (
    <>
      <section
        id="proyectos"
        className="dimensiones dimensionesTarjeta contacto"
      >
        <h2 className="tituloContacto">Proyectos</h2>

        {/* Cronómetro App */}
        <Proyectos
          src="/Imagenes/CronómetroApp.png"
          alt="Imagen del proyecto Cronómetro App"
          titulo="Cronómetro App"
          descripcion="El Cronómetro App es una aplicación móvil desarrollada en React Native que permite medir tiempos con precisión y eficiencia. Ofrece funciones como inicio, pausa y detención, lo que facilita el control del cronómetro. Su interfaz es limpia y amigable, asegurando una experiencia de usuario sencilla y accesible para cualquier persona."
          gitHub={
            <a
              href="https://github.com/JLeonN/Cronometro-APP"
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
              href="https://play.google.com/store/apps/details?id=com.yojorge.Nombredemiproyecto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <TbWorld />
              </i>
            </a>
          }
          tecnologias={[
            "/Imagenes/IconosDeLenguajes/React-Native.png",
            "/Imagenes/IconosDeLenguajes/Expo.png",
            "/Imagenes/IconosDeLenguajes/JavaScript.png",
            "/Imagenes/IconosDeLenguajes/CSS.png",
            "/Imagenes/IconosDeLenguajes/HTML.png",
          ]}
        />

        {/* Cronómetro Web */}
        <Proyectos
          src="/Imagenes/CronómetroWeb.jpg"
          alt="Imagen del proyecto Cronómetro Web"
          titulo="Cronómetro Web"
          descripcion="Este Cronómetro Web es una aplicación web desarrollada en React que permite medir tiempos con precisión y eficiencia. Con funcionalidades como inicio, pausa y detención, es fácil controlar el cronómetro. Su diseño es limpio y accesible, lo que garantiza que cualquier usuario pueda utilizarla sin dificultades."
          gitHub={
            <a
              href="https://github.com/JLeonN/Cronometro"
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
              href="https://jleonn.github.io/Cronometro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <TbWorld />
              </i>
            </a>
          }
          tecnologias={[
            "/Imagenes/IconosDeLenguajes/React.png",
            "/Imagenes/IconosDeLenguajes/JavaScript.png",
            "/Imagenes/IconosDeLenguajes/CSS.png",
            "/Imagenes/IconosDeLenguajes/HTML.png",
          ]}
        />

        {/* The Cowboys */}
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
          tecnologias={[
            "/Imagenes/IconosDeLenguajes/React.png",
            "/Imagenes/IconosDeLenguajes/Bootstrap.png",
            "/Imagenes/IconosDeLenguajes/JavaScript.png",
            "/Imagenes/IconosDeLenguajes/CSS.png",
            "/Imagenes/IconosDeLenguajes/HTML.png",
          ]}
        />

        {/* Bitácora */}
        <Proyectos
          src="/Imagenes/Bitácora.jpg"
          alt="Imagen del proyecto Bitácora"
          titulo="Bitácora"
          descripcion="Bitácora es un programa de escritorio diseñado para registrar mis tareas diarias en el trabajo. Permite llevar un control de la cantidad de pedidos realizados, ítems rechazados, y facilita el uso de perfiles para compañeros que comparten la misma computadora. También incluye la opción de agregar notas sobre incidencias en los pedidos."
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
          tecnologias={[
            "/Imagenes/IconosDeLenguajes/React-Electron.png",
            "/Imagenes/IconosDeLenguajes/JavaScript.png",
            "/Imagenes/IconosDeLenguajes/CSS.png",
            "/Imagenes/IconosDeLenguajes/HTML.png",
          ]}
        />

        {/* Subscriptions Tracker */}
        <Proyectos
          src="/Imagenes/SubscriptionsTracker.jpg"
          alt="Imagen del proyecto Subscriptions Tracker"
          titulo="Subscriptions Tracker"
          descripcion="Este proyecto se centra en gestionar suscripciones mensuales como Netflix, Disney y HBO. El usuario ingresa el dinero disponible y el costo de sus suscripciones, y la aplicación calcula cuánto resta del presupuesto inicial, ayudando a tener un control claro de los gastos."
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
          enProduccion={
            <a
              href="https://jleonn.github.io/Subscriptions-Tracker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <TbWorld />
              </i>
            </a>
          }
          tecnologias={[
            "/Imagenes/IconosDeLenguajes/React.png",
            "/Imagenes/IconosDeLenguajes/JavaScript.png",
            "/Imagenes/IconosDeLenguajes/CSS.png",
            "/Imagenes/IconosDeLenguajes/HTML.png",
          ]}
        />
      </section>
    </>
  );
};

export default LosProyectos;
