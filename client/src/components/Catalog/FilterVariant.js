import React from 'react'
import SVGFilter from '../UI/icons/SVGFilter'
import Form from 'react-bootstrap/Form'

const FilterVariant = () => {
	const variants = [
		{ id: 1, name: 'Популярные' },
		{ id: 2, name: 'Дороже' },
		{ id: 3, name: 'Дешевле' },
		{ id: 4, name: 'Выгодные' },
	]
	return (
		<div className='d-flex align-items-center' style={{ margin: '0 0 24px 0' }}>
			<div style={{ margin: '0 8px 0 0' }}><SVGFilter /></div>
			<div>
				<Form.Select>
					{variants.map(i =>
						<option key={i.id} value={i.id}>{i.name}</option>
					)}
				</Form.Select>
			</div>
		</div>
	)
}

export default FilterVariant