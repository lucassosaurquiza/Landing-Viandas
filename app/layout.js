import { EB_Garamond } from 'next/font/google'
import './globals.css'
import Footer from './componentes/footer'
import Head from 'next/head'

const Garamound = EB_Garamond({ subsets: ['latin'] })

export const metadata = {
  title: 'La Cocina de Edu - Deléitate con las Mejores Viandas',
  description: 'Descubre la excelencia en viandas gourmet en La Cocina de Edu. ¡Contacta con nosotros para una experiencia culinaria única y deliciosa!',
  image: '/nuevo-logo.png',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta name="google-site-verification" content="mkmZgkKy3ddAGhZcUOmiE_2CrA-y-eqJ8L5C-EBQjFo" />
      </Head>
      <body className={Garamound.className}>{children}</body>
      <Footer />
    </html>
  )
}
