import Image from "next/image";

import { getData } from "../../libs/microcms";
import type { Skill } from "../../libs/microcms";

const SkillList = async () => {
	const { contents }: Skill  = await getData('skill');

	return (
		<>
			{contents.map((post) => {
				return (
					<div key={post.id} className="flex flex-col items-center">
						<Image
						className="drop-shadow"
							src={post.image.url}
							alt={post.title}
							width={post.image.width}
							height={post.image.height}
						/>
						<div className="mt-2 text-center">
							<h3 className="my-1">{post.title}</h3>
							<div className="my-1">{post.description}</div>
						</div>
					</div>
				);
			})}
		</>
	)
}

export default SkillList;