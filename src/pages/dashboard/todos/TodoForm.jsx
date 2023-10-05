import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo, onClose }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      description,
      createdOn: new Date().toString(),
      state: "Open",
    };

    addTodo(newTodo);
    setDescription("");
    onClose();
  };

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-2">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-principal-color">
            Crie sua anotação
          </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
                  placeholder="Insira sua anotação"
                  value={description}
                  onChange={handleDescriptionChange}
                />
                <button
                  onClick={handleAddTodo}
                  className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 my-4 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
                >
                  Adicione a anotação
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
