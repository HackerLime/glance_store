import FilterCheckItem from './FilterCheckItem'
import FilterLabel from './FilterLabel'

const FilterWithCheck = ({ lable, filterParams, setChecked, checked }) => {

	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<FilterLabel>{lable} </FilterLabel>
			{filterParams.map(i =>
				<FilterCheckItem checked={checked} setChecked={setChecked} id={i.id} key={i.id}>{i.name}</FilterCheckItem>
			)}
		</div>
	)
}

export default FilterWithCheck