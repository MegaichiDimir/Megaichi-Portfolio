import { Metadata } from "next";
import parse from "html-react-parser";

import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";

import Modal from "@/app/components/modal_test/modal";
import Post from "@/app/components/Post";

type Props = {
	params: { slug: string };
}

// SSGのルーティング設定
export async function generateStaticParams() {
	const { contents }: Works = await getData({endpoint: "works"});

	const paths = contents.map((post) => {
		return {
			slug: post.slug,
		};
	});

	return [...paths];
}

// メタデータの生成
export async function generateMetadata(
	{ params }: Props
): Promise<Metadata> {
	const slug = params.slug;
	const { contents }: Works = await getData({endpoint: "works", queries: `?filters=slug%5Bequals%5D${slug}`});
	const post = contents['0'];

	return {
		title: post.title,
		description: post.description,
	};
}

export default async function ModalPost ({params: { slug: slug }}: Props) {
	const { contents }: Works = await getData({endpoint: 'works', queries: `?filters=slug%5Bequals%5D${slug}`});
	const post = contents['0'];

	return (
		<>
			Modal Open
			<Modal>
				<Post post={post} parseContents={parse(post.contents)} parseSidebar={parse(post.sidebar)}/>
			</Modal>
		</>

	)
}