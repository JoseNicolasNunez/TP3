const listaTareas = document.getElementById("listaTareas");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    const completadas = data.filter(tarea => tarea.completed === true);

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
