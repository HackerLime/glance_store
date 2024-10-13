
export const SVGTile = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={22}
			fill="none"
			{...props}
		>
			<rect width={11} height={10} fill={props.color} rx={1} />
			<rect width={11} height={10} x={13} fill={props.color} rx={1} />
			<rect width={11} height={10} y={12} fill={props.color} rx={1} />
			<rect width={11} height={10} x={13} y={12} fill={props.color} rx={1} />
		</svg>
	)
}

