import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetDeviceByIdQuery } from 'shared/api/devices/devicesApi'
import { DevicePageFooter, DevicePageMain } from 'shared/ui/devicePage'
import { LoadingAnimation } from 'shared/ui/loadingAnimation'
import { PageHeader } from 'widgets/pageHeader/ui/PageHeader'


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
				<PageHeader description='Карточка Товара' />
				<DevicePageMain device={data} />
				<DevicePageFooter />
			</Container>

		)
	}

}

