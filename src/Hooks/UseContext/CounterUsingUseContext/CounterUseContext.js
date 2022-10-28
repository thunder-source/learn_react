import React, { createContext, useContext, useState } from "react";
import DecrementCountUseContext from "./DecrementCountUseContext";
import IncrementCountUseContext from "./IncrementCountUseContext";

export const CounterContext = createContext();
export default function CounterUseContext() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div>
        <h1>{count}</h1>
        <IncrementCountUseContext />
        <DecrementCountUseContext />
        {/* NORMAL WAY  */}
        {/* <IncrementCountUseContext count={count} setCount={setCount} /> */}
        {/* <DecrementCountUseContext count={count} setCount={setCount} /> */}
      </div>
    </CounterContext.Provider>
  );
}
