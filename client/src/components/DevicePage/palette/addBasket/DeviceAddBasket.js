import React from 'react'
import MyButton from '../../../UI/buttons/DeviceButton'

const DeviceAddBasket = ({ device }) => {
	return (
		<div
			style={{ backgroundColor: 'rgb(231, 231, 237)', borderRadius: 8, padding: 40 }}>
			<h6 style={{ color: "rgb(12, 12, 12)", margin: '0 0 28px 0' }}>{device.price} ₽</h6>
			<MyButton  >В корзину</MyButton>
		</div>
	)
}

export default DeviceAddBasket