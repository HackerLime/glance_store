import React from 'react'
import ShopCarousel from '../Carousel/ShopCarousel'
import Container from 'react-bootstrap/Container'
import ShopCatalog from '../Shop/ShopCatalog'
import ShopPromotions from '../Promotion/ShopPromotions'
import { observer } from 'mobx-react-lite'


const Shop = observer(() => {


	return (
		<Container >
			<ShopCarousel />
			<ShopCatalog />
			<ShopPromotions />
		</Container>
	)
})

export default Shop