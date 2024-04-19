import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import UseContextComponents from "./components/useContext";
import UseStateComponent from "./components/useState";
console.log(ReactDOM);

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent />
      <hr />

      <h1>useReducer</h1>
      <UseContextComponents />
      <hr />

      <h1>useContext</h1>
    </div>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
