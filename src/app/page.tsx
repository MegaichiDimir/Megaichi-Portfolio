import { getData } from '@/libs/microcms';
import type { Works } from "@/libs/type";

import ScrollToNext from '@/app/components/1_MV/ScrollToNext';
import AboutMe from '@/app/components/2_AboutMe/AboutMe';
import SkillList from '@/app/components/3_Skills/SkillList';
import PostList from '@/app/components/4_Works/PostList';

const Home = async () => {
	const { contents }: Works = await getData({endpoint: 'works'});

	return (
		<main>
			{/* mv */}
			<div className="relative bottom-14 inline-block w-full h-screen bg-teal-50">
				<div className="flex flex-col justify-center items-center content-center w-full h-full">
					<div className="mt-14 text-slate-500">  {/* header height 54px */}
						hello!
					</div>
					<ScrollToNext />
				</div>
			</div>

			{/* About Me */}
			<AboutMe />
			
			{/* skill */}
			<div className="bg-lime-100">
				<div className="container mx-auto py-12 text-slate-800 ">
					<h2 className="mx-auto pb-12 text-center text-5xl font-extralight">Skills</h2>
					<div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mx-1">
						{/* @ts-ignore */}
						<SkillList />
					</div>
				</div>
			</div>
			
			{/* works */}
			<PostList contents={ contents } />
		</main>
	)
}

export default Home;