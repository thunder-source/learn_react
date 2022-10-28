import React, { useState } from "react";

export default function CounterFunction() {
  const [counter, setCounter] = useState(0);
  // use ctrl + space bar for suggestions

  return (
    <div>
      <h1>CounterFunction</h1>;<p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Inc Counter
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Dec Counter
      </button>
    </div>
  );
}
