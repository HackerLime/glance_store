import React, { useContext, useEffect, useState } from 'react'
import BasketEmpty from '../UI/basket/BasketEmpty'
import { Context } from '../../index'
import DeviceAsList from '../UI/device/deviceaslist/DeviceAsList'
import { SHOP_ROUTE } from '../../router/paths'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/esm/Image'
import lessThanImg from '../UI/icons/device/lessThan.svg'
import SVGDelete from '../UI/icons/remove/SVGDelete'
import Button from 'react-bootstrap/esm/Button'
import { observer } from 'mobx-react-lite'


const Basket = observer(() => {
	const { device } = useContext(Context)
	const [basketPrice, setBasketPrice] = useState(0)
	const [allChecked, setAllChecked] = useState(false)
	useEffect(() => {
		device.setBasketDevices([...device.devices])
	}, [])

	useEffect(() => {
		let arr = []
		device.basketDevicesData.map(i => arr.push(i.deviceId))
		device.setBasketDevices(device.basketDevices.filter(i => arr.includes(i.id)))
		device.basketDevices.forEach(i => i.isChecked = false)
	}, [])




	function getBasketPrice() {
		let counter = 0
		device.basketDevices.map(i => counter = counter + i.price)
		return counter
	}

	useEffect(() => {
		setBasketPrice(getBasketPrice(device.basketDevices))
	}, [device.basketDevices])


	const checkAll = (bool) => {
		setAllChecked(bool)
	}

	const destroyBasketDevice = (id) => {
		//!Надо прописать после fn AddBasketDevice
		console.log(`destroyBasketDevice,id=${id}`)
	}





	if (!device.basketDevices.length) {
		return <div><BasketEmpty /></div>
	}

	return (

		<div className='d-flex justify-content-center' style={{ maxWidth: '1200px', margin: '0px auto' }}>
			<div style={{ maxWidth: '892px', padding: '0 15px' }} className='d-flex flex-column'>
				{/* 	//!Надо Убрать в отдельный компонент */}
				<div style={{ marginBottom: '30px' }}>
					<div className='d-flex align-items-center' style={{ margin: '0 0 32px 0' }}><Link style={{ textDecoration: 'none', color: '#ABABAB', fontSize: '16' }} to={SHOP_ROUTE}>Главная /</Link><h2 style={{ fontSize: 14, lineHeight: '19px', color: '#838383' }}>Корзина</h2></div>
					<div className='d-flex align-items-center' style={{ maxWidth: 285 }}>
						<Link to={SHOP_ROUTE}><Image src={lessThanImg} style={{ width: 13, height: 26, margin: '0 20px 0 0' }} /></Link>
						<h6 style={{ color: 'rgb(12,12,12)', fontSize: 32, lineHeight: "38px", whiteSpace: 'nowrap' }} >Корзина</h6>
					</div>
				</div>
				{/* 	//!----------------*/}

				<div className='d-flex justify-content-between' style={{ marginBottom: '20px', userSelect: 'none' }}>
					<div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={() => console.log('Удаляю все')}>
						<div><SVGDelete /></div>
						<div>Удалить</div>
					</div>
					<div>
						<button onClick={() => device.basketDevices[0].isChecked = true} >Click</button>
					</div>
					<div className='d-flex'>
						<div>Выбрать всё</div>
						<div style={{ marginLeft: '10px' }}>
							<input checked={allChecked} onChange={e => checkAll(e.target.checked)}
								type='checkbox' style={{ height: '1.2rem', width: '1.2rem' }} />
						</div>
					</div>
				</div>
				<div style={{ marginBottom: '25px' }}>
					{device.basketDevices.map((i, idx) =>
						<DeviceAsList destroyAction={destroyBasketDevice} key={idx} device={i} isChecked={i.isChecked} basketDevices={device.basketDevices} />
					)
					}
				</div>
				<div style={{ borderTop: '1px solid rgb(193, 193, 193)', borderBottom: '1px solid rgb(193, 193, 193)', padding: '25px 0' }} className='d-flex flex-column align-items-center'>
					<div><span style={{ fontSize: '18px', color: 'rgb(69,69,69)' }}>Итого:</span></div>
					<div style={{ marginBottom: '20px' }} ><span style={{ fontSize: '18px', fontWeight: '500', color: 'rgb(12,12,12)' }}>{basketPrice} ₽</span></div>
					<Button>Оформить заказ</Button>
				</div>
			</div>
		</div>
	)
})

export default Basket