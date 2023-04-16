'use client'
import { useState, useRef } from 'react';
import { Link as Scroll } from 'react-scroll';

import { useGetElementProperty } from './hooks/useGetElementProperty';

const HeaderNav = () => {
	const [focus, setFocus] = useState({});

	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const worksRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const aboutMeProps = useGetElementProperty<HTMLDivElement>(aboutMeRef);
	const skillsProps = useGetElementProperty<HTMLDivElement>(skillsRef);
	const worksProps = useGetElementProperty<HTMLDivElement>(worksRef);
	const contactProps = useGetElementProperty<HTMLDivElement>(contactRef);

	// スクロール位置をトリガーにした処理
	

	return (
		<>
			<div className="flex flex- z-10  ">
				<div>
					<div className="flex flex-row items-center justify-center gap-8 text-slate-600">
						<div ref={aboutMeRef} className='hover:cursor-pointer'><Scroll to='about-me' smooth={true} duration={600} offset={-56}>About Me</Scroll></div>
						<div ref={skillsRef} className='hover:cursor-pointer'><Scroll to='skills' smooth={true} duration={600} offset={-56}>Skills</Scroll></div>
						<div ref={worksRef} className='hover:cursor-pointer'><Scroll to='works' smooth={true} duration={600} offset={-56}>Works</Scroll></div>
						<div ref={contactRef} className='hover:cursor-pointer'><Scroll to='contact' smooth={true} duration={600} offset={-56}>Works</Scroll></div>
					</div>
				</div>
			</div>
		</>	
	)
}

export default HeaderNav;