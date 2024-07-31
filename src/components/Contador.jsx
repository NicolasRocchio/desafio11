import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>Contador: {contador}</h2>
      <button
        className="btn btn-primary m-1"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className="btn btn-danger m-1"
        onClick={() => setContador(contador - 1)}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
