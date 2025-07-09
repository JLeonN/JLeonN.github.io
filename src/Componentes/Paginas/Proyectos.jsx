function Proyectos({ src, alt, titulo, descripcion, gitHub, enProduccion }) {
  const enlaceProduccion = enProduccion?.props?.href;
  const enlaceGitHub = gitHub?.props?.href;

  const manejarClick = () => {
    const enlaceDestino = enlaceProduccion || enlaceGitHub;
    if (enlaceDestino) {
      window.open(enlaceDestino, "_blank");
    }
  };

  return (
    <div
      className="tamañoTarjeta"
      onClick={manejarClick}
      style={{ cursor: "pointer" }}
    >
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
  );
}

export default Proyectos;
