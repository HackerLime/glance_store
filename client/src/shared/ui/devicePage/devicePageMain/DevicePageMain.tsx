import { FC } from 'react'
import Image from 'react-bootstrap/Image'
import { useGetBrandByIdQuery, useGetTypeByIdQuery } from 'shared/api/devices/devicesApi'
import { TDevice } from 'shared/types'
import { DeviceButton } from 'shared/ui/device/deviceButton'
import { DevicePrice } from 'shared/ui/device/devicePrice'
import styles from './DevicePageMain.module.css'

type TDevicePageMainProps = {
	device: TDevice
}

export const DevicePageMain: FC<TDevicePageMainProps> = ({ device }) => {

	const getBrandByIdQuery = useGetBrandByIdQuery(device.brandId)
	const getTypeByIdQuery = useGetTypeByIdQuery(device.typeId)

	if (getBrandByIdQuery.isLoading || getTypeByIdQuery.isLoading) {
		return <h1>Загрузка...</h1>
	}

	if (getBrandByIdQuery.isError || getTypeByIdQuery.isError) {
		return <h1>Ошибка Загрузки</h1>
	}

	if (getBrandByIdQuery.data && getTypeByIdQuery.data) {
		return (
			<main className={styles.devicePageMainWrapper} >
				<section className={styles.devicePageImage}>
					<Image src={import.meta.env.VITE_API_URL + '/' + device.img} />
				</section>
				<section className={styles.deviceCharacteristicsWrapper}>
					<h2>{getTypeByIdQuery.data.name} {getBrandByIdQuery.data.name} {device.name}</h2>
					{device.info?.length ? <h2>Надо развернуть info</h2> : null}
				</section>
				<section className={styles.devicePage__priceAndAddBasket} >
					<DevicePrice devicePrice={device.price} isDevicePage={true} />
					<DeviceButton deviceId={device.id} />
				</section>
			</main>
		)
	}

	return null


}

