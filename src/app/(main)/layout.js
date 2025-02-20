import { Inter, Nunito, } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import QueryProvider from '@/Providers/QueryProvider'
import Footer from '@/Shared/Footer'
import ChatProvider from '@/Providers/ChatProvider'
import Navbar from '@/Shared/Navbar'
import Providers from '@/Providers/Providers'


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

export const metadata = {
  title: "Janitorial Appointments | Commercial Cleaning Leads",
  description:
    "Boost your janitorial business with high-quality janitorial appointments and commercial cleaning leads. Unlock effective lead generation strategies for growth.",
  keywords: [
    "janitorial appointments",
    "commercial cleaning leads",
    "janitorial lead generation",
    "cleaning service leads",
    "book janitorial appointments",
  ],
  authors: [
    {
      name: "Al Shariar Auon",
    },
  ],
  charset: "utf-8",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.className}`}>
        <main className='overflow-hidden min-h-screen max-w-[1920px] mx-auto bg-[#EEEFF1]'>
          <Providers>
            <Navbar />
            <div className='2xl:pt-[100px] xl:pt-[100px] pt-[80px]'>
              {children}
            </div>
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  )
}
