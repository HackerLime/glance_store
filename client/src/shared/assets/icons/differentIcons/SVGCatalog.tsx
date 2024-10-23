
export const SVGCatalog = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={26}
			height={18}
			fill="none"
		>
			<rect width={2} height={2} x={-0.5} fill={color} rx={1} />
			<rect width={20} height={2} x={5.5} fill={color} rx={1} />
			<rect width={2} height={2} x={-0.5} y={8} fill={color} rx={1} />
			<rect width={20} height={2} x={5.5} y={8} fill={color} rx={1} />
			<rect width={2} height={2} x={-0.5} y={16} fill={color} rx={1} />
			<rect width={20} height={2} x={5.5} y={16} fill={color} rx={1} />
		</svg>
	)
}


