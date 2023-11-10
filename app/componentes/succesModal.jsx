import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-end mb-2">
          <div className="cursor-pointer text-right ml-auto" onClick={onClose}>
            <AiOutlineClose className='text-lg font-bold text-gray-800 hover:text-gray-400 transition duration-300 ease-in-out' />
          </div>
        </div>
        <p className="text-green-500 text-2xl mb-4 flex justify-center font-bold">¡Éxito!</p>
        <p className="text-gray-800 font-bold text-sm md:text-2xl items-center flex text-center">Tu formulario ha sido enviado con éxito.</p>
        <div className='flex justify-center'>
        <button
          onClick={onClose}
          className="mt-4 p-2 font-bold bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out flex justify-center"
        >
          Aceptar
        </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;