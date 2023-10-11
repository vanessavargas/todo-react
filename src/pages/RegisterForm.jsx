import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const userNameEl = useRef(null);
  const emailEl = useRef(null);
  const passwordEl = useRef(null);
  const confirmPasswordEl = useRef(null);

  const handleSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Cadastro realizado com sucesso!",
      showConfirmButton: true,
      confirmButtonText: "Ok!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("/");
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = userNameEl.current.value;
    const email = emailEl.current.value;
    const password = passwordEl.current.value;
    const confirmPassword = confirmPasswordEl.current.value;

    if (
      userName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "As senhas não coincidem. Por favor, tente novamente.",
      });
      return;
    }

    const requestBody = {
      query: `
          mutation {
            createUser (userName: "${userName}", email: "${email}",password: "${password}"){
              _id
              userName
              email
            }
          }
        `,
    };

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        handleSuccess();
      })
      .catch((error) => {
        console.error("Erro ao fazer cadastro:", error);
      });
  };

  return (
    <div>
      <Link to="/" className="absolute top-4 left-4">
        <p className="font-semibold text-medium-color hover:text-light-color">
          <span className="text-lg">&#x2190; </span> Retornar à página principal
        </p>
      </Link>

      <div className="flex min-h-screen flex-col justify-center items-center px-6 py-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-principal-color">
            Crie sua conta, é grátis!!
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                for="userName"
                className="block text-sm font-medium leading-6 text-principal-color"
              >
                Nome de usuário
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                ref={userNameEl}
                required
                className="mt-2 block w-full rounded-md border-0 p-1.5  text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-principal-color"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                ref={emailEl}
                autocomplete="email"
                required
                className="mt-2 block w-full rounded-md border-0 p-1.5  text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-principal-color"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                ref={passwordEl}
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 p-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-principal-color"
              >
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                ref={confirmPasswordEl}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
