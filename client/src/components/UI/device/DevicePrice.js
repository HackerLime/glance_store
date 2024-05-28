import React from 'react'
import classes from './DevicePrice.module.css'
const DevicePrice = ({ device }) => {
	const getStockPrice = (price, percent) => {
		return Math.ceil(price - price / 100 * percent)
	}
	return (
		<>
			{
				device.percent ?
					<div className={`d-flex align-items-end ${classes.devicePrice}`}>
						<h1 className={classes.deviceMainPrice}>{getStockPrice(device.price, device.percent)} ₽</h1>
						<h3 className={classes.deviceStockPrice}> {device.price} ₽</h3>
					</div>
					:
					<div className={`d-flex align-items-end ${classes.devicePrice}`}>
						<h1 className={classes.deviceMainPrice}>{device.price} ₽</h1>
					</div>
			}
		</>
	)
}

export default DevicePrice