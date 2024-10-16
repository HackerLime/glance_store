import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useGetDeviceByIdQuery } from 'shared/api/devices/devicesApi'
/* import { DevicePageFooter } from 'shared/ui/devicePage/devicePageFooter'
 */ import { DevicePageHeader } from 'shared/ui/devicePage/devicePageHeader'
/* import { DevicePageMain } from 'shared/ui/devicePage/devicePageMain'
 */ import { LoadingAnimation } from 'shared/ui/loadingAnimation'
export const DevicePage = () => {
	const location = useLocation()
	console.log(location)
	const deviceQuery = useGetDeviceByIdQuery(1)


	if (deviceQuery.isLoading) {
		return <LoadingAnimation />
	}

	if (deviceQuery.isError) {
		return <h1>Ошибка загрузка deviceQuery</h1>
	}

	if (deviceQuery.data) {

		return (
			<Container>
				<DevicePageHeader breadCrumbs='Карточка товара' backText='Карточка Товара' />
				{/* 				<DevicePageMain brandName={brandName} typeName={typeName} device={device} />
 */}{/* 				<DevicePageFooter />
 */}			</Container>

		)
	}

}

