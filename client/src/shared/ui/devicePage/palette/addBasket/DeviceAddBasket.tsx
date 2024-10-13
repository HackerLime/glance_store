import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../index'
import DeviceButton from '../../../UI/buttons/DeviceButton'

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
			className='d-flex flex-column align-items-center'
			style={{ backgroundColor: 'rgb(231, 231, 237)', borderRadius: 8, padding: 40 }}>
			<p style={{ color: "rgb(12, 12, 12)", margin: '0 0 28px 0', fontSize: 24, fontWeight: 800 }}>{device.price} ₽</p>
			<DeviceButton deviceId={device.id} isDeviceInBasket={isDeviceInBasket} />
		</div>
	)
}

export default DeviceAddBasket