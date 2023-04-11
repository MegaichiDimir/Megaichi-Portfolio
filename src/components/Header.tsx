import Link from 'next/link';
import { SiTwitter, SiGithub, SiZenn } from 'react-icons/si';


const Header: React.FC = () => {
	// height 56px (margin is not included)npm
	return (
		<header id='header'>
			<div className="relative z-10 bg-white px-2 py-4 w-full lg:mb-4 drop-shadow-md text-slate-800">
				<div className="container flex flex-row items-center justify-between mx-auto">
					<h1 className="mr-10 text-slate-500"><Link href="/">Megaichi&#39;s site</Link></h1>
					<div className="flex flex-row items-center justify-between">
						<div className="flex flex-row items-center gap-5 text-xl text-slate-400">
							<a href="https://twitter.com/Megaichi_Kenty" className="hover:text-slate-600 transition-colors"><SiTwitter /></a>
							<a href="https://github.com/MegaichiDimir" className="hover:text-slate-600 transition-colors"><SiGithub /></a>
							<a href="https://zenn.dev/megaichi" className="hover:text-slate-600 transition-colors"><SiZenn /></a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;