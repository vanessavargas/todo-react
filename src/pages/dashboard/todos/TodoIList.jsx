import React, { useState, useEffect } from "react";
import { fetchTodos, deleteTodo, updateTodo, createTodo } from "./TodoContext";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

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

  const handleCreateTodo = async (description) => {
    try {
      await createTodo(description);
      fetchAndSetTodos();
    } catch (error) {
      console.error("Erro ao criar a anotação:", error.message);
    }
  };

  const handleDeleteTodo = async (_id) => {
    try {
      await deleteTodo(_id);
      fetchAndSetTodos();
    } catch (error) {
      console.error("Erro ao deletar a anotação:", error.message);
    }
  };

  const handleUpdateTodo = async (_id, newDescription) => {
    try {
      await updateTodo(_id, newDescription);
      fetchAndSetTodos();
    } catch (error) {
      console.error("Erro ao atualizar a anotação:", error.message);
    }
  };

  if (!todos || todos.length === 0) {
    return (
      <>
        <CreateTodo createTodo={handleCreateTodo} />
        <div className="flex justify-center pt-16">
          <h1 className="sm:text-3xl font-bold text-gray-400">
            Não há anotações
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <CreateTodo createTodo={handleCreateTodo} />
      <div className="w-100 mt-4 flex flex-wrap gap-2 justify-around p-3 m-2 mb-10">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={() => handleDeleteTodo(todo._id)}
            updateTodo={handleUpdateTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
