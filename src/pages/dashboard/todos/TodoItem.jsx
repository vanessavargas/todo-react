import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div key={todo.id}>
      <h3>Description: {todo.description}</h3>
      <p>Created On: {todo.createdOn}</p>
      <p>State: {todo.state}</p> 
    </div>
  );
};

export default TodoItem;
