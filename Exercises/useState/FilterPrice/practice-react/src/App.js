import './App.css';

import React, { useState } from "react";
import { data } from "./data";

export default function App() {
  const [dataItems, setDataItems] = useState(data);

  const ascHandler = () => {
    const lowToHighHandler = dataItems.map(item => ({price:item.price + 100}))
    // const lowToHighHandler = dataItems.map(item => ({...item,price:item.price + 10}))
    // const lowToHighHandler = dataItems.sort(function (a, b) {
    //   return a["price"] - b["price"];
    // });
    console.log(lowToHighHandler)
    setDataItems([...lowToHighHandler]);
  };


  const descHandler = () => {
    const highToLowHandler = dataItems.sort(function (a, b) {
      return b["price"] - a["price"];
    });
    setDataItems([...highToLowHandler]);
  };

  return (
    <div>
      <p>Sort By</p>
      <div>
        <input
          type="radio"
          id="high-to-low"
          name="sort-by"
          onClick={descHandler}
        />
        <label htmlFor="high-to-low">high to low</label>

        <input
          type="radio"
          id="low-to-high"
          name="sort-by"
          onClick={ascHandler}
        />
        <label htmlFor="low-to-high">low-to-high</label>
      </div>

      <div className="App">
        {dataItems.map((item) => (
          <div key={item?.id}>
            <h3> {item?.name} </h3>
            <div>Rs. {item?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
