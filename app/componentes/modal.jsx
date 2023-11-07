import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className=" text-xl font-medium text-white hover:text-orange-500 transition duration-300 ease-in-out"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full p-3 transform overflow-hidden  bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 "
                  >
                    <div className="">
                      <button
                        type="button"
                        className="flex justify-center text-right border-transparent  text-xl text-orange-500 hover:text-orange-300 transition duration-300 ease-in-out"
                        onClick={closeModal}
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  </Dialog.Title>
                  <div className="flex-col flex justify-center items-center  ">
                    <Link href='/'>
                      <p className="font-bold text-orange-500 hover:text-orange-300 transition duration-300 ease-in-out mb-2">
                        Inicio
                      </p>
                    </Link>
                    <Link href='/nosotros'>
                      <p className="font-bold text-orange-500 hover:text-orange-300  transition duration-300 ease-in-out mb-2">
                        Nosotros
                      </p>
                    </Link>
                    <Link href='/contacto'>
                      <p className="font-bold text-orange-500 hover:text-orange-300  transition duration-300 ease-in-out mb-2">
                        Contacto
                      </p>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}