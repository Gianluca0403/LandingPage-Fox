import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  // SUBSTITUA PELOS TEXTOS INSTITUCIONAIS REAIS
  title: 'FOX Reguladora | Regulação de sinistros de transporte, automóvel e property',
  description:
    'A FOX Reguladora atua em todo o Brasil na regulação e liquidação de sinistros de transporte, automóvel, property, vida, affinity e assistência 24h, com laudos técnicos auditáveis.',
  keywords: [
    'regulação de sinistros',
    'sinistro de transporte',
    'reguladora de sinistros',
    'vistoria de cargas',
    'salvados',
    'FOX Reguladora',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'FOX Reguladora | Regulação de sinistros',
    description:
      'Mais de um século de experiência em regulação de sinistros de transporte, automóvel, property, vida, affinity e SOS 24h.',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f8fb' },
    { media: '(prefers-color-scheme: dark)', color: '#061020' },
  ],
}

// aplica o tema salvo antes da primeira pintura, evitando "flash" de cor
const themeScript = `try{if(localStorage.getItem('fox-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
