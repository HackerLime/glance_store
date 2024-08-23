import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useCheckToken } from '../../hooks/useCheckToken'
import { fetchBasketDevices, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI'
import { Context } from '../../index'
import ShopCarousel from '../Carousel/ShopCarousel'
import ShopPromotions from '../Promotion/ShopPromotions'
import ShopCatalog from '../Shop/ShopCatalog'
const Shop = observer(() => {
	const { device } = useContext(Context)

	useEffect(() => {
		useCheckToken()
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