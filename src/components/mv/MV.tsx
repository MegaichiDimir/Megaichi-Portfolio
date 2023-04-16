'use client'
import { Link as Scroll } from 'react-scroll';

import ScrollToNext from "./ScrollToNext"

const MV = () => {
	return (
		<>
			<link rel="stylesheet" href="https://use.typekit.net/qhk1mtd.css"/>
			<div className="flex flex-col justify-center items-center content-center w-full h-full font-['DIN-2014']">
				<div className="flex flex-row ">
					<div className="text-slate-500 text-6xl font-extrabold">  {/* header height 54px */}
						{/* Megaichi&apos;s site */}
						<p>hello</p>
						<p className="text-sm"></p>
					</div>
					<div className="flex flex-col gap-5 font-2xl">
						<Scroll to='about-me' smooth={true} duration={600}>About Me</Scroll>
						<Scroll to='skills' smooth={true} duration={700}>Skills</Scroll>
						<Scroll to='works' smooth={true} duration={800}>Works</Scroll>
					</div>
				</div>
				<ScrollToNext />
			</div>
		</>
	)
}

export default MV;