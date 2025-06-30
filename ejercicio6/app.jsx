const { useState } = React;

function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [color, setColor] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

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
      <form onSubmit={calcularIMC}>
        <label htmlFor="peso">Peso (kg):</label><br />
        <input
          id="peso"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        /><br />

        <label htmlFor="altura">Altura (m):</label><br />
        <input
          id="altura"
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        /><br />

        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <div className={`resultado ${color}`}>{resultado}</div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CalculadoraIMC />);
