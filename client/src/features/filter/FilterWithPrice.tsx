import FilterLabel from './FilterLabel'
import FilterPrice from './FilterPrice'

const FilterWithPrice = ({ from, to, sortByPrice, cancelVisible }) => {

	return (
		<div style={{ margin: '0 0 20px 0' }}>
			<div className='d-flex justify-content-between align-items-start'>
				<FilterLabel>Цена, ₽ </FilterLabel>
				{
					cancelVisible ?
						<div onClick={() => sortByPrice({ defaultFrom: 0, defaultTo: 0 })} style={{ lineHeight: '16px', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }} >Сбросить</div>
						:
						''
				}
			</div>
			<FilterPrice sortByPrice={sortByPrice} from={from} to={to} />
		</div>
	)
}

export default FilterWithPrice