import Container from 'react-bootstrap/Container'
import ShopCarousel from '../Carousel/ShopCarousel'
import ShopPromotions from '../Promotion/ShopPromotions'
import ShopCatalog from '../Shop/ShopCatalog'
export const Shop = () => {

	return (
		<Container >
			<ShopCarousel />
			<ShopCatalog />
			<ShopPromotions />
		</Container>
	)
}

