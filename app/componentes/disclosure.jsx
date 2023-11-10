import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 mb-5 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 transition duration ease-in-out">
                <span className='text-gray-800'>¿Realiza platos diarios?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-300 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-300"
                leave="transition duration-75 ease-in-out"
                leaveFrom="transform scale-300 opacity-300"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4  my-3 text-gray-800">
                  No, no realizamos platos diarios por el momento.
                </Disclosure.Panel>
              </Transition>


            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 mb-5 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 transition duration ease-in-out">
                <span className='text-gray-800'>¿Si algo no me gusta, puedo cambiarlo?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-300 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-300"
                leave="transition duration-75 ease-in-out"
                leaveFrom="transform scale-300 opacity-300"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 my-3 text-gray-800">
                  Siempre tenemos otra alternativa diferente de menu por si uno no te gusta.
                </Disclosure.Panel>
              </Transition>


            </>
          )}
        </Disclosure>


        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 mb-5 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 transition duration ease-in-out">
                <span className='text-gray-800'>¿Acepta pagos por transferencia?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-300 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-300"
                leave="transition duration-75 ease-in-out"
                leaveFrom="transform scale-300 opacity-300"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 my-3 text-gray-800">
               Si, aceptamos metodo de pago en transferencia y efectivo.
                </Disclosure.Panel>
              </Transition>

            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 mb-5 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 transition duration ease-in-out">
                <span className='text-gray-800'>¿La entrega a domicilio es con cargo?</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-300 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-300"
                leave="transition duration-75 ease-in-out"
                leaveFrom="transform scale-300 opacity-300"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 my-3 text-gray-800">
                  No, la entrega a domicilio es totalmente gratuita.
                </Disclosure.Panel>
              </Transition>


            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}