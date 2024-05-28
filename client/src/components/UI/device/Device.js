import React from 'react'
import MyButton from '../buttons/MyButton'
import classes from './Device.module.css'
import DevicePrice from './DevicePrice'
import DeviceInStock from './DeviceInStock'
import DeviceFavoriteIcon from './DeviceFavoriteIcon'
import DeviceName from './DeviceName'
import DeviceImages from './DeviceImages'
const Device = ({ device }) => {

	return (
		<div className={`d-flex flex-column ${classes.deviceWrapper}`} >
			<DeviceImages device={device} />
			<DeviceName device={device} />
			<DevicePrice device={device} />
			<div className='d-flex justify-content-between align-items-center' style={{ margin: '0 0 20px 0' }}>
				<DeviceInStock device={device} />
				<DeviceFavoriteIcon />
			</div>
			<div >
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	)
}

export default Device