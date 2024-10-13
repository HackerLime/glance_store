import { TDevice } from 'entities/device'
import { FC } from 'react'
import { DeviceButton, DeviceInStock, DeviceName, DevicePrice } from 'shared/ui/device/'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import styles from './DeviceAsSliderItem.module.css'

type TDeviceAsSliderItem = {
	device: TDevice
}


export const DeviceAsSliderItem: FC<TDeviceAsSliderItem> = ({ device }) => {

	/* 	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
		useEffect(() => {
			if (store.device.inBasketDevicesId.includes(device.id)) {
				setIsDeviceInBasket(true)
			}
		}, [device.id, store.device.inBasketDevicesId]) */
	return (
		<div className={`d-flex flex-column justify-content-between ${styles.deviceWrapper}`} >
			<DeviceImages device={device} />
			<div className={`d-flex flex-column align-items-center ${styles.deviceNamePriceInStock}`}>
				<DeviceName device={device} />
				<DevicePrice device={device} />
				<DeviceInStock device={device} />
			</div>
			<div className='d-flex justify-content-center' >
				<DeviceButton deviceId={device.id} isDeviceInBasket={isDeviceInBasket} />
			</div>
		</div>
	)


}


