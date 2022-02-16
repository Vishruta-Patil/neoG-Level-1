// designer tool (mini figma)#
// Let user finalise the size of text she would like on the screen. Two buttons + and - both will increase/decrease size by 8px. Show the size on the screen.

// IDEA You can make a small app around this which quickly selects you between fonts.

// Have prefixed sizes. Multiples of 8px.
// Have some selected best fonts.
// Tell which fonts are good for heading. which are good for text.
// Suggest pair of fonts which go together.
// Give user an option to copy the CSS. (Bonus feature)

import "./styles.css";
import { useState } from "react";

export default function App() {
  let [inputText, setInputText] = useState("");
  let [fontSize, setFontSize] = useState(16)

  const incrementFontHandler = () => {
    setFontSize(fontSize+8)
  };

  const decrementFontHandler = () => {
    setFontSize(fontSize-8)
  };

  return (
    <div className="App">
      <h1>designer tool (mini figma)</h1>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      
      <h2 style={{fontSize: fontSize + "px"}}>{inputText} {fontSize}</h2>
      <button onClick={incrementFontHandler}>
        +
      </button>

      <button onClick={decrementFontHandler}>
        -
      </button>
     
    </div>
  );
}
