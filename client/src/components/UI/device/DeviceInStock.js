import React from 'react'
import classes from './DeviceInStock.module.css'
const DeviceInStock = ({ device }) => {
	return (
		<h3 className={classes.deviceInStock} style={{ color: device.inStock ? 'rgb(22,155,0)' : 'red' }}>
			{device.inStock ? 'В наличии' : 'Отсутсвует'}
		</h3>
	)
}

export default DeviceInStock