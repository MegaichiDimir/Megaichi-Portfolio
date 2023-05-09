import Link from 'next/link';
// import { SiTwitter, SiGithub, SiZenn } from 'react-icons/si';
import HeaderNav from './HeaderNav';


const Header = () => {
	// height 56px (margin is not included)npm
	return (
		<header id='header'>
			<div className="fixed z-50 px-2 py-4 w-full lg:mb-4 drop-shadow-md text-slate-800 backdrop-blur-md bg-white/90">
				<div className="container flex flex-row items-center justify-between mx-auto">
					<h1 className="mr-10"><Link href="/">Megaichi&#39;s site</Link></h1>
					<div className="flex flex-row items-center justify-between">
						<HeaderNav />
						{/* <div className="flex flex-row items-center gap-5 text-xl text-slate-400">
							<a href="https://twitter.com/Megaichi_Kenty" target="_blank" className="hover:text-slate-600 transition-colors"><SiTwitter /></a>
							<a href="https://github.com/MegaichiDimir" target="_blank" className="hover:text-slate-600 transition-colors"><SiGithub /></a>
							<a href="https://zenn.dev/megaichi" target="_blank" className="hover:text-slate-600 transition-colors"><SiZenn /></a>
						</div> */}
					</div> 
				</div>
			</div>
		</header>
	)
}

export default Header;