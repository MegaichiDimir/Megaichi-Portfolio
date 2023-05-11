import { MdPerson, MdCode, MdSource, MdArticle } from 'react-icons/md';

import BlobLink from './BlobLink';

const MV = () => {
	return (
		<>
			<link rel="stylesheet" href="https://use.typekit.net/qhk1mtd.css"/>
			<div className="flex flex-row justify-center items-center content-center w-full h-full font-['DIN-2014']">
				<div className="text-slate-500 text-6xl font-extrabold">  {/* header height 54px */}
					{/* Megaichi&apos;s site */}
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 justify-items-center md:gap-5 scale-90 md:scale-100 aspect-square md:aspect-auto w-full font-sans">
					<BlobLink
						to="about-me"
						frontColor="#FFFFFF"
						backColor="#CBD5E1"
					>
						<div className='flex flex-col items-center gap-1'>
							<MdPerson className='text-slate-500 text-2xl'/>
							<h3 className='text-slate-800'>自分について</h3>
						</div>
					</BlobLink>
					<BlobLink
						to="skills"
						frontColor="#F7FEE7"
						backColor="#BEF264"
					>
						<div className='flex flex-col items-center gap-1'>
							<MdCode className='text-slate-500 text-2xl'/>
							<h3 className='text-slate-800'>出来ること</h3>
						</div>
					</BlobLink>
					<BlobLink
						to="works"
						frontColor="#F0F9FF"
						backColor="#7DD3FC"
					>
						<div className='flex flex-col items-center gap-1'>
							<MdSource className='text-slate-500 text-2xl'/>
							<h3 className='text-slate-800'>作ったもの</h3>
						</div>
					</BlobLink>
					<BlobLink
						to="blog"
						frontColor="#FEFCE8"
						backColor="#FDE047"
					>
						<div className='flex flex-col items-center gap-1'>
							<MdArticle className='text-slate-500 text-2xl'/>
							<h3 className='text-slate-800'>投稿記事</h3>
						</div>
					</BlobLink>
				</div>
				{/* <ScrollToNext /> */}
			</div>
		</>
	)
}

export default MV;