import { FC } from 'react'
import classes from './DevicePrice.module.css'

type DevicePriceProps = {
	devicePrice: number
}

export const DevicePrice: FC<DevicePriceProps> = ({ devicePrice }) => {
	const getStockPrice = (price: number, percent: number): number => {
		return Math.ceil(price - price / 100 * percent)
	}

	const percentProp = true
	return (
		<>
			{
				percentProp ?
					<div className={classes.devicePrice}>
						<h2 className={classes.deviceMainPrice}>{getStockPrice(devicePrice, 15)} ₽</h2>
						<h3 className={classes.deviceStockPrice}> {devicePrice} ₽</h3>
					</div>
					:
					<div className={classes.devicePrice}>
						<h2 className={classes.deviceMainPrice}>{devicePrice} ₽</h2>
					</div>
			}
		</>
	)
}

