import './globals.css'
import { Outfit } from 'next/font/google'
import profData from '@/data/prof.json'
import Providers from '@/components/Providers'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(profData.siteUrl),
  title: profData.siteTitle,
  description: profData.description,
  keywords: profData.keywords,
  openGraph: {
    title: profData.siteTitle,
    description: profData.description,
    images: [
      {
        url: profData.ogImage,
        width: 1200,
        height: 630,
        alt: profData.ogImageAlt,
      },
    ],
    locale: 'fr_BE',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#059669',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={outfit.className}>
        {/* Scroll reveal is applied by JS; without it the sections must stay visible */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal{opacity:1 !important;transform:none !important}',
            }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
