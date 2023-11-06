import Link from "next/link"
import Nosotros from "../nosotros/page"
import Contacto from "../contacto/page"

const Header = () => {
  return (
    <header>

      <div className="w-full border p-3" style={{ backgroundImage: 'url("/prueba.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex justify-between">
          <div>
            <Link href='/'>
              <img className="h-20 w-30" src="/logo.png" alt="" />
            </Link>
          </div>
          <div className="md:flex items-center gap-10 hidden ">

            
            <Link href='/'>
              <p className="font-bold text-white hover:text-orange-500 transition duration-300 ease-in-out">
                Inicio
              </p>
            </Link>
            <Link href='/nosotros'>
              <Nosotros />
            </Link>
            <Link href='/contacto'>
              <Contacto />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header