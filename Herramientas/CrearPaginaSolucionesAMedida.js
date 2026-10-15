const fs = require("fs");
const path = require("path");

const RUTA_COMPILACION = path.join(__dirname, "..", "build");
const RUTA_INICIO = path.join(RUTA_COMPILACION, "index.html");
const RUTA_SOLUCIONES = path.join(RUTA_COMPILACION, "solucionesamedida", "index.html");
const URL_SOLUCIONES = "https://jleonn.github.io/solucionesamedida/";
const URL_IMAGEN = "https://jleonn.github.io/Imagenes/VistaPreviaSolucionesAMedida.png";
const TITULO = "Soluciones a Medida | Software y automatización para negocios";
const DESCRIPCION = "Desarrollo herramientas y automatizaciones a medida para simplificar tareas, organizar información y mejorar procesos de tu negocio.";

const htmlInicio = fs.readFileSync(RUTA_INICIO, "utf8");
const patronTitulo = /<title>[^<]*<\/title>/i;
const patronDescripcion = /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?\s*>/i;

if (!patronTitulo.test(htmlInicio) || !patronDescripcion.test(htmlInicio)) {
  throw new Error("No se encontraron el título y la descripción en el HTML compilado.");
}

const metadatos = [
  `<link rel="canonical" href="${URL_SOLUCIONES}" />`,
  `<meta property="og:type" content="website" />`,
  `<meta property="og:locale" content="es_UY" />`,
  `<meta property="og:title" content="${TITULO}" />`,
  `<meta property="og:description" content="${DESCRIPCION}" />`,
  `<meta property="og:url" content="${URL_SOLUCIONES}" />`,
  `<meta property="og:image" content="${URL_IMAGEN}" />`,
  `<meta property="og:image:alt" content="Soluciones a Medida: software y automatización para negocios" />`,
].join("");

const htmlSoluciones = htmlInicio
  .replace(patronTitulo, `<title>${TITULO}</title>`)
  .replace(patronDescripcion, `<meta name="description" content="${DESCRIPCION}" />`)
  .replace("</head>", `${metadatos}</head>`);

fs.mkdirSync(path.dirname(RUTA_SOLUCIONES), { recursive: true });
fs.writeFileSync(RUTA_SOLUCIONES, htmlSoluciones, "utf8");

console.log("Página pública de Soluciones a Medida creada en la compilación.");
