import Image from "next/image";

import { getWorks } from "../libs/microcms";

const Works = async () => {
	const { contents }  = await getWorks();

	return (
		<>
			<div className="bg-sky-100">
				<div className="container mx-auto py-6 text-slate-800">
					<h2 className="mx-auto pb-6 text-center text-4xl">Works</h2>
					<div className="grid grid-cols-4 gap-4">
						{contents.map((post) => {
							return (
								<div key={post.id} className="flex flex-col items-center p-4 bg-slate-100">
									<Image
										src={post.thumbnail.url}
										alt={post.title}
										width={post.thumbnail.width}
										height={post.thumbnail.height}
									/>
									<div className="mt-2 text-center">
										<h3 className="my-1">{post.title}</h3>
										<p className="my-1">{post.contents}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default Works;