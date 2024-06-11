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
import { fetchBrands, fetchDevices, fetchOneDevice, fetchTypes } from '../../http/deviceAPI'


const Catalog = observer(() => {
	const { device } = useContext(Context)
	const [checked, setChecked] = useState([])
	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data)).catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes().then(data => device.setTypes(data)).catch(e => console.log(`Ошибка fetchTypes ${e.message}`))
		fetchDevices().then(data => device.setDevices(data.rows)).catch(e => console.log(`Ошибка fetchDevices ${e.message}`))
	}, [])

	const getPrice = () => {
		let priceArr = []
		device.devices.map(i => priceArr.push(i.price))
		let minPrice = Math.min.apply(null, priceArr)
		let maxPrice = Math.max.apply(null, priceArr)
		if (minPrice !== Infinity && maxPrice !== Infinity) {
			return { max: maxPrice, min: minPrice }
		} else
			return { max: 1, min: 0 }
	}
	const devicePrice = getPrice()

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
			<div><DevicePageHeader breadCrumb='Смартфоны' backText='Смартфоны' /></div>
			<div className='d-flex'>
				<div style={{ margin: '0 75px 0 0', minWidth: '289px' }}>
					<FilterVariant />
					<div style={{ backgroundColor: 'white', padding: 16, borderRadius: '8px', boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
						<FilterWithPrice from={devicePrice.min} to={devicePrice.max} />
						<FilterWithCheck setChecked={setChecked} style={{ margin: '0 0 20px 0' }} lable='Тип устройства' filterParams={device.types} />
						<FilterWithCheck setChecked={setChecked} style={{ margin: '0 0 20px 0' }} lable='Брэнд' filterParams={device.brands} />
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