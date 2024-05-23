import React from 'react'

const DeviceInfo = ({ deviceInfo }) => {
	return (
		<div>
			<h4 style={{ fontSize: 18, lineHeight: '21px', color: 'rgb(12, 12, 12)', margin: '0 0 20px 0' }}>Характеристики:</h4>
			<div
				className='d-flex justify-content-between'
				style={{ fontSize: 18, fontWeight: 300, lineHeight: '21px', color: "rgb(69, 69, 69)", margin: '0 0 24px 0' }}
			>
				<div>{deviceInfo.title}</div>
				<div style={{ borderBottom: '1px solid rgb(69,69,69)', flexGrow: 1 }}></div>
				<div>{deviceInfo.description}</div>
			</div>
			<h4 style={{ color: "rgb(9,29,158)", fontSize: 18, lineHeight: "21px" }}>Все характеристики</h4>
		</div>
	)
}

export default DeviceInfo