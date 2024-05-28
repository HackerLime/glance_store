import React from 'react'
import Image from 'react-bootstrap/Image'
import heartImg from '../../UI/icons/product/heart.svg'
import classes from './DeviceFavoriteIcon.module.css'

const DeviceFavoriteIcon = (props) => {
	return (
		<div {...props} className={classes.deviceHeartIcon}>
			<Image src={heartImg} style={{ width: 18, height: 15 }} />
		</div>
	)
}

export default DeviceFavoriteIcon