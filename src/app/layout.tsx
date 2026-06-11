import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Iglesia Cristiana Casa de Dios Sincelejo | Asociación cristiana casa de Dios',
  description: 'Adoramos a Dios y servimos en Cristo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
