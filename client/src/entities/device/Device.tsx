import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index'
import DeviceButton from '../buttons/DeviceButton'
import classes from './Device.module.css'
import DeviceImages from './DeviceImages'
import DeviceInStock from './DeviceInStock'
import DeviceName from './DeviceName'
import DevicePrice from './DevicePrice'
const Device = observer(({ device }) => {
	const store = useContext(Context)
	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
	useEffect(() => {
		if (store.device.inBasketDevicesId.includes(device.id)) {
			setIsDeviceInBasket(true)
		}
	}, [device.id, store.device.inBasketDevicesId])
	return (
		<div className={`d-flex flex-column justify-content-between ${classes.deviceWrapper}`} >
			<DeviceImages device={device} />
			<div className={`d-flex flex-column align-items-center ${classes.deviceNamePriceInStock}`}>
				<DeviceName device={device} />
				<DevicePrice device={device} />
				<DeviceInStock device={device} />
			</div>
			<div className='d-flex justify-content-center' >
				<DeviceButton deviceId={device.id} isDeviceInBasket={isDeviceInBasket} />
			</div>
		</div>
	)
})

export default Device