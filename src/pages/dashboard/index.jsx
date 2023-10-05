import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "./todos/TodoForm";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleOpenTodoForm = () => {
    setIsTodoFormOpen(true);
  };

  const handleCloseTodoForm = () => {
    setIsTodoFormOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Coluna esquerda */}
      <section className="flex items-start justify-center bg-principal-color md:p-12 mb-12 md:mb-0 sm:w-1/2 sm:h-screen h-1/2">
        
      <Calendar />
        <div className="text-center p-6">
        
          <h1 className="text-light-color text-4xl font-bold">Olá :) !!</h1>
          <p className="my-4 text-medium-color">
            Esta é a página onde a mágica acontece
          </p>
          <button
            onClick={handleOpenTodoForm}
            className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
          >
            Inserir anotação
          </button>
          <Modal
            open={isTodoFormOpen}
            onClose={handleCloseTodoForm}
            content={
              <TodoForm addTodo={addTodo} onClose={handleCloseTodoForm} />
            }
          />
        </div>
        <Link className="text-light-color text-center self-end" to="/">
          Sair
        </Link>
      </section>

      {/* Coluna direita */}
      <section>
        <div className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-400">
              Suas anotações
            </h1>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
