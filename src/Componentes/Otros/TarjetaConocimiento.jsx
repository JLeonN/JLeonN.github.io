import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function TarjetaConocimiento({ tecnologia, proyectos, cerrar }) {
  const tarjetaRef = useRef(null);

  // Cerrar la tarjeta al hacer clic fuera
  useEffect(() => {
    function manejarClicAfuera(e) {
      if (tarjetaRef.current && !tarjetaRef.current.contains(e.target)) {
        cerrar();
      }
    }
    document.addEventListener("mousedown", manejarClicAfuera);
    return () => document.removeEventListener("mousedown", manejarClicAfuera);
  }, [cerrar]);

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.tecnologias.includes(tecnologia)
  );

  return (
    <div className="tarjetaConocimiento" ref={tarjetaRef}>
      <p className="mensaje">
        Proyectos construidos con {tecnologia}
      </p>
      {proyectosFiltrados.length > 0 ? (
        proyectosFiltrados.map((proyecto, index) => (
          <div key={index} className="contenidoTarjetaConocimiento">
            <div className="infoProyecto">
              <img
                src={proyecto.src}
                alt={`Logo de ${proyecto.titulo}`}
                className="iconoProyecto"
              />
              <span className="tituloProyectoTecnologia">
                {proyecto.titulo}
              </span>
            </div>
            <div className="botonesProyecto">
              {proyecto.gitHub && (
                <a
                  href={proyecto.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Código
                </a>
              )}
              {proyecto.enProduccion && (
                <a
                  href={proyecto.enProduccion}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorld /> Producción
                </a>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="sinProyectos">No hay proyectos con esta tecnología.</p>
      )}
    </div>
  );
}

export default TarjetaConocimiento;
