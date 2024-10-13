
export const SVGDelete = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={32}
			height={32}
			fill="none"
			{...props}
		>
			<defs>
				<clipPath id="a">
					<path fill="#fff" fillOpacity={0} d="M0 0h32v32H0z" />
				</clipPath>
			</defs>
			<path fill="none" d="M0 0h32v32H0z" />
			<g clipPath="url(#a)">
				<path
					fill="#454545"
					fillRule="evenodd"
					d="M8.93 28c-.72 0-1.34-.27-1.85-.79-.52-.52-.77-1.15-.77-1.88V8H6c-.56 0-1-.45-1-1 0-.56.44-1 1-1h5.56V5c0-.56.45-1 1-1h5.87c.55 0 1 .44 1 1v1H25c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-.32v17.33c0 .73-.25 1.36-.77 1.88-.51.53-1.13.79-1.85.79H8.93ZM22.71 8H8.5v18h14.21V8ZM12 21.66c0 .55.44 1 1 1 .55 0 1-.45 1-1v-10c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10Zm5 0c0 .55.44 1 1 1 .55 0 1-.45 1-1v-10c0-.55-.45-1-1-1-.56 0-1 .45-1 1v10Z"
				/>
			</g>
		</svg>)
}

