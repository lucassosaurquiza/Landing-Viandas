"use client"


import { AiOutlineWhatsApp } from "react-icons/ai"
import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "../componentes/modal";


const ViandasPorTres = () => {

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
              <Modal/>
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

      <div className="border flex justify-center text-center">
        <div className="max-w-3xl border border-blue-600 mt-10">
          <h2 className="text-4xl font-bold flex justify-center mb-10">Pagan 3 comen 5</h2>
          <p className="flex justify-center text-center mb-5">
            Nuestra promocion te conviene, no te falta nada. Comes rico, saludable y economico.
            Te invito a que revises nuestros detalles aca abajo y saques tus propias conclusiones.
          </p>
          <div className="border flex flex-col items-center mb-5">
            <div className="border bg-green-200 p-5">
              <p className="font-bold text-3xl mb-3">
                Esta opcion incluye
              </p>

              <p className="mb-2">
                - 6 comidas diarias mas sopas y caramelos
              </p>
              <p className="mb-2">
                - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
              </p>
              <p className="mb-2">
                - Plan de 1000, 1200, 1500, y 1800 kcal. diarias
              </p>
              <p className="mb-2">
                - Amplia variedad de platos
              </p>
              <p className="mb-2">
                - Viandas frescas y saludables
              </p>
            </div>
          </div>
          <h2 className="text-lg md:text-4xl font-bold flex justify-center mb-5">Estos son algunos de nuestros platos de la semana</h2>
          <div className="flex justify-center gap-5">
            <div className="flex-col flex justify-center">
              <p className="text-red-400 font-semibold mb-3">
                Menu comun  /  Milanesa con ensalada mixta
              </p>
              <img className="md:h-40 h-32" src="/milanesa.png" alt="" />
            </div>
            <div className="flex-col flex justify-center">
              <p className="text-red-400 font-semibold mb-3">
                Menu especial  /  Milanesa con ensalada mixta
              </p>
              <img className="md:h-40 h-32" src="/milanesa.png" alt="" />
            </div>
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

export default ViandasPorTres