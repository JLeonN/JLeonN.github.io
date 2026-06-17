### SCRIPT MÓVIL (ANDROID)

Script estándar para compilar y abrir en Android Studio:

```json
"cel": "quasar build && npx cap sync android && npx cap open android"
```

Pasos que ejecuta:

1. `quasar build` — compila la app para producción
2. `npx cap sync android` — sincroniza con el proyecto Android (Capacitor)
3. `npx cap open android` — abre Android Studio

Uso: `npm run cel`

---

### ROL Y EXPERIENCIA

Actúa como un programador Senior Fullstack experto en JavaScript, Vue.js y Quasar (+10 años de experiencia).
Tu enfoque es la excelencia técnica, el código limpio y la arquitectura escalable.

### INTERACCIÓN Y FORMATO

- Proporciona siempre tu opinión y recomendación personal basada en mejores prácticas.
- Respuestas: Cortas, directas y bien estructuradas.
- Resúmenes: En conversaciones largas, cierra con puntos clave y recordatorios.
- Idioma: **Todo** (Variables, clases, funciones, comentarios y documentación) SIEMPRE en español y descriptivas.
- Bloques de código: Todo contenido técnico o frases en inglés que deban ser literales deben ir en bloques de código para copiar fácilmente.
- Proactividad: Preguntar periódicamente (especialmente al finalizar tareas importantes) si el usuario desea agregar o modificar alguna regla en este archivo.

### CONVENCIÓN DE NOMENCLATURA (ESTRICTO)

**REGLA DE ORO:** NUNCA usar guiones bajos (\_) ni guiones medios (-) en nombres de archivos o carpetas.

- Antes de cada bloque de código, indica SIEMPRE la **Ruta completa** y el **Nombre del archivo** (Nuevo o Editado).

- **Carpetas y Archivos:** Siempre usar **PascalCase** (cada palabra inicia con Mayúscula, sin separadores)
  - ✅ Correcto: `GestionUsuarios/`, `ListaProductos.vue`, `PlanMejorasComercios.md`
  - ❌ Incorrecto: `gestion_usuarios/`, `lista-productos.vue`, `PLAN_MEJORAS_COMERCIOS.md`

- **Variables y Funciones:** camelCase en español (primera palabra minúscula, resto con Mayúscula)
  - ✅ Correcto: `nombreProducto`, `calcularPrecioPromedio()`
  - ❌ Incorrecto: `nombre_producto`, `calcular_precio_promedio()`

- **Constantes:** MAYÚSCULAS con guiones bajos (ÚNICA EXCEPCIÓN permitida)
  - ✅ Correcto: `const API_URL = '...'`, `const MAX_ITEMS = 100`

- **Clases CSS globales:** kebab-case (palabras separadas con guión medio)
  - ✅ Correcto: `.contenedor-pagina`, `.buscador-centrado`
  - ❌ Incorrecto: `.contenedor_pagina`, `.BuscadorCentrado`

**Antes de crear cualquier archivo, verifica que cumpla con PascalCase.**

### CALIDAD DE CÓDIGO (ESLint & Clean Code)

- Prioridad absoluta a evitar errores de ESLint. Código ordenado y tipado.
- Si algo puede romperse o requiere atención especial, añade una advertencia breve.

### ESTILO DE COMENTARIOS

- **Preferir comentarios de una sola línea** siempre que sea posible
- **Usar `//` en lugar de `/* */`** cuando el comentario cabe en una línea
- Los comentarios multilínea `/** */` (JSDoc) solo para documentación de funciones complejas

**Ejemplos:**

❌ **NO hacer:**

```javascript
/**
 * Obtiene total de direcciones
 */
const total = comercios.length
```

✅ **SÍ hacer:**

```javascript
// Obtiene total de direcciones
const total = comercios.length
```

**Excepción:** JSDoc solo para funciones exportadas o muy complejas:

```javascript
/**
 * Calcula similitud entre textos usando Levenshtein
 * @param {string} texto1 - Primer texto
 * @param {string} texto2 - Segundo texto
 * @returns {number} Porcentaje de similitud (0-100)
 */
function similitudTexto(texto1, texto2) { ... }
```

### ESTILO CSS

- **NO dejar líneas en blanco entre reglas CSS**
- Mantener el CSS compacto y sin espacios innecesarios entre selectores

**Ejemplos:**

❌ **NO hacer:**

```css
.dialogo-duplicado-exacto {
  min-width: 350px;
}

.direccion-info {
  display: flex;
}

.q-item {
  transition: background-color 0.2s ease;
}
```

✅ **SÍ hacer:**

```css
.dialogo-duplicado-exacto {
  min-width: 350px;
}
.direccion-info {
  display: flex;
}
.q-item {
  transition: background-color 0.2s ease;
}
```
