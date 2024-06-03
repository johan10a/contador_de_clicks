import React, { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  const handleDecrement = () => {
    setContador(contador - 1);
  };

  return (
    <div className="app">
      <h1>Contador de clicks</h1>
      <div className="contador">
        <div className="display">{contador}</div>
        <button onClick={handleClick} className="botonClick">
          Incrementar
        </button>
        <button onClick={handleDecrement} className="botonDecrementar">
          Disminuir
        </button>
        <button onClick={handleReset} className="botonReiniciar">
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default App;
