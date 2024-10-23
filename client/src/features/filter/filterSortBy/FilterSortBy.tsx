import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { SVGFilter } from 'shared/assets/icons'
export const FilterSortBy = ({ sortDevices, filterVariants }) => {
	const [selectedItem, setSelectedItem] = useState('')
	const selectAction = (id, name) => {
		setSelectedItem(name)
		sortDevices(id)
	}
	return (
		<div className='d-flex align-items-center' style={{ marginBottom: '1.5em' }}>
			<div style={{ marginRight: '0.5em' }}><SVGFilter /></div>
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

