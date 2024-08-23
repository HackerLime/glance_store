import React from 'react'

const FancyboxItem = ({ href, src }) => {
	return (
		<a style={{ marginLeft: '5px' }} data-fancybox="gallery" href={href}>
			<img src={src} alt='#' />
		</a>
	)
}

export default FancyboxItem