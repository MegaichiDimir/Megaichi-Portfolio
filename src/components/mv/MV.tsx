import BlobLink from './BlobLink';
import ScrollToNext from "./ScrollToNext"

const MV = () => {
	return (
		<>
			<link rel="stylesheet" href="https://use.typekit.net/qhk1mtd.css"/>
			<div className="flex flex-col justify-center items-center content-center w-full h-full font-['DIN-2014']">
				<div className="flex flex-row ">
					<div className="text-slate-500 text-6xl font-extrabold">  {/* header height 54px */}
						{/* Megaichi&apos;s site */}
					</div>
					<div className="flex flex-row gap-5 font-sans">
						<BlobLink
							title="自分について"
							to="about-me"
							frontColor="#FFFFFF"
							backColor="#CBD5E1"
						/>
						<BlobLink
							title="出来ること"
							to="skills"
							frontColor="#F7FEE7"
							backColor="#BEF264"
						/>
						<BlobLink
							title="作ったもの"
							to="works"
							frontColor="#F0F9FF"
							backColor="#7DD3FC"
						/>
						<BlobLink
							title="投稿記事"
							to="blog"
							frontColor="#FEFCE8"
							backColor="#FDE047"
						/>
					</div>
				</div>
				<ScrollToNext />
			</div>
		</>
	)
}

export default MV;