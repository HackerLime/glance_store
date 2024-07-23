import React from 'react'

const DeviceTypeBrandName = ({ device, typeName, brandName }) => {

	return (
		<h6 style={{
			margin: '0 0 24px 0',
			lineHeight: '38px',
			fontSize: 32,
			color: 'rgb(12, 12, 12)'
		}}>
			<p>{typeName}</p>
			<p> {brandName} </p>
			<p>{device.name}</p>
		</h6>
	)
}

export default DeviceTypeBrandName