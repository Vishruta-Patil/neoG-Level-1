// Load Data on page render
// https://codesandbox.io/s/load-products-tzdb8?file=/README.md

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // write product loading code here..
    // products are at `/api/products`
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/products");
        setLoading(false);
        setOutput(res?.data?.products);
      } catch (err) {
        // setLoading(false);
        // setOutput("" + err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        output.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
