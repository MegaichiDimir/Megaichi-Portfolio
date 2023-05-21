import Link from 'next/link';

import HeaderNav from './HeaderNav';


const Header = () => {
	// height 56px (margin is not included)
	return (
		<header id='header'>
			<div className="fixed top-0 z-50 px-2 py-4 w-full lg:mb-4 drop-shadow-md text-slate-800 backdrop-blur-md bg-white/90">
				<div className="container flex flex-row items-center justify-between mx-auto">
					<h1 className="mr-10"><Link href="/">Megaichi&#39;s Portfolio</Link></h1>
					<div className="flex flex-row items-center justify-between">
						<HeaderNav />
					</div> 
				</div>
			</div>
		</header>
	)
}

export default Header;