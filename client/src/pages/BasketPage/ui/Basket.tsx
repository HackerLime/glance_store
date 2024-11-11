import type { RootState } from 'app/store/store'
import { Device } from 'entities/device'
import { useSelector } from 'react-redux'
import { useGetBasketDevicesQuery } from 'shared/api/basket/basketApi'
import { useGetBrandsQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi'
import { BasketEmpty } from 'shared/ui/basket'

export const Basket = () => {

	//todo Запрос на получение basketDevices
	//todo Работа с выбранными позициями (Считать стоимость выбранных товаров форм,Удаление )
	const userState = useSelector((state: RootState) => state.user)

	const basketDevices = useGetBasketDevicesQuery({ basketId: userState.user?.id })
	const brands = useGetBrandsQuery(undefined)
	const types = useGetTypesQuery(undefined)


	if (basketDevices.isLoading || brands.isLoading || types.isLoading) {
		return <h1>Загрузка...</h1>
	}

	if (basketDevices.isError || brands.isError || types.isError) {
		return <h1>Ошибка загрузки...</h1>
	}



	if (basketDevices.data && brands.data && types.data) {

		if (basketDevices.data.length) {
			return (
				<>
					{
						basketDevices.data.map(device => {
							const brand = brands.data.find(brand => brand.id === device.brandId)
							const type = types.data.find(type => type.id === device.typeId)
							//todo надо поменять asListItem на asBasketListItem
							return (
								< Device asListItem={true} brandName={brand?.name || 'unknown brandName'} typeName={type?.name || 'unknown typeName'} device={device} key={device.id} />
							)
						}
						)
					}
				</>)
		} else {
			return <BasketEmpty />
		}

	}



	return <h1>Что то пошло не так</h1>
}

