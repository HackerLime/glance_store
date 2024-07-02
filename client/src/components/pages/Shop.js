import React, { useContext, useEffect } from 'react'
import ShopCarousel from '../Carousel/ShopCarousel'
import Container from 'react-bootstrap/Container'
import ShopCatalog from '../Shop/ShopCatalog'
import ShopPromotions from '../Promotion/ShopPromotions'
import { observer } from 'mobx-react-lite'
import { fetchBasketDevices, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import { Context } from '../../index'

const Shop = observer(() => {
	const { device } = useContext(Context)
	useEffect(() => {
		fetchBrands().then(data => device.setBrands(data)).catch(e => console.log(`Ошибка fetchBrands ${e.message}`))
		fetchTypes().then(data => device.setTypes(data)).catch(e => console.log(`Ошибка fetchTypes ${e.message}`))
		fetchDevices().then(data => device.setDevices(data.rows)).catch(e => console.log(`Ошибка fetchDevices ${e.message}`))
		if (localStorage.getItem('token')) {
			fetchBasketDevices().then(data => device.setBasketDevicesData(data)).catch(e => console.log(e))
		}
	}, [])

	return (
		<Container >
			<ShopCarousel />
			<ShopCatalog />
			<ShopPromotions />
		</Container>
	)
})

export default Shop