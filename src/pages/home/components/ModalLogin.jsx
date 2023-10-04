import React from "react";

export default function Modal({ open, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!open) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-bold text-center text-xl text-principal-color py-4">
          Login
        </h1>
        <div className="flex flex-col gap-2 mx-2">
          <input
            type="text"
            className="border border-principal-color p-2 rounded-lg"
            placeholder="Insira seu e-mail"
          />
          <input
            type="password"
            className="border border-principal-color p-2 rounded-lg"
            placeholder="Insira sua senha"
          />
          <button className="bg-light-color text-principal-color m-4 border-2 border-light-color hover:border-medium-color p-2 rounded-lg font-bold">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
