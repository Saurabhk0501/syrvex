import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Syrvex — Build Beyond Limits',
  description: 'Precision-crafted digital experiences. Web, App, UI/UX, VFX, 3D, AI Video & Motion Design for global clients.',
  keywords: 'web development, app development, UI UX design, VFX, 3D, AI video, motion design',
  openGraph: {
    title: 'Syrvex — Build Beyond Limits',
    description: 'Precision-crafted digital experiences for global clients.',
    url: 'https://syrvex.com',
    siteName: 'Syrvex',
    type: 'website',
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
