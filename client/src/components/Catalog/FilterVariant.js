import React, { useState } from 'react'
import SVGFilter from '../UI/icons/SVGFilter'
import Dropdown from 'react-bootstrap/Dropdown'
const FilterVariant = ({ sortDevices, filterVariants }) => {
	const [selectedItem, setSelectedItem] = useState('')
	const selectAction = (id, name) => {
		setSelectedItem(name)
		sortDevices(id)
	}
	return (
		<div className='d-flex align-items-center' style={{ margin: '0 0 24px 0' }}>
			<div style={{ margin: '0 8px 0 0' }}><SVGFilter /></div>
			<div>
				<Dropdown
				>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						{selectedItem || 'Упорядочить'}
					</Dropdown.Toggle>
					<Dropdown.Menu
					>
						{filterVariants.map(i =>
							<Dropdown.Item
								onClick={e => selectAction(i.id, i.name)}
								key={i.id} value={i.id} >{i.name}</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	)
}

export default FilterVariant