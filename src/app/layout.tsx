import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../assets/styles/globals.css'
import '../assets/styles/scrollbar.css'
import { Footer } from './components/footer'
import ClientProviders from '@/utils/client-providers'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '700'] })

export const metadata: Metadata = {
  title: 'Arena Sync',
  description:
    'Acompanhe cada jogada, cada gol e todos os detalhes do maior campeonato de futebol do Brasil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={roboto.className}>
        <ClientProviders>{children}</ClientProviders>
        <Footer />
      </body>
    </html>
  )
}
