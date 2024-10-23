import { FC } from 'react'
import { DeviceButton } from 'shared/ui/device/deviceButton'
import { DeviceImages } from 'shared/ui/device/deviceImages'
import { DeviceInStock } from 'shared/ui/device/deviceInStock/ui/DeviceInStock'
import { DeviceName } from 'shared/ui/device/deviceName'
import { DevicePrice } from 'shared/ui/device/devicePrice'
import { BlueLine } from 'shared/ui/lines/BlueLine'
import type { TDeviceItemProps } from '../../model'
import styles from './DeviceAsListItem.module.css'

export const DeviceAsListItem: FC<TDeviceItemProps> = ({ device, brandName, typeName }) => {

	return (
		<div style={{ margin: '0 0 10px 0' }}>
			<BlueLine />
			<div className={`d-flex  ${styles.deviceWrapper}`}  >
				<div className={styles.imageBlock}>
					<DeviceImages deviceImages={device.img} />
				</div>
				<div className={`d-flex flex-grow-1 ${styles.secondSide}`} >
					<div className={`flex-grow-1 ${styles.nameAndInStock}`} >
						<div style={{ margin: '0 0 12px 0' }}>
							<DeviceName brandName={brandName} typeName={typeName} deviceId={device.id} deviceName={device.name} />
						</div>
						<DeviceInStock device={device} />
					</div>
					<div className={styles.priceAndButton}>
						<div style={{ margin: '0 0 24px 0' }}>
							<DevicePrice devicePrice={device.price} />
						</div>
						<div className='d-flex'>
							<div className={styles.buttonBlock} >
								<DeviceButton deviceId={device.id} isDeviceInBasket={false} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

