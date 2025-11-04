# 📝 Lista de Tareas - Análisis de Código

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-FF6C37?style=for-the-badge&logo=databricks&logoColor=white)

## Descripción

Aplicación web de gestión de tareas con **CRUD completo** y **persistencia local** mediante `localStorage`. Permite crear, editar, eliminar y marcar tareas como completadas.

---

## 🚀 Funcionalidades

- ✅ **Crear** nuevas tareas
- ✏️ **Editar** tareas existentes
- 🗑️ **Eliminar** tareas
- ✔️ **Marcar/Desmarcar** como completada
- 💾 **Persistencia automática** en `localStorage`
- 🎨 **Interfaz responsive** con estilos modernos

---

## 📁 Estructura del Proyecto
```
proyecto/
│
├── index.html      # Estructura HTML
├── styles.css      # Estilos y diseño
└── script.js       # Lógica y persistencia
```

---

## 🔧 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño con Flexbox y degradados
- **JavaScript (ES6+)** - Manipulación del DOM y localStorage
- **Font Awesome** - Iconos

---

## 📄 Análisis de Componentes

### `script.js` - Lógica Principal

#### Persistencia de Datos

**`cargarTareas()`**
- Carga tareas desde `localStorage` al iniciar
- Restaura el estado completo (incluyendo tareas completadas)
- Reasigna eventos a elementos cargados dinámicamente

**`guardarTareas()`**
- Persiste el estado actual en `localStorage`
- Se ejecuta después de cada operación CRUD

#### Operaciones CRUD

**`agregarTarea()` - CREATE**
- Valida entrada no vacía
- Crea elemento `<li>` con estructura completa
- Asigna eventos `onclick`
- Persiste cambios

**`eliminarTarea(boton)` - DELETE**
- Navega al elemento padre `<li>`
- Remueve el elemento del DOM
- Actualiza `localStorage`

**`habilitarEdicion(boton)` - UPDATE**
- Utiliza `prompt()` para capturar nuevo texto
- Valida entrada del usuario
- Actualiza `textContent` del `<span>`
- Persiste modificación

**`marcarComoCompletada(span)` - TOGGLE**
- Alterna clase CSS `completada`
- Aplica estilo de tachado
- Guarda estado actualizado

---

### `index.html` - Estructura

#### Características

- Inclusión correcta de librerías externas
- Archivo `script.js` cargado con atributo `defer`
- CDN de Font Awesome para iconos
- Estructura semántica con `<ul>` para la lista
- Event listener `DOMContentLoaded` para inicialización segura

#### Componentes Principales
```html
<input id="tarea" type="text" placeholder="Nueva tarea...">
<button onclick="agregarTarea()">Agregar</button>
<ul id="lista"></ul>
```

---

### `styles.css` - Presentación

#### Estilos Aplicados

**Diseño Base**
- Sombras con `box-shadow`
- Bordes redondeados con `border-radius`
- Paleta de colores coherente

**Layout**
- `display: flex` para alineación de elementos
- Distribución espaciada entre texto y botones

**Botones**
- Degradados con `linear-gradient`
- Estilos diferenciados por función (agregar, editar, eliminar)
- Efectos hover para feedback visual

**Estado Completado**
- Clase `.completada span` con `text-decoration: line-through`
- Colores atenuados para indicar estado inactivo

---

## 💻 Uso

1. **Agregar tarea:** Escribe en el campo de texto y presiona "Agregar"
2. **Marcar como completada:** Haz clic en el texto de la tarea
3. **Editar:** Presiona el botón de editar (lápiz)
4. **Eliminar:** Presiona el botón de eliminar (papelera)

---

## 🎯 Conclusiones Técnicas

### JavaScript
✅ Código funcional y limpio  
✅ Persistencia local implementada correctamente  
✅ Gestión de estado completa  
✅ Manejo adecuado de eventos dinámicos

### HTML
✅ Estructura semántica válida  
✅ Inicialización segura con `DOMContentLoaded`  
✅ Correcta vinculación de recursos

### CSS
✅ Diseño coherente y profesional  
✅ Retroalimentación visual clara  
✅ Experiencia de usuario fluida

---

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/git-gaby/lista-tareas.git
```

2. Abre `index.html` en tu navegador

¡No requiere instalación de dependencias! 🎉

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👨‍💻 Autor

**Gabriel Gomez**

[![GitHub](https://img.shields.io/badge/GitHub-git--gaby-181717?style=for-the-badge&logo=github)](https://github.com/git-gaby)

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias.

---

## ⭐ ¿Te gustó el proyecto?

Si este proyecto te fue útil, ¡no olvides darle una estrella! ⭐
