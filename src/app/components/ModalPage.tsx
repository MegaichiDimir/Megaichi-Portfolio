'use client'
import { ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from 'react-modal';
import { MdArrowBackIosNew } from 'react-icons/md'

// import PostPage from "./works/[slug]/page";
import type {Works} from "@/libs/type";
import Post from "./Post";
import parse from "html-react-parser";


type Props = {
	post: Works['contents']['0']
	children: ReactNode
}

const ModalPage = ( props: Props) => {
	const { post } = props;
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get('works');

	return (
		<>
			<button 
				onClick={() => router.push(`/?works=${post.slug}`)} 
				className="w-full sm:h-40 min-h-0 flex flex-col sm:flex-row gap-1 sm:gap-4 items-center p-4"
			>
				{props.children}
			</button>
			<Modal
				isOpen={(query === post.slug)}
				onRequestClose={() => router.push('/')}
				overlayClassName="fixed z-20 inset-0 bg-slate-900 bg-opacity-50"
				className="mx-auto my-6 px-8 py-8 h-[calc(100vh-3rem)] max-w-7xl  bg-slate-50"
			>
				<div className="flex flex-col h-full">
					<div className="overflow-y-auto">
						<Post post={post} parseContents={parse(post.contents)}/>
					</div>
					<button onClick={() => router.push('/')} className="mt-auto">
						<div className="mt-4 flex flex-row items-center text-2xl text-slate-600">
							<MdArrowBackIosNew/><span className="pb-[0.146em]">Back</span>
						</div>
					</button>
				</div>
			</Modal>
		</>
	)
}
export default ModalPage;