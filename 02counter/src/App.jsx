import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let count = 5;

  const addValue = () => {
    counter = counter + 1;
    if (counter <= 20) {
      setCounter(counter);
    }
  };

  const Removeval = () => {
    if (counter - 1 >=  0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value :{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={Removeval}>Remove Value :{counter} </button>
    </>
  );
}

export default App;
