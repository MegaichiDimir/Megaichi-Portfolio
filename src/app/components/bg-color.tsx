import { ReactNode } from "react"

type Props = {
	children: ReactNode
}

const bgColor = ({children}: Props) => {
	return (
		<div className="bg-sky-100">
			{children}
		</div>
	)
}

export default bgColor;