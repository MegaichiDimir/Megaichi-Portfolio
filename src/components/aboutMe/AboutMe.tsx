import Image from "next/image";

import { getData } from "@/libs/microcms";
import type { Profile } from "@/libs/type";

const AboutMe = async () => {
	const { name, contents, imageData }: Profile = await getData({endpoint: 'profile' });
	const { image, caption, captionLinkName, captionLinkUrl } = imageData; 

	return (
		<>
			<div className="bg-white">
				<div className="container max-w-screen-lg mx-auto pt-16 pb-32 text-slate-800">
					<h2 className="mx-auto pb-16 text-center text-4xl sm:text-5xl font-light">About Me</h2>
					<div className="flex flex-wrap justify-center gap-4 mx-4">
						<div className="flex flex-col justify-center items-center">
							{image ? (
								<div className={`w-44 aspect-square bg-slate-200 drop-shadow ${caption ? "mb-2" : "mb-6"}`}>
									<Image
										className="object-cover"
										src={image.url}
										alt={name}
										width={image.width}
										height={image.height}
									/>
								</div>
							) : ""}
							{image && caption ? (
								<div className="mb-6 text-center text-xs text-slate-500">
									<p>{caption} {captionLinkName && captionLinkUrl ? <a href={captionLinkUrl} target="_blank" rel="noreferrer" className="hover:underline">{captionLinkName}</a> : ""}</p>
								</div>
							) : ""}
						</div>
						<div className="break-words">
							<h3 className="mb-1">{name}</h3>
							<p className="whitespace-pre-wrap">{contents}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe;