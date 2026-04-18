import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VidyaLabs - Transforming Ideas into Intelligent Digital Solutions',
  description: 'AI-powered, scalable, future-ready software solutions for schools, businesses, startups, and enterprises. Expert in custom software development, cloud services, and advanced tech solutions.',
  keywords: 'software development, AI solutions, cloud services, custom software, ERP, CRM, education software, restaurant management, business automation',
  authors: [{ name: 'VidyaLabs' }],
  openGraph: {
    title: 'VidyaLabs - Software Solutions',
    description: 'Transforming Ideas into Intelligent Digital Solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidyaLabs - Software Solutions',
    description: 'AI-powered, scalable, future-ready software solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
