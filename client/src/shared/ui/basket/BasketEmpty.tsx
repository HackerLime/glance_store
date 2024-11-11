import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import { SVGBasketEmpty } from 'shared/assets/icons'
import { CATALOG_ROUTE } from 'shared/routerPaths'

export const BasketEmpty = () => {
	const navigate = useNavigate()
	return (
		<Container>
			<div className='d-flex flex-column align-items-center'>
				<h1 style={{ margin: '0 0 28px 0', fontWeight: 500, lineHeight: '23px', color: '#0C0C0C' }}>Ваша корзина пуста</h1>
				<SVGBasketEmpty style={{ margin: '0 0 28px 0' }} />
				<div style={{ margin: '0 0 28px 0', fontSize: '16px', lineHeight: '19px', color: '#454545' }} to={CATALOG_ROUTE} >Добавьте товары из каталога</div>
				<Button style={{ margin: '0 0 40px 0' }} onClick={() => navigate(CATALOG_ROUTE)}>Перейти в каталог</Button>
			</div>
		</Container>
	)
}

