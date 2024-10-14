import { TDevice } from 'entities/device'
import { FC } from 'react'
import { DeviceButton, DeviceInStock, DeviceName, DevicePrice } from 'shared/ui/device/'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import styles from './DeviceAsSliderItem.module.css'

type TDeviceAsSliderItem = {
	device: TDevice
}


export const DeviceAsSliderItem: FC<TDeviceAsSliderItem> = ({ device }) => {
	//todo надо реализовать код ниже
	/* 	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
		useEffect(() => {
			if (store.device.inBasketDevicesId.includes(device.id)) {
				setIsDeviceInBasket(true)
			}
		}, [device.id, store.device.inBasketDevicesId]) */

	return (
		<div className={styles.deviceWrapper} >
			<DeviceImages device={device} />
			<div className={styles.deviceNamePriceInStock}>
				<DeviceName device={device} />
				<DevicePrice device={device} />
				<DeviceInStock device={device} />
			</div>
			<div className={styles.deviceButton} >
				<DeviceButton deviceId={device.id} isDeviceInBasket={false} />
			</div>
		</div>
	)


}


