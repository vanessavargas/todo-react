import React, { useState } from "react";

const CreateTodo = ({ createTodo }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (description.trim().length === 0) {
      return;
    }

    try {
      await createTodo(description);
      setDescription("");
    } catch (error) {
      console.error("Erro ao criar a anotação:", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-2">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-medium-color"
            >
              Insira uma anotação
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              required
              className="mt-2 block w-full rounded-md border-0 p-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
