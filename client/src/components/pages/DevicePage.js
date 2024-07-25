import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import DevicePageHeader from '../DevicePage/DevicePageHeader'
import DevicePageMain from '../DevicePage/DevicePageMain'
import DevicePageFooter from '../DevicePage/DevicePageFooter'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { fetchBrands, fetchOneDevice, fetchTypes } from '../../http/deviceAPI'
import { Context } from '../../index'
import LoadingAnimation from '../UI/loadingAnimation/LoadingAnimation'
const DevicePage = observer(() => {
	const store = useContext(Context)
	const deviceStore = store.device
	const [device, setDevice] = useState({ info: [] })
	const [brandName, setBrandName] = useState('')
	const [typeName, setTypeName] = useState('')
	const { id } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	/* 
		const brandName = deviceStore.brands.find(brand => brand.id === device.brandId).name
		const typeName = deviceStore.types.find(type => type.id === device.typeId).name
	*/

	useEffect(() => {
		fetchOneDevice(id).then(data => {
			setDevice(data)
		}).catch(e => `Ошибка fetchOneDevice ${e}`)
		fetchBrands()
			.then(data => {
				deviceStore.setBrands(data)
			})
			.catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes()
			.then(data => deviceStore.setTypes(data))
			.catch(e => console.log(`Ошибка fetchTypes ${e.message}`))

	}, [])


	useEffect(() => {
		if (deviceStore.brands.length && device.name) {
			setBrandName(deviceStore.brands.find(i => i.id === device.brandId).name)
		}
		if (deviceStore.types.length && device.name) {
			setTypeName(deviceStore.types.find(i => i.id === device.typeId).name)
			if (isLoading) {
				setIsLoading(false)
			}
		}
	}, [device])

	if (isLoading) {
		return <LoadingAnimation />
	}

	return (
		<div style={{ maxWidth: '1200px', margin: '0px auto', padding: '0 15px' }}>
			<div style={{ padding: '17px 0 20px 0' }}>
				<DevicePageHeader breadCrumbs='Карточка товара' backText='Карточка Товара' />
				<DevicePageMain brandName={brandName} typeName={typeName} device={device} />
				<DevicePageFooter />
			</div>
		</div>
	)
})

export default DevicePage