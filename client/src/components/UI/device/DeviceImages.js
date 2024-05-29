import React from 'react'
import classes from './DeviceImages.module.css'
import DeviceCarousel from './DeviceCarousel'
import { observer } from 'mobx-react-lite'

const DeviceImages = observer(({ device }) => {
	return (
		<div className={classes.deviceCarousel}><DeviceCarousel device={device} /></div>

	)
})

export default DeviceImages