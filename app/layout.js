import { EB_Garamond } from 'next/font/google'
import './globals.css'
import Footer from './componentes/footer'

const Garamound = EB_Garamond({ subsets: ['latin'] })

export const metadata = {
  title: 'La Cocina de EDU',
  description: 'La Cocina de EDU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Garamound.className}>{children}</body>
      <Footer/>
    </html>
  )
}
