import React, { useState } from "react";
import { FaHeart, FaTrash } from 'react-icons/fa'; 
import { FaEdit } from 'react-icons/fa';

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleEditButtonClick = () => {
    setShowModal(true);
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();

    if (description.trim() !== "") {
      console.log(description);
      await updateTodo(todo._id, description);
    }
    console.log(description);
    setShowModal(false);
  };


  return (
    <div
      key={todo._id}
      className="w-64 h-48 mt-4 shadow-inner flex flex-col justify-between bg-gray-100"
    >
      <div className="px-6 pt-4 overflow-auto">
        <p className="text-gray-700 text-base">{todo.description} </p>
      </div>
      <div className="flex justify-around gap-2 px-6 py-2">
        <span className="inline-block bg-gray-50 rounded-full p-2">
          <FaHeart/>
        </span>
        <span className="inline-block bg-green-50 rounded-full p-2 text-sm font-semibold text-gray-700">
          {todo.state}
        </span>
        <span className="inline-block ">
          <div>
          <button
            className="btn bg-yellow-50 rounded-full p-2"
            onClick={handleEditButtonClick}
          >
            <FaEdit />
          </button>
          {showModal && (
            <div className="fixed inset-0 bd-white flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-80 mx-auto my-6">
                <div className="rounded-lg shadow-inner bg-white">
                  <div className="p-4">
                    <h1 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-principal-color">Editar Todo</h1>
                    <form onSubmit={handleSaveChanges}  className="space-y-6">
                      <textarea
                        className="mt-2 block w-full rounded-md border-0 p-1.5  text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <div className="mt-4 flex justify-end gap-4">
                        <button
                          className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
                          type="submit"
                        >
                          Salvar
                        </button>
                        <button
                          className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-principal-color hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
                          onClick={() => setShowModal(false)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
        </span>
        <span className="inline-block">
          <button
            className="btn bg-red-50 rounded-full p-2"
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
