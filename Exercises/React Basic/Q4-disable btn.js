// Disable button
// Add a submit button to password change field.
// Disable submit button if passwords don't match
// Clicking on submit should console the password field

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [disabled, setDisabled] = useState(false);
  let [result, setResult] = useState("");

  const passwordMatchHandler = () => {
    console.log(input1)
    if(input1 !== input2) 
    {
      setDisabled(true) 
      setResult("Password Does not Match") 
    } else {
      setDisabled(false);
      setResult("Success!!") 
    }
  }

  return (
    <div className="App">
      <h1>Character Counter - Twitter</h1>
      <input
        type="password"
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="password"
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <br /> <br />
      <button disabled={disabled} onClick={passwordMatchHandler}>
        Click Me
      </button>
      <h2>{result}</h2>
    </div>
  );
}
