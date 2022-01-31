// Create a button in React and print the event
// Can you print the button text from this event?

import "./styles.css";

export default function App() {
  const func = (e) => {
    console.log(e.target)
    console.log(e.target.innerText)
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={func}>Shree Krishna</button>
    </div>
  );
}