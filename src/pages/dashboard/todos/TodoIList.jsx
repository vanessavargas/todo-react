import React, { useState, useEffect } from "react";
import { fetchTodos, deleteTodo } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchAndSetTodos = async () => {
    try {
      const todosData = await fetchTodos();
      setTodos(todosData);
    } catch (error) {
      console.error("Erro ao buscar as anotações:", error.message);
    }
  };

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  const handleDeleteTodo = async (_id) => {
    try {
      await deleteTodo(_id);
      fetchAndSetTodos();
    } catch (error) {
      console.error("Erro ao deletar a anotação:", error.message);
    }
  };

  if (!todos || todos.length === 0) {
    return (
      <div className="flex justify-center sm:mt-48 sm:ml-0 ml-40 items-center h-full">
        <h1 className="sm:text-3xl font-bold text-gray-400">
          Não há anotações
        </h1>
      </div>
    );
  }

  return (
    <div  className="flex flew-wrap gap-3 p-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          deleteTodo={() => handleDeleteTodo(todo._id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
