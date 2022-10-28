import React, { useContext, useState } from "react";
import "./Input.css";
import { TodoAppContext } from "./TodoAppUseContext";

const Input = () => {
  const [input, setInput] = useState("");
  const { todoList, setTodoList } = useContext(TodoAppContext);

  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        name: input,
        done: false,
        id: Date.now(),
      },
    ]);
    setInput("");
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};
export default Input;
