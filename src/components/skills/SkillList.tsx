import parse, { 
	domToReact,
	Element,
	HTMLReactParserOptions,
} from "html-react-parser";
import { MdDone, MdThumbUp, MdBuild, MdComputer } from "react-icons/md";
import { RiSeedlingFill } from "react-icons/ri";

import { getData } from "@/libs/microcms";
import type { Profile } from "@/libs/type";

const SkillList = async () => {
	const { skill }: Profile  = await getData({endpoint: 'profile'});

	const replaceOptions: HTMLReactParserOptions = {
		replace: (domNode) => {
			const typedDomNode = domNode as Element
			if (typedDomNode.name === 'h4') {
				return (
					<>
						<h4 className="mt-4 mb-1 font-medium">
							{domToReact(typedDomNode.children, replaceOptions)}
						</h4>
					</>
				)
			}
		}
	}

	return (
		<>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 whitespace-pre-wrap">
					<div className="flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-xl drop-shadow">
						<div className="flex flex-col justify-center items-center gap-3 text-lime-500 font-bold">
							<MdDone className="text-4xl" />
							<h3 className="text-2xl">出来ること</h3>
						</div>
						<div className="">{skill.task}</div>
					</div>
					<div className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-xl drop-shadow">
						<div className="flex flex-col justify-center items-center gap-3 text-orange-500 font-bold">
							<MdThumbUp className="text-4xl" />
							<h3 className="text-2xl">メインで使っている</h3>
						</div>
						<div>{skill.good}</div>
					</div>
					<div className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-xl drop-shadow">
						<div className="flex flex-col justify-center items-center gap-3 text-yellow-500 font-bold">
							<MdBuild className="text-4xl" />
							<h3 className="text-2xl">その他使える技術</h3>
						</div>
						<div>{skill.possible}</div>
					</div>
					<div className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-xl drop-shadow">
						<div className="flex flex-col justify-center items-center gap-3 text-sky-500 font-bold">
							<RiSeedlingFill className="text-4xl" />
							<h3 className="text-2xl">初歩的だが知識あり</h3>
						</div>
						<div>{skill.beginner}</div>
					</div>
					<div className="xs:col-span-2 lg:col-span-4 flex flex-col justify-center items-center gap-2 p-6 bg-white rounded-xl drop-shadow">
						<div className="flex flex-col justify-center items-center gap-3 text-slate-500 font-bold">
							<MdComputer className="text-4xl" />
							<h3 className="text-2xl">使用ツール・サービス</h3>
						</div>
						<div className="flex flex-col sm:flex-row content-around justify-center sm:w-full">
							<div className="sm:basis-1/2 lg:basis-1/4 sm:text-center">
								<div className="inline-block text-left">{parse(skill.tools1, replaceOptions)}</div>
							</div>
							<div className="sm:basis-1/2 lg:basis-1/4 sm:text-center">
								<div className="inline-block text-left">{parse(skill.tools2, replaceOptions)}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SkillList;