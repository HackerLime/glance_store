import { RootState } from 'app/store/store'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAddBasketDeviceMutation } from 'shared/api/basket/basketApi'
import { REGISTRATION_ROUTE } from 'shared/routerPaths'
import styles from './DeviceButton.module.css'

export const DeviceButton = ({ deviceId }) => {

	const [addBasketDevice, { isLoading }] = useAddBasketDeviceMutation()
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

		<Button className={styles.myButton} onClick={addBasketDeviceAction}>
			<span>	{isLoading ? 'Загрузка' : 'В корзину'}</span>
		</Button>

	)


}

