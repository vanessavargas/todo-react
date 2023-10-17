import React, { useState } from "react";
import image from "../../assets/images/image.png";
import LoginForm from "./components/LoginForm";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const handleOnClose = () => setOpen(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Coluna esquerda */}
      <div className="order-2 md:order-1 flex items-center justify-center md:bg-principal-color md:p-12 mb-12 md:mb-0">
        <div className="md:text-start text-center p-6">
          <h1 className="md:text-light-color text-principal-color text-4xl font-bold">
            Organize seu dia a dia com To-Do
          </h1>
          <h2 className="md:text-light-color text-principal-color text-lg mt-4">
            A ferramenta de gerenciamento de tarefas que ajuda você visualmente
            a aproveitar ao máximo seu tempo e energia diários
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 p-4 rounded-lg font-semibold leading-6 text-white hover:text-principal-color  shadow-sm bg-medium-color hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color"
          >
            COMEÇAR AGORA
          </button>
        </div>
      </div>

      {/* Coluna direita */}
      <div className="order-1 md:order-2 flex md:flex items-center justify-center">
        <img
          src={image}
          alt="Imagem"
          className="md:w-2/3 w-1/3 hover:md:w-3/5"
        />
      </div>
      <LoginForm onClose={handleOnClose} open={open} />
    </div>
  );
};

export default HomePage;
