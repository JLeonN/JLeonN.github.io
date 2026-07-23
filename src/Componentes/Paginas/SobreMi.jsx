import { FaBrain, FaGraduationCap, FaWrench } from "react-icons/fa";

function SobreMi() {
  return (
    <section id="sobreMi" className="seccionPrincipal seccionSobreMi">
      <div className="contenedorPrincipal cuadriculaSobreMi">
        <div>
          <p className="etiquetaSeccion">Mi recorrido</p>
          <h2>Experiencia real para crear soluciones útiles</h2>
          <p className="introduccionSeccion">
            Antes de desarrollar software, aprendí a resolver problemas desde
            el trabajo técnico, la atención a las personas y la mejora diaria.
          </p>
        </div>
        <div className="historiaProfesional">
          <article>
            <FaWrench aria-hidden="true" />
            <div>
              <h3>Trabajo técnico y experiencia práctica</h3>
              <p>
                Trabajé más de cinco años en Motociclo, creciendo de armador a
                técnico y referente de servicio de bicicletas. Luego continué
                en Desceleste, en armado y repuestos de motos.
              </p>
            </div>
          </article>
          <article>
            <FaGraduationCap aria-hidden="true" />
            <div>
              <h3>Aprendizaje que suma perspectiva</h3>
              <p>
                Me formé en electrónica básica para bicicletas eléctricas y en
                publicidad y marketing en Brother Montevideo. Esa combinación
                me ayuda a pensar tanto en la solución como en quien la usa.
              </p>
              <a href="https://www.behance.net/JLeoNP" target="_blank" rel="noopener noreferrer">Ver trabajos en Behance</a>
            </div>
          </article>
          <article>
            <FaBrain aria-hidden="true" />
            <div>
              <h3>IA con criterio humano</h3>
              <p>
                La inteligencia artificial no reemplaza a las personas: potencia
                su experiencia, reduce tareas repetitivas y permite resolver
                mejor los problemas. La uso profesionalmente para analizar,
                crear, probar y mejorar soluciones.
              </p>
              <p className="textoAprendizaje">Sigo profundizando en Vue, Quasar y n8n para crear aplicaciones y automatizaciones más conectadas y útiles.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
