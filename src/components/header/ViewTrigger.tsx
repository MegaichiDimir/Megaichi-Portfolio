'use client'
import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { IntersectionContext } from "../context/IntersectionProvider";

const ViewTrigger = ({ children, sectionName }: { children: React.ReactNode, sectionName: string }) => {
	const {setIntersection} = useContext(IntersectionContext);


	const { ref } = useInView({
		threshold: 0.7,
		onChange: (inView) => {
			if (inView) {
				setIntersection(sectionName)
			}
		}
	});

	return (
		<>
			<div ref={ref}>
				{children}
			</div>
		</>
	)
}

export default ViewTrigger;