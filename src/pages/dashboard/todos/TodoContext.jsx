export const createTodo = async (description) => {
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
  
  export const fetchTodos = async () => {
    const requestBody = {
      query: `
          {
            todos {
              _id
              description
              state
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
        },
      });
  
      if (!response.ok) {
        throw new Error("Erro ao deletar a anotação.");
      }
    } catch (error) {
      throw error; 
    }
  };
  