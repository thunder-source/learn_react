import React, { createContext, useContext, useState } from "react";
import TodoItem from "./TodoItem";
import Input from "./Input";

export const TodoAppContext = createContext();
export default function TodoAppUseContext() {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoAppContext.Provider value={{ todoList, setTodoList }}>
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              name={item.name}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </TodoAppContext.Provider>
  );
}
