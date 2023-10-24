import { FC, useState, } from "react"

export enum CardVariant {
	ontlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	width?: string
	height: string
	variant: CardVariant
	onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	const [state, setState] = useState(0)

	return (
		<>
			<div onClick={() => onClick(state)} style={{
				width, height, border: variant === CardVariant.ontlined ? '1px solid gray' : 'none',
				background: variant === CardVariant.primary ? 'lightgray' : 'none'
			}}>
				{children}
			</div>
		</>

	)

}
export default Card
