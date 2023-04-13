import { SiTwitter, SiGithub, SiZenn } from 'react-icons/si';

const Contact = () => {
	return(
		<>
			<div id="contact" className="bg-white">
				<div className="container mx-auto pt-16 pb-32 text-slate-800">
					<h2 className="mx-auto pb-16 text-center text-4xl font-extralight">Contact</h2>
					<div className="flex flex-col justify-center items-center gap-10 mx-4 text-2xl">
						<p>Email: ichiki.kento@gmail.com</p>
						<div className="flex flex-row items-center gap-8 text-4xl text-slate-400">
							<a href="https://twitter.com/Megaichi_Kenty" target="_blank" className="p-4 rounded-[1em] text-[#1da1f2] hover:bg-slate-100 transition-colors"><SiTwitter /></a>
							<a href="https://github.com/MegaichiDimir" target="_blank" className="p-4 rounded-[1em] text-[#0e0c0d] hover:bg-slate-100 transition-colors"><SiGithub /></a>
							<a href="https://zenn.dev/megaichi" target="_blank" className="p-4 rounded-[1em] text-[#3ea8ff] hover:bg-slate-100 transition-colors"><SiZenn /></a>
						</div>
							
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;