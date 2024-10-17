import { FC } from 'react'
import { Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { useGetBrandByIdQuery, useGetTypeByIdQuery } from 'shared/api/devices/devicesApi'
import { TDevice } from 'shared/types'
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
			<div className={styles.devicePageMainWrapper} >
				<div className={styles.devicePageImage}>
					<Image src={import.meta.env.VITE_API_URL + '/' + device.img} />
				</div>
				<div className={styles.deviceCharacteristicsWrapper}>
					<div>{getBrandByIdQuery.data.name}</div>
					<div>{getTypeByIdQuery.data.name}</div>
				</div>
				<div style={{ padding: '0 10px' }}>
					<Button>КНОПКА</Button>
				</div>
			</div>
		)
	}

	return null


}

