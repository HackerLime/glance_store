import Container from 'react-bootstrap/Container'
import { ShopCarousel } from 'widgets/shopCarousel'
import { ShopCatalog } from 'widgets/shopCatalog'
import { ShopPromotions } from 'widgets/shopPromotions'

export const Shop = () => {


	return (
		<Container >
			<ShopCarousel />
			<ShopCatalog />
			<ShopPromotions />
		</Container>
	)
}

