'use client'
import { Link as Scroll } from 'react-scroll';

const HeaderNav = () => {
	

	return (
		<>
			<div className="flex flex- z-10  ">
				<div>
					<div className="flex flex-row items-center justify-center gap-4 text-slate-600">
						<Scroll to='about-me' smooth={true} duration={600} className='hover:cursor-pointer'>About Me</Scroll>
						<Scroll to='skills' smooth={true} duration={600} className='hover:cursor-pointer'>Skills</Scroll>
						<Scroll to='works' smooth={true} duration={600} className='hover:cursor-pointer'>Works</Scroll>
						<Scroll to='contact' smooth={true} duration={600} className='hover:cursor-pointer'>Works</Scroll>
					</div>
				</div>
			</div>
		</>	
	)
}

export default HeaderNav;