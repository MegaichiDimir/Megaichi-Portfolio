'use client'
import { Link as Scroll } from 'react-scroll';

import Blob from './Blob'

const BlobLink = ({ title, to, frontColor, backColor }: { title: string, to: string, frontColor: string, backColor:string }) => {

	return (
		<>
			<Scroll to={to} smooth={true} duration={600} offset={-56} className='cursor-pointer'>
				<div className="relative w-60 h-60">
					<div className="backBlob">
						<Blob color={backColor} />
					</div>
					<div className="frontBlob">
						<Blob color={frontColor} />
					</div>
					<h3 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] m-0 p-0">{title}</h3>
				</div>
			</Scroll>
		</>
	)
}

export default BlobLink;