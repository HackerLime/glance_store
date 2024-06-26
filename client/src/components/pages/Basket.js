import React, { useContext, useEffect, useMemo, useState } from 'react'
import BasketEmpty from '../UI/basket/BasketEmpty'
import { Context } from '../../index'
import DeviceAsList from '../UI/device/deviceaslist/DeviceAsList'
import Container from 'react-bootstrap/esm/Container'




const Basket = () => {
	const { device } = useContext(Context)
	const [basketState, setBasketState] = useState([...device.devices])

	useEffect(() => {
		let arr = []
		device.basketDevices.map(i => arr.push(i.deviceId))
		setBasketState(basketState.filter(i => arr.includes(i.id)))
	}, [])
	const destroyBasketDevice = (id) => {
		//!Надо прописать после fn AddBasketDevice
		console.log(`destroyBasketDevice,id=${id}`)
	}

	if (!basketState.length) {
		return <div><BasketEmpty /></div>
	}

	return (

		<div className='d-flex justify-content-center' style={{ maxWidth: '1200px', margin: '0px auto' }}>
			<div style={{ maxWidth: '892px' }} className='d-flex flex-column'>
				{basketState.map((i, idx) =>
					<DeviceAsList destroyAction={destroyBasketDevice} key={idx} device={i} />
				)
				}
			</div>
		</div>
	)
}

export default Basket