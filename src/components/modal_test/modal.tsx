"use client";
import React, { useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

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
			className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
			onClick={onClick}
		>
			<div
				ref={wrapper}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
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