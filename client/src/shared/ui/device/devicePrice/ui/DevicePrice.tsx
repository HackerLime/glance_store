import { FC } from 'react'
import styles from './DevicePrice.module.css'

type DevicePriceProps = {
	devicePrice: number
	isDevicePage?: boolean
}

export const DevicePrice: FC<DevicePriceProps> = ({ devicePrice, isDevicePage }) => {
	const getStockPrice = (price: number, percent: number): number => {
		return Math.ceil(price - price / 100 * percent)
	}

	const percentProp = false
	return (
		<section >
			{
				percentProp ?
					<div className={isDevicePage ? styles.devicePrice_devicePage : styles.devicePrice}>
						<span className={isDevicePage ? styles.deviceMainPrice_devicePage : styles.deviceMainPrice}>{getStockPrice(devicePrice, 15)} ₽</span>
						<span className={styles.deviceStockPrice}> {devicePrice} ₽</span>
					</div>
					:
					<div className={isDevicePage ? styles.devicePrice_devicePage : styles.devicePrice}>
						<span className={isDevicePage ? styles.deviceMainPrice_devicePage : styles.deviceMainPrice}>{devicePrice} ₽</span>
					</div>
			}
		</section>
	)
}

