import React from 'react'
import { Image } from 'react-bootstrap'
import iphoneImg from '../UI/icons/device/bigIphone.svg'

const DeviceMain = () => {
	const device = { id: 1, name: 'Смартфон Apple iPhone 13 128GB', color: 'Белый', price: 75999 }
	const deviceInfo = { id: 1, title: 'Какой то тайтл', description: 'Какой то дескр' }

	return (
		<div className='d-flex justify-content-between' style={{ margin: '0 0 40px 0' }}>
			<div>
				<div style={{ backgroundColor: 'rgb(248, 252, 255)', borderRadius: '8px' }}><Image src={iphoneImg} style={{ width: 411, height: 590 }} /></div>
			</div>
			<div style={{ maxWidth: 354 }}>
				<h6 style={{ margin: '0 0 24px 0', lineHeight: '38px', fontSize: 32, color: 'rgb(12, 12, 12)' }}>{device.name}</h6>
				<h2 style={{ lineHeight: '19px', fontSize: 16, color: 'rgb(69,69,69)', margin: '0 0 24px 0' }}>Цвет: {device.color}</h2>
				<div className='d-flex justify-content-between' style={{ maxWidth: 181, margin: '0 0 32px 0' }}>
					<div style={{ backgroundColor: 'rgb(255, 0, 0)', width: 41, height: 39, borderRadius: '8px' }}></div>
					<div style={{ backgroundColor: 'rgb(12, 12, 12)', width: 41, height: 39, borderRadius: '8px' }}></div>
					<div style={{ backgroundColor: 'rgb(246, 246, 246)', width: 41, height: 39, borderRadius: '8px', boxSizing: 'border-box', border: '1px solid rgb(69, 69, 69)' }}></div>
				</div>
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
			<div>
				<div style={{ backgroundColor: 'rgb(231, 231, 237)', padding: 40, borderRadius: 8 }}>
					<h6 style={{ color: "rgb(12, 12, 12)", margin: '0 0 28px 0' }}>{device.price} ₽</h6>
					<button style={{ border: 'none', backgroundColor: 'rgb(9, 29, 158)', padding: "14px 51.5px", borderRadius: 8 }}
					><h3 style={{ color: 'rgb(246, 246, 246)', fontSize: 14, lineHeight: "16px", fontWeight: 500, }}>В корзину</h3></button>
				</div>
			</div>
		</div>
	)
}

export default DeviceMain