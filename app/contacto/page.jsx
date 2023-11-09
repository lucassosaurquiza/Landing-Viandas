'use client'

import Link from "next/link"
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { useEffect, useState } from "react";
import Modal from "../componentes/modal";


const Contacto = () => {

  const [showMessage, setShowMessage] = useState(false);

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

      <div className="bg-white flex flex-col items-center justify-center min-h-screen">
        <p className="justify-center flex text-4xl font-bold pb-5 pt-5 text-orange-400">
          Contacto
        </p>
        <div className="bg-orange-100 p-3 rounded-md">
         <p className="justify-center flex font-bold mb-5 md:text-xl text-center">
         Dejanos tu contacto por cualquier consulta que tengas, te respondemos a la brevedad.
         </p>
         <div className="md:max-w-4xl">
         <form action="" className="justify-center  flex-col  mb-5 ">
          <div className="flex flex-col md:flex">
          <label className="mr-3">Nombre:</label>
          <input type="text" name="nombre" placeholder="Nombre" className="rounded-md p-1 mb-2" />
          <label className="mr-3">Correo:</label>
          <input type="text" name="correo" placeholder="Correo" className="rounded-md p-1 mb-2" />
          </div>
          <div className="flex flex-col">
          <label className="mr-3">Numero:</label>
          <input type="text" name="numero" placeholder="Numero" className="rounded-md p-1 mb-2" />
          <label htmlFor="">Mensaje detallado:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
         </form>
         </div>
         <div className="justify-center flex">
         <button className="p-2 border border-orange-400 rounded-md text-orange-400 font-bold text-xl hover:shadow-xl transition duration-300 ease-in-out">Enviar</button>
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