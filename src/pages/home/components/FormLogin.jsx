import React from "react";
import { Link } from 'react-router-dom';
import Modal from "../../../components/Modal";
import image1 from "../../../assets/images/image1.jpg";

const FormLogin = ({ open, onClose }) => {
    const modalContent = (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-2">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-20 w-auto" src={image1} alt="Logo de Anotações"/>
    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-principal-color">Acesse sua conta</h2>
  </div>

  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-principal-color">E-mail</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-principal-color">Senha</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-medium-color hover:text-light-color">Esqueceu a senha?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-principal-color shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-medium-color sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <Link to="/dashboard">
          <button onClick={onClose} type="submit" className="flex w-full justify-center rounded-md bg-medium-color px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-principal-color shadow-sm hover:bg-light-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-color">Entrar</button>
          </Link>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Ainda não tem uma conta?
      <a href="#" className="font-semibold leading-6 text-medium-color hover:text-light-color">Crie uma, é de graça!</a>
    </p>
  </div>
</div>
        
    </>
  );

  return (
    <Modal open={open} onClose={onClose} content={modalContent}  />
  );
};

export default FormLogin; 
