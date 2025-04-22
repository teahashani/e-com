import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import TopNav from '@/components/TopNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce Dashboard',
  description: 'Modern e-commerce dashboard with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Navbar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

