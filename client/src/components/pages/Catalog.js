import React, { useContext, useEffect, useState } from 'react'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import Container from 'react-bootstrap/Container'
import FilterVariant from '../Catalog/FilterVariant'
import FilterWithCheck from '../Catalog/FilterWithCheck'
import FilterWithPrice from '../Catalog/FilterWithPrice'
import { Context } from '../../index'
import DevicesSlider from '../UI/slider/DevicesSlider'
import SVGTile from '../UI/icons/catalog/catalogpage/SVGTile'
import SVGList from '../UI/icons/catalog/catalogpage/SVGList'
import BlueLine from '../UI/lines/BlueLine'
import DeviceAsList from '../UI/device/deviceaslist/DeviceAsList'
import { observer } from 'mobx-react-lite'
import { fetchBrands, fetchTypes } from '../../http/deviceAPI'

const Catalog = observer(() => {
	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data)).catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes().then(data => device.setTypes(data)).catch(e => console.log(`Ошибка fetchTypes ${e.message}`))
	}, [])
	const { device } = useContext(Context)
	const filterOptions = [
		{ id: 1, name: '512 ГБ' },
		{ id: 2, name: '128 ГБ' },
		{ id: 3, name: '256 ГБ' },
	]

	const [tileColor, setTileColor] = useState('#0C0C0C')
	const [listColor, setListColor] = useState('#ABABAB')
	const [catalogViewStatus, setCatalogViewStatus] = useState('tiles')

	const tileClick = () => {
		setTileColor('#0C0C0C')
		setListColor('#ABABAB')
		setCatalogViewStatus('tiles')
	}
	const listClick = () => {
		setListColor('#0C0C0C')
		setTileColor('#ABABAB')
		setCatalogViewStatus('list')
	}


	return (
		<Container>
			<div><DevicePageHeader breadCrumbs='Хлебные/крошки' backText='Смартфоны' /></div>
			<div className='d-flex'>
				<div style={{ margin: '0 75px 0 0', minWidth: '289px' }}>
					<FilterVariant />
					<div style={{ backgroundColor: 'white', padding: 16, borderRadius: '8px', boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
						<FilterWithPrice from={123} to={456} />
						<FilterWithCheck style={{ margin: '0 0 20px 0' }} lable='Встроенная память' filterParams={filterOptions} />
					</div>
				</div>

				<div className='d-flex flex-column' style={{ maxWidth: '860px' }} >
					<div className='d-flex justify-content-end' style={{ margin: '0 0 24px 0' }}>
						<div style={{ width: '66px' }} >
							<SVGTile onClick={() => tileClick()} color={tileColor} style={{ margin: '0 16px 0 0', cursor: 'pointer' }} />
							<SVGList onClick={() => listClick()} color={listColor} style={{ cursor: 'pointer' }} />
						</div>
					</div>
					{catalogViewStatus === 'tiles' ?
						<div>
							<BlueLine />
							<DevicesSlider style={{ margin: '0 0 24px 0' }} device={device} slidesPerView={4} spaceBetween={16} />
							<BlueLine />
							<DevicesSlider device={device} slidesPerView={4} spaceBetween={16} />
						</div>
						:
						<div className='d-flex flex-column'>
							{device.devices.map(i =>
								<DeviceAsList key={i.id} device={i} />
							)}
						</div>
					}
				</div>
			</div>
		</Container >
	)
})

export default Catalog