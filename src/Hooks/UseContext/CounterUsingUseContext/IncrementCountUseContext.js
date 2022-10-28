import React, { useContext } from "react";
import { CounterContext } from "./CounterUseContext";

export default function IncrementCountUseContext(props) {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
  // return (
  //   <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
  // );
}
