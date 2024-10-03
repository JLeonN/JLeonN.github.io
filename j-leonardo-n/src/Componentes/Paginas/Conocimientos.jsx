import Linea from "../Otros/Linea";

const Conocimientos = () => {
  return (
    <>
      <section id="conocimientos" className="dimensiones">
        <div className="conocimientos">
          <h2 className="tituloConocimientos">CONOCIMIENTOS</h2>
          <div className="iconosLenguajes">
            <img
              src="/Imagenes/IconosDeLenguajes/HTML.png"
              alt="HTML5"
              className="icono"
            />
            <img
              src="/Imagenes/IconosDeLenguajes/CSS.png"
              alt="CSS3"
              className="icono"
            />
            <img
              src="/Imagenes/IconosDeLenguajes/JavaScript.png"
              alt="JavaScript"
              className="icono"
            />
            <img
              src="/Imagenes/IconosDeLenguajes/React.png"
              alt="React"
              className="icono"
            />
            <img
              src="/Imagenes/IconosDeLenguajes/Bootstrap.png"
              alt="Bootstrap"
              className="icono"
            />
          </div>
        </div>
      </section>
      <div className="dimensiones">
        <Linea />
      </div>
    </>
  );
};

export default Conocimientos;
