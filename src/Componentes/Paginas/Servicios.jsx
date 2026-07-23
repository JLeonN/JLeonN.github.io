import { FaDesktop, FaMobileAlt, FaRobot, FaWindowMaximize } from "react-icons/fa";

const servicios = [
  {
    titulo: "Aplicaciones web",
    descripcion: "Sitios y herramientas web rápidas, claras y adaptadas a cada necesidad.",
    icono: FaWindowMaximize,
  },
  {
    titulo: "Apps móviles",
    descripcion: "Aplicaciones Android pensadas para acompañar el trabajo y el uso diario.",
    icono: FaMobileAlt,
  },
  {
    titulo: "Escritorio",
    descripcion: "Herramientas específicas para ordenar tareas, registros y procesos internos.",
    icono: FaDesktop,
  },
  {
    titulo: "Automatizaciones",
    descripcion: "Flujos con n8n para reducir tareas repetitivas sin perder control del proceso.",
    icono: FaRobot,
  },
];

function Servicios() {
  return (
    <section id="servicios" className="seccionPrincipal seccionServicios">
      <div className="contenedorPrincipal">
        <p className="etiquetaSeccion">Lo que puedo construir</p>
        <h2>Soluciones hechas para tu necesidad</h2>
        <p className="introduccionSeccion">
          No parto de una plantilla: entiendo el objetivo y desarrollo la
          herramienta que mejor se adapta a tu forma de trabajar.
        </p>
        <div className="grillaServicios">
          {servicios.map(({ titulo, descripcion, icono: Icono }) => (
            <article className="tarjetaServicio" key={titulo}>
              <Icono aria-hidden="true" />
              <h3>{titulo}</h3>
              <p>{descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
