import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getData } from "@/libs/microcms";
import type { Works } from "@/libs/type";

export async function generateStaticParams() {
	const { contents }: Works = await getData({endpoint: "works"});

	const paths = contents.map((post) => {
		return {
			slug: post.slug,
		};
	});

	return [...paths];
}

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
		<div>
			<h1>{post.title}</h1>

			<div>{parse(post.contents)}</div>
		</div>
	);
}