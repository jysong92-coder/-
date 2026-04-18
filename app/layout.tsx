import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr"
});

export const metadata: Metadata = {
  title: '고객센터 114 - 대한민국 모든 고객센터·서비스센터·AS센터 안내',
  description: '삼성, LG, SK, KT, 현대, 기아 등 대한민국 모든 기업의 고객센터, 서비스센터, AS센터 전화번호, 위치, 운영시간을 한눈에 확인하세요. 가장 빠르고 정확한 고객센터 정보 안내 서비스.',
  keywords: '고객센터, 서비스센터, AS센터, 전화번호, 삼성 서비스센터, LG 서비스센터, SK 고객센터, KT 고객센터, 현대 서비스센터, 애플 서비스센터',
  authors: [{ name: '고객센터 114' }],
  openGraph: {
    title: '고객센터 114 - 대한민국 모든 고객센터 안내',
    description: '대한민국 모든 기업의 고객센터, 서비스센터, AS센터 정보를 한눈에',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8761588942212704" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8761588942212704"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
