import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Proyectos({
  src,
  alt,
  titulo,
  descripcion,
  gitHub,
  enProduccion,
  tecnologias = [],
}) {
  const [abierto, setAbierto] = useState(false);
  const enlaceGitHub = gitHub?.props?.href;
  const enlaceProduccion = enProduccion?.props?.href;

  const manejarClick = () => {
    setAbierto(!abierto);
  };

  return (
    <div
      className={`tarjetaProyecto ${abierto ? "abierta" : ""}`}
      onClick={manejarClick}
    >
      <div className="contenedorLogo">
        <img src={src} alt={alt} className="logoProyecto" />
        {!abierto && <h3 className="tituloProyecto">{titulo}</h3>}
      </div>

      {abierto && (
        <div className="contenidoProyecto">
          <h3 className="tituloExpandido">{titulo}</h3>
          <div className="liniaPro"></div>
          <div className="descripcionExpandida">
            <p>{descripcion}</p>
          </div>
          <div className="liniaPro"></div>
          <div className="tecnologiasUsadas">
            {tecnologias.map((tec, idx) => (
              <img
                key={idx}
                src={tec}
                alt="Tecnología usada"
                className="iconoTecnologia"
              />
            ))}
          </div>
          <div className="botonesProyecto">
            {enlaceGitHub && (
              <a href={enlaceGitHub} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Código
              </a>
            )}
            {enlaceProduccion && (
              <a
                href={enlaceProduccion}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbWorld /> Producción
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Proyectos;
