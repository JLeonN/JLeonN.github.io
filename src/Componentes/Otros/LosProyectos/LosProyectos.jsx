import Proyectos from "../../Paginas/Proyectos";

const proyectos = [
  {
    titulo: "Precio Justo",
    imagen: "/Imagenes/PrecioJusto-Icono.png",
    descripcion: "Aplicación web y móvil para comparar precios, escanear códigos de barras, gestionar listas de seguimiento y encontrar mejores ofertas.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    destacado: true,
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/PrecioJusto/#/" },
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=com.preciojusto.app" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/PrecioJusto" },
    ],
  },
  {
    titulo: "Bitácora II",
    imagen: "/Imagenes/Bitácora-II.png",
    descripcion: "App móvil para modernizar el registro de pedidos y ubicaciones, con escaneo, generación de Excel y mejoras guiadas por feedback real.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    destacado: true,
    enlaces: [
      { tipo: "web", etiqueta: "Ver proyecto", url: "https://jleonn.github.io/Bit-cora-2-App-1/#/" },
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=bitacora.v2" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Bit-cora-2-App-1" },
    ],
  },
  {
    titulo: "Ta-Te-Ti IA",
    imagen: "/Imagenes/Ta-Te-Ti512x512.png",
    descripcion: "Juego móvil con tres niveles de dificultad, lógica de juego avanzada, puntuación, rachas animadas y una interfaz optimizada para celular.",
    tecnologias: ["Vue", "Quasar", "Capacitor"],
    enlaces: [
      { tipo: "googlePlay", etiqueta: "Google Play", url: "https://play.google.com/store/apps/details?id=com.leotateti.tateti" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/TaTeTi" },
    ],
  },
  {
    titulo: "Pokédex",
    imagen: "/Imagenes/Pokeball.png",
    descripcion: "Aplicación web que consulta PokéAPI para buscar Pokémon y mostrar tipos, estadísticas y evoluciones de forma clara.",
    tecnologias: ["Vue", "JavaScript", "API"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Pokedex/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Pokedex" },
    ],
  },
  {
    titulo: "Cronómetro Web",
    imagen: "/Imagenes/CronómetroWeb.jpg",
    descripcion: "Herramienta web simple y accesible para medir tiempos con inicio, pausa y detención.",
    tecnologias: ["React", "JavaScript", "CSS"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Cronometro/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Cronometro" },
    ],
  },
  {
    titulo: "The Cowboys",
    imagen: "/Imagenes/Cowboys - 4.png",
    descripcion: "Proyecto colaborativo donde participé en el desarrollo del front-end de una web diaria y compartible para amigos.",
    tecnologias: ["React", "Bootstrap", "JavaScript"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://thecowboys.lol/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/the-cowboy-day" },
    ],
  },
  {
    titulo: "Bitácora",
    imagen: "/Imagenes/Bitácora.jpg",
    descripcion: "Programa de escritorio para registrar tareas, pedidos, incidencias y perfiles de compañeros en una computadora compartida.",
    tecnologias: ["React", "Electron", "JavaScript"],
    enlaces: [
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Bit-cora" },
    ],
  },
  {
    titulo: "Subscriptions Tracker",
    imagen: "/Imagenes/SubscriptionsTracker.jpg",
    descripcion: "Aplicación web para controlar suscripciones mensuales y conocer el presupuesto disponible con mayor claridad.",
    tecnologias: ["React", "JavaScript", "CSS"],
    enlaces: [
      { tipo: "web", etiqueta: "Ver web", url: "https://jleonn.github.io/Subscriptions-Tracker/" },
      { tipo: "github", etiqueta: "GitHub", url: "https://github.com/JLeonN/Subscriptions-Tracker" },
    ],
  },
];

function LosProyectos() {
  return (
    <section id="proyectos" className="seccionPrincipal seccionProyectos">
      <div className="contenedorPrincipal">
        <p className="etiquetaSeccion">Trabajo aplicado</p>
        <h2>Proyectos que resuelven problemas</h2>
        <p className="introduccionSeccion">
          Cada proyecto representa una necesidad, una idea o un aprendizaje
          llevado a una experiencia real y funcional.
        </p>
        <div className="grillaProyectos">
          {proyectos.map((proyecto) => <Proyectos key={proyecto.titulo} proyecto={proyecto} />)}
        </div>
      </div>
    </section>
  );
}

export default LosProyectos;
