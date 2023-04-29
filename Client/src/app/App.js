import React from "react";
import "./App.css";
import { Counter } from "../components/counter/Counter";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <div className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
