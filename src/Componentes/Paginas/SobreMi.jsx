import React from "react";

function SobreMi() {
  return (
    <>
      <section className="dimensiones">
        <dir className="contacto">
          <h2 id="sobreMi" className="tituloContacto tituloSobreMi">
            Sobre mi
          </h2>
          <div className="texto">
            <p>
            Soy Leo, un apasionado de la tecnología. Me formé en programación
            web con HTML, CSS, JavaScript y React, y con el tiempo fui ampliando
            mi camino hacia soluciones a medida para web, Android y Windows.
            </p>
            <p>
            Actualmente estoy profundizando en Vue y Quasar, mis tecnologías
            favoritas para crear aplicaciones prácticas, y también estoy
            aprendiendo n8n para sumar automatizaciones útiles cuando un proceso
            lo necesita.
            </p>
            <p>
            Un ejemplo importante de ese camino es Bitácora II, una aplicación
            móvil que nació de una necesidad real de trabajo. Al estar disponible
            en el celular, se volvió mucho más útil para el día a día, fue
            adoptada por compañeros y sigue mejorando con su feedback. Esa
            experiencia me enseñó a escuchar, iterar y convertir ideas simples
            en herramientas concretas.
            </p>
            <p>
            Además, soy un entusiasta del mundo de las bicicletas con amplia
            experiencia técnica. Trabajé más de 5 años en Motociclo, avanzando
            de armador a técnico y siendo el referente del área de servicio
            técnico de bicicletas. Tras el cierre de la empresa, me uní a
            Desceleste, donde trabajé principalmente como armador antes de
            encontrar mi lugar en el área de repuestos de motos. Buscando
            siempre crecer, estudié electrónica básica para especializarme en
            bicicletas eléctricas y cursé publicidad y marketing en Brother
            Montevideo, logrando reconocimientos en eventos de la industria.
            Puedes ver algunos de mis trabajos en{" "}
            <span>
              <a
                className="behance"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/JLeoNP"
              >
                mi carpeta de Behance.
              </a>
            </span>
            </p>
          </div>
        </dir>
      </section>
    </>
  );
}

export default SobreMi;
