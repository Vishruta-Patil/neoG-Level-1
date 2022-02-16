// todo/strikethrough#
// Write a TODO app
// Add TODOs from input
// Clicking on a TODO should complete it using strikethrough
// Clicking again should remove the strikethrough.

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [inputText, setInputText] = useState("");
  let [fontStyle, setFontStyle] = useState("none")

  const strikeThroughHandler = () => {
    fontStyle === "none" ? setFontStyle("line-through") :  setFontStyle("none")
  };

  return (
    <div className="App">
      <h1>todo/strikethrough</h1>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      
      <h2 style={{textDecoration: fontStyle}}>{inputText}</h2>
      <button onClick={strikeThroughHandler}>
      strikethrough
      </button>

     
    </div>
  );
}
