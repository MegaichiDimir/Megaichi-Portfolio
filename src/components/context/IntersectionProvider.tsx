"use client"
import React, { useState, createContext } from "react";

type IntersectionContextType = {
	intersection: string,
	setIntersection: React.Dispatch<React.SetStateAction<string>>,
}

export const IntersectionContext = createContext({} as IntersectionContextType);

export const IntersectionProvider = ({ children }: { children: React.ReactNode }) => {
	// Global State
	const [intersection, setIntersection] = useState<string>("test");

	return (
		<IntersectionContext.Provider value={{intersection, setIntersection}}>
			{children}
		</IntersectionContext.Provider>
	)
}