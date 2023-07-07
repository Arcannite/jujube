import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'jujube',
  description: 'Premium Dog Harnesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <div className="bg-white">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
