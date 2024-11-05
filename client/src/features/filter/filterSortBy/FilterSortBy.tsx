import { addSortByStatus } from 'entities/filter/model/filter.slice'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux'
import { SVGFilter } from 'shared/assets/icons'
import { sortVariants } from './consts'

export const FilterSortBy = () => {
	const [selectedItem, setSelectedItem] = useState('')
	const dispatch = useDispatch()

	type TSelectAction = (name: string, sortKey: 'default' | 'from cheaper' | 'from expensive') => void

	const selectAction: TSelectAction = (name, sortKey) => {
		setSelectedItem(name)
		dispatch(addSortByStatus(sortKey))

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

						{
							sortVariants.map(i =>
								<Dropdown.Item
									onClick={() => selectAction(i.name, i.sortKey)}
									key={i.id}
								>{i.name}</Dropdown.Item>
							)
						}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	)
}

