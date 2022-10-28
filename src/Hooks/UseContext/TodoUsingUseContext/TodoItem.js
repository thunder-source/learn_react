import React, { useContext } from "react";
import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { TodoAppContext } from "./TodoAppUseContext";

const TodoItem = ({ name, done, id }) => {
  const { todoList, setTodoList } = useContext(TodoAppContext);
  const handleCheck = (props) => {
    setTodoList((e) => {
      return e.map((ele) => {
        ele.id == props.target.id &&
          (ele.done === false ? (ele.done = true) : (ele.done = false));
        return ele;
      });
    });
  };
  return (
    <div key={id} className="todoItem">
      <Checkbox
        onChange={handleCheck}
        id={String(id)}
        checked={done}
        color="primary"
      />
      <p className={done === false ? "" : "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;

// inputProps={{ "aria-label": "secondary checkbox" }}
