const { useState } = React;

function BotonesAlternos() {
  const [habilitado, setHabilitado] = useState("izquierdo");

  return (
    <div>
      <h1>Botones alternados con React</h1>
      <button
        disabled={habilitado !== "izquierdo"}
        onClick={() => setHabilitado("derecho")}
      >
        Izquierdo
      </button>

      <button
        disabled={habilitado !== "derecho"}
        onClick={() => setHabilitado("izquierdo")}
      >
        Derecho
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternos />);
