'use client'
import { ReactNode } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Modal from 'react-modal';
import { MdArrowBackIosNew } from 'react-icons/md'

// import PostPage from "./works/[slug]/page";
import type { Works } from "@/libs/type";
import Post from "./Post";
import parse from "html-react-parser";
import Link from "next/link";
import { HelmetProvider } from "react-helmet-async";


type Props = {
	post: Works['contents']['0']
	children: ReactNode
}

const ModalPage = ( props: Props ) => {
	const { post } = props;
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const query = searchParams.get('works');

	return (
		<>
			<Link
				href={`${pathname}?works=${post.slug}`} 
				className="w-full sm:h-40 min-h-0 flex flex-col sm:flex-row gap-1 sm:gap-4 items-center p-4"
			>
				{props.children}
			</Link>
			{/* モーダルのアニメーションスタイルは global.css に記述 */}
			<Modal
				isOpen={(query === post.slug)}
				onRequestClose={() => router.push(pathname)}
				overlayClassName="fixed z-20 inset-0 bg-slate-900 bg-opacity-50"
				className="mx-auto my-4 md:my-6 py-4 md:py-8 h-[calc(100vh-3rem)] max-w-7xl bg-white rounded-2xl drop-shadow-xl"
				closeTimeoutMS={150}
			>
				{/* クライアント側からhead情報に触れない 悲しきかな react-helmet-async を使う */}
				<HelmetProvider>
					<title>{`${post.title} | Megaichi\'s Portfolio`}</title>
					<meta name="description" content={post.description} />
				</HelmetProvider>
				<div className="flex flex-col min-h-0 max-h-full h-full">
					<div className="min-h-0 overflow-x-hidden">
						<div className="px-8">
							<Post post={post} parseContents={parse(post.contents)} parseSidebar={parse(post.sidebar)}/>
						</div>
					</div>
					<div className="block mt-auto px-7 pt-6 md:pt-4">
						<Link href={pathname} className="inline mt-auto">
							<div className="mt-auto md:mt-4 flex flex-row items-center text-xl font-light text-slate-600 hover:text-slate-900">
								<MdArrowBackIosNew/><span className="pb-[0.146em]">Back</span>
							</div>
						</Link>
					</div>
				</div>
			</Modal>
		</>
	)
}
export default ModalPage;