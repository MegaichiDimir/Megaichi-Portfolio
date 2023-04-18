'use client';
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { scroller } from 'react-scroll';

// モーダル展開時にスクロール位置を保持する
// Next.js 13.3 から scrollRestoration が効かないため応急処置
// 追記: 13.3.1-canary.7 で修正されたため無効化
const KeepPosition = () => {
	const pathname = usePathname()

	useEffect(() => {
		const pattern = /^\/works.*/
		pattern.test(pathname)
			? scroller.scrollTo('works', {})
			: null
	}, [pathname])


	return (
		<></>
	)
}

export default KeepPosition;