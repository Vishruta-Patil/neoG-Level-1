import "./styles.css";
import {useState} from "react"

export default function App() {
  let[counter, setCounter] = useState(0)
  const countHandler = (e) => {
    if(e.target.value === "\s") {
      setCounter(counter++)
    } else {
      setCounter(counter)
    }
  }

  return (
    <div className="App">
      <h1>Character Counter - Twitter</h1>
      <input type="text" onChange={countHandler}/>
      <h3>{counter}</h3>
    </div>
  );
}
