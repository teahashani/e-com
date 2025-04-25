import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import TopNav from '@/components/TopNav'
import { ThemeProvider } from '@/context/ThemeContext'
import { FavoritesProvider } from '@/context/FavoritesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce Dashboard',
  description: 'Modern e-commerce dashboard with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <FavoritesProvider>
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
              <Navbar />
              <div className="flex-1 flex flex-col overflow-hidden">
                <TopNav />
                <main className="flex-1 overflow-auto">
                  {children}
                </main>
              </div>
            </div>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

