import React from 'react'
import MyButton from '../buttons/DeviceButton'
import classes from './Device.module.css'
import DevicePrice from './DevicePrice'
import DeviceInStock from './DeviceInStock'
import DeviceFavoriteIcon from './DeviceFavoriteIcon'
import DeviceName from './DeviceName'
import DeviceImages from './DeviceImages'
import { observer } from 'mobx-react-lite'
const Device = observer(({ device }) => {

	return (
		<div className={`d-flex flex-column justify-content-between ${classes.deviceWrapper}`} >
			<div>
				<DeviceImages style={{}} device={device} />
			</div>
			<div className='d-flex flex-column  ' style={{ margin: '0 0 20px 0' }}>
				<DeviceName device={device} />
				<DevicePrice device={device} />
				<div className='d-flex justify-content-between align-items-center' >
					<DeviceInStock device={device} />
					<DeviceFavoriteIcon />
				</div>
			</div>
			<div >
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	)
})

export default Device