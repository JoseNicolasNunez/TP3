const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "kiwi", "anana", "sandía", "melón", "naranja", "mandarina", "cereza", "ciruela", "granada", "pomelo", "maracuyá", "higo", "arándano", "limón"];

const filtroInput = document.getElementById("filtroInput");
const listaPalabras = document.getElementById("listaPalabras");
const mensajeError = document.getElementById("mensajeError");
const formulario = document.getElementById("formulario");

function mostrarPalabras(filtradas) {
  listaPalabras.innerHTML = "";
  filtradas.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    listaPalabras.appendChild(li);
  });
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const texto = filtroInput.value.trim().toLowerCase();

  if (texto === "") {
    mensajeError.textContent = "⚠️ Por favor ingresa un texto para filtrar.";
    listaPalabras.innerHTML = "";
    return;
  }

  mensajeError.textContent = ""; 

  const resultado = palabras.filter(p => p.toLowerCase().includes(texto));
  mostrarPalabras(resultado);
});
