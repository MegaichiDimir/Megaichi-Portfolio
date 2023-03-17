'use client';
import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop: React.FC = () => {
	const [isShow, setIsShow] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const toggleShow = () => {
		window.scrollY > 100
			? setIsShow(true)
			: setIsShow(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleShow)
		return () => window.removeEventListener('scroll', toggleShow)
	}, [])

	const toTop = () => {
		setScrolling(true)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
		// buttonがdisabledになるとスクロールが停止する(chromeのみ確認)ため、遅延させる
		setTimeout(() => setScrolling(false), 1500)
	}

	return (
		<>
			<div className={(isShow ? "opacity-1" : "opacity-0") + " fixed transition-opacity right-4 bottom-4"}>
				<button disabled={!isShow && !scrolling} onClick={toTop}>
					<div className="p-3 rounded bg-slate-200 hover:bg-slate-100">
						<SlArrowUp />
					</div>
				</button>
			</div>
		</>
	)
}

export default ScrollToTop;