import React from 'react'
import FilterLabel from './FilterLabel'
import FilterPrice from './FilterPrice'

const FilterWithPrice = ({ from, to }) => {
	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<FilterLabel>Цена, ₽ </FilterLabel>
			<FilterPrice from={from} to={to} />
		</div>
	)
}

export default FilterWithPrice