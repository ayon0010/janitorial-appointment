import { Anton, Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import Navbar from '@/Shared/Navbar'
import QueryProvider from '@/Providers/QueryProvider'
import AOSProvider from '@/Providers/AOSProvider'
import Chat from '../../Shared/Chat'
import Script from 'next/script';


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Janitorial Appointment Services | Find Reliable Cleaning Leads',
  description: 'Discover reliable janitorial appointment services and cleaning leads tailored for your business needs. Connect with decision-makers and maximize your cleaning opportunities effortlessly.',
}


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
      <head>
        {/* Facebook SDK Script */}
        <Script
          id="facebook-sdk"
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=619890160420977"
        ></Script>
      </head>
      <body className={`${inter.className}`}>
        <main className='overflow-hidden min-h-screen max-w-[1920px] mx-auto bg-[#edf4ef]'>
          <AuthProvider>
            <QueryProvider>
              <AOSProvider>
                <Navbar />
                {children}
              </AOSProvider>
            </QueryProvider>
          </AuthProvider>
          <Chat />
        </main>
      </body>
    </html>
  )
}
