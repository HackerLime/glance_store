import React from 'react'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import Container from 'react-bootstrap/Container'

const Catalog = () => {
	return (
		<Container>
			<div><DevicePageHeader breadCrumbs='Хлебные/крошки' backText='Смартфоны' /></div>
			<div className='catalog_main'>
				<div>catalog_filter</div>
				<div>catalog_devices</div>
			</div>
		</Container>
	)
}

export default Catalog