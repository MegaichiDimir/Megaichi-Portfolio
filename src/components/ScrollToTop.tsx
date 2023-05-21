"use client";
import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import { Link as Scroll } from "react-scroll";

const ScrollToTop: React.FC = () => {
	const [isShow, setIsShow] = useState(false);

	const toggleShow = () => {
		window.scrollY > 100
			? setIsShow(true)
			: setTimeout(() => setIsShow(false), 150)
	}

	useEffect(() => {
		window.addEventListener("scroll", toggleShow)
		return () => window.removeEventListener("scroll", toggleShow)
	}, [])

	return (
		<>
			<div className={(isShow ? "opacity-1" : "opacity-0") + " fixed z-10 transition-opacity right-4 bottom-4"}>
				{isShow === true
					?	<Scroll to="header" smooth={true} duration={600}>
							<div className="p-3 rounded bg-slate-200 hover:bg-slate-100 text-slate-900 hover:text-slate-500">
								<SlArrowUp />
							</div>
						</Scroll>
					:	<></>
				}
			</div>
		</>
	)
}

export default ScrollToTop;