import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Coluna esquerda */}
      <div className="flex items-start justify-center bg-principal-color md:p-12 mb-12 md:mb-0 sm:w-1/2 sm:h-screen h-1/2">
        <div className="text-center p-6">
          <h1 className="text-light-color text-4xl font-bold">
            Olá :) !!
          </h1>
          <p className="my-4">Esta é a página onde a mágica acontece</p>
          <button className="bg-light-color text-principal-color mt-4 border-2 border-light-color hover:border-medium-color p-2 rounded-lg font-bold">
            Inserir anotação
          </button>
        </div>
        <Link className='text-light-color text-center self-end' to='/'>Sair</Link>
      </div>

      {/* Coluna direita */}
      <div className="flex md:flex items-center justify-center">
        <p className="text-gray-300 text-center">Espaço reservado para as notas</p>
      </div>
    </div>
  );
};

export default Dashboard;
