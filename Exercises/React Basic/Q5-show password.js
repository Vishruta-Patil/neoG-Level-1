// Create a password reset form
// Put a button show password near the input element.
// Clicking should show password to the user.
// Text on show password should change to hide password when password is shown.
// Click on hide password and password goes back to hidden again.

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [input, setInput] = useState("");
  let [passwordStatus, setPasswordStatus] = useState("show");
  let [inputType, setInputType] = useState("password");
  
  

  const passwordStatusHandler = () => {
    if(inputType === "password") {
    setInputType("text")
    setPasswordStatus("hide") 
    } else {
    setInputType("password")
    setPasswordStatus("show") 
    }
  }

  return (
    <div className="App">
      <h1>Password form</h1>
      <input type={inputType} onChange={e => setInput(e.target.value)}/>
      <button onClick={passwordStatusHandler}>{passwordStatus}</button>
    </div>
  );
}
