import { useState } from "react";
import TarjetaConocimiento from "../Otros/TarjetaConocimiento";
import proyectos from "../Otros/LosProyectos/proyectos";

const iconos = [
  {
    nombre: "React",
    src: "/Imagenes/IconosDeLenguajes/React.png",
  },
  {
    nombre: "React Native",
    src: "/Imagenes/IconosDeLenguajes/React-Native.png",
  },
  {
    nombre: "React Electron",
    src: "/Imagenes/IconosDeLenguajes/React-Electron.png",
  },
  {
    nombre: "Vue",
    src: "/Imagenes/IconosDeLenguajes/Vue.png",
  },
  {
    nombre: "Expo",
    src: "/Imagenes/IconosDeLenguajes/Expo.png",
  },
  {
    nombre: "JavaScript",
    src: "/Imagenes/IconosDeLenguajes/JavaScript.png",
  },
  {
    nombre: "CSS3",
    src: "/Imagenes/IconosDeLenguajes/CSS.png",
  },
  {
    nombre: "HTML5",
    src: "/Imagenes/IconosDeLenguajes/HTML.png",
  },
  {
    nombre: "Bootstrap",
    src: "/Imagenes/IconosDeLenguajes/Bootstrap.png",
  },
];

const Conocimientos = () => {
  const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState(null);

  const handleIconClick = (nombre) => {
    setTecnologiaSeleccionada(
      tecnologiaSeleccionada === nombre ? null : nombre
    );
  };

  return (
    <>
      <section id="conocimientos" className="dimensiones">
        <div className="conocimientos">
          <h2 className="tituloConocimientos">CONOCIMIENTOS</h2>
          <div className="iconosLenguajes">
            {iconos.map((icono) => (
              <div key={icono.nombre} style={{ position: "relative" }}>
                <img
                  src={icono.src}
                  alt={icono.nombre}
                  title={icono.nombre}
                  className="icono"
                  style={{
                    border:
                      tecnologiaSeleccionada === icono.nombre
                        ? "3px solid var(--Hover)"
                        : "none",
                    borderRadius: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleIconClick(icono.nombre)}
                />
                {tecnologiaSeleccionada === icono.nombre && (
                  <div
                    style={{
                      position: "absolute",
                      top: "130px",
                      left: 0,
                      width: "100%",
                      zIndex: 10,
                    }}
                  >
                    <TarjetaConocimiento
                      tecnologia={icono.nombre}
                      proyectos={proyectos}
                      cerrar={() => setTecnologiaSeleccionada(null)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Conocimientos;
