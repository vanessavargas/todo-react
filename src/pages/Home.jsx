import React from "react";
import imagem2 from "../assets/images/imagem2.jpg";

const HomePage = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Coluna esquerda */}
        <div className="order-2 md:order-1 flex items-center justify-center md:bg-principal-color md:p-12 mb-12 md:mb-0">
          <div className="md:text-start text-center p-6">
            <h1 className="md:text-light-color text-principal-color text-4xl font-bold">
              Organize seu dia a dia com To-Do
            </h1>
            <h2 className="md:text-light-color text-principal-color text-lg mt-4">
              A ferramenta de gerenciamento de tarefas que ajuda você
              visualmente a aproveitar ao máximo seu tempo e energia diários
            </h2>
            <button className="bg-light-color text-principal-color mt-4 border-2 border-light-color hover:border-medium-color p-6 rounded-lg font-bold">
              COMEÇAR AGORA
            </button>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="order-1 md:order-2 flex md:flex items-center justify-center">
          <img src={imagem2} alt="Imagem" className="md:w-2/3 w-1/3 hover:md:w-3/5" />
        </div>
    </div>
  );
};

export default HomePage;
