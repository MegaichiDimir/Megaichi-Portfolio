'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ post }) => {
	const router = useRouter();

	useEffect(() => {
		router.push(`/works/${post.slug}`)
	}, [])
	return (
		<>
			<div className="hidden">
				modal
			</div>
		</>
	)
}
export default Modal;