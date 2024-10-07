
const SVGBasket = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={23}
			fill="none"
		>
			<path
				stroke={color}
				strokeLinejoin="round"
				strokeWidth={2}
				d="M8.5 22c-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1 0 .55-.45 1-1 1ZM18.5 22c-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1 0 .55-.45 1-1 1Z"
			/>
			<path
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M.5 1h4l2.68 14.28c.09.49.34.93.7 1.24.37.32.83.48 1.3.47h9.71c.47.01.93-.15 1.3-.47.36-.31.61-.75.7-1.24l1.61-8.95h-17"
			/>
		</svg>
	)
}

export default SVGBasket