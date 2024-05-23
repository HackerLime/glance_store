import React from 'react'
import Image from 'react-bootstrap/Image'
import lessThanImg from '../UI/icons/device/lessThan.svg'
const DevicePageHeader = ({ breadCrumbs, backText }) => {
	return (
		<div style={{ margin: '0 0 40px 0' }}>
			<div style={{ margin: '0 0 32px 0' }}><h2 style={{ fontSize: 14, lineHeight: '19px' }}>{breadCrumbs}</h2></div>
			<div className='d-flex align-items-center' style={{ maxWidth: 285 }}>
				<Image src={lessThanImg} style={{ width: 13, height: 26, margin: '0 20px 0 0' }} />
				<h6 style={{ color: 'rgb(12,12,12)', fontSize: 32, lineHeight: "38px", whiteSpace: 'nowrap' }} >{backText}</h6> </div>
		</div>
	)
}

export default DevicePageHeader