import React from 'react'

import '@/app/globals.css'
import ScrollToTop from '@/components/ScrollToTop'
import { IntersectionProvider } from '@/components/context/IntersectionProvider'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { roboto, noto_sans_jp, barlow_semi_condensed } from '@/libs/fonts'

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
    <html lang="ja" className={`${roboto.variable} ${noto_sans_jp.variable} ${barlow_semi_condensed.variable}`}>
      <body>
        <IntersectionProvider>
          <Header/>
          {props.children}
          {props.modal}
          <ScrollToTop/>
          <Footer/>
        </IntersectionProvider>
      </body>
    </html>
  )
}
