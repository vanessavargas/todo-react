import React, { useState, useEffect } from "react";
import { fetchTodos, deleteTodo, updateTodo } from "./TodoContext";
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

  const handleUpdateTodo = async (_id, description) => {
    try {
      await updateTodo(_id, description);
      fetchAndSetTodos();
    } catch (error) {
      console.error("Erro ao atualizar a anotação:", error.message);
    }
  };

  if (!todos || todos.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="sm:text-3xl font-bold text-gray-400">
          Não há anotações
        </h1>
      </div>
    );
  }

  return (
    <div  className="w-100 mt-4 flex flex-wrap gap-2 justify-around p-3 m-2">
      {todos.map((todo) => (
        <TodoItem
        key={todo._id}
        todo={todo}
        deleteTodo={() => handleDeleteTodo(todo._id)}
        updateTodo={(newDescription) => handleUpdateTodo(todo._id, newDescription)} 
      />
      
      ))}
    </div>
  );
};

export default TodoList;
