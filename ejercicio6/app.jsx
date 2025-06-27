const { useState } = React;

function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [color, setColor] = useState("");

const calcularIMC = () => {
  const p = parseFloat(peso);
  const a = parseFloat(altura);

  if (isNaN(p) || isNaN(a)) {
    setResultado("Por favor, ingresa datos numéricos válidos.");
    setColor("rojo");
    return;
  }

  if (p <= 0 || a <= 0) {
    setResultado("Por favor, ingresa valores positivos para peso y altura.");
    setColor("rojo");
    return;
  }

  const imc = p / (a * a);
  const imcRedondeado = imc.toFixed(2);

  let mensaje = "";
  let clase = "";

  if (imc < 18.5) {
    mensaje = `IMC: ${imcRedondeado} - Nivel bajo`;
    clase = "amarillo";
  } else if (imc < 25) {
    mensaje = `IMC: ${imcRedondeado} - Nivel normal`;
    clase = "verde";
  } else if (imc < 30) {
    mensaje = `IMC: ${imcRedondeado} - Sobrepeso`;
    clase = "naranja";
  } else {
    mensaje = `IMC: ${imcRedondeado} - Obesidad`;
    clase = "rojo";
  }

  setResultado(mensaje);
  setColor(clase);
};


  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <br />
        <input
          type="number"
          step="0.01"
          placeholder="Altura (m)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />
        <button onClick={calcularIMC}>Calcular</button>
      </form>

      {resultado && (
        <div className={`resultado ${color}`}>{resultado}</div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CalculadoraIMC />);
