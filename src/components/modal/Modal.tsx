"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useCallback, useRef, useEffect } from "react";

import { MdArrowBackIosNew } from 'react-icons/md'

const Modal = ({ children }: { children: React.ReactNode }) => {
	const [rendered, setRendered] = useState(false);
	const overlay = useRef<HTMLDivElement | null>(null);
	const wrapper = useRef<HTMLDivElement | null>(null);
	const router = useRouter();

	// トランジションのためのステート操作
	useEffect(() => {
		setRendered(true)
	}, []);

	const onDismiss = useCallback(() => {
		setRendered(false);
		setTimeout(() => router.back(), 150)
	}, [router]);

	const onClick = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === overlay.current || e.target === wrapper.current) {
				if (onDismiss) onDismiss();
			}
		},
		[onDismiss, overlay, wrapper]
	);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss();
		},
		[onDismiss]
	);

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return (
		<div
			ref={overlay}
			className={`fixed z-20 inset-0 bg-slate-900 bg-opacity-50 transition ${rendered === true ? "opacity-100" : "opacity-0"}`}
			onClick={onClick}
		>
			
			<div
				ref={wrapper}
				className={`mx-auto my-4 md:my-6 py-4 md:py-8 h-[calc(100vh-3rem)] max-w-7xl bg-white rounded-2xl drop-shadow-xl transition-transform
				${rendered === true ? " translate-y-0 scale-100" : " translate-y-6 scale-90"}`}
			>
				<div className="flex flex-col min-h-0 max-h-full h-full">
					<div className="min-h-0 overflow-x-hidden">
						<div className="px-8">
							{children}
						</div>
					</div>
					<div className="block mt-auto px-7 pt-6 md:pt-4">
						<button onClick={onDismiss} className="inline mt-auto">
							<div className="mt-auto md:mt-4 flex flex-row items-center text-xl font-medium text-slate-600 hover:text-slate-900">
								<MdArrowBackIosNew/><span className="pb-[0.146em]">Back</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;