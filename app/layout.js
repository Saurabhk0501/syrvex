import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Syrvex — Web & App Development Company in Pune',
  description: 'Syrvex is a Pune-based IT company offering Web Development, App Development, UI/UX Design, VFX & 3D, AI Video, and Branding services for businesses across India and globally.',
  keywords: 'web development pune, app development pune, UI UX design pune, IT company pune, website design pune, mobile app development, React Next.js developer pune, VFX 3D pune, AI video pune, syrvex',
  authors: [{ name: 'Syrvex' }],
  creator: 'Syrvex',
  publisher: 'Syrvex',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.syrvex.co.in',
  },
  openGraph: {
    title: 'Syrvex — Web & App Development Company in Pune',
    description: 'Pune-based IT company offering Web Development, App Development, UI/UX Design, VFX & 3D, AI Video and Branding services.',
    url: 'https://www.syrvex.co.in',
    siteName: 'Syrvex',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syrvex — Web & App Development Company in Pune',
    description: 'Pune-based IT company offering Web Development, App Development, UI/UX Design, VFX & 3D, AI Video and Branding services.',
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  )
}