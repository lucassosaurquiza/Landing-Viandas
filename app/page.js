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
      <img className="absolute md:top-5 md:right-5 md:h-28 md:w-40 top-3 h-40 w-56 lg:h-24 lg:w-32 bg-orange-400 rounded-lg  p-2 " src="/nuevo-logo.png" alt="" />
      <h2 className="text-white text-2xl lg:text-5xl font-bold absolute top-10 md:top-5 left-90  hidden md:block">
        LA COCINA DE EDU
      </h2>
      <p className="text-white text-xl font-bold absolute top-48 block md:hidden">
        ¿Qué estás buscando?
      </p>
      <p className="text-white text-xl font-bold absolute top-56 block md:hidden">
        Elegi tu Opcion:
      </p>
      <p className=" text-white lg:text-lg font-bold absolute top-20 lg:left-80  hidden lg:block">
        CONTRATA TU VIANDA Y TENELA POR 20 DIAS COMPLETOS, NI UN DIA MAS, NI UN DIA MENOS
      </p>
      <p className="lg:bg-gray-800 py-2 text-white lg:text-4xl text-2xl font-bold absolute top-56 lg:top-40 md:left-40 lg:left-96 w-2/4 justify-center  hidden md:flex">
        ¿Qué estás buscando?
      </p>
      <BsFillArrowDownCircleFill className=" text-gray-800 text-4xl font-bold absolute top-56 lg:left-72 md:top-64 md:left-44 justify-center lg:flex hidden" />
      <BsFillArrowDownCircleFill className=" text-gray-800 text-4xl font-bold absolute top-56 lg:right-2/4 md:top-64 md:right-44  justify-center lg:flex hidden" />
      <BsFillArrowDownCircleFill className=" text-gray-800 text-4xl font-bold absolute top-56 lg:right-72 md:top-64 md:right-36  justify-center lg:flex hidden" />
      <div className="absolute top-64 md:top-72  md:flex md:gap-5 p-3 px-10">
        <Link href='/viandas-X1'>
          <section className="border p-5 cursor-pointer hover:bg-orange-300 hover:scale-105 transition duration-300 ease-in-out rounded-lg mb-5 hover:border-none shadow-2xl">
            <div className="border-2 border-gray-800 flex justify-center items-center p-1 flex-col h-full mb-5 md:p-1">
              <h2 className=" md:text-md  text-xs font-bold  text-white ">
                VIANDAS INDIVIDUALES
              </h2>
            </div>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Incluye porcion abundante con pan.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold" >
              - 20 dias de vianda.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Tenes tu menu en feriados regionales.
            </p>
            <p className="text-white mb-5  text-xs lg:text-lg hidden md:block font-bold">
              - Te corremos el dia en feriados nacionales.
            </p>
            <p className="text-white  border-white border-2 justify-center flex bg-gray-800 p-2 md:text-md mb-3">
              + info del plan
            </p>
          </section>
        </Link>

        <Link href='/viandas-X3'>
          <div className="absolute lg:right-1/3 lg:top-0 md:top-0 md:right-60 top-40 right-2 bg-red-500 text-white p-2 rounded-full text-xs font-bold z-10">
            Exclusivo
          </div>
          <section className=" p-5 cursor-pointer hover:bg-amber-800 hover:scale-105 transition duration-300 ease-in-out rounded-lg border hover:border-none mb-5 shadow-2xl">
            <div className="border-2 border-gray-800 flex justify-center items-center p-1 flex-col h-full mb-5 md:p-1">
              <h2 className="  md:text-md text-xs md:text-md font-bold  text-white ">
                VIANDAS POR 3 PERSONAS
              </h2>
            </div>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Incluye porcion abundante con pan o postre.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Opcion a cambio de menu.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold" >
              - 20 dias de vianda.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Tenes tu menu en feriados regionales.
            </p>
            <p className="text-white mb-5  text-xs lg:text-lg hidden md:block font-bold">
              - Te corremos el dia en feriados nacionales.
            </p>
            <p className="text-white  border-white border-2 justify-center flex bg-gray-800 p-2 md:text-md mb-3">
              + info del plan
            </p>
          </section>
        </Link>

        <Link href='/viandas-X6'>
          <div className=" absolute lg:top-0 bottom-32 right-2 bg-red-500 text-white p-2 rounded-full text-xs font-bold z-10">
            Exclusivo
          </div>
          <section className=" p-5 cursor-pointer hover:bg-amber-300 hover:scale-105 transition duration-300 ease-in-out rounded-lg border hover:border-none shadow-2xl">
            <div className="border-2 border-gray-800 flex justify-center items-center p-1 flex-col h-full mb-5 md:p-1">
              <h2 className="  md:text-md text-xs md:text-md  font-bold  text-white ">
                VIANDAS POR 6 PERSONAS
              </h2>
            </div>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Incluye porcion abundante con pan y postre.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Opcion a cambio de menu.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold" >
              - 20 dias de vianda.
            </p>
            <p className="text-white mb-1 text-xs lg:text-lg hidden md:block font-bold">
              - Tenes tu menu en feriados regionales.
            </p>
            <p className="text-white mb-5  text-xs lg:text-lg hidden md:block font-bold">
              - Te corremos el dia en feriados nacionales.
            </p>
            <p className="text-white  border-white border-2 justify-center flex bg-gray-800 p-2 md:text-md mb-3">
              + info del plan
            </p>
          </section>
        </Link>
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


    </main>

  )
}
