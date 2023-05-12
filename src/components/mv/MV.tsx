import { MdPerson, MdCode, MdSource, MdArticle } from 'react-icons/md';

import BlobLink from './BlobLink';
import Title from './Title';

const MV = () => {
	return (
		<>
			<link rel="stylesheet" href="https://use.typekit.net/qhk1mtd.css"/>
			<div className="flex flex-col justify-center items-center h-full">
				<div className="flex flex-col justify-around items-center pt-14 md:py-14 w-full max-h-[700px] h-full">
					<div className="flex-1 flex flex-col justify-center items-center gap-4 text-slate-500 font-['DIN-2014']">  {/* header height 54px */}
						<Title />
						<p className="text-sm xs:text-base font-light">Web Frontend & Design & Competitive Gamer</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-[repeat(4,minmax(0,calc((100vw_/_4)_-_4rem)))] grid-rows-[repeat(2,minmax(0,calc((100vw_/_3)_-_2rem)))] md:grid-rows-1 content-evenly justify-evenly items-center justify-items-center md:gap-5 aspect-square xs:aspect-auto w-full md:min-h-[240px] font-rounded">
						<div className="scale-[.68] xs:scale-90 sm:scale-100">
							<BlobLink
								to="about-me"
								frontColor="#FFFFFF"
								backColor="#CBD5E1"
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
								frontColor="#F7FEE7"
								backColor="#BEF264"
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
								frontColor="#F0F9FF"
								backColor="#7DD3FC"
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
								frontColor="#FEFCE8"
								backColor="#FDE047"
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