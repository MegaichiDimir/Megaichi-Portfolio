"use client"
import { useState, useRef, useContext, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link as Scroll } from "react-scroll";
import { useMedia } from "react-use";

import { IntersectionContext } from "../context/IntersectionProvider";
import { useGetElementProperty } from "../hooks/useGetElementProperty";

const HeaderNav = () => {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const worksRef = useRef<HTMLDivElement>(null);
	const blogRef = useRef<HTMLDivElement>(null);

	const aboutMeProps = useGetElementProperty<HTMLDivElement>(aboutMeRef).getElementProperty;
	const skillsProps = useGetElementProperty<HTMLDivElement>(skillsRef).getElementProperty;
	const worksProps = useGetElementProperty<HTMLDivElement>(worksRef).getElementProperty;
	const blogProps = useGetElementProperty<HTMLDivElement>(blogRef).getElementProperty;

	const defaultStyle = {
		width: 0,
		height: aboutMeProps("height"),
		translate: `${aboutMeProps("left")}px ${aboutMeProps("top")}px`,
		opacity: 0, 
		backgroundColor: "rgb(226, 232, 240)",
	}
	const [focusStyle, setFocusStyle] = useState(defaultStyle as {});
	const { intersection } = useContext(IntersectionContext);

	useEffect(() => {
		if (intersection === "mv") {
			setFocusStyle({
				width: 0,
				height: aboutMeProps("height"),
				translate: `${aboutMeProps("left")}px ${aboutMeProps("top")}px`,
				opacity: 0, 
				backgroundColor: "rgb(226, 232, 240)",
			})
		} else if (intersection === "about-me") {
			const style = {
				width: aboutMeProps("width"),
				height: aboutMeProps("height"),
				translate: `${aboutMeProps("left")}px ${aboutMeProps("top")}px`,
				backgroundColor: "rgb(226, 232, 240)",
			}
			setFocusStyle(style)
		} else if (intersection === "skills") {
			const style = {
				width: skillsProps("width"),
				height: skillsProps("height"),
				translate: `${skillsProps("left")}px ${skillsProps("top")}px`,
				backgroundColor: "rgb(236, 252, 203)",
			}
			setFocusStyle(style)
		} else if (intersection === "works") {
			const style = {
				width: worksProps("width"),
				height: worksProps("height"),
				translate: `${worksProps("left")}px ${worksProps("top")}px`,
				backgroundColor: "rgb(224, 242, 254)",
			}
			setFocusStyle(style)
		} else if (intersection === "blog") {
			const style = {
				width: blogProps("width"),
				height: blogProps("height"),
				translate: `${blogProps("left")}px ${blogProps("top")}px`,
				backgroundColor: "rgb(254, 249, 195)",
			}
			setFocusStyle(style)
		}

	}, [intersection, aboutMeProps, skillsProps, worksProps, blogProps])

	const [isOpen, setIsOpen] = useState(false);
	const isWide = useMedia("(min-width: 768px)", true);

	return (
		<>
			<button className='md:hidden z-[80] text-2xl' aria-label="Navigation menu" onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}}>{isOpen ? <MdClose /> : <MdMenu />}</button>
			<div className={`fixed md:static top-0 right-0 pt-14 md:pt-0 w-60 md:w-auto h-screen md:h-auto transition-transform ${isWide? "hidden md:block" : `block bg-white ${isOpen ? "" : "translate-x-[16rem]"}`}`}>
				<div id='focus' className="fixed top-0 left-0 z-[60] rounded transition-all" style={focusStyle}></div>
				<nav className="relative z-[70] flex flex-col md:flex-row items-center justify-center gap-8 text-slate-800">
					<div ref={aboutMeRef} className='px-2 rounded hover:cursor-pointer min-w-[10rem] md:min-w-0 md:w-auto'><Scroll to='about-me' smooth={true} duration={600} offset={-56}>About Me</Scroll></div>
					<div ref={skillsRef} className='px-2 rounded hover:cursor-pointer min-w-[10rem] md:min-w-0 md:w-auto'><Scroll to='skills' smooth={true} duration={600} offset={-56}>Skills</Scroll></div>
					<div ref={worksRef} className='px-2 rounded hover:cursor-pointer min-w-[10rem] md:min-w-0 md:w-auto'><Scroll to='works' smooth={true} duration={600} offset={-56}>Works</Scroll></div>
					<div ref={blogRef} className='px-2 rounded hover:cursor-pointer min-w-[10rem] md:min-w-0 md:w-auto'><Scroll to='blog' smooth={true} duration={600} offset={-56}>Blog</Scroll></div>
				</nav>
			</div>
		</>	
	)
}

export default HeaderNav;