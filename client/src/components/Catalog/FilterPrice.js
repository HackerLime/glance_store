import React, { useState } from 'react'
import FilterPriceItem from './FilterPriceItem'
import classes from './FilterPrice.module.css'
import Button from 'react-bootstrap/esm/Button'
const FilterPrice = ({ from, to, sortByPrice }) => {
	const [prices, setPrices] = useState({ defaultFrom: 0, defaultTo: 0 })

	const searchAction = () => {
		sortByPrice(prices)
	}
	return (
		<div>
			<div className='d-flex align-items-center' style={{ margin: '0 0 10px 0' }} >
				<FilterPriceItem
					value={prices.defaultFrom}
					onChange={e => setPrices({ ...prices, defaultFrom: Number(e.target.value) })}
					className={classes.pricesFirstElem} placeholder={`от ${from || 0} ₽ `} />
				<div className={classes.pricesMiddleLine}></div>
				<FilterPriceItem
					value={prices.defaultTo}
					onChange={e => setPrices({ ...prices, defaultTo: Number(e.target.value) })}
					className={classes.pricesLastElem} placeholder={`до ${to || 1} ₽ `} />
			</div>
			<Button onClick={() => searchAction()}>Найти</Button>
		</div>
	)
}

export default FilterPrice