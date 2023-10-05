import React from "react";
import TodoItem from "./TodoIList";

const TodoList = ({ todos }) => {
  return (
    <div className="flex flex-wrap">
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
