const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcularBtn");
const resultado = document.getElementById("resultado");
const formulario = document.getElementById("formulario");

function verificarDivisionPorCero() {
  if (operacion.value === "dividir" && parseFloat(numero2.value) === 0) {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
}

numero2.addEventListener("input", verificarDivisionPorCero);
operacion.addEventListener("change", verificarDivisionPorCero);

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const n1 = parseFloat(numero1.value);
  const n2 = parseFloat(numero2.value);
  let res;

  switch (operacion.value) {
    case "sumar":
      res = n1 + n2;
      break;
    case "restar":
      res = n1 - n2;
      break;
    case "multiplicar":
      res = n1 * n2;
      break;
    case "dividir":
      res = n2 !== 0 ? n1 / n2 : "No se puede dividir por cero";
      break;
    default:
      res = "Operación no válida";
  }

  resultado.innerText = `Resultado: ${res}`;
});
