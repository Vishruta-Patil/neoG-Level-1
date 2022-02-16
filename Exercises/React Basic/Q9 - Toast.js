// TOAST

// Create a Toast Component
// Component should have two things
// Text
// Hide Button
// Create a button show toast
// Clicking on this button should show Toast
// Clicking on hide button on toast should hide the toast
// UNDERSTAND : how callbacks can be passed to control state from parent component.
// CHALLENGE :
// Create different type of toasts: Error, Success, Warning etc.
// Differentiate your toast by just a prop and the design should change.

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [toastDisplay, setToastDisplay] = useState("hide");

  const showToastHandler = () => {
    setToastDisplay("show");
  };

  const hideToastHandler = () => {
    setToastDisplay("hide");
  };

  return (
    <div className="App">
      <h1>Toast</h1>
      <button onClick={showToastHandler}>show toast</button>
      <br /> <br />
      <div className={toastDisplay}>
        toast
        <button onClick={hideToastHandler}>+</button>
      </div>
    </div>
  );
}

// CSS
// .hide {
//     display: none;
//   }

//   .show {
//     display: block;
//     background-color: blanchedalmond;
//     width: 40%;
//     margin: auto;
//     padding: 5px 10px;
//     display:flex;
//     gap: 10px;
//     justify-content: space-between;
//   }
