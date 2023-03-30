import type { Works } from "@/libs/type";

// Modal, 個別リンク共通のレイアウト
const Post = ( props : { post: Works['contents']['0'], parseContents: string | JSX.Element | JSX.Element[]}) => {
	const post = props.post
	const contents = props.parseContents

	return (
		<>
			<div className="">
				<div className="flex flex-col md:flex-row md:items-end gap-4 pb-10">
					<h1 className="text-5xl font-bold">{post.title}</h1>
					<div className="text-xl">{post.description}</div>
				</div>
				<div className="flex flex-col md:flex-row gap-6 w-full">
					
					<div className="flex-1 w-full" >{contents}</div>
					<div className="flex flex-col mt-12 md:mt-0 w-72">
						<div className="mb-12">
							<h3>Link</h3>
							<div>
								
							</div>
						</div>
						<div>
							<h3>使用ライブラリなど</h3>
							<div>
								
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</>

	)
}

export default Post;