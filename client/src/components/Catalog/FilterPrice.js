import React from 'react'
import FilterPriceItem from './FilterPriceItem'
import classes from './FilterPrice.module.css'
const FilterPrice = ({ from, to }) => {
	return (
		<div className='d-flex align-items-center'>
			<FilterPriceItem className={classes.pricesFirstElem} placeholder={`от ${from || 0} ₽ `} />
			<div className={classes.pricesMiddleLine}></div>
			<FilterPriceItem className={classes.pricesLastElem} placeholder={`до ${to || 1} ₽ `} />
		</div>
	)
}

export default FilterPrice