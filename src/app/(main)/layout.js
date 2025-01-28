import { Anton, Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import Navbar from '@/Shared/Navbar'
import QueryProvider from '@/Providers/QueryProvider'
import Footer from '@/Shared/Footer'
import ChatProvider from '@/Providers/ChatProvider'


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: "Janitorial Appointments and Commercial Cleaning Leads",
  description:
    "Generate high-quality janitorial appointments, commercial cleaning leads, and boost your janitorial business with effective lead generation strategies.",
  keywords: [
    "janitorial appointments",
    "commercial cleaning leads",
    "janitorial lead generation",
  ],
  authors: [{ name: "Al Shariar Auon" }],
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};


export const anton = Anton({
  subsets: ['latin'],  // The subsets of the font you want to load
  weight: '400',       // Specify the weight as a string, not as an array
});


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  variable: '--font-poppins',
})

export const nunito = Nunito({
  subsets: ['latin'],
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
