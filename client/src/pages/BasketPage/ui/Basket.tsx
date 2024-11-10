import Button from 'react-bootstrap/Button'
import { useAddBasketDeviceMutation, useDeleteBasketDeviceMutation, useFetchBasketDevicesMutation } from 'shared/api/basket/basketApi'


export const Basket = () => {


	//todo Запрос на получение basketDevices
	//todo Работа с выбранными позициями (Считать стоимость выбранных товаров форм,Удаление )

	const [addDevice] = useAddBasketDeviceMutation()
	const [getDevices] = useFetchBasketDevicesMutation()
	const [deleteDevice] = useDeleteBasketDeviceMutation()
	const addBasketDeviceAction = async () => {
		const device = await getDevices({ basketId: 1 })
		console.log(device)
	}



	return (
		<>
			<h1 style={{ textAlign: 'center' }}>BASKETPAGE</h1>
			<Button variant='success' onClick={() => addBasketDeviceAction()} >asasas</Button>
		</>
	)
}

