import { MdPerson, MdCode, MdSource, MdArticle } from 'react-icons/md';

import Logo from '../Logo';
import BlobLink from './BlobLink';

const MV = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center sm:mt-14 lg:mt-0 h-full">
				<div className="flex flex-col justify-around items-center pt-14 sm:pb-0 md:py-14 w-full max-h-[700px] h-full">
					<div className="flex-1 flex flex-col justify-center items-center gap-4 text-slate-500">  {/* header height 54px */}
						<Logo className="w-64 xs:w-80 md:w-96 h-16 xs:h-20 md:h-24 bg-gradient-to-r from-blue-500 to-violet-500" />
						<p className="font-title font-bold text-sm xs:text-base md:text-xl xs:tracking-wider">Web Frontend & Design & Competitive Gamer</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,calc((100vw_/_4)_-_4rem)))] grid-rows-[repeat(2,minmax(0,calc((100vw_/_2)_-_2rem)))] md:grid-rows-1 content-evenly justify-evenly items-center justify-items-center md:gap-5 aspect-square xs:aspect-auto w-full md:min-h-[240px] font-sans">
						<div className="scale-[.68] xs:scale-90 sm:scale-100">
							<BlobLink
								to="about-me"
								className="cursor-pointer"
								frontClass="fill-white hover:fill-slate-100"
								backClass="fill-slate-300"
							>
								<div className='flex flex-col items-center gap-1'>
									<MdPerson className='text-slate-400 text-2xl'/>
									<h3 className='text-slate-800'>自分について</h3>
								</div>
							</BlobLink>
						</div>
						<div className="scale-[.68] xs:scale-90 sm:scale-100">
							<BlobLink
								to="skills"
								frontClass="fill-lime-50 hover:fill-lime-100"
								backClass="fill-lime-300"
							>
								<div className='flex flex-col items-center gap-1 text-lime-700'>
									<MdCode className='text-2xl'/>
									<h3>出来ること</h3>
								</div>
							</BlobLink>
						</div>
						<div className="scale-[.68] xs:scale-90 sm:scale-100">
							<BlobLink
								to="works"
								frontClass="fill-sky-50 hover:fill-sky-100"
								backClass="fill-sky-300"
							>
								<div className='flex flex-col items-center gap-1  text-sky-700'>
									<MdSource className='text-2xl'/>
									<h3>作ったもの</h3>
								</div>
							</BlobLink>
						</div>
						<div className="scale-[.68] xs:scale-90 sm:scale-100">
							<BlobLink
								to="blog"
								frontClass="fill-yellow-50 hover:fill-yellow-100"
								backClass="fill-yellow-300"
							>
								<div className='flex flex-col items-center gap-1 text-yellow-700'>
									<MdArticle className='text-2xl'/>
									<h3>投稿記事</h3>
								</div>
							</BlobLink>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MV;