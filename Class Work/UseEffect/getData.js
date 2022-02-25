// challenge : Get Data
// https://codesandbox.io/s/load-data-exercise-xm4qo?file=/README.md

import React from "react";
import "./styles.css";
import axios from "axios";
import { useState } from "react";

export default function App() {
  const [output, setOutput] = useState([]);
  const [loader, setLoader] = useState(false);

  const apiHandler = async () => {
    setLoader(true);
    try {
      const res = await axios.get("/api/users");
      setLoader(false);
      setOutput(res.data.users);
    } catch (err) {
      // setOutput("" + err)
    }

    // const res = await axios.get("/api/users").catch(errorHandler)
    // console.log(res)
  };

  return (
    <div className="App">
      <h1> Data </h1>
      <button onClick={apiHandler}> Click to load data from server </button>
      <br />
      <br />

      {loader ? (
        <h2>"loading..."</h2>
      ) : (
        output.map((item, index) => {
          return (
            <div key={index}>
              <h3 style={{ display: "inline", marginRight: "7px" }}>
                {item?.id}
              </h3>
              <h3 style={{ display: "inline" }}>{item?.name}</h3>
            </div>
          );
        })
      )}
    </div>
  );
}
