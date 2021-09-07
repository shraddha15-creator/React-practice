import { useState } from "react";
import "./styles.css";

var color = "blue";
var text = "yellow";
var userName = "Shraddha";

export default function App() {
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color, color: text }}>
        Welcome {userName}
      </h1>
      <h1> Inside outtt</h1>
      <input onChange={inputChangeHandler}></input>
    </div>
  );
}
