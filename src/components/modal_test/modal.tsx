"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useCallback, useRef, useEffect } from "react";

import { MdArrowBackIosNew } from 'react-icons/md'

const Modal = ({ children }: { children: React.ReactNode }) => {
	const overlay = useRef<HTMLDivElement | null>(null);
	const wrapper = useRef<HTMLDivElement | null>(null);
	const router = useRouter();
	const pathname = usePathname();

	const onDismiss = useCallback(() => {
		router.back();
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
			className="fixed z-20 inset-0 bg-slate-900 bg-opacity-50 transition-opacity duration-500"
			onClick={onClick}
		>
			<div
				ref={wrapper}
				className="mx-auto my-4 md:my-6 py-4 md:py-8 h-[calc(100vh-3rem)] max-w-7xl bg-white rounded-2xl drop-shadow-xl"
			>
				<div className="flex flex-col min-h-0 max-h-full h-full">
					<div className="min-h-0 overflow-x-hidden">
						<div className="px-8">
							{children}
						</div>
					</div>
					<div className="block mt-auto px-7 pt-6 md:pt-4">
						<Link href={pathname} className="inline mt-auto">
							<div className="mt-auto md:mt-4 flex flex-row items-center text-xl font-medium text-slate-600 hover:text-slate-900">
								<MdArrowBackIosNew/><span className="pb-[0.146em]">Back</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;