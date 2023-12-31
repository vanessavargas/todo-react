const isLoggedIn = localStorage.getItem("login") !== null;
const token = isLoggedIn ? JSON.parse(localStorage.getItem("login")).token : null;

export const createTodo = async (description) => {
  console.log(token);
  const requestBody = {
    query: `
          mutation {
            createTodo (description: "${description}"){
              _id
              description
            }
          }
        `,
  };

  try {
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao criar a anotação.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchTodos = async (limit, offset) => {
  const requestBody = {
    query: `
      {
        todos (limit: ${limit}, offset: ${offset}) {
              _id
              description
              state
              createdOn
            }
          }
        `,
  };

  try {
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar as anotações.");
    }

    const data = await response.json();
    return data.data.todos;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (_id, newDescription) => {
  console.log(
    `enviando atualização _id: "${_id}", description: "${newDescription}"`
  );
  const requestBody = {
    query: `
          mutation {
            updateTodo(_id: "${_id}", description: "${newDescription}") {
              _id
              description
            }
          }
        `,
  };

  try {
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao editar a anotação.");
    }

    const data = await response.json();
    return data.data.updateTodo;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (_id) => {
  const requestBody = {
    query: `
          mutation {
            deleteTodo(_id: "${_id}")
          }
        `,
  };

  try {
    const response = await fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar a anotação.");
    }
  } catch (error) {
    throw error;
  }
};
