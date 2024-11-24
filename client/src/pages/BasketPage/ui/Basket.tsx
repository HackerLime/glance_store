//@ts-nocheck
import type { RootState } from 'app/store/store'
import { Device } from 'entities/device'
import { useSelector } from 'react-redux'
import { useGetBasketDevicesQuery } from 'shared/api/basket/basketApi'
import { useGetBrandsQuery, useGetTypesQuery } from 'shared/api/devices/devicesApi'
import { BasketEmpty } from 'shared/ui/basket'
import { PageHeader } from 'widgets/pageHeader'
import styles from './Basket.module.css'
export const Basket = () => {



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
		return (
			<div className={styles.content__wrapper}>
				<PageHeader description='Корзина' />
				{
					basketDevices.data.length ? (
						basketDevices.data.map(device => {
							const brand = brands.data.find(brand => brand.id === device.brandId);
							const type = types.data.find(type => type.id === device.typeId);
							return (
								<Device
									asBasketListItem={true}
									brandName={brand?.name || 'unknown brandName'}
									typeName={type?.name || 'unknown typeName'}
									device={device}
									key={device.id}
								/>
							);
						})
					) : (
						<BasketEmpty />
					)
				}

			</div>
		)
	}

	return <h1>Что то пошло не так</h1>
}

