import React from 'react'
import classes from './DeviceImages.module.css'
import DeviceCarousel from './DeviceCarousel'

const DeviceImages = ({ device }) => {
	return (
		<div className={classes.deviceCarousel}><DeviceCarousel device={device} /></div>

	)
}

export default DeviceImages