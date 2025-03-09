import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import QueryProvider from '@/Providers/QueryProvider'
import Footer from '@/Shared/Footer'
import ChatProvider from '@/Providers/ChatProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'
import Navbar from '@/Shared/Navbar/Navbar'

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '900'],
  variable: '--font-nunito',
})

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
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.janitorialappointment.com" />
          <link rel="preload" href="../globals.css" as="style" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: metadata.other["application/ld+json"] }}
          />
        </Head>
        <main className={`overflow-hidden min-h-screen max-w-[1920px] mx-auto bg-[#FFFFFF] ${gilroy.className}`}>
          <AuthProvider>
            <QueryProvider>
              <ChatProvider>
                <Navbar />
                <div className='2xl:pt-[100px] xl:pt-[100px] pt-[80px] min-h-[400px]'>
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
