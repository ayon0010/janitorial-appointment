import { Inter, Nunito, } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import QueryProvider from '@/Providers/QueryProvider'
import Footer from '@/Shared/Footer'
import ChatProvider from '@/Providers/ChatProvider'
import Navbar from '@/Shared/Navbar'


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})


export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '900'],
  variable: '--font-nunito',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className}`}>
        <main className='overflow-hidden min-h-screen max-w-[1920px] mx-auto bg-[#EEEFF1]'>
          <AuthProvider>
            <QueryProvider>
              <ChatProvider>
                <Navbar />
                {children}
                <Footer />
              </ChatProvider>
            </QueryProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
