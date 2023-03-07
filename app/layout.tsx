import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ weight: ['400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })

export const metadata = {
  title: 'Furbabies Project',
  description: 'Find your forever furbaby',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  )
}
