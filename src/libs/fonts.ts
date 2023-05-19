import { Roboto, Noto_Sans_JP, Barlow_Semi_Condensed } from 'next/font/google';

export const roboto = Roboto({
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
})

export const noto_sans_jp = Noto_Sans_JP({
	variable: '--font-noto-sans-jp',
	subsets: ['latin'],
	display: 'swap',
})

export const barlow_semi_condensed = Barlow_Semi_Condensed({
	variable: '--font-barlow-semi-condensed',
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
})