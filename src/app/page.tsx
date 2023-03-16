import Image from 'next/image'

import AboutMe from './AboutMe';
import Skill from './Skill'
import Works from './Works';

const Home = () => {
  return (
    <main>
      {/* mv */}
      <div className="relative inline-block w-screen h-screen bg-teal-50">
        <div className="flex flex-col justify-center items-center content-center w-full h-full">
          <div className="mt-14 text-slate-500">  {/* header height 54px */}
            hello!
          </div>
        </div>
      </div>

      {/* About Me */}
      {/* @ts-ignore */}
      <AboutMe />
      
      {/* skill */}
      {/* @ts-ignore */}
      <Skill />
        
      {/* works */}
      {/* @ts-ignore */}
      <Works />

    </main>
  )
}

export default Home;