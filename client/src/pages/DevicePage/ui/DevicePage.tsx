import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetDeviceByIdQuery } from 'shared/api/devices/devicesApi'
import { DevicePageMain } from 'shared/ui/devicePage'
/* import { DevicePageFooter } from 'shared/ui/devicePage/devicePageFooter'
 */ import { DevicePageHeader } from 'shared/ui/devicePage/devicePageHeader'
/* import { DevicePageMain } from 'shared/ui/devicePage/devicePageMain'
 */ import { LoadingAnimation } from 'shared/ui/loadingAnimation'
export const DevicePage = () => {
	const params = useParams()
	const { data, isError, isLoading } = useGetDeviceByIdQuery(params.id)

	if (isLoading) {
		return <LoadingAnimation />
	}

	if (isError) {
		return <h1>Ошибка загрузка deviceQuery</h1>
	}

	if (data) {
		return (
			<Container>
				<DevicePageHeader breadCrumbs='Карточка товара' backText='Карточка Товара' />
				<DevicePageMain device={data} />
				{/* 				<DevicePageFooter />
 */}			</Container>

		)
	}

}

