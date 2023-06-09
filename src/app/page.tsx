import AboutMe from "@/components/aboutMe/AboutMe";
import Blog from "@/components/blog/Blog";
import ViewTrigger from "@/components/header/ViewTrigger";
import MV from "@/components/mv/MV";
import SkillList from "@/components/skills/SkillList";
import PostList from "@/components/works/PostList";


export default function Home () {
	return (
		<>
			<main>
				{/* mv */}
				<ViewTrigger sectionName='mv'>
					<div className="relative inline-block w-full h-screen bg-teal-50">
						<MV />
					</div>
				</ViewTrigger>
			
				{/* About Me */}
				<ViewTrigger sectionName='about-me'>
					<div id="about-me">
						{/* @ts-expect-error Async Server Component */}
						<AboutMe />
					</div>
				</ViewTrigger>

			
				{/* skill */}
				<ViewTrigger sectionName='skills'>
					<div id='skills' className="bg-lime-100">
						<div className="container mx-auto py-12 text-slate-800 ">
							<h2 className="mx-auto pb-12 text-center text-4xl sm:text-5xl font-light">Skills</h2>
							{/* @ts-expect-error Async Server Component */}
							<SkillList />
						</div>
					</div>
				</ViewTrigger>
			
				{/* works */}
				<ViewTrigger sectionName='works'>
					<div id="works">
						{/* @ts-expect-error Async Server Component */}
						<PostList />
					</div>
				</ViewTrigger>

				{/* blog */}
				<ViewTrigger sectionName='blog'>
					<div id="blog">
						{/* @ts-expect-error Async Server Component */}
						<Blog />
					</div>
				</ViewTrigger>
			</main>
		</>
	)
}
