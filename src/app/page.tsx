import AboutMe from '@/components/aboutMe/AboutMe';
import MV from '@/components/mv/MV';
import SkillList from '@/components/skills/SkillList';
import PostList from '@/components/works/PostList';
import { getData } from '@/libs/microcms';
import type { Works } from "@/libs/type";


export default async function Home () {
	const { contents }: Works = await getData({endpoint: 'works'});

	return (
		<main>
			{/* mv */}
			<div className="relative bottom-14 inline-block w-full h-screen bg-teal-50">
				<MV />
			</div>

			{/* About Me */}
			<div id="about-me">
				{/* @ts-ignore */}
				<AboutMe />
			</div>
			
			{/* skill */}
			<div id='skills' className="bg-lime-100">
				<div className="container mx-auto py-12 text-slate-800 ">
					<h2 className="mx-auto pb-12 text-center text-5xl font-extralight">Skills</h2>
					<div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mx-1">
						{/* @ts-ignore */}
						<SkillList />
					</div>
				</div>
			</div>
			
			{/* works */}
			<div id="works">
				<PostList contents={ contents } />
			</div>
		</main>
	)
}
