
const SVGFilter = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={18.007}
			height={15.67}
			fill="none"
			{...props}
		>
			<path
				stroke="#454545"
				strokeWidth={2}
				d="M4 13.83v-12m3 7.38-3 4.62-3-4.62M14 1.83v12m3-7.38-3-4.62-3 4.62"
			/>
		</svg>
	)
}

export default SVGFilter