import React from 'react'
import SVGFilter from '../UI/icons/SVGFilter'
import Form from 'react-bootstrap/Form'

const FilterVariant = ({ sortDevices, filterVariants }) => {

	return (
		<div className='d-flex align-items-center' style={{ margin: '0 0 24px 0' }}>
			<div style={{ margin: '0 8px 0 0' }}><SVGFilter /></div>
			<div>
				<Form.Select onChange={e => sortDevices(e.target.value)}>
					{filterVariants.map(i =>
						<option
							key={i.id} value={i.id}>{i.name}</option>
					)}
				</Form.Select>
			</div>
		</div>
	)
}

export default FilterVariant