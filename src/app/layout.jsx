import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Niftyy',
  description:
    'Welcome to Niftyy! Your one-stop marketplace to explore, buy, sell, and collect digital assets',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
