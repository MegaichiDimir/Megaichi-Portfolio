import { useCallback, RefObject } from "react";

export type DOMRectProperty = keyof Omit<DOMRect, 'toJSON'>;

export type elementProperty = (targetProperty: DOMRectProperty) => number;

export const useGetElementProperty = <T extends HTMLElement>(
	elementRef: RefObject<T>
) => {
	const getElementProperty = useCallback(
		(targetProperty: DOMRectProperty): number => {
			const clientRect = elementRef.current?.getBoundingClientRect();
			if (clientRect) {
				return clientRect[targetProperty];
			}
			return 0;
		},
			[elementRef]
	);

	return {
		getElementProperty,
	};
};