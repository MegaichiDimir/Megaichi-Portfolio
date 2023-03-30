'use client'
import { useRouter ,usePathname } from "next/navigation";
import Modal from 'react-modal';

// import PostPage from "./works/[slug]/page";
import type {Works} from "@/libs/type";

const ModalPage = ( props: {post: Works['contents']['0'] } ) => {
	const { post } = props;
	const router = useRouter();
	const pathname = usePathname();

	return (
		<>
				<div className="">
					<button onClick={() => router.push(`/?postId=${post.id}`)}>Modal Open</button>
					<Modal
						isOpen={pathname === post.slug}
						onRequestClose={() => router.push('/')}
						overlayClassName="fixed inset-0 bg-black bg-opacity-50"
						className="fixed inset-0 bg-white"
					>
						{/* @ts-ignore */}
						{/* <PostPage params={{ slug: post.slug }} /> */}
					</Modal>
				</div>
		</>
	)
}
export default ModalPage;