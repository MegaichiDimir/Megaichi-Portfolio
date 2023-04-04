'use client';

import { SlArrowDown } from "react-icons/sl";

const ScrollToNext = () => {
		const toNext = () => {
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth'
			})
		}

	return (
		<>
			<div className="animate-bounce absolute bottom-8 text-center text-slate-500">
				<button className="text-4xl" onClick={toNext}>
					<SlArrowDown />
				</button>
			</div>
		</>
	)
}

export default ScrollToNext;