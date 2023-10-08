import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateTodo from "./todos/CreateTodo";
import TodoList from "./todos/TodoIList";
import { fetchTodos } from "./todos/TodoContext";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  const fetchAndSetTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error("Erro ao buscar as anotações:", error.message);
    }
  };

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  const updateTodoList = async () => {
    await fetchAndSetTodos();
  };

  return (
    <div className="flex md:flex-row flex-wrap h-screen">
      {/* Coluna esquerda */}
      <section className="flex md:flex-col w-full md:w-1/4 gap-24 items-center justify-center bg-principal-color md:mb-0 md:h-screen h-48">
        <div className="md:block hidden text-center p-6">
          <h3 className="text-light-color font-bold">
            Você precisa fazer aquilo que pensa que não é capaz de fazer.
          </h3>
          <p>
            <i>Eleanor Roosevelt</i>
          </p>
        </div>
        <CreateTodo updateTodoList={updateTodoList} />
        <div>
          <Link className="text-light-color text-center" to="/">
            Sair
          </Link>
        </div>
      </section>

      {/* Coluna direita */}
      <section className="w-full md:w-3/4">
        <TodoList todos={todos} />
      </section>
    </div>
  );
};

export default Dashboard;
