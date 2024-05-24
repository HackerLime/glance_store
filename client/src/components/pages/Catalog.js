import React from 'react'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import Container from 'react-bootstrap/Container'
import FilterVariant from '../Catalog/FilterVariant'
import FilterWithCheck from '../Catalog/FilterWithCheck'
import FilterLabel from '../Catalog/FilterLabel'
import FilterPrice from '../Catalog/FilterPrice'
import FilterWithPrice from '../Catalog/FilterWithPrice'

const Catalog = () => {

	const filterOptions = [
		{ id: 1, name: '512 ГБ' },
		{ id: 2, name: '128 ГБ' },
		{ id: 3, name: '256 ГБ' },
	]
	return (
		<Container>
			<div><DevicePageHeader breadCrumbs='Хлебные/крошки' backText='Смартфоны' /></div>
			<div className='catalog_main d-flex justify-content-between'>
				<div>
					<FilterVariant />
					<div style={{ backgroundColor: 'white', padding: 16, borderRadius: '8px', boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
						<FilterWithPrice from={123} to={456} />
						<FilterWithCheck style={{ margin: '0 0 20px 0' }} lable='Встроенная память' filterParams={filterOptions} />
					</div>
				</div>
				<div>catalog_devices</div>
			</div>
		</Container>
	)
}

export default Catalog