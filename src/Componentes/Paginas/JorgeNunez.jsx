import {
  FaExternalLinkAlt,
  FaFilePdf,
  FaLightbulb,
  FaPrint,
  FaRobot,
  FaTools,
  FaUserGraduate,
} from "react-icons/fa";

function JorgeNunez() {
  return (
    <main className="pagina-jorge-nunez">
      <section className="portada-jorge-nunez">
        <div className="contenido-portada-jorge-nunez">
          <p className="etiqueta-jorge-nunez">Propuesta de crecimiento</p>
          <h1>Jorge Núñez</h1>
          <p className="texto-principal-jorge-nunez">
            Una propuesta para aportar desde la inteligencia artificial, la
            capacitación interna, las automatizaciones y el desarrollo de
            software a medida.
          </p>
          <div className="acciones-jorge-nunez">
            <button type="button" onClick={() => window.print()}>
              <FaPrint />
              Imprimir propuesta
            </button>
            <a href="#certificados">
              <FaFilePdf />
              Ver certificados
            </a>
          </div>
        </div>
        <aside className="resumen-jorge-nunez">
          <span>9 años en la empresa</span>
          <span>IA desde 2023</span>
          <span>Software interno</span>
          <span>Automatizaciones</span>
        </aside>
      </section>
      <section className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaUserGraduate />
          <h2>Presentación personal</h2>
        </div>
        <p>
          Trabajo en la empresa desde hace casi nueve años. En ese recorrido
          conocí de cerca tareas, procesos, necesidades reales y formas de
          trabajo que muchas veces pueden mejorarse con herramientas simples,
          bien pensadas y adaptadas al día a día.
        </p>
        <p>
          Desde 2023 empecé a estudiar y usar inteligencia artificial de manera
          constante. Lo que comenzó como curiosidad se transformó en una línea de
          aprendizaje diario, probando herramientas, agentes, flujos de trabajo y
          formas prácticas de resolver problemas con más velocidad y mejor
          criterio.
        </p>
      </section>
      <section className="grilla-jorge-nunez">
        <article className="tarjeta-jorge-nunez">
          <FaRobot />
          <h2>IA aplicada al trabajo</h2>
          <p>
            Mi objetivo es ayudar a que la inteligencia artificial se use mejor
            dentro de la empresa: no solo como un chat para hacer preguntas, sino
            como una herramienta para analizar información, crear asistentes,
            documentar procesos y acompañar tareas repetitivas.
          </p>
        </article>
        <article className="tarjeta-jorge-nunez">
          <FaLightbulb />
          <h2>Capacitación interna</h2>
          <p>
            Me interesa enseñar a compañeros a usar IA con criterio: cómo pedir
            mejor, cómo revisar respuestas, cómo trabajar con agentes y cómo
            transformar una consulta suelta en un proceso útil para el equipo.
          </p>
        </article>
        <article className="tarjeta-jorge-nunez">
          <FaTools />
          <h2>Automatizaciones</h2>
          <p>
            Actualmente estoy aprendiendo n8n porque lo veo como una herramienta
            muy potente para conectar servicios, reducir tareas manuales y crear
            flujos que ahorren tiempo sin depender siempre de sistemas grandes.
          </p>
        </article>
      </section>
      <section className="bloque-destacado-jorge-nunez">
        <div>
          <p className="etiqueta-jorge-nunez">Software a medida</p>
          <h2>Bitácora II como ejemplo real</h2>
          <p>
            Bitácora II nació de una necesidad concreta del trabajo: modernizar
            el registro de pedidos y ubicaciones desde el celular. Al estar
            disponible en Android, se volvió práctica para usar en movimiento y
            permitió mejorar tareas reales con feedback directo de compañeros.
          </p>
          <p>
            Este tipo de desarrollo muestra una oportunidad clara: crear
            soluciones internas pequeñas, específicas y ajustadas a cada área,
            sin esperar siempre por sistemas externos o procesos largos.
          </p>
        </div>
        <div className="acciones-jorge-nunez">
          <a
            href="https://play.google.com/store/apps/details?id=bitacora.v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            Ver Bitácora II
          </a>
        </div>
      </section>
      <section className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaLightbulb />
          <h2>Ideas para explorar</h2>
        </div>
        <div className="lista-ideas-jorge-nunez">
          <p>
            Crear asistentes internos para consultar procedimientos, criterios de
            trabajo o información frecuente.
          </p>
          <p>
            Automatizar reportes, avisos, registros o tareas administrativas que
            hoy consumen tiempo operativo.
          </p>
          <p>
            Desarrollar prototipos rápidos para probar mejoras antes de invertir
            en una solución más grande.
          </p>
          <p>
            Capacitar a equipos en el uso responsable y práctico de inteligencia
            artificial.
          </p>
        </div>
      </section>
      <section id="certificados" className="bloque-jorge-nunez">
        <div className="encabezado-bloque-jorge-nunez">
          <FaFilePdf />
          <h2>Certificados</h2>
        </div>
        <p>
          Estos certificados acompañan un proceso de aprendizaje que sigue en
          movimiento. La inteligencia artificial cambia muy rápido, por eso mi
          foco es mantenerme actualizado y llevar ese conocimiento a casos
          prácticos.
        </p>
        <div className="certificados-jorge-nunez">
          <a
            href="/Documentos/CertificadoCursoIA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            Curso de IA
          </a>
          <a
            href="/Documentos/CertificadoDesarrolloIA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf />
            Desarrollo con IA
          </a>
        </div>
      </section>
      <section className="cierre-jorge-nunez">
        <h2>Próximos pasos</h2>
        <p>
          Estoy trabajando en nuevas ideas y prototipos, incluyendo un posible
          catálogo que podría mostrarse pronto. Esta propuesta busca abrir una
          conversación sobre cómo puedo aportar más valor desde la tecnología,
          la IA y el conocimiento real del trabajo diario.
        </p>
      </section>
    </main>
  );
}

export default JorgeNunez;
