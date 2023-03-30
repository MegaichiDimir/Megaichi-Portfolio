'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from 'react-modal';

const Post = ({ id, pathname }: { id: string, pathname: string }) => {
	const router = useRouter();
	
	useEffect(() => {
		router.push(`/works/${pathname}`)
	});

	return (
		<>
			<Modal
				isOpen={true}
				onRequestClose={() => router.push('/')}
				overlayClassName="fixed inset-0 bg-black bg-opacity-50"
				className="fixed inset-0 bg-white"
			>
				<div>
					I am the post {id}; my pathname is: {pathname}
				</div>
			</Modal>
		</>

	)
}

export default Post;