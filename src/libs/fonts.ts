import { Roboto, Noto_Sans_JP } from 'next/font/google';

export const roboto = Roboto({
	variable: '--font-roboto',
	weight: ['400', '500'],
	subsets: ['latin'],
	display: 'swap',
})

export const noto_sans_jp = Noto_Sans_JP({
	variable: '--font-noto-sans-jp',
	subsets: ['latin'],
	display: 'swap',
})