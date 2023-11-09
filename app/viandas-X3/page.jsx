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

      <div className="border flex justify-center text-center p-2">
        <div className="max-w-3xl mt-10 mb-10">
          <h2 className="md:text-4xl font-extrabold flex justify-center mb-10 text-orange-500">LO MEJOR EN VIANDAS PARA 3 PERSONAS</h2>
          <p className="flex justify-center text-center text-md mb-5 text-gray-800">
            Unite a los cientos de clientes que mejoraron su salud con viandas La Cocina de Edu.
            Depende tus objetivos puedes usar nuestras deliciosas comidas para tener una dieta saludable que ayude a bajar de peso o mantenerte con mucha energía durante todo el dia.
            Recorda que con nuestras viandas tendrás un plato diferente cada día y semana. Atendemos de Lunes a Viernes.
          </p>
          <h2 className="flex justify-center text-center mb-5 font-bold md:text-3xl text-gray-800">
            Informate de lo que podes encontrar en nuestro menu para 3 personas a continuacion:
          </h2>
          <div className=" flex flex-col items-center mb-5">
            <div className="border bg-amber-800 p-5">
              <p className="font-bold md:text-3xl mb-3 text-white">
                Esta opcion incluye
              </p>

              <p className="text-white mb-1 text-sm lg:text-lg font-bold">
                - Incluye porcion abundante con pan o postre.
              </p>
              <p className="text-white mb-1 text-sm lg:text-lg font-bold">
                - Opcion a cambio de menu.
              </p>
              <p className="text-white mb-1 text-sm lg:text-lg  font-bold">
                - Entrega a domicilio entre las 12:00 am. y 14:00 pm.
              </p>
              <p className="text-white mb-1 text-sm lg:text-lg  font-bold" >
                - 20 dias de vianda.
              </p>
              <p className="text-white mb-1 text-sm lg:text-lg  font-bold">
                - Tenes tu menu en feriados regionales.
              </p>
              <p className="text-white mb-5  text-sm lg:text-lg  font-bold">
                - Te corremos el dia en feriados nacionales.
              </p>
              <p className="text-white  border-white border-2 justify-center flex bg-gray-800 p-2 md:text-md mb-3">
                + info del plan
              </p>
            </div>
          </div>
          <h2 className="text-lg md:text-4xl font-bold flex justify-center mb-5 text-gray-800">Algunos de nuestros menus de la semana</h2>
          <div className="md:flex  justify-center gap-5 p-3 mb-10">
            <div className="flex-col flex justify-center items-center">
              <p className="text-orange-400 font-semibold mb-3">
                /  Milanesa con ensalada mixta
              </p>
              <img className="md:h-40 h-24 w-52" src="/milanesa.png" alt="" />
            </div>
            <div className="flex-col flex justify-center items-center">
              <p className="text-orange-400 font-semibold mb-3">
                /  Pollo Principe
              </p>
              <img className="md:h-40 h-24 w-52" src="/pollo-principe.jpg" alt="" />
            </div>
            <div className="flex-col flex justify-center items-center">
              <p className="text-orange-400 font-semibold mb-3">
                /  Pollo al horno
              </p>
              <img className="md:h-40 h-24 w-52" src="/pollo-al-horno.jpg" alt="" />
            </div>
            <div className="flex-col flex justify-center items-center">
              <p className="text-orange-400 font-semibold mb-3">
                /  Pollo Principe
              </p>
              <img className="md:h-40 h-24 w-52" src="/pollo-principe.jpg" alt="" />
            </div>
          </div>
          <h2 className="text-lg md:text-4xl font-bold flex justify-center mb-5 text-gray-800">
            ¿Cuando me conviene elegir esta opcion?
          </h2>
          <p className="text-gray-800">
            Esta opcion es muy conveniente si sos estudiante
          </p>
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