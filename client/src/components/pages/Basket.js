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
import { deleteBasketDevice, fetchBasketDevices } from '../../http/deviceAPI'
import LoadingAnimation from '../UI/loadingAnimation/LoadingAnimation'


const Basket = observer(() => {
	const { device, user } = useContext(Context)
	const [basketPrice, setBasketPrice] = useState(0)
	const [allChecked, setAllChecked] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		if (localStorage.getItem('token')) {
			fetchBasketDevices()
				.then(data => device.setBasketDevicesData(data))
				.catch(e => console.log(e))
				.finally(e => {
					device.setBasketDevices([...device.devices])
					let arr = []
					device.basketDevicesData.map(i => arr.push(i.deviceId))
					device.setBasketDevices(device.basketDevices.filter(i => arr.includes(i.id)))
					device.setBasketDevicesIsCheckedFalse()
					setIsLoading(false)
				}
				)
		}
	}, [device])

	useEffect(() => {
		device.isAllBasketDevicesChecked ? setAllChecked(true) : setAllChecked(false)
	}, [device.isAllBasketDevicesChecked])

	useEffect(() => {
		setBasketPrice(device.isCheckedBasketDevicesPrice)
	}, [device.isCheckedBasketDevicesPrice])

	const checkAll = (bool) => {
		setAllChecked(bool)
		if (bool) {
			device.setBasketDevicesIsCheckedTrue()
		} else {
			device.setBasketDevicesIsCheckedFalse()
		}
	}

	const destroyBasketDevice = (gettedDeviceId) => {
		console.log(Number.isInteger(gettedDeviceId))
		try {
			deleteBasketDevice(user.user.id, gettedDeviceId)
		} catch (e) {
			console.log(e)
		}
		if (Array.isArray(gettedDeviceId)) {
			device.setBasketDevices([...device.basketDevices].filter(i => !gettedDeviceId.includes(i.id)))
			device.setBasketDevicesData([...device.basketDevicesData].filter(i => !gettedDeviceId.includes(i.deviceId)))
			return
		}
		if (Number.isInteger(gettedDeviceId)) {
			device.setBasketDevices([...device.basketDevices].filter(i => i.id !== gettedDeviceId))
			device.setBasketDevicesData([...device.basketDevicesData].filter(i => i.deviceId !== gettedDeviceId))
		}
	}
	if (isLoading) {
		return <LoadingAnimation />
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

				<div className='d-flex align-items-center justify-content-between' style={{ marginBottom: '20px', userSelect: 'none' }}>
					{device.checkedBasketDevicesIds.length ?
						<div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={() => destroyBasketDevice(device.checkedBasketDevicesIds)}>
							<div><SVGDelete /></div>
							<div>Удалить</div>
						</div> :
						''
					}
					<div></div>
					<div className='d-flex' style={{ justifySelf: 'end' }}>
						<div>Выбрать всё</div>
						<div style={{ marginLeft: '10px' }}>
							<input checked={allChecked} onChange={e => checkAll(e.target.checked)}
								type='checkbox' style={{ height: '1.2rem', width: '1.2rem' }} />
						</div>
					</div>
				</div>
				<div style={{ marginBottom: '25px' }}>
					{device.basketDevices.map((i, idx) =>
						<DeviceAsList destroyAction={destroyBasketDevice} key={idx} device={i} isChecked={i.isChecked} />
					)
					}
				</div>
				{
					basketPrice ?
						<div style={{ borderTop: '1px solid rgb(193, 193, 193)', borderBottom: '1px solid rgb(193, 193, 193)', padding: '25px 0' }} className='d-flex flex-column align-items-center'>
							<div><span style={{ fontSize: '18px', color: 'rgb(69,69,69)' }}>Итого:</span></div>
							<div style={{ marginBottom: '20px' }} ><span style={{ fontSize: '18px', fontWeight: '500', color: 'rgb(12,12,12)' }}>{basketPrice} ₽</span></div>
							<Button>Оформить заказ</Button>
						</div>
						:
						''
				}
			</div>
		</div>
	)
})

export default Basket