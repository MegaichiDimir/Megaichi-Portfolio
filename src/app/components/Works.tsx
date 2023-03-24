import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useEffect } from "react";
import parse, { 
	domToReact,
	Element,
	HTMLReactParserOptions,
} from "html-react-parser";

import { getData } from "../libs/microcms";

import type { Works } from "../libs/microcms";



const Works = async () => {
	// const router = useRouter();

	const { contents }: Works  = await getData('works');
	
	const options: HTMLReactParserOptions = {
		replace: (domNode) => {
			const typedDomNode = domNode as Element
			// const removeTag = ['img']
			// if (typedDomNode.attribs && removeTag.includes(typedDomNode.name)) {
			// 	return <></>
			// }

			// 全てのタグを外して生テキストにする
			if (typedDomNode.attribs) {
				return (
					<>
						{domToReact(typedDomNode.children, options)}
					</>
				)
			}
		}
	}

	const postList = contents.map((post) => {
		return (
			<>
				<div key={post.id} className="w-full sm:h-40 min-h-0 flex flex-col sm:flex-row gap-4 items-center p-4 bg-slate-100">
					<Image
						className="sm:w-auto sm:max-h-full object-cover sm:overflow-hidden"
						src={post.thumbnail.url}
						alt={post.title}
						width={post.thumbnail.width}
						height={post.thumbnail.height}
					/>
					<div className="mt-2 col-start-2 col-end-4">
						<h3 className="my-1 text-center sm:text-left">{post.title}</h3>
						<div className="my-1 w-full"><p className="overflow-hidden truncate">{post.description}</p></div>
					</div>
				</div>
				<NextLink href={`works/${post.slug}`}>{}</NextLink>
			</>
		);
	})

	return (
		<>
			{/* <div className="bg-sky-100">
				<div className="container mx-auto py-12 text-slate-800">
					<h2 className="mx-auto pb-12 text-center text-5xl font-extralight">Works</h2>
					<div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 mx-1">
						
						<PostList />
					</div>
				</div>
			</div> */}
		</>
	)
}

export default Works;