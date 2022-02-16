// password match
// Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [input1, setInput1] = useState("");
  let [input2, setInput2] = useState("");
  let [result, setResult] = useState("");
  const passwordMatchHandler = () =>
    setResult(input1 === input2 ? "Successful" : "Password Does not Match");

  return (
    <div className="App">
      <h1>Character Counter - Twitter</h1>
      <input
        type="text"
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <input
        type="text"
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
       <br /> <br />
      <button onClick={passwordMatchHandler}>Click Me</button>
      <h2>{result}</h2>
    </div>
  );
}

