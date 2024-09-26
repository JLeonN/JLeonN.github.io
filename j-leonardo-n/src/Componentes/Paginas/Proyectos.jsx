import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

function Proyectos() {
  return (
    <>
      <section className="dimensiones dimensionesTarjeta">
        <div className="tamañoTarjeta">
          <div className="tarjeta">
            <div className="tarjetaImagen">
              <img src="/Imagenes/Cowboys - 4.png" alt="Imagen The Cowboys" />
            </div>
            <h3 className="tarjetaTitulo">The Cowboys</h3>
            <div className="tarjetaIconos">
              <a
                href="https://github.com/JLeonN/the-cowboy-day"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaGithub />
                </i>
              </a>
              <a
                href="https://thecowboys.one/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <AiFillGoogleCircle />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Proyectos;
