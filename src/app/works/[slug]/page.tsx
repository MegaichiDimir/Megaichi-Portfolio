import parse from "html-react-parser";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Post from "@/components/Post";
import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";


type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

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
	const post = contents["0"];

	return {
		title: post.title,
		description: post.description,
	};
}

// Staticページのコンポーネント
export default async function StaticDetailPage(
	{ params: { slug } }: Props ) {
	const { contents }: Works = await getData({endpoint: "works", queries: `?filters=slug%5Bequals%5D${slug}`});
	const post = contents["0"];

	if (!post) {
		notFound();
	}

	return (
		<>
			<div className="container mx-auto mt-20">
				{/* パンくずリスト */}
				<ul className="mb-6 whitespace-nowrap text-sm text-slate-500">
					<li className="inline"><Link href={`/`} className="hover:text-slate-800 hover:underline">Home</Link><span> / </span></li>
					<li className="inline"><Link href={`/works`} className="hover:text-slate-800 hover:underline">Works</Link><span> / </span></li>
					<li className="inline"><Link href={`/works/${slug}`} className="hover:text-slate-800 hover:underline">{post.title}</Link></li>
				</ul>
				<Post post={post} parseContents={parse(post.contents)} parseSidebar={parse(post.sidebar)}/>
			</div>
		</>
	);
}