import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import image1 from "../../../assets/images/image1.jpg";
import Swal from "sweetalert2";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const requestBody = {
      query: `
        mutation {
          login (email: "${email}", password: "${password}")
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
      .then((data) => {
        console.log("Resposta da requisição:", data);
        if (data && data.data && data.data.login) {
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: data.login,
            })
          );
          window.location.href = "/dashboard";
        } else {
          Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Dados incorretos. Por favor, tente novamente.",
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
      });
  };

  const { open, onClose } = props;
  const modalContent = (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={image1}
            alt="Logo de Anotações"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-principal-color">
            Acesse sua conta
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
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
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-md border-0 p-1.5  text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-principal-color"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-medium-color hover:text-light-color"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="m-4 text-center text-sm">
            <p className=" text-gray-500">Ainda não tem uma conta?</p>
            <Link to="/register">
              <p className="font-semibold text-medium-color hover:text-light-color">
                Então crie uma, é grátis!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return <Modal open={open} onClose={onClose} content={modalContent} />;
}
