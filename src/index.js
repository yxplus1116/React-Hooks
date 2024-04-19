import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import UseContextComponents from "./components/useContext";
import UseStateComponent from "./components/useState";
console.log(ReactDOM);

function App() {
  const [parentData, setParentData] = useState(
    "父组件的传递过来的值。单项数据流子组件不能更改我",
  );
  const parentHandle = () => {
    setParentData("告诉父=组件更改值了！");
  };
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent parentHandle={parentHandle} parentData={parentData} />
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
