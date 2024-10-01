import Linea from "../Otros/Linea";

const Conocimientos = () => {
  return (
    <>
      <section id="conocimientos" className="dimensiones">
        <div className="conocimientos">
          <h2 className="tituloConocimientos">CONOCIMIENTOS</h2>
          <div className="iconosLenguajes">
            <img src="ruta-html5.png" alt="HTML5" className="icono" />
            <img src="ruta-css3.png" alt="CSS3" className="icono" />
            <img src="ruta-js.png" alt="JavaScript" className="icono" />
            <img src="ruta-react.png" alt="React" className="icono" />
            <img src="ruta-bootstrap.png" alt="Bootstrap" className="icono" />
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
