'use client'

import Link from "next/link"
import { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../componentes/modal";
import Example from "../componentes/disclosure";

const Nosotros = () => {

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

      <div className="pt-10 p-3 flex flex-col justify-center max-w-4xl lg:mx-auto lg:my-auto sm:mx-auto sm:my-auto">
        <h2 className="text-orange-400 font-bold justify-center flex text-5xl mb-10 text-center">
          Nosotros
        </h2>
        <h3 className="font-bold text-xl mb-3 text-gray-800">
          ¿Quienes Somos?
        </h3>
        <p className="font-semibold mb-10 text-gray-800">
          Somos una empresa con más de 20 años en el mercado regional. Más de 5,000 personas que probaron nuestro servicio aún nos continúan eligiendo.
          La Cocina de Edu nació con el legado familiar, siendo Eduardo Urquiza quien sentó los primeros pasos en la industria.
          En la actualidad, nos encontramos trabajando para más de 40 personas que mes a mes continúan prefiriendo el sabor antes que el costo, y sí, eso nos caracteriza como industria.
        </p>
        <h3 className="font-bold text-xl mb-3 text-gray-800">
          ¿Por que elegirnos?
        </h3>
        <p className="font-semibold mb-10 text-gray-800">
        ¡Ya sabes! Si prefieres sabor antes que costo, dirígete al ícono de WhatsApp, donde podremos responderte de manera inmediata. Tu consulta no es molestia. Anímate a probar un sabor diferente. 
        </p>
        <h3 className="font-bold text-xl mb-3 text-gray-800">
          Preguntas Frecuentes
        </h3>
        <p className="font-semibold mb-10">
          <Example />
        </p>
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

export default Nosotros