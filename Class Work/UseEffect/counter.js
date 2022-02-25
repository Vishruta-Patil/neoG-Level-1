// Create a button and increment a counter every time that button is clicked. 
// Using the syntax shown above, log the counter on console after every render.


import { useState,useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0)
  const clickHandler = () => {
    console.log("in start of function ", counter)
    setCounter(count => count + 1)
    console.log("in end of function ", counter)
  }

  useEffect(() => {
    console.log("after  render" ,counter)
  })

  console.log("before  render" ,counter)
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}


// >>>>>>>>>>>Output<<<<<<<<<<<<<<
// before  render 0
// after  render 0

// *******after clicking on btn********
// in start of function 0
// in end of function 0
// before  render 1
// after  render 1