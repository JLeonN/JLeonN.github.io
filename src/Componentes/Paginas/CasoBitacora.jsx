import { FaArrowRight, FaBarcode, FaFileExcel, FaPeopleArrows } from "react-icons/fa";

function CasoBitacora() {
  return (
    <section className="seccionPrincipal seccionCasoBitacora">
      <div className="contenedorPrincipal cuadriculaCasoBitacora">
        <div className="contenidoCasoBitacora">
          <p className="etiquetaSeccion">Caso real de mejora continua</p>
          <h2>Bitácora II: una herramienta que nació desde el trabajo diario</h2>
          <p>
            Bitácora II surgió de una necesidad concreta: modernizar el registro
            de pedidos y ubicaciones para que el equipo pudiera trabajar desde
            el celular, con menos pasos manuales y mejor información.
          </p>
          <a
            className="enlaceCasoBitacora"
            href="https://jleonn.github.io/Bit-cora-2-App-1/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto <FaArrowRight />
          </a>
        </div>
        <div className="resultadosCasoBitacora">
          <article>
            <FaBarcode aria-hidden="true" />
            <div>
              <span>Problema</span>
              <h3>Registro operativo lento</h3>
              <p>Los pedidos y ubicaciones requerían más pasos y trabajo manual del necesario.</p>
            </div>
          </article>
          <article>
            <FaFileExcel aria-hidden="true" />
            <div>
              <span>Solución</span>
              <h3>App móvil conectada al proceso</h3>
              <p>Incorporé escaneo, generación rápida de Excel y compatibilidad con lectores Bluetooth ya disponibles.</p>
            </div>
          </article>
          <article>
            <FaPeopleArrows aria-hidden="true" />
            <div>
              <span>Mejora continua</span>
              <h3>Feedback convertido en mejoras</h3>
              <p>La herramienta sigue evolucionando a partir del uso real y las necesidades de los compañeros.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CasoBitacora;
