import React, { useContext } from 'react'
import styles from './DeviceButton.module.css'
import { useNavigate } from 'react-router-dom'
import { BASKET_ROUTE } from '../../../router/paths'
import { addBasketDevice } from '../../../http/deviceAPI'
import { Context } from '../../../index'
const DeviceButton = ({ deviceId, isDeviceInBasket }) => {
	const store = useContext(Context)
	const navigate = useNavigate()
	const addBasketDeviceAction = () => {
		addBasketDevice(deviceId, store.user.user.id).then(data => console.log(data)).catch(e => console.log(e))
		console.log(deviceId)

	}
	if (isDeviceInBasket) {
		return (
			<button
				onClick={() => navigate(BASKET_ROUTE)}
				style={{
					maxHeight: '44px',
					maxWidth: '200px',
				}}
				className={styles.inBasketBtn}
			>
				<h3 className={styles.inBasketBtnText}>Я в Корзине</h3>
			</button>
		)
	} else {
		return (
			<button
				onClick={() => addBasketDeviceAction()}
				style={{
					maxHeight: '44px',
					maxWidth: '200px',
				}}

				className={styles.defaultBtn}>
				<h3 className={styles.defaultBtnText}>в Корзину</h3>
			</button >
		)
	}

}

export default DeviceButton