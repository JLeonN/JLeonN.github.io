function Proyectos({ src, alt, titulo, descripcion, gitHub, enProduccion }) {
  return (
    <>
      <div className="tamañoTarjeta">
        <div className="tarjeta">
          <div className="tarjetaImagen">
            <img src={src} alt={alt} />
          </div>
          <h3 className="tarjetaTitulo">{titulo}</h3>
          <div className="descripcion">
            <p>{descripcion}</p>
          </div>
          <div className="tarjetaIconos">
            {gitHub}
            {enProduccion}
          </div>
        </div>
      </div>
    </>
  );
}

export default Proyectos;
