import parse from "html-react-parser";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import Post from "@/components/Post";
import Modal from "@/components/modal_test/modal";
import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";


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

export default async function InterceptedModal ({params: { slug: slug }} : Props) {
	const { contents }: Works = await getData({endpoint: 'works'});
	const post = contents.find((post) => post.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			<Modal>
				<Post post={post} parseContents={parse(post.contents)} parseSidebar={parse(post.sidebar)}/>
			</Modal>
		</>
	)
}