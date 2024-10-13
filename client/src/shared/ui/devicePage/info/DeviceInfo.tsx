import React from 'react'

const DeviceInfo = ({ deviceInfo }) => {
	return (
		<div>
			<div
				className='d-flex justify-content-between'
				style={{ fontSize: 18, fontWeight: 300, lineHeight: '21px', color: "rgb(69, 69, 69)", margin: '0 0 24px 0' }}
			>
				<div>{deviceInfo.title}</div>
				<div style={{ borderBottom: '1px solid rgb(69,69,69)', flexGrow: 1 }}></div>
				<div>{deviceInfo.description}</div>
			</div>
		</div>
	)
}

export default DeviceInfo