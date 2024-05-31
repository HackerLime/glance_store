import React from 'react'
import classes from './DeviceImages.module.css'
import DeviceCarousel from './DeviceCarousel'
import { observer } from 'mobx-react-lite'

const DeviceImages = observer(({ device, ...props }) => {
	return (
		<div {...props} className={classes.deviceCarousel}><DeviceCarousel device={device} /></div>

	)
})

export default DeviceImages