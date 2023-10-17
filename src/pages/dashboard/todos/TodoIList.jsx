import React, { useState, useEffect } from "react";
import { fetchTodos, deleteTodo, updateTodo, createTodo } from "./TodoContext";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import Pagination from "../../../components/Pagination";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 6;

  const fetchAndSetTodos = async () => {
    try {
      const todosData = await fetchTodos(limit, offset);
      if (!todosData || todosData.length === 0) {
        setHasMore(false);
        return;
      }
      setTodos(todosData);
    } catch (error) {
      console.error("Erro ao buscar as anotações:", error.message);
    }
  };

  useEffect(() => {
    fetchAndSetTodos(limit, offset);
  }, [offset]);

  const handlePaginationNext = () => {
    const newOffset = offset + limit;
    fetchAndSetTodos(limit, newOffset);
    setOffset(newOffset);
  };

  const handlePaginationPrev = () => {
    if (offset >= limit) {
      const newOffset = offset - limit;
      fetchAndSetTodos(limit, newOffset);
      setOffset(newOffset);
      setHasMore(true);
    }
  };

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
      <div className="w-100 flex flex-wrap gap-1 justify-around p-3 m-2 mb-6">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={() => handleDeleteTodo(todo._id)}
            updateTodo={handleUpdateTodo}
          />
        ))}
      </div>
      <Pagination
        onNextPage={handlePaginationNext}
        onPrevPage={handlePaginationPrev}
      />
    </>
  );
};

export default TodoList;
