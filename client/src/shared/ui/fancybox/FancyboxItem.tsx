
export const FancyboxItem = ({ href, src }) => {
	return (
		<a style={{ marginLeft: '5px' }} data-fancybox="gallery" href={href}>
			<img src={src} alt='#' />
		</a>
	)
}

