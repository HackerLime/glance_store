import { RootState } from 'app/store/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAddBasketDeviceMutation } from 'shared/api/basket/basketApi'
import { REGISTRATION_ROUTE } from 'shared/routerPaths'
import styles from './DeviceButton.module.css'

export const DeviceButton = ({ deviceId }) => {

	const [addBasketDevice] = useAddBasketDeviceMutation()
	const userState = useSelector((state: RootState) => state.user)
	const navigate = useNavigate()

	const addBasketDeviceAction = () => {
		if (!localStorage.getItem('token')) {
			console.log('fail')
			return navigate(REGISTRATION_ROUTE)
		} else {
			addBasketDevice({ deviceId, basketId: userState.user.id })
		}
	}

	return (
		<button className={styles.myButton} onClick={addBasketDeviceAction}>В корзину</button>
	)


}

