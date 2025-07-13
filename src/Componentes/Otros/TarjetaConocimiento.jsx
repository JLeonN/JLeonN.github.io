import { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
      <p className="mensaje">Proyectos construidos con {tecnologia}</p>
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
        <div className="seccionSinProyectos">
          <p className="sinProyectos">
            Todavía no tengo un proyecto con {tecnologia}, pero podés
            contactarme y preguntarme cómo voy. Seguramente esté estudiándola{" "}
            {tecnologia}.
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
          </div>
        </div>
      )}
    </div>
  );
}

export default TarjetaConocimiento;
