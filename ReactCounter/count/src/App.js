import React, { useState } from "react";
import "./App.css";

function App() {
  const [Counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter:{Counter} </h1>
      <button
        onClick={() => {
          setCounter(Counter + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCounter(Counter - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
