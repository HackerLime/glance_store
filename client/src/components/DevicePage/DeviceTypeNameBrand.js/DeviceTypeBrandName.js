import React from 'react'

const DeviceTypeBrandName = ({ device }) => {
	return (
		<h6 style={{
			margin: '0 0 24px 0',
			lineHeight: '38px',
			fontSize: 32,
			color: 'rgb(12, 12, 12)'
		}}>
			{device.type} {device.brand} {device.name}
		</h6>
	)
}

export default DeviceTypeBrandName