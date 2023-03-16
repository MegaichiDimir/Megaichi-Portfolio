import Image from "next/image";

import { getSkill } from "../libs/microcms";

const Skill = async () => {
	const { contents }  = await getSkill();
	
	return(
		<>
			<div className="bg-lime-100">
				<div className="container mx-auto py-6 text-slate-800 ">
					<h2 className="mx-auto pb-6 text-center text-4xl">Skills</h2>
					<div className="grid grid-cols-4 gap-4">
						{contents.map((post) => {
							return (
								<div key={post.id} className="flex flex-col items-center p-4 bg-slate-100">
									<Image
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
					</div>
				</div>
			</div>
		</>

	)
}

export default Skill;