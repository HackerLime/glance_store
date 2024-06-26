import React, { useState } from 'react'
import styles from './DeviceButton.module.css'
import { useLocation } from 'react-router-dom'
const DeviceButton = (props) => {

	return (
		<button style={{
			maxHeight: '44px',
			maxWidth: '200px',
		}}
			{...props}
			className={styles.defaultBtn} {...props}>
			<h3 className={styles.defaultBtnText}>в Корзину</h3>
		</button >
	)
}

export default DeviceButton