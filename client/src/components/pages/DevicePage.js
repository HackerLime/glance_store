import React from 'react'
import Container from 'react-bootstrap/Container'

import DevicePageHeader from '../DevicePage/DevicePageHeader'
import DevicePageMain from '../DevicePage/DevicePageMain'
import DevicePageFooter from '../DevicePage/DevicePageFooter'
const Device = () => {

	return (
		<Container>
			<div style={{ padding: '17px 0 80px 0' }}>
				<DevicePageHeader breadCrumbs='Хлебные/крошки' backText='Карточка Товара' />
				<DevicePageMain />
				<DevicePageFooter />
			</div>
		</Container>
	)
}

export default Device