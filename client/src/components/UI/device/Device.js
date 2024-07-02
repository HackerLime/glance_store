import React from 'react'
import classes from './Device.module.css'
import DevicePrice from './DevicePrice'
import DeviceInStock from './DeviceInStock'
import DeviceName from './DeviceName'
import DeviceImages from './DeviceImages'
import { observer } from 'mobx-react-lite'
import DeviceButton from '../buttons/DeviceButton'
const Device = observer(({ device }) => {

	return (
		<div className={`d-flex flex-column justify-content-between ${classes.deviceWrapper}`} >
			<div>
				<DeviceImages device={device} />
			</div>
			<div className='d-flex flex-column  ' style={{ margin: '0 0 20px 0' }}>
				<DeviceName device={device} />
				<DevicePrice device={device} />
				<div className='d-flex justify-content-between align-items-center' >
					<DeviceInStock device={device} />
				</div>
			</div>
			<div >
				<DeviceButton />
			</div>
		</div>
	)
})

export default Device