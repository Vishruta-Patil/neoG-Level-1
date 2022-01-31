// Create a list in React. Use array of objects.
// Use map to render the list
// On every list there should be an onClick handler.
// Clicking on this should print the details of the object.

import "./styles.css";
import React from "react";

export default function App() {
  const listArr = [
    {
      id: 0,
      name: "Vishruta",
      age: 20,
      hobby: "painting"
    },
    {
      id: 1,
      name: "Varad",
      age: 15,
      hobby: "Solving Rubics Cube"
    },
    {
      id: 2,
      name: "Saloni",
      age: 20,
      hobby: "Dancing"
    }
  ];

  const [isClicked, setIsClicked] = React.useState(false);

  const func = (event, item) => {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  };

  return (
    <div className="App">
      {listArr.map((item, key) => {
        return (
          <ul key={key}>
            <li onClick={func}>{item.name}</li>
            {isClicked && item.id === key && (
              <div>
                <li>{item.age}</li>
                <li>{item.hobby}</li>
              </div>
            )}
          </ul>
        );
      })}
    </div>
  );
}
