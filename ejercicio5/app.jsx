const { useState } = React;

function CalculadoraReact() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("sumar");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = "";

    switch (operacion) {
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
        res = n1 / n2;
        break;
      default:
        res = "Operación no válida";
    }

    setResultado(`Resultado: ${res}`);
  };

  const esDivisionPorCero = operacion === "dividir" && parseFloat(num2) === 0;

  return (
    <div>
      <h1>Calculadora con React</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          required
        />
        <br />
        <select
          value={operacion}
          onChange={(e) => setOperacion(e.target.value)}
        >
          <option value="sumar">Sumar</option>
          <option value="restar">Restar</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
        </select>
        <br />
        <button type="submit" onClick={calcular} disabled={esDivisionPorCero}>
          Calcular
        </button>
        {esDivisionPorCero && (
          <p style={{ color: "red", marginTop: "10px" }}>
            ⚠️ No se puede dividir por cero.
          </p>
        )}
      </form>
      <div className="resultado">{resultado}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CalculadoraReact />);
