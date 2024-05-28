import React from 'react'

const SVGList = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={26}
			height={18}
			fill="none"
			{...props}
		>
			<rect width={2} height={2} fill={props.color} rx={1} />
			<rect width={20} height={2} x={6} fill={props.color} rx={1} />
			<rect width={2} height={2} y={8} fill={props.color} rx={1} />
			<rect width={20} height={2} x={6} y={8} fill={props.color} rx={1} />
			<rect width={2} height={2} y={16} fill={props.color} rx={1} />
			<rect width={20} height={2} x={6} y={16} fill={props.color} rx={1} />
		</svg>
	)
}

export default SVGList