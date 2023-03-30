import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";
import Post from "@/app/components/Post";

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

// ページのコンポーネント
export default async function StaticDetailPage({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const { contents }: Works = await getData({endpoint: "works", queries: `?filters=slug%5Bequals%5D${slug}`});
	const post = contents['0'];

	if (!post) {
		notFound();
	}

	return (
		<>
			<div className="container mx-auto mt-6">
				<Post post={post} parseContents={parse(post.contents)}/>
			</div>
		</>
	);
}