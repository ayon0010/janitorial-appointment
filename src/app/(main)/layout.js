import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import QueryProvider from '@/Providers/QueryProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from '@/Shared/Navbar/Navbar'
import Footer from '@/Shared/Footer/Footer'
import { gilroy } from '@/Shared/gilroy'

export const metadata = {
  metadataBase: new URL('https://www.janitorialappointment.com'),
  title: {
    default: 'Janitorial Appointments & Commercial Cleaning Leads',
    template: '%s | JanitorialAppointment.com'
  },
  description: 'Get qualified janitorial appointments and commercial cleaning leads. We generate prospects and book appointments for cleaning businesses nationwide.',
  keywords: ['janitorial appointments', 'commercial cleaning leads', 'janitorial leads', 'cleaning leads'],
  authors: [{ name: 'Janitorial Appointment' }],
  creator: 'Janitorial Appointment',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.janitorialappointment.com',
    title: 'Janitorial Appointments & Commercial Cleaning Leads',
    description: 'Get qualified janitorial appointments and commercial cleaning leads.',
    siteName: 'JanitorialAppointment.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janitorial Appointments & Commercial Cleaning Leads',
    description: 'Get qualified janitorial appointments and commercial cleaning leads.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={``}>
        <main className={`overflow-hidden min-h-screen bg-[#FFFFFF] ${gilroy.className}`}>
          <AuthProvider>
            <QueryProvider>
              <Navbar />
              <div className="min-h-[400px]">
                {children}
              </div>
              <Footer />
            </QueryProvider>
          </AuthProvider>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
