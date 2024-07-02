import React, { useContext } from 'react'
import SVGBasketEmpty from '../icons/basket/SVGBasketEmpty'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../../router/paths'
import MyButton from '../buttons/DeviceButton'
import BlueLine from '../lines/BlueLine'
import DevicesSlider from '../slider/DevicesSlider'
import { Context } from '../../../index'
const BasketEmpty = () => {
	const { device } = useContext(Context)
	const navigate = useNavigate()
	return (
		<Container>
			<div className='d-flex flex-column align-items-center'>
				<h1 style={{ margin: '0 0 28px 0', fontWeight: 500, lineHeight: '23px', color: '#0C0C0C' }}>Ваша корзина пуста</h1>
				<SVGBasketEmpty style={{ margin: '0 0 28px 0' }} />
				<div style={{ margin: '0 0 28px 0', fontSize: '16px', lineHeight: '19px', color: '#454545' }} to={CATALOG_ROUTE} >Добавьте товары из каталога</div>
				<MyButton style={{ margin: '0 0 40px 0' }} onClick={() => navigate(CATALOG_ROUTE)}>Перейти в каталог</MyButton>
				{device.devices.length ?
					<div>
						<h2 style={{ margin: '0 0 24px 0', textAlign: 'center' }}>Вам может понравится</h2>
						<div style={{ maxWidth: '1200px', margin: '0px auto' }}>
							<BlueLine />
							<DevicesSlider style={{ margin: '0 0 24px 0' }} device={device.devices} slidesPerView={5.5} spaceBetween={16} />
						</div>
					</div>
					:
					''
				}
			</div>

		</Container>
	)
}

export default BasketEmpty