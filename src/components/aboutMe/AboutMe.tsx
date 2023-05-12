import Image from "next/image";

import { getData } from "@/libs/microcms";
import type { Profile } from "@/libs/type";

const AboutMe = async () => {
	const { name, contents, image }: Profile = await getData({endpoint: 'profile' });
	
	return (
		<>
			<div className="bg-white">
				<div className="container mx-auto pt-16 pb-32 text-slate-800">
					<h2 className="mx-auto pb-16 text-center text-4xl sm:text-5xl font-extralight">About Me</h2>
					<div className="flex flex-wrap justify-center gap-4 mx-4 ">
						<div className="w-44 mb-6 aspect-square bg-slate-200 drop-shadow">
							<Image
								src={image.url}
								alt={name}
								width={image.width}
								height={image.height}
							/>
						</div>
						<div className="break-words">
							<h3>{name}</h3>
							<p>{contents}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe;