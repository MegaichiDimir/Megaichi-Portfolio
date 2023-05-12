import { SiZenn } from "react-icons/si";

import type { Zenn } from "@/libs/type";
import { getZennArticles, zennUrl } from "@/libs/zenn";

const Blog = async () => {
	const { articles }: Zenn = await getZennArticles();

	const zennArticles = articles.map((article) => {
		const date = new Date(article.published_at);

		return {
			keyDate: date.getTime(),
			dateString: date.toLocaleDateString('ja-JP'),
			title: article.title,
			url: `${zennUrl}${article.path}`,
			service: 'Zenn',
		}
	})

	return (
		<>
			<div className="bg-yellow-100">
				<div className="container mx-auto py-12">
					<h2 className="mx-auto pb-12 text-center text-4xl sm:text-5xl font-extralight">Blog</h2>
					<div className="grid grid-cols-1 gap-4 mx-1">
						{zennArticles.map((article) => {
							return (
								<div key={article.keyDate} className="relative w-full drop-shadow-md bg-white hover:bg-slate-100 rounded-xl transition-colors">
									<a href={article.url} className="w-full sm:h-40 min-h-0 flex flex-col items-start justify-between gap-1 sm:gap-4 p-6">
										<h3 className="my-1 text-xl">{article.title}</h3>
										<div className="flex flex-row items-center gap-2 text-slate-500">
											<SiZenn className="text-[#3EA8FF]"/><div className="mr-4">{article.service}</div><div>{article.dateString}</div>
										</div>
									</a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Blog;