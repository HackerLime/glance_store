import React from 'react'
import BasketEmpty from '../UI/basket/BasketEmpty'
import { observer } from 'mobx-react-lite'

const Basket = observer(() => {
	return (

		<div><BasketEmpty /></div>
	)
})

export default Basket