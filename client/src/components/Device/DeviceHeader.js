import React from 'react'
import { Container, Image } from 'react-bootstrap'
import lessThanImg from '../UI/icons/device/lessThan.svg'
const DeviceHeader = () => {
	return (
		<div style={{ margin: '0 0 40px 0' }}>
			<div style={{ margin: '0 0 32px 0' }}><h2 style={{ fontSize: 14, lineHeight: '19px' }}>Хлебные/Крошки</h2></div>
			<div className='d-flex justify-content-between align-items-center' style={{ maxWidth: 285 }}>
				<Image src={lessThanImg} style={{ width: 13, height: 26 }} />
				<h6 style={{ color: 'rgb(12,12,12)', fontSize: 32, lineHeight: "38px" }} >Карточка товара</h6> </div>
		</div>
	)
}

export default DeviceHeader