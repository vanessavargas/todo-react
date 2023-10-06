import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div
      key={todo._id}
      className="w-1/4 shadow-lg"
    >
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{todo.description} </p>
      </div>
      <div className="flex justify-around gap-2 px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-100 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          dd/MMM/aa
        </span>
        <span className="inline-block bg-green-100 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {todo.state}
        </span>
        <span className="inline-block bg-red-100 rounded-full p-1 mb-2">
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteTodo(todo._id)}
          >
            🗑️
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
