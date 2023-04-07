import { roboto, noto_sans_jp } from './fonts'
import '@/app/globals.css'
import Header from '@/app/components/Header'
import ScrollToTop from '@/app/components/ScrollToTop'


export const metadata = {
  title: {
    default: 'Megaichi\'s Portfolio',
    template: '%s | Megaichi\'s Portfolio',
  },
  description: 'Megaichiのポートフォリオサイト。WEBフロントエンドを中心に、様々な分野を学習しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${roboto.variable} ${noto_sans_jp.variable}`}>
      <head>
      </head>
      <body>
        <Header/>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  )
}
