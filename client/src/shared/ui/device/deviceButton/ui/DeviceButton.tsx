import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASKET_ROUTE } from 'shared/routerPaths'
import styles from './DeviceButton.module.css'
export const DeviceButton = ({ deviceId, isDeviceInBasket }) => {
	const [isClicked, setIsClicked] = useState(false)
	const navigate = useNavigate()
	const addBasketDeviceAction = () => {
		/* if (!localStorage.getItem('token')) {
			return navigate(REGISTRATION_ROUTE)
		} else {
			addBasketDevice(deviceId, store.user.user.id).then(data => console.log(data)).catch(e => console.log(e))
			setIsClicked(true)
		} */
		console.log('addBasketDeviceAction')
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
				onClick={() => !isClicked ? addBasketDeviceAction() : navigate(BASKET_ROUTE)}
				style={{
					maxHeight: '44px',
					maxWidth: '200px',
				}}

				className={isClicked ? styles.inBasketBtn : styles.defaultBtn}>
				<h3 className={isClicked ? styles.inBasketBtnText : styles.defaultBtnText}>{isClicked ? 'Я в Корзине' : 'в Корзину'}</h3>
			</button >
		)
	}


}

