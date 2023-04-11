'use client';
import { SlArrowDown } from "react-icons/sl";
import { Link as Scroll } from 'react-scroll';

const ScrollToNext = () => {
	return (
		<>
			<div className="animate-bounce absolute bottom-8 text-center text-slate-500">
				<Scroll to='about-me' smooth={true} duration={600} className="text-4xl">
					<SlArrowDown />
				</Scroll>
			</div>
		</>
	)
}

export default ScrollToNext;