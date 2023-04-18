'use client'
import { useState, useRef, useContext, useEffect } from 'react';
import { Link as Scroll } from 'react-scroll';

import { IntersectionContext } from '../context/IntersectionProvider';
import { useGetElementProperty } from '../hooks/useGetElementProperty';

const HeaderNav = () => {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const worksRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const aboutMeProps = useGetElementProperty<HTMLDivElement>(aboutMeRef).getElementProperty;
	const skillsProps = useGetElementProperty<HTMLDivElement>(skillsRef).getElementProperty;
	const worksProps = useGetElementProperty<HTMLDivElement>(worksRef).getElementProperty;
	const contactProps = useGetElementProperty<HTMLDivElement>(contactRef).getElementProperty;

	const defaultStyle = {
		width: 0,
		height: aboutMeProps('height'),
		translate: `${aboutMeProps('left')}px ${aboutMeProps('top')}px`,
		transition: 'all 0.15s ease-in-out',
		opacity: 0, 
	}
	const [focusStyle, setFocusStyle] = useState(defaultStyle as {});
	const { intersection } = useContext(IntersectionContext);

	useEffect(() => {
		if (intersection === 'mv') {
			setFocusStyle({
				width: 0,
				height: aboutMeProps('height'),
				translate: `${aboutMeProps('left')}px ${aboutMeProps('top')}px`,
				transition: 'all 0.15s ease-in-out',
				opacity: 0, 
			})
		} else if (intersection === 'about-me') {
			const style = {
				width: aboutMeProps('width'),
				height: aboutMeProps('height'),
				translate: `${aboutMeProps('left')}px ${aboutMeProps('top')}px`,
				transition: 'all 0.15s ease-in-out',
			}
			setFocusStyle(style)
		} else if (intersection === 'skills') {
			const style = {
				width: skillsProps('width'),
				height: skillsProps('height'),
				translate: `${skillsProps('left')}px ${skillsProps('top')}px`,
				transition: 'all 0.15s ease-in-out',
			}
			setFocusStyle(style)
		} else if (intersection === 'works') {
			const style = {
				width: worksProps('width'),
				height: worksProps('height'),
				translate: `${worksProps('left')}px ${worksProps('top')}px`,
				transition: 'all 0.15s ease-in-out',
			}
			setFocusStyle(style)
		} else if (intersection === 'contact') {
			const style = {
				width: contactProps('width'),
				height: contactProps('height'),
				translate: `${contactProps('left')}px ${contactProps('top')}px`,
				transition: 'all 0.15s ease-in-out',
			}
			setFocusStyle(style)
		}
	}, [intersection, aboutMeProps, contactProps, skillsProps, worksProps])


	return (
		<>
			<div className="flex">
				<div>
					<div id='focus' className="fixed top-0 left-0 z-20 p-2 rounded bg-slate-100" style={focusStyle}></div>
					<div className="relative flex flex-row items-center justify-center gap-8 z-30 text-slate-600">
						<div ref={aboutMeRef} className='px-2 rounded hover:cursor-pointer'><Scroll to='about-me' smooth={true} duration={600} offset={-56}>About Me</Scroll></div>
						<div ref={skillsRef} className='px-2 rounded hover:cursor-pointer'><Scroll to='skills' smooth={true} duration={600} offset={-56}>Skills</Scroll></div>
						<div ref={worksRef} className='px-2 rounded hover:cursor-pointer'><Scroll to='works' smooth={true} duration={600} offset={-56}>Works</Scroll></div>
						<div ref={contactRef} className='px-2 rounded hover:cursor-pointer'><Scroll to='contact' smooth={true} duration={600} offset={-56}>Works</Scroll></div>
					</div>
				</div>
			</div>
		</>	
	)
}

export default HeaderNav;