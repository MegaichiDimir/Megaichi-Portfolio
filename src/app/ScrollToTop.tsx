'use client';
import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop: React.FC = () => {
	const [isShow, setIsShow] = useState(false);

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
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			<div className={(isShow ? "opacity-1" : "opacity-0") + " fixed transition-opacity right-4 bottom-4"}>
				<button disabled={!isShow} onClick={toTop}>
					<div className="p-3 rounded bg-slate-200 hover:bg-slate-100">
						<SlArrowUp />
					</div>
				</button>
			</div>
		</>
	)
}

export default ScrollToTop;