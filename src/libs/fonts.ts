import { Roboto, Noto_Sans_JP, M_PLUS_Rounded_1c } from 'next/font/google';

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

export const m_plus_rounded_1c = M_PLUS_Rounded_1c({
	variable: '--font-m-plus-rounded-1c',
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
})