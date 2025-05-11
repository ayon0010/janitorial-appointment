import { Nunito, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import QueryProvider from '@/Providers/QueryProvider'
import ChatProvider from '@/Providers/ChatProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from '@/Shared/Navbar/Navbar'
import Footer from '@/Shared/Footer/Footer'

export const gilroy = localFont({
  src: [
    {
      path: '../../../public/font/gilroy-regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: "Janitorial Appointments - Commercial Cleaning Leads",
  description: "We provide high-quality commercial cleaning leads, including office cleaning leads, janitorial appointments, and more, for cleaning businesses looking to grow.",
  keywords: "janitorial appointments, janitorial leads, commercial cleaning leads, office cleaning leads, cleaning business leads, commercial cleaning services, office cleaning services, janitorial services, professional cleaning leads, cleaning appointments, cleaning contractor leads, commercial cleaning business, business cleaning leads",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Commercial Cleaning Leads",
      "description": "We provide high-quality commercial cleaning leads, including office cleaning leads, janitorial appointments, and more, for cleaning businesses looking to grow.",
      "keywords": "janitorial appointments, janitorial leads, commercial cleaning leads, office cleaning leads, cleaning business leads, commercial cleaning services, office cleaning services, janitorial services, professional cleaning leads, cleaning appointments, cleaning contractor leads, commercial cleaning business, business cleaning leads",
      "provider": {
        "@type": "Organization",
        "name": "Janitorial Appointments",
        "url": "https://www.janitorialappointment.com/"
      },
      "serviceType": "Cleaning Leads",
      "areaServed": {
        "@type": "Place",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cleaning Leads Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Cleaning Leads"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Cleaning Leads"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Janitorial Appointment Booking"
            }
          }
        ]
      }
    }),
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={``}>
        <main className={`overflow-hidden min-h-screen bg-[#FFFFFF] ${gilroy.className}`}>
          <AuthProvider>
            <QueryProvider>
              <ChatProvider>
                <Navbar />
                <div className="min-h-[400px]">
                  {children}
                </div>
                <Footer />
              </ChatProvider>
            </QueryProvider>
          </AuthProvider>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
