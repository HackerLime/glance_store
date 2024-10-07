import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const ShopCarousel = observer(() => {

	const [carouselItems, setCarouselItems] = useState([
		{ id: 1, title: 'Скидки', description: 'На весь ассортимент', img: 'https://resizer.mail.ru/p/f34aea96-8ef9-5dad-90eb-18d4d28ff196/AQAKvq191IIgMOi07mcoQkDlqAFawd8LedZBAEt0eES3jnhlUCj5WPNsbyxBjV-D5KtxkOAO5tTWbAnkuzN7lcW-cUk.jpg' },
		{ id: 2, title: 'Бонусы', description: 'С картой магазина', img: 'https://resizer.mail.ru/p/f34aea96-8ef9-5dad-90eb-18d4d28ff196/AQAKvq191IIgMOi07mcoQkDlqAFawd8LedZBAEt0eES3jnhlUCj5WPNsbyxBjV-D5KtxkOAO5tTWbAnkuzN7lcW-cUk.jpg' },
		{ id: 3, title: 'Рассрочка', description: '0-0-12', img: 'https://resizer.mail.ru/p/f34aea96-8ef9-5dad-90eb-18d4d28ff196/AQAKvq191IIgMOi07mcoQkDlqAFawd8LedZBAEt0eES3jnhlUCj5WPNsbyxBjV-D5KtxkOAO5tTWbAnkuzN7lcW-cUk.jpg' }
	])
	return (
		<Carousel style={{ margin: '0 auto 40px auto', maxWidth: 1200 }} variant='dark'>
			{carouselItems.map(item =>
				<Carousel.Item key={item.id} >
					<div style={{ objectFit: 'cover', objectPosition: 'center', background: `url(${item.img}) 50% no-repeat`, height: 260, margin: '0px auto', overflow: 'hidden' }}></div>
					<Carousel.Caption >
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</Carousel.Caption>
				</Carousel.Item>
			)}
		</Carousel  >
	)
})

export default ShopCarousel