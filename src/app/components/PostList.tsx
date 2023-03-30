import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal";

import type { Works } from "@/libs/type";
import ModalPage from "../modal";


const PostList = ( props: Works ) => {
	const contents = props.contents;
	

	return(
		<>
			<div className="bg-sky-100">
				<div className="container mx-auto py-12 text-slate-800">
					<h2 className="mx-auto pb-12 text-center text-5xl font-extralight">Works</h2>
					<div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 mx-1">
						{contents.map((post) => {
							return (
								<div key={post.id} className="relative w-full sm:h-40 min-h-0 flex flex-col sm:flex-row gap-4 items-center p-4 drop-shadow-md bg-white hover:bg-slate-100 transition-colors">
									<Image
										className="sm:w-auto sm:max-h-full object-cover sm:overflow-hidden drop-shadow"
										src={post.thumbnail.url}
										alt={post.title}
										width={post.thumbnail.width}
										height={post.thumbnail.height} 
									/>
									<div className="mt-2 col-start-2 col-end-4">
										<h3 className="my-1 text-center sm:text-left">{post.title}</h3>
										<div className="my-1 w-full"><p className="overflow-hidden truncate">{post.description}</p></div>
									</div>
									<Link href={`works/${post.slug}`}>
										Link
									</Link>
									{/* <Link href={`/?postId=${post.id}`} as={`works/${post.slug}`}>
										Modal?
									</Link> */}
									<ModalPage post={post} />
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default PostList;