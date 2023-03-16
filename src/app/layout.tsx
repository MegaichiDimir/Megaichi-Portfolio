import './globals.css'
import Header from './header'
import ScrollToTop from './ScrollToTop'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header/>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  )
}
