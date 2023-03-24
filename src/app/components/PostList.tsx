import Image from "next/image";
import Link from "next/link";

import { getData } from "../../libs/microcms";
import type { Works } from "../../libs/microcms";


const PostList = async () => {
	const { contents }: Works  = await getData('works');

	return(
		<>
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
						<Link href={`/?postId=${post.id}`} as={`works/${post.slug}`}>
							Modal
						</Link>

					</div>
				)
			})}
		</>
	)
}

export default PostList;