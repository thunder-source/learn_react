import React from "react";
import { useState, useEffect, useRef } from "react";

export default function CounterUseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef("");
  console.log(count.current);
  useEffect(() => {
    count.current = count.current + 1;
  });
  const handleInput = () => {
    console.log(inputElement.current);
    // inputElement.current.value;
  };
  return (
    <>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button onClick={() => (count.current = count.current + 1)}>
        {count.current}
      </button> */}
      <input type="text" ref={inputElement} placeholder="current value" />
      <button onClick={handleInput}>Focus Input</button>
    </>
  );
}
