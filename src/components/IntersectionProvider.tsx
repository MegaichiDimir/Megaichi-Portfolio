'use client'
import { useState, createContext, useContext } from "react";
import { useInView } from "react-intersection-observer";

type IntersectionState = {
	intersection: string;
	setIntersection: (intersection: string) => void;
}

const useFocusState = () => {
	const [intersection, setIntersection] = useState('');
	return {
		intersection,
		setIntersection
	}
}

export const IntersectionContext = createContext<IntersectionState>({} as IntersectionState);

export const IntersectionProvider = ({ children, sectionName }: { children: React.ReactNode, sectionName: string }) => {
	const context = useContext(IntersectionContext);

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	if (inView) context.setIntersection(sectionName);

	return (
		<IntersectionContext.Provider value={useFocusState()}>
			<div ref={ref}>
				{children}
			</div>
		</IntersectionContext.Provider>
	)
}