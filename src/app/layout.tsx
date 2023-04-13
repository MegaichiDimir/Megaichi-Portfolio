import React from 'react'
import '@/app/globals.css'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { roboto, noto_sans_jp } from '@/libs/fonts'

export const metadata = {
  title: {
    default: 'Megaichi\'s Portfolio',
    template: '%s | Megaichi\'s Portfolio',
  },
  description: 'Megaichiのポートフォリオサイト。WEBフロントエンドを中心に、様々な分野を学習しています。',
}

export default function Layout(
  props: { children: React.ReactNode, modal: React.ReactNode }
  ) {
  return (
    <html lang="ja" className={`${roboto.variable} ${noto_sans_jp.variable}`}>
      <body>
        <Header/>
        {props.children}
        {props.modal}
        <ScrollToTop/>
      </body>
    </html>
  )
}
