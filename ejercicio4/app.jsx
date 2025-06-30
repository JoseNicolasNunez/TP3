const { useState } = React;

function BotonesAlternos() {
  const [habilitado, setHabilitado] = useState("izquierdo");

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Solo alternamos si está habilitado el botón izquierdo (por ejemplo)
    if (habilitado === "izquierdo") {
      setHabilitado("derecho");
    }
  };

  return (
    <div>
      <h1>Botones alternados con React</h1>

      <form onSubmit={manejarSubmit}>
        <label htmlFor="btn-izquierdo">Alternar botón izquierdo:</label><br/>

        <button
          id="btn-izquierdo"
          type="submit"
          disabled={habilitado !== "izquierdo"}
        >
          Izquierdo
        </button>

        <button
          type="button"
          disabled={habilitado !== "derecho"}
          onClick={() => setHabilitado("izquierdo")}
        >
          Derecho
        </button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternos />);
