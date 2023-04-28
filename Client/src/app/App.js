import React from "react";

import { Counter } from "../components/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>header</header>
      <div className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
