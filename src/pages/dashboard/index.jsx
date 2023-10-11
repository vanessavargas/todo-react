import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoList from "./todos/TodoIList";
import { fetchTodos } from "./todos/TodoContext";
import imagem from "../../assets/images/image2.png";

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

  return (
    <div className="flex md:flex-row flex-wrap h-screen items-stretch">
      {/* Coluna esquerda */}
      <section className="flex grow md:flex-col w-full md:w-1/4 gap-24 items-center justify-center bg-principal-color md:mb-0 md:h-full h-48">
        <img
          className="md:hidden block w-24 h-24"
          src={imagem}
          alt="bloco de anotações com lápis"
        />

        <div className="md:block hidden text-center p-6">
          <img src={imagem} alt="bloco de anotações com lápis" />
          <h2 className="text-light-color font-bold">
            Você precisa fazer aquilo que pensa que não é capaz de fazer.
          </h2>
          <p>
            <i>Eleanor Roosevelt</i>
          </p>
        </div>
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
