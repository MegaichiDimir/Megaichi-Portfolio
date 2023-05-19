// TitlePath.tsx must be rendered somewhere.
// ex: <Logo className="w-24 h-6 bg-gradient-to-r from-blue-500 to-violet-500" />

const Logo = ({ className }: { className?: string }) => {
	return (
		<div 
			className={className}
			style={{clipPath: 'url(#megaichiPath)'}}
		></div>
	)
}

export default Logo;