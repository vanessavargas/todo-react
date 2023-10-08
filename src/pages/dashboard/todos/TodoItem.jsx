import React from "react";
import { FaTrash } from 'react-icons/fa'; 
import { FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div
      key={todo._id}
      className="w-64 h-48 mt-4 shadow-inner flex flex-col justify-between bg-gray-100"
    >
      <div className="px-6 pt-4 overflow-auto">
        <p className="text-gray-700 text-base">{todo.description} </p>
      </div>
      <div className="flex justify-around gap-2 px-6 py-2">
        <span className="inline-block bg-gray-50 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          dd/MMM
        </span>
        <span className="inline-block bg-green-50 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {todo.state}
        </span>
        <span className="inline-block bg-yellow-50 rounded-full p-1 mb-2">
          <button
            className="btn btn-danger mx-2"
          >
            <FaEdit />
          </button>
        </span>
        <span className="inline-block bg-red-50 rounded-full p-1 mb-2">
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteTodo(todo._id)}
          >
            <FaTrash />
          </button>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
