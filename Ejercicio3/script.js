const listaTareas = document.getElementById("listaTareas");
const formulario = document.getElementById("formulario");

function mostrarTareasCompletadas() {
  listaTareas.innerHTML = "<li>Cargando tareas...</li>";

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      const completadas = data.filter(tarea => tarea.completed === true);

      listaTareas.innerHTML = "";

      completadas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${tarea.title}`;
        listaTareas.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error al obtener las tareas:", error);
      listaTareas.innerHTML = "<li>Error al cargar los datos.</li>";
    });
}

// Mostrar automáticamente al cargar
mostrarTareasCompletadas();

// Volver a mostrar al hacer submit
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  mostrarTareasCompletadas();
});
