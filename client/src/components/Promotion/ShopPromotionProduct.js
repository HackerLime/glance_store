import React from 'react'
import { Image } from 'react-bootstrap'
import heartImg from '../UI/icons/product/heart.svg'
import ShopPromotionCarousel from './ShopPromotionCarousel'

const ShopPromotionProduct = ({ device }) => {
	return (
		<div
			className='d-flex flex-column' style={{ maxWidth: "169px", margin: '0 0 24px 0' }}
		>
			<div style={{ margin: '0 0 20px 0' }}><ShopPromotionCarousel device={device} /></div>
			<h1
				style={{
					fontSize: 20,
					margin: '0 0 16px 0'
				}}
			>{device.name}</h1>

			<div
				className='d-flex align-items-end'
				style={{ margin: '0 0 16px 0' }}
			>
				<h1
					style={{
						fontSize: 20,
						fontWeight: 500,
						margin: '0 8px 0 0'
					}}
				>{device.stockPrice} ₽</h1>
				<h3
					style={{
						color: 'rgb(171, 171, 171)',
						fontSize: 14,
						fontWeight: 300,
						textDecorationLine: 'line-through',


					}}
				> {device.defaultPrice} ₽</h3></div>

			<div className='d-flex justify-content-between align-items-center' style={{ margin: '0 0 20px 0' }}>
				<h3 style={{ fontSize: 14, fontWeight: 300, color: device.inStock ? 'rgb(22,155,0)' : 'red' }}>
					{device.inStock ? 'В наличии' : 'Отсутсвует'}
				</h3>
				<div style={{ background: 'rgb(248, 252, 255)', padding: '8px 12px', borderRadius: 8, boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
					<Image src={heartImg} style={{ width: 18, height: 15 }} />
				</div>
			</div>
			<div >
				<button style={{ border: 'none', backgroundColor: 'rgb(9, 29, 158)', padding: "14px 51.5px", borderRadius: 8 }}
				><h3 style={{ color: 'rgb(246, 246, 246)', fontSize: 14, lineHeight: "16px", fontWeight: 500, }}>В корзину</h3></button>
			</div>
		</div>
	)
}

export default ShopPromotionProduct