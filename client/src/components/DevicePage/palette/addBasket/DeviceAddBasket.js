import React, { useContext, useEffect, useState } from 'react'
import DeviceButton from '../../../UI/buttons/DeviceButton'
import { Context } from '../../../../index'

const DeviceAddBasket = ({ device }) => {
	const store = useContext(Context)
	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
	useEffect(() => {
		if (store.device.inBasketDevicesId.includes(device.id)) {
			setIsDeviceInBasket(true)
		}
	}, [store.device.inBasketDevicesId])

	return (
		<div
			style={{ backgroundColor: 'rgb(231, 231, 237)', borderRadius: 8, padding: 40 }}>
			<h6 style={{ color: "rgb(12, 12, 12)", margin: '0 0 28px 0' }}>{device.price} ₽</h6>
			<DeviceButton deviceId={device.id} isDeviceInBasket={isDeviceInBasket} />
		</div>
	)
}

export default DeviceAddBasket