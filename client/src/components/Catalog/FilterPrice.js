import React, { useState } from 'react'
import FilterPriceItem from './FilterPriceItem'
import classes from './FilterPrice.module.css'
import Button from 'react-bootstrap/esm/Button'
const FilterPrice = ({ from, to, getPriceRange }) => {
	const [prices, setPrices] = useState({ from, to })

	const searchAction = (prices) => {
		getPriceRange(prices)
	}
	return (
		<div>
			<div className='d-flex align-items-center' style={{ margin: '0 0 10px 0' }} >
				<FilterPriceItem
					value={prices.from}
					onChange={e => setPrices({ ...prices, from: Number(e.target.value) })}
					className={classes.pricesFirstElem} placeholder={`от ${from || 0} ₽ `} />
				<div className={classes.pricesMiddleLine}></div>
				<FilterPriceItem
					value={prices.to}
					onChange={e => setPrices({ ...prices, to: Number(e.target.value) })}
					className={classes.pricesLastElem} placeholder={`до ${to || 1} ₽ `} />
			</div>
			<Button onClick={() => searchAction(prices)}>Найти</Button>
		</div>
	)
}

export default FilterPrice