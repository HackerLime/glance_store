import React, { useContext, useEffect, useMemo, useState } from 'react'
import BasketEmpty from '../UI/basket/BasketEmpty'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { fetchBasketDevices } from '../../http/deviceAPI'
import { jwtDecode } from 'jwt-decode'



const Basket = observer(() => {
	const { device } = useContext(Context)
	const [basketDevices, setBasketDevices] = useState([...device.devices])
	useEffect(() => {
		fetchBasketDevices().then(data => device.setBasketDevices(data)).catch(e => console.log(e))
	}, [])

	const myBasketDevices = () => {
		let arr = []
		device.basketDevices.map(i => arr.push(i.deviceId))
		setBasketDevices(basketDevices.filter(i => arr.includes(i.id)))

	}
	useEffect(() => {
		myBasketDevices()
	}, [])
	console.log(basketDevices)

	if (!basketDevices.length) {
		return <div><BasketEmpty /></div>
	}

	return (

		<div>asas</div>
	)
})

export default Basket