import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Context } from '../../../index'
import { observer } from 'mobx-react-lite';
const CreateDevice = observer(({ show, setShow }) => {

	const { device } = useContext(Context)
	const [info, setInfo] = useState([1, 2, 3])

	const hideModal = () => {
		setShow(false)
		device.setSelectedBrand({})
		device.setSelectedType({})
	}

	return (
		<Container>
			<Modal show={show} onHide={() => hideModal()}>
				<Modal.Header closeButton>
					<Modal.Title>новое Устройство</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Dropdown className='mb-2'>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							{device.selectedType.name || 'Выберите тип'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type =>
								<Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mb-2'>
						<Dropdown.Toggle variant="info" id="dropdown-basic">
							{device.selectedBrand.name || 'Выберите брэнд'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand =>
								<Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control className='mb-2' placeholder='Введите название' />
					<Form.Control className='mb-2' type='number' placeholder='Введите стоимость' />
					<Form.Control className='mb-3' type='file' />
					<Button className='mb-3' variant='outline-dark'>Добавить характеристики</Button>
					{info.map((i, idx) =>
						<Row key={idx} className='mb-2' >
							<Col ><Form.Control /></Col>
							<Col ><Form.Control /></Col>
							<Col md={3}><Button variant='danger'>Удалить</Button></Col>
						</Row>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-danger" onClick={() => hideModal()}>
						Закрыть
					</Button>
					<Button variant="outline-success" onClick={() => hideModal()}>
						Добавить
					</Button>
				</Modal.Footer>
			</Modal >
		</Container>
	)
})

export default CreateDevice