import "./styles.css";
import { useState } from "react";

export default function App() {
  let [input1, setInput1] = useState("result");
  let [result, setResult] = useState("");

  // const alphaNumericHandler = () => {

  //   if(/^\d+$/.test(input1)) {
  //     setResult("Correct")
  //   }
  //   else {
  //     setResult("Wrong")
  //   }
  // }

  // const alphaNumericHandler = () => {
  //   const digits_only = string => [...string].every(c => '0123456789'.includes(c));
  //   if(digits_only(input1)) {
  //     setResult("Correct")
  //   }
  //   else {
  //     setResult("Wrong")
  //   }
  // }

  // const alphaNumericHandler = () => {
  //   Number(input1) ? setResult("Correct") : setResult("Wrong");
  // };

  const alphaNumericHandler = () => {
    for (let i = 0; i <input1.length; i++) {
      const d = input1.charCodeAt(i);
      if (d < 48 || d > 57) return setResult("Wrong")
    }
    return setResult("correct")
  };

  

  return (
    <div className="App">
      <h1>Character Counter - Twitter</h1>
      <input
        type="text"
        onChange={(e) => setInput1(e.target.value)}
      /> <br /> <br />
      <button onClick={alphaNumericHandler}>Click Me</button>
      <h2>{result}</h2>
    </div>
  );
}
