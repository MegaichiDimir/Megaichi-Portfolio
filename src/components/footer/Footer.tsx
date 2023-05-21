import Link from "next/link";
import { SiTwitter, SiGithub, SiZenn } from "react-icons/si";

import Logo from "../Logo";

const Footer = () => {
	return(
		<>
			<div id="footer" className="bg-white">
				<div className="container mx-auto pt-4 pb-12 xs:pb-10 text-slate-800">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-4 text-2xl">
						<Link href="/" className="p-4 rounded-[2.25em] hover:bg-slate-100 transition-colors"><Logo className="w-36 h-9 bg-slate-800" /></Link>
						<div className="flex flex-row items-center gap-8 text-4xl text-slate-400">
							<a href="https://twitter.com/Megaichi_Kenty" target="_blank" rel="noreferrer" className="p-4 rounded-[1em] text-[#1da1f2] hover:bg-slate-100 transition-colors"><SiTwitter /></a>
							<a href="https://github.com/MegaichiDimir" target="_blank" rel="noreferrer" className="p-4 rounded-[1em] text-[#0e0c0d] hover:bg-slate-100 transition-colors"><SiGithub /></a>
							<a href="https://zenn.dev/megaichi" target="_blank" rel="noreferrer" className="p-4 rounded-[1em] text-[#3ea8ff] hover:bg-slate-100 transition-colors"><SiZenn /></a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer;