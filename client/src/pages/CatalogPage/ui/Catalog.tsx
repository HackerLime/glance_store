import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useScreenWidth } from '../../hooks/useScreenWidth'
import { fetchBasketDevices, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import { Context } from '../../index'
import FilterVariant from '../Catalog/FilterVariant'
import FilterWithCheck from '../Catalog/FilterWithCheck'
import FilterWithPrice from '../Catalog/FilterWithPrice'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import DeviceAsList from '../UI/device/deviceaslist/DeviceAsList'
import SVGList from '../UI/icons/catalog/catalogpage/SVGList'
import SVGTile from '../UI/icons/catalog/catalogpage/SVGTile'
import SVGFilterIcon from '../UI/icons/SVGFilterIcon'
import BlueLine from '../UI/lines/BlueLine'
import LoadingAnimation from '../UI/loadingAnimation/LoadingAnimation'
import DevicesSlider from '../UI/slider/DevicesSlider'

export const Catalog = observer(() => {
	const { device } = useContext(Context)
	const [catalogDevices, setCatalogDevices] = useState([])
	const [typeChecked, setTypeChecked] = useState([])
	const [brandChecked, setBrandChecked] = useState([])
	const [cancelVisible, setCancelVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data)).catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes().then(data => device.setTypes(data)).catch(e => console.log(`Ошибка fetchTypes ${e.message}`))
		fetchDevices().then(data => device.setDevices(data.rows)).catch(e => console.log(`Ошибка fetchDevices ${e.message}`))

	}, [])

	useEffect(() => {
		if (localStorage.getItem('token')) {
			fetchBasketDevices().then(data => device.setBasketDevicesData(data)).catch(e => console.log(e))
		}
	}, [])

	useEffect(() => {
		setCatalogDevices([...device.devices])
	}, [device.devices])

	useEffect(() => {
		let checkedTypeIds = []
		typeChecked.map(i => checkedTypeIds.push(i.id))
		setCatalogDevices([...catalogDevices].filter(i => checkedTypeIds.includes(i.typeId)))
		if (!checkedTypeIds.length) {
			setCatalogDevices([...device.devices])
		}
	}, [typeChecked])

	useEffect(() => {
		let checkedBrandIds = []
		brandChecked.map(i => checkedBrandIds.push(i.id))
		setCatalogDevices([...catalogDevices].filter(i => checkedBrandIds.includes(i.typeId)))
		if (!checkedBrandIds.length) {
			setCatalogDevices([...device.devices])
		}
	}, [brandChecked])

	const variants = [
		{ id: 1, name: 'сначала Дешевле' },
		{ id: 2, name: 'сначала Дороже' },
	]

	const sortDevices = (id) => {
		switch (id) {
			case 1:
				setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price))
				break
			case 2:
				setCatalogDevices([...catalogDevices].sort((a, b) => a.price - b.price).reverse())
				break
			default:
				return catalogDevices
		}
	}
	const devicePrice = getPrice()
	const sortByPrice = (prices) => {
		if (!prices.defaultFrom && !prices.defaultTo) {
			setCancelVisible(false)
			return setCatalogDevices([...device.devices])
		} else {
			let pricesArr = []
			device.devices.map(i => pricesArr.push(i.price))
			pricesArr = pricesArr.filter(i => i >= prices.defaultFrom && i <= prices.defaultTo)
			setCatalogDevices([...catalogDevices].filter(i => pricesArr.includes(i.price)))
			setCancelVisible(true)
		}
	}




	function getPrice() {
		let priceArr = []
		catalogDevices.map(i => priceArr.push(i.price))
		let minPrice = Math.min.apply(null, priceArr)
		let maxPrice = Math.max.apply(null, priceArr)
		if (Number.isFinite(minPrice) && Number.isFinite(maxPrice)) {
			return { max: maxPrice, min: minPrice }
		} else
			return { max: 1, min: 0 }
	}
	const screenWidth = useScreenWidth()

	const [tileColor, setTileColor] = useState('#ABABAB')
	const [listColor, setListColor] = useState('#0C0C0C')
	const [catalogViewStatus, setCatalogViewStatus] = useState('list')

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

	const [showOffCanvas, setShowOffCanvas] = useState(false)
	const closeOffCanvas = () => setShowOffCanvas(false)
	const openOffCanvas = () => setShowOffCanvas(true)
	if (isLoading) {
		return <LoadingAnimation />
	}
	if (screenWidth <= 768) {
		return (
			<>
				<div onClick={() => openOffCanvas()} style={{ padding: '0 15px' }}>
					<div className='d-flex align-items-center justify-content-center' style={{ border: '1px dashed black', maxWidth: '120px', margin: '0 0 15px 0' }}>
						<div className='me-2' style={{ fontSize: '18px', fontWeight: '500' }}>Фильтр</div>
						<SVGFilterIcon />
					</div>
				</div>
				<Offcanvas show={showOffCanvas} onHide={closeOffCanvas} responsive="lg">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Фильтр</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<div style={{ margin: '0 75px 0 0', minWidth: '289px' }}>
							<FilterVariant sortDevices={sortDevices} filterVariants={variants} />
							<div style={{ backgroundColor: 'white', padding: 16, borderRadius: '8px', boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
								<FilterWithPrice cancelVisible={cancelVisible} sortByPrice={sortByPrice} from={devicePrice.min} to={devicePrice.max} />
								<FilterWithCheck checked={typeChecked} setChecked={setTypeChecked} style={{ margin: '0 0 20px 0' }} lable='Тип устройства' filterParams={device.types} />
								<FilterWithCheck checked={brandChecked} setChecked={setBrandChecked} style={{ margin: '0 0 20px 0' }} lable='Брэнд устройства' filterParams={device.brands} />
							</div>
						</div>
					</Offcanvas.Body>
				</Offcanvas>
				<div className='d-flex flex-column' style={{ padding: '0 15px' }}>
					{catalogDevices.map(i =>
						<DeviceAsList key={i.id} device={i} />
					)}
				</div>
			</>
		)
	}

	return (

		<div style={{ maxWidth: '1200px', margin: '0px auto', padding: '0 15px' }}>
			<div><DevicePageHeader breadCrumbs='Каталог' backText='Каталог' /></div>
			<div className='d-flex'>
				<div style={{ margin: '0 75px 0 0', minWidth: '289px' }}>
					<FilterVariant sortDevices={sortDevices} filterVariants={variants} />
					<div style={{ backgroundColor: 'white', padding: 16, borderRadius: '8px', boxShadow: '1px 1px 20px 0px rgba(0, 0, 0, 0.1)' }}>
						<FilterWithPrice cancelVisible={cancelVisible} sortByPrice={sortByPrice} from={devicePrice.min} to={devicePrice.max} />
						<FilterWithCheck checked={typeChecked} setChecked={setTypeChecked} style={{ margin: '0 0 20px 0' }} lable='Тип устройства' filterParams={device.types} />
						<FilterWithCheck checked={brandChecked} setChecked={setBrandChecked} style={{ margin: '0 0 20px 0' }} lable='Брэнд устройства' filterParams={device.brands} />
					</div>
				</div>
				<div className='d-flex flex-column' style={{ maxWidth: '860px' }} >
					<div className='d-flex justify-content-start' style={{ margin: '0 0 24px 0' }}>
						<div style={{ width: '66px' }} >
							<SVGTile onClick={() => tileClick()} color={tileColor} style={{ margin: '0 16px 0 0', cursor: 'pointer' }} />
							<SVGList onClick={() => listClick()} color={listColor} style={{ cursor: 'pointer' }} />
						</div>
					</div>
					{catalogViewStatus === 'tiles' ?
						<div>
							<BlueLine />
							<DevicesSlider style={{ margin: '0 0 24px 0' }} device={catalogDevices} slidesPerView={4} spaceBetween={16} />
						</div>
						:
						<div className='d-flex flex-column'>
							{catalogDevices.map(i =>
								<DeviceAsList key={i.id} device={i} />
							)}
						</div>
					}
				</div>
			</div>
		</div>

	)
})

