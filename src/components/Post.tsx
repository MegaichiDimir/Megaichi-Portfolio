import { FaGithub } from "react-icons/fa";

import type { Works } from "@/libs/type";

// Modal, 個別リンク共通のレイアウト
const Post = (
	props: {
		post: Works['contents']['0'],
		parseContents: string | JSX.Element | JSX.Element[],
		parseSidebar: string | JSX.Element | JSX.Element[]
	}) => {
	const post = props.post
	const contents = props.parseContents
	const sidebar = props.parseSidebar
	
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-end gap-2 mb-2">
			<h2 className="text-3xl md:text-4xl font-bold">{post.title}</h2>
				<div className="text-lg text-slate-600">{post.description}</div>
			</div>
			{post.links
				?	<div className="flex flex-row flex-wrap gap-2 md:gap-6 text-slate-700">
						<div>
							{post.links.url
								? 	<a href={post.links.url} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-1 underline hover:text-sky-600">
										Product Page
									</a> 
								: 	""}
						</div>
						<div>
							{post.links.github
								? 	<a href={post.links.github} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-1 underline hover:text-sky-600">
										<FaGithub className="text-slate-800"/>GitHub
									</a> 
								: 	""}
						</div>
						<div>
							{post.links.preview
								?   <a href={post.links.preview} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-1 underline hover:text-sky-600">
										{post.links.preview_desc}
									</a> 
								: 	""}
						</div>
					</div>
				: 	""
			}
			<div className="mt-4 mb-6 w-full border-t border-solid border-slate-300"></div>
			<div className="grid grid-cols-1 md:grid-cols-[1fr,12rem] gap-6 md:divide-x divide-slate-300 w-full max-h-auto">
				<div className="w-full md:overflow-y-auto" >{contents}</div>
				<div className="mt-3 md:mt-0 pt-3 md:pt-0 md:pl-6 text-sm border-t border-solid border-slate-300 md:border-0">
					<div className="md:sticky md:top-0">{sidebar}</div>
				</div>
			</div>
		</>

	)
}

export default Post;