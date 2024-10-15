import { FC } from 'react'
import { DeviceButton, DeviceInStock, DeviceName, DevicePrice } from 'shared/ui/device/'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import type { TDeviceItemProps } from '../../model'
import styles from './DeviceAsSliderItem.module.css'


export const DeviceAsSliderItem: FC<TDeviceItemProps> = ({ device, brandName, typeName }) => {
	//todo надо реализовать код ниже
	/* 	const [isDeviceInBasket, setIsDeviceInBasket] = useState(false)
		useEffect(() => {
			if (store.device.inBasketDevicesId.includes(device.id)) {
				setIsDeviceInBasket(true)
			}
		}, [device.id, store.device.inBasketDevicesId]) */

	return (
		<div className={styles.deviceWrapper} >
			<div className={styles.imageWrapper}>
				<DeviceImages deviceImages={device.img} />
			</div>
			<div className={styles.deviceNamePriceInStock}>
				<DeviceName deviceId={device.id} deviceName={device.name} brandName={brandName} typeName={typeName} />
				<DevicePrice devicePrice={device.price} />
				<DeviceInStock device={device} />
			</div>
			<div className={styles.deviceButton} >
				<DeviceButton deviceId={device.id} isDeviceInBasket={false} />
			</div>
		</div>
	)


}


