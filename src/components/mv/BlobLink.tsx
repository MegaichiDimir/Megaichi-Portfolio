"use client"
import { Link as Scroll } from "react-scroll";

import Blob from "./Blob"

const BlobLink = ({ children, to, className, frontClass, backClass }: { children: React.ReactNode, to: string, className?: string, frontClass: string, backClass:string }) => {

	return (
		<>
			<Scroll to={to} smooth={true} duration={600} offset={-56} className={className}>
				<div className="relative w-60 h-60">
					<div className="backBlob">
						<Blob className={backClass} />
					</div>
					<div className="frontBlob">
						<Blob className={frontClass} />
					</div>
					<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] m-0 p-0 pointer-events-none">
						{children}
					</div>
				</div>
			</Scroll>
		</>
	)
}

export default BlobLink;