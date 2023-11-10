'use client'

import Link from "next/link"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { useEffect, useState } from "react";
import Modal from "../componentes/modal";
import { useForm } from 'react-hook-form'
import SuccessModal from "../componentes/succesModal";
import LoadingSpinner from "../componentes/loadingSpinner";


const Contacto = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  console.log(errors)

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    // Simulando una solicitud de API o alguna lógica de envío
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setShowSuccessModal(true);
    reset();
  })


  const closeModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <section>
      <header>
        <div className="w-full  p-3" style={{ backgroundImage: 'url("/prueba.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex justify-between items-center">
            <div className="hover:bg-orange-200 rounded-lg  p-2 bg-orange-400 transition duration-300 ease-in-out">
              <Link href='/'>
                <img className="h-20 w-30" src="/nuevo-logo.png" alt="" />
              </Link>
            </div>
            <div className="md:hidden">
              <Modal />
            </div>
            <div className="md:flex items-center gap-10 hidden ">
              <Link href='/'>
                <p className="font-bold text-white hover:text-orange-500 transition duration-300 ease-in-out">
                  Inicio
                </p>
              </Link>
              <Link href='/nosotros'>
                <p className="font-bold text-white hover:text-orange-500 transition duration-300 ease-in-out">
                  Nosotros
                </p>
              </Link>
              <Link href='/contacto'>
                <p className="font-bold text-white hover:text-orange-500 transition duration-300 ease-in-out">
                  Contacto
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white  flex flex-col items-center justify-center min-h-screen">
        <p className="justify-center flex text-5xl font-bold pb-10 pt-10 text-orange-400">
          Contacto
        </p>
        <div className="bg-orange-100 rounded-md mb-10 md:p-3 p-2">
          <p className="justify-center flex font-bold mb-5 md:text-xl text-center text-gray-800">
            Dejanos tu contacto por cualquier consulta que tengas, te respondemos a la brevedad.
          </p>
          <div className="md:max-w-4xl">
            <form onSubmit={onSubmit} className="justify-center flex-col mb-5 ">
              <div className="flex flex-col md:flex">
                <label htmlFor="nombre" className="mr-3 text-gray-800 font-bold">Nombre:</label>
                <input
                  type="text"
                  {...register("nombre",
                    {
                      required: {
                        value: true,
                        message: "Nombre es requerido"
                      },
                      minLength: {
                        value: 2,
                        message: "Nombre requiere al menos 2 caracteres"
                      },
                      maxLength: {
                        value: 20,
                        message: "Nombre no puede contener mas de 20 caracteres"
                      }
                    })}
                  placeholder="Nombre"
                  className="rounded-md p-1 " />
                {
                  errors.nombre &&
                  <span className="text-red-400 mb-1 font-bold">{errors.nombre.message}</span>
                }

                <label htmlFor="correo" className="mr-3 text-gray-800 font-bold">Correo:</label>
                <input
                  type="text"
                  {...register("correo",
                    {
                      required: {
                        value: true,
                        message: "Correo es requerido"
                      },
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Correo no valido"
                      }
                    })}
                  name="correo"
                  placeholder="Correo"
                  className="rounded-md p-1 " />
                {errors.correo && <span className="text-red-400 mb-3 font-bold">{errors.correo.message}</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="numero" className="mr-3 text-gray-800 font-bold">Numero:</label>
                <input type="text"
                  {...register("numero",
                    {
                      required: {
                        value: true,
                        message: "El numero es requerido"
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se aceptan numeros"
                      }
                    })}
                  name="numero"
                  placeholder="Numero"
                  className="rounded-md p-1 " />
                {errors.numero && <span className="text-red-400 mb-3 font-bold">{errors.numero.message}</span>}
                <label htmlFor="mensaje" className="font-bold text-gray-800">Mensaje detallado:</label>
                <textarea
                  {...register("mensaje")}
                  className="mb-10"
                  name="mensaje"
                  id=""
                  cols="30"
                  rows="10"></textarea>
              </div>
              <div className="justify-center flex">
                <button
                  type="submit"
                  className="p-2 border border-orange-400 rounded-md text-orange-400 font-bold text-xl hover:shadow-xl transition duration-300 ease-in-out"
                  disabled={loading}>
                  {loading ? <LoadingSpinner/> : 'Enviar'}
                </button>
              </div>
            </form>
            {showSuccessModal && <SuccessModal onClose={closeModal} />}
          </div>
        </div>
      </div>



      <a className="fixed bottom-5 right-5" href="https://api.whatsapp.com/send?phone=+543794394705&text=Hola,%20me%20gustaria%20hacer%20una%20consulta">
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
          <AiOutlineWhatsApp className="text-4xl" />
        </button>
      </a>
      {showMessage && (
        <div className=" text-xs md:text-lg fixed bottom-10 right-16 bg-gray-900 text-white p-2 hover:bg-gray-800 transition duration-300 ease-in-out rounded-xl">
          ¿En qué podemos ayudarte?
        </div>
      )}
    </section>

  )
}

export default Contacto