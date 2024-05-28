import React from 'react'
import FilterLabel from './FilterLabel'
import FilterCheckItem from './FilterCheckItem'

const FilterWithCheck = ({ lable, filterParams }) => {
	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<FilterLabel>{lable} </FilterLabel>
			{filterParams.map(i =>
				<FilterCheckItem id={i.id} key={i.id}>{i.name}</FilterCheckItem>
			)}
		</div>
	)
}

export default FilterWithCheck