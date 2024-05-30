import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import DevicePageMain from '../DevicePage/DevicePageMain'
import DevicePageFooter from '../DevicePage/DevicePageFooter'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../../http/deviceAPI'
const DevicePage = observer(() => {
	const [device, setDevice] = useState({})
	const { id } = useParams()

	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data)).catch(e => `Ошибка fetchOneDevice ${e}`)
	}, [])

	return (
		<Container>
			<div style={{ padding: '17px 0 80px 0' }}>
				<DevicePageHeader breadCrumbs='Хлебные/крошки' backText='Карточка Товара' />
				<DevicePageMain device={device} />
				<DevicePageFooter />
			</div>
		</Container>
	)
})

export default DevicePage