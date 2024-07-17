import React from 'react'
import Image from 'react-bootstrap/Image'

const ShopCatalogItem = ({ img, name, ...props }) => {
	return (
		<div

			{...props}
			style={{ cursor: 'pointer' }}
			className='d-flex flex-column justify-content-center align-items-center'>
			<div
				className='d-flex align-items-center justify-content-center'
				style={{ width: 200, height: 246, backgroundColor: '#BCC5FF', borderRadius: '8px', margin: '0 0 12px 0' }}>
				<Image src={img} />
			</div>
			<p style={{ fontSize: 20, margin: 0 }}>{name}</p>
		</div>
	)
}

export default ShopCatalogItem