import { FilterLabel } from '../../filterLabel'
import { FilterCheckItem } from './FilterCheckItem'

export const FilterWithCheck = ({ lable, filterParams, toggleAction }) => {

	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<FilterLabel>{lable} </FilterLabel>
			{filterParams.map(i =>
				<FilterCheckItem toggleAction={toggleAction} id={i.id} key={i.id}>{i.name}</FilterCheckItem>
			)}
		</div>
	)
}

