import { FaTwitter, FaGithub } from 'react-icons/fa';


const Header: React.FC = () => {
	// height 56px (margin is not included)
	return (
		<header>
			<div className="absolute z-10 bg-white px-2 py-4 w-full lg:mb-4 drop-shadow-md text-slate-800">
				<div className="container flex flex-row items-center justify-between mx-auto">
					<h1 className="mr-10 text-slate-500">Megaichi&#39;s portfolio</h1>
					<div className="flex flex-row gap-5 text-2xl text-slate-400">
						<a href="https://twitter.com/Megaichi_Kenty" className="hover:text-slate-600"><FaTwitter /></a>
						<a href="https://github.com/MegaichiDimir" className="hover:text-slate-600"><FaGithub /></a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;