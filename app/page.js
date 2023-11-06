"use client"

import Link from "next/link";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useEffect, useState } from "react";

export default function Home() {


  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <main className="relative flex flex-col items-center justify-center h-screen text-white">
      <img className="w-full h-full absolute object-cover" src="/prueba.jpg" alt="" />
      <img className="absolute md:top-5 md:right-5 md:h-48 md:w-60 top-5 h-40 w-56 lg:h-24 lg:w-32" src="/logo.png" alt="" />
      <p className="text-white lg:text-3xl font-bold absolute top-10 left-20 lg:left-1/3 hidden md:block">
        VIANDAS LA COCINA DE EDU
      </p>
      <p className="text-white text-lg font-bold absolute top-52 block md:hidden">
        Viandas a domicilio
      </p>
      <p className=" text-white lg:text-lg font-bold absolute top-20 left-24  lg:left-2/4 hidden md:block">
        VIANDAS A DOMICILIO
      </p>
      <p className="lg:bg-gray-800 py-2 text-white lg:text-4xl text-2xl font-bold absolute top-32 lg:top-40 md:left-10 lg:left-80 w-2/4 justify-center  hidden md:flex">
        ¿Qué estás buscando?
      </p>
      <BsFillArrowDownCircleFill className=" text-gray-800 text-4xl font-bold absolute top-56 lg:left-1/3 md:top-64 md:left-44 justify-center md:flex hidden" />
      <BsFillArrowDownCircleFill className=" text-gray-800 text-4xl font-bold absolute top-56 lg:right-1/3 md:top-64 md:right-44  justify-center md:flex hidden" />
      <div className="absolute top-60 md:top-72  md:flex md:gap-10 p-3">
        <Link href='/viandas-X1'>
          <section className="bg-orange-400 p-5 cursor-pointer hover:bg-orange-300 hover:scale-105 transition duration-300 ease-in-out rounded-lg mb-5">
            <div className="border-2 border-gray-800 flex justify-center items-center flex-col h-full mb-5">
              <h2 className=" lg:text-2xl  font-bold  text-gray-800 ">
                PLATO DIARIO
              </h2>
            </div>
            <p className="text-white border-white border-2 justify-center flex bg-gray-800 p-2 md:text-xl mb-5">
              + info del plan
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Incluye las 6 comidas diaraias mas sopas y caramelos
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Plan de 1000, 1200, 1500, y 1800 kcal. diarias
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Amplia variedad de platos
            </p>
            <p className="text-white mb-5 text-xs lg:text-lg hidden md:block">
              - Viandas frescas y saludables
            </p>
            <div className="flex justify-center max-w-">
              <p className="border md:text-xl font-extrabold flex justify-center p-1 rounded-md w-2/4 bg-orange-100 text-gray-800 text-xs">
                $5.200
              </p>
            </div>
          </section>
        </Link>

        <Link href='/viandas-X5'>
          <section className="bg-green-800 p-5 cursor-pointer hover:bg-green-700 hover:scale-105 transition duration-300 ease-in-out rounded-lg">
            <div className="border-2 border-gray-800 flex justify-center items-center flex-col h-full mb-5">
              <h2 className=" lg:text-2xl  font-bold  text-gray-800 ">
                VIANDAS POR 5 PERSONAS
              </h2>
            </div>
            <p className="text-white border-white border-2 justify-center flex bg-gray-800 p-2 md:text-xl mb-5 ">
              + info del plan
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Incluye las 6 comidas diaraias mas sopas y caramelos
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Plan de 1000, 1200, 1500, y 1800 kcal. diarias
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block">
              - Amplia variedad de platos
            </p>
            <p className="text-white mb-5 text-xs lg:text-lg hidden md:block">
              - Viandas frescas y saludables
            </p>
            <div className="flex justify-center max-w-">
              <p className="border md:text-xl font-extrabold flex justify-center p-1 rounded-md w-2/4 bg-green-100 text-gray-800 text-xs">
                $8.400
              </p>
            </div>
          </section>
        </Link>
      </div>
      <a className="fixed bottom-5 right-5" href="https://api.whatsapp.com/send?phone=+543794077764&text=Hola,%20quiero%20hacer%20un%20pedido">
        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
          <AiOutlineWhatsApp className="text-4xl" />
        </button>
      </a>
      {showMessage && (
        <div className=" text-xs md:text-lg fixed bottom-10 right-16 bg-gray-900 text-white p-2 hover:bg-gray-800 transition duration-300 ease-in-out rounded-xl">
          ¿En qué podemos ayudarte?
        </div>
      )}
    </main>
  )
}
