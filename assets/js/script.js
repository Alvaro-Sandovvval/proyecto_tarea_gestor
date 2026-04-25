// Referencias al DOM
const formulario = document.getElementById('formulario-tarea');
const inputTitulo = document.getElementById('titulo-tarea');
const inputDesc = document.getElementById('descripcion-tarea');
const selectPrioridad = document.getElementById('prioridad-tarea');
const inputFecha = document.getElementById('fecha-tarea');

// Listas de destino
const listas = {
    alta: document.querySelector('#col-alta .lista-tareas'),
    media: document.querySelector('#col-media .lista-tareas'),
    baja: document.querySelector('#col-baja .lista-tareas')
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Crear la tarjeta
    const tareaCard = document.createElement('div');
    tareaCard.classList.add('tarea', selectPrioridad.value);

    // Formatear fecha
    const fechaObj = new Date(inputFecha.value);
    const fechaTexto = fechaObj.toLocaleDateString('es-ES', { 
        day: '2-digit', month: '2-digit', year: 'numeric' 
    });

    tareaCard.innerHTML = `
        <h4>${inputTitulo.value}</h4>
        <p>${inputDesc.value}</p>
        <span class="fecha-tag">📅 Límite: ${fechaTexto}</span>
    `;

    // Insertar en la lista correcta
    listas[selectPrioridad.value].appendChild(tareaCard);

    // Limpiar formulario
    formulario.reset();
    inputTitulo.focus();
});