import React, { useContext } from "react";
import { CounterContext } from "./CounterUseContext";

export default function DecrementCountUseContext(props) {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
  //   return (
  //     <button onClick={() => props.setCount(props.count - 1)}>Decrement</button>
  //   );
}
