import AboutMe from './components/AboutMe';
import ScrollToNext from './components/ScrollToNext';
import PostList from '@/app/components/PostList';
import SkillList from '@/app/components/SkillList';

const Home = async () => {
  return (
    <main>
      {/* mv */}
      <div className="relative bottom-14 inline-block w-screen h-screen bg-teal-50">
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
      <div className="bg-sky-100">
				<div className="container mx-auto py-12 text-slate-800">
					<h2 className="mx-auto pb-12 text-center text-5xl font-extralight">Works</h2>
					<div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 mx-1">
						{/* @ts-ignore */}
						<PostList />
					</div>
				</div>
			</div>
    </main>
  )
}

export default Home;