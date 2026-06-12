import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: siteInfo.metaTitle,
  description: siteInfo.metaDescription,
  icons: { icon: '/images/LOGO-ICCD.png' },
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
