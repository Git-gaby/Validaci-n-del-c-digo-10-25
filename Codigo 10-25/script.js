let lista = document.getElementById("lista");

// --- NUEVA FUNCIÓN: Persistencia de Datos (Cargar) ---
function cargarTareas() {
    // 1. Obtener el HTML guardado en localStorage
    const tareasGuardadas = localStorage.getItem('listaTareasHTML');
    
    // 2. Si hay datos, restaurar el contenido de la lista
    if (tareasGuardadas) {
        lista.innerHTML = tareasGuardadas;
        // 3. Reasignar los event listeners a los nuevos elementos cargados
        // Esto es necesario para la función de 'marcarComoCompletada'
        lista.querySelectorAll('li span').forEach(span => {
            span.onclick = () => marcarComoCompletada(span);
        });
    }
}

// --- NUEVA FUNCIÓN: Persistencia de Datos (Guardar) ---
function guardarTareas() {
    // Guardar el contenido HTML del <ul> en localStorage
    localStorage.setItem('listaTareasHTML', lista.innerHTML);
}

function agregarTarea() {
    let tareaTexto = document.getElementById("tarea").value.trim();
    if (tareaTexto === "") return;

    let li = document.createElement("li");
    
    // Estructura de la tarea con el span y los botones
    li.innerHTML = `
        <span>${tareaTexto}</span>
        <div>
            <button class="edit-btn" onclick="habilitarEdicion(this)"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete-btn" onclick="eliminarTarea(this)"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    // Asignar el nuevo evento onclick al span para marcar como completada
    li.querySelector('span').onclick = () => marcarComoCompletada(li.querySelector('span'));

    lista.appendChild(li);
    document.getElementById("tarea").value = "";
    
    // Guardar el estado después de agregar
    guardarTareas(); 
}

// --- NUEVA FUNCIÓN: Marcar como Completada ---
function marcarComoCompletada(span) {
    // Accede al <li> padre del <span> y alterna la clase 'completada'
    span.parentElement.classList.toggle('completada');
    
    // Guardar el estado después de marcar
    guardarTareas();
}

function eliminarTarea(boton) {
    let li = boton.parentElement.parentElement; 
    lista.removeChild(li);
    
    // Guardar el estado después de eliminar
    guardarTareas();
}

function habilitarEdicion(boton) {
    let li = boton.parentElement.parentElement; 
    let span = li.querySelector('span'); 
    
    let nuevoTexto = prompt("Editar tarea:", span.textContent);
    
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        span.textContent = nuevoTexto.trim();
        
        // Guardar el estado después de editar
        guardarTareas();
    } 
}